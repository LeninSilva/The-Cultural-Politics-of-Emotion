/* EPUB importer for Ahmed, The Cultural Politics of Emotion (2nd ed.).
 * Runs entirely in the browser (and in Node for tests). The book text is never
 * uploaded anywhere: it is parsed locally and cached in the browser's IndexedDB.
 */
(function (root) {
  'use strict';

  var ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
  function decodeEntities(s) {
    return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, function (m, e) {
      if (e[0] === '#') {
        var code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return String.fromCodePoint(code);
      }
      return ENT.hasOwnProperty(e.toLowerCase()) ? ENT[e.toLowerCase()] : m;
    });
  }
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Convert calibre inline markup into a small safe subset: <i>, <b>, and
   * footnote markers <sup class="fn" data-n="N">N</sup>. */
  function cleanInline(html) {
    // footnote markers: <sup ...><small ...><a href="#x"><span ..>N</span></a></small></sup>
    html = html.replace(/<sup\b[^>]*>\s*<small\b[^>]*>([\s\S]*?)<\/small>\s*<\/sup>/gi, function (m, inner) {
      var n = inner.replace(/<[^>]+>/g, '').trim();
      return /^\d+$/.test(n) ? '\u0001FN' + n + '\u0002' : '';
    });
    // spans: keep italic/bold semantics via a stack so nesting stays balanced
    var out = '', stack = [], re = /<(\/?)span\b([^>]*)>|<(\/?)(i|em|b|strong)\b[^>]*>|<[^>]+>|[^<]+/gi, m;
    while ((m = re.exec(html))) {
      if (m[0][0] !== '<') { out += m[0]; continue; }
      if (m[1] !== undefined && /^<\/?span/i.test(m[0])) {
        if (m[1] === '') {
          var attrs = m[2] || '';
          if (/class="[^"]*italic[^"]*"/i.test(attrs)) { out += '<i>'; stack.push('</i>'); }
          else if (/class="[^"]*bold[^"]*"/i.test(attrs)) { out += '<b>'; stack.push('</b>'); }
          else stack.push('');
        } else out += stack.pop() || '';
      } else if (m[4]) {
        var t = m[4].toLowerCase(); t = t === 'em' ? 'i' : t === 'strong' ? 'b' : t;
        out += '<' + (m[3] ? '/' : '') + t + '>';
      }
      // every other tag (a, small, br, ...) is dropped
    }
    while (stack.length) out += stack.pop();
    out = out.replace(/\u0001FN(\d+)\u0002/g, '<sup class="fn" data-n="$1">$1</sup>');
    out = out.replace(/<i>\s*<\/i>/g, '');
    return out.replace(/\s+/g, ' ').trim();
  }
  function plain(html) { return decodeEntities(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim(); }

  function parseChapterFile(src) {
    var bodyMatch = src.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    var body = bodyMatch ? bodyMatch[1] : src;
    var re = /<(p|blockquote|table)\b([^>]*)>([\s\S]*?)<\/\1>/gi, m, blocks = [];
    while ((m = re.exec(body))) {
      var cls = (m[2].match(/class="([^"]*)"/) || [, ''])[1];
      blocks.push({ tag: m[1].toLowerCase(), cls: cls, inner: m[3] });
    }
    var res = { kicker: '', title: '', titleNote: null, sections: [], notes: [] };
    var cur = { title: '', paras: [] };
    res.sections.push(cur);
    var inNotes = false;
    blocks.forEach(function (b) {
      if (b.tag === 'table') {
        if (!inNotes) return;
        var rowRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi, r;
        while ((r = rowRe.exec(b.inner))) {
          var tds = r[1].match(/<td\b[^>]*>[\s\S]*?<\/td>/gi) || [];
          if (tds.length < 2) continue;
          var num = parseInt(plain(tds[0]).replace(/\D/g, ''), 10);
          if (!isNaN(num)) res.notes.push({ n: num, html: cleanInline(tds[1].replace(/^<td\b[^>]*>|<\/td>$/gi, '')) });
        }
        return;
      }
      var text = plain(b.inner);
      if (!text) return;
      if (b.cls === 'calibre_8' && b.tag === 'p') {
        res.kicker = text; res.title = res.title || text; return;
      }
      if (b.cls === 'calibre_4' && b.tag === 'p') { res.title = text; return; }
      if (b.cls === 'calibre_21' && b.tag === 'p') {
        if (/^NOTES$/i.test(text)) { inNotes = true; return; }
        cur = { title: text, paras: [] };
        res.sections.push(cur);
        return;
      }
      if (inNotes) return;
      var kind = b.tag === 'blockquote' ? 'quote' : 'p';
      cur.paras.push({ kind: kind, html: cleanInline(b.inner) });
    });
    // epigraph: the first blockquote before any section heading
    var first = res.sections[0];
    if (first.paras.length && first.paras[0].kind === 'quote') first.paras[0].kind = 'epigraph';
    // title footnote (e.g. Afterword title carries a note marker)
    var tn = res.title.match(/^(.*?\D)(\d+)$/);
    if (tn && /Afterword/i.test(res.title)) { res.title = tn[1].trim(); res.titleNote = parseInt(tn[2], 10); }
    res.sections = res.sections.filter(function (s, i) { return s.paras.length || i > 0; });
    return res;
  }

  function parseReferences(src) {
    var body = (src.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [, src])[1];
    var re = /<p\b[^>]*>([\s\S]*?)<\/p>/gi, m, refs = [];
    while ((m = re.exec(body))) {
      var h = cleanInline(m[1]);
      var t = plain(h);
      if (t && !/^References$/i.test(t) && /\(\d{4}[a-z]?\)|\d{4}/.test(t)) refs.push({ html: h, text: t });
    }
    return refs;
  }

  function unitIdFor(label) {
    var l = label.trim();
    if (/^Introduction/i.test(l)) return 'intro';
    var n = l.match(/^(\d)\s/);
    if (n) return 'ch' + n[1];
    if (/^Conclusion/i.test(l)) return 'conclusion';
    if (/^Afterword/i.test(l)) return 'afterword';
    if (/^References/i.test(l)) return 'references';
    return null;
  }

  async function parse(arrayBuffer, JSZipLib) {
    var JSZip = JSZipLib || root.JSZip;
    var zip = await JSZip.loadAsync(arrayBuffer);
    var names = Object.keys(zip.files);
    var ncxName = names.filter(function (n) { return /toc\.ncx$/i.test(n); })[0];
    if (!ncxName) throw new Error('This does not look like the expected EPUB (no table of contents found).');
    var ncx = await zip.file(ncxName).async('string');
    var base = ncxName.replace(/[^/]*$/, '');
    var navs = [], nre = /<navPoint[\s\S]*?<text>([\s\S]*?)<\/text>[\s\S]*?<content\s+src="([^"#]*)(?:#[^"]*)?"/gi, m;
    while ((m = nre.exec(ncx))) navs.push({ label: decodeEntities(m[1]).trim(), file: m[2] });
    var units = [], refs = [], seen = {};
    for (var i = 0; i < navs.length; i++) {
      var id = unitIdFor(navs[i].label);
      if (!id || seen[id]) continue;
      seen[id] = true;
      var f = zip.file(base + navs[i].file) || zip.file(navs[i].file);
      if (!f) continue;
      var src = await f.async('string');
      if (id === 'references') { refs = parseReferences(src); continue; }
      var u = parseChapterFile(src);
      u.id = id;
      u.tocLabel = navs[i].label;
      u.sections.forEach(function (s, si) {
        s.id = id + '-s' + si;
        s.paras.forEach(function (p, pi) { p.id = id + '-p' + si + '-' + pi; });
      });
      u.wordCount = u.sections.reduce(function (a, s) {
        return a + s.paras.reduce(function (b, p) { return b + plain(p.html).split(/\s+/).length; }, 0);
      }, 0);
      units.push(u);
    }
    if (!units.length) throw new Error('Could not find any chapters in this file.');
    return { version: 3, units: units, references: refs, importedAt: Date.now() };
  }

  var api = { parse: parse, plain: plain, cleanInline: cleanInline, parseChapterFile: parseChapterFile };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.EpubParser = api;
})(typeof window !== 'undefined' ? window : globalThis);
