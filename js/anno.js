/* Text decoration layer: scholar-note anchors, glossary links, user highlights, search hits.
   All decorations only WRAP existing text (never add or remove characters), so character offsets
   computed on a paragraph's textContent stay valid no matter which layers are applied. */
(function () {
  'use strict';
  var CP = window.CP, A = CP.anno = {};

  /* ---------- DOM range helpers ---------- */
  function textNodes(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), out = [], n;
    while ((n = w.nextNode())) out.push(n);
    return out;
  }
  A.wrap = function (el, start, end, make) {
    if (end <= start) return [];
    var nodes = textNodes(el), pos = 0, made = [];
    nodes.forEach(function (n) {
      var len = n.nodeValue.length, a = Math.max(start, pos), b = Math.min(end, pos + len);
      if (b > a) {
        var r = document.createRange(); r.setStart(n, a - pos); r.setEnd(n, b - pos);
        var w = make(); r.surroundContents(w); made.push(w);
      }
      pos += len;
    });
    return made;
  };
  A.offsetIn = function (el, node, off) {
    var r = document.createRange(); r.selectNodeContents(el); r.setEnd(node, off); return r.toString().length;
  };
  function squash(s) { return s.replace(/[‘’‛]/g, "'").replace(/[“”]/g, '"').replace(/ /g, ' '); }
  A.squash = squash;

  /* ---------- alias engine (auto-linking of glossary terms & thinkers) ---------- */
  var aliasCache = null;
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  A.aliases = function () {
    if (aliasCache) return aliasCache;
    var items = [];
    CP.termList.forEach(function (t) { (t.auto || []).forEach(function (a) { items.push({ a: a, id: t.id, kind: 'term' }); }); });
    CP.peopleList.forEach(function (p) { (p.auto || []).forEach(function (a) { items.push({ a: a, id: p.id, kind: 'person' }); }); });
    items.sort(function (x, y) { return y.a.length - x.a.length; });
    var map = {};
    items.forEach(function (i) { map[i.a.toLowerCase()] = i; });
    var re = items.length ? new RegExp('(?<![\\p{L}\\p{N}_])(' + items.map(function (i) { return esc(i.a); }).join('|') + ')(?![\\p{L}\\p{N}_])', 'giu') : null;
    return (aliasCache = { re: re, map: map });
  };
  /* ranges of first-occurrence aliases in text, skipping ids already in `seen` */
  A.findAliases = function (text, seen, onlyKinds) {
    var al = A.aliases(), out = [], m;
    if (!al.re) return out;
    al.re.lastIndex = 0;
    var t = squash(text);
    while ((m = al.re.exec(t))) {
      var it = al.map[m[1].toLowerCase()];
      if (!it || (onlyKinds && onlyKinds.indexOf(it.kind) < 0)) continue;
      var key = it.kind + ':' + it.id;
      // person aliases are matched case-sensitively and exactly as authored (avoid "butler" the occupation, etc.)
      if (it.kind === 'person' && m[1] !== it.a) continue;
      if (seen[key]) continue;
      seen[key] = 1;
      out.push({ start: m.index, end: m.index + m[1].length, kind: it.kind, id: it.id });
    }
    return out;
  };

  /* Link glossary terms and thinkers inside already-rendered authored prose (guide, drawers). */
  A.linkProse = function (root) {
    CP.$$('.rich, .prose', root).forEach(function (blk) {
      if (blk.dataset.linked) return; blk.dataset.linked = 1;
      var seen = {};
      textNodes(blk).forEach(function (n) {
        if (n.parentNode.closest && n.parentNode.closest('a, .term-link, .person-link, button')) return;
        var txt = n.nodeValue, ranges = A.findAliases(txt, seen);
        if (!ranges.length) return;
        var frag = document.createDocumentFragment(), pos = 0;
        ranges.forEach(function (r) {
          frag.appendChild(document.createTextNode(txt.slice(pos, r.start)));
          var a = document.createElement('a');
          a.className = r.kind === 'term' ? 'term-link' : 'person-link';
          a.setAttribute(r.kind === 'term' ? 'data-term' : 'data-person', r.id);
          a.href = '#/' + (r.kind === 'term' ? 'terms/' : 'people/') + r.id;
          a.textContent = txt.slice(r.start, r.end);
          frag.appendChild(a); pos = r.end;
        });
        frag.appendChild(document.createTextNode(txt.slice(pos)));
        n.parentNode.replaceChild(frag, n);
      });
    });
  };

  /* ---------- annotations store ---------- */
  A.forPara = function (pid) { return CP.store.anns().filter(function (a) { return a.para === pid; }); };
  A.add = function (rec) {
    rec.id = CP.uid(); rec.ts = Date.now();
    var all = CP.store.anns(); all.push(rec); CP.store.saveAnns(all); return rec;
  };
  A.update = function (id, patch) {
    var all = CP.store.anns(); all.forEach(function (a) { if (a.id === id) Object.assign(a, patch); }); CP.store.saveAnns(all);
  };
  A.remove = function (id) { CP.store.saveAnns(CP.store.anns().filter(function (a) { return a.id !== id; })); };
  A.get = function (id) { return CP.store.anns().filter(function (a) { return a.id === id; })[0]; };

  /* ---------- paragraph decoration ---------- */
  /* ctx = { cache: {pid: {terms, glosses}}, seen: {}, glossMap: {pid: [{start,end,key}]}, hits: [RegExp] } */
  A.decorate = function (el, pid, ctx, opts) {
    var text = el.textContent, c = ctx.cache[pid];
    if (!c) {
      c = ctx.cache[pid] = { terms: A.findAliases(text, ctx.seen, ['term', 'person']) };
    }
    // 1. scholar-note anchors
    (ctx.glossMap[pid] || []).forEach(function (g) {
      A.wrap(el, g.start, g.end, function () { var s = document.createElement('span'); s.className = 'gloss'; s.setAttribute('data-gloss', g.key); s.tabIndex = 0; s.setAttribute('role', 'button'); return s; });
    });
    // 2. glossary links
    c.terms.forEach(function (r) {
      A.wrap(el, r.start, r.end, function () {
        var s = document.createElement('span'); s.className = r.kind === 'term' ? 'term-link' : 'person-link';
        s.setAttribute(r.kind === 'term' ? 'data-term' : 'data-person', r.id); s.tabIndex = 0; s.setAttribute('role', 'button'); return s;
      });
    });
    // 3. user highlights & notes
    var anns = A.forPara(pid), hasPara = false;
    anns.forEach(function (a) {
      if (a.whole) { hasPara = true; return; }
      if (a.end > text.length) return;
      var made = A.wrap(el, a.start, a.end, function () {
        var s = document.createElement('span'); s.className = 'hl c-' + (a.color || 'none') + (a.note ? ' has-note' : ''); s.setAttribute('data-ann', a.id); return s;
      });
      if (a.note && made[0]) made[0].title = a.note.slice(0, 140);
    });
    el.classList.toggle('has-note', hasPara);
    // 4. search hits
    if (ctx.hits && ctx.hits.length) {
      var t2 = squash(text).toLowerCase();
      ctx.hits.forEach(function (h) {
        var i = 0, idx;
        while ((idx = t2.indexOf(h, i)) >= 0) {
          A.wrap(el, idx, idx + h.length, function () { var m = document.createElement('mark'); m.className = 'hit'; return m; });
          i = idx + h.length;
        }
      });
    }
  };

  /* match authored scholar notes to paragraphs of a section */
  A.assignGlosses = function (unitId, secIdx, paras) {
    var c = CP.units[unitId], sec = c && c.sections && c.sections[secIdx], map = {}, missing = [];
    ((sec && sec.glosses) || []).forEach(function (g, i) {
      var q = squash(g.q).toLowerCase(), found = false;
      for (var k = 0; k < paras.length && !found; k++) {
        var t = squash(CP.plain(paras[k].html)).toLowerCase(), idx = t.indexOf(q);
        if (idx >= 0) {
          // offsets must be computed against the DOM textContent, which matches CP.plain except for entity decoding
          (map[paras[k].id] = map[paras[k].id] || []).push({ start: idx, end: idx + q.length, key: unitId + ':' + secIdx + ':' + i, order: i });
          found = true;
        }
      }
      if (!found) missing.push(g.q);
    });
    return { map: map, missing: missing };
  };
})();
