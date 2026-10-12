/* Chapter 4: The Performativity of Disgust — authored guide. */
(function () {
  CP.unit('ch4', {
    tagline: 'Disgust makes the “disgusting” — by sticking signs to bodies and by the very speech act that declares it.',
    claim: 'Disgust is not a reaction to things that are inherently offensive. It is a **double movement** — close enough to be sickened, then recoil — whose proximity is forgotten, so that the object seems to have approached us. It operates through **contact** and **metonymy** (objects become disgusting by touching disgusting objects), producing **sticky signs and sticky bodies**. And it is **performative**: saying “That’s disgusting!” generates the object, the disgusted subject and a *community of witnesses* — yet can also be turned back on itself.',
    glance: [
      'Darwin’s “utter disgust” at a native touching his food: the other need not be dirty to be *seen as* dirt.',
      'Disgust & abjection (Kristeva): borders are made into objects; “border objects are disgusting while disgust engenders border objects”.',
      'Stickiness is *not* a property of surfaces; it is an effect of histories of contact. Signs stick (through repetition and concealed association) and bodies become blockages.',
      'The speech act “That’s disgusting!” after 9/11: it names an object, generates a *we*, expels “Middle-Eastern terrorists” — and can be answered by “disgust at disgust”.'
    ],
    why: 'We all know the phrase “I find that disgusting” as a moral trump card. Ahmed shows why: disgust claims a bodily, therefore apparently unarguable, authority — but it has history. It underwrites contempt for migrants, the poor, sexual minorities, and (as 2020 showed) bodies associated with a virus. If you have ever wondered why some insults “stick” forever, or why “yuck” is such a strong political emotion, this chapter gives a vocabulary: contact, stickiness, performativity.',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'This chapter discusses colonial racism (Darwin), mentions a racial slur used against Ahmed, and quotes dehumanising language (“subhuman beasts”, “vermin”) from a 2001 online post in order to analyse it.' } }],
    argument: {
      steps: [
        { h: 'Darwin on the beach', p: 'The scene is an imperial encounter; the other is “already seen as dirt” and so his touch contaminates. Food is the paradigm: we must take the not-us in to survive, so disgust polices incorporation.' },
        { h: 'Disgust is a double movement', p: 'Contact first, recoil second; but the approach is forgotten so the object seems to invade. Disgust is ambivalent — it fascinates (Miller’s double-take).' },
        { h: 'Abjection', p: 'With Kristeva: the abject threatens the border from inside and outside; the border is transformed into an object. Borders need to be threatened to be maintained.' },
        { h: 'Contact and metonymy', p: 'Objects become disgusting by contact with already-disgusting things or resemblance; disgust *sticks* — to the native body via “dirt”, “matter out of place”. Disgust hierarchises: the “low”.' },
        { h: 'Stickiness', p: 'Not a quality of surfaces but an effect of histories of contact; signs stick through repetition and concealed associations. Sticky bodies become fetish objects and “blockages”.' },
        { h: 'Performativity', p: 'With Butler/Derrida: signs repeat past conventions, generating effects. “That’s disgusting!” is a performative that creates object, subject, and a community of witnesses (Probyn); it vomits words.' },
        { h: '9/11 postings', p: 'An online post names the event disgusting, then transfers the disgust to “Middle Eastern terrorists” and expels “sub-human beasts”. Expulsion never ends because others “could be”.' },
        { h: 'Unsticking', p: 'Disgust can be turned on disgust (“the war is disgusting”) but critics are met by disgust (Sontag). To adhere is not always to cohere. Ask “what sticks?” and also “how can we stick to our refusal of the terms of allegiance?”' }
      ]
    },
    diagram: {
      title: 'Chapter 4: how disgust makes its objects', w: 620,
      nodes: [
        { id: 'a', x: 95, y: 80, w: 140, label: 'Contact', sub: 'proximity, touch, taste', kind: 'b' },
        { id: 'b', x: 270, y: 80, w: 140, label: 'Recoil', sub: 'pulling away; “yuk”', kind: 'a' },
        { id: 'c', x: 445, y: 80, w: 150, label: 'Object seems disgusting', sub: 'the approach is forgotten', kind: 'a' },
        { id: 'd', x: 95, y: 205, w: 140, label: 'Signs & bodies stick', sub: 'dirt · native · terrorist', kind: 'c' },
        { id: 'e', x: 270, y: 205, w: 150, label: '“That’s disgusting!”', sub: 'speech act', kind: 'e' },
        { id: 'f', x: 445, y: 205, w: 160, label: 'Community of witnesses', sub: 'shared pulling away', kind: 'e' },
        { id: 'g', x: 270, y: 320, w: 380, label: 'Expulsion never finishes — and can be turned: “disgust at disgust”', kind: 'd' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 30 }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' }, { from: 'g', to: 'c', dash: true, curve: -60 }],
      caption: 'Disgust generates the border objects it claims to respond to; speech makes that generation public and collective.'
    },
    context: [
      'Ahmed enters a rich interdisciplinary literature on disgust: **Darwin** (expression), **psychologists** (Rozin & Fallon, Tomkins, Angyal), **Miller’s** *Anatomy of Disgust*, **Kristeva’s** abjection, **Douglas’s** dirt, and **Sartre/Grosz** on slime. Her original move is *stickiness*: the idea that affect accumulates in signs through contact — turning Butler’s and Derrida’s theory of **iterability** into a theory of **historicity as adhesion**.',
      'The case: online responses to 9/11 saying “that’s disgusting”. The scale is deliberately small (a posting by Urban Outlaw Productions), analysed as an example of how speech acts build communities and expulsions; the closing turn to Susan Sontag’s *New Yorker* piece and “disgust at disgust” prepares Chapters 5–6 on shame and love.'
    ],
    terms: ['disgust', 'abjection', 'sticky', 'contact', 'metonymy', 'performativity', 'speech-act', 'sign', 'fetishism', 'body-out-of-place', 'orientation', 'ambivalence', 'fear', 'racialisation'],
    people: ['darwin', 'kristeva', 'miller', 'rozin', 'tomkins', 'douglas', 'sartre', 'grosz', 'butler', 'derrida', 'probyn', 'sontag', 'lacan'],
    sources: [
      { who: 'Charles Darwin', work: 'The Expression of the Emotions in Man and Animals (1872)', role: 'Disgust as offence to taste; the Tierra del Fuego anecdote.', use: 'Opening: reading Darwin’s “utter disgust” as an imperial encounter.' },
      { who: 'William Ian Miller', work: 'The Anatomy of Disgust (1997)', role: 'Disgust is intentional, ambivalent (double-takes), hierarchical (low/high), and contaminating by contact.', use: 'Provides many of the claims Ahmed builds on (and relocates historically).' },
      { who: 'Paul Rozin & April Fallon; Rozin et al.', work: '“A perspective on disgust” (1987); “Disgust” (1993)', role: 'Psychological definition: expression, action, physiology, feeling; “law of contagion”.', use: 'Used to show disgust’s materiality, then critiqued for bypassing *why* things are offensive.' },
      { who: 'Silvan Tomkins', work: 'Affect, Imagery, Consciousness vol. 2 (1963)', role: 'Disgust as pulling away; contamination by contact.', use: 'Source of “anything which has had contact with disgusting things itself becomes disgusting”.' },
      { who: 'Julia Kristeva', work: 'Powers of Horror (1980/82)', role: 'The abject: what disturbs identity, system, order; the border transformed into an object.', use: 'Main theoretical frame for disgust & border objects.' },
      { who: 'Mary Douglas', work: 'Purity and Danger (1966)', role: 'Dirt as “matter out of place”.', use: 'The native body “stands for” dirt without being dirty.' },
      { who: 'Jean-Paul Sartre; Elizabeth Grosz', work: 'Being and Nothingness; Volatile Bodies (1994)', role: 'Slime as a threatening in-between substance; Grosz: not a property but an effect of an order.', use: 'To argue stickiness is not an inherent quality.' },
      { who: 'Judith Butler; Jacques Derrida', work: 'Bodies That Matter (1993); “Signature Event Context”', role: 'Performativity and iterability.', use: 'Frame for “That’s disgusting!” as a speech act, which Ahmed extends via stickiness.' },
      { who: 'Elspeth Probyn', work: 'Carnal Appetites (2000)', role: 'Disgust as a public performance that calls others to witness our pulling away.', use: 'The community of witnesses.' },
      { who: 'Susan Sontag', work: '“Talk of the Town”, The New Yorker (24 Sept 2001)', role: 'Questioned the rhetoric of “cowardly” attacks; was denounced.', use: 'Case of dissent being met with disgust.' }
    ],
    conversation: [
      { h: 'The politics of disgust: Nussbaum, Kass, Kahan', p: 'Philosophers disagree on whether disgust is a reliable moral guide. Leon Kass’s “wisdom of repugnance” (1997) defends it; Martha Nussbaum (*Hiding from Humanity*, 2004; *From Disgust to Humanity*, 2010) argues disgust is “irrational” and has been used against minorities (homosexuals, Jews); Dan Kahan (1998) defends a place for disgust in law. Ahmed’s view is different from both: the question is not *whether to trust disgust* but how disgust is made and made to stick.' },
      { h: 'Disgust sensitivity and politics', p: 'Moral psychologists (Haidt; Inbar, Pizarro & Bloom) have reported links between disgust sensitivity and political conservatism; these results are contested (measurement and replication debates) and Ahmed’s theory predicts that sensitivities are themselves historically made. Treat these findings as a live empirical argument rather than settled.' },
      { h: 'Revolting subjects, social abjection', p: 'Imogen Tyler (*Revolting Subjects*, 2013) extends the argument to “social abjection” of asylum seekers, welfare claimants and “chavs” in neoliberal Britain; Anne McClintock (*Imperial Leather*, 1995) and Ann Stoler trace the colonial histories of “dirt” and race that Ahmed gestures at.' },
      { h: 'Pandemic stickiness', p: 'The COVID-19 pandemic offered a vivid case: the sticking of “virus” to “Chinese”, “Asian”, and later to the unvaccinated or to “super-spreaders” illustrates how contagion fears attach to bodies via sticky signs and how recoil is mistaken for rational hygiene.' },
      { h: 'Is stickiness a theory?', p: 'Critics ask whether stickiness is an explanation or a metaphor — and whether it can predict which signs stick (see Wetherell 2012; Leys 2011). Ahmed’s Afterword defends it as a *descriptive* concept that directs attention to histories of contact.' }
    ],
    debates: ['disgust-politics', 'hate-speech-law', 'digital-affect', 'affective-turn'],
    questions: [
      'Darwin writes “his hands did not appear dirty.” What is Ahmed doing by reading that admission closely? Where have you seen “they’re not dirty, but…” used?',
      'Is it plausible that disgust has a time lag — that we first feel “sick”, recoil, and only then find the object disgusting? Can you recall an example from your own life?',
      'The chapter claims stickiness is an *effect* of contact, not a property. Think of a word, brand, or image that seems irredeemably contaminated; how did it get that way, and could it be un-stuck?',
      'Ahmed says critique “requires more time for digestion”. Do public cultures (social media, news cycles) enable or inhibit that time?',
      'The chapter ends: “How can we stick to our refusal of the terms of allegiance?” What would that look like in practice?'
    ],
    bridges: {
      back: 'Fear (Ch. 3) concerned the *future* possibility of injury; disgust is about *contamination through contact*. Both are metonymic: they work by sliding between signs, and both justify expulsion and policing — the “could be” of the terrorist returns as the post that expels “Middle-Eastern terrorists”.',
      forward: 'Chapter 5 turns to *shame* — an emotion that seems to turn *inward*. Ahmed will show how shame, too, is a speech act and a way of making collectives (the nation that says “sorry”), and how it can be as sticky as disgust.'
    },
    sections: [
      {
        title: 'Opening: “Utter Disgust” — Darwin’s Encounter',
        gist: 'Darwin’s account of eating among the Fuegians is read as an imperial scene: disgust names the other as dirt, and food — what must be incorporated for survival — is the paradigm of contamination. Ahmed lays out three questions: texture and surface, stickiness, and performativity.',
        moves: [
          { h: 'Disgust reads its object', p: 'The other’s hands “did not appear dirty”; the admission shows the other is *already* seen as dirt. Badness is attributed as if inherent.' },
          { h: 'Food and survival', p: 'We must take something other into our bodies to live, so disgust polices incorporation. In Darwin’s story the native’s disgust at the white man’s food also guarantees apartness.' },
          { h: 'Bad taste', p: 'Badness appears to belong to the thing eaten, yet exists only in the mouth of the one who tastes: subject/object boundaries are undone in the moment of their making.' },
          { h: 'Ambivalence', p: 'Disgust fascinates (Miller: double-takes); desire pulls toward, disgust pulls away. Ahmed adds a new intensification of movement: *pulling*.' },
          { h: 'The plan', p: 'Section 1: texture & surface; Section 2: stickiness; Section 3: performativity (the 9/11 case: “That’s disgusting!”).' }
        ],
        voice: 'I begin with Darwin because he writes as if disgust were a simple fact about the human animal, and yet his example is an encounter between an empire’s naturalist and the people he catalogues. His disgust at being touched is not at dirt — he says the hands were clean — but at what the hands belong to. That is the very structure of disgust as I want to describe it: contact is read through histories that make some bodies the carriers of dirt.',
        context: 'Darwin’s *Expression of the Emotions* treats disgust as a basic emotion with an evolutionary function (rejecting contaminants), which became a template for “basic emotions” research (Ekman). Postcolonial scholars (McClintock, Stoler) have analysed how hygiene, dirt and race were co-constructed in empire; Ahmed cites Mimi Sheller (2003) on the politics of eating in colonial histories.',
        objection: 'The risk: reading one anecdote as symptomatic of all “disgust”. Evolutionary psychologists would argue that disgust at contamination (rotting food, bodily waste) is cross-culturally robust and that Ahmed’s historicism leaves that basic function unexplained. Ahmed’s reply (note 1 of the Introduction; Afterword) is that her claim is not that disgust has no bodily basis but that *what counts* as disgusting is made in history.',
        terms: ['disgust', 'ambivalence', 'body-out-of-place', 'racialisation', 'orientation'],
        people: ['darwin', 'miller'],
        diagram: {
          title: 'Darwin’s scene: whose touch contaminates?', w: 620,
          nodes: [
            { id: 'd', x: 100, y: 90, w: 150, label: 'Darwin', sub: 'white, traveller, naturalist', kind: 'b' },
            { id: 'f', x: 310, y: 90, w: 140, label: 'The food', sub: 'cold preserved meat', kind: 'ghost' },
            { id: 'n', x: 520, y: 90, w: 150, label: 'The “native”', sub: 'touches it with a finger', kind: 'b' },
            { id: 'c', x: 310, y: 205, w: 210, label: '“His hands did not appear dirty”', sub: 'yet he is read as dirt', kind: 'a' },
            { id: 'r', x: 100, y: 205, w: 150, label: 'Darwin recoils', sub: 'utter disgust', kind: 'a' },
            { id: 'h', x: 310, y: 320, w: 440, label: 'History: imperial mobility turns native bodies into knowledge, property and commodity', kind: 'ghost' }
          ],
          edges: [{ from: 'n', to: 'f', label: 'touch' }, { from: 'f', to: 'd', label: 'incorporation fear' }, { from: 'c', to: 'r', strong: true }, { from: 'n', to: 'c', dash: true, label: 'carrier of dirt' }, { from: 'h', to: 'c', dash: true }],
          caption: 'The food is the medium: what will be “taken in” by the body. The other’s touch threatens not through dirt but through what he *stands for*.'
        },
        questions: [
          'Why does the admission “his hands did not appear dirty” matter more than the claim of disgust itself?',
          'If we must take things in to survive, what does that suggest about the *politics* of what we refuse to eat/touch/share?'
        ],
        glosses: [
          { q: 'Tierra del Fuego', t: 'Darwin among the Fuegians', b: 'Darwin met Fuegians in 1832–3 on the *Beagle*; he described them in terms of “savage” inferiority and was shocked by their way of life (and by the missionary project of “civilising” the three Fuegians the ship returned). His later scientific account of emotion (1872) used travellers’ reports and questionnaires sent to missionaries and colonial officials. The “universality” of expressions was therefore built from imperial networks.' },
          { q: 'histories of imperialism', t: 'Eating and empire', b: 'Sheller (2003), *Consuming the Caribbean*, shows how sugar, rum and fruit created intimate geographies of consumption between metropole and colony; the “who touches whose food” question belongs to this history. See also Sidney Mintz’s *Sweetness and Power* (1985) and Anne McClintock’s analysis of soap and hygiene in *Imperial Leather* (1995).' },
          { q: 'As William Ian Miller has put it', t: 'Miller’s Anatomy of Disgust', b: 'Miller’s book argues disgust is a moral emotion with a cognitive structure (“a feeling about something”), a powerful role in social hierarchy (the low and the high), and a ambivalence of attraction/repulsion. Ahmed follows Miller on intentionality and hierarchy but resists his tendency to treat disgust’s objects as relatively stable across cultures.', people: ['miller'] }
        ]
      },
      {
        title: 'Disgust and Abjection',
        gist: 'Disgust is directed at objects and depends on contact; the body recoils and forgets the approach. With Kristeva, Ahmed argues that the border itself is transformed into an object — the abject — and that borders need to be threatened to be maintained. Disgust spreads by metonymic contact and resemblance, sticking “dirt” to the native body and maintaining hierarchies of “low” and “high”.',
        moves: [
          { h: 'Rozin & Fallon', p: 'Four elements: facial expression, action (distance), physiology (nausea), feeling (revulsion). Missing: why some things are “offensive” in the first place.' },
          { h: 'Intentionality and contact', p: 'Disgust is about an object; it needs proximity (“close enough to sicken”). The body approaches, recoils, forgets it approached, and finds the object has invaded.' },
          { h: 'Abjection', p: 'Kristeva: the abject threatens from an “exorbitant outside or inside”; the skin gives way. Ahmed: borders are transformed into objects (Lorde’s roach). The “not” is secured by being disgusted.' },
          { h: 'Time lag', p: 'Border objects are disgusting; disgust engenders border objects. The expulsion becomes the “truth” of the reading. Is there a way out of the circle?' },
          { h: 'Contact between objects', p: '“Anything which has had contact with disgusting things itself becomes disgusting” (Tomkins; Miller). Disgust moves metonymically but sticks and clings; resemblance also transmits it (Rozin & Fallon).' },
          { h: 'Darwin again', p: 'The “nakedness” of the native is read as sexualised proximity. “Not dirty” associates the body with dirt, and “dirt as matter out of place” (Douglas) is halted: dirt ↔ native body *sticks*.' },
          { h: 'Power and “below”', p: 'Disgust hierarchises space and bodies: lower body, waste, “lower” peoples. The disgusted position “above” is maintained at the cost of vulnerability: openness to falling below.' }
        ],
        voice: 'It is easy to say disgust is a way of protecting ourselves from what is harmful. But that does not explain why one body’s touch is an offence and another’s is not. What I find in Kristeva is a description of a border that is not a line but an object — something we spit out, something that makes us sick. And what I add is that these border objects get their power from histories of contact and association that are hidden when we say “it is simply disgusting.”',
        context: 'The psychological literature (Rozin, Haidt) treats disgust as a basic emotion with an evolved function and a “law of contagion” (touch transmits essence; Frazer’s *Golden Bough* and Mauss’s “sympathetic magic”). Kristeva’s psychoanalytic analysis comes from Lacanian/Freudian theory of ego-formation (the abject precedes the subject/object split). Ahmed combines these with Douglas’s anthropology of pollution.',
        objection: 'Does Ahmed explain the *specificity* of disgust (as opposed to fear or hate) — what distinguishes disgust’s metonymic contact from fear’s anticipatory logic? The chapters share a structure (stickiness, slide) that may make emotions seem interchangeable. In the Afterword, she insists that each emotion has a different *orientation* (towards/away) rather than a different essence.',
        terms: ['abjection', 'disgust', 'contact', 'metonymy', 'body-out-of-place', 'sticky', 'fetishism', 'surfaces'],
        people: ['kristeva', 'miller', 'rozin', 'tomkins', 'douglas', 'lorde'],
        diagrams: [
          {
            title: 'The disgust loop: borders, objects, recoil', w: 620,
            nodes: [
              { id: 'a', x: 105, y: 85, w: 150, label: 'Body gets close', sub: 'contact, taste, touch', kind: 'b' },
              { id: 'b', x: 310, y: 85, w: 150, label: 'Recoil', sub: 'pulling away', kind: 'a' },
              { id: 'c', x: 515, y: 85, w: 150, label: 'Approach forgotten', sub: 'object seems to invade', kind: 'a' },
              { id: 'd', x: 515, y: 215, w: 160, label: 'Object feels disgusting', sub: 'a border object', kind: 'c' },
              { id: 'e', x: 310, y: 215, w: 160, label: 'Expulsion', sub: 'spit / vomit / name', kind: 'c' },
              { id: 'f', x: 105, y: 215, w: 160, label: 'Expulsion is the “truth” of the reading', kind: 'e' },
              { id: 'g', x: 310, y: 330, w: 420, label: 'Borders must be threatened to be maintained: border objects are disgusting; disgust engenders border objects', kind: 'ghost' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'a', curve: 50, dash: true, label: 'repeats' }],
            caption: 'A circular economy: the circle is “part of the lure of abjection itself”.'
          },
          {
            title: 'How dirt sticks to a body without the body being dirty', w: 620,
            nodes: [
              { id: 'm', x: 110, y: 80, w: 150, label: '“Matter out of place”', sub: 'Douglas: dirt', kind: 'b' },
              { id: 'd', x: 310, y: 80, w: 120, label: 'Dirt', kind: 'a', shape: 'pill' },
              { id: 'n', x: 510, y: 80, w: 140, label: 'The “native body”', kind: 'a' },
              { id: 's', x: 310, y: 195, w: 330, label: 'The chain of substitution stops: dirt and native body are *stuck* together (“not dirty” still evokes dirt)', kind: 'c' },
              { id: 'e', x: 310, y: 310, w: 350, label: 'Disgust feels like a response to an objective quality, but it is the effect of a metonymic contact between signs', kind: 'd' }
            ],
            edges: [{ from: 'm', to: 'd', dash: true, label: 'deferred' }, { from: 'd', to: 'n', label: 'sticks', strong: true }, { from: 'd', to: 's' }, { from: 'n', to: 's' }, { from: 's', to: 'e' }],
            caption: 'Deferral — dirt itself “stands for” something else — is arrested by adhesion.'
          }
        ],
        questions: [
          'Kristeva says the abject threatens the “I”; Ahmed says the border is made into an object. What difference does the latter make for politics?',
          'Think about the language of “lower” and “higher” (lowly jobs, low culture, below the belt). How does “below” get attached to bodies?',
          'Does the double movement (towards, away) ring true to you? Think of a time you recoiled from something you had seen up close.'
        ],
        glosses: [
          { q: 'Paul Rozin and April E. Fallon identify four key elements of the disgust experience', t: 'The psychology of disgust', b: 'Rozin & Fallon (1987) propose that disgust is *revulsion at the prospect of oral incorporation of an offensive object*; its elicitors — originally food, then animals, bodily products, sex, hygiene, death — expand through *cultural* learning. The “law of contagion” (Rozin & Nemeroff) and “law of similarity” are explained as forms of sympathetic magic. Ahmed uses the “contagion” and “resemblance” findings but gives them a historical-political reading.' },
          { q: 'Powers of Horror', t: 'Kristeva’s abjection', b: 'Julia Kristeva’s *Powers of Horror: An Essay on Abjection* (1980) treats the abject (corpse, waste, the skin on milk) as that which “disturbs identity, system, order”; it is both within and without. Abjection precedes the subject/object distinction: the infant must expel the maternal body to become a subject. Feminists (Barbara Creed, Elizabeth Grosz, Imogen Tyler) have developed the theory for gender and race; Ahmed notes this in note 1.', people: ['kristeva'], terms: ['abjection'] },
          { q: 'it is the border that is transformed into an object', t: 'Border objects', b: 'Kristeva: “the abject is the border of subjectivity”, e.g., the skin on milk, which is the boundary between the self and the maternal food. Ahmed pairs this with Lorde’s “roach” (Chapter 2): the border between two bodies is made into an object that can be expelled. The idea resonates with Bruno Latour’s “boundary objects” but is distinct.' },
          { q: 'maintenance-through-transgression', t: 'Transgression as maintenance', b: 'A Douglas–Bataille–Stallybrass & White idea (*The Politics and Poetics of Transgression*, 1986): borders are stabilised by rituals of crossing and polluting. Ahmed makes it affective: disgust *is* the felt experience of the threatened border, and thus a mechanism of its maintenance.' },
          { q: 'Disgust hence operates as a contact zone', t: 'Disgust as contact zone', b: 'A callback to Pratt’s “contact zone” in the Introduction: disgust is where bodies and objects meet in unequal relations. It also resonates with Tomkins’s claim that disgust is an “auxiliary” affect that works on drives (taste/smell).' },
          { q: 'matter out of place', t: 'Douglas on dirt', b: 'In *Purity and Danger* (1966) Douglas argues dirt is “matter out of place” — a relative, system-dependent concept. Pollution beliefs police social boundaries. Ahmed’s twist: the “place” itself is produced through disgust; the sticking of dirt to a body *stops* the deferral that Douglas’s relativism would imply.', people: ['douglas'] },
          { q: 'Lower regions of the body', t: 'The high/low and the grotesque', b: 'Mikhail Bakhtin (*Rabelais and His World*) and Stallybrass & White analyse the cultural hierarchy of high/low (head/belly; elite/popular) as a symbolic system; Miller’s “disgust and the low” gives a moral psychology. Ahmed’s point: “aboveness” is not a given; it is achieved and vulnerable.' }
        ]
      },
      {
        title: 'On Stickiness',
        gist: 'Stickiness is the book’s signature concept. Ahmed argues that objects and signs are not inherently sticky: stickiness is an effect of histories of contact — the “doing” between objects — and that signs, like surfaces, become sticky through repetition and concealed association. Stuck signs bind (cohesion) and block (halting movement); bodies can become sticky fetish objects.',
        moves: [
          { h: 'Sticky ≠ disgusting', p: 'Glue is sticky but not disgusting; slime is disgusting. Stickiness becomes disgusting only when it threatens to stick *to us*.' },
          { h: 'Sartre’s slime', p: 'Slime is “a fluidity which holds me”: neither solid nor liquid. But the quality is figured by analogy (leech): it is displaced along a chain of signification.' },
          { h: 'Grosz: not a property', p: 'Fear of absorption into something boundaryless depends on an order that makes boundaries matter. Stickiness is an *effect of surfacing* and histories of contact.' },
          { h: 'Literal / metaphoric', p: 'Not a clean divide: sticky surfaces and sticky signs are both relations of “with-ness”: stuck by, stuck in. Stickiness *binds* and *blocks*.' },
          { h: 'How surfaces get sticky', p: 'By contact with other sticky things; stickiness records where an object has been and calls its integrity into question. To stick to something sticky is to become sticky.' },
          { h: 'How signs get sticky', p: 'Through repetition: a slur’s insult becomes intrinsic; it evokes unspoken words (immigrant, outsider, dirty). Concealed association is what allows signs to accumulate affective value.' },
          { h: 'Sticky bodies', p: 'Bodies that are objects of disgust become blockages that clog the economy; they become fetish objects, as if their presence makes “us sick”.' }
        ],
        voice: 'I had to find a way of saying what I meant by “what sticks?” and it turned out that the best way was to ask what stickiness is. It is not a quality that things have; it is what happens when one thing touches another and carries it forward. A word is sticky when it brings its history with it, even if nobody says that history. And a body is sticky when the signs have settled onto it — so that when a person walks into a room the room has already been told what they are.',
        context: 'Ahmed reworks Sartre’s phenomenology of “the slimy” (*Being and Nothingness*, Part IV) and Grosz’s feminist critique of fear of “fluid”. Her notion of sticky signs adds to Butler’s and Derrida’s accounts of iterability: signs can be cut from contexts; yet they resist, because their histories adhere. It is also a rebuttal to “free-floating signifier” models popular in poststructuralism.',
        objection: 'Is “stickiness” explanatory? A semiotician might say it names the fact of semantic persistence rather than explaining it. And “sticky” seems to apply to everything that persists; how do we falsify? Another critique: the metaphor risks naturalising the very tenacity it wants to historicise (compare critique by Leys 2011; Wetherell 2012).',
        terms: ['sticky', 'sign', 'metonymy', 'fetishism', 'affective-value', 'surfaces', 'disgust'],
        people: ['sartre', 'grosz', 'miller'],
        diagram: {
          title: 'Two sticky things: a surface and a sign', w: 620,
          zones: [{ x: 10, y: 38, w: 295, h: 285, label: 'Sticky surface' }, { x: 320, y: 38, w: 295, h: 285, label: 'Sticky sign' }],
          nodes: [
            { id: 'a1', x: 158, y: 105, w: 220, label: 'Touches other sticky things', kind: 'b' }, { id: 'a2', x: 158, y: 180, w: 220, label: 'Picks up elements; re-surfaces', kind: 'a' }, { id: 'a3', x: 158, y: 255, w: 220, label: 'Records where it has travelled', sub: 'integrity as an object in question', kind: 'c' },
            { id: 'b1', x: 468, y: 105, w: 220, label: 'Repeated use in a certain way', kind: 'b' }, { id: 'b2', x: 468, y: 180, w: 220, label: 'Association with other words, unspoken', sub: 'immigrant · outsider · dirty', kind: 'a' }, { id: 'b3', x: 468, y: 255, w: 220, label: 'Accumulates affective value; binds and blocks', kind: 'c' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
          caption: 'Not different in kind: both are effects of histories of contact. Stickiness is “about what objects do to other objects”.'
        },
        questions: [
          'Choose a politically loaded word and list what unspoken words it “sticks to”. Where did the associations come from?',
          'Ahmed says stickiness both binds and blocks. How might this double function help explain why some stereotypes are both clingy *and* resistant to change?',
          'Is the figure of slime helpful or a distraction? What does Grosz’s critique of Sartre add?'
        ],
        glosses: [
          { q: 'Horrifying things stick, like glue, like slime', t: 'Miller on sticking', b: 'Miller’s *Anatomy of Disgust* argues that horror and disgust are marked by clinging: the stickiness of blood, slime, mucus. Ahmed’s remark about glue shows a hidden premise: what threatens is that something might stick *to us*. Compare Mary Douglas on the anomalous category “viscous”.' },
          { q: 'the snare of the slimy', t: 'Sartre’s slime', b: 'In *Being and Nothingness* (Part IV, ch. 2) Sartre argues that qualities reveal modes of being; slime reveals a threat to being-for-itself (a “fluidity which holds me”). Feminist critics (Grosz; Irigaray; Beauvoir) note the gendered dimension: slime = female, absorbing. Ahmed’s move: note Sartre’s *analogy* — the leech — as proof that slime’s disgust is figural, not a property.', people: ['sartre', 'grosz'] },
          { q: 'fear of being absorbed into something which has no boundaries of its own', t: 'Grosz on Sartre', b: 'In *Volatile Bodies* (1994) Grosz argues that the fear of fluidity in Sartre expresses a masculine phantasy of bodily boundaries; the “fluid” is disgusting because the self’s boundaries are so insecure. The feminist point to take: the boundary is not given by nature; its maintenance requires a continual effort of expulsion.', people: ['grosz'] },
          { q: 'Stickiness helps us to associate ‘blockages’ with ‘binding’', t: 'Cohesion and blockage', b: 'This is the dual function Ahmed will use for the rest of the book: *stick together* (cohesion, community) and *stuck* (impasse, immobility). It matters for queer and feminist politics (Chapters 7–8) where “stuckness” and “getting unstuck” are modes of attachment and transformation.', terms: ['attachment'] }
        ]
      },
      {
        title: 'Speaking Disgust',
        gist: 'The performative section: “That’s disgusting!” generates an object, a subject, and a community of witnesses. Reading a post-9/11 web posting, Ahmed shows how disgust is transferred from an event to “Middle-Eastern terrorists” and how expulsion never ends — and how disgust can be turned on disgust, though dissent is met by renewed disgust.',
        moves: [
          { h: 'Performativity', p: 'Butler: signifiers generate what they name via reiteration; iterability means conventions can be repeated with a difference. Disgust’s temporality (lagging and generative) mirrors this.' },
          { h: 'Stickiness extends iterability', p: 'Signs may be “cut off” (Derrida) but resist because of histories of adhesion; historicity is adhesion as well as repetition.' },
          { h: '“That’s disgusting!”', p: 'The speech act transfers the stickiness of the word to the object; it is also vomiting — expelling what has already been incorporated; the disgusted subject is itself generated.' },
          { h: 'Witnesses and community', p: 'The speech act calls others to witness our pulling away (Probyn). It generates a community bound by shared condemnation. The Internet allows witnesses without co-presence.' },
          { h: 'The 9/11 images', p: 'Repeated images invade; compulsion to repeat (Bociurkiw). Disgust names the “getting-in-ness” of the event.' },
          { h: 'The posting', p: '“Disgusting events” saturate; then the terrorists become “subhuman beasts… vermin”, expelled; “Middle Eastern terrorists” sticks signs together; “we” becomes “rational people”.' },
          { h: 'Expulsion is endless', p: 'Because others “could be” terrorists, expulsion is perpetually re-justified: “we must be sick, to exclude the sick, again and again.”' },
          { h: 'Disgust at disgust', p: 'Some postings find the war disgusting; Sontag is met with disgust. Adhesion is not cohesion; dissent is implicated in what it dissents from; we need time to digest.' }
        ],
        voice: 'When we say “that’s disgusting” we think we are reporting a feeling. But the sentence does more: it makes the thing disgusting, it makes me someone who is disgusted, and it asks you to stand with me. I do not say that this is false. I say it is an act, and acts have histories. After 9/11 the word was everywhere; but what it named slid from the event to the people said to have caused it, and from them to others who might look like them. So the question I want to ask is not only what sticks but what we are willing to stick *to*.',
        context: 'The performativity theory is Austin (*How to Do Things with Words*), Derrida (“Signature Event Context”), Butler (*Gender Trouble*, *Bodies That Matter*, *Excitable Speech*) and Lacan on the chain of signifiers. The 9/11 case draws on a corpus of web postings and on well-known public controversies (Sontag; Falwell in Ch. 3). The “witness” thesis comes from Probyn’s *Carnal Appetites*.',
        objection: 'A sceptic will ask: is the one web posting representative? Ahmed says she chose it because it “builds up a complex narrative around the word ‘disgust’”. Another worry is that it moves too quickly from a text to a community: a post does not itself create a community. Ahmed’s model is that the *address* presumes a community — a claim better supported by reception studies than by the text alone.',
        terms: ['performativity', 'speech-act', 'disgust', 'sticky', 'fetishism', 'racialisation', 'crisis'],
        people: ['butler', 'derrida', 'probyn', 'sontag', 'lacan'],
        diagrams: [
          {
            title: 'What “That’s disgusting!” does', w: 620,
            nodes: [
              { id: 's', x: 310, y: 60, w: 220, label: '“That’s disgusting!”', sub: 'speech act (reiterates past conventions)', kind: 'a' },
              { id: 'o', x: 100, y: 190, w: 160, label: 'An object', sub: 'the event / the others', kind: 'c' },
              { id: 'u', x: 310, y: 190, w: 160, label: 'A subject', sub: 'the disgusted, standing apart', kind: 'c' },
              { id: 'c', x: 520, y: 190, w: 170, label: 'A community of witnesses', sub: '“the people… the survivors… rational people”', kind: 'c' },
              { id: 'e', x: 310, y: 320, w: 450, label: 'Expulsion of bodies stuck to the sign (“Middle-Eastern terrorists”) — never finished: others “could be”', kind: 'd' }
            ],
            edges: [{ from: 's', to: 'o' }, { from: 's', to: 'u' }, { from: 's', to: 'c' }, { from: 'o', to: 'e', strong: true }, { from: 'c', to: 'e', strong: true }],
            caption: 'The speech act is performative because it brings its three effects into being together.'
          },
          {
            title: 'Disgust turned against disgust (and met by more disgust)', w: 620,
            nodes: [
              { id: 'a', x: 105, y: 80, w: 150, label: '“The attacks are disgusting”', kind: 'a' },
              { id: 'b', x: 310, y: 80, w: 160, label: 'Disgust sticks to “them”', sub: 'community forms', kind: 'a' },
              { id: 'c', x: 515, y: 80, w: 150, label: '“The war is disgusting”', sub: 'pulling away from the pulling away', kind: 'c' },
              { id: 'd', x: 515, y: 215, w: 150, label: 'Dissenters met by disgust', sub: 'Sontag: “disgusting”', kind: 'a' },
              { id: 'e', x: 310, y: 215, w: 170, label: 'The sign is re-stuck', sub: 'to a new object', kind: 'a' },
              { id: 'f', x: 310, y: 330, w: 420, label: 'Adhesion is not always cohesion: “How can we stick to our refusal of the terms of allegiance?”', kind: 'e' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c', dash: true }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'b', curve: -50, dash: true }, { from: 'e', to: 'f' }],
            caption: 'Dissent cannot stand outside the economy it contests — but the possibility of unsticking is also the possibility of hope.'
          }
        ],
        questions: [
          'Choose a viral post (or a speech) in which a word of disgust/outrage is used. Who is the implied audience? What does it ask them to do?',
          'Is it plausible that disgust “does not allow one the time to digest”? What would a slower, “digestive” critique look like?',
          'Ahmed says dissent “cannot be exterior to its object.” Is that a counsel of despair or realism? Where do you see people “sticking to their refusal”?'
        ],
        glosses: [
          { q: 'power of discourse to produce effects through reiteration', t: 'Performativity (Butler)', b: 'Butler’s definition (*Bodies That Matter*, 1993: 20) rewrites Austin: performative utterances do not only *do* things in isolated acts; they work through *citation* of norms, which gives them authority and sediments the past. Ahmed’s focus is on what the repetitions *carry* — affective histories — and how that makes some performatives “stick”.', people: ['butler'], terms: ['performativity'] },
          { q: 'can be ‘cut off’ from its contexts of utterance', t: 'Derrida on iterability', b: 'In “Signature Event Context” (1972; trans. in *Limited Inc*, 1988) Derrida argues that the possibility of repetition (iterability) means any sign can be lifted out of its context — and hence there is no sovereign context. Ahmed’s “sticky” adds that cutting is *resisted* by accumulated associations, a point Derrida’s followers (Butler; Spivak) also make.', people: ['derrida'] },
          { q: 'Carnal Appetites', t: 'Probyn on witnessing disgust', b: 'Elspeth Probyn’s *Carnal Appetites: FoodSexIdentities* (2000) analyses eating, shame and disgust as sites where identity is performed in front of others. Her line (“we call upon others to witness our pulling away”) is Ahmed’s key to the social structure of disgust: a speech act of disgust is also an *invitation*.', people: ['probyn'] },
          { q: 'compulsion to repeat that characterizes post-traumatic stress', t: 'Repetition compulsion', b: 'Freud’s concept (*Beyond the Pleasure Principle*, 1920), also behind fort-da, is here applied to mediated trauma: the repeated image as an attempt to master the unassimilated. Compare Cathy Caruth’s *Unclaimed Experience* (1996) and critiques of “trauma culture”.' },
          { q: 'to adhere is not always to cohere', t: 'Adhesion and cohesion', b: 'A pun on sticking: *adhere* (stick to) vs *cohere* (stick together). Disgust can adhere to an object without producing a cohesive collective, since different people may attach the sign to different things. This sets up the “disgust at disgust” loop and anticipates Chapter 6’s multicultural love.' },
          { q: 'Susan Sontag’s article in the New Yorker', t: 'Sontag and the backlash', b: 'Sontag’s short piece (24 September 2001) criticised the rhetoric that the attacks were “cowardly” and the lack of political discussion; it drew fierce condemnation (including from commentators who called it “disgusting”). The episode has become a touchstone for debates about dissent after 9/11 and about what can be said in times of mourning (see Butler’s *Precarious Life*, 2004).', people: ['sontag'] },
          { q: 'critique requires more time for digestion', t: 'Slow critique', b: 'A claim about temporality: disgust is fast and recoiling; critique is slow and approaching. Compare Berlant’s call for “lateral agency” and Sedgwick’s “reparative reading”; also the modern slogan “slow scholarship”. It is a good prompt for discussion of social-media dynamics.' },
          { q: 'How can we stick to our refusal of the terms of allegiance?', t: 'A hopeful question', b: 'Ahmed’s question turns stickiness into a *political virtue*: attachments to refusal. It anticipates Chapter 8, where she reclaims “feminist attachments” (anger, wonder, hope) and later *Willful Subjects* (2014), where “willfulness” is a stubborn stickiness to the wrong path.', terms: ['attachment'] }
        ]
      }
    ]
  });
})();
