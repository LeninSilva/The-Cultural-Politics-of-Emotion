/* Afterword (2nd edition): Emotions and Their Objects — authored guide. */
(function () {
  CP.unit('afterword', {
    tagline: 'A decade on, Ahmed places the book in the “affective turn”, defends “emotion” against “affect”, and shows how stranger danger and happiness work as circulations of objects.',
    claim: 'Looking back from 2013–14, Ahmed argues that the **affective turn** has too often been a turn *away* from feminist and queer work on emotion, and that the **affect/emotion distinction** (Massumi, Gregg & Seigworth) carries gendered and conceptual costs; her own approach treats emotions as how bodies are **affected and oriented** towards **objects**, so that **objects, not feelings, circulate**. Two examples extend the book: **stranger danger** (the charged figure that arrives before the body — Trayvon Martin, diversity work) and **happy objects** (things made good by their promised proximity to happiness; the killjoy; attunement; national happiness after austerity).',
    glance: [
      'A history of the book: it began as feminist work on norms as investments and on how racism works through emotions; the “affective turn” label already existed; Ahmed was read as both an affect theorist and not one.',
      'Against affect/emotion splitting: separating is like breaking an egg — you can, but they are not separate; Leys and Wetherell as allies/critics; phenomenology (intentionality, orientation) vs Deleuzian affect.',
      'Stranger danger: the stranger as charged figure; Trayvon Martin; Damasio’s suspicious faces; Tomkins’ “almost innate”; diversity work as emotional labour.',
      'Happy objects, killjoys and attunement; the rhetoric of muscular liberalism, the Royal Wedding and happiness indices: citizenship as feeling right.'
    ],
    why: 'The Afterword is the best short statement of where *The Cultural Politics of Emotion* sits in the intellectual map of the 2000s–2010s and why Ahmed rejects the “affect as pre-personal intensity” paradigm. It also shows how the book’s concepts apply to contemporary events — policing, diversity work, national rituals — and introduces ideas from *The Promise of Happiness* (happy objects, affect aliens, the killjoy) that now travel widely.',
    argument: {
      steps: [
        { h: 'How the book began', p: 'Shaped by Women’s Studies at Lancaster; a feminist concern with how norms become investments (Butler), and with how racism works through emotions without psychologising them; the research reignited interest in the history of ideas.' },
        { h: 'The affective turn', p: 'Koivunen, Cvetkovich: long feminist history. Hardt: feminist/queer work as precursors, affect as a new synthesis. Ahmed: this translates the turn into a turn to affect, displacing feminist work and elevating male originators.' },
        { h: 'Affect vs emotion', p: 'Seigworth & Gregg; Massumi: affect is pre-personal, non-intentional, unmediated; emotion personal, intentional, mediated. This can be a gendered distinction; it risks reducing emotion to subjective feeling (Terada, Leys).' },
        { h: 'Ahmed’s alternative', p: 'Emotion as how we are moved: affecting/being affected plus orientation (intentionality); impressions; judgement as bodily; no need for a separate term. Separating is like cracking an egg; messiness is a methodological virtue.' },
        { h: 'Stranger danger', p: 'Some bodies are recognised as strangers: a charged figure that arrives before the body (Trayvon Martin); sticky slide; mediated immediacy; critique of Damasio and Tomkins; racism as a blunt instrument; diversity workers’ emotional labour; stranger as “receiving a charge”.' },
        { h: 'Objects circulate, not feelings', p: 'Contagion/transmission models assume smooth passage; Ahmed: objects accumulate affective value; the career of feelings is not independent of the career of objects.' },
        { h: 'Happy objects', p: 'Things become good by being associated with happiness before encounter; the bride and emotional labour; affect aliens and killjoys; Fowler & Christakis’s “happiness is contagious”; attunement (Heidegger, Scheler) as creating strangers at the edges; hooks: a woman of colour entering a room; citizenship as deciding whose happiness comes first.' },
        { h: 'Rhetoric', p: 'Cameron’s “muscular liberalism”: loving multiculturalism turns into hard-nosed belief tied again to race; political discourse gives feelings a face; austerity anger answered with a happiness index and a Royal Wedding; citizenship as feeling right: “There are wrongs in this right.”' }
      ]
    },
    diagram: {
      title: 'The Afterword: from emotion vs affect to objects and orientations', w: 620,
      nodes: [
        { id: 'a', x: 95, y: 80, w: 140, label: 'Affective turn', sub: 'turn to affect?', kind: 'b' },
        { id: 'b', x: 270, y: 80, w: 140, label: 'Affect ≠ emotion?', sub: 'Massumi; Gregg & Seigworth', kind: 'a' },
        { id: 'c', x: 445, y: 80, w: 150, label: 'Ahmed: affect & orientation', sub: 'being affected is being directed', kind: 'e' },
        { id: 'd', x: 95, y: 205, w: 140, label: 'Stranger danger', sub: 'charged figures', kind: 'c' },
        { id: 'e', x: 270, y: 205, w: 140, label: 'Happy objects', sub: 'promised proximity', kind: 'c' },
        { id: 'f', x: 445, y: 205, w: 150, label: 'Rhetoric of the nation', sub: 'muscular liberalism; national happiness', kind: 'c' },
        { id: 'g', x: 270, y: 320, w: 400, label: 'Objects circulate; feelings are directed: feeling right is a requirement of belonging', kind: 'ghost' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'contested' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'c', to: 'f' }, { from: 'd', to: 'g', dash: true }, { from: 'e', to: 'g', dash: true }, { from: 'f', to: 'g', dash: true }],
      caption: 'The structure of the Afterword: a methodological argument (top), then two examples and a rhetorical coda (bottom).'
    },
    context: [
      'Written for the second edition (2014), after **Queer Phenomenology** (2006), **The Promise of Happiness** (2010) and **On Being Included** (2012). The context is the explosion of **affect theory** (Massumi 2002; Clough 2007; Gregg & Seigworth 2010), critiques of it (Leys 2011; Wetherell 2012; Hemmings 2005), and neuroscience-influenced writing (Damasio) that circulated in the humanities.',
      'It also responds to events after 2004: the **Trayvon Martin** killing (2012) and acquittal (2013), the UK coalition government’s **austerity** and **“muscular liberalism”** (Cameron, 2011), the Royal Wedding (2011) and Diamond Jubilee (2012).'
    ],
    terms: ['affect', 'affective-turn', 'orientation', 'impression', 'aboutness', 'contagion', 'attunement', 'stranger', 'happiness', 'killjoy', 'affect-alien', 'emotional-labour', 'phenomenology', 'circulation', 'sticky'],
    people: ['massumi', 'hardt', 'leys', 'wetherell', 'cvetkovich', 'tomkins', 'damasio', 'brennan', 'heidegger', 'scheler', 'hochschild', 'hooks', 'berlant', 'sedgwick', 'hartman', 'yancy', 'fanon', 'spinoza', 'deleuze'],
    sources: [
      { who: 'Michael Hardt; Patricia Clough', work: 'The Affective Turn (2007)', role: 'Affect as a new synthesis beyond mind/body, reason/passion.', use: 'The framing Ahmed challenges.' },
      { who: 'Gregory Seigworth & Melissa Gregg', work: 'The Affect Theory Reader (2010)', role: 'Affect as forces “beyond emotion”.', use: 'Example of treating affect as other than emotion.' },
      { who: 'Brian Massumi', work: 'Parables for the Virtual (2002)', role: 'Affect is autonomous, pre-personal, non-signifying.', use: 'The strongest version of the affect/emotion split.' },
      { who: 'Ruth Leys; Margaret Wetherell', work: '“The Turn to Affect: A Critique” (2011); Affect and Emotion (2012)', role: 'Critiques of affect theory; Wetherell also critiques Ahmed (signs over bodies; basic emotions).', use: 'Allies and critics; Ahmed replies in notes.' },
      { who: 'Antonio Damasio; Silvan Tomkins; Paul Ekman', work: 'The Feeling of What Happens; Affect Imagery Consciousness; facial expression', role: 'Neuroscientific and psychobiological accounts of emotion as function.', use: 'Targets of the stranger-danger critique.' },
      { who: 'Arlie Hochschild; Teresa Brennan; Max Scheler; Heidegger', work: 'The Managed Heart; Transmission of Affect; The Nature of Sympathy; Mood', role: 'Emotional labour; transmission; infection and fellow feeling; attunement.', use: 'Models of sociality against which she develops “objects circulate”.' },
      { who: 'Ahmed (own work)', work: 'Strange Encounters (2000); Queer Phenomenology (2006); The Promise of Happiness (2010); On Being Included (2012)', role: 'Her trajectory before and after the book.', use: 'Stranger, orientation, happy objects, diversity work.' }
    ],
    conversation: [
      { h: 'Affect theory since 2014', p: 'The field has pluralised: Ben Anderson (*Encountering Affect*, 2014), Nigel Thrift’s non-representational theory, Kathleen Stewart’s *Ordinary Affects* (2007), Sianne Ngai’s *Ugly Feelings* (2005), Berlant’s *Cruel Optimism* (2011), and Ruth Leys’s *The Ascent of Affect* (2017). Ahmed’s “objects not affects circulate” and “orientation” are widely cited alternatives to “contagion/transmission”.' },
      { h: 'Neuroscience of emotion', p: 'Lisa Feldman Barrett’s theory of constructed emotion (*How Emotions Are Made*, 2017) rejects “basic emotions” and “universal faces” — directly relevant to Wetherell’s critique (note 13) and to Ahmed’s doubts about Ekman/Damasio. The debate between “basic emotions” and constructionism is live.' },
      { h: 'Contagion online', p: 'The 2014 Facebook “emotional contagion” experiment (Kramer, Guillory & Hancock) and research on “affective polarisation” and “affective publics” (Zizi Papacharissi, 2015) show the model Ahmed resists in action. Fowler & Christakis’s “happiness is contagious” findings have been criticised (e.g., by Russell Lyons) for being unable to distinguish contagion from homophily.' },
      { h: 'Race, suspicion and policing', p: 'Trayvon Martin’s killing and Zimmerman’s acquittal (2013) helped catalyse Black Lives Matter; the killings of Ahmaud Arbery (2020) and George Floyd (2020) renewed attention to “suspicious” bodies and white gazes. Yancy’s *Look, a White!* (2012) and Ahmed’s own “racism is a blunt instrument” are touchstones.' },
      { h: 'The killjoy, happy objects and complaint', p: 'Ahmed’s later books (*Living a Feminist Life*, 2017; *What’s the Use?*, 2019; *Complaint!*, 2021; *The Feminist Killjoy Handbook*, 2023) extend this Afterword; the “killjoy” and “affect alien” are now widely used across feminist, queer, and disability studies. Related: critiques of the “happiness industry” (William Davies 2015) and “toxic positivity”.' }
    ],
    debates: ['affective-turn', 'emotions-as-doing', 'digital-affect', 'populism-emotion'],
    questions: [
      'Ahmed says the affective turn “translated” into a turn to affect displaced feminist work. How would you test that claim? Whose work do you encounter first in affect theory syllabi?',
      'Do you find the egg metaphor persuasive — that you can separate affect from emotion but they are not separate? What would you lose by keeping the distinction?',
      'Think of an example of a “charged figure” that arrives before the person. How do people manage it (the diversity trainers’ self-presentation)?',
      'What “happy objects” are circulating around you (a wedding, a degree, a house, a baby)? Who is the killjoy of each?',
      'Compare “contagion” with “objects that circulate”: in which situations does each model explain more?'
    ],
    bridges: {
      back: 'The Afterword revisits the Introduction (impressions, objects, the sociality of emotion), Chapters 2–4 (affective economies, stranger, disgust), Chapters 6–8 (love, queer discomfort, killjoy anger), and the Conclusion (feeling right and feeling better).',
      forward: 'To continue: *Queer Phenomenology* (2006), *The Promise of Happiness* (2010), *On Being Included* (2012), *Willful Subjects* (2014), *Living a Feminist Life* (2017), *What’s the Use?* (2019), *Complaint!* (2021).'
    },
    sections: [
      {
        title: 'Opening: How the Book Took Shape',
        gist: 'Ahmed recounts the intellectual history behind the book: her turn to emotion in order to explain how norms become investments and how racism works through emotion without psychologising it; the role of Women’s Studies at Lancaster; and the book as a stepping stone between *Strange Encounters* and *The Promise of Happiness*.',
        moves: [
          { h: 'Context', p: 'Written 1999–2003 while directing the Institute for Women’s Studies at Lancaster; the collective shaped arguments about bodies, worlds, and mediation.' },
          { h: 'Starting point', p: 'Not a theory of emotion but an explanation of how worlds are reproduced; norms become affective over time; Butler’s “psychic life of power”; racism through emotions without psychologising.' },
          { h: 'The turn to the history of ideas', p: 'Reading across psychology, sociology, anthropology, philosophy redirected the project; feminist theory’s approach to norms as investments could contribute to theories of emotion.' },
          { h: 'Aims of the Afterword', p: 'To relate the book to affect studies, and to show how it developed *Strange Encounters* (2000) and was developed in *The Promise of Happiness* (2010).' },
          { h: 'Books as stepping stones', p: 'A book is a pause on an intellectual journey — a way of gathering ourselves before travelling again.' }
        ],
        voice: 'I did not set out to write a theory of emotion. I wanted to know why social norms are so hard to shift, and why racism and sexism are felt so deeply. Emotion turned out to be a way into that question — and the book is a stepping stone, not a final statement. Reading it again in 2013 I saw that the Introduction does not tell readers how I got there. This afterword tries to say.',
        context: 'Strange Encounters (2000) is Ahmed’s account of the stranger and postcolonial embodiment; *The Promise of Happiness* (2010) extends the analysis of objects and orientation to happiness. Lancaster’s Institute for Women’s Studies (Ahmed was director c. 2000–03) was a prominent site of feminist cultural studies.',
        objection: 'A sceptical reader may note that the autobiographical framing makes the book’s intellectual choices look like destiny. Ahmed’s notes acknowledge her Introduction was too schematic about psychology and sociology (note 2) and that she “removed at the last minute” a phenomenology section (note 11) — an unusual admission of the book’s limits.',
        terms: ['attachment', 'orientation', 'affective-turn'],
        people: ['butler', 'cvetkovich'],
        diagram: {
          title: 'The book’s place in Ahmed’s trajectory', w: 600,
          nodes: [
            { id: 'a', x: 100, y: 90, w: 150, label: 'Strange Encounters (2000)', sub: 'strangers, bodies out of place', kind: 'b' },
            { id: 'b', x: 300, y: 90, w: 170, label: 'Cultural Politics of Emotion (2004)', sub: 'emotions as cultural politics', kind: 'e' },
            { id: 'c', x: 500, y: 90, w: 150, label: 'Queer Phenomenology (2006)', sub: 'orientation', kind: 'b' },
            { id: 'd', x: 400, y: 220, w: 170, label: 'The Promise of Happiness (2010)', sub: 'happy objects, killjoys', kind: 'b' },
            { id: 'e', x: 200, y: 220, w: 170, label: 'On Being Included (2012)', sub: 'diversity work', kind: 'b' },
            { id: 'f', x: 300, y: 325, w: 300, label: 'Afterword (2014): the book as a stepping stone', kind: 'ghost' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e', dash: true }, { from: 'd', to: 'f', dash: true }, { from: 'e', to: 'f', dash: true }],
          caption: 'The lines are intellectual, not strictly chronological: the Afterword looks across all of them.'
        },
        questions: [
          'What does it change to read the book as a stepping stone rather than a theory? How would you read it differently?',
          'Ahmed says norms become affective over time. Which norms have you noticed becoming “feelings” in your own life?'
        ],
        glosses: [
          { q: 'the psychic life of power', t: 'Butler’s source', b: 'Butler’s *The Psychic Life of Power: Theories in Subjection* (1997) argues that power not only acts on subjects from outside but forms them: subjects become passionately attached to their subordination. This is the core inheritance of the book, as stated in the Introduction (“What sticks?”).', people: ['butler'] },
          { q: 'Strange Encounters', t: 'Ahmed’s earlier book', b: '*Strange Encounters: Embodied Others in Post-Coloniality* (2000) analyses how “strangers” are produced through economies of recognition and touch, in discourses from Neighbourhood Watch to feminist ethnography. The “stranger danger” section of this Afterword returns to it.', terms: ['stranger'] },
          { q: 'books themselves as stepping stones', t: 'A methodological comment', b: 'The image anticipates Ahmed’s later insistence on theory as “sweaty concepts” (*Living a Feminist Life*, 2017): concepts that come from effort and are kept moving. It also resonates with the book’s own concern with movement, attachment and contact.' }
        ]
      },
      {
        title: 'The Affective Turn',
        gist: 'Ahmed challenges the narrative of an “affective turn” as a turn *to affect*, which positions feminist and queer work as mere precursors and elevates male originators; she argues against separating affect from emotion (Massumi; Seigworth & Gregg), proposes emotion as being affected plus being oriented, and defends “messiness” over conceptual refinement.',
        moves: [
          { h: 'Two histories', p: 'Koivunen and Cvetkovich: feminist and queer interest in emotion has a long history; “affective turn” implies newness. Hardt: feminist and queer work are “precursors”; the turn to affect brings mind–body and reason–passion together.' },
          { h: 'The alternative history', p: 'Feminist theories of emotion (Jaggar, Spelman, Campbell, Frye, Hochschild, hooks, Lorde) had already challenged mind–body and reason–passion dualisms; affect theory re-did that work without citation (note 4–5: sexism as citational practice).' },
          { h: 'Affect over emotion', p: 'Seigworth & Gregg’s “forces … beyond emotion”; Massumi: affect pre-personal/non-intentional/unmediated vs emotion personal/intentional/mediated. This can work as a gendered distinction and evacuate “touchy-feely” (feminist, queer) thought.' },
          { h: 'Her position', p: 'The book challenged this distinction indirectly; she started with emotion because of the conversation she was in and everyday usage. Berlant reads her as “not really working on affect”; others call her an affect theorist.' },
          { h: 'Re-theorising emotion', p: 'Emotions involve bodily affecting and being affected — contact with objects; seventeenth-century passions philosophers (Descartes, Locke, Spinoza; Susan James): judgements as how we are affected; “impressions” (Hume). Don’t separate consciousness/intentionality from bodily reaction.' },
          { h: 'Against subjective feeling', p: 'Turning to affect to go beyond subjects can reduce emotion to personal feeling (Terada; Leys); phenomenology (intentionality, Heidegger’s mood, Husserl’s passive synthesis) was never only cognitive.' },
          { h: 'Orientation and messiness', p: 'Combining being affected with intentionality: orientation. Judgements are actions. Different emotions are entry points, not basic emotions (note 13). Messiness is a good starting point; arguing over definitions is self-referential; separate as a verb — like breaking an egg.' }
        ],
        voice: 'I do not mind being called an affect theorist or being told I am not one. What matters to me is whether the work does justice to how we are moved. The thing I resist is the story in which feminists worked on bodies and emotions and then theory arrived with a new word that did what they had been doing. When affect becomes the name for what exceeds emotion, emotion becomes personal, contained, feminine. I want to keep the word because it names how we are moved — and what we are moved towards.',
        context: 'The “affective turn” label was popularised by Clough (2007) and Gregg & Seigworth (2010), drawing on Deleuze’s reading of Spinoza and Massumi’s distinction (via Tomkins, Sedgwick & Frank). Critical responses include Leys (2011), Hemmings (2005), Wetherell (2012), Papoulias & Callard (2010). The phenomenological lineage Ahmed invokes (Sartre, Heidegger, Husserl) is more prominent in this Afterword than in the original.',
        objection: 'Defenders of affect theory reply that “affect” is not a rejection of feminist work but a vocabulary for pre-reflective, bodily processes that cannot be captured by “emotion”; and that Ahmed’s own account of “impressions” effectively recovers such a layer. Another point: citing “sexism in citation” is plausible but needs evidence; some of the affect theory canon (Sedgwick, Berlant, Cvetkovich, Gorton) is feminist. Ahmed’s claim is about the *narrative* of the turn, not all scholars within it.',
        terms: ['affect', 'affective-turn', 'phenomenology', 'orientation', 'impression', 'aboutness'],
        people: ['hardt', 'massumi', 'leys', 'wetherell', 'cvetkovich', 'berlant', 'jaggar', 'spelman', 'hochschild', 'spinoza', 'descartes', 'heidegger', 'terada'],
        diagrams: [
          {
            title: 'Two ways of drawing the affect / emotion line', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 270, label: 'Massumi / Gregg & Seigworth' }, { x: 320, y: 38, w: 295, h: 270, label: 'Ahmed' }],
            nodes: [
              { id: 'a1', x: 158, y: 105, w: 220, label: 'Affect: pre-personal, non-intentional, unmediated, mobile', kind: 'e' }, { id: 'a2', x: 158, y: 200, w: 220, label: 'Emotion: personal, intentional, mediated, contained', kind: 'a' }, { id: 'a3', x: 158, y: 270, w: 220, label: 'Risk: a gendered split', kind: 'ghost' },
              { id: 'b1', x: 468, y: 105, w: 220, label: 'Emotion = affecting and being affected + orientation', kind: 'e' }, { id: 'b2', x: 468, y: 190, w: 220, label: 'Judgements are bodily; sensation, feeling, thought not separate realms', kind: 'c' }, { id: 'b3', x: 468, y: 270, w: 220, label: 'Separate as a verb — like cracking an egg', kind: 'ghost' }
            ],
            edges: [{ from: 'a1', to: 'a2', both: true, dash: true }, { from: 'a2', to: 'a3', dash: true }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3', dash: true }],
            caption: 'Ahmed’s objection is to making the distinction into a difference of order, not to ever distinguishing.'
          },
          {
            title: 'A rough map of the conversation around the book', w: 640,
            nodes: [
              { id: '1', x: 90, y: 70, w: 130, label: '1980s–90s', sub: 'Feminist emotion theory (Jaggar, Spelman, Hochschild, Lorde)', kind: 'b' },
              { id: '2', x: 235, y: 70, w: 120, label: '1995', sub: 'Sedgwick & Frank on Tomkins', kind: 'b' },
              { id: '3', x: 375, y: 70, w: 130, label: '2002', sub: 'Massumi: Parables for the Virtual', kind: 'a' },
              { id: '4', x: 520, y: 70, w: 120, label: '2004', sub: 'Cultural Politics of Emotion; Brennan', kind: 'e' },
              { id: '5', x: 90, y: 205, w: 130, label: '2007', sub: 'Clough & Hardt: The Affective Turn', kind: 'a' },
              { id: '6', x: 235, y: 205, w: 120, label: '2010', sub: 'Gregg & Seigworth; Promise of Happiness', kind: 'a' },
              { id: '7', x: 375, y: 205, w: 130, label: '2011–12', sub: 'Leys; Wetherell; Cvetkovich; Berlant', kind: 'c' },
              { id: '8', x: 520, y: 205, w: 120, label: '2014', sub: '2nd edition & Afterword', kind: 'e' }
            ],
            edges: [{ from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }, { from: '4', to: '5', curve: 40 }, { from: '5', to: '6' }, { from: '6', to: '7' }, { from: '7', to: '8' }],
            caption: 'Not exhaustive; it places the book between feminist emotion studies and the consolidation of “affect theory”.'
          }
        ],
        questions: [
          'Is it fair to say the affective turn displaced feminist work? What evidence would you look for?',
          'Do you find Massumi’s emotion/affect distinction useful for any purpose? What would you lose or gain by using it?',
          'Ahmed writes that arguing over definitions can become self-referential. Is that a fair description of some theory debates? How should we decide which distinctions matter?'
        ],
        glosses: [
          { q: 'Anu Koivunen', t: 'Affective Encounters', b: 'Anu Koivunen (Turku, Finland) co-organised the 2001 conference “Affective Encounters” and edited the resulting book (2001), which framed affect within feminist media studies. Ahmed’s anecdote is meant to show that “affective turn” was in circulation before 2004 and was initially feminist.' },
          { q: 'somewhat reluctant to use the term affective turn', t: 'Cvetkovich’s reluctance', b: 'Ann Cvetkovich’s *Depression: A Public Feeling* (2012) notes that feminism and queer studies had long attended to affect (her “public feelings” project). Sedgwick (with Frank) revived Tomkins in the 1990s; Berlant’s “national sentimentality”; and the “Feel Tank” collective (Cvetkovich, Berlant, Deborah Gould, Lisa Duggan and others). This is the lineage Ahmed claims.', people: ['cvetkovich'] },
          { q: 'missionary term', t: 'Affect as a missionary term', b: 'Ahmed’s image is that “affect” functions to announce a new world — a conversion narrative. Compare Ruth Leys’s argument that affect theory’s claims (that affects are autonomous from cognition) rest on contested experiments (Libet’s) and on a Tomkins–Ekman “basic emotions” paradigm.' },
          { q: 'Scholars such as Brian Massumi (2002) have even described affects as having a ‘different logic’', t: 'Massumi’s autonomy of affect', b: 'In “The Autonomy of Affect” (*Parables for the Virtual*, 2002) Massumi reads an experiment on children watching a snowman (Hertha Sturm) to argue that affect (intensity) operates “below” narrative/emotion, as a bodily response that is autonomous from signification. Leys (2011) and Hemmings (2005) argue that the experiment and its interpretation are flawed. Ahmed’s note 7 acknowledges that in Chapter 1’s note 4 she conflated “sensation” and “affect”.', people: ['massumi', 'leys'] },
          { q: 'the affect/emotion distinction can operate as a gendered distinction', t: 'The gender of the distinction', b: 'The worry: a contrast between mobile, impersonal, creative affect and contained, personal, intentional emotion repeats older hierarchies (public/private, masculine/feminine) in new vocabulary. Compare Clare Hemmings’s “Invoking Affect” (2005), which asks why affect is imagined as liberatory, and Karen Gorton’s “Theorizing emotion and affect” (2007).' },
          { q: 'Lauren Berlant in her introduction to Cruel Optimism', t: 'Berlant on Ahmed', b: 'Berlant (2011) remarks that Ahmed is “not really working on affect but emotion”. Ahmed’s note 8 observes the symmetry: she is read both ways, and the review of *The Promise of Happiness* (Cefai 2011) says affect “triumphs”. The anecdote shows how the labels operate as boundary markers.', people: ['berlant'] },
          { q: 'Susan James describes', t: 'Passions in seventeenth-century philosophy', b: 'Susan James’s *Passion and Action: The Emotions in Seventeenth-Century Philosophy* (1997) shows how Descartes, Spinoza, Hobbes, Locke, Hume and others treat passions as how bodies are affected and as evaluations — a resource for treating emotion as both embodied and cognitive. Ahmed’s “I turned to emotions as they help me explain how those judgements then hold” is the political twist.' },
          { q: 'Rei Terada suggests in Feeling in Theory', t: 'Terada on emotion and the death of the subject', b: 'Terada’s *Feeling in Theory: Emotion after the “Death of the Subject”* (2001) argues that poststructuralism, despite its anti-humanism, relies on a concept of emotion that is not subject-based (Derrida, de Man, Barthes). It supports Ahmed’s claim that emotion theory need not return to the individual subject.', people: ['terada'] },
          { q: 'Ruth Leys (2011)', t: 'Leys on intentionality and affect', b: 'Leys (2011) argues that “affect theorists” (Massumi, Connolly, Protevi) share with Tomkins/Ekman the premise that affects are non-intentional, pre-cognitive and universal; she criticises the “turn to affect” for its reliance on this and for its erasure of meaning. *The Ascent of Affect* (2017) elaborates. Ahmed borrows the point against the reduction of emotion to intentionality.', people: ['leys'] },
          { q: 'Heidegger’s work on mood, and in Husserl’s work on passive synthesis', t: 'Phenomenology of receptivity', b: 'Heidegger’s *Stimmung* (mood) discloses the world prior to cognition; Husserl’s *passive synthesis* is the pre-reflective organisation of experience. Ahmed’s point is that phenomenology does not reduce emotion to intentionality-as-object-directed cognition; this prepares the later discussion of attunement.' },
          { q: 'breaking an egg', t: 'The egg metaphor', b: 'An argument about method: concepts are tools for separating what is contiguous — they intervene in the world they describe. This echoes Whitehead’s “fallacy of misplaced concreteness” and Haraway’s “cutting”. For book clubs: ask what the cut makes possible and what it hides.' }
        ]
      },
      {
        title: 'Stranger Danger',
        gist: 'The figure of the stranger led Ahmed to emotion: some bodies are recognised as strangers — a charged figure that arrives before the body. Reading Trayvon Martin’s killing, Damasio’s “suspicious faces” and Tomkins’ “almost innate” fear of strangers, she argues that fear is directed, learned, and made immediate by histories; that racism is a blunt instrument; and that diversity workers perform emotional labour to counter a stereotype that precedes them.',
        moves: [
          { h: 'Stranger as charged figure', p: 'The stranger is not anyone we don’t know; some bodies are recognised as strangers (“bodies out of place”) through techniques — Neighbourhood Watch, child protection — which extend to the national project: “could be terrorists”.' },
          { h: 'Trayvon Martin', p: '“There’s a real suspicious guy… He looks black.” The sticky slide: suspicious → up to no good → looks black. “There can be nothing more dangerous to a body than the social agreement that that body is dangerous.”' },
          { h: 'Darkness and the shadow', p: 'The stranger as shadowy figure cannot be untangled from racial history; “could be anyone” is pointed. Fanon: seeing himself as the shadow, the dark body at the edge.' },
          { h: 'Mediated immediacy', p: 'The immediacy of bodily reactions is mediated by histories; “nothing more mediated than immediacy”; the careers of feelings are not independent of the careers of their objects.' },
          { h: 'Damasio’s suspicious faces', p: 'In patients with amygdala damage who judge untrustworthy faces as trustworthy, trustworthiness is treated as an objective feature of faces (Gross; Leys critique). Affects are assumed intrinsic to subjects and objects; they need a history (Foucault’s genealogy of “what we tend to feel is without history”).' },
          { h: 'Tomkins and affective training', p: 'Tomkins treats responses to strangers as “almost universal innate” but describes parents’ effort to teach children how to respond. Ahmed: scripts generate affects: you learn to fear by learning what to fear; affect is directed.' },
          { h: 'Racism as blunt instrument', p: 'Fear spills out of containers; “the blurrier the figure of the stranger the more bodies can be caught by it” — stop and search.' },
          { h: 'Texts and bodies; opacity', p: 'Why texts: to intervene in hate-speech and apology debates; bodies as signs. Hartman and Spivak on opacity and concealment; don’t assume access to others’ feelings. Later ethnography of diversity work.' },
          { h: 'Diversity work', p: 'Black male diversity trainers: building rapport against a fixed stereotype; being “careful” — the intimate labour of countering their idea of you. To arrive is to receive a charge; institutions create strangers.' }
        ],
        voice: 'When I wrote about strangers I wanted to say something simple: that nothing is more dangerous to a body than agreement that it is dangerous. That is not a claim about how an individual feels; it is about how feelings are made available in advance. Fear has a history that makes some bodies come up as threats before anyone notices the arrival. The neuroscientist can measure a response; he cannot tell you why the face that is judged untrustworthy is the one that is judged so. And those who are charged know already: they spend their lives managing the idea of them.',
        context: 'Strange Encounters (2000) used Neighbourhood Watch and Kristeva’s abjection; here Yancy’s “Walking While Black” (2013) provides a philosophical reading of Zimmerman’s call. Damasio’s neuroscience of emotion (via Ekman and Tomkins) is subject to critique by Gross (2006) and Leys (2012). The diversity-work interviews come from *On Being Included* (2012).',
        objection: 'Neuroscientists may respond that Damasio’s patient studies concern *a specific deficit* in threat evaluation and do not claim that the “faces” are objectively suspicious (the stimuli were rated by normal subjects, whose ratings may be socially biased — which is Ahmed’s point). A distinct critique: the Trayvon Martin case is complex legally; Ahmed’s treatment is about how it is *narrated*, not about adjudicating guilt. Readers should consider whether the “sticky slide” analysis suffices for the legal facts.',
        terms: ['stranger', 'sticky', 'racialisation', 'emotional-labour', 'orientation', 'affect', 'body-out-of-place', 'fear'],
        people: ['yancy', 'fanon', 'damasio', 'tomkins', 'hartman', 'spivak', 'foucault', 'leys', 'sedgwick'],
        diagrams: [
          {
            title: 'The sticky slide in Zimmerman’s call', w: 620,
            nodes: [
              { id: 'a', x: 75, y: 90, w: 100, label: '“Suspicious guy”', kind: 'a' }, { id: 'b', x: 190, y: 90, w: 100, label: '“Up to no good”', kind: 'a' },
              { id: 'c', x: 305, y: 90, w: 100, label: '“Coming toward me”', kind: 'a' }, { id: 'd', x: 420, y: 90, w: 100, label: '“Looks black”', kind: 'a' }, { id: 'e', x: 535, y: 90, w: 100, label: '“Black male”', kind: 'a' },
              { id: 'f', x: 200, y: 220, w: 250, label: 'Retrospective agreement: he was right to fear; self-defence', kind: 'd' },
              { id: 'g', x: 470, y: 220, w: 170, label: '“Walking while black”: already judged', kind: 'ghost' },
              { id: 'x', x: 310, y: 320, w: 440, label: '“There can be nothing more dangerous to a body than the social agreement that that body is dangerous”', kind: 'ghost' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'g', dash: true }, { from: 'e', to: 'f', curve: 30, dash: true }, { from: 'f', to: 'x', dash: true }],
            caption: 'The last statement makes explicit what the first already implied.'
          },
          {
            title: 'Who is “affected rightly”? Damasio and Tomkins vs Ahmed', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 270, label: 'Function / innate model' }, { x: 320, y: 38, w: 295, h: 270, label: 'Ahmed' }],
            nodes: [
              { id: 'a1', x: 158, y: 105, w: 220, label: 'Faces are suspicious (a property)', kind: 'b' }, { id: 'a2', x: 158, y: 185, w: 220, label: 'Right response = feel suspicion; error if not', kind: 'a' }, { id: 'a3', x: 158, y: 260, w: 220, label: 'Scripts contain innate affects', kind: 'a' },
              { id: 'b1', x: 468, y: 105, w: 220, label: 'Objects become suspicious via histories', kind: 'e' }, { id: 'b2', x: 468, y: 185, w: 220, label: 'Agreement fades to background (affect “resides”)', kind: 'e' }, { id: 'b3', x: 468, y: 260, w: 220, label: 'Scripts generate affects: you learn what to fear', kind: 'e' }
            ],
            edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
            caption: 'Without a theory of mediation at the level of the object, social judgement is naturalised.'
          },
          {
            title: 'Receiving a charge: the labour of the charged figure', w: 620,
            nodes: [
              { id: 'a', x: 110, y: 80, w: 150, label: 'A fixed stereotype', sub: 'in the room before the body', kind: 'a' },
              { id: 'b', x: 310, y: 80, w: 150, label: 'Arrival = receiving a charge', kind: 'a' },
              { id: 'c', x: 510, y: 80, w: 150, label: 'Self-management', sub: 'glasses, short hair, tone', kind: 'c' },
              { id: 'd', x: 310, y: 205, w: 230, label: 'Emotional labour: countering their idea of you', kind: 'c' },
              { id: 'e', x: 310, y: 320, w: 400, label: 'Institutions create strangers; diversity work includes the work of not quite inhabiting the norm', kind: 'ghost' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e', dash: true }],
            caption: 'The diversity trainers’ words from *On Being Included* (2012).'
          }
        ],
        questions: [
          'Think about a place you have been where a stereotype “arrived” before you did. How did you manage the encounter?',
          'Is Ahmed’s argument that Damasio assumes a naturalised “suspicious face” fair? What would a scientifically careful version of the experiment look like?',
          'If affective training generates fear rather than managing it, how should we think about child-protection education (“stranger danger” campaigns)?'
        ],
        glosses: [
          { q: 'Trayvon Martin', t: 'The killing and its afterlife', b: 'Trayvon Martin (17) was shot by neighbourhood-watch volunteer George Zimmerman in Sanford, Florida on 26 February 2012; Zimmerman’s acquittal on 13 July 2013 sparked protests and the #BlackLivesMatter hashtag. Ahmed’s focus is on the words of the 911 call; the legal reasoning invoked Florida’s “stand your ground” law context. This case is a bridge from the Introduction’s “soft touch” to the contemporary politics of suspicion.' },
          { q: 'Walking While Black', t: 'Yancy’s essay', b: 'George Yancy’s “Walking While Black in the ‘White Gaze’” (*The New York Times* Opinionator, 2013) and his *Look, a White!* (2012) develop Fanon’s “white gaze” philosophically. The essay brings Fanon’s phenomenology (Chapter 3) into dialogue with the Zimmerman case.', people: ['yancy'] },
          { q: 'there can be nothing more dangerous to a body than the social agreement that that body is dangerous', t: 'The central sentence', b: 'It condenses the argument that danger is *social agreement* — a form of “agreement” that is not necessarily conscious (note 23: Ahmed develops “agreement as what is not registered” in *Willful Subjects*, 2014, drawing on Schopenhauer). It also connects with Judith Butler’s “frames” (*Frames of War*) and with Sara Ahmed’s later “institutional habits”.' },
          { q: 'Antonio Damasio, whose work has been quite influential', t: 'Damasio’s somatic marker theory', b: 'Damasio’s *Descartes’ Error* (1994) and *The Feeling of What Happens* (1999) argue that emotion (bodily “somatic markers”) is essential for rational decision-making; patients with ventromedial prefrontal or amygdala damage show impairments. The passage Ahmed cites comes from the discussion of patient S.M. (Adolphs, Tranel & Damasio, 1998, on social judgement of faces). Critics (Gross 2006; Leys 2012; Barrett 2017) argue that the stimuli presuppose a contested notion of “trustworthy” faces.', people: ['damasio'] },
          { q: 'Daniel M. Gross', t: 'The Secret History of Emotions', b: 'Gross’s book (2006) traces the rhetorical tradition of emotion (Aristotle’s *Rhetoric*) that is hidden in modern psychology. His remark that Damasio’s reading “strips trustworthiness of its essentially social quality” is quoted by Ahmed; see also Ruth Leys’s “Both of Us Disgusted in My Insula” (2012).' },
          { q: 'One of Michel Foucault’s definitions of genealogy', t: 'A genealogy of the felt', b: 'In “Nietzsche, Genealogy, History” (1971) Foucault describes genealogy as a way of showing the history of what we think has none: “feelings, love, conscience, instincts”. Ahmed’s addition — “a history of the felt” — is an invitation to treat emotions as products of historical formations.', people: ['foucault'] },
          { q: 'Tomkins’ monumental volumes on affect also exercise the figure of the stranger', t: 'Tomkins’s stranger', b: 'In *Affect Imagery Consciousness* (esp. vol. 2, on shame and the “face of the stranger”), Tomkins treats “stranger anxiety” and shame as interlinked: the child’s excitement about the stranger’s face is checked by shame. Sedgwick & Frank (1995) highlight “the strange” as a hinge to a phenomenology of shame. Ahmed’s point: his examples “push against his model”.', people: ['tomkins', 'sedgwick'] },
          { q: 'affective training', t: 'Training the affects', b: 'The idea of *affective training* — that responses like fear and politeness are taught — is a main contribution of the Afterword; it connects to Bourdieu’s habitus, to Foucault’s disciplines, and to Hochschild’s “feeling rules”. It can also be linked to *Willful Subjects*’ analysis of upbringing and “will”.' },
          { q: 'a blunt instrument', t: 'Racism as a blunt instrument', b: 'Ahmed (2012: 181): racism is blunt rather than precise: it catches many bodies because the figure it targets is blurry. “Stop and search” (UK) and “stop-and-frisk” (New York) and post-9/11 profiling are examples; see Chapter 3’s “could be”.' },
          { q: 'Saidiya Hartman', t: 'Hartman on opacity', b: 'Hartman’s *Scenes of Subjection* (1997) examines slavery’s archive and the problem of empathy; the cited line (“to give full weight to the opacity of these texts”) supports Ahmed’s methodological point that feelings of others are not directly accessible. See also Hartman’s “Venus in Two Acts” (2008) on “critical fabulation”.', people: ['hartman'] },
          { q: 'important work on translation and subalternity', t: 'Spivak on secrets', b: 'In “Translator’s Preface” to Mahasweta Devi’s *Imaginary Maps* (1995) and in “Can the Subaltern Speak?” Spivak writes that some secrets cannot be revealed; translation requires acknowledging non-transparent difference. Ahmed uses it to say concealment can be resistance.', people: ['spivak'] },
          { q: 'On Being Included', t: 'Diversity work as research', b: 'Ahmed’s ethnography of diversity practitioners in UK and Australian universities (2012) argues that “diversity” is often used as a technique of institutional image-management; “non-performativity” of anti-racism. The interviews quoted here (the trainers) show the emotional labour of being charged.' },
          { q: 'to arrive is to receive a charge', t: 'Arrival and charge', b: 'A condensed formulation of “racialised arrival”: bodies are met by pre-existing meanings. Compare Fanon’s “historico-racial schema” and Frantz Fanon’s “I am overdetermined from without”; and the discussion of “institutional whiteness” in Ahmed’s “A Phenomenology of Whiteness” (2007).' }
        ]
      },
      {
        title: 'Happy Objects',
        gist: 'Turning to positive affect, Ahmed explains why objects rather than feelings circulate and develops “happy objects” — things made good by their promised proximity to happiness. The bride who must feel happy, affect aliens and killjoys, the claim that happiness is contagious, and the concept of attunement (Heidegger, Scheler) show that feelings do not pass smoothly: some are blocked, and attunement creates strangers at the edges. Citizenship decides whose happiness comes first.',
        moves: [
          { h: 'Against smooth transmission', p: 'Contagion (Izard, Sedgwick) and transmission (Brennan) assume affects pass smoothly. But we often feel differently in the same room; social experience involves tension, disagreement, perversion (informed by being a feminist at the table).' },
          { h: 'Objects accumulate value', p: 'Objects, not feelings, circulate; fear can “in effect” move through being directed at an object; someone might not be suspicious of a body agreed to be suspicious.' },
          { h: 'Happy objects', p: 'Happiness as a telos; things are good because they point toward happiness; things associated with happiness before encounter (the wedding day “the happiest day of your life”). Feelings directed become directive.' },
          { h: 'The bride', p: 'Hochschild’s bride who feels “depressed and upset” has to “save the day”: emotional labour; one can be alienated from one’s own happiness; disappointment can become self-doubt or rage: affect aliens.' },
          { h: 'Happiness contagion', p: 'Fowler & Christakis: “clusters” of happy people; centre vs periphery; the map of happiness “maps” onto other maps; “quiet corners”.' },
          { h: 'Attunement', p: 'Heidegger’s *Stimmung*; Scheler on infection, communities of feeling and fellow feeling; crisis (the joke that becomes offensive); to be attuned is to share leanings; attunement can create strangers by not leaning that way.' },
          { h: 'Emotional labour of arrival', p: 'hooks: a woman of colour entering a feminist room makes the atmosphere tense; making others comfortable is work (diversity work).' },
          { h: 'The killjoy', p: 'The affect alien who gets in the way: the feminist killjoy and the angry woman of colour; willing to get in the way of happiness without agreement.' },
          { h: 'Blocked feelings; citizenship', p: 'Some feelings don’t pass; some bodies are blockage points; “citizenship as a technology for deciding whose happiness comes first”.' }
        ],
        voice: 'I did not explore happiness in the book, but I now think it explains something I was missing: how feelings are directed to objects before we meet them. A wedding is the happiest day of your life before it happens; the bride who feels otherwise has to work to feel right. And the person who disagrees — who does not smile at the joke — becomes the cause of the loss of attunement: the killjoy. When I say objects circulate, I mean that a society tells us what is good, and that being near those goods is a way of being near others who are near them.',
        context: 'The Promise of Happiness (2010) is the main source: happiness as a promise directing us to “happy objects” (Locke’s “good” as that which causes pleasure; Hume vs Smith). Hochschild’s *The Managed Heart* (1983) provides emotional labour; Fowler & Christakis (2008) supply the contagion study; Heidegger’s lectures on mood (*The Fundamental Concepts of Metaphysics*, 1995) and Scheler’s *The Nature of Sympathy* (1913) supply attunement; Stern (note 28) is the developmental source.',
        objection: 'A psychologist might note that happiness research is more varied than the “contagion” study; and that “attunement” is a concept Ahmed adapts loosely. Another challenge: “happy objects” risk being a tautology (objects become happy because they are called happy). Ahmed’s reply is that the account is *descriptive* and historical: it tracks how goods circulate. A further question: is the “killjoy” a position one chooses or is assigned?',
        terms: ['happiness', 'killjoy', 'affect-alien', 'attunement', 'contagion', 'emotional-labour', 'comfort', 'orientation', 'circulation'],
        people: ['brennan', 'hochschild', 'heidegger', 'scheler', 'hooks', 'berlant'],
        diagrams: [
          {
            title: 'Contagion vs objects that circulate vs attunement', w: 620,
            zones: [{ x: 10, y: 38, w: 195, h: 270, label: 'Contagion / transmission' }, { x: 213, y: 38, w: 195, h: 270, label: 'Objects circulate' }, { x: 416, y: 38, w: 195, h: 270, label: 'Attunement' }],
            nodes: [
              { id: 'a1', x: 108, y: 110, w: 160, label: 'The same feeling passes', kind: 'a' }, { id: 'a2', x: 108, y: 190, w: 160, label: 'Smoothly; shared feeling = social', kind: 'a' }, { id: 'a3', x: 108, y: 260, w: 160, label: 'Misses tension & disagreement', kind: 'ghost' },
              { id: 'b1', x: 311, y: 110, w: 160, label: 'Feelings directed at objects', kind: 'e' }, { id: 'b2', x: 311, y: 190, w: 160, label: 'Objects accumulate affective value', kind: 'e' }, { id: 'b3', x: 311, y: 260, w: 160, label: 'Bodies may or may not be affected', kind: 'e' },
              { id: 'c1', x: 514, y: 110, w: 160, label: 'Mood as atmosphere we are in', kind: 'c' }, { id: 'c2', x: 514, y: 190, w: 160, label: 'Shared leanings; crisis at objects', kind: 'c' }, { id: 'c3', x: 514, y: 260, w: 160, label: 'Non-attunement creates strangers', kind: 'c' }
            ],
            edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3', dash: true }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }, { from: 'c1', to: 'c2' }, { from: 'c2', to: 'c3' }],
            caption: 'Ahmed does not deny that affects pass; she argues models should also explain why they do not.'
          },
          {
            title: 'Happy objects and the killjoy', w: 620,
            nodes: [
              { id: 'a', x: 110, y: 80, w: 150, label: 'An object is promised as good', sub: 'wedding, marriage, home, nation', kind: 'b' },
              { id: 'b', x: 310, y: 80, w: 150, label: 'Circulates before encounter', sub: '“the happiest day of your life”', kind: 'c' },
              { id: 'c', x: 510, y: 80, w: 150, label: 'Feel right', sub: 'close the gap (emotional labour)', kind: 'c' },
              { id: 'd', x: 510, y: 205, w: 150, label: 'Fail to be happy', sub: 'disappointment, self-doubt, rage', kind: 'a' },
              { id: 'e', x: 310, y: 205, w: 150, label: 'Affect alien', sub: 'alienated from your own happiness', kind: 'a' },
              { id: 'f', x: 110, y: 205, w: 150, label: 'Killjoy', sub: 'gets in the way; the cause of the loss of mood', kind: 'e' },
              { id: 'x', x: 310, y: 320, w: 410, label: 'Citizenship decides whose happiness comes first', kind: 'd' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'if not' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'x', dash: true }],
            caption: 'The figure of the killjoy shows that happiness is a social bond: not everyone is allowed to refuse it.'
          }
        ],
        questions: [
          'Consider a ritual (wedding, graduation, birthday, holiday). Whose happiness is assumed? Who is the “killjoy” if the ritual goes wrong?',
          'Do you find the concept of “attunement” helpful for thinking about group meetings? How do you notice when you have lost attunement?',
          'Ahmed says “citizenship is a technology for deciding whose happiness comes first”. Where would you look for evidence?'
        ],
        glosses: [
          { q: 'Teresa Brennan (2004)', t: 'Brennan’s transmission', b: 'Brennan’s *The Transmission of Affect* (2004, published posthumously) proposes that affects are transmitted physically between bodies (via pheromones, entrainment), a rival to Ahmed’s model. Ahmed’s answer (and the 2004 coincidence): she is concerned that models assume smooth passing; she does not deny some affects pass.', people: ['brennan'] },
          { q: 'The Managed Heart', t: 'Hochschild on emotional labour', b: 'Arlie Hochschild’s *The Managed Heart: Commercialization of Human Feeling* (1983) introduced “emotional labour” (managing feeling to produce a publicly observable display; e.g., flight attendants) and “feeling rules”. Ahmed extends it from paid service to everyday social life and to diversity work.', people: ['hochschild'], terms: ['emotional-labour'] },
          { q: 'affect aliens', t: 'Affect aliens', b: 'From *The Promise of Happiness* (2010, ch. 1): those who do not experience the “right” feelings from happy objects are alienated from the shared happiness; they appear as the cause of unhappiness. The notion is used in disability studies and queer theory to describe “being out of tune” with normative moods.', terms: ['affect-alien'] },
          { q: 'Fowler and Christakis', t: 'The “happiness is contagious” study', b: 'Fowler & Christakis’s (2008) Framingham network analysis claims happiness clusters up to three degrees of separation. The study was criticised (e.g., Lyons 2011) because observational network data cannot distinguish contagion from homophily or shared environment; the authors acknowledge the limit Ahmed notes. The “party map” image shows how network position is read as emotional position.' },
          { q: 'attunement', t: 'Attunement in affect studies', b: 'The term circulates through Heidegger (*Stimmung*), developmental psychology (Daniel Stern’s “affective attunement” between mother and infant), and affect theory (e.g., Kathleen Stewart’s “atmospheric attunements”). Ahmed’s intervention is that attunement is not exhaustive; it involves leanings and leaves some bodies out; “misattunements” are fertile.', terms: ['attunement'] },
          { q: 'Max Scheler', t: 'Scheler’s sympathy', b: 'Scheler’s *The Nature of Sympathy* (1913) distinguishes four forms: community of feeling (both feel the same sorrow at the same loss), fellow-feeling (feeling *with* another’s sorrow), emotional infection (contagion), and emotional identification. Ahmed’s concern is that infection is too readily presumed.', people: ['scheler'] },
          { q: 'when a woman of colour enters a feminist room', t: 'hooks on rooms and atmosphere', b: 'The quotation (hooks 1984, *Feminist Theory: From Margin to Center*, p. 56) describes how white feminists’ bonding is disrupted by a woman of colour entering. Ahmed reads it as a case of “tension as atmosphere”: someone’s arrival changes the mood and she must do emotional work. Compare Ahmed’s later “sweaty” descriptions of institutional rooms (*Living a Feminist Life*).', people: ['hooks'] },
          { q: 'the feminist killjoy', t: 'The killjoy', b: 'First elaborated in *The Promise of Happiness* (2010) and Ahmed’s blog (feministkilljoys.com), then in *Living a Feminist Life* (2017) and *The Feminist Killjoy Handbook* (2023): the one who disrupts the good feeling by naming a problem becomes the problem. The Afterword’s linking of the killjoy to “the angry woman of colour as the killer of feminist joy” ties to Chapter 8’s angry Black woman stereotype (note 1).' },
          { q: 'citizenship as a technology for deciding whose happiness comes first', t: 'Happiness and citizenship', b: 'A concise statement of the politics of the “happy”: citizenship distributes emotional rights (what must be felt, who may be unhappy). Compare Berlant’s “cruel optimism” and Michael Hardt’s “affective labour”. It also forecasts the next section’s Royal Wedding and austerity analysis.' }
        ]
      },
      {
        title: 'Conclusion: Emotion and Rhetoric',
        gist: 'The Afterword ends by showing how stranger danger and happiness help analyse political rhetoric: David Cameron’s “muscular liberalism” attaches belief to race again; political discourse gives feelings objects and faces; the commodity-fetishism model explains how feelings seem to reside in things; and after austerity protests, a happiness index and a Royal Wedding turned anger into national happiness. Citizenship becomes a requirement to feel right — “There are wrongs in this right.”',
        moves: [
          { h: 'Loving multiculturalism, then its death', p: 'The book analysed multiculturalism as love for difference with an injunction to love the nation; since then multiculturalism has been “sentenced to death” as endangering security.' },
          { h: 'Muscular liberalism', p: 'Cameron’s 2011 Munich speech: “a genuinely liberal country… believes in certain values and actively promotes them”; “to belong here is to believe in these things”; “unambiguous and hard-nosed”. Belief is re-attached to race (“when a white person holds objectionable views…”).' },
          { h: 'The nervous white subject', p: 'The “muscular liberal” is the one who is hard about belief; nervousness creates a bond; the “soft touch” nation of the Introduction returns.' },
          { h: 'Giving feelings a face', p: 'Neville-Jones: “a widespread feeling that we’re less united behind values”. Political discourse gives vague nervousness an object; not projection (inside out) but circulation; naming an atmosphere gives it form; feelings strengthen when a cause is found. Commodity fetishism again: feelings reside in objects by cutting them off from labour; containers spill: fear as management of crisis.' },
          { h: 'Conversion points', p: 'Hatred presented as love; austerity anger answered by a happiness index and the Royal Wedding; those who refuse are affect aliens/killjoys; pacifying rage by projecting it onto militants or reading tired feet.' },
          { h: 'The Royal Wedding and Jubilee', p: 'A heterosexual, white couple as national happiness; the monarchy as “magic” cut off from labour; descriptions slide to evaluation to command: rejoice! Class as heritage; the singular body as the object of shared feeling.' },
          { h: 'Feeling right', p: 'Citizenship as sympathy: to be touched by national trauma and its conversion; not to feel happiness is to be unsympathetic, hostile. “To feel right having felt wronged.” “There are wrongs in this right. This book describes some of them.”' }
        ],
        voice: 'I end where I began, with a nation that wants to feel hard, not soft. Since the book was written, the language of love has narrowed; muscular liberalism makes explicit what loving multiculturalism implied — that belonging is a matter of belief, and that belief has a colour. I have tried to show how feelings are given faces and how a wedding can be a way of making anger go away. If this book makes us more attuned to how we are asked to feel right, it will have done something. There are wrongs in this right.',
        context: 'David Cameron’s speech at the Munich Security Conference (5 Feb 2011) criticised “state multiculturalism” and advocated “muscular liberalism”; the 2010 UK Spending Review brought austerity; student protests (Nov–Dec 2010) and the TUC march (March 2011) followed; the UK government began measuring national wellbeing (ONS, 2010–11); the Royal Wedding of Prince William and Catherine Middleton took place on 29 April 2011; the Diamond Jubilee in June 2012. Press quotations are cited in notes 29–36.',
        objection: 'A reader may ask whether the Royal Wedding example is a fair test: many people enjoyed it without “being told to”. Ahmed’s argument is structural (how commentary instructs feeling), not about individual experiences. Another worry: the claim that political discourse “gives form” to widespread feelings could slide into a hidden functionalism (feelings are manipulated). Ahmed’s answer is that feelings are real and uneven; discourse directs them.',
        terms: ['multiculturalism', 'fetishism', 'happiness', 'killjoy', 'affect-alien', 'nation', 'sticky', 'circulation'],
        people: ['marx', 'berlant', 'hochschild'],
        diagram: {
          title: 'From austerity anger to national happiness', w: 620,
          nodes: [
            { id: 'a', x: 105, y: 80, w: 150, label: 'Anger at public-spending cuts', sub: 'marches; “shared peril”', kind: 'a' },
            { id: 'b', x: 310, y: 80, w: 150, label: 'Government response', sub: 'happiness index', kind: 'c' },
            { id: 'c', x: 515, y: 80, w: 150, label: 'Royal Wedding announced', sub: 'a national happy occasion', kind: 'c' },
            { id: 'd', x: 515, y: 205, w: 150, label: '“Everyone would want to put on record the happy news”', kind: 'c' },
            { id: 'e', x: 310, y: 205, w: 160, label: 'Anger pacified', sub: 'tired feet; projected on militants', kind: 'a' },
            { id: 'f', x: 105, y: 205, w: 150, label: 'Those who don’t participate', sub: 'killjoys, affect aliens', kind: 'e' },
            { id: 'x', x: 310, y: 320, w: 420, label: 'Citizenship as feeling right: being touched into citizenship by trauma and its conversion', kind: 'd' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'x', dash: true }],
          caption: 'Happiness as a gift to the nation that counters exhaustion and rage.'
        },
        questions: [
          'Compare Cameron’s “muscular liberalism” to the “soft touch” of the Introduction. What has changed and what has stayed the same?',
          'Think of a current political event that gave a vague mood an object (an enemy, a cause). How did the rhetoric work?',
          'What does “There are wrongs in this right” mean for how we read patriotic or celebratory events?'
        ],
        glosses: [
          { q: 'muscular liberalism', t: 'Cameron’s Munich speech', b: 'David Cameron’s speech (5 Feb 2011) argued that “state multiculturalism” had encouraged segregation and extremism and called for “a much more active, muscular liberalism”. The speech followed Merkel’s 2010 remark that multiculturalism had “utterly failed” and Sarkozy’s similar remark. Critics (e.g., Tariq Modood) noted the conflation of multiculturalism with terrorism. The “British values” duty (2014) institutionalised the logic.' },
          { q: 'soft touch', t: 'A circle closes', b: 'The “soft touch” of the Introduction returns in Cameron’s “hard-nosed” liberal: the affective vocabulary of hardness and softness (skin, nerves) persists. It supports Ahmed’s thesis that national bodies are imagined as skins that can be bruised or toughened.' },
          { q: 'commodity fetishism', t: 'Fetishism reprised', b: 'Marx’s commodity fetishism (Capital ch. 1) becomes in Ahmed’s later work a general model for how feelings appear to reside in objects: feelings reside by cutting objects from labour (the labour of reproducing the monarchy, of producing fear). Compare Chapter 4’s “fetish objects”.', terms: ['fetishism'] },
          { q: 'happiness index', t: 'Measuring national wellbeing', b: 'In November 2010 David Cameron announced that the Office for National Statistics would measure national wellbeing. Critics (e.g., William Davies’s *The Happiness Industry*, 2015) saw the move as part of a governmental technology of “behavioural” governance during austerity. Ahmed’s point: happiness as a gift or distraction from anger.' },
          { q: 'Royal Wedding', t: 'The royal wedding and national happiness', b: 'The wedding (29 April 2011) was televised globally; the government considered a bank holiday. Ahmed’s analysis of commentary (Telegraph’s Peter Oborne; Guardian editorial) shows how description slides to evaluation to command. Compare Tom Nairn’s *The Enchanted Glass* (1988) on the monarchy as “magic”.' },
          { q: 'There are wrongs in this right.', t: 'The last line', b: 'A pun on “right” (correct, entitled, and the political right): to feel right is to be on the right side, and may involve wrongs. The sentence points the reader back to the book: each chapter shows a “right” feeling (love, shame, pride, fear) with its wrongs. A good last prompt for book-club discussion: what “right feelings” do you notice being demanded of you?' }
        ]
      }
    ]
  });
})();
