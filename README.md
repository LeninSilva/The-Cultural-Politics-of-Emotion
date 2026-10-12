# The Cultural Politics of Emotion — a book-club companion

An interactive, graduate-level reading companion for Sara Ahmed's *The Cultural Politics of Emotion* (2nd ed.).

## Open it

Open `index.html` in a modern browser (no build step, no server needed). It can also be hosted on any static host (GitHub Pages, Netlify…).

On the home page, **import your own EPUB** of the book. It is parsed in your browser and cached locally (IndexedDB); the book text is never uploaded and is **not part of this repository** (it is under copyright).

## What's inside

- **Before you begin** — a generated primer: why the book matters, the argument in one picture, seven key ideas, the intellectual conversation, how to read Ahmed, and a book-club plan.
- **Every chapter and section** — the verbatim text beside a guide: the gist, Ahmed's argument in her own terms (charitably), context, objections, diagrams, questions, and "scholar's notes" attached to specific phrases.
- **Key terms** (~95) and **thinkers** (~100): click any underlined word or name for a deep entry.
- **Debates & current research**, with reading lists; a searchable **bibliography** with the chapters that cite each work.
- **Your notes**: highlights in five renamable colours, notes on selections, paragraphs, sections and chapters; your own footnotes next to the book's endnotes; a notebook with filters and Markdown/JSON export and backup/restore.
- **Search** (`/` or `Ctrl+K`): text, endnotes, guide, terms, thinkers, debates, references and your notes.

Annotations, progress and settings are stored in your browser's `localStorage` (prefix `cpoe:`).

## Develop

```
node tests/check-content.js                      # validates cross-references in content/
BOOK=path/to/book.json node tests/check-content.js   # also checks scholar-note anchors against the text (see tools/dump-text.js)
PW=/path/to/playwright EPUB=/path/to/book.epub node tests/e2e.js
```

Authored content lives in `content/` (one file per unit, plus terms, people, debates, primer). Diagrams are declarative specs rendered by `js/diagram.js`.

`vendor/jszip.min.js` is JSZip 3.10.1 (MIT/GPL dual-licensed; see `vendor/JSZIP-LICENSE.md`).
