/* Core: namespace, utilities, persistence, rich-text helpers. */
(function () {
  'use strict';
  var CP = window.CP = {
    units: {}, terms: {}, termList: [], people: {}, peopleList: [], debates: [], primer: null, lineage: null,
    book: null, // parsed EPUB (set after import)
    UNITS: [
      { id: 'intro', n: 'Intro', kicker: 'Introduction', title: 'Feel Your Way', emotion: 'orientation', short: 'Emotions & objects' },
      { id: 'ch1', n: '1', kicker: 'Chapter 1', title: 'The Contingency of Pain', emotion: 'pain', short: 'Pain' },
      { id: 'ch2', n: '2', kicker: 'Chapter 2', title: 'The Organisation of Hate', emotion: 'hate', short: 'Hate' },
      { id: 'ch3', n: '3', kicker: 'Chapter 3', title: 'The Affective Politics of Fear', emotion: 'fear', short: 'Fear' },
      { id: 'ch4', n: '4', kicker: 'Chapter 4', title: 'The Performativity of Disgust', emotion: 'disgust', short: 'Disgust' },
      { id: 'ch5', n: '5', kicker: 'Chapter 5', title: 'Shame Before Others', emotion: 'shame', short: 'Shame' },
      { id: 'ch6', n: '6', kicker: 'Chapter 6', title: 'In the Name of Love', emotion: 'love', short: 'Love' },
      { id: 'ch7', n: '7', kicker: 'Chapter 7', title: 'Queer Feelings', emotion: 'queer', short: 'Queer feelings' },
      { id: 'ch8', n: '8', kicker: 'Chapter 8', title: 'Feminist Attachments', emotion: 'feminist', short: 'Anger · wonder · hope' },
      { id: 'conclusion', n: 'End', kicker: 'Conclusion', title: 'Just Emotions', emotion: 'justice', short: 'Just emotions' },
      { id: 'afterword', n: 'Post', kicker: 'Afterword (2nd ed.)', title: 'Emotions and Their Objects', emotion: 'affect', short: 'Affective turn' }
    ]
  };
  CP.unitMeta = function (id) { return CP.UNITS.filter(function (u) { return u.id === id; })[0]; };

  /* ---------- registration of authored content ---------- */
  CP.addTerms = function (arr) { arr.forEach(function (t) { CP.terms[t.id] = t; CP.termList.push(t); }); };
  CP.addPeople = function (arr) { arr.forEach(function (p) { CP.people[p.id] = p; CP.peopleList.push(p); }); };
  CP.addDebates = function (arr) { arr.forEach(function (d) { CP.debates.push(d); }); };
  CP.unit = function (id, data) { data.id = id; CP.units[id] = data; };

  /* ---------- tiny helpers ---------- */
  CP.esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  CP.plain = function (html) {
    var d = document.createElement('div'); d.innerHTML = html; return (d.textContent || '').replace(/\s+/g, ' ').trim();
  };
  CP.norm = function (s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
  };
  CP.uid = function () { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); };
  CP.$ = function (sel, root) { return (root || document).querySelector(sel); };
  CP.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  CP.debounce = function (fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; };
  CP.toast = function (msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; t.setAttribute('role', 'status');
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2200);
  };

  /* Rich text: **bold**, *italic*, [[t:id|label]] term link, [[p:id|label]] person link, [[u:route|label]] route link.
     Everything else is escaped. Returns an HTML string. */
  CP.rich = function (s) {
    if (s == null) return '';
    var out = CP.esc(s);
    out = out.replace(/\[\[([tpu]):([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, k, id, label) {
      var raw = id.replace(/&amp;/g, '&');
      if (k === 't') return '<a class="term-link" data-term="' + raw + '" href="#/terms/' + raw + '">' + (label || (CP.terms[raw] ? CP.esc(CP.terms[raw].name) : raw)) + '</a>';
      if (k === 'p') return '<a class="person-link" data-person="' + raw + '" href="#/people/' + raw + '">' + (label || (CP.people[raw] ? CP.esc(CP.people[raw].name) : raw)) + '</a>';
      return '<a href="#/' + raw + '">' + (label || raw) + '</a>';
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/(^|[\s(‘'"])\*([^*\n]+)\*/g, '$1<i>$2</i>');
    return out;
  };
  CP.p = function (s, cls) { return '<p' + (cls ? ' class="' + cls + '"' : '') + '>' + CP.rich(s) + '</p>'; };

  /* ---------- persistence (localStorage with in-memory fallback; IndexedDB for the book) ---------- */
  var mem = {}, PFX = 'cpoe:';
  function lsGet(k) { try { return window.localStorage.getItem(PFX + k); } catch (e) { return mem[k] == null ? null : mem[k]; } }
  function lsSet(k, v) { try { window.localStorage.setItem(PFX + k, v); } catch (e) { mem[k] = v; } }
  var listeners = [];
  var S = CP.store = {
    get: function (k, d) { var v = lsGet(k); if (v == null) return d; try { return JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { lsSet(k, JSON.stringify(v)); listeners.forEach(function (f) { f(k); }); },
    onChange: function (f) { listeners.push(f); },
    defaults: {
      theme: 'auto', size: 19, width: 40, terms: true, gloss: true, endnotes: 'popover',
      colors: { yellow: 'Key claim', pink: 'Question / push back', blue: 'Term or concept', green: 'Evidence / example', purple: 'Connects to my work' }
    },
    settings: function () { var s = S.get('settings', {}); var d = S.defaults; var o = {}; Object.keys(d).forEach(function (k) { o[k] = s[k] === undefined ? d[k] : s[k]; }); o.colors = Object.assign({}, d.colors, s.colors || {}); return o; },
    setSetting: function (k, v) { var s = S.get('settings', {}); s[k] = v; S.set('settings', s); },
    anns: function () { return S.get('anns', []); },
    saveAnns: function (a) { S.set('anns', a); },
    note: function (key) { return (S.get('notes', {}))[key] || ''; },
    setNote: function (key, v) { var n = S.get('notes', {}); if (v) n[key] = v; else delete n[key]; S.set('notes', n); },
    notes: function () { return S.get('notes', {}); },
    done: function (key) { return !!(S.get('done', {}))[key]; },
    setDone: function (key, v) { var d = S.get('done', {}); if (v) d[key] = 1; else delete d[key]; S.set('done', d); },
    allDone: function () { return S.get('done', {}); }
  };

  CP.COLORS = ['yellow', 'pink', 'blue', 'green', 'purple'];

  /* IndexedDB cache for the parsed book (so it only needs to be imported once per browser) */
  function idb() {
    return new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error('IndexedDB unavailable'));
      var r = indexedDB.open('cpoe-companion', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('kv'); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }
  CP.bookStore = {
    load: function () {
      return idb().then(function (db) {
        return new Promise(function (res) {
          var q = db.transaction('kv').objectStore('kv').get('book');
          q.onsuccess = function () { res(q.result || null); }; q.onerror = function () { res(null); };
        });
      }).catch(function () { return null; });
    },
    save: function (book) {
      return idb().then(function (db) {
        return new Promise(function (res, rej) {
          var tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(book, 'book');
          tx.oncomplete = function () { res(true); }; tx.onerror = function () { rej(tx.error); };
        });
      }).catch(function () { return false; });
    },
    clear: function () {
      return idb().then(function (db) {
        return new Promise(function (res) {
          var tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').delete('book'); tx.oncomplete = function () { res(true); };
        });
      }).catch(function () { return false; });
    }
  };

  /* ---------- book accessors ---------- */
  CP.bookUnit = function (id) { return CP.book ? CP.book.units.filter(function (u) { return u.id === id; })[0] || null : null; };
  /* Sections for a unit. If the authored content declares `splits` (used where the printed text has no headings,
     e.g. the Conclusion), the single parsed section is divided into study sections at the given paragraph indices. */
  CP.sectionsOf = function (id) {
    var bu = CP.bookUnit(id), c = CP.units[id];
    if (!bu) return null;
    if (c && c.splits && bu.sections.length === 1) {
      var paras = bu.sections[0].paras;
      return c.splits.map(function (sp, i) {
        var from = sp.from, to = i + 1 < c.splits.length ? c.splits[i + 1].from : paras.length;
        return { id: id + '-s' + i, title: sp.title, paras: paras.slice(from, to), virtual: true };
      });
    }
    return bu.sections;
  };
  CP.sectionCount = function (id) {
    var c = CP.units[id]; var secs = CP.sectionsOf(id);
    if (secs) return secs.length;
    return c && c.sections ? c.sections.length : 0;
  };
  CP.secTitle = function (id, i) {
    var secs = CP.sectionsOf(id), c = CP.units[id];
    var cs = c && c.sections && c.sections[i];
    if (cs && cs.title) return cs.title;
    if (secs && secs[i]) return secs[i].title || 'Opening';
    return 'Section ' + (i + 1);
  };
})();
