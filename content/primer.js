/* "Before you begin": the generated introductory chapter. */
(function () {
  CP.primer = {
    sections: [
      {
        title: 'Why this book, and why now', short: 'Why this book',
        tagline: 'A book that asks not “what is emotion?” but “what do emotions *do* — and to whom?”',
        body: [
          { lede: 'Sara Ahmed’s *The Cultural Politics of Emotion* (2004; 2nd ed. 2014) is one of the most cited works in the humanities of the last two decades. It is also dense, allusive, and easy to misread. This primer gives you what you need before page one.' },
          { h: 'The one-sentence version' },
          { p: 'Emotions are not private states that live inside individuals; they are **social and cultural practices** that circulate between bodies and signs, and in circulating they **make** the surfaces and boundaries — individual and collective — that we then take for granted.' },
          { h: 'Why a book club should care' },
          { cards: [
            { h: 'It changes how you read news', p: 'You start noticing how a word (“bogus”, “swamped”, “illegal”) or a figure (the asylum seeker, the terrorist) accumulates feeling through repetition.' },
            { h: 'It gives you a theory of “stickiness”', p: 'Why do some feelings seem to belong to some bodies, groups or objects? Ahmed has an answer that does not require blaming individuals.' },
            { h: 'It models a way of reading', p: 'She reads texts closely — a charity letter, a report, a speech — and shows how the arguments in them work through feeling.' }
          ] },
          { callout: { kind: 'why', h: 'The big question to carry in', p: 'If emotions move between us and shape who counts as “we” and who counts as a threat, then **whose feelings** get treated as natural, and whose as a problem?' } },
          { h: 'What it is not' },
          { list: [
            'It is not a psychology of emotions or a self-help book about feelings.',
            'It does not say emotions are “merely” constructed or unreal. Her claim is about how they *work*, not whether they are felt.',
            'It is not easy reading, and it is not meant to be read for a single thesis. Expect an argument that builds by accumulation and by close reading.'
          ] }
        ]
      },
      {
        title: 'The argument in one picture', short: 'The argument',
        tagline: 'Eight chapters, one claim: emotions are what attach — and detach — us from others.',
        body: [
          { p: 'The book’s structure repays a minute before you start. Each chapter takes one family of emotion and shows a different part of the same mechanism.' },
          { diagram: {
            title: 'The shape of the book', w: 640,
            zones: [{ x: 10, y: 10, w: 620, h: 110, label: 'Part A — How emotions work' }, { x: 10, y: 135, w: 620, h: 130, label: 'Part B — Emotions and the nation' }, { x: 10, y: 280, w: 620, h: 90, label: 'Part C — Feminism and the Afterword' }],
            nodes: [
              { id: 'i', x: 90, y: 75, w: 120, label: 'Introduction', sub: 'emotions do things', kind: 'e' },
              { id: '1', x: 250, y: 75, w: 120, label: 'Ch. 1 Pain', sub: 'surfaces made', kind: 'a' },
              { id: '2', x: 410, y: 75, w: 120, label: 'Ch. 2 Hate', sub: 'economies', kind: 'b' },
              { id: '3', x: 560, y: 75, w: 120, label: 'Ch. 3 Fear', sub: 'moving away', kind: 'b' },
              { id: '4', x: 150, y: 205, w: 130, label: 'Ch. 4 Disgust', sub: 'stickiness', kind: 'c' },
              { id: '5', x: 320, y: 205, w: 130, label: 'Ch. 5 Shame', sub: 'national ideals', kind: 'c' },
              { id: '6', x: 490, y: 205, w: 130, label: 'Ch. 6 Love', sub: 'conditional', kind: 'c' },
              { id: '7', x: 220, y: 330, w: 130, label: 'Ch. 7 Queer feelings', sub: 'orientation', kind: 'd' },
              { id: '8', x: 400, y: 330, w: 130, label: 'Ch. 8 Feminism', sub: 'feeling collectively', kind: 'd' }
            ],
            edges: [{ from: 'i', to: '1' }, { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4', curve: 30 }, { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7', curve: -30 }, { from: '7', to: '8' }],
            caption: 'Read in order, the chapters move from the body to the nation and then back to a politics of feeling that could be otherwise.'
          } },
          { p: 'Do not worry about the detail yet. The orientation to hold: each chapter tests the same claim on a different emotion, so by the end you can see how **sticky signs**, **orientations** and **attachments** work together.' }
        ]
      },
      {
        title: 'Seven ideas to have in hand', short: 'Seven ideas',
        tagline: 'Her vocabulary is the real difficulty. These seven terms unlock most of the book.',
        body: [
          { p: 'Click any card to open the full entry. Each is also linked wherever it appears in the book.' },
          { terms: ['affective-economies', 'sticky', 'circulation', 'impression', 'orientation', 'attachment', 'performativity'] },
          { callout: { kind: 'tip', h: 'A working summary', p: 'Signs *circulate* → the more they circulate the more they accumulate *affective value* → this makes them *sticky* → stickiness *attaches* feelings to some bodies and objects → bodies are then *oriented* toward and away from others.' } },
          { questions: ['Which of these seven terms feels most counter-intuitive to you, and why?', 'Can you think of a word or figure in recent news that has become “sticky” in her sense?'] }
        ]
      },
      {
        title: 'The conversation she joins', short: 'The conversation',
        tagline: 'Ahmed writes inside, against and alongside several traditions. Here is the map.',
        body: [
          { p: 'Book-club conversation goes better if you know which bookshelves she is pulling from. There are four.' },
          { table: {
            head: ['Tradition', 'What she takes', 'Where she departs'],
            rows: [
              ['**Phenomenology** (Merleau-Ponty, Sartre, Husserl)', 'Experience is directed at objects; bodies are oriented.', 'Takes the “body” as a neutral starting point; she asks which bodies are allowed to be neutral.'],
              ['**Psychoanalysis** (Freud, Klein, Lacan)', 'Projection, introjection, ambivalence, the fantasy of the other.', 'Moves emotion from the inner life of individuals to the circulation between them.'],
              ['**Poststructuralism** (Derrida, Butler, Foucault)', 'Signs gain meaning through difference; performativity.', 'Adds the body’s feeling and its histories of contact.'],
              ['**Feminist, queer and critical race theory** (Lorde, hooks, Fanon, Spivak)', 'Emotions as political and as sites of knowledge; the colonial scene.', 'Insists that theory of emotion be read from the experience of those cast as emotional.']
            ]
          } },
          { diagram: {
            title: 'Where the book sits', w: 600,
            nodes: [
              { id: 'p', x: 130, y: 70, w: 160, label: 'Phenomenology', sub: 'orientation, bodies', kind: 'a' },
              { id: 'ps', x: 470, y: 70, w: 160, label: 'Psychoanalysis', sub: 'projection, fantasy', kind: 'b' },
              { id: 'c', x: 300, y: 170, w: 180, label: 'The Cultural Politics of Emotion', kind: 'e', shape: 'pill' },
              { id: 'po', x: 130, y: 270, w: 160, label: 'Poststructuralism', sub: 'signs, performativity', kind: 'c' },
              { id: 'f', x: 470, y: 270, w: 180, label: 'Feminist, queer & race theory', sub: 'politics of feeling', kind: 'd' }
            ],
            edges: [{ from: 'p', to: 'c' }, { from: 'ps', to: 'c' }, { from: 'po', to: 'c' }, { from: 'f', to: 'c' }],
            caption: 'Four traditions feed the book; none supplies its method alone.'
          } },
          { p: 'For the individual thinkers, see the **Thinkers** page, which also carries a larger map of the conversation.' },
          { people: ['butler', 'sedgwick', 'fanon', 'lorde', 'freud', 'marx'] }
        ]
      },
      {
        title: 'How to read her: method and style', short: 'Method & style',
        tagline: 'Her sentences are doing argument. Here is how to read them.',
        body: [
          { p: 'Ahmed is often called “difficult”, but the difficulty is largely of habit: she uses words that have everyday meanings (*stick*, *surface*, *turn*) with theoretical ones, and she builds through **repetition with variation**.' },
          { cards: [
            { h: 'Close reading as method', p: 'Each chapter works through a small set of texts — a letter, a report, a speech — and lets theory come from them.' },
            { h: 'Words as arguments', p: 'Watch the verbs: “move”, “stick”, “slide”, “turn”. They carry the theory.' },
            { h: 'Etymology as evidence', p: '“Contingency” from *contingere*, “emotion” from *emovere*. She uses word histories to show that language already holds the argument.' }
          ] },
          { callout: { kind: 'tip', h: 'A reading tip', p: 'When a sentence seems to say something obvious, ask what it **declines** to say. Ahmed often resists the “inside vs outside” and “individual vs collective” oppositions by quietly denying that either is a starting point.' } },
          { fold: { h: 'On being “charitable”', p: 'This companion tries to state her argument in the form she would recognise, before criticising. A good test of fairness: could Ahmed read the paragraph and say “yes, that is what I meant”? The “Objections” boxes then give the strongest criticisms, so you can decide for yourself.' } }
        ]
      },
      {
        title: 'How to use this app', short: 'Using this app',
        tagline: 'Everything is a click, a key, or a highlight away.',
        body: [
          { list: [
            '**Read** the book on the left; the **Guide** beside it explains the same section.',
            '**Select any text** to highlight in five colours, add a note, copy, or search for it elsewhere.',
            '**Click any underlined term or name** for a plain-language definition, Ahmed’s use, and where to read more.',
            '**Dotted underlines** mark scholar’s notes: sources, allusions and context for that phrase.',
            'Press **/** or **Ctrl+K** to search everything: the text, endnotes, guide, terms, thinkers, references and your own notes.',
            'Your highlights and notes stay in your browser. Export them as Markdown or JSON from **My notebook** at any time.'
          ] },
          { callout: { kind: 'tip', h: 'Loading the book', p: 'The app does not contain the book’s text. Import your own EPUB once on the home page; it is stored only in your browser.' } }
        ]
      },
      {
        title: 'Running the book club', short: 'Club guide',
        tagline: 'A suggested plan for eight to ten sessions, with questions that open conversation.',
        body: [
          { table: {
            head: ['Session', 'Reading', 'Open with'],
            rows: [
              ['1', 'Introduction', 'Think of an emotion you would call “private”. What would it mean if it were social?'],
              ['2', 'Ch. 1 — Pain', 'When has someone’s pain been made into a story you were invited to feel?'],
              ['3', 'Ch. 2 — Hate', 'What word or figure has become “sticky” in your own context?'],
              ['4', 'Ch. 3 — Fear', 'How does fear change how you move through public space?'],
              ['5', 'Ch. 4 — Disgust', 'What does disgust do that anger does not?'],
              ['6', 'Ch. 5 — Shame', 'Can an apology be a form of self-congratulation?'],
              ['7', 'Ch. 6 — Love', 'When does love of country or family become a condition?'],
              ['8', 'Ch. 7 — Queer feelings', 'What does it mean to say a feeling “directs” you?'],
              ['9', 'Ch. 8 — Feminism; Conclusion', 'Is a politics that works through feeling stronger or weaker for it?']
            ]
          } },
          { questions: ['What was the one claim you most resisted? What would change your mind?', 'Where did you feel the book was describing something you recognise from your own life?', 'What would the book look like if it were written about a different country or decade?'] },
          { h: 'Ground rules that help' },
          { list: ['Ask “what does this concept let us see?” before “do I agree?”.', 'Bring one passage you found difficult and read it aloud together.', 'Notice when we ourselves are making feelings “stick” in the room.'] }
        ]
      }
    ]
  };
})();
