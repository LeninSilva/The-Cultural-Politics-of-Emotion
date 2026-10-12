/* App shell: router, sidebar, global event handling, import, settings. */
(function () {
  'use strict';
  var CP = window.CP, V = CP.views, P = CP.pages, $ = CP.$, $$ = CP.$$, esc = CP.esc;
  var main, side;

  /* ---------- settings ---------- */
  function applySettings() {
    var c = CP.store.settings(), r = document.documentElement;
    if (c.theme === 'paper' || c.theme === 'night') r.setAttribute('data-theme', c.theme); else r.removeAttribute('data-theme');
    r.style.setProperty('--read-size', c.size + 'px'); r.style.setProperty('--read-width', c.width + 'rem');
    document.body.classList.toggle('hide-terms', !c.terms); document.body.classList.toggle('hide-gloss', !c.gloss);
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var raw = location.hash.replace(/^#\/?/, ''), q = {}, i = raw.indexOf('?');
    if (i >= 0) { raw.slice(i + 1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) q[p[0]] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); }); raw = raw.slice(0, i); }
    return { parts: raw.split('/').filter(Boolean), q: q, raw: raw };
  }
  var lastRoute = '';
  function render(opts) {
    opts = opts || {};
    var r = parseHash(), p = r.parts, html = '', after = null, title = 'Cultural Politics of Emotion — Book Club Companion', curRoute = r.raw;
    CP.ui.closePop(); CP.ui.removeSelTool();
    var head = p[0] || '';
    if (head === '') { html = P.home(); }
    else if (head === 'primer') { var pi = parseInt(p[1] || '0', 10) || 0; html = P.primer(pi); title = (CP.primer ? CP.primer.sections[Math.min(pi, CP.primer.sections.length - 1)].title : 'Primer'); curRoute = 'primer/' + pi; }
    else if (head === 'u') {
      var id = p[1];
      if (p[2] !== undefined) { var si = parseInt(p[2], 10) || 0; html = V.section(id, si); after = function () { V.afterSection(r.q); }; title = CP.secTitle(id, si) + ' · ' + ((CP.unitMeta(id) || {}).kicker || ''); curRoute = 'u/' + id + '/' + si; }
      else { html = V.unit(id); after = function () { V.afterUnit(id); }; title = (CP.unitMeta(id) || {}).title || 'Chapter'; }
    }
    else if (head === 'terms') {
      if (p[1] && CP.terms[p[1]]) { var t = CP.terms[p[1]]; html = '<div class="page narrow"><div class="crumbs"><a href="#/terms">Key terms</a> › ' + esc(t.name) + '</div><h1 class="title">' + esc(t.name) + '</h1>' + V.termHtml(t).replace(/<p style="margin-top:1.4rem">[\s\S]*$/, '') + '</div>'; title = t.name; }
      else html = P.terms();
    }
    else if (head === 'people') {
      if (p[1] && CP.people[p[1]]) { var pe = CP.people[p[1]]; html = '<div class="page narrow"><div class="crumbs"><a href="#/people">Thinkers</a> › ' + esc(pe.name) + '</div><h1 class="title">' + esc(pe.name) + '</h1>' + V.personHtml(pe).replace(/<p style="margin-top:1.4rem">[\s\S]*$/, '') + '</div>'; title = pe.name; }
      else html = P.people();
    }
    else if (head === 'debates') { html = P.debates(p[1]); after = function () { if (p[1]) { var e = $('#deb-' + p[1]); if (e) e.scrollIntoView(); } }; }
    else if (head === 'refs') { html = P.refs(); after = function () { if (!CP.book) return; var o = P.refRows('', r.q.i); $('[data-reflist]').innerHTML = o.html; $('[data-refcount]').textContent = o.n + ' references'; var f = $('#ref-' + r.q.i); if (f) f.scrollIntoView({ block: 'center' }); }; }
    else if (head === 'notebook') { html = P.notebook(); }
    else { html = '<div class="page"><h1 class="title">Page not found</h1><p><a href="#/">Back to the start</a></p></div>'; }

    var sy = window.scrollY;
    main.innerHTML = html;
    CP.anno.linkProse(main);
    if (after) after();
    document.title = title;
    if (head === 'u' || head === 'primer') {
      var lbl = head === 'primer' ? 'Before you begin' : (p[2] !== undefined ? CP.secTitle(p[1], parseInt(p[2], 10) || 0) : ((CP.unitMeta(p[1]) || {}).title || ''));
      if (lbl) CP.store.set('last', { route: curRoute, label: lbl });
    }
    renderSide(curRoute, head);
    if (opts.keepScroll) window.scrollTo(0, sy);
    else if (!(r.q && r.q.p)) window.scrollTo(0, 0);
    document.body.classList.remove('nav-open');
    lastRoute = curRoute;
    $$('.topnav a').forEach(function (a) { a.classList.toggle('on', a.dataset.nav === head || (a.dataset.nav === 'u' && head === 'u')); });
  }

  function renderSide(curRoute, head) {
    var cur = parseHash().parts, h = '<h4>Start</h4><div class="toc-unit' + (head === '' ? ' on' : '') + '"><a href="#/"><span class="k">⌂</span>Home</a></div>';
    if (CP.primer) {
      h += '<div class="toc-unit' + (head === 'primer' ? ' on' : '') + '"><a href="#/primer/0"><span class="k">Pre</span>Before you begin</a></div>';
      if (head === 'primer') h += '<ul class="toc-secs">' + CP.primer.sections.map(function (s, i) { return '<li><a href="#/primer/' + i + '"' + (curRoute === 'primer/' + i ? ' class="on"' : '') + '><span class="tick' + (CP.store.done('primer:' + i) ? ' done' : '') + '"></span>' + esc(s.short || s.title) + '</a></li>'; }).join('') + '</ul>';
    }
    h += '<h4>The book</h4>';
    CP.UNITS.forEach(function (u) {
      var on = head === 'u' && cur[1] === u.id, n = CP.sectionCount(u.id);
      h += '<div class="toc-unit' + (on ? ' on' : '') + '"><a href="#/u/' + u.id + '"><span class="k">' + esc(u.n) + '</span>' + esc(u.title) + '</a></div>';
      if (on) {
        h += '<ul class="toc-secs"><li><a href="#/u/' + u.id + '"' + (curRoute === 'u/' + u.id ? ' class="on"' : '') + '>Overview &amp; argument</a></li>';
        for (var i = 0; i < n; i++) h += '<li><a href="#/u/' + u.id + '/' + i + '"' + (curRoute === 'u/' + u.id + '/' + i ? ' class="on"' : '') + '><span class="tick' + (CP.store.done(u.id + ':' + i) ? ' done' : '') + '"></span>' + esc(CP.secTitle(u.id, i)) + '</a></li>';
        h += '</ul>';
      }
    });
    h += '<h4>Companion</h4>' + [['terms', 'Key terms', 'Aa'], ['people', 'Thinkers', '☻'], ['debates', 'Debates & research', '⚑'], ['refs', 'References', '❡'], ['notebook', 'My notebook', '✎']].map(function (x) {
      return '<div class="toc-unit' + (head === x[0] ? ' on' : '') + '"><a href="#/' + x[0] + '"><span class="k">' + x[2] + '</span>' + x[1] + '</a></div>';
    }).join('');
    side.innerHTML = h;
  }

  /* ---------- import ---------- */
  function setStatus(msg, err) { $$('[data-import-status]').forEach(function (e) { e.textContent = msg; e.style.color = err ? 'var(--crimson)' : ''; }); }
  function importFile(file) {
    if (!file) return;
    setStatus('Reading ' + file.name + '…');
    var rd = new FileReader();
    rd.onerror = function () { setStatus('Could not read that file.', true); };
    rd.onload = function () {
      window.EpubParser.parse(rd.result, window.JSZip).then(function (book) {
        var need = ['intro', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8'], have = book.units.map(function (u) { return u.id; });
        var miss = need.filter(function (n) { return have.indexOf(n) < 0; });
        if (miss.length) throw new Error('This EPUB is missing: ' + miss.join(', ') + '. Please load The Cultural Politics of Emotion, 2nd edition.');
        CP.book = book; CP.search.invalidate();
        return CP.bookStore.save(book).then(function (ok) { CP.toast(ok ? 'Book loaded and saved on this device' : 'Book loaded (could not cache it — you will need to re-import next visit)'); render({ keepScroll: true }); });
      }).catch(function (e) { setStatus('Import failed: ' + e.message, true); });
    };
    rd.readAsArrayBuffer(file);
  }

  /* ---------- global events ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target, el;
    if ((el = t.closest('[data-term]'))) { if (t.closest('[data-drawer-close]') && el.tagName === 'A' && el.matches('.btn')) return; e.preventDefault(); V.openTerm(el.dataset.term); return; }
    if ((el = t.closest('[data-person]'))) { e.preventDefault(); V.openPerson(el.dataset.person); return; }
    if ((el = t.closest('sup.fn'))) { V.showEndnote(el); return; }
    if ((el = t.closest('.gloss'))) { V.showGloss(el); return; }
    if ((el = t.closest('.hl'))) { V.showAnn(el); return; }
    if ((el = t.closest('[data-find]'))) { CP.ui.closeDrawer(); CP.search.open(el.dataset.find); return; }
    if (t.closest('[data-open-search]')) { CP.search.open(''); return; }
    if ((el = t.closest('[data-markdone]'))) { CP.store.setDone(el.dataset.markdone, !CP.store.done(el.dataset.markdone)); render({ keepScroll: true }); return; }
    if ((el = t.closest('[data-comp]'))) {
      $$('[data-comp]').forEach(function (b) { b.classList.toggle('on', b === el); });
      $$('.comp-pane').forEach(function (p) { p.hidden = p.dataset.pane !== el.dataset.comp; });
      if (el.dataset.comp !== 'guide') V.fillLists(); return;
    }
    if ((el = t.closest('[data-showpane]'))) { $$('[data-showpane]').forEach(function (b) { b.classList.toggle('on', b === el); }); var st = $('.study'); if (st) st.dataset.show = el.dataset.showpane; return; }
    if ((el = t.closest('[data-ptool]'))) {
      var wrap = el.closest('.pw'), pid = wrap.dataset.wrap;
      if (el.dataset.ptool === 'note') V.paraNote(pid);
      else { var url = location.href.split('?')[0] + '?p=' + pid; try { navigator.clipboard.writeText(url); CP.toast('Link to paragraph copied'); } catch (er) { CP.toast('Copy not available'); } }
      return;
    }
    if ((el = t.closest('[data-showfn]'))) { var cs = V.currentSection(); var sup = $('sup.fn[data-n="' + el.dataset.showfn + '"]'); if (sup) { sup.scrollIntoView({ block: 'center', behavior: 'smooth' }); setTimeout(function () { V.showEndnote(sup); }, 350); } else CP.toast('That note belongs to another section'); return; }
    if ((el = t.closest('[data-fncomment]'))) {
      var key = el.dataset.fncomment, pop = CP.ui.pop(el, '<h5>My comment</h5><textarea aria-label="My comment"></textarea>'), ta = $('textarea', pop);
      ta.value = CP.store.note(key); ta.focus();
      ta.addEventListener('input', CP.debounce(function () { CP.store.setNote(key, ta.value.trim()); CP.search.invalidate(); V.fillLists(); }, 400)); return;
    }
    if ((el = t.closest('[data-gotogloss]'))) { e.preventDefault(); var g = $('[data-gloss="' + el.dataset.gotogloss + '"]'); if (g) { var sm = $('[data-showpane="read"]'); if (sm) sm.click(); g.scrollIntoView({ block: 'center', behavior: 'smooth' }); setTimeout(function () { V.showGloss(g); }, 350); } else CP.toast(CP.book ? 'Passage not found in your copy' : 'Load the book to see this passage'); return; }
    if ((el = t.closest('[data-delann]'))) { var a = CP.anno.get(el.dataset.delann); if (a) { var grp = a.grp ? CP.store.anns().filter(function (x) { return x.grp === a.grp; }) : [a]; grp.forEach(function (x) { CP.anno.remove(x.id); }); CP.search.invalidate(); if (V.currentSection() && $('.reader')) { V.refreshParas(grp); V.fillLists(); } else render({ keepScroll: true }); } return; }
    if ((el = t.closest('[data-cat]'))) { $$('[data-cat]').forEach(function (b) { b.classList.toggle('on', b === el); }); $('[data-termgrid]').innerHTML = P.termCards($('[data-termfilter]').value, el.dataset.cat); return; }
    if ((el = t.closest('[data-nbcolor]'))) { P.setNbFilter('color', el.dataset.nbcolor); render({ keepScroll: true }); return; }
    if ((el = t.closest('[data-export]'))) {
      if (el.dataset.export === 'md') P.download('my-notes-cultural-politics-of-emotion.md', P.exportMarkdown(), 'text/markdown');
      else P.download('cpoe-companion-backup.json', JSON.stringify({ app: 'cpoe-companion', v: 1, anns: CP.store.anns(), notes: CP.store.notes(), done: CP.store.allDone(), settings: CP.store.get('settings', {}) }, null, 1), 'application/json');
      return;
    }
    if (t.closest('[data-replace-book]')) { var fi = document.createElement('input'); fi.type = 'file'; fi.accept = '.epub'; fi.onchange = function () { importFile(fi.files[0]); }; fi.click(); return; }
    if (t.closest('[data-remove-book]')) { if (confirm('Remove the cached book text from this browser? Your notes and highlights are kept, and you can re-import the EPUB any time.')) CP.bookStore.clear().then(function () { CP.book = null; CP.search.invalidate(); CP.ui.closeDrawer(); render({ keepScroll: true }); }); return; }
    if (t.closest('[data-reset-all]')) { if (confirm('Erase ALL highlights, notes and progress on this device? This cannot be undone. (Download a backup first if unsure.)')) { ['anns', 'notes', 'done', 'last'].forEach(function (k) { CP.store.set(k, k === 'anns' ? [] : {}); }); CP.search.invalidate(); CP.ui.closeDrawer(); render(); } return; }
    if (t.closest('[data-open-settings]')) { P.settings(); return; }
    if (t.closest('[data-nav-toggle]')) { document.body.classList.toggle('nav-open'); return; }
    if (document.body.classList.contains('nav-open') && !t.closest('.side')) document.body.classList.remove('nav-open');
    if ((el = t.closest('.side a'))) document.body.classList.remove('nav-open');
  });
  document.addEventListener('keydown', function (e) {
    var el = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && el.matches && el.matches('.gloss, span.term-link, span.person-link, sup.fn')) { e.preventDefault(); el.click(); return; }
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable;
    if ((e.key === '/' && !typing && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); CP.search.open(''); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target, v;
    if (t.matches('[data-import-input]')) { importFile(t.files[0]); return; }
    if (t.matches('[data-import-backup]')) {
      var f = t.files[0]; if (!f) return; var rd = new FileReader();
      rd.onload = function () { try { var d = JSON.parse(rd.result); if (d.app !== 'cpoe-companion') throw new Error('not a backup'); CP.store.set('anns', d.anns || []); CP.store.set('notes', d.notes || {}); CP.store.set('done', d.done || {}); if (d.settings) CP.store.set('settings', d.settings); applySettings(); CP.search.invalidate(); CP.toast('Backup restored'); render(); } catch (er) { CP.toast('That file is not a valid backup'); } };
      rd.readAsText(f); return;
    }
    if (t.matches('[data-tog]')) { CP.store.setSetting(t.dataset.tog, t.checked); applySettings(); return; }
    if (t.matches('[data-endnotes]')) { CP.store.setSetting('endnotes', t.value); var cs = V.currentSection(); if (cs && cs.sec) cs.sec.paras.forEach(function (p) { V.paintPara(p.id); }); return; }
    if (t.matches('[data-allnotes]')) { V.fillLists(); return; }
    if (t.matches('[data-nbunit]')) { P.setNbFilter('unit', t.value); render({ keepScroll: true }); return; }
    if (t.matches('[data-set]')) {
      var k = t.dataset.set; v = t.type === 'checkbox' ? t.checked : t.type === 'range' ? +t.value : t.value;
      CP.store.setSetting(k, v); applySettings();
      if (k === 'endnotes') { var c2 = V.currentSection(); if (c2 && c2.sec) c2.sec.paras.forEach(function (p) { V.paintPara(p.id); }); }
    }
  });
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches('[data-set][type=range]')) { CP.store.setSetting(t.dataset.set, +t.value); applySettings(); }
    else if (t.matches('[data-setcolor]')) { var c = CP.store.settings().colors; c[t.dataset.setcolor] = t.value || t.dataset.setcolor; CP.store.setSetting('colors', c); }
    else if (t.matches('[data-termfilter]')) { var ac = $('[data-cat].on'); $('[data-termgrid]').innerHTML = P.termCards(t.value, ac ? ac.dataset.cat : ''); CP.anno.linkProse(main); }
    else if (t.matches('[data-peoplefilter]')) $('[data-peoplegrid]').innerHTML = P.peopleCards(t.value);
    else if (t.matches('[data-reffilter]')) { var o = P.refRows(t.value); $('[data-reflist]').innerHTML = o.html; $('[data-refcount]').textContent = o.n + ' references'; }
    else if (t.matches('[data-nbq]')) { P.setNbFilter('q', t.value); $('[data-nblist]').innerHTML = P.notebookList(); }
    else if (t.matches('[data-notekey]')) {
      var key = t.dataset.notekey, box = t.nextElementSibling;
      clearTimeout(t._tm); t._tm = setTimeout(function () { CP.store.setNote(key, t.value.trim()); CP.search.invalidate(); if (box && box.dataset.saved !== undefined) { box.textContent = 'Saved'; setTimeout(function () { box.textContent = ''; }, 1500); } }, 350);
    }
  });
  // drag & drop import
  document.addEventListener('dragover', function (e) { var z = e.target.closest && e.target.closest('[data-dropzone]'); if (z) { e.preventDefault(); z.classList.add('drag'); } });
  document.addEventListener('dragleave', function (e) { var z = e.target.closest && e.target.closest('[data-dropzone]'); if (z) z.classList.remove('drag'); });
  document.addEventListener('drop', function (e) { var z = e.target.closest && e.target.closest('[data-dropzone]'); if (z) { e.preventDefault(); z.classList.remove('drag'); importFile(e.dataTransfer.files[0]); } });

  // flush pending note edits before leaving the page
  window.addEventListener('beforeunload', function () { $$('[data-notekey]').forEach(function (t) { CP.store.setNote(t.dataset.notekey, t.value.trim()); }); });
  window.addEventListener('hashchange', function () { if (CP.ui.drawerOpen()) CP.ui.closeDrawer(); render(); });

  /* highlighting from the selection toolbar */
  CP.ui.onSelection({
    highlight: function (segs, color) { if (V.currentSection()) V.addHighlight(segs, color, false); },
    note: function (segs) { if (V.currentSection()) V.addHighlight(segs, null, true); },
    find: function (txt) { CP.search.open(txt.slice(0, 80)); }
  });

  /* ---------- boot ---------- */
  function boot() {
    main = $('#main'); side = $('#side');
    applySettings();
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySettings);
    CP.bookStore.load().then(function (b) { if (b && b.units) CP.book = b; render(); });
    $('#year') && ($('#year').textContent = new Date().getFullYear());
  }
  document.addEventListener('DOMContentLoaded', boot);
  CP._render = render;
})();
