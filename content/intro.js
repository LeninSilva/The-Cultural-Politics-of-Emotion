/* Introduction: Feel Your Way — authored guide (original commentary; the book's text is loaded from the reader's own EPUB). */
(function () {
  var D = CP.D;
  CP.unit('intro', {
    tagline: 'Stop asking what emotions *are*. Ask what they *do* — how they move between bodies, stick to some of them, and draw the borders of “us”.',
    claim: 'Emotions are not private possessions that sit inside individuals, nor social forces that sweep over them from outside. They are what happen in **contact** between bodies, objects and signs — and in the course of that contact they make the very **surfaces and boundaries** (the “inside” and the “outside”, the “I” and the “we”) that we then mistake for their starting points.',
    glance: [
      'Replace “What are emotions?” with “What do emotions do?” — then follow how they *circulate*, *stick*, and *slide*.',
      'Read public texts (posters, reports, speeches, websites) closely, focusing on figures of speech — metaphor and metonymy — rather than interviewing people about their inner lives.',
      'Emotions help explain why power is so hard to dislodge: they *attach* us to the norms and worlds that shape us, even when those norms hurt.',
      'The book’s “evidence” is deliberately partial and personal: an archive as a **contact zone**, not a neutral collection.'
    ],
    why: 'Most of us still carry a folk theory — emotions are inner states that we “have” and then “express”. Politics then looks like a clash of rational interests with feelings as noise or manipulation. Ahmed’s Introduction dismantles that picture in 7,000 words and replaces it with a toolkit you can use on any public text: who is being invited to feel what, about whom, and what does that feeling *do* to who counts as “us”? If you have ever wondered why “fear of immigrants”, “national pride”, or “outrage” feel so natural, this is the book that treats naturalness itself as the effect to be explained.',
    argument: {
      steps: [
        { h: 'Start from an ugly text', p: 'A British National Front poster about “soft touch Britain” shows a nation imagined as a body with skin, which others threaten to penetrate. Hate and love are doing the work — and the “you” who is addressed is already a white subject.' },
        { h: 'Emotion has been ranked beneath reason', p: 'Passion/passive, woman/man, primitive/civilised, body/mind: calling someone “emotional” has been a way of ranking bodies. Ahmed refuses to ask who *is* emotional and asks how “being emotional” gets attributed to some bodies and not others.' },
        { h: 'Rethink the object of emotion', p: 'Against both the “bodily feeling” and the “cognitive judgement” camps, Ahmed combines Descartes’ *contact* and phenomenology’s *aboutness*: feelings are shaped by contact with objects *and* involve a reading of that contact — an **impression**.' },
        { h: 'Reject “inside out” and “outside in”', p: 'Psychology puts emotion inside and moves it out; sociology puts it outside and moves it in. Both assume the inside/outside border is given. For Ahmed emotions *produce* that border: the I and the we take shape through contact.' },
        { h: 'Objects, not feelings, circulate', p: 'Emotions are not contagious substances passed between people. What circulates are **objects of emotion** (figures, signs, words), which become “sticky” — saturated with affect through histories that are concealed.' },
        { h: 'Method: the emotionality of texts', p: 'She reads how naming emotions (“the nation mourns”) generates the very subjects and objects it names, via performative speech acts. Each chapter enters through one emotion and ends with the *work* it does.' }
      ]
    },
    diagram: {
      title: 'The Introduction in one picture', w: 600,
      nodes: [
        { id: 'q1', x: 105, y: 80, w: 170, label: 'Old question', sub: '“What are emotions?” (inner states, to be classified)', kind: 'ghost' },
        { id: 'q2', x: 105, y: 190, w: 170, label: 'Ahmed’s question', sub: '“What do emotions do?”', kind: 'a' },
        { id: 'c', x: 330, y: 190, w: 140, label: 'Contact + reading', sub: 'an “impression”', kind: 'b' },
        { id: 's', x: 330, y: 80, w: 140, label: 'Surfaces & borders', sub: 'inside/outside, I/we', kind: 'c' },
        { id: 'o', x: 330, y: 300, w: 140, label: 'Objects circulate', sub: 'figures & signs get “sticky”', kind: 'c' },
        { id: 'p', x: 520, y: 190, w: 140, label: 'Cultural politics', sub: 'who counts as “us”; why norms hold', kind: 'e' }
      ],
      edges: [
        { from: 'q1', to: 'q2', label: 'replaced by', dash: true },
        { from: 'q2', to: 'c' },
        { from: 'c', to: 's', label: 'produces' },
        { from: 'c', to: 'o', label: 'repeated →' },
        { from: 's', to: 'p', curve: -20 },
        { from: 'o', to: 'p', curve: 20 }
      ],
      caption: 'The whole book in miniature: ask what emotions *do*; locate them in contact, not inside bodies; follow what circulates and sticks; and you arrive at a theory of how worlds and borders are made.'
    },
    context: [
      'Ahmed wrote this at a moment when two things collided: the **“affective turn”** in the humanities (c. 1995–2005) and the post-9/11, post-asylum-panic climate of Britain and Australia. She is a feminist, queer and critical race theorist (her earlier book *Strange Encounters*, 2000, is about how “strangers” are produced), so the project is to bring those traditions — especially Judith Butler on norms and repetition — into conversation with emotion theory.',
      'Her interlocutors fall into four groups: (1) **philosophers of emotion** (Descartes, Hume, James, Aristotle, Nussbaum, Solomon, Spelman, Jaggar); (2) **sociologists and anthropologists** who made emotion social (Durkheim, Hochschild, Lutz & Abu-Lughod, Scheff); (3) **psychoanalysis and Marxism**, which supply her models of displacement and accumulation; and (4) **feminist, queer and critical race theorists** who showed how power attaches us to our own subordination (Butler, Berlant, Brown, Fanon, Lorde, hooks).'
    ],
    terms: ['affective-economies', 'sticky', 'circulation', 'contact', 'impression', 'aboutness', 'inside-out-outside-in', 'surfaces', 'dumb-view', 'contagion', 'performativity', 'attachment', 'cultural-politics', 'archive'],
    people: ['spelman', 'jaggar', 'descartes', 'hume', 'james', 'darwin', 'durkheim', 'spinoza', 'freud', 'marx', 'butler', 'berlant', 'brown', 'cvetkovich', 'tomkins', 'sedgwick'],
    sources: [
      { who: 'Descartes', work: 'The Passions of the Soul (1649)', role: 'Objects excite passions not by their intrinsic nature but by how they may *help or harm* us.', use: 'Source of the idea of **contact**: feeling takes the shape of contact, not the properties of the object.' },
      { who: 'William James', work: '“What Is an Emotion?” (1884); Principles of Psychology (1890)', role: 'Emotion is the feeling of bodily change that follows perception.', use: 'The “sensation” pole of the old split — and the origin of the bear example Ahmed reworks.' },
      { who: 'Elizabeth Spelman; Alison Jaggar', work: '“Anger and Insubordination” (1989); “Love and Knowledge” (1996)', role: 'Feminist critique of the “dumb view”: emotions as brute, non-cognitive feelings; and of the gendering of reason/emotion.', use: 'Ahmed’s feminist route into the philosophy of emotion.' },
      { who: 'Émile Durkheim', work: 'The Rules of Sociological Method (1895); Elementary Forms of Religious Life (1912)', role: 'Emotion as the social force that binds a collective and penetrates individuals.', use: 'The canonical “outside in” model that she criticises while keeping its insight about binding.' },
      { who: 'Sigmund Freud; Karl Marx', work: 'Little Hans; commodity fetishism (Capital, vol. 1)', role: 'Displacement/repression; value as the concealment of labour.', use: 'Together they give her “affective economies”: sticky objects and the erasure of their histories of production.' },
      { who: 'Judith Butler', work: 'Bodies That Matter (1993); The Psychic Life of Power (1997)', role: 'Norms materialise through repetition; subjects become attached to the terms of their own subjection.', use: 'Frames the central question: *what sticks?*' },
      { who: 'Ann Cvetkovich', work: 'An Archive of Feelings (2003)', role: 'Culture as a repository of feelings (esp. trauma, queer public cultures).', use: 'Ahmed *distinguishes* her method: texts are not storehouses of feeling but sites where feeling circulates.' }
    ],
    conversation: [
      { h: 'The “affective turn” and its splits', p: 'The book became a founding text of affect studies — but a *contested* one. Brian Massumi and Eve Sedgwick (via Tomkins) treat **affect** as pre-personal intensity distinct from emotion; Ahmed refuses the split between sensation and meaning. The 2nd-edition Afterword answers this head-on (see the Afterword guide).' },
      { h: 'Is “emotions don’t belong to anyone” too deflationary?', p: 'Psychologists (e.g., Lisa Feldman Barrett’s constructionist work) agree emotions are not hard-wired “natural kinds” but they still investigate individual physiology. Ahmed’s answer would be that her project is orthogonal: she tracks social meaning, not neural mechanism — footnote 10 explicitly declines the biology-vs-culture debate.' },
      { h: 'The method debate: reading texts vs. studying people', p: 'Ethnographers and interview-based sociologists of emotion (Hochschild; Katz) sometimes object that textual reading cannot tell us what people feel. Ahmed (note 22) replies that interviews are texts too — and that her question is not what people feel but what circulating signs do.' },
      { h: 'Why the book still travels', p: 'Concepts such as “sticky”, “affective economies”, and “what emotions do” have become standard tools in media studies, migration studies, queer theory, education, geography (“emotional geographies”), and studies of online outrage and populism.' }
    ],
    debates: ['affective-turn', 'emotions-as-doing', 'populism-emotion'],
    questions: [
      'Ahmed says hardness is not the absence of emotion but “a different emotional orientation towards others.” Where in your own workplace or politics have you seen “being unemotional” function as a claim to authority?',
      'The “inside out” and “outside in” models both treat the inside/outside boundary as given. Can you think of a feeling you had that you could not locate cleanly as either “mine” or “the room’s”? What happens to your own sense of self if the boundary is produced rather than found?',
      'If what circulates are *objects* of emotion rather than emotions themselves, does that rescue or endanger the idea of shared feeling (grief at a funeral, a stadium crowd)?',
      'Is it a strength or a weakness that the “archive” is explicitly partial and personal? How would you respond to a critic who says the examples are cherry-picked?',
      'The Introduction promises no “singular theory of emotion”. Is that evasive or honest? What would count as evidence against Ahmed’s account?'
    ],
    bridges: {
      back: 'Nothing precedes this — but notice the book will keep returning to its opening image of the nation as skin: the “soft touch” returns as the vulnerable body of the nation in Chapter 2 and as the white nation of multicultural love in Chapter 6.',
      forward: 'Chapter 1 makes the first move: *pain*, the feeling that seems most private and bodily, turns out to be a social and public event. If contact and reading work for pain, they will work for anything.'
    },
    sections: [
      {
        title: 'Opening: “Soft Touch” Britain',
        gist: 'A British National Front poster addresses a “you” who feels rage at “swarms” of others. Ahmed shows how love of nation and hate of others are one emotional script — and how “soft” and “hard” turn emotions into attributes of bodies and nations.',
        moves: [
          { h: 'The nation as a body with skin', p: '“Soft touch” makes borders into skin: porous, bruisable, feminised. The nation that is “too emotional” is one that is “taken in” by bogus claims.' },
          { h: 'The “you” is already racialised', p: 'The address to “the British taxpayer” silently excludes non-white citizens. Whiteness becomes “racial kindred”; others are “bodies out of place”.' },
          { h: 'Emotion has a history of being ranked', p: 'Passion/passive, woman/man, primitive/civilised (Darwin), cultivated/unruly (Elias, Goleman). “Being emotional” is a hierarchy, not a trait.' },
          { h: 'The pivot', p: 'Do not ask which bodies are emotional. Ask how “being emotional” is *attributed*, and how emotions *shape* bodies through repeated orientations toward and away from others (Spinoza: what a body can do).' }
        ],
        voice: 'I begin with a poster I find repellent not to shock you but because it shows, in a few lines, how a feeling can build a world. Notice that the poster is not “irrational”: it has a logic in which love of the nation *requires* injury by others. If I only called it hateful I would be doing what it does — locating emotion in the bad bodies. What I want to track is how the poster draws the contour of a body, a “we” with skin that can be broken, and how that contour feels like nature to those inside it.',
        context: 'Ahmed’s analysis of “othering” comes from her earlier *Strange Encounters* and from Black and postcolonial thought (Fanon, Said, Lorde, hooks, Bhabha — note 3). The metaphor of the nation as a body politic with skin is old; her contribution is to show emotion as the *mechanism* that gives it shape.',
        objection: 'Does starting with a fascist poster stack the deck? A sceptic might say it is a limit case; mainstream emotional politics (patriotism, compassion) works differently. Ahmed’s reply, built into note 4, is that the “soft touch” trope appears in official UK asylum discourse too — the difference between fascism and neo-liberal multiculturalism “should be acknowledged, but … is not absolute.”',
        terms: ['othering', 'body-out-of-place', 'passion', 'orientation', 'whiteness'],
        people: ['darwin', 'spinoza', 'spelman', 'jaggar'],
        diagram: {
          title: 'How “soft touch” builds a body', w: 580,
          nodes: [
            { id: 'n', x: 110, y: 90, w: 150, label: 'The nation', sub: 'has borders, defences', kind: 'b' },
            { id: 's', x: 290, y: 90, w: 140, label: 'Skin', sub: 'soft · porous · bruisable', kind: 'a' },
            { id: 'f', x: 470, y: 90, w: 140, label: 'Feminised, “emotional”', sub: 'easily penetrated', kind: 'a' },
            { id: 'o', x: 110, y: 220, w: 150, label: '“Swarms” of others', sub: 'illegal · bogus · invading', kind: 'ghost' },
            { id: 'y', x: 290, y: 220, w: 140, label: 'The “you” (taxpayer)', sub: 'invited to feel rage', kind: 'c' },
            { id: 'h', x: 470, y: 220, w: 140, label: 'The “hard” body', sub: 'rage as orientation', kind: 'e' }
          ],
          edges: [
            { from: 'n', to: 's', label: 'metaphor' }, { from: 's', to: 'f', label: 'gendered' },
            { from: 'o', to: 'y', label: 'threaten', dash: true }, { from: 'y', to: 'h', label: 'becomes', strong: true },
            { from: 'f', to: 'h', label: 'feared → defended', curve: -10, dash: true }
          ],
          caption: 'Hardness is not the absence of emotion; it is rage as a way of standing apart. The nation “has” softness only because a hard-versus-soft emotional grammar has already been built.'
        },
        questions: [
          'Find a contemporary headline or speech that imagines a collective as a body (“flooded”, “swamped”, “under attack”). What emotions are scripted for the reader — and who is the “you”?',
          'Ahmed claims we “shouldn’t look for emotions in soft bodies.” Why might looking for emotion in *particular* bodies be a political move?'
        ],
        glosses: [
          { q: '‘soft touch’', t: 'Why a skin metaphor?', b: 'Skin is both boundary and contact point. “Soft touch” borrows from criminal slang (a mark who can be easily conned) and then from welfare politics (the “soft touch” state). Ahmed reads it as a *double* attribution: weakness (femininity) and gullibility (“taken in”). This sets up her central figure: **surface**. See [[t:surfaces]] and the later claim that emotions “shape the very surfaces of bodies”.', terms: ['surfaces'] },
          { q: 'bodies out of place', t: 'From Douglas to Ahmed', b: 'Mary Douglas’s *Purity and Danger* (1966) defines dirt as “matter out of place”. Ahmed’s own earlier coinage in *Strange Encounters* (2000) applies this to bodies recognised as strangers. It anticipates the disgust analysis of Chapter 4 and the “stranger danger” section of the Afterword.', terms: ['body-out-of-place', 'othering'] },
          { q: 'the word ‘passion’ and the word ‘passive’ share the same root', t: 'Passio — the long history of emotion as passivity', b: 'The Latin *passio* translates Greek *pathos*. In the Stoic and Cartesian traditions “passions” are what the soul *undergoes*; reason is what it *does*. Ahmed’s feminist-philosophical lineage (Spelman, Jaggar; also Genevieve Lloyd, *The Man of Reason*) shows how this activity/passivity grid maps onto male/female. Note her careful hedge: she will *not* equate emotionality with femininity (note 5).', people: ['spelman', 'jaggar'] },
          { q: 'lower and animal-like condition', t: 'Darwin and the temporalisation of emotion', b: 'In *The Expression of the Emotions in Man and Animals* (1872) Darwin reads emotional expression as a survival of earlier animal habits. Ahmed’s point is the *temporal* hierarchy this enables: emotional = backward = less civilised, mapping onto race and empire. Compare Norbert Elias’s *civilising process* (cited next) in which self-control marks modernity.', people: ['darwin'] },
          { q: 'In Spinoza’s terms, emotions shape what bodies can do', t: 'Spinoza and the affective turn', b: 'Spinoza’s *Ethics* (III, def. 3) defines “affect” (*affectus*) as modifications of the body that increase or diminish its power of acting. This is the same source Deleuze and Massumi use for “affect” as a pre-personal capacity to affect and be affected. Ahmed uses Spinoza for *action in contact* rather than for an autonomous realm of intensity — a difference the Afterword spells out.', people: ['spinoza'], terms: ['affect'] }
        ]
      },
      {
        title: 'Emotions and Objects',
        gist: 'The debate between “emotion is bodily sensation” and “emotion is cognition” leaves out the object. Ahmed proposes that feelings take shape through *contact* with objects and involve a *reading* of that contact — an “impression” — so emotions are neither simply caused by objects nor simply inside us.',
        moves: [
          { h: 'Two camps', p: 'Sensation (Descartes/Hume/James): emotion *is* the feeling of bodily change. Cognition (Aristotle, Solomon, Nussbaum, Sartre): emotion involves judgement. Even hybrids treat sensation and cognition as separable “aspects”.' },
          { h: 'Descartes’ better insight', p: 'Objects arouse passions because they seem to help or harm, not because of what they are. So emotion depends on how we are *affected* — contact — and on an evaluation.' },
          { h: '“Impression”', p: 'A word that fuses perception, feeling, belief, and mark-on-a-surface. An object *impresses upon* us and we form an *impression* of it. Sensation/emotion/thought are only analytically separable.' },
          { h: 'Add aboutness', p: 'Phenomenology’s intentionality: emotions are *about* something. Ahmed: emotions are both about objects and shaped by contact with them, and objects need not be material (a memory can be an object).' },
          { h: 'The child and the bear', p: 'Fear is not in the child or the bear but in how they come into contact, shaped by histories. The “immediacy” of a reaction is not proof of non-mediation. The child becomes fearful *and* the bear fearsome in one move.' },
          { h: 'Sticking and sliding', p: 'Feelings may stick to some objects and slide over others (bear → horse → father). This sets up “affective economies”.' }
        ],
        voice: 'Philosophers argue about whether emotions are really feelings or really thoughts. I think they are both too quick to settle what an *object* is. When something “makes me afraid”, I have already read it as dangerous — reading that is quick, bodily, and made from histories I did not choose. So I would rather speak of impressions: how a thing presses on me, how I take the press, and how that taking shapes both of us. The bear is fearsome *as an effect* of an encounter that also moves a child away from a bear.',
        context: 'This is Ahmed’s intervention into analytic and continental philosophy of emotion. “Dumb View” is Spelman’s name for the picture of emotions as unthinking feelings. Intentionality is the phenomenological inheritance (Brentano → Husserl → Sartre). The bear example is William James’s own illustration in 1884 — which is why re-staging it is a pointed move. Her “contact” comes from Descartes, but she refuses the causal reading of him.',
        objection: 'Critics ask: if emotions are shaped by contact and reading rather than caused by objects, can she explain why *certain* objects (snakes, threats) are reliably feared across cultures? Ahmed’s note 10 declines the biology/culture opposition rather than answering it; evolutionary and affective neuroscientists will find this insufficient. Philosophers might also say “aboutness + contact” is just a rewording of appraisal theory.',
        terms: ['impression', 'contact', 'aboutness', 'dumb-view', 'phenomenology', 'cognitivism', 'sticky'],
        people: ['descartes', 'hume', 'james', 'spelman', 'jaggar', 'freud'],
        diagram: {
          title: 'The child and the bear: what “contact” means', w: 600,
          nodes: [
            { id: 'h', x: 300, y: 70, w: 230, label: 'Histories & images of “bears”', sub: 'cultural, bodily, past — not available in the present', kind: 'ghost' },
            { id: 'b', x: 100, y: 190, w: 140, label: 'The bear', sub: 'object', kind: 'b' },
            { id: 'c', x: 300, y: 190, w: 150, label: 'Contact → impression', sub: 'a *reading* of contact as dangerous', kind: 'a' },
            { id: 'k', x: 500, y: 190, w: 140, label: 'The child', sub: 'subject', kind: 'b' },
            { id: 'f1', x: 200, y: 310, w: 150, label: 'Bear becomes “fearsome”', sub: 'attributed cause', kind: 'c' },
            { id: 'f2', x: 400, y: 310, w: 150, label: 'Child becomes “fearful”', sub: 'turns away: flight', kind: 'c' }
          ],
          edges: [
            { from: 'h', to: 'c', label: 'shape the reading' },
            { from: 'b', to: 'c', label: 'presses upon' }, { from: 'k', to: 'c', label: 'is pressed / reads', both: true },
            { from: 'c', to: 'f1', strong: true }, { from: 'c', to: 'f2', strong: true }
          ],
          caption: 'Fear is neither “in” the child nor “in” the bear but an effect of how they meet. The attribution of cause (“I flee because it is fearsome”) comes *after* contact, as the story the encounter tells about itself.'
        },
        questions: [
          'Try Ahmed’s test on an emotion of your own: pick something that “made you angry”. What *histories* were already there before the contact, and what did you “read” in it?',
          'Is “impression” a gain over “appraisal” or “judgement”? What does the pun on *press* add — or obscure?',
          'Ahmed says the child “must already know” the bear is fearsome without having been taught. Does that concede something to innateness, or is it about cultural circulation of images?'
        ],
        glosses: [
          { q: 'Dumb View', t: 'Spelman’s “Dumb View”', b: 'Elizabeth Spelman (1989) uses the term to name the view that emotions are mere bodily feelings with no cognitive content — and therefore that people who are “emotional” are less rational. Ahmed’s argument that sensation and judgement cannot be cleanly separated aligns her with the feminist critique of the reason/emotion binary rather than with a straightforward cognitivism.', people: ['spelman'], terms: ['dumb-view'] },
          { q: 'The bodily changes follow directly the perception of the exciting fact', t: 'The James–Lange theory', b: 'William James (and the Danish physiologist Carl Lange) held that we do not run because we are afraid; we are afraid because we run (bodily changes *are* the emotion). Later critics (Cannon–Bard) challenged the physiology; Antonio Damasio’s “somatic marker” work and contemporary interoception research revive versions of it. Ahmed uses James as the clearest “sensation pole” — and then undoes the pole by asking what makes the exciting fact exciting.', people: ['james'] },
          { q: 'a ‘specific manner of apprehending the world’', t: 'Sartre’s Sketch for a Theory of the Emotions', b: 'For Sartre (1939) emotion is a *magical transformation of the world*: consciousness changes its relation to objects when they become unbearable. The phrase signals the phenomenological alternative to James: emotion is a mode of world-disclosure, not a bodily readout. Ahmed will keep the world-directedness but relocate meaning in *contact histories*.', terms: ['phenomenology'] },
          { q: 'impression', t: '“Impression” — Hume’s word, Ahmed’s pun', b: 'For Hume (*Treatise* II.i) “impressions” are the vivid immediate perceptions (including passions) from which fainter “ideas” derive. Ahmed exploits the polysemy: an impression is an effect, a belief, an imitation, and a mark on a surface. The pun carries a theory: touch is the model for emotion, and emotions leave marks. This is also the first appearance of **surface**.', people: ['hume'], terms: ['impression', 'surfaces'] },
          { q: 'aboutness', t: 'Intentionality', b: 'From Brentano (“every mental phenomenon … refers to an object”) through Husserl and Sartre to analytic philosophers like Kenny and Solomon, “intentionality” means that emotions are directed. Ahmed’s twist: the *object* of the emotion is not just the target but something that has shaped the feeling through contact — which allows objects to be absent, imagined or remembered.', terms: ['aboutness'] },
          { q: 'a child and a bear', t: 'James’s bear, and Freud’s horse', b: 'James’s paradigm of emotion was meeting a bear in the woods. The psychology of emotion (Ekman-style “basic emotions”, evolutionary functionalism) treats it as a model case: bear → fear → flight. Note 9 is the key: the *child* is the one who enables scientists to separate innate from learned, and “innocence” guarantees that the response is natural. Ahmed will repurpose Freud’s *Little Hans* — horse standing in for father — in Chapter 3.', people: ['james', 'freud'] },
          { q: 'Feelings may stick to some objects, and slide over others.', t: 'Stick and slide', b: 'The two verbs introduced here become the book’s technical vocabulary. “Sticking” names the binding of an emotion to a figure; “sliding” names the movement between figures (bear → horse → father; asylum seeker → terrorist). The model comes from psychoanalytic *displacement* (see Chapter 3) crossed with Marx’s *circulation* of commodities (Chapter 2).', terms: ['sticky', 'circulation'] }
        ]
      },
      {
        title: 'Inside Out and Outside In',
        gist: 'Psychology’s “inside out” model and sociology’s “outside in” model share the premise that inside and outside are already given. Ahmed argues emotions *make* those surfaces — so the “I” and the “we” are effects, not causes — and that what circulates between bodies are objects of emotion, not emotions.',
        moves: [
          { h: 'Inside out', p: 'Psychological: I have feelings; I express them; you receive them (sympathy, alienation). Emotion is “centred internally”.' },
          { h: 'Outside in', p: 'Sociological (Durkheim, crowd psychology, Little on Diana): feeling comes from the collective and moves into individuals. A mirror-image that keeps the same inside/outside boundary and makes the crowd “like the individual”.' },
          { h: 'The proposal', p: 'Emotions create the *effect* of surfaces and boundaries that let us distinguish inside from outside. The “objectivity” of the psychic and the social is an effect, not a cause.' },
          { h: 'Against contagion', p: 'Contagion (Tomkins/Izard) treats feeling as a property that passes unchanged. But the “intensity” of shared spaces is also *tension*: we may share a *situation* without sharing a feeling. So it is objects of emotion that circulate.' },
          { h: 'Movement and attachment', p: '*Emovere*: to move. What moves us also holds us. Being moved can fix others as “having” characteristics — attachment through movement.' },
          { h: 'Psychoanalysis + Marx → “sticky”', p: 'Displacement and repression explain why objects get stuck; Marx explains why the history of their production disappears (feelings become fetishes). Why does power persist? Because emotions *attach* us to norms (Butler, Berlant, Brown).' }
        ],
        voice: 'It is tempting to say emotions are personal and then add that they are also social, as if I had a feeling and then you caught it. But the “and” is doing too much work: it presumes that there already are a person and a society to be joined. I am saying instead that the border itself is what feeling makes. When shame makes a body turn from others, or hate makes a nation recoil, the very contour of the body — and of the nation — appears. And what passes between us is not the same feeling but a *thing* we orient around — a figure that has become heavy with feeling.',
        context: 'The “inside/outside” critique draws on the deconstructive suspicion of binaries and on phenomenological accounts of embodiment. Durkheim’s “collective effervescence” and Le Bon/Freud-style crowd psychology are the reference points for “outside in”. Tomkins’ affect theory (via Izard and Sedgwick) is the reference for contagion; Ahmed’s unease with “contagion” becomes sharper in the Afterword’s dialogue with Massumi and Brennan.',
        objection: 'Is “objects circulate, not emotions” a distinction without a difference? Critics (including some affect theorists) say Ahmed smuggles contagion back: if the *object* is saturated with affect and everyone orients to it, something affective *is* shared. Another worry: is the claim that emotion “creates” the inside/outside a transcendental claim that cannot be tested, or an empirical one that can?',
        terms: ['inside-out-outside-in', 'sociality', 'contagion', 'circulation', 'sticky', 'surfaces', 'affective-value', 'fetishism', 'psychoanalysis'],
        people: ['durkheim', 'freud', 'marx', 'tomkins', 'butler', 'berlant', 'brown', 'little'],
        diagram: {
          title: 'Three models of where emotion lives', w: 600,
          zones: [
            { x: 10, y: 38, w: 185, h: 280, label: 'Inside out' }, { x: 207, y: 38, w: 185, h: 280, label: 'Outside in' }, { x: 404, y: 38, w: 186, h: 280, label: 'Ahmed: contact' }
          ],
          nodes: [
            { id: 'a1', x: 102, y: 110, w: 130, label: 'I (inner feeling)', kind: 'b' }, { id: 'a2', x: 102, y: 195, w: 130, label: 'express', kind: 'ghost', shape: 'pill' }, { id: 'a3', x: 102, y: 280, w: 130, label: 'You respond', kind: 'b' },
            { id: 'b1', x: 300, y: 110, w: 130, label: 'The crowd / society', kind: 'b' }, { id: 'b2', x: 300, y: 195, w: 130, label: 'impose', kind: 'ghost', shape: 'pill' }, { id: 'b3', x: 300, y: 280, w: 130, label: 'I take it in', kind: 'b' },
            { id: 'c1', x: 497, y: 110, w: 140, label: 'Contact with objects, signs, others', kind: 'a' }, { id: 'c2', x: 497, y: 195, w: 140, label: 'Surfaces & borders appear', kind: 'c' }, { id: 'c3', x: 497, y: 280, w: 140, label: 'the “I” and the “we” take shape', kind: 'e' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }, { from: 'c1', to: 'c2', strong: true }, { from: 'c2', to: 'c3', strong: true }],
          caption: 'The first two models keep “inside” and “outside” fixed and just reverse the direction of travel. The third makes the border an *effect* of the traffic.'
        },
        questions: [
          'Ahmed says shared emotion is both heightened and “in tension”. Recall a moment of apparent collective feeling (a vigil, a match, an election night). Were you sure you shared the same feeling as the person beside you?',
          'What does the Diana example show about how *claims of authenticity* (“they were taken in”) function as a gendered critique of collective emotion?',
          'Is Durkheim’s “emotion as social glue” still useful if we accept her critique — or does her “sticking” just redescribe it?'
        ],
        glosses: [
          { q: 'inside out', t: 'Expression theories of emotion', b: 'The expressivist model (Darwin’s facial expressions; Ekman’s “basic emotions”; Zajonc, cited in note 14) assumes emotions are discrete internal states with canonical outward signs. Anthropologists (Lutz, Abu-Lughod, Rosaldo) and historians (Reddy, Stearns) have long contested it. Ahmed aligns with them but then criticises even *their* “outside in” alternative.', people: ['darwin'] },
          { q: 'the imposition of ‘the without’', t: 'Durkheim’s social emotion', b: 'The idea behind this phrase is Durkheim’s “collective effervescence”: Durkheim’s *Elementary Forms* treats ritual crowds as generating a social force that “penetrates us and organises itself within us”. Compare Randall Collins’s *interaction ritual chains*, which Ahmed cites. The strength of the model is explaining how feeling binds; Ahmed’s objection is that it treats the collective as a feeling subject “like the individual”.', people: ['durkheim'] },
          { q: 'Diana’s death', t: 'The Diana moment', b: 'The public mourning for Princess Diana (1997) became an academic touchstone for “mass emotion” (Graham Little’s *The Public Emotions*, cited here; also Blackman & Walkerdine). Note 16 shows what Ahmed notices: the charge of *inauthenticity* (“taken in”) is a gendered charge — women and hysteria — that mirrors the “soft touch” of the nation.', people: ['little'] },
          { q: 'emotional contagion', t: 'Contagion and its successors', b: 'The language of contagion runs from Le Bon to Tomkins, Izard and (differently) Hatfield & Cacioppo’s psychology of “emotional contagion”. Later affect theory adds *transmission* (Teresa Brennan, *The Transmission of Affect*, 2004) and *resonance* (Massumi, Connolly). Ahmed’s objection: contagion makes the emotion a thing that stays the same as it passes. Gibbs (note 17) shows how powerful the model is for political affect.', people: ['tomkins'], terms: ['contagion'] },
          { q: 'emovere', t: 'Etymology as method', b: 'Ahmed regularly reads words back to Latin roots (*emovere*, *passio*, *contagio*) to make a point about movement, passivity and contact. This is a rhetorical, not philological, use: the roots are cues, not proofs. Her key claim is that “movement” and “attachment” are not opposites.', terms: ['attachment'] },
          { q: 'feelings’ become ‘fetishes’', t: 'Affective fetishism', b: 'In *Capital*, commodity fetishism is the appearance of value as a natural property of things, concealing the labour that produced it. Ahmed’s inversion: *feelings* come to seem properties of objects (“the hateful stranger”) through the concealment of the histories of their production and circulation. She is careful: Marx thinks the worker’s *suffering* is erased; she thinks the *making* of emotion is erased.', people: ['marx'], terms: ['fetishism', 'affective-value'] },
          { q: 'boundary, fixity and surface', t: 'Butler on materialisation', b: 'In *Bodies That Matter* (1993: 9) Butler defines materialisation as “a process of materialisation that stabilises over time to produce the effect of boundary, fixity and surface”. Ahmed’s Introduction takes this as the model for how *worlds* — and emotions — solidify through repetition while hiding the repetition. This is the single most important theoretical debt in the book.', people: ['butler'], terms: ['performativity'] },
          { q: 'What sticks?', t: 'The book’s guiding question', b: 'Compare Butler’s *Psychic Life of Power* (passionate attachment to subjection), Brown’s *States of Injury* (wounded attachments — central to Chapter 5), and Berlant’s writing on the “intimate public sphere” (cruel attachment would come later with *Cruel Optimism*, 2011). Ahmed’s answer is distinctive in making *emotion* the glue.', people: ['butler', 'brown', 'berlant'], terms: ['attachment', 'sticky'] }
        ]
      },
      {
        title: 'The Emotionality of Texts',
        gist: 'Why a book about bodily emotion reads texts: the way emotions are *named* (“the nation mourns”) generates subjects and objects. Ahmed explains her method (close reading of figures of speech), her three cases, her notion of the archive as “contact zone”, and the structure of the book, emotion by emotion.',
        moves: [
          { h: 'Figures of speech', p: 'Metaphor and metonymy are how signs get stuck together. The emotionality of a text is how it *moves* readers.' },
          { h: 'Naming as doing', p: '“The nation mourns” does not report a feeling; it makes the nation a mourning subject and an object of *our* feeling. Emotions are performative and involve speech acts.' },
          { h: 'Words for emotions circulate', p: 'Words attach to some bodies and some losses; they link (mourning → anger → hate). The sequence is a narrative that converts grief into hate by reading others as the cause of loss.' },
          { h: 'Three cases', p: 'Australian reconciliation (Ch. 1, 5), responses to terrorism (Ch. 3, 4), UK asylum and immigration (Ch. 2, 6). They are public — and personal.' },
          { h: 'Archive as contact zone', p: 'Not Cvetkovich’s “archive of feelings” — the texts are not repositories of feeling but sites where words and objects circulate. The writing itself is a “contact writing”.' },
          { h: 'The book’s shape', p: 'Each chapter begins with an emotion and ends with the *work* it does. Pain → hate → fear → disgust → shame → love → queer feelings → feminist attachments. Ends with: emotions go round — but do not always come round.' }
        ],
        voice: 'I am often asked why a book that insists on bodies reads so many words. Because words are not empty of bodies: when a text says “the nation grieves” it asks us to take up a position — to grieve with, to grieve for, to turn on those who caused the grief. I am not hunting for feelings hidden *in* documents; I am following how emotion words and the objects they name travel, stick and slide. And I do not stand outside the circulation: my archive is made by contact with libraries, friends, and cases that matter to me. I would rather say that than pretend a neutral view.',
        context: 'Close reading of public documents as “cultural politics” sits in the tradition of cultural studies (Stuart Hall, Raymond Williams), feminist deconstruction (Derrida), and Austin/Butler speech-act theory. The “contact zone” is Mary Louise Pratt’s term for spaces of colonial encounter. The chapter structure follows an arc from bodily sensation to ideal-attachments to political hope.',
        objection: 'A reader trained in the social sciences will ask for “method”: how are the texts selected, how does one test claims about circulation, and is there a risk that “reading” makes every text confirm the theory? Ahmed is explicit that she has chosen these texts, that they are cases she is involved in, and that she aims for exemplary, not representative, analysis. Whether that is satisfying depends on your idea of what a theory is for.',
        terms: ['performativity', 'speech-act', 'metonymy', 'archive', 'nation', 'cultural-politics'],
        people: ['cvetkovich', 'butler', 'pratt'],
        diagram: {
          title: 'The book’s map: eight emotions, three cases', w: 600,
          nodes: [
            { id: 'c1', x: 105, y: 70, w: 160, label: 'Case A · Australia', sub: 'reconciliation, Bringing Them Home', kind: 'b' },
            { id: 'c2', x: 300, y: 70, w: 160, label: 'Case B · Terrorism', sub: 'post-9/11 fear & disgust', kind: 'b' },
            { id: 'c3', x: 495, y: 70, w: 160, label: 'Case C · UK asylum', sub: 'hate, love, multiculturalism', kind: 'b' },
            { id: 'e1', x: 60, y: 175, w: 90, label: 'Ch1 Pain', kind: 'a' }, { id: 'e5', x: 160, y: 175, w: 90, label: 'Ch5 Shame', kind: 'a' },
            { id: 'e3', x: 255, y: 175, w: 90, label: 'Ch3 Fear', kind: 'a' }, { id: 'e4', x: 350, y: 175, w: 90, label: 'Ch4 Disgust', kind: 'a' },
            { id: 'e2', x: 450, y: 175, w: 90, label: 'Ch2 Hate', kind: 'a' }, { id: 'e6', x: 545, y: 175, w: 90, label: 'Ch6 Love', kind: 'a' },
            { id: 'q', x: 160, y: 285, w: 220, label: 'Ch7 Queer feelings', sub: 'discomfort · grief · pleasure', kind: 'e' },
            { id: 'f', x: 440, y: 285, w: 220, label: 'Ch8 Feminist attachments', sub: 'anger · wonder · hope', kind: 'e' }
          ],
          edges: [
            { from: 'c1', to: 'e1' }, { from: 'c1', to: 'e5' }, { from: 'c2', to: 'e3' }, { from: 'c2', to: 'e4' }, { from: 'c3', to: 'e2' }, { from: 'c3', to: 'e6' },
            { from: 'e1', to: 'q', dash: true }, { from: 'e5', to: 'q', dash: true }, { from: 'e6', to: 'f', dash: true }, { from: 'e2', to: 'f', dash: true }
          ],
          caption: 'Chapters 1–6 each take one emotion as a “point of entry”; Chapters 7–8 ask how queer and feminist politics reorient our relation to the norms those emotions protect.'
        },
        questions: [
          'Choose a sentence of the form “the nation / the community / the school feels X”. What does saying so *do*, and who is it addressed to?',
          'Ahmed says her archive is “not an archive of feelings” in Cvetkovich’s sense. What would be lost if you treated these public texts as repositories of feeling?',
          'She says emotions “do go round” but do not always “come round”. Which uneven returns will you watch for as you read?'
        ],
        glosses: [
          { q: 'metonymy and metaphor', t: 'Jakobson, Lacan, and Freud', b: 'Roman Jakobson’s distinction between **metaphor** (substitution by similarity) and **metonymy** (association by contiguity) was taken up by Lacan to read the unconscious: Freud’s *condensation* is metaphor; *displacement* is metonymy. Ahmed’s “sliding” between figures (asylum seeker → bogus → terrorist) is metonymy; her “sticking” is the fixing that results. Chapter 2 develops this at length.', terms: ['metonymy', 'displacement'] },
          { q: 'the nation mourns', t: 'Emotion words as performatives', b: 'Using J. L. Austin’s *How to Do Things with Words* and Butler’s *Excitable Speech*, Ahmed treats naming an emotion as a speech act that can *constitute* what it names (the nation as a feeling subject) — hence the later chapters on “shame before others” (5) and “speaking disgust” (4). A key difference from Austin: success depends on histories of use, not on speaker intention.', terms: ['performativity', 'speech-act'], people: ['butler'] },
          { q: 'exploration of cultural texts as repositories of feelings and emotions', t: 'Cvetkovich’s archive of feelings', b: 'Ann Cvetkovich’s *An Archive of Feelings* (2003) treats ephemera — queer public culture, trauma testimony — as repositories of feeling that official archives miss. Ahmed’s demurral is subtle: she values the method but does not want to claim feelings are *stored* in texts, only that texts circulate signs that do emotional work.', people: ['cvetkovich'], terms: ['archive'] },
          { q: 'contact zone', t: 'From Pratt to Ahmed', b: 'Mary Louise Pratt (*Imperial Eyes*, 1992) coined “contact zone” for social spaces where cultures meet within unequal power relations. Ahmed adopts it to say that *her own archive* is an effect of contact — with libraries, friends, texts — and thus not a neutral collection. Compare the standpoint theories of Haraway (“situated knowledges”) and Harding.', people: ['pratt'] },
          { q: 'Emotions don’t make the world go round.', t: 'A play on the saying', b: 'The idiom is “love makes the world go round”. Ahmed’s reversal doubles as a thesis: emotions do circulate, but circulation is *uneven* — what goes round does not always come round, because objects stick to some bodies and not others. This line is the hinge to the next chapters’ analyses of unequal distributions of feeling.', terms: ['circulation'] }
        ]
      }
    ]
  });
})();
