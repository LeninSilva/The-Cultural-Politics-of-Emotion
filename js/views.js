/* Views: shared block renderer, drawers (terms, thinkers), unit overview and the section study page. */
(function () {
  'use strict';
  var CP = window.CP, $ = CP.$, $$ = CP.$$, esc = CP.esc, rich = CP.rich, V = CP.views = {};

  /* ---------- helpers ---------- */
  V.chips = function (ids, kind) {
    return (ids || []).map(function (id) {
      if (kind === 'term') { var t = CP.terms[id]; return t ? '<a class="chip term" data-term="' + id + '" href="#/terms/' + id + '">' + esc(t.name) + '</a>' : ''; }
      var p = CP.people[id]; return p ? '<a class="chip person" data-person="' + id + '" href="#/people/' + id + '">' + esc(p.name) + '</a>' : '';
    }).join('');
  };
  V.unitChips = function (ids) {
    return (ids || []).map(function (id) { var m = CP.unitMeta(id); return m ? '<a class="chip" href="#/u/' + id + '">' + esc(m.kicker.replace('Chapter ', 'Ch. ')) + ' · ' + esc(m.short) + '</a>' : ''; }).join('');
  };
  V.list = function (arr, cls) { return '<ul class="' + (cls || '') + '">' + (arr || []).map(function (x) { return '<li class="rich">' + rich(x) + '</li>'; }).join('') + '</ul>'; };
  V.questions = function (qs) { return qs && qs.length ? '<ol class="qlist">' + qs.map(function (q) { return '<li class="rich">' + rich(q) + '</li>'; }).join('') + '</ol>' : ''; };
  V.moves = function (ms) {
    return ms && ms.length ? '<ol class="moves">' + ms.map(function (m) { return '<li><div><b class="rich">' + rich(m.h) + '</b><p class="rich">' + rich(m.p) + '</p></div></li>'; }).join('') + '</ol>' : '';
  };
  V.callout = function (kind, title, html, tag) {
    return '<div class="callout ' + kind + '"><h4>' + esc(title) + '</h4>' + html + (tag ? '<p class="tag">' + esc(tag) + '</p>' : '') + '</div>';
  };
  V.diagrams = function (c) {
    var arr = c.diagrams || (c.diagram ? [c.diagram] : []);
    return arr.map(function (d) { return CP.D.figure(d); }).join('');
  };
  V.pagerHtml = function (prev, next) {
    return '<nav class="pager" aria-label="Previous and next">' +
      (prev ? '<a class="prev" href="#/' + prev.route + '"><small>← Previous</small><b>' + esc(prev.label) + '</b><div class="muted small">' + esc(prev.sub || '') + '</div></a>' : '<span></span>') +
      (next ? '<a class="next" href="#/' + next.route + '"><small>Next →</small><b>' + esc(next.label) + '</b><div class="muted small">' + esc(next.sub || '') + '</div></a>' : '') + '</nav>';
  };

  /* Generic authored blocks (primer pages, extra material) */
  V.blocks = function (blocks) {
    return (blocks || []).map(function (b) {
      if (b.h) return '<h3 class="rich">' + rich(b.h) + '</h3>';
      if (b.p) return '<p class="rich">' + rich(b.p) + '</p>';
      if (b.lede) return '<p class="lede rich">' + rich(b.lede) + '</p>';
      if (b.list) return V.list(b.list, 'qlist');
      if (b.diagram) return CP.D.figure(b.diagram);
      if (b.callout) return V.callout(b.callout.kind || '', b.callout.h, '<p class="rich">' + rich(b.callout.p) + '</p>', b.callout.tag);
      if (b.cards) return '<div class="grid g3">' + b.cards.map(function (c) { return '<div class="card"><h3 class="rich">' + rich(c.h) + '</h3><p class="rich prose">' + rich(c.p) + '</p></div>'; }).join('') + '</div>';
      if (b.terms) return '<div class="grid g2">' + b.terms.map(function (id) { var t = CP.terms[id]; return t ? '<div class="card"><h3><a class="term-link" data-term="' + id + '" href="#/terms/' + id + '">' + esc(t.name) + '</a></h3><p class="prose">' + rich(t.short) + '</p></div>' : ''; }).join('') + '</div>';
      if (b.people) return '<div class="grid g2">' + b.people.map(function (id) { var t = CP.people[id]; return t ? '<div class="card"><h3><a class="person-link" data-person="' + id + '" href="#/people/' + id + '">' + esc(t.name) + '</a> <span class="muted small">' + esc(t.dates || '') + '</span></h3><p class="prose">' + rich(t.one) + '</p></div>' : ''; }).join('') + '</div>';
      if (b.table) return '<div style="overflow-x:auto"><table class="table-list"><thead><tr>' + b.table.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' + b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td class="rich">' + rich(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      if (b.questions) return '<h3>Questions to carry with you</h3>' + V.questions(b.questions);
      if (b.fold) return '<details class="fold"><summary>' + esc(b.fold.h) + '</summary><div class="rich prose">' + rich(b.fold.p) + '</div></details>';
      return '';
    }).join('');
  };

  /* ---------- drawers ---------- */
  V.termHtml = function (t) {
    var uses = (t.units || []).length ? '<h4>Where it works hardest</h4><div class="chips">' + V.unitChips(t.units) + '</div>' : '';
    return '<div class="defn rich">' + rich(t.short) + '</div>' +
      (t.long ? '<h4>In plain words</h4><div class="prose rich">' + t.long.split('\n\n').map(function (p) { return '<p>' + rich(p) + '</p>'; }).join('') + '</div>' : '') +
      (t.ahmed ? '<h4>How Ahmed uses it — the most charitable reading</h4><div class="prose rich"><p>' + rich(t.ahmed) + '</p></div>' : '') +
      (t.genealogy ? '<h4>Where it comes from</h4><div class="prose rich"><p>' + rich(t.genealogy) + '</p></div>' : '') +
      (t.example ? '<h4>A concrete example</h4><div class="prose rich"><p>' + rich(t.example) + '</p></div>' : '') +
      (t.misread ? '<h4>Easy to get wrong</h4><div class="prose rich"><p>' + rich(t.misread) + '</p></div>' : '') +
      uses +
      (t.related && t.related.length ? '<h4>Related terms</h4><div class="chips">' + V.chips(t.related, 'term') + '</div>' : '') +
      (t.people && t.people.length ? '<h4>Thinkers in the background</h4><div class="chips">' + V.chips(t.people, 'person') + '</div>' : '') +
      (t.questions && t.questions.length ? '<h4>Questions to ask</h4>' + V.questions(t.questions) : '') +
      '<p style="margin-top:1.4rem"><a class="btn sm ghost" href="#/terms/' + t.id + '" data-drawer-close>Open full entry</a> <button type="button" class="btn sm ghost" data-find="' + esc(t.name) + '">Find in the book</button></p>';
  };
  V.openTerm = function (id) { var t = CP.terms[id]; if (t) CP.ui.openDrawer(t.name, V.termHtml(t)); };
  V.personHtml = function (p) {
    return '<p class="muted">' + esc(p.dates || '') + (p.field ? ' · ' + esc(p.field) : '') + '</p><div class="defn rich">' + rich(p.one) + '</div>' +
      (p.gist ? '<h4>The idea, in brief</h4><div class="prose rich"><p>' + rich(p.gist) + '</p></div>' : '') +
      (p.relation ? '<h4>How Ahmed uses (and departs from) them</h4><div class="prose rich"><p>' + rich(p.relation) + '</p></div>' : '') +
      (p.tension ? '<h4>Where the friction is</h4><div class="prose rich"><p>' + rich(p.tension) + '</p></div>' : '') +
      (p.read && p.read.length ? '<h4>Start reading</h4>' + V.list(p.read, 'qlist') : '') +
      (p.units && p.units.length ? '<h4>Where they appear in the book</h4><div class="chips">' + V.unitChips(p.units) + '</div>' : '') +
      (p.terms && p.terms.length ? '<h4>Related terms</h4><div class="chips">' + V.chips(p.terms, 'term') + '</div>' : '') +
      '<p style="margin-top:1.4rem"><a class="btn sm ghost" href="#/people/' + p.id + '" data-drawer-close>Open full entry</a> <button type="button" class="btn sm ghost" data-find="' + esc(p.name.split(' ').pop()) + '">Find in the book</button></p>';
  };
  V.openPerson = function (id) { var p = CP.people[id]; if (p) CP.ui.openDrawer(p.name, V.personHtml(p)); };

  /* ---------- navigation order ---------- */
  V.stops = function () {
    var out = [];
    CP.primer && CP.primer.sections.forEach(function (s, i) { out.push({ route: 'primer/' + i, label: s.title, sub: 'Before you begin', kind: 'primer' }); });
    CP.UNITS.forEach(function (u) {
      out.push({ route: 'u/' + u.id, label: u.kicker + ' — ' + u.title, sub: 'Overview & argument map', unit: u.id });
      var n = CP.sectionCount(u.id);
      for (var i = 0; i < n; i++) out.push({ route: 'u/' + u.id + '/' + i, label: CP.secTitle(u.id, i), sub: u.kicker + ' · ' + u.title, unit: u.id, sec: i });
    });
    return out;
  };
  V.neighbors = function (route) {
    var s = V.stops(), i = -1; s.forEach(function (x, k) { if (x.route === route) i = k; });
    return { prev: i > 0 ? s[i - 1] : null, next: i >= 0 && i < s.length - 1 ? s[i + 1] : null };
  };
  V.unitProgress = function (id) {
    var n = CP.sectionCount(id), d = 0; for (var i = 0; i < n; i++) if (CP.store.done(id + ':' + i)) d++;
    return { done: d, total: n };
  };

  /* ---------- unit overview ---------- */
  V.stepper = function (id, cur) {
    var n = CP.sectionCount(id);
    var h = '<nav class="stepper" aria-label="Sections"><a href="#/u/' + id + '"' + (cur === 'o' ? ' class="on"' : '') + '>Overview</a>';
    for (var i = 0; i < n; i++) h += '<a href="#/u/' + id + '/' + i + '"' + (cur === i ? ' class="on"' : '') + '><span class="tick' + (CP.store.done(id + ':' + i) ? ' done' : '') + '"></span>' + esc(CP.secTitle(id, i)) + '</a>';
    return h + '</nav>';
  };
  V.unitHead = function (um, c) {
    return '<header class="unit-head"><div class="kicker">' + esc(um.kicker) + '</div><h1>' + esc(um.title) + '</h1><p class="rich">' + rich(c ? c.tagline : '') + '</p></header>';
  };

  V.unit = function (id) {
    var um = CP.unitMeta(id), c = CP.units[id];
    if (!um) return '<div class="page"><h1 class="title">Not found</h1><p>That chapter does not exist. <a href="#/">Back to start</a>.</p></div>';
    if (!c) return '<div class="page">' + V.unitHead(um, null) + '<p>Guide coming soon.</p></div>';
    var nb = V.neighbors('u/' + id), n = CP.sectionCount(id), prog = V.unitProgress(id);
    var h = '<div class="page">' + V.unitHead(um, c) + V.stepper(id, 'o');
    h += '<p class="lede rich">' + rich(c.claim) + '</p>';
    if (c.glance) h += '<div class="grid g3">' + c.glance.map(function (g, i) { return '<div class="card"><div class="kicker">' + ['The move', 'The method', 'The stakes', 'The twist'][i % 4] + '</div><p class="prose rich" style="margin:.3rem 0 0">' + rich(g) + '</p></div>'; }).join('') + '</div>';
    if (c.why) h += V.callout('why', 'Why should I care?', '<p class="rich prose">' + rich(c.why) + '</p>');
    // roadmap
    h += '<h2 class="sec">Roadmap — ' + n + ' reading stops</h2><div class="grid g2">';
    for (var i = 0; i < n; i++) {
      var s = (c.sections || [])[i] || {};
      h += '<a class="card unit-card" href="#/u/' + id + '/' + i + '"><div class="row"><span class="tick' + (CP.store.done(id + ':' + i) ? ' done' : '') + '"></span><span class="kicker">' + (i === 0 ? 'Opening' : 'Section ' + i) + '</span></div><h3>' + esc(CP.secTitle(id, i)) + '</h3><p class="prose rich" style="margin:0">' + rich(s.gist || '') + '</p><span class="small" style="color:var(--crimson);font-weight:700">Read &amp; study →</span></a>';
    }
    h += '</div>';
    // argument
    if (c.argument) {
      h += '<h2 class="sec">The argument, step by step</h2>' + V.moves(c.argument.steps) + V.diagrams(c);
    } else h += V.diagrams(c);
    if (c.extra) h += V.blocks(c.extra);
    if (c.club) h += '<h2 class="sec">From the book club — notes &amp; commentary</h2><div class="prose club">' + V.blocks(c.club) + '</div>';
    if (c.context) h += '<h2 class="sec">Where it is coming from</h2><div class="prose rich">' + (Array.isArray(c.context) ? c.context : [c.context]).map(function (p) { return '<p>' + rich(p) + '</p>'; }).join('') + '</div>';
    if (c.terms && c.terms.length) h += '<h2 class="sec">Key terms for this chapter</h2><div class="chips">' + V.chips(c.terms, 'term') + '</div><p class="muted small">Click any term for a graduate-level entry. Terms are also underlined inside the text itself.</p>';
    if (c.people && c.people.length) h += '<h2 class="sec">Who is in the room</h2><div class="chips">' + V.chips(c.people, 'person') + '</div>';
    if (c.sources && c.sources.length) {
      h += '<h2 class="sec">Key sources & what each is doing</h2><div style="overflow-x:auto"><table class="table-list"><thead><tr><th>Source</th><th>What it contributes</th><th>How Ahmed uses it</th></tr></thead><tbody>' +
        c.sources.map(function (s) { return '<tr><td><b class="rich">' + rich(s.who) + '</b><br><span class="muted small rich">' + rich(s.work) + '</span></td><td class="rich">' + rich(s.role) + '</td><td class="rich">' + rich(s.use) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    }
    h += '<div id="auto-cites"></div>';
    if (c.conversation && c.conversation.length) h += '<h2 class="sec">Critiques, conversation & current research</h2>' + V.moves(c.conversation);
    if (c.debates && c.debates.length) h += '<div class="chips" style="margin-top:.8rem">' + c.debates.map(function (d) { var D = CP.debates.filter(function (x) { return x.id === d; })[0]; return D ? '<a class="chip" href="#/debates/' + d + '">⚑ ' + esc(D.title) + '</a>' : ''; }).join('') + '</div>';
    if (c.questions && c.questions.length) h += '<h2 class="sec">Questions for the book club</h2>' + V.questions(c.questions);
    if (c.bridges) h += '<div class="grid g2" style="margin-top:1rem">' + (c.bridges.back ? '<div class="card"><div class="kicker">Looking back</div><p class="prose rich" style="margin:.3rem 0 0">' + rich(c.bridges.back) + '</p></div>' : '') + (c.bridges.forward ? '<div class="card"><div class="kicker">Looking ahead</div><p class="prose rich" style="margin:.3rem 0 0">' + rich(c.bridges.forward) + '</p></div>' : '') + '</div>';
    h += '<h2 class="sec">My chapter notes</h2><textarea class="note" data-notekey="unit:' + id + '" placeholder="Prep notes, questions to raise, things that surprised you…" aria-label="Chapter notes">' + esc(CP.store.note('unit:' + id)) + '</textarea><div class="saved" data-saved></div>';
    h += '<div class="row" style="margin-top:1rem"><span class="muted small">Progress: ' + prog.done + ' of ' + prog.total + ' stops marked read</span></div>';
    h += V.pagerHtml(nb.prev, nb.next) + '</div>';
    return h;
  };
  V.afterUnit = function (id) { V.fillAutoCites(id); };

  /* Auto-extracted citations: every in-text "Author Year" matched against the bibliography. */
  V.fillAutoCites = function (id) {
    var box = $('#auto-cites'); if (!box) return;
    if (!CP.book) { box.innerHTML = '<p class="muted small notice" style="margin-top:1rem">Load your copy of the book to see every source this chapter actually cites, extracted automatically from its text and matched to the bibliography.</p>'; return; }
    var list = V.citationsFor(id);
    if (!list.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<h2 class="sec">Everything this chapter cites (' + list.length + ')</h2><p class="muted small">Extracted from the text and notes of this chapter and matched to the References list. Click an entry to see where it is used in the bibliography.</p><div style="overflow-x:auto"><table class="table-list"><thead><tr><th>Reference</th><th>Cited</th></tr></thead><tbody>' +
      list.map(function (x) { return '<tr><td>' + x.ref.html + '</td><td>' + x.count + '×</td></tr>'; }).join('') + '</tbody></table></div>';
  };
  var citeCache = null;
  V.citationIndex = function () {
    if (citeCache && citeCache.book === CP.book) return citeCache.idx;
    var refs = CP.book.references.map(function (r, i) {
      var m = r.text.match(/^([^,(]+?)(?:,|\s\()[^(]*\((\d{4}[a-z]?)\)/) || r.text.match(/^([^,]+),.*?\((\d{4}[a-z]?)\)/);
      return { i: i, ref: r, sur: m ? CP.norm(m[1]).replace(/[^a-z' -]/g, '').trim() : null, year: m ? m[2] : null };
    });
    var idx = {};
    CP.book.units.forEach(function (u) {
      var texts = [];
      u.sections.forEach(function (s) { s.paras.forEach(function (p) { texts.push(CP.plain(p.html)); }); });
      u.notes.forEach(function (n) { texts.push(CP.plain(n.html)); });
      var all = texts.join(' \n ');
      var found = {};
      refs.forEach(function (r) {
        if (!r.sur || !r.year) return;
        var sur = r.sur.split(' ').pop();
        var m = CP.norm(all).match(new RegExp('(?:^|[^a-z])' + CP.norm(sur).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\s+and\\s+[a-z\'-]+|\\s+et\\s+al\\.?)?(?:\'s)?,?\\s*\\(?' + r.year + (/[a-z]$/.test(r.year) ? '(?![a-z0-9])' : '(?![a-z0-9])'), 'g'));
        if (m && m.length) {
          found[r.i] = { ref: r.ref, count: m.length };
        }
      });
      idx[u.id] = Object.keys(found).map(function (k) { return found[k]; }).sort(function (a, b) { return b.count - a.count; });
    });
    citeCache = { book: CP.book, idx: idx };
    return idx;
  };
  V.citationsFor = function (id) { return CP.book ? (V.citationIndex()[id] || []) : []; };

  /* ---------- section study page ---------- */
  var cur = null; // current section render context
  V.currentSection = function () { return cur; };

  V.importBox = function (compact) {
    return '<div class="import-box" data-dropzone><h3 style="margin-top:0">' + (compact ? 'Load your copy to read the text here' : 'Load your copy of the book') + '</h3>' +
      '<p class="prose">This companion never ships the book’s text. Choose your own <b>EPUB</b> of <i>The Cultural Politics of Emotion</i> (2nd ed.) and it is parsed <b>entirely in your browser</b> and cached on this device — chapters, sections and all 160 endnotes appear instantly, ready to highlight and annotate.</p>' +
      '<p><label class="btn"><input type="file" accept=".epub,application/epub+zip" data-import-input hidden>Choose EPUB file…</label> <span class="muted small">or drag it onto this box</span></p><p class="small muted" data-import-status role="status"></p></div>';
  };

  function paraWrap(p, i, secParas) {
    var prev = secParas[i - 1], first = i === 0 || (prev && prev.kind !== 'p');
    var tag = p.kind === 'p' ? 'p' : 'blockquote';
    var cls = 'para' + (p.kind === 'epigraph' ? ' epigraph' : p.kind === 'quote' ? ' quote' : '') + (first && p.kind === 'p' ? ' first' : '');
    return '<div class="pw" data-wrap="' + p.id + '"><' + tag + ' class="' + cls + '" id="' + p.id + '" data-pid="' + p.id + '"></' + tag + '>' +
      '<div class="para-tools"><button type="button" class="pt-btn" data-ptool="note" title="Add a note to this paragraph" aria-label="Add a note to this paragraph">✎</button><button type="button" class="pt-btn" data-ptool="link" title="Copy link to this paragraph" aria-label="Copy link to this paragraph">⛓</button></div></div>';
  }

  V.endnotesFor = function (bu, paras) {
    var nums = []; paras.forEach(function (p) { (p.html.match(/data-n="(\d+)"/g) || []).forEach(function (m) { nums.push(+m.match(/\d+/)[0]); }); });
    return nums.map(function (n) { var note = bu.notes.filter(function (x) { return x.n === n; })[0]; return note ? { n: n, html: note.html } : null; }).filter(Boolean);
  };

  V.section = function (id, idx) {
    var um = CP.unitMeta(id), c = CP.units[id];
    if (!um) return '<div class="page"><h1 class="title">Not found</h1></div>';
    var n = CP.sectionCount(id);
    if (idx < 0 || idx >= n) idx = 0;
    var sc = (c && c.sections && c.sections[idx]) || {};
    var secs = CP.sectionsOf(id), sec = secs ? secs[idx] : null, bu = CP.bookUnit(id);
    var nb = V.neighbors('u/' + id + '/' + idx), cfg = CP.store.settings();
    var key = id + ':' + idx;
    cur = { unit: id, idx: idx, sec: sec, bu: bu, ctx: { cache: {}, seen: {}, glossMap: {}, hits: [] }, paras: {} };
    var title = CP.secTitle(id, idx);
    var h = '<div class="page" style="max-width:1560px"><div class="crumbs"><a href="#/">Home</a> › <a href="#/u/' + id + '">' + esc(um.kicker) + ' · ' + esc(um.title) + '</a> › ' + esc(title) + '</div>' + V.stepper(id, idx);
    h += '<div class="mobile-tabs" role="tablist"><button type="button" data-showpane="read" class="on" role="tab">Text</button><button type="button" data-showpane="guide" role="tab">Guide &amp; notes</button></div>';
    h += '<div class="study" data-show="read"><div class="reader-col">';
    if (!sec) {
      h += V.importBox(true) + '<p class="muted small" style="margin-top:.8rem">The guide on the right works without the text; load the EPUB to read, highlight and annotate this section.</p>';
    } else {
      h += '<div class="reader-tools"><label><input type="checkbox" data-tog="terms"' + (cfg.terms ? ' checked' : '') + '> Term links</label><label><input type="checkbox" data-tog="gloss"' + (cfg.gloss ? ' checked' : '') + '> Scholar’s notes ◆</label><label>Endnotes <select data-endnotes><option value="popover"' + (cfg.endnotes === 'popover' ? ' selected' : '') + '>on click</option><option value="inline"' + (cfg.endnotes === 'inline' ? ' selected' : '') + '>inline</option></select></label><span class="spacer" style="flex:1"></span><span class="muted">Select any text to highlight or add a note</span></div>';
      h += '<article class="reader" aria-label="' + esc(title) + '"><div class="sec-head"><div class="kicker">' + esc(um.kicker) + '</div><h2>' + esc(sec.virtual || !sec.title ? title : sec.title) + '</h2></div>';
      sec.paras.forEach(function (p, i) { h += paraWrap(p, i, sec.paras); });
      h += '</article>';
      h += '<div class="row" style="justify-content:center;margin:1.6rem 0"><button type="button" class="btn' + (CP.store.done(key) ? ' ghost' : '') + '" data-markdone="' + key + '">' + (CP.store.done(key) ? '✓ Marked as read — undo' : 'Mark this stop as read') + '</button></div>';
    }
    h += '</div>' + V.companion(id, idx, sc, sec, bu) + '</div>' + V.pagerHtml(nb.prev, nb.next) + '</div>';
    return h;
  };

  V.companion = function (id, idx, sc, sec, bu) {
    var cfg = CP.store.settings();
    var g = '<div class="comp-pane" data-pane="guide">';
    if (sc.gist) g += '<p class="gist rich">' + rich(sc.gist) + '</p>';
    if (sc.moves && sc.moves.length) g += '<h4>What is happening here</h4>' + V.moves(sc.moves);
    if (sc.diagrams || sc.diagram) g += '<h4>Diagram</h4>' + V.diagrams(sc);
    if (sc.voice) g += V.callout('voice', 'In Ahmed’s voice — the charitable reading', '<p class="rich">' + rich(sc.voice) + '</p>', 'A paraphrase of the argument as its author would want it heard — not a quotation. The verbatim text is on the left.');
    if (sc.context) g += V.callout('', 'Where this comes from', '<p class="rich">' + rich(sc.context) + '</p>');
    if (sc.objection) g += V.callout('press', 'Pressure-test it', '<p class="rich">' + rich(sc.objection) + '</p>');
    if (sc.terms && sc.terms.length) g += '<h4>Key terms in this stop</h4><div class="chips">' + V.chips(sc.terms, 'term') + '</div>';
    if (sc.people && sc.people.length) g += '<h4>Voices in the section</h4><div class="chips">' + V.chips(sc.people, 'person') + '</div>';
    if (sc.glosses && sc.glosses.length) {
      g += '<h4>Scholar’s notes ◆ in the text</h4><ul class="qlist" style="font-family:var(--sans);font-size:.9rem">' + sc.glosses.map(function (gl, i) { return '<li><a href="#" data-gotogloss="' + id + ':' + idx + ':' + i + '">' + esc(gl.t) + '</a></li>'; }).join('') + '</ul>';
    }
    if (sc.questions && sc.questions.length) g += '<h4>Ask the group</h4>' + V.questions(sc.questions);
    if (sc.extra) g += V.blocks(sc.extra);
    if (!sc.gist && !sc.moves) g += '<p class="muted">The guide for this stop is being written.</p>';
    g += '</div>';

    var f = '<div class="comp-pane" data-pane="notesfn" hidden><div class="row" style="justify-content:space-between"><b>Endnotes in this stop</b><label class="small"><input type="checkbox" data-allnotes> whole chapter</label></div><div data-fnlist></div></div>';
    var m = '<div class="comp-pane" data-pane="mine" hidden><h4 style="margin-top:0">Notes for this stop</h4><textarea class="note" data-notekey="' + id + ':' + idx + '" placeholder="Your thoughts on this section…" aria-label="Notes for this section">' + esc(CP.store.note(id + ':' + idx)) + '</textarea><div class="saved" data-saved></div>' +
      '<h4>Highlight colours</h4><div class="legend">' + CP.COLORS.map(function (c) { return '<span><i style="background:var(--hl-' + c + ')"></i>' + esc(cfg.colors[c]) + '</span>'; }).join('') + '</div><h4>Highlights &amp; margin notes here</h4><div data-annlist></div></div>';
    return '<aside class="companion" aria-label="Companion"><div class="comp-tabs" role="tablist"><button type="button" class="on" data-comp="guide" role="tab">Guide</button><button type="button" data-comp="notesfn" role="tab">Endnotes</button><button type="button" data-comp="mine" role="tab">My notes</button></div>' + g + f + m + '</aside>';
  };

  /* After the section DOM is in place: fill paragraphs, decorate, bind lists. */
  V.afterSection = function (params) {
    if (!cur) return;
    var cfg = CP.store.settings(), ctx = cur.ctx, sec = cur.sec, id = cur.unit, idx = cur.idx;
    document.body.classList.toggle('hide-terms', !cfg.terms); document.body.classList.toggle('hide-gloss', !cfg.gloss);
    if (params && params.q) ctx.hits = CP.norm(params.q).split(/[^a-z0-9']+/).filter(function (t) { return t.length > 2; });
    if (sec) {
      var gl = CP.anno.assignGlosses(id, idx, sec.paras); ctx.glossMap = gl.map; cur.missingGlosses = gl.missing;
      if (gl.missing.length && window.console) console.warn('Unmatched scholar notes in ' + id + ':' + idx, gl.missing);
      sec.paras.forEach(function (p) { cur.paras[p.id] = p; V.paintPara(p.id); });
    }
    V.fillLists();
    if (params && params.tab) { var b = $('[data-comp="' + (params.tab === 'notes' ? 'mine' : params.tab) + '"]'); if (b) { b.click(); if (window.innerWidth <= 1280) { var mt = $('[data-showpane="guide"]'); if (mt) mt.click(); } } }
    if (params && params.p) V.focusPara(params.p, params);
    if (params && params.a) { var an = $('[data-ann="' + params.a + '"]'); if (an) { an.classList.add('focus'); an.scrollIntoView({ block: 'center' }); } }
  };

  V.paintPara = function (pid) {
    var p = cur.paras[pid], el = $('[data-pid="' + pid + '"]'); if (!p || !el) return;
    el.innerHTML = p.html;
    CP.anno.decorate(el, pid, cur.ctx);
    var wrap = el.closest('.pw'), old = $('.inline-notes', wrap); if (old) old.remove();
    if (CP.store.settings().endnotes === 'inline' && cur.bu) {
      var ens = V.endnotesFor(cur.bu, [p]);
      if (ens.length) { var d = document.createElement('div'); d.className = 'inline-notes'; d.innerHTML = ens.map(function (e) { return '<div><b>' + e.n + '.</b> ' + e.html + '</div>'; }).join(''); wrap.appendChild(d); }
    }
  };
  V.focusPara = function (pid, params) {
    var el = $('[data-pid="' + pid + '"]'); if (!el) return;
    setTimeout(function () {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' }); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
      if (params && params.n) { var s = $('sup.fn[data-n="' + params.n + '"]', el); if (s) V.showEndnote(s); }
    }, 60);
  };

  V.fillLists = function () {
    if (!cur) return;
    var id = cur.unit, idx = cur.idx, bu = cur.bu, all = $('[data-allnotes]') && $('[data-allnotes]').checked;
    // endnotes
    var fl = $('[data-fnlist]');
    if (fl) {
      if (!bu) fl.innerHTML = '<p class="muted">Load the book to see this stop’s endnotes.</p>';
      else {
        var list = all ? bu.notes.map(function (x) { return { n: x.n, html: x.html }; }) : (cur.sec ? V.endnotesFor(bu, cur.sec.paras) : []);
        fl.innerHTML = list.length ? list.map(function (e) {
          var k = 'en:' + id + ':' + e.n, cm = CP.store.note(k);
          return '<div class="ann c-none"><div><b>' + e.n + '.</b> <span class="prose">' + e.html + '</span></div><div class="meta"><button type="button" data-showfn="' + e.n + '">Show in text</button><button type="button" data-fncomment="' + k + '">' + (cm ? 'Edit my comment' : 'Add my comment') + '</button></div>' + (cm ? '<div class="nt">' + esc(cm) + '</div>' : '') + '</div>';
        }).join('') : '<p class="muted">No endnotes in this stop.</p>';
      }
    }
    // annotations
    var al = $('[data-annlist]');
    if (al) {
      var anns = CP.store.anns().filter(function (a) { return a.unit === id && a.sec === idx; });
      var order = {}; (cur.sec ? cur.sec.paras : []).forEach(function (p, i) { order[p.id] = i; });
      anns.sort(function (a, b) { return (order[a.para] - order[b.para]) || (a.start - b.start); });
      al.innerHTML = anns.length ? anns.map(annCard).join('') : '<p class="muted small">Nothing yet. Select text in the reader to highlight it, or hover a paragraph and press ✎ to add a note.</p>';
    }
  };
  function annCard(a, opts) {
    var cfg = CP.store.settings(), um = CP.unitMeta(a.unit);
    return '<div class="ann c-' + (a.color || 'none') + '"><div class="q">' + (a.whole ? '<span class="muted">¶ paragraph note</span>' : '“' + esc(a.quote) + '”') + '</div>' + (a.note ? '<div class="nt">' + esc(a.note) + '</div>' : '') +
      '<div class="meta"><span>' + (a.color ? esc(cfg.colors[a.color]) : 'Note') + '</span>' + (opts && opts.where ? '<span>' + esc(um ? um.kicker : a.unit) + ' · ' + esc(CP.secTitle(a.unit, a.sec)) + '</span>' : '') + '<a href="#/u/' + a.unit + '/' + a.sec + '?p=' + a.para + '&a=' + a.id + '">Go to</a><button type="button" data-delann="' + a.id + '">Delete</button></div></div>';
  }
  V.annCard = annCard;

  /* ---------- popovers inside the reader ---------- */
  V.showEndnote = function (sup) {
    if (!cur || !cur.bu) return;
    var n = +sup.dataset.n, note = cur.bu.notes.filter(function (x) { return x.n === n; })[0];
    if (!note) return;
    var k = 'en:' + cur.unit + ':' + n;
    var el = CP.ui.pop(sup, '<h5>Endnote ' + n + '</h5><div class="body">' + note.html + '</div><p class="small muted" style="margin:.5rem 0 .2rem">My comment</p><textarea data-pop-note="' + k + '" placeholder="Add your own gloss on this note…"></textarea>');
    var ta = $('textarea', el); ta.value = CP.store.note(k);
    ta.addEventListener('input', CP.debounce(function () { CP.store.setNote(k, ta.value.trim()); CP.search.invalidate(); V.fillLists(); }, 400));
  };
  V.showGloss = function (span) {
    var parts = span.dataset.gloss.split(':'), c = CP.units[parts[0]], sc = c && c.sections[+parts[1]], g = sc && sc.glosses[+parts[2]];
    if (!g) return;
    var html = '<h5>Scholar’s note ◆</h5><b>' + esc(g.t) + '</b><div class="body rich" style="margin-top:.3rem">' + rich(g.b) + '</div>' +
      ((g.terms || []).length ? '<div class="chips" style="margin-top:.5rem">' + V.chips(g.terms, 'term') + '</div>' : '') + ((g.people || []).length ? '<div class="chips" style="margin-top:.3rem">' + V.chips(g.people, 'person') + '</div>' : '');
    var el = CP.ui.pop(span, html); CP.anno.linkProse(el);
  };
  V.showAnn = function (span) {
    var a = CP.anno.get(span.dataset.ann); if (!a) return;
    var cfg = CP.store.settings(), grp = a.grp ? CP.store.anns().filter(function (x) { return x.grp === a.grp; }) : [a];
    var first = grp[0] || a;
    var el = CP.ui.pop(span, '<h5>Highlight</h5><div class="body"><i>“' + esc(grp.map(function (x) { return x.quote; }).join(' … ').slice(0, 220)) + '”</i></div><div class="colorrow">' +
      CP.COLORS.map(function (c) { return '<button type="button" class="dot' + (a.color === c ? ' on' : '') + '" data-recolor="' + c + '" style="background:var(--hl-' + c + ')" title="' + esc(cfg.colors[c]) + '" aria-label="' + esc(cfg.colors[c]) + '"></button>'; }).join('') +
      '</div><textarea placeholder="Add a note to this highlight…" aria-label="Note"></textarea><div class="acts"><button type="button" class="btn sm ghost" data-annact="del">Delete</button><button type="button" class="btn sm ghost" data-annact="copy">Copy quote</button></div>');
    var ta = $('textarea', el); ta.value = first.note || '';
    ta.addEventListener('input', CP.debounce(function () { CP.anno.update(first.id, { note: ta.value.trim() }); CP.search.invalidate(); V.refreshParas(grp); V.fillLists(); }, 350));
    el.addEventListener('click', function (e) {
      var rc = e.target.closest('[data-recolor]'), act = e.target.closest('[data-annact]');
      if (rc) { grp.forEach(function (x) { CP.anno.update(x.id, { color: rc.dataset.recolor }); }); V.refreshParas(grp); V.fillLists(); CP.ui.closePop(); }
      else if (act && act.dataset.annact === 'del') { grp.forEach(function (x) { CP.anno.remove(x.id); }); CP.search.invalidate(); V.refreshParas(grp); V.fillLists(); CP.ui.closePop(); }
      else if (act && act.dataset.annact === 'copy') { try { navigator.clipboard.writeText(grp.map(function (x) { return x.quote; }).join(' ')); CP.toast('Copied'); } catch (er) { } }
    });
    return el;
  };
  V.refreshParas = function (anns) { var seen = {}; anns.forEach(function (a) { if (!seen[a.para]) { seen[a.para] = 1; V.paintPara(a.para); } }); };

  V.addHighlight = function (segs, color, withNote) {
    var u = cur.unit, i = cur.idx, grp = segs.length > 1 ? CP.uid() : undefined, made = [];
    segs.forEach(function (s) { made.push(CP.anno.add({ unit: u, sec: i, para: s.pid, start: s.start, end: s.end, color: color, quote: s.quote, note: '', grp: grp })); });
    CP.search.invalidate(); V.refreshParas(made); V.fillLists();
    if (withNote) { var sp = $('[data-ann="' + made[0].id + '"]'); if (sp) { var el = V.showAnn(sp); var ta = el && $('textarea', el); if (ta) ta.focus(); } }
    return made;
  };
  V.paraNote = function (pid) {
    var wrap = $('[data-wrap="' + pid + '"]'); if (!wrap) return;
    var ex = CP.store.anns().filter(function (a) { return a.para === pid && a.whole; })[0];
    var el = CP.ui.pop($('.para-tools', wrap), '<h5>Paragraph note</h5><textarea placeholder="A note on this whole paragraph…" aria-label="Paragraph note"></textarea><div class="acts"><button type="button" class="btn sm ghost" data-pdel' + (ex ? '' : ' hidden') + '>Delete note</button></div>');
    var ta = $('textarea', el); ta.value = ex ? ex.note : ''; ta.focus();
    var rec = ex;
    var save = CP.debounce(function () {
      var v = ta.value.trim();
      if (!v) { if (rec) { CP.anno.remove(rec.id); rec = null; } }
      else if (rec) CP.anno.update(rec.id, { note: v });
      else rec = CP.anno.add({ unit: cur.unit, sec: cur.idx, para: pid, start: 0, end: 0, color: null, quote: '', note: v, whole: true });
      CP.search.invalidate(); V.paintPara(pid); V.fillLists();
    }, 300);
    ta.addEventListener('input', save);
    $('[data-pdel]', el).addEventListener('click', function () { if (rec) CP.anno.remove(rec.id); CP.ui.closePop(); CP.search.invalidate(); V.paintPara(pid); V.fillLists(); });
  };
})();
