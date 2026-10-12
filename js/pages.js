/* Pages: home, primer, glossary, thinkers, debates, bibliography, notebook, settings. */
(function () {
  'use strict';
  var CP = window.CP, V = CP.views, $ = CP.$, $$ = CP.$$, esc = CP.esc, rich = CP.rich, P = CP.pages = {};

  /* ---------- home ---------- */
  P.home = function () {
    var done = CP.store.allDone(), last = CP.store.get('last', null);
    var totalStops = 0, doneStops = 0;
    CP.UNITS.forEach(function (u) { var p = V.unitProgress(u.id); totalStops += p.total; doneStops += p.done; });
    var h = '<div class="page"><section class="hero"><div class="kicker">Book club companion</div><h1>The Cultural Politics<br>of Emotion</h1><p><b>Sara Ahmed</b> · Second edition (Routledge, 2014/2015)</p>' +
      '<p>Read the book section by section with a graduate-level guide beside it: the argument mapped, every key term one click away, the thinkers and debates she is in conversation with, diagrams of the logic, and your own highlights and notes in five colours.</p>' +
      '<div class="row" style="margin-top:1rem"><a class="btn" href="#/primer/0">Start: Before you begin →</a>' + (last ? '<a class="btn ghost" href="#/' + last.route + '">Continue: ' + esc(last.label) + '</a>' : '<a class="btn ghost" href="#/u/ch1">Jump to Chapter 1</a>') + '<button type="button" class="btn ghost" data-open-search>Search everything</button></div></section>';
    h += '<div class="grid g2" style="margin-top:1rem"><div class="card"><h3>Your copy of the book</h3>' + (CP.book ?
      '<p class="prose">✓ Loaded: <b>' + CP.book.units.length + ' parts</b>, ' + CP.book.units.reduce(function (a, u) { return a + u.notes.length; }, 0) + ' endnotes and ' + CP.book.references.length + ' references are ready. Everything stays in this browser.</p><div class="row"><button class="btn sm ghost" data-replace-book type="button">Replace EPUB</button><button class="btn sm ghost" data-remove-book type="button">Remove cached text</button></div>' : V.importBox(false)) +
      '</div><div class="card"><h3>Your progress</h3><p class="prose">' + doneStops + ' of ' + totalStops + ' reading stops marked as read.</p><div class="bar" aria-hidden="true"><i style="width:' + (totalStops ? Math.round(100 * doneStops / totalStops) : 0) + '%"></i></div><p class="muted small" style="margin-top:.6rem">Notes, highlights and progress are saved automatically in this browser. Use the Notebook to export or back them up.</p></div></div>';
    h += '<h2 class="sec">The book, chapter by chapter</h2><div class="grid g3">';
    CP.UNITS.forEach(function (u) {
      var c = CP.units[u.id] || {}, p = V.unitProgress(u.id);
      h += '<a class="card unit-card" href="#/u/' + u.id + '"><span class="num">' + esc(u.n) + '</span><div class="kicker">' + esc(u.kicker) + '</div><h3>' + esc(u.title) + '</h3><p class="prose rich small" style="margin:0">' + rich(c.tagline || '') + '</p><div class="bar" style="margin-top:.4rem"><i style="width:' + (p.total ? Math.round(100 * p.done / p.total) : 0) + '%"></i></div></a>';
    });
    h += '</div><h2 class="sec">How to use this companion</h2><div class="grid g3">' +
      '<div class="card"><h3>📖 Read &amp; mark up</h3><p class="prose">Each stop pairs the verbatim text with a guide. Select text to highlight in five colours or add a note; hover a paragraph for a paragraph note. Underlined terms and names open deep-dive entries.</p></div>' +
      '<div class="card"><h3>◆ Scholar’s notes</h3><p class="prose">Amber ◆ marks passages where a graduate-level gloss is attached — genealogy, a rival reading, a footnote Ahmed assumes you know. Toggle them off for a clean text.</p></div>' +
      '<div class="card"><h3>🗺 Diagrams</h3><p class="prose">Every chapter has an argument map, and most stops have a picture of the mechanism at work. Click “enlarge” on any diagram.</p></div>' +
      '<div class="card"><h3>🔍 Search everything</h3><p class="prose">Press <kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd>: one box searches the text, endnotes, bibliography, glossary, thinkers, the guide and your own notes.</p></div>' +
      '<div class="card"><h3>🧭 Placed in a field</h3><p class="prose">Thinkers and Debates pages show who Ahmed is arguing with, what came after, and why the book still matters.</p></div>' +
      '<div class="card"><h3>📝 Notebook</h3><p class="prose">All your highlights and notes in one place, filterable by colour and chapter, exportable as Markdown or JSON.</p></div></div>';
    return h + '</div>';
  };

  /* ---------- primer ---------- */
  P.primer = function (idx) {
    var pr = CP.primer; if (!pr) return '<div class="page"><p>Primer not available.</p></div>';
    idx = Math.max(0, Math.min(pr.sections.length - 1, idx || 0));
    var s = pr.sections[idx], nb = V.neighbors('primer/' + idx);
    var h = '<div class="page narrow"><header class="unit-head"><div class="kicker">Before you begin · ' + (idx + 1) + ' of ' + pr.sections.length + '</div><h1>' + esc(s.title) + '</h1><p class="rich">' + rich(s.tagline || '') + '</p></header>';
    h += '<nav class="stepper" aria-label="Primer sections">' + pr.sections.map(function (x, i) { return '<a href="#/primer/' + i + '"' + (i === idx ? ' class="on"' : '') + '><span class="tick' + (CP.store.done('primer:' + i) ? ' done' : '') + '"></span>' + esc(x.short || x.title) + '</a>'; }).join('') + '</nav>';
    h += '<div class="prose">' + V.blocks(s.body) + '</div>';
    h += '<h2 class="sec">My notes</h2><textarea class="note" data-notekey="primer:' + idx + '" placeholder="Notes on this primer page…" aria-label="Notes">' + esc(CP.store.note('primer:' + idx)) + '</textarea><div class="saved" data-saved></div>';
    h += '<div class="row" style="justify-content:center;margin:1.4rem 0"><button type="button" class="btn' + (CP.store.done('primer:' + idx) ? ' ghost' : '') + '" data-markdone="primer:' + idx + '">' + (CP.store.done('primer:' + idx) ? '✓ Marked as read — undo' : 'Mark as read') + '</button></div>';
    return h + V.pagerHtml(nb.prev, nb.next) + '</div>';
  };

  /* ---------- glossary ---------- */
  var TERM_CATS = { core: 'Core concepts', emotion: 'Emotions', theory: 'Theory & method', politics: 'Politics & power' };
  P.terms = function (id) {
    var h = '<div class="page"><h1 class="title">Key terms</h1><p class="lede">Every technical word the book leans on, defined plainly, then deepened: where it comes from, how Ahmed uses it, what it is easy to get wrong.</p>' +
      '<input class="search-in" type="search" data-termfilter placeholder="Filter terms… (e.g. sticky, performative, orientation)" aria-label="Filter terms"><div class="chips" style="margin:.7rem 0" data-termcats>' +
      '<button type="button" class="chip on" data-cat="">All ' + CP.termList.length + '</button>' + Object.keys(TERM_CATS).map(function (k) { return '<button type="button" class="chip" data-cat="' + k + '">' + TERM_CATS[k] + '</button>'; }).join('') + '</div><div class="grid g2" data-termgrid>';
    h += P.termCards('', '');
    return h + '</div></div>';
  };
  P.termCards = function (q, cat) {
    var nq = CP.norm(q).trim(), list = CP.termList.filter(function (t) {
      if (cat && t.cat !== cat) return false;
      return !nq || CP.norm(t.name + ' ' + t.short + ' ' + (t.auto || []).join(' ') + ' ' + (t.long || '')).indexOf(nq) >= 0;
    }).sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (!list.length) return '<p class="muted">No terms match.</p>';
    return list.map(function (t) {
      return '<div class="card"><h3><a class="term-link" data-term="' + t.id + '" href="#/terms/' + t.id + '">' + esc(t.name) + '</a> <span class="pill" style="background:var(--paper-3);color:var(--ink-2)">' + esc(TERM_CATS[t.cat] || '') + '</span></h3><p class="prose rich" style="margin:.2rem 0 .5rem">' + rich(t.short) + '</p><div class="chips">' + V.unitChips((t.units || []).slice(0, 4)) + '</div></div>';
    }).join('');
  };

  /* ---------- thinkers ---------- */
  P.people = function () {
    var h = '<div class="page"><h1 class="title">Thinkers &amp; interlocutors</h1><p class="lede">Who is in the room: the philosophers, psychoanalysts, theorists and activists Ahmed borrows from, argues with, and who later argued with her.</p>' +
      '<input class="search-in" type="search" data-peoplefilter placeholder="Filter thinkers…" aria-label="Filter thinkers">';
    if (CP.lineage) h += '<h2 class="sec">A map of the conversation</h2>' + CP.D.figure(CP.lineage);
    h += '<div class="grid g2" style="margin-top:1rem" data-peoplegrid>' + P.peopleCards('') + '</div></div>';
    return h;
  };
  P.peopleCards = function (q) {
    var nq = CP.norm(q).trim(), list = CP.peopleList.filter(function (p) { return !nq || CP.norm(p.name + ' ' + p.one + ' ' + (p.field || '')).indexOf(nq) >= 0; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (!list.length) return '<p class="muted">No thinkers match.</p>';
    return list.map(function (p) {
      return '<div class="card"><h3><a class="person-link" data-person="' + p.id + '" href="#/people/' + p.id + '">' + esc(p.name) + '</a> <span class="muted small">' + esc(p.dates || '') + '</span></h3><p class="muted small" style="margin:0">' + esc(p.field || '') + '</p><p class="prose rich" style="margin:.3rem 0 .5rem">' + rich(p.one) + '</p><div class="chips">' + V.unitChips((p.units || []).slice(0, 4)) + '</div></div>';
    }).join('');
  };

  /* ---------- debates ---------- */
  P.debates = function (id) {
    var h = '<div class="page narrow"><h1 class="title">Debates &amp; current research</h1><p class="lede">Where the argument is alive: the live disputes this book started, joined, or sharpened — and what to read to enter each one.</p>';
    CP.debates.forEach(function (d) {
      h += '<details class="fold" id="deb-' + d.id + '"' + (d.id === id ? ' open' : '') + '><summary>' + esc(d.title) + (d.tag ? ' <span class="pill">' + esc(d.tag) + '</span>' : '') + '</summary><div class="prose">' +
        '<p class="rich">' + rich(d.summary) + '</p>' +
        (d.positions ? '<div style="overflow-x:auto"><table class="table-list"><thead><tr><th>Position</th><th>The claim</th></tr></thead><tbody>' + d.positions.map(function (p) { return '<tr><td class="rich"><b>' + rich(p.who) + '</b></td><td class="rich">' + rich(p.claim) + '</td></tr>'; }).join('') + '</tbody></table></div>' : '') +
        (d.ahmed ? V.callout('voice', 'Where Ahmed stands', '<p class="rich">' + rich(d.ahmed) + '</p>') : '') +
        (d.why ? V.callout('why', 'Why you should care', '<p class="rich">' + rich(d.why) + '</p>') : '') +
        (d.units && d.units.length ? '<div class="chips">' + V.unitChips(d.units) + '</div>' : '') +
        (d.read && d.read.length ? '<h4>Read next</h4>' + V.list(d.read, 'qlist') : '') + '</div></details>';
    });
    return h + '<p class="muted small" style="margin-top:1.5rem">A note on currency: this page summarises well-established debates. Fast-moving literatures (digital affect, AI and emotion) change quickly — verify recent citations before quoting them.</p></div>';
  };

  /* ---------- bibliography ---------- */
  P.refs = function () {
    var h = '<div class="page narrow"><h1 class="title">References</h1><p class="lede">The book’s bibliography, searchable, with the chapters that cite each work.</p>';
    if (!CP.book) return h + V.importBox(false) + '</div>';
    h += '<input class="search-in" type="search" data-reffilter placeholder="Filter references by author, title, year…" aria-label="Filter references"><p class="muted small" data-refcount></p><div data-reflist></div></div>';
    return h;
  };
  P.refRows = function (q, focus) {
    var idx = V.citationIndex(), cited = {};
    CP.book.units.forEach(function (u) { (idx[u.id] || []).forEach(function (x) { (cited[x.ref.text] = cited[x.ref.text] || []).push(u.id); }); });
    var nq = CP.norm(q).trim(), n = 0;
    var rows = CP.book.references.map(function (r, i) { return { r: r, i: i }; }).filter(function (x) { return !nq || CP.norm(x.r.text).indexOf(nq) >= 0; });
    n = rows.length;
    return { html: rows.map(function (x) {
      var u = cited[x.r.text] || [];
      return '<div class="ann c-none' + (String(x.i) === String(focus) ? ' hl focus' : '') + '" id="ref-' + x.i + '"><div class="prose" style="font-size:.96rem">' + x.r.html + '</div>' + (u.length ? '<div class="chips" style="margin-top:.3rem">' + V.unitChips(u) + '</div>' : '') + '</div>';
    }).join('') || '<p class="muted">No references match.</p>', n: n };
  };

  /* ---------- notebook ---------- */
  var nbFilter = { unit: '', color: '', q: '' };
  P.notebook = function () {
    var cfg = CP.store.settings();
    var h = '<div class="page narrow"><h1 class="title">My notebook</h1><p class="lede">Every highlight, margin note, section note and endnote comment, in one place.</p>' +
      '<div class="row" style="margin-bottom:.8rem"><input class="search-in" style="flex:1;min-width:200px" type="search" data-nbq placeholder="Search my notes…" aria-label="Search my notes" value="' + esc(nbFilter.q) + '"><select data-nbunit aria-label="Filter by chapter" class="search-in" style="width:auto"><option value="">All chapters</option>' + CP.UNITS.map(function (u) { return '<option value="' + u.id + '"' + (nbFilter.unit === u.id ? ' selected' : '') + '>' + esc(u.kicker) + '</option>'; }).join('') + '</select></div>' +
      '<div class="chips" style="margin-bottom:1rem"><button type="button" class="chip' + (!nbFilter.color ? ' on' : '') + '" data-nbcolor="">All colours</button>' + CP.COLORS.map(function (c) { return '<button type="button" class="chip' + (nbFilter.color === c ? ' on' : '') + '" data-nbcolor="' + c + '"><i style="width:.8rem;height:.8rem;border-radius:50%;background:var(--hl-' + c + ');display:inline-block"></i>' + esc(cfg.colors[c]) + '</button>'; }).join('') + '</div>' +
      '<div data-nblist>' + P.notebookList() + '</div>' +
      '<h2 class="sec">Back up &amp; export</h2><div class="row"><button class="btn sm" type="button" data-export="md">Export as Markdown</button><button class="btn sm ghost" type="button" data-export="json">Download backup (JSON)</button><label class="btn sm ghost"><input type="file" accept="application/json" data-import-backup hidden>Restore from backup…</label></div></div>';
    return h;
  };
  P.notebookList = function () {
    var anns = CP.store.anns().filter(function (a) {
      if (nbFilter.unit && a.unit !== nbFilter.unit) return false;
      if (nbFilter.color && a.color !== nbFilter.color) return false;
      if (nbFilter.q && CP.norm((a.quote || '') + ' ' + (a.note || '')).indexOf(CP.norm(nbFilter.q)) < 0) return false;
      return true;
    });
    var notes = CP.store.notes(), out = '';
    var byUnit = {};
    anns.forEach(function (a) { (byUnit[a.unit] = byUnit[a.unit] || []).push(a); });
    CP.UNITS.forEach(function (u) {
      var list = byUnit[u.id] || [];
      var sn = Object.keys(notes).filter(function (k) {
        if (nbFilter.color) return false;
        var p = k.split(':'); if (p[0] === 'en') { if (p[1] !== u.id) return false; } else if (p[0] === 'unit') { if (p[1] !== u.id) return false; } else if (p[0] !== u.id) return false;
        return !nbFilter.q || CP.norm(notes[k]).indexOf(CP.norm(nbFilter.q)) >= 0;
      });
      if (nbFilter.unit && nbFilter.unit !== u.id) return;
      if (!list.length && !sn.length) return;
      out += '<h2 class="sec">' + esc(u.kicker) + ' · ' + esc(u.title) + '</h2>';
      sn.forEach(function (k) {
        var p = k.split(':'), label = p[0] === 'en' ? 'Comment on endnote ' + p[2] : p[0] === 'unit' ? 'Chapter notes' : 'Notes on “' + CP.secTitle(u.id, +p[1]) + '”';
        out += '<div class="ann c-none"><b>' + esc(label) + '</b><div class="nt">' + esc(notes[k]) + '</div></div>';
      });
      list.sort(function (a, b) { return (a.sec - b.sec) || String(a.para).localeCompare(String(b.para), undefined, { numeric: true }) || a.start - b.start; });
      list.forEach(function (a) { out += V.annCard(a, { where: true }); });
    });
    var pn = Object.keys(notes).filter(function (k) { return k.indexOf('primer:') === 0 && !nbFilter.color && !nbFilter.unit && (!nbFilter.q || CP.norm(notes[k]).indexOf(CP.norm(nbFilter.q)) >= 0); });
    if (pn.length) { out += '<h2 class="sec">Before you begin</h2>'; pn.forEach(function (k) { var i = +k.split(':')[1]; out += '<div class="ann c-none"><b>' + esc(CP.primer.sections[i].title) + '</b><div class="nt">' + esc(notes[k]) + '</div></div>'; }); }
    return out || '<p class="muted">Nothing here yet. Open any reading stop, select a passage and pick a colour — it will appear here.</p>';
  };
  P.setNbFilter = function (k, v) { nbFilter[k] = v; };
  P.exportMarkdown = function () {
    var cfg = CP.store.settings(), anns = CP.store.anns(), notes = CP.store.notes(), md = '# My notes — The Cultural Politics of Emotion\n\n';
    CP.UNITS.forEach(function (u) {
      var list = anns.filter(function (a) { return a.unit === u.id; }), keys = Object.keys(notes).filter(function (k) { var p = k.split(':'); return p[0] === u.id || ((p[0] === 'unit' || p[0] === 'en') && p[1] === u.id); });
      if (!list.length && !keys.length) return;
      md += '## ' + u.kicker + ': ' + u.title + '\n\n';
      keys.forEach(function (k) { var p = k.split(':'); md += '**' + (p[0] === 'unit' ? 'Chapter notes' : p[0] === 'en' ? 'Endnote ' + p[2] + ' comment' : CP.secTitle(u.id, +p[1])) + '** — ' + notes[k].replace(/\n/g, '\n> ') + '\n\n'; });
      list.sort(function (a, b) { return (a.sec - b.sec) || String(a.para).localeCompare(String(b.para), undefined, { numeric: true }) || a.start - b.start; });
      list.forEach(function (a) { md += '- ' + (a.whole ? '*(paragraph note)*' : '“' + a.quote + '”') + ' _[' + (a.color ? cfg.colors[a.color] : 'note') + ' · ' + CP.secTitle(a.unit, a.sec) + ']_' + (a.note ? '\n  - **Note:** ' + a.note.replace(/\n/g, ' ') : '') + '\n'; });
      md += '\n';
    });
    return md;
  };
  P.download = function (name, text, type) {
    var b = new Blob([text], { type: type || 'text/plain' }), a = document.createElement('a');
    a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  /* ---------- settings drawer ---------- */
  P.settings = function () {
    var cfg = CP.store.settings();
    var h = '<div class="settings"><label>Theme<select data-set="theme"><option value="auto">Match system</option><option value="paper">Paper (light)</option><option value="night">Night</option></select></label>' +
      '<label>Reading size<input type="range" min="15" max="26" value="' + cfg.size + '" data-set="size"></label>' +
      '<label>Line width<input type="range" min="30" max="56" value="' + cfg.width + '" data-set="width"></label>' +
      '<label>Underline glossary terms in the text<input type="checkbox" data-set="terms"' + (cfg.terms ? ' checked' : '') + '></label>' +
      '<label>Show scholar’s notes ◆<input type="checkbox" data-set="gloss"' + (cfg.gloss ? ' checked' : '') + '></label>' +
      '<label>Endnotes<select data-set="endnotes"><option value="popover">Pop up on click</option><option value="inline">Inline under paragraph</option></select></label>' +
      '<h4 style="margin:1rem 0 .3rem">What each highlight colour means</h4>' +
      CP.COLORS.map(function (c) { return '<label><span><i style="display:inline-block;width:.9rem;height:.9rem;border-radius:50%;background:var(--hl-' + c + ');vertical-align:middle;margin-right:.4rem"></i>' + c + '</span><input type="text" data-setcolor="' + c + '" value="' + esc(cfg.colors[c]) + '" maxlength="40"></label>'; }).join('') +
      '<h4 style="margin:1rem 0 .3rem">Your data</h4><div class="row"><button type="button" class="btn sm ghost" data-export="json">Download backup</button><button type="button" class="btn sm ghost" data-remove-book>Remove cached book text</button><button type="button" class="btn sm ghost" data-reset-all>Erase all my notes…</button></div>' +
      '<p class="muted small" style="margin-top:1rem">Everything is stored locally in this browser (localStorage + IndexedDB). Nothing is uploaded. The book’s text is never included in this app; it exists only in the EPUB you load.</p></div>';
    CP.ui.openDrawer('Settings', h, function (d) {
      $('[data-set="theme"]', d).value = cfg.theme; $('[data-set="endnotes"]', d).value = cfg.endnotes;
    });
  };
})();
