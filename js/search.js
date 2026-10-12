/* Search: one index over the book text, endnotes, bibliography, authored guide, glossary, thinkers and the reader's own notes.
   Prefix + light stemming, AND semantics, phrase/title boosts, grouped results with highlighted snippets. */
(function () {
  'use strict';
  var CP = window.CP, $ = CP.$, esc = CP.esc, norm = CP.norm, S = CP.search = {};
  var docs = [], built = false;
  var TYPES = {
    text: 'Book text', endnote: 'Endnotes', guide: 'Guide & commentary', term: 'Key terms', person: 'Thinkers',
    debate: 'Debates & research', ref: 'References', mine: 'My notes & highlights'
  };
  S.TYPES = TYPES;

  function stem(w) {
    if (w.length > 5) w = w.replace(/(ations?|ation|ments?|ings?|ness|ies|ied|ed|es|ly|s)$/, function (m) { return m === 'ies' || m === 'ied' ? 'y' : ''; });
    else if (w.length > 3) w = w.replace(/s$/, '');
    return w;
  }
  function tokens(s) { return norm(s).split(/[^a-z0-9]+/).filter(Boolean); }
  function flatten(o, out, skip) {
    if (o == null) return out;
    if (typeof o === 'string') { out.push(o.replace(/\[\[[tpu]:[^\]|]+\|?([^\]]*)\]\]/g, '$1').replace(/\*/g, '')); return out; }
    if (Array.isArray(o)) { o.forEach(function (x) { flatten(x, out, skip); }); return out; }
    if (typeof o === 'object') Object.keys(o).forEach(function (k) { if (!skip[k]) flatten(o[k], out, skip); });
    return out;
  }
  var SKIP = { diagram: 1, diagrams: 1, glosses: 1, auto: 1, id: 1, q: 1, from: 1, to: 1, splits: 1 };

  function add(type, title, where, text, route, extra) {
    var d = { type: type, title: title, where: where, text: text, route: route, nt: norm(text), nti: norm(title) };
    if (extra) Object.assign(d, extra);
    docs.push(d);
  }

  S.build = function () {
    docs = [];
    // authored guide
    CP.UNITS.forEach(function (um) {
      var c = CP.units[um.id]; if (!c) return;
      var top = Object.assign({}, c); delete top.sections;
      add('guide', um.kicker + ' — ' + um.title + ' (overview)', um.kicker, flatten(top, [], SKIP).join(' '), 'u/' + um.id);
      (c.sections || []).forEach(function (s, i) {
        add('guide', um.kicker + ' · ' + CP.secTitle(um.id, i), um.kicker, flatten(s, [], SKIP).join(' '), 'u/' + um.id + '/' + i + '?tab=guide');
        (s.glosses || []).forEach(function (g) { add('guide', 'Scholar note: ' + g.t, um.kicker + ' · ' + CP.secTitle(um.id, i), g.b, 'u/' + um.id + '/' + i + '?q=' + encodeURIComponent(g.q.slice(0, 40))); });
      });
    });
    if (CP.primer) CP.primer.sections.forEach(function (s, i) {
      add('guide', 'Before you begin · ' + s.title, 'Primer', flatten(s, [], SKIP).join(' '), 'primer/' + i);
    });
    CP.termList.forEach(function (t) { add('term', t.name, 'Key term', flatten(t, [], SKIP).join(' '), 'terms/' + t.id); });
    CP.peopleList.forEach(function (p) { add('person', p.name, 'Thinker', flatten(p, [], SKIP).join(' '), 'people/' + p.id); });
    CP.debates.forEach(function (d) { add('debate', d.title, 'Debate', flatten(d, [], SKIP).join(' '), 'debates/' + d.id); });
    // verbatim book
    if (CP.book) {
      CP.book.units.forEach(function (u) {
        var um = CP.unitMeta(u.id) || { kicker: u.kicker, title: u.title };
        var secs = CP.sectionsOf(u.id) || u.sections, noteMap = {};
        secs.forEach(function (s, si) {
          s.paras.forEach(function (p) {
            var txt = CP.plain(p.html);
            add('text', um.kicker + ' · ' + (CP.secTitle(u.id, si)), um.kicker, txt, 'u/' + u.id + '/' + si + '?p=' + p.id, { pid: p.id });
            (p.html.match(/data-n="(\d+)"/g) || []).forEach(function (m) { noteMap[m.match(/\d+/)[0]] = { si: si, pid: p.id }; });
          });
        });
        u.notes.forEach(function (n) {
          var loc = noteMap[n.n] || { si: 0, pid: null };
          add('endnote', um.kicker + ' · endnote ' + n.n, um.kicker, CP.plain(n.html), 'u/' + u.id + '/' + loc.si + (loc.pid ? '?p=' + loc.pid + '&n=' + n.n : ''));
        });
      });
      CP.book.references.forEach(function (r, i) { add('ref', r.text.slice(0, 90), 'References', r.text, 'refs?i=' + i); });
    }
    // reader's own material
    CP.store.anns().forEach(function (a) {
      var um = CP.unitMeta(a.unit) || { kicker: a.unit };
      add('mine', (a.note ? 'Note: ' : 'Highlight: ') + (a.quote || '').slice(0, 70), um.kicker, (a.quote || '') + ' ' + (a.note || ''), 'u/' + a.unit + '/' + a.sec + '?p=' + a.para + '&a=' + a.id);
    });
    var nn = CP.store.notes();
    Object.keys(nn).forEach(function (k) {
      var p = k.split(':'), label, route;
      if (p[0] === 'en') { label = 'Comment on endnote ' + p[2]; route = 'u/' + p[1] + '/0?tab=notes'; }
      else if (p[0] === 'unit') { label = 'Chapter note'; route = 'u/' + p[1]; }
      else { label = 'Section note'; route = 'u/' + p[0] + '/' + p[1] + '?tab=notes'; }
      add('mine', label + ' (' + k + ')', 'My notes', nn[k], route);
    });
    built = true;
  };
  S.invalidate = function () { built = false; };

  S.run = function (q, opts) {
    opts = opts || {};
    if (!built) S.build();
    var qt = tokens(q).map(stem);
    if (!qt.length) return { results: [], counts: {}, tokens: [] };
    var phrase = norm(q).trim(), res = [];
    var rxs = qt.map(function (t) { return new RegExp('(^|[^a-z0-9])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'); });
    docs.forEach(function (d) {
      if (opts.unit && !(d.route.indexOf('u/' + opts.unit) === 0)) return;
      var score = 0, ok = true;
      for (var i = 0; i < rxs.length; i++) {
        var m = d.nt.match(rxs[i]), mt = d.nti.match(rxs[i]);
        if (!m && !mt) { ok = false; break; }
        score += Math.min((m ? m.length : 0), 6) + (mt ? 8 : 0);
      }
      if (!ok) return;
      if (qt.length > 1 && d.nt.indexOf(phrase) >= 0) score += 12;
      if (d.nti.indexOf(phrase) >= 0) score += 14;
      if (d.type === 'term' || d.type === 'person') score += 4;
      if (d.type === 'mine') score += 3;
      res.push({ d: d, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    var counts = {}; res.forEach(function (r) { counts[r.d.type] = (counts[r.d.type] || 0) + 1; });
    return { results: res, counts: counts, tokens: qt };
  };
  S.snippet = function (d, qt) {
    var text = d.text, nt = d.nt, pos = -1;
    for (var i = 0; i < qt.length; i++) { var m = new RegExp('(^|[^a-z0-9])' + qt[i]).exec(nt); if (m) { pos = m.index + m[1].length; break; } }
    if (pos < 0) pos = 0;
    var a = Math.max(0, pos - 80), b = Math.min(text.length, pos + 170);
    var sn = (a > 0 ? '…' : '') + text.slice(a, b) + (b < text.length ? '…' : '');
    var h = esc(sn);
    qt.forEach(function (t) { h = h.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-z]*)', 'gi'), '<mark class="hit">$1</mark>'); });
    return h;
  };

  /* ---------- palette ---------- */
  var filter = 'all', selIdx = 0, last = null;
  S.open = function (prefill, unitScope) {
    if ($('.palette')) { $('.palette input').focus(); if (prefill != null) { $('.palette input').value = prefill; render(); } return; }
    S.invalidate();
    var el = document.createElement('div'); el.className = 'palette'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Search');
    el.innerHTML = '<div class="pal-box"><div class="pal-in"><span aria-hidden="true">🔍</span><input type="search" placeholder="Search the book, endnotes, terms, thinkers, references, your notes…" aria-label="Search" autocomplete="off" spellcheck="false"><button class="btn sm ghost" type="button" data-pal-close>Esc</button></div>' +
      '<div class="pal-filters" role="group" aria-label="Filter results"></div><div class="pal-res" role="listbox"></div></div>';
    document.body.appendChild(el);
    el.dataset.scope = unitScope || '';
    var inp = $('input', el); inp.value = prefill || ''; inp.focus();
    el.addEventListener('mousedown', function (e) { if (e.target === el) S.close(); });
    inp.addEventListener('input', function () { selIdx = 0; render(); });
    el.addEventListener('keydown', function (e) {
      var items = CP.$$('.pal-item', el);
      if (e.key === 'Escape') { e.stopPropagation(); S.close(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); selIdx = Math.min(items.length - 1, selIdx + 1); mark(items); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); selIdx = Math.max(0, selIdx - 1); mark(items); }
      else if (e.key === 'Enter' && items[selIdx]) { e.preventDefault(); items[selIdx].click(); }
    });
    el.addEventListener('click', function (e) {
      if (e.target.closest('[data-pal-close]')) return S.close();
      var f = e.target.closest('[data-pf]'); if (f) { filter = f.dataset.pf; selIdx = 0; render(); return; }
      var sc = e.target.closest('[data-pscope]'); if (sc) { el.dataset.scope = el.dataset.scope ? '' : sc.dataset.pscope; render(); return; }
      var it = e.target.closest('.pal-item');
      if (it) { var q = inp.value; S.close(); S.go(it.dataset.route, q); }
    });
    render();
  };
  S.go = function (route, q) {
    var r = route; if (/^u\//.test(r) && /\?p=/.test(r) && q) r += '&q=' + encodeURIComponent(q);
    if (location.hash === '#/' + r) window.dispatchEvent(new HashChangeEvent('hashchange')); else location.hash = '#/' + r;
  };
  S.close = function () { var p = $('.palette'); if (p) p.remove(); };
  function mark(items) { items.forEach(function (x, i) { x.classList.toggle('sel', i === selIdx); }); if (items[selIdx]) items[selIdx].scrollIntoView({ block: 'nearest' }); }
  function render() {
    var el = $('.palette'); if (!el) return;
    var q = $('input', el).value, scope = el.dataset.scope;
    var out = S.run(q, { unit: scope || null }), res = out.results, box = $('.pal-res', el);
    var f = $('.pal-filters', el);
    if (!q.trim()) {
      f.innerHTML = ''; box.innerHTML = '<div class="pal-empty">Type to search everything — try <b>sticky</b>, <b>Fanon</b>, <b>happiness</b>, <b>stranger</b>, or a phrase from a chapter.<br><span class="small">Shortcuts: <kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> to open · <kbd>↑</kbd><kbd>↓</kbd> to move · <kbd>Enter</kbd> to go</span></div>';
      return;
    }
    var chips = '<button type="button" class="chip' + (filter === 'all' ? ' on' : '') + '" data-pf="all">All ' + res.length + '</button>';
    Object.keys(TYPES).forEach(function (t) { if (out.counts[t]) chips += '<button type="button" class="chip' + (filter === t ? ' on' : '') + '" data-pf="' + t + '">' + TYPES[t] + ' ' + out.counts[t] + '</button>'; });
    var um = location.hash.match(/^#\/u\/([a-z0-9]+)/);
    if (um) chips += '<button type="button" class="chip' + (scope ? ' on' : '') + '" data-pscope="' + um[1] + '">Only this chapter</button>';
    f.innerHTML = chips;
    var list = filter === 'all' ? res : res.filter(function (r) { return r.d.type === filter; });
    if (!list.length) { box.innerHTML = '<div class="pal-empty">No matches for “' + esc(q) + '”. Try fewer or different words.</div>'; return; }
    var html = '', lastType = null, shown = 0, cap = filter === 'all' ? 8 : 60, per = {};
    // in "All", group by type but cap each group so one big type cannot bury the rest
    var order = filter === 'all' ? ['term', 'person', 'guide', 'text', 'endnote', 'debate', 'mine', 'ref'] : [filter];
    order.forEach(function (t) {
      var items = list.filter(function (r) { return r.d.type === t; });
      if (!items.length) return;
      html += '<div class="pal-group">' + TYPES[t] + ' · ' + items.length + '</div>';
      items.slice(0, cap).forEach(function (r) {
        html += '<button type="button" class="pal-item" role="option" data-route="' + esc(r.d.route) + '"><span class="t">' + esc(r.d.title) + '</span><span class="w">' + esc(r.d.where) + '</span><span class="s">' + S.snippet(r.d, out.tokens) + '</span></button>';
      });
      if (items.length > cap) html += '<button type="button" class="pal-item" data-pf="' + t + '" style="color:var(--crimson);font-weight:700">…and ' + (items.length - cap) + ' more in ' + TYPES[t] + ' — use the filter above</button>';
    });
    box.innerHTML = html; selIdx = 0; mark(CP.$$('.pal-item', el));
    last = out;
  }
})();
