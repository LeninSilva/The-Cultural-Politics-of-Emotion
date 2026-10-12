// Dev helper: parse an EPUB and dump plain text with paragraph ids (for authoring/QA, never committed output).
const fs = require('fs'), path = require('path');
const JSZip = require('../vendor/jszip.min.js');
const P = require('../js/epub.js');
(async () => {
  const [epub, outDir] = process.argv.slice(2);
  const book = await P.parse(fs.readFileSync(epub), JSZip);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'book.json'), JSON.stringify(book));
  for (const u of book.units) {
    let t = `# ${u.id} | ${u.kicker} | ${u.title} | words=${u.wordCount} notes=${u.notes.length}\n`;
    u.sections.forEach((s, si) => {
      t += `\n## [s${si}] ${s.title || '(opening)'}\n`;
      s.paras.forEach((p, pi) => { t += `\n[${p.id}]${p.kind !== 'p' ? ' (' + p.kind + ')' : ''} ${P.plain(p.html.replace(/<sup class="fn" data-n="(\d+)">\d+<\/sup>/g, '{^$1}'))}\n`; });
    });
    t += '\n## NOTES\n' + u.notes.map(n => `{${n.n}} ${P.plain(n.html)}`).join('\n') + '\n';
    fs.writeFileSync(path.join(outDir, u.id + '.txt'), t);
  }
  fs.writeFileSync(path.join(outDir, 'references.txt'), book.references.map(r => r.text).join('\n'));
  console.log(book.units.map(u => `${u.id}: secs=${u.sections.length} paras=${u.sections.reduce((a, s) => a + s.paras.length, 0)} notes=${u.notes.length} words=${u.wordCount} title=${u.title}`).join('\n'));
  console.log('refs', book.references.length);
})();
