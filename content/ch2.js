/* Chapter 2: The Organisation of Hate — authored guide. */
(function () {
  CP.unit('ch2', {
    tagline: 'Hate is not in the hater or the hated. It circulates between signs, sticks figures together, and in doing so shapes the bodies of “us” and “them”.',
    claim: 'Hate does not reside in a particular subject or object; it works through an **affective economy** — circulating between signs and figures (“bogus”, “burglar”, “bogey man”) which accumulate emotional value the more they circulate. This circulation aligns some bodies with the nation and against others, producing **the ordinary subject as the injured party** and **the other as the cause of injury**. It also *does something to* the bodies who are hated — which is why “hate crime” is both useful and limited as a legal category.',
    glance: [
      'Hate groups call themselves organisations of love: “Because we love, we hate”. The reversal is not hypocrisy but the structure of the emotion.',
      '“Affective economies” (psychoanalysis + Marx): affect isn’t a thing in objects; it is produced and accumulated as signs circulate.',
      'Hate is not the opposite of love; it is intimate, ambivalent, and builds the “I” and “we” by aligning likeness and unlikeness.',
      'Audre Lorde’s subway encounter shows how hate re-forms space and sticks to a body; “hate crime” then asks whose experience of hate counts.'
    ],
    why: 'You will meet this chapter’s object every news cycle: “floods”, “swarms”, “fake” refugees, “illegals”, the “real victims” of political correctness. Ahmed gives you tools to see that these are not just insults; they are *circuits* that make a collective body feel threatened and make others into threats. It also explains why hate is so hard to confront by simply proving the stereotype wrong: the figure never rested on facts, only on circulation.',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'This chapter quotes white-supremacist propaganda and discusses racial slurs in order to analyse how they work. The guide tries not to reproduce slurs; the text itself does where Ahmed does.' } }],
    argument: {
      steps: [
        { h: 'Hate presents itself as love', p: 'The Aryan Nations’ site makes the white nation the object of love and the hated others the cause of its injury. The “ordinary” white subject is produced as victim — a fantasy that rewrites history (“built this land”).' },
        { h: 'Hate slides between figures', p: 'Mixed couples, child-molesters, rapists, “aliens”: a *metonymic slide* makes them alike through their unlikeness from “us” and turns them into a common threat.' },
        { h: 'Affective economy', p: 'Drawing on Freud (displacement, unconscious emotion) and Marx (circulation, surplus value), Ahmed argues affect accumulates as signs circulate. The subject is one nodal point, not the origin.' },
        { h: 'The case: asylum speeches', p: 'Hague and Blunkett’s “flood”/“swamped” and the Tony Martin affair stick asylum, burglary and defence together; the “bogus” figure is detached from any body so any arriving body may be bogus.' },
        { h: 'Hate is intimate', p: 'Against projection-only models: hate is an attachment, ambivalent, requires the object’s conservation; it aligns an “I” and a “we” through loved and hated likenesses; evidence for hate (“they are unlike us”) is produced by hate.' },
        { h: 'Lorde’s train', p: 'The hate encounter reorganises bodies and space; the child’s gaze is pulled down; she becomes the “roach”; the other is sealed in their skin while the hater moves on.' },
        { h: 'Hate crime', p: 'Legally useful because it names hate as attachment and as structural violence; limited because “because” presumes group identity precedes the crime and psychologises power. We must listen to the affects and effects on the hated, without assuming them.' }
      ]
    },
    diagram: {
      title: 'Chapter 2: how hate is “organised”', w: 620,
      nodes: [
        { id: 'i', x: 95, y: 80, w: 145, label: 'Injury', sub: 'felt, then read: “you hurt me”', kind: 'b' },
        { id: 'r', x: 285, y: 80, w: 145, label: 'Reading others as cause', sub: 'figures: bogus · burglar · alien', kind: 'a' },
        { id: 'e', x: 475, y: 80, w: 150, label: 'Affective economy', sub: 'signs circulate, affect accumulates', kind: 'c' },
        { id: 'l', x: 95, y: 210, w: 145, label: '“Because we love, we hate”', sub: 'the nation as love-object', kind: 'e' },
        { id: 'a', x: 285, y: 210, w: 145, label: 'Alignment', sub: 'I/we with, against other others', kind: 'e' },
        { id: 'b', x: 475, y: 210, w: 150, label: 'Surfaces', sub: 'ordinary subject = victim; other = threat', kind: 'e' },
        { id: 'h', x: 285, y: 330, w: 270, label: 'Effects on the hated: bodies sealed in a figure — and the law’s “hate crime”', kind: 'd' }
      ],
      edges: [{ from: 'i', to: 'r' }, { from: 'r', to: 'e' }, { from: 'e', to: 'b', curve: 30 }, { from: 'b', to: 'a' }, { from: 'a', to: 'l' }, { from: 'l', to: 'i', curve: 40, dash: true, label: 'defends' }, { from: 'a', to: 'h', strong: true }],
      caption: 'The loop at the left: love of the nation is defended by hate; hate in turn produces the injury that justifies it.'
    },
    context: [
      'The chapter is the book’s theoretical hinge: it introduces **affective economies** and the sticky sign (picked up in Chapters 3–4). It brings together **psychoanalysis** (Freud on unconscious emotion; Klein/Laplanche on projection; Lacan on the subject), **Marx** (circulation, surplus value) and **critical race theory** (Lorde, Fanon, Matsuda, Delgado-style hate-speech scholarship) in dialogue with **psychology of prejudice** (Allport) and **legal theory** (hate crime; Butler’s *Excitable Speech*).',
      'Politically the case is early-2000s UK asylum discourse: William Hague’s speeches as Conservative leader (2000), Home Secretary David Blunkett’s “swamped” remark (2002, cited in the text as 2003), and the Tony Martin case (shooting 1999, conviction 2000, released 2003). The “bogus asylum seeker” is the key figure.'
    ],
    terms: ['affective-economies', 'sticky', 'sign', 'circulation', 'affective-value', 'metonymy', 'displacement', 'projection', 'ambivalence', 'identification', 'narcissism', 'hate', 'hate-crime', 'racialisation', 'whiteness', 'fantasy', 'body-out-of-place'],
    people: ['freud', 'marx', 'lacan', 'klein', 'allport', 'lorde', 'fanon', 'matsuda', 'butler', 'brown', 'berlant', 'althusser', 'derrida'],
    sources: [
      { who: 'Sigmund Freud', work: '“The Unconscious” (1915); Beyond the Pleasure Principle (1920); Group Psychology (1921)', role: 'Unconscious emotion is displaced from its original idea; fort-da shows hostility intertwined with love; identification forms the ego.', use: 'Provides the idea that emotion moves along chains of association, and that love and hate are intimate.' },
      { who: 'Karl Marx', work: 'Capital, vol. 1 (1867)', role: 'Circulation (M–C–M′) creates surplus value; capital as “value in motion”.', use: 'An *analogy*: affect accumulates as signs circulate. Ahmed notes the analogy’s limits (no use/exchange value distinction).' },
      { who: 'Gordon Allport', work: 'The Nature of Prejudice (1954)', role: 'Hate is preceded by love/frustrated need.', use: 'Evidence from psychology that hate and love are tied.' },
      { who: 'Ian Suttie; David Holbrook; Christopher Bollas; Mikkel Borch-Jacobsen', work: 'Origins of Love and Hate; The Masks of Hate; “loving hate”; ‘hate wants to touch’', role: 'Hate as demand for love; hate needs the object; the destroyed object must be conserved.', use: 'To argue that hate is an *attachment* and requires its object.' },
      { who: 'Audre Lorde', work: '“Eye to Eye”, Sister Outsider (1984)', role: 'First-person narrative of a white woman’s hate in a subway.', use: 'Close-read to show how hate re-forms bodies and space — and then re-read to ask about the hated.' },
      { who: 'Frantz Fanon', work: 'Black Skin, White Masks (1952)', role: 'The black body is “sealed into that crushing object-hood”.', use: 'Names what hate does to the hated body; will be central to Chapter 3.' },
      { who: 'Mari Matsuda', work: 'Words That Wound (1993)', role: 'Hate speech produces physiological and emotional harm; “spirit murder”.', use: 'To keep the *affect* of hate in view against Butler’s indeterminacy thesis.' },
      { who: 'Judith Butler', work: 'Excitable Speech (1997)', role: 'The effects of hate speech cannot be fixed in advance; signs can be resignified.', use: 'Ahmed agrees hate doesn’t reside in a sign — but asks why some signs keep sticking.' },
      { who: 'Rosga; Goldberg; Jacobs & Potter; Eisenstein', work: 'Hate crime critiques', role: 'Debates over whether hate crime psychologises racism.', use: 'To argue hate crime can be useful while exposing the logic of “because”.' }
    ],
    conversation: [
      { h: 'Affective economies in the wild', p: 'The concept has been widely applied: to Islamophobia and the “War on Terror”, to nationalism and borders (“hostile environment”), to anti-immigrant populism, and to digital media where outrage and hate circulate and accumulate value as engagement. The “flood/swarm/wave” lexicon around migration remains a standard case.' },
      { h: 'Does “circulation” lose the subject?', p: 'Margaret Wetherell (*Affect and Emotion*, 2012) and others worry that Ahmed’s model risks making emotion a free-floating semiotic matter, losing the situated practices through which people actually do hate. Ahmed’s reply (Afterword) is that her aim is to track how objects become “sticky”, not to produce a micro-sociology of feeling.' },
      { h: 'Hate crime and hate speech law', p: 'Debates continue between those who defend hate crime/speech laws as protecting dignity (Waldron, *The Harm in Hate Speech*, 2012; Matsuda, Delgado) and those who fear over-criminalisation or a psychologisation of racism (Butler; Goldberg; Rosga). Ahmed’s intermediate position — useful, because it makes hate visible; limited, because it treats hate as a discrete act — is still a good map of the dispute.' },
      { h: 'The “ordinary” and extremism', p: 'Research on right-wing extremism and “the mainstreaming of the far right” echoes the claim that hate is part of the production of the ordinary rather than a pathology of extremists (e.g., Cas Mudde on radical-right populism; studies of “banal nationalism” after Billig).' },
      { h: 'Is “hate” the right word?', p: 'Some argue “hate” individualises structural racism (Ahmed notes this herself); recent scholarship on “racial affect” (e.g., Anne Anlin Cheng, Sianne Ngai on “ugly feelings”) explores less overtly “hateful” affects such as irritation, anxiety, envy.' }
    ],
    debates: ['affective-turn', 'hate-speech-law', 'populism-emotion', 'digital-affect'],
    questions: [
      'Ahmed says the “ordinary” white subject is a fantasy produced through hate. Where in current politics do you see appeals to “ordinary people” as victims?',
      'Choose a media phrase that circulates (flood, wave, crisis, invasion, fraud, scrounger). Trace how the same word attaches to different figures over time. What “value” has it accumulated?',
      'Does the argument that hate is *intimate* — that it needs and conserves its object — change how you think about “just ignoring” hate groups?',
      'Ahmed corrects her own earlier reading of Lorde, saying she “failed to ask” about the hated. What does that self-correction teach about reading texts of violence?',
      'Should the law treat hate as an aggravating factor? What would count as a “good” response in light of Ahmed’s “listening to the affective life of injustice”?'
    ],
    bridges: {
      back: 'Chapter 1’s “it hurts → you hurt me → you are hurtful” is now generalised: injury is read onto others, and the reading circulates between signs rather than staying in a face-to-face encounter.',
      forward: 'Chapter 3 asks what happens when the threat is anticipated rather than felt: *fear* works through the possibility that an object may pass us by, and is distributed unevenly across bodies and spaces.'
    },
    sections: [
      {
        title: 'Opening: “Because We Love, We Hate”',
        gist: 'The Aryan Nations’ website says hate is not what motivates it; love is. Ahmed reads the passage to show how love of the nation is made through hate of figures who are said to threaten it — and how the “ordinary” white subject is produced as a victim.',
        moves: [
          { h: 'The reversal', p: 'Declaring love rather than hate does justificatory work: injury becomes the origin of hate, and hate the *expression* of love.' },
          { h: 'Threat of replacement', p: 'The imagined other doesn’t just take things (jobs, wealth) but takes the *place* of the subject; migrants’ labour is erased in the fantasy that whites “built this land”.' },
          { h: 'Guests become hosts', p: 'White subjects are hosts (“our shores”) *and* victims. History is rewritten.' },
          { h: 'Hate sticks bodies together', p: 'The capitalised “White” aligns imagined subjects; shared visceral responses (“fear and loathing”, “repulsion”, “rage”) are said to come from love.' },
          { h: 'The ordinary as fantasy', p: 'The ordinary is produced as endangered — the “real victim”. Hate animates it.' },
          { h: 'Metonymic slide', p: 'Mixed-race couple → rapist → molester → alien: resemblance generated by shared unlikeness from “us”. Hate is “economic” and cannot be found in one figure.' }
        ],
        voice: 'I am not interested in saying hate groups lie. I am interested in the form: the story is told as one of love and injury, so that hating looks like defending. If you read it as a set of figures that are made alike by being unlike “us”, you see that the text produces a threat out of language itself. And you also see that its “ordinary” white subject — the housewife, the farmer, the workingman — only exists in the story, as someone always about to be hurt.',
        context: 'Ahmed’s account of whiteness as an orientation and of “hate groups” as organisations of love draws on Black and critical race scholarship, but also on psychoanalytic ideas of *projection* and on studies of right-wing rhetoric. “Metonymy” is the rhetorical term for substitution through association; its role in racial discourse is central to Fanon, Stuart Hall, and Homi Bhabha’s analysis of the stereotype.',
        objection: 'Is it wise to treat a neo-Nazi text as representative? Ahmed says the narrative is “far from extraordinary” and “reveals the production of the ordinary”. The risk is a slide from fascist rhetoric to all anti-immigration politics; the strength is that Chapter 2’s second and third sections move onto mainstream speeches, where the structure recurs.',
        terms: ['hate', 'metonymy', 'whiteness', 'fantasy', 'nation'],
        people: ['bhabha', 'fanon'],
        diagram: {
          title: 'The metonymic slide in the Aryan Nations text', w: 600,
          nodes: [
            { id: 'c', x: 300, y: 165, w: 170, label: 'The white nation', sub: 'the loved object, “under threat”', kind: 'e', shape: 'ellipse' },
            { id: 'm', x: 90, y: 70, w: 140, label: 'Mixed couple', kind: 'a' }, { id: 'r', x: 300, y: 55, w: 120, label: 'Rapist', kind: 'a' }, { id: 'p', x: 510, y: 70, w: 140, label: 'Child-molester', kind: 'a' },
            { id: 'a', x: 90, y: 265, w: 140, label: 'Aliens / foreigners', kind: 'a' }, { id: 'g', x: 510, y: 265, w: 140, label: 'Corrupt courts, government', kind: 'a' }
          ],
          edges: [
            { from: 'm', to: 'r', dash: true, noarrow: true }, { from: 'r', to: 'p', dash: true, noarrow: true }, { from: 'a', to: 'm', dash: true, noarrow: true }, { from: 'g', to: 'p', dash: true, noarrow: true }, { from: 'a', to: 'g', dash: true, noarrow: true },
            { from: 'm', to: 'c', label: 'threat', strong: true }, { from: 'r', to: 'c', strong: true }, { from: 'p', to: 'c', strong: true }, { from: 'a', to: 'c', strong: true }, { from: 'g', to: 'c', strong: true }
          ],
          caption: 'Dashed lines: resemblance generated by shared “unlikeness”. Solid red: each figure is read as an injury to the loved object. The figures are different bodies but one *common threat*.'
        },
        questions: [
          'Why do hate groups need to *deny* hate? What would be lost if the text said, simply, “we hate”?',
          'Find a current example of the “you are the real victim” structure — and note which bodies are presented as the ones to be protected.'
        ],
        glosses: [
          { q: 'capitalisation of the signifier', t: '“White” as a signifier', b: 'In semiotics, a **signifier** is the material form of a sign (a word), as opposed to the **signified**. Capitalising “White” is a typographic act that turns a descriptive term into an identity-name. Debates on whether to capitalise “Black”/“White” in journalism (2020 style-guide changes) show how typography still does political work.' },
          { q: 'passionate attachment', t: 'Butler’s phrase', b: 'From *The Psychic Life of Power* (1997): subjects form “passionate attachments” to those who subject them because they are conditions of becoming a subject. Ahmed’s “negative attachments” (hate) are redefined as positive attachments to the loved nation — the *attachment structure* is the same.', people: ['butler'], terms: ['attachment'] },
          { q: 'production of the ordinary', t: 'The ordinary as an achievement', b: 'Compare Lauren Berlant’s “national sentimentality” and the “intimate public” where the “ordinary” American is imagined through injury; also Raymond Williams’s “Culture is ordinary” — Ahmed reverses the honorific: the ordinary is *made* through exclusion. See Chapter 8 where “the ordinary” returns as the place of feminist attention.', people: ['berlant'] },
          { q: 'metonymic slide', t: 'Metonymy as a social mechanism', b: 'Roman Jakobson distinguished metaphor (similarity) from metonymy (contiguity). In Freud’s dream-work, *displacement* (metonymy) moves psychic intensity from one image to another. Ahmed’s “sliding” is a metonymic mechanism that produces *resemblance* (“mixed marriage ~ rape”) from adjacency in a text. Stuart Hall’s “The Spectacle of the ‘Other’” analyses the same operation in racial stereotyping.', terms: ['metonymy', 'displacement'] }
        ]
      },
      {
        title: 'Affective Economies',
        gist: 'Hate operates unconsciously through displacement: it slides sideways between signs and backwards into history. Ahmed borrows from Freud and Marx to claim that affect is not located in sign or subject but accumulates as signs circulate. The asylum speeches of Hague and Blunkett show how “bogus”, “burglar” and “flood” stick together into a figure that can be anyone, anywhere.',
        moves: [
          { h: 'Unconscious emotion', p: 'Freud: what is repressed is not the feeling but the idea it was attached to. Feelings move across signification (“rippling”): sideways (sticky associations) and backwards/forwards (history).' },
          { h: 'Economy', p: 'Following Marx’s M–C–M′, affect accumulates as an effect of circulation: “the more signs circulate, the more affective they become.” The analogy has limits and Ahmed says so.' },
          { h: 'A different relation to psychoanalysis', p: 'The economy is psychic *and* social and material. The subject is “one nodal point”, not origin or destination of affect. The unconscious is “the failure of presence” that constitutes the relationality of subjects, objects and signs.' },
          { h: 'The asylum speeches', p: '“Flood”, “swamped”, “overwhelmed” (Hague; Blunkett) evoke anxiety about being overwhelmed. Genuine versus bogus asylum seekers: the nation’s hospitality is defined by the figure it hates.' },
          { h: 'The undetectable bogus', p: 'The “bogey man” could be anyone; so every incoming body may be bogus, in advance of arrival. Hate accumulates because the figure has no fixed referent.' },
          { h: 'Sticking speeches together', p: 'Hague’s sentence on the law’s concern for criminals’ rights, uttered alongside the Tony Martin sentence, sticks asylum to burglary: asylum seeker = burglar; nation = Martin = victim; the nation becomes “the shell”.' }
        ],
        voice: 'I borrow from economic theory because I want to say that affect is not an inner substance. In the circulation of words and figures, the figures become heavier. Each time a speech repeats “flood” or “bogus”, it adds a little to the figure’s weight, until the weight seems to belong to the figure itself — to the bodies of those who are read as bogus. That is why hate can feel like a response to what others *are*: it is the effect of a history of circulation that is concealed.',
        context: 'The unconscious here is Freud’s 1915 paper, as read through feminist and postcolonial critiques of psychoanalysis. Marx’s *Capital* provides the form (circulation produces surplus value). The case is UK asylum politics around 2000–2003; “swamped” is Blunkett (April 2002 on schools; Ahmed dates it 2003). The Tony Martin case — a farmer who shot a teenage burglar dead in 1999, was convicted of murder in 2000 (reduced to manslaughter on appeal in 2001) and released in 2003 — became a cause célèbre for the tabloid press.',
        objection: 'Two classic worries: (1) the Marx analogy — if there is no distinction between use value and exchange value, what does “value” mean? Ahmed concedes it is a “limited analogy”. (2) Psychoanalysis — by refusing to return affect to the subject, has she abandoned what makes psychoanalysis distinctive (the subject’s unconscious)? Wetherell, Leys and others press the point that a pure “circulation” model underplays how persons *take up* affect.',
        terms: ['affective-economies', 'affective-value', 'sticky', 'circulation', 'displacement', 'psychoanalysis', 'sign'],
        people: ['freud', 'marx', 'lacan'],
        diagrams: [
          {
            title: 'Marx’s circuit and Ahmed’s analogy', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 130, label: 'Marx: capital' }, { x: 320, y: 38, w: 295, h: 130, label: 'Ahmed: affect' }],
            nodes: [
              { id: 'm1', x: 70, y: 108, w: 80, label: 'M', sub: 'money', kind: 'b' }, { id: 'm2', x: 158, y: 108, w: 80, label: 'C', sub: 'commodity', kind: 'b' }, { id: 'm3', x: 246, y: 108, w: 80, label: 'M′', sub: 'more money', kind: 'e' },
              { id: 'a1', x: 380, y: 108, w: 80, label: 'sign', kind: 'a' }, { id: 'a2', x: 468, y: 108, w: 80, label: 'sign', kind: 'a' }, { id: 'a3', x: 556, y: 108, w: 80, label: 'sign + affect', kind: 'e' },
              { id: 'n', x: 310, y: 245, w: 540, label: 'Value (and affect) is not “in” the thing: it is an effect of movement. Limit of the analogy: no use-value / exchange-value distinction.', kind: 'ghost' }
            ],
            edges: [{ from: 'm1', to: 'm2' }, { from: 'm2', to: 'm3' }, { from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }],
            caption: 'In Marx the movement produces surplus value; in Ahmed it produces surplus *affect*: “the more signs circulate, the more affective they become”.'
          },
          {
            title: 'How asylum, burglary and defence get stuck together', w: 620,
            nodes: [
              { id: 'f', x: 95, y: 70, w: 130, label: '“Flood”, “swamped”', sub: 'overwhelm', kind: 'a' }, { id: 'b', x: 270, y: 70, w: 130, label: '“Bogus” asylum seeker', sub: 'could be anyone', kind: 'a' }, { id: 'h', x: 450, y: 70, w: 160, label: 'Hague: “rights of criminals vs. rights of the burgled”', kind: 'b' },
              { id: 'u', x: 95, y: 195, w: 130, label: 'Burglar', sub: 'stealing from the nation', kind: 'a' }, { id: 't', x: 270, y: 195, w: 130, label: 'Tony Martin', sub: 'victim, “ordinary farmer”', kind: 'c' }, { id: 'n', x: 450, y: 195, w: 150, label: 'The nation', sub: 'victim whose home is a “shell”', kind: 'c' },
              { id: 'x', x: 270, y: 315, w: 420, label: 'Conclusion never stated: the nation, like Martin, may expel “burglars” by any means', kind: 'd' }
            ],
            edges: [{ from: 'f', to: 'b' }, { from: 'b', to: 'u', label: 'sticks' }, { from: 'h', to: 't', label: 'proximity' }, { from: 'u', to: 't' }, { from: 't', to: 'n', label: 'becomes' }, { from: 'n', to: 'x', strong: true }, { from: 'b', to: 'x', dash: true }],
            caption: 'No explicit argument is made. The narrative works by adjacency and repetition: “attachment as a form of speech, as resistance to literalisation”.'
          }
        ],
        questions: [
          'Ahmed says the figure of the bogus asylum seeker works *because* it has no fixed referent. What does that imply about the usefulness of fact-checking or “debunking”?',
          'Is the economy metaphor illuminating or too loose? What would you want added to it?',
          'Watch a news clip or read a speech: find three words that “stick” together (flood, crisis, burden). Which histories do they reopen?'
        ],
        glosses: [
          { q: 'positive residence', t: 'Against “positive residence”', b: 'A Derridean/Saussurean phrase: meaning is differential (a sign means by differing from other signs) and so cannot “reside” in a presence. Ahmed uses it to say hate has no home in any subject, object or sign — it is constituted through difference and displacement.' },
          { q: 'unconscious emotions', t: 'Freud on unconscious affect', b: 'In “The Unconscious” (1915, SE XIV) Freud argues strictly there are no unconscious *affects*, only unconscious *ideas*, with the affect displaced onto substitute ideas — hence “unconscious emotion” is shorthand for an affect misconstrued. Ahmed’s “rippling” is her version of how affect trails across ideas. Compare Juliet Mitchell and the Lacanian reading of affect as “displaced signifier”.', people: ['freud'], terms: ['displacement'] },
          { q: 'accumulation of affective value', t: 'Affect as capital', b: 'Ahmed’s inversion of Marx: for Marx the capitalist’s passion drives accumulation; for Ahmed passion is *what is accumulated*. This resonates with Bourdieu’s “emotional capital” and Hochschild’s “emotional labour”, but is distinct: she is describing the accumulation of *affective value in signs*, not individuals’ resources. See also Lauren Berlant’s “affective economy” of intimacy and Sianne Ngai’s *Ugly Feelings*.', terms: ['affective-value'] },
          { q: 'Lacan’s positing', t: 'Why she refuses “the subject”', b: 'In Lacanian theory the subject is constituted by lack and by the signifier; the unconscious is “structured like a language”. Ahmed’s objection (and her reference to her earlier *Differences that Matter*, 1998) is that Lacan, like Freud, returns displacement to “the subject” as the site of loss — a move that centres a (white, bourgeois) interiority. Her economy is *relational* — see Chapter 3 on how this shapes her reading of Fanon.', people: ['lacan'] },
          { q: 'swamped', t: 'The “swamp” trope', b: 'Margaret Thatcher’s 1978 “swamped by people with a different culture” is the *locus classicus*; Blunkett’s 2002 use revived it. The word works by metaphor (water) and metonymy (it recalls other floods: *flood*, *wave*, *tide*, *tsunami*). Today’s “wave of migrants” and “swarm” (Cameron, 2015) show the lexicon’s endurance.' },
          { q: 'bogey man', t: 'A figure that cannot be pinned', b: 'The “bogey man” is both mythic and ambient: a figure to be feared in advance. Compare Stanley Cohen’s “folk devils and moral panics” (1972) and Stuart Hall’s *Policing the Crisis* (1978) — Ahmed’s “affective economy” can be read as an account of how a panic’s figure keeps accumulating weight across contexts.' }
        ]
      },
      {
        title: 'Hated Bodies',
        gist: 'What hate does at the level of bodies. Hate is intentional (“againstness”) but its object does not pre-exist it. Against projection-only models, Ahmed argues hate is an intimate, ambivalent attachment that makes “I” and “we” through alignment (likeness and unlikeness). Lorde’s subway scene shows how a body becomes “the roach”, and how space is reorganised.',
        moves: [
          { h: 'Hate and the general', p: 'Aristotle: anger is for individuals; hatred for classes. Hate aligns the particular with a group, endowing others with “positive residence”.' },
          { h: 'Beyond projection', p: 'Projection assumes inside → outside. But negative feelings “within” may be effects; why does hate *feel* like it comes from inside and goes to others?' },
          { h: 'Hate is intimate', p: 'Allport, Suttie, Freud (fort-da), Holbrook, Bollas, Borch-Jacobsen: hate needs the object, conserves it, is not indifference. Love is not the opposite of hate.' },
          { h: 'I and we', p: 'In hating, the subject loves itself: hate structures narcissism — the “we” is faces of other “me”s. Identification is alignment, with an active “giving up” of other identifications.' },
          { h: 'Hate as evidence of itself', p: '“I hate them because they are unlike us” retrospectively evokes the origin of the hate; hate produces the evidence for its own reading.' },
          { h: 'Lorde on the train', p: 'A white woman’s gaze pulls a child’s gaze down; the child looks for a roach; realises she is the “it”. Hate slides between roach and body; histories of association make some bodies “closer to the skin” of hatred.' },
          { h: 'Space reorganised', p: 'The white woman moves away and moves on; the child is sealed. The collective’s skin takes shape through such encounters.' }
        ],
        voice: 'It is common to say that hate is a projection of what we cannot bear in ourselves. There is truth there. But I want to ask why hate *feels* as if it comes from inside and lands on others who have a life of their own. My answer is that hate is a way of establishing borders: the “I” that hates and the “we” that it protects appear together. And in Lorde’s story you can see, almost frame by frame, how a body becomes the thing it is hated as — how the gaze that falls on you pulls your own gaze down with it.',
        context: 'Psychoanalytic accounts of hate (Klein’s projective identification, Freud’s love/hate ambivalence) meet social psychology of prejudice (Allport) and Black feminist narrative (Lorde). The reading of Lorde is also a reading of Fanon’s “Look, a Negro!” (the next chapter’s opening). The point that identification is *alignment* is a feminist/queer correction of Freud’s account of identification as based on love.',
        objection: 'Does the claim that hate “cannot be opposed to love” risk over-psychologising structural racism or being too broad (all attachment is ambivalent)? Ahmed also mostly reads hate through white subjects’ attachments. That is why section 4 insists on asking about the hated — Lorde’s *experience* — a self-critique worth foregrounding in discussion.',
        terms: ['hate', 'projection', 'ambivalence', 'identification', 'narcissism', 'sticky', 'surfaces', 'whiteness'],
        people: ['lorde', 'fanon', 'freud', 'klein', 'allport'],
        diagram: {
          title: 'Lorde’s subway: a hate encounter in six moves', w: 620,
          nodes: [
            { id: '1', x: 85, y: 75, w: 120, label: '1 · The stare', sub: 'white woman, fur coat', kind: 'b' }, { id: '2', x: 235, y: 75, w: 120, label: '2 · Gaze pulled down', sub: 'child follows it', kind: 'a' }, { id: '3', x: 385, y: 75, w: 120, label: '3 · An object appears', sub: '“probably a roach”', kind: 'a' },
            { id: '4', x: 535, y: 75, w: 120, label: '4 · “It is me”', sub: 'realisation', kind: 'a' },
            { id: '5', x: 235, y: 195, w: 150, label: '5 · She stands and moves', sub: 'space reorganised', kind: 'c' }, { id: '6', x: 435, y: 195, w: 150, label: '6 · “The hate”', sub: 'child sealed; hater moves on', kind: 'e' },
            { id: 'h', x: 310, y: 310, w: 420, label: 'Histories of association (dirt, roaches, Blackness) are reopened: some bodies are already “closer to the skin” of hate', kind: 'ghost' }
          ],
          edges: [{ from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }, { from: '4', to: '5', curve: -30 }, { from: '5', to: '6' }, { from: 'h', to: '3', dash: true, label: 'make the roach available' }, { from: 'h', to: '4', dash: true }],
          caption: 'The “roach” is the sticky sign that mediates hate: it comes to stand for the cause, then slides onto the child’s body.'
        },
        questions: [
          'Ahmed claims hate “cannot be opposed to love”. Do you find that persuasive? What would it mean for how we respond to hateful people?',
          'Lorde says “No word has been spoken.” How does hate do its work without speech? Where in your own experience have you been the target — or the unnoticed bearer — of such a gaze?',
          'Identification as *alignment* rather than love: what does Ahmed gain from this redefinition?'
        ],
        glosses: [
          { q: 'againstness', t: 'Intentionality of hate', b: 'Hate is “always, in the phenomenological sense, intentional”: it is *about* someone. But note the twist: “that something or somebody does not necessarily pre-exist the emotion”. This is the move from phenomenology’s directed consciousness to the **production** of objects — the root of the claim that hate generates “figures”.', terms: ['aboutness'] },
          { q: 'projective identification', t: 'Klein and after', b: 'Melanie Klein’s notion (1946): the infant projects unwanted parts of the self into the (m)other, then identifies with them, and may induce the other to feel them. Ian Craib’s gloss (quoted) is the clinical formulation. Ahmed’s critique: both projection and projective identification keep an *inside → outside* logic; her claim is that the inside/outside is an effect.', people: ['klein'], terms: ['projection'] },
          { q: 'Hate then cannot be opposed to love.', t: 'The love-hate intimacy', b: 'Freud’s ambivalence (the same object loved and hated), Klein’s paranoid-schizoid and depressive positions, and Bion’s “L, H, K” all treat hate as a mode of relating. Ahmed’s Chapter 6 develops the converse — that love can function as exclusion. See Lacan’s neologism *hainamoration* (hate-love).', terms: ['ambivalence'] },
          { q: 'fort da', t: 'Freud’s spool game', b: 'In *Beyond the Pleasure Principle* (1920) Freud watches a grandson throw a spool away (“fort!” — gone) and pull it back (“da!” — there). Freud reads the game as mastery of the mother’s absence by turning passivity to activity; the “hostile” element is the throwing away. Ahmed uses it to show love expressed as hostility — and then warns against reducing all hate to the mother-child scene (psychologisation).', people: ['freud'] },
          { q: 'Hate wants to get its hands on the other', t: 'Hate as touch', b: 'From Borch-Jacobsen’s *The Emotional Tie* (1993), a Lacanian-inflected critique of Freud’s theory of identification. The “touch” motif returns to Chapter 1’s *contact* — hate is a form of contact that seeks to destroy what it needs.', terms: ['contact'] },
          { q: 'narcissism', t: 'Narcissism as social form', b: 'Freud’s “narcissism of minor differences” (the tendency to hate those closest to us) is a likely echo; Ahmed’s claim is that the “we” is built from loved *likenesses* — “other me’s”. Compare Chapter 6, where love of the ideal shapes the national subject.', terms: ['narcissism'] },
          { q: 'Thinking of identification as a form of alignment', t: 'Alignment', b: 'A queer/feminist reframing: identification is not an internal imitation of a loved object but a social orientation that “brings into line”. The notion of **alignment** connects to her later *Queer Phenomenology* (2006) and the idea of “straightening devices”.', terms: ['identification', 'orientation'] },
          { q: 'Black feminist Audre Lorde', t: 'Lorde’s “Eye to Eye”', b: 'The passage comes from “Eye to Eye: Black Women, Hatred, and Anger” in *Sister Outsider* (1984), which argues that Black women inherit hatred and anger and can use anger as a source of clarity. Ahmed’s reading here emphasises the hate directed at the child; Chapter 8 will take up Lorde’s “The Uses of Anger”.', people: ['lorde'] }
        ]
      },
      {
        title: 'Hate Crime',
        gist: 'Hate crime legislation makes the connection between hate and bodies explicit but risks psychologising racism and treating group identity as a pre-given cause. Ahmed argues for using “hate crime” as a way of making the effects of hate visible, and for attending to what hate does to the hated — without assuming what it feels like to be hated.',
        moves: [
          { h: '“Because”', p: 'Legal definitions (Wisconsin v. Mitchell) make a crime a hate crime when committed *because of* group identity. That treats identity as a prior cause when it is also an effect.' },
          { h: 'The usefulness of the category', p: 'It names hate as attachment and structural violence; it lets racism’s psychic and bodily investments show (Eisenstein).' },
          { h: 'Its risks', p: 'Goldberg and Rosga: it can individualise and psychologise oppression. Ahmed’s answer: attend to investments in *norms*; avoid both psychologising power and reifying structures.' },
          { h: 'Ordinary vs extreme', p: 'Hate is part of producing the ordinary, so “extremists” alibi the nation. Yet we can still hold individuals responsible.' },
          { h: 'Re-reading Lorde', p: 'Earlier readings focused on the white body’s effect. Now: what happens to the hated body? It is sealed (Fanon), hailed (Althusser), taken into the gaze of its hater.' },
          { h: 'Affects that cannot be guaranteed', p: 'Matsuda stresses harm (“spirit murder”); Butler stresses indeterminacy. Ahmed: affects are not determined in advance, but not nothing — some signs keep sticking because histories remain open.' },
          { h: 'What to do', p: 'Use the law not to establish the “truth” of injury but to listen to the “affective life of injustice”; don’t treat bruised skin as sole evidence.' }
        ],
        voice: 'I was uneasy about hate crime because it can make hate into a thing individuals do. But it also does something I value: it forces us to see that violence is not random; that bodies are chosen because of what they are made to stand for. What I want to ask is not only what the law counts but what hate *does* — on the body of the one who is hated, who learns what she is read as, and who may or may not be wounded in the way the hater intends. We must listen without assuming.',
        context: 'The legal frame is US (Wisconsin v. Mitchell, 1993, upholding penalty enhancement) and UK (Public Order Act 1986 on incitement to racial hatred, discussed in note 4). Theoretically the section is a three-way conversation: critical race legal theory (Matsuda), poststructuralist speech-act theory (Butler), and critics of the psychologisation of racism (Goldberg, Rosga). Fanon and Althusser supply sealing and hailing.',
        objection: 'A critic from criminal-justice scholarship might say Ahmed’s ambivalence is too soft: hate crime laws also have empirical effects (reporting rates, sentencing disparities). A critic from critical race theory might say the section doesn’t go far enough: what are the *policy* implications of listening to affect? Both fair — the chapter is a theory of hate, not a policy brief.',
        terms: ['hate-crime', 'hate', 'sticky', 'racialisation', 'sign', 'interpellation', 'performativity', 'wounded-attachments'],
        people: ['matsuda', 'butler', 'fanon', 'althusser', 'brown', 'berlant', 'derrida'],
        diagram: {
          title: 'The logic of “because” and what Ahmed adds', w: 620,
          zones: [{ x: 10, y: 38, w: 295, h: 285, label: 'Legal model' }, { x: 320, y: 38, w: 295, h: 285, label: 'Ahmed’s model' }],
          nodes: [
            { id: 'a', x: 158, y: 105, w: 220, label: 'Group identity (already in place)', kind: 'b' }, { id: 'b', x: 158, y: 185, w: 220, label: '“because of” → motive', kind: 'ghost', shape: 'pill' }, { id: 'c', x: 158, y: 265, w: 220, label: 'Crime against an individual', kind: 'a' },
            { id: 'd', x: 468, y: 105, w: 220, label: 'Violence enforces the identity', kind: 'a' }, { id: 'e', x: 468, y: 185, w: 220, label: 'Identity ↔ hate: cause and effect', kind: 'c' }, { id: 'f', x: 468, y: 265, w: 220, label: 'Effects on the hated are not guaranteed — so listen', kind: 'e' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'd', to: 'e', both: true }, { from: 'e', to: 'f' }],
          caption: 'The law’s one-way arrow (identity → crime) becomes a loop: hate seals bodies into the identities that hate then claims as its cause.'
        },
        questions: [
          'Ahmed says that to treat testimonies of injury as *evidence* would “perform its own injustice”. What does she mean — and what alternative to evidence does she propose?',
          'How should we weigh Matsuda’s emphasis on harm against Butler’s emphasis on the indeterminacy of speech? Does Ahmed reconcile them?',
          'Does the shift from “hate crime” to “affective life of injustice” help or hinder anti-racist legal strategy?'
        ],
        glosses: [
          { q: 'Wisconsin v. Mitchell', t: 'The legal case', b: 'In *Wisconsin v. Mitchell* (1993) the US Supreme Court unanimously upheld a state penalty-enhancement statute for bias-motivated crime, distinguishing it from punishment of thought (compare *R.A.V. v. St Paul*, 1992, which struck down a hate-speech ordinance). The case set the template for “penalty-enhancement” hate crime laws. Ahmed quotes the statutory language as cited by Jacobs and Potter (1998), a sceptical treatment.' },
          { q: 'the word ‘because’', t: 'Why “because” matters', b: 'The legal causal form presumes a sovereign subject whose motive explains the act (“selects the person… because of the race…”). Ahmed’s counter-claim — that the group identity is partly *effect* — parallels Butler’s argument that identity categories are produced through the very acts that presuppose them (see *Gender Trouble*).' },
          { q: 'spirit murder', t: 'Patricia Williams', b: 'Patricia J. Williams coined the phrase in *The Alchemy of Race and Rights* (1991) to describe the psychic destruction wrought by racism — an injury to the spirit rather than to the body alone. Matsuda cites it as the central harm of hate speech.' },
          { q: 'sealed into that crushing object-hood', t: 'Fanon’s “sealing”', b: 'Fanon (*Black Skin, White Masks*, ch. 5) says the Black man is “sealed into that crushing objecthood” by the white gaze — the “epidermalisation” of inferiority. Ahmed’s account of the child on the train is an everyday version. The same chapter provides the opening of Chapter 3 (“Look, a Negro!”).', people: ['fanon'] },
          { q: 'in Althusser’s (1971) sense', t: 'Hailing as hate', b: 'Interpellation usually produces a subject who recognises themselves (“it’s me”); here it produces the subject as *hated*. Compare Butler’s *Excitable Speech*, which links interpellation to injurious speech (“the name that wounds”).', terms: ['interpellation'], people: ['althusser'] },
          { q: 'wound culture', t: 'Brown and Berlant', b: 'Berlant (2000), “The Subject of True Feeling”, argues that pain and injury became the currency of US citizenship (“national sentimentality”). See Chapter 1’s politics of pain: Ahmed’s position is consistent — don’t fetishise the wound; don’t forget the history of wounding.', people: ['brown', 'berlant'], terms: ['wounded-attachments'] },
          { q: 'Excitable Speech', t: 'Butler on hate speech', b: 'Butler argues that injurious speech works through citation of prior usage; so it can be resignified (the burning cross as example, which she analyses via *R.A.V.* and the “fighting words” doctrine). She criticises Matsuda and MacKinnon for assuming a sovereign speech act. Ahmed’s middle path: signs are not fixed, yet histories of use make some stick.', people: ['butler'], terms: ['performativity'] },
          { q: 'they hail the other precisely by bringing another into a history', t: 'Sticky words', b: 'Racial slurs illustrate the book’s theory of *sticky signs*: their affective force comes not from the letters but from histories of use. Chapter 4 on “speaking disgust” gives the full account. Note also the *third-party* structure Ahmed observes — the insult “directed against an other, but mediated by a third party” — i.e., hate also builds a *we* among witnesses.', terms: ['sticky'] }
        ]
      }
    ]
  });
})();
