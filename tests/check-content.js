// Content validator: loads all authored content in a fake browser context and checks
//  (1) every referenced term/person id exists, (2) scholar-note anchors match the book text (if EPUB given).
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const ctx = { window: {}, console };
ctx.window = ctx; ctx.document = { createElement: () => ({ set innerHTML(v) { this._h = v; }, get textContent() { return String(this._h).replace(/<[^>]+>/g, ''); } }) };
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
run('js/core.js'); run('js/diagram.js');
fs.readdirSync(path.join(root, 'content')).sort().forEach(f => run('content/' + f));
const CP = ctx.CP;
let bad = 0; const err = m => { bad++; console.log('  ✗ ' + m); };
const refs = (o, where) => {
  if (o == null) return;
  if (typeof o === 'string') { for (const m of o.matchAll(/\[\[([tp]):([^\]|]+)/g)) { const tbl = m[1] === 't' ? CP.terms : CP.people; if (!tbl[m[2]]) err(`${where}: unknown ${m[1] === 't' ? 'term' : 'person'} [[${m[2]}]]`); } return; }
  if (Array.isArray(o)) return o.forEach((x, i) => refs(x, where));
  if (typeof o === 'object') for (const k of Object.keys(o)) {
    if (k === 'terms' && Array.isArray(o[k]) && o[k].every(x => typeof x === 'string')) o[k].forEach(id => { if (!CP.terms[id]) err(`${where}: unknown term "${id}"`); });
    else if ((k === 'people') && Array.isArray(o[k]) && o[k].every(x => typeof x === 'string')) o[k].forEach(id => { if (!CP.people[id]) err(`${where}: unknown person "${id}"`); });
    else if (k === 'related' && Array.isArray(o[k])) o[k].forEach(id => { if (!CP.terms[id]) err(`${where}: unknown related term "${id}"`); });
    else if (k === 'debates' && Array.isArray(o[k])) o[k].forEach(id => { if (!CP.debates.some(d => d.id === id)) err(`${where}: unknown debate "${id}"`); });
    else refs(o[k], where + '.' + k);
  }
};
Object.keys(CP.units).forEach(id => refs(CP.units[id], 'unit ' + id));
CP.termList.forEach(t => refs(t, 'term ' + t.id)); CP.peopleList.forEach(p => refs(p, 'person ' + p.id)); CP.debates.forEach(d => refs(d, 'debate ' + d.id));
if (CP.primer) refs(CP.primer, 'primer');
// section counts
CP.UNITS.forEach(u => { const c = CP.units[u.id]; if (!c) return console.log('  (no content yet for ' + u.id + ')'); if (!c.sections || !c.sections.length) err(u.id + ' has no sections'); });
// gloss anchors
const bookPath = process.env.BOOK;
if (bookPath) {
  const book = JSON.parse(fs.readFileSync(bookPath, 'utf8'));
  const plain = h => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const squash = s => s.replace(/[‘’‛]/g, "'").replace(/[“”]/g, '"').replace(/ /g, ' ').toLowerCase();
  Object.keys(CP.units).forEach(id => {
    const c = CP.units[id], bu = book.units.find(u => u.id === id); if (!bu) return;
    let secs = bu.sections;
    if (c.splits && secs.length === 1) { const ps = secs[0].paras; secs = c.splits.map((sp, i) => ({ title: sp.title, paras: ps.slice(sp.from, i + 1 < c.splits.length ? c.splits[i + 1].from : ps.length) })); }
    if (secs.length !== c.sections.length) err(`${id}: book has ${secs.length} sections but guide has ${c.sections.length}`);
    c.sections.forEach((sc, i) => {
      (sc.glosses || []).forEach((g, gi) => {
        const q = squash(g.q); const s = secs[i]; if (!s) return;
        if (!s.paras.some(p => squash(plain(p.html)).includes(q))) err(`${id} s${i} gloss #${gi} "${g.q.slice(0, 50)}" not found in section text`);
      });
      if (c.sections[i].title && secs[i] && secs[i].title && !c.splits) {
        const norm = x => x.toLowerCase().replace(/[^a-z]/g, ''); if (norm(c.sections[i].title).indexOf(norm(secs[i].title)) < 0 && i > 0) err(`${id} s${i}: title "${c.sections[i].title}" vs book "${secs[i].title}"`);
      }
    });
  });
}
console.log(bad ? `\n${bad} problem(s)` : '\ncontent OK');
process.exit(bad ? 1 : 0);
