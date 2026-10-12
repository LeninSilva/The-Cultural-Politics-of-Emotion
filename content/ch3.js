/* Chapter 3: The Affective Politics of Fear — authored guide. */
(function () {
  CP.unit('ch3', {
    tagline: 'Fear needs its object to *pass by*. That is why it spreads, why it shrinks some bodies and expands others, and why it can justify endless security.',
    claim: 'Fear is felt as an intense impression of a **future** harm; it is intensified, not relieved, by the possibility that the feared object may **pass by** — because then anything could be the object. That structure lets fear **slide** between signs and bodies (horse → father; Black man → animal; asylum seeker → terrorist), **restricts the mobility** of some bodies while **expanding** that of others, and gives states a way to produce **crisis** and so to preserve “what is”.',
    glance: [
      'Fanon’s “Look, a Negro!”: a white child’s fear takes the Black body as its object — and the Black body takes on the fear as its own.',
      'Fear vs anxiety (Heidegger, Freud): fear has an object but is intensified by its loss; anxiety, without an object, *attaches* to many objects “like Velcro”.',
      'Spatial politics: women’s fear, “fear of crime”, and the uneven distribution of mobility. Safety = who gets to move.',
      'The global economy of fear after 9/11: the “could-be” terrorist, flags as sticky signs, detention, profiling, the asylum seeker–terrorist slide, and crisis as a political technology.'
    ],
    why: 'Fear is the emotion we are told to “manage” for safety — and the one governments most often invoke to justify extraordinary measures. Ahmed lets you ask who is made fearful, who is made fearsome, and who gets to move freely as a result. It also gives you a way to read the contemporary language of “threat”, “crisis”, “security” and “could be” without assuming fear is simply a natural response to danger.',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'This chapter opens with Fanon’s account of racist abuse and reproduces a racial slur in his text. It also discusses post-9/11 anti-Muslim and anti-Arab profiling.' } }],
    argument: {
      steps: [
        { h: 'Fanon’s encounter', p: 'Fear is declared by a white child (“Mama, see the Negro! I’m frightened!”) and mediated by stereotypes; the Black man is made the object and takes on the fear as his own. The shiver of cold is misread as rage — what passes between bodies is not the same affect.' },
        { h: 'Fear works by distance and fantasy', p: 'The white boy’s cannibal fantasy (“he’s going to eat me up”) frames the other as a threat to life and justifies violence “in preservation”. Fear is about preservation, not gratification (Laing).' },
        { h: 'Fear and the passing by of the object', p: 'Heidegger: fear intensifies when the object may stay away. A fear that has an object can be contained; fear without containment becomes anxiety. They slide.' },
        { h: 'Displacement and love', p: 'Following Freud (Little Hans) fears are displacements; but Ahmed reads the displacement as shaped by social histories, not just intra-psychic ones. The child flees into the mother’s arms: fear keeps alive the fantasy of love as preservation of life.' },
        { h: 'Bodies that fear', p: 'Fear is felt unevenly (“those least in danger are the most afraid”). Fear shrinks bodies; narratives of who is fearsome and who is vulnerable align bodily and social space: some move because others are contained.' },
        { h: 'Global economies of fear', p: 'Fear is neither a mere technology of rule (Machiavelli, Hobbes) nor a symptom of modernity (Furedi, Beck): it is the intensification of threat that distinguishes the threatened from the threatening. After 9/11, flags and “love” mobilise some bodies; detention and profiling contain others.' },
        { h: 'Crisis and security', p: 'Security presupposes insecurity of “the not”; crises are produced by designating fetish objects (divorce, terrorists, asylum seekers). The “could-be” terrorist and the asylum seeker become interchangeable figures that justify endless defence.' }
      ]
    },
    diagram: {
      title: 'Chapter 3: how fear organises bodies and borders', w: 620,
      nodes: [
        { id: 'a', x: 90, y: 80, w: 140, label: 'An object approaches', sub: 'may hurt in the future', kind: 'b' },
        { id: 'b', x: 270, y: 80, w: 140, label: '…but may pass by', sub: 'so anything could be it', kind: 'a' },
        { id: 'c', x: 450, y: 80, w: 150, label: 'Fear slides', sub: 'sticks to some bodies, signs', kind: 'a' },
        { id: 'd', x: 90, y: 205, w: 150, label: 'Some bodies shrink', sub: 'contained, restricted', kind: 'c' },
        { id: 'e', x: 270, y: 205, w: 150, label: 'Others expand', sub: 'mobility, “freedom”', kind: 'e' },
        { id: 'f', x: 450, y: 205, w: 150, label: 'Crisis & security', sub: 'preserve “what is”', kind: 'd' },
        { id: 'g', x: 270, y: 325, w: 380, label: 'Love as the flip side: flags, home, “fellow feeling” — fear aligns the nation as a loved body', kind: 'ghost' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 30 }, { from: 'c', to: 'e' }, { from: 'd', to: 'f', dash: true }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' }],
      caption: 'The structural possibility of “passing by” is what lets fear spread from object to world, and what makes the politics of security endless.'
    },
    context: [
      'The chapter pairs **Frantz Fanon’s** phenomenology of racism (*Black Skin, White Masks*, ch. 5) with **Heidegger’s** analysis of fear and anxiety (*Being and Time*), **Freud’s** Little Hans, **feminist criminology** (Stanko, Hanmer & Saunders), political theory of fear (Machiavelli, Hobbes), and the cultural-theory “risk/anxiety” literature (Furedi, Beck, Campbell). Its political case is the **post–9/11 “war on terror”** — Bush’s speeches, the UK Anti-terrorism, Crime and Security Act 2001, detention and racial profiling, and Australia’s Tampa affair.',
      'It continues the book’s refrain: fear, like hate, does not reside in an object but circulates between signs; the first chapter’s “surface” returns as the body’s *shrinkage* under fear.'
    ],
    terms: ['fear', 'anxiety', 'sticky', 'displacement', 'sign', 'metonymy', 'affective-economies', 'surfaces', 'orientation', 'stereotype', 'mobility', 'security', 'crisis', 'fantasy', 'racialisation', 'fetishism', 'body-out-of-place'],
    people: ['fanon', 'heidegger', 'freud', 'laing', 'bhabha', 'stanko', 'campbell', 'furedi', 'beck', 'machiavelli', 'hobbes', 'massumi', 'volpp', 'dillon'],
    sources: [
      { who: 'Frantz Fanon', work: 'Black Skin, White Masks (1952), ch. 5', role: 'Lived experience of the Black man under the white gaze: epidermalisation, stereotype, fear.', use: 'The opening scene: fear as relation, fantasy, and the way the feared body takes on the fear.' },
      { who: 'Homi Bhabha', work: 'The Location of Culture (1994)', role: 'The colonial stereotype is fixed yet requires anxious repetition.', use: 'Used to say the stereotype’s repetition signals insecurity, not security.' },
      { who: 'Martin Heidegger', work: 'Being and Time (1927)', role: 'Fear anticipates a threat that approaches and may pass by; anxiety has no object (“nowhere”).', use: 'Basis of Ahmed’s account of “passing by”.' },
      { who: 'Sigmund Freud', work: '“Inhibitions, Symptoms and Anxiety” (1926); Little Hans (1909)', role: 'Phobia as displacement; fear of the horse substitutes for fear of the father.', use: 'Ahmed keeps displacement but replaces the intra-psychic origin with social histories.' },
      { who: 'Elizabeth Stanko; Hanmer & Saunders', work: 'Everyday Violence (1990); Well-Founded Fear (1984)', role: 'Women’s fear of public space is structured by narratives of vulnerability and the threat of violence.', use: 'To show how fear aligns bodily and social space.' },
      { who: 'Machiavelli; Hobbes', work: 'The Prince; Leviathan', role: 'Fear as an instrument of rule and the foundation of government.', use: 'Contrasted: fear is not just a tool but produces the line between the threatened and the threatening.' },
      { who: 'David Campbell', work: 'Writing Security (1992/98)', role: '“Danger is not an objective condition.”', use: 'Supports the claim that threat is produced, not discovered.' },
      { who: 'Brian Massumi', work: 'The Politics of Everyday Fear (1993)', role: 'The terrorist as “an unspecifiable may-come-to-pass”.', use: 'The “could-be” figure as a mechanism of security.' },
      { who: 'Muneer Ahmad; Leti Volpp; Zolberg', work: 'Post-9/11 legal scholarship (2002)', role: 'Documentation of racial profiling and the creation of a new racialised category.', use: 'Empirical grounding for the “could-be terrorist”.' }
    ],
    conversation: [
      { h: 'Fear, race and the state', p: 'Post-9/11 racialisation of Muslims, Arabs and South Asians has been analysed through Ahmed’s concept of the “could be” (Puar & Rai on “terrorist monsters”; Jasbir Puar’s *Terrorist Assemblages*, 2007; Arun Kundnani’s *The Muslims Are Coming!*, 2014; and critiques of the UK’s Prevent duty). The structure Ahmed describes — suspicion itself as ground for detention — recurs in “see something, say something” campaigns and in the 2017 US travel bans.' },
      { h: 'The Belmarsh case', p: 'The UK’s indefinite-detention provisions in the 2001 Act were declared incompatible with human rights by the House of Lords in 2004 (*A v Secretary of State for the Home Department*), underscoring the chapter’s warning about “suspicion as ground”.' },
      { h: 'Politics of fear scholarship', p: 'Corey Robin’s *Fear: The History of a Political Idea* (2004), Martha Nussbaum’s *The Monarchy of Fear* (2018), and Judith Shklar’s “liberalism of fear” represent alternative accounts; unlike Ahmed they tend to treat fear as an emotion with a stable psychology that political actors can exploit. Ahmed’s position is that fear is made by the very discourses that exploit it.' },
      { h: 'Gendered mobility and fear of crime', p: 'The “fear of crime paradox” (Ditton & Farrall) and geographies of women’s fear (Gill Valentine’s “The Geography of Women’s Fear”, 1989) remain active; the #MeToo moment and campaigns around public-space safety renew Stanko’s point that safety advice is often a call for women’s self-restriction.' },
      { h: 'Anxiety and the “age of anxiety”', p: 'Ahmed’s claim that anxiety “sticks like Velcro” prefigures later accounts of precarity and anxiety as ordinary affect (Berlant’s *Cruel Optimism*, 2011; Sianne Ngai’s *Ugly Feelings*, 2005 on anxiety and paranoia).' }
    ],
    debates: ['fear-security', 'populism-emotion', 'affective-turn'],
    questions: [
      'In Fanon’s scene, what exactly is passed between bodies? Why does Ahmed insist it is *not* the same affect?',
      'Think of an advisory you have received (“be vigilant”, “don’t walk alone at night”, “if you see something say something”). Who is the implied potential victim? Who is the implied threat? Who gets to move?',
      'Heidegger’s point: fear grows when the object may pass by. How does that help explain why “no specific threat” alerts often *increase* public anxiety?',
      'Is Ahmed’s concept of “mobility” as unequal useful for contemporary debates (travel bans, borders, vaccine passports, pandemic lockdowns)?',
      'The chapter ends with deaths of asylum seekers “in containers” unmourned. How does fear determine which deaths can be grieved? (Compare Butler’s *Precarious Life*.)'
    ],
    bridges: {
      back: 'Chapter 2’s “bogus” asylum seeker returns as the “could-be” terrorist: both are figures defined by the structural possibility that they cannot be told apart.',
      forward: 'Chapter 4 asks what happens when the stickiness of signs is not about threat but about contamination: *disgust*, and the performativity of statements like “that’s disgusting”.'
    },
    sections: [
      {
        title: 'Opening: “Look, a Negro!”',
        gist: 'Fanon’s encounter on the street: a white child’s fear of a Black man, announced in language, inhabited by the Black body, and shaped by stereotypes. Ahmed uses it to show that fear creates borders, circulates between signs, and rests on fantasies of incorporation.',
        moves: [
          { h: 'Overdetermined object', p: 'The “Negro” is the object of a fear declared by a child but mediated by memory traces. The statement “I’m frightened” tells the other he is the cause.' },
          { h: 'Fear on the surface', p: 'The Black body is “drawn tighter”: smile, then laughter, become impossible. Fear works through subjects as well as objects; it both brings bodies together and moves them apart.' },
          { h: 'Misreading', p: 'The Black man’s shiver (cold) is misread as rage and becomes the “ground” of white fear; he then fears the child’s fear. What passes is not the same feeling.' },
          { h: 'Stereotype', p: 'Repeated “the Negro is…” fixes the other, but needs repetition — insecurity (Bhabha). Fear slides across signs and sticks only temporarily to a body.' },
          { h: 'Fantasy of incorporation', p: '“He’s going to eat me up”: the other threatens to take the self in; discourses of fear concern preservation (Laing) of me, us, “life as we know it”.' },
          { h: 'Three steps', p: 'Fear and anxiety (loss of object); fear and bodily/social space (mobility); fear and the conservation of power (crisis and the terrorist).' }
        ],
        voice: 'I return to Fanon because he shows what is difficult to theorise: a scene in which everything is happening at once — language, skin, memory, fantasy. The white child’s fear is real, but it is made in advance. And the Black man is not a bystander to it; he is formed by it, enclosed in a body that shivers. When I say that fear is “economic”, I mean that it moves between signs, between bodies, and between times — and that these movements have owners and non-owners.',
        context: 'Fanon’s “The Fact of Blackness” (ch. 5) is the foundational account of racialisation as an *embodied, affective* event. The “racial epidermal schema” and “historico-racial schema” (Fanon’s terms) describe how history inhabits the body before thought. Ahmed reads it alongside Bhabha’s “stereotype” and Laing’s psychology of insecurity.',
        objection: 'Some Fanon scholars (and Fanon himself) emphasise that his analysis is of colonial Martinican/French contexts, and caution against universalising the scene. Others note that Ahmed foregrounds the white child’s fear, perhaps at the expense of Fanon’s own anger and reflexive action (the passage continues into “I took myself far off from my own presence”). Chapter 8 returns to anger.',
        terms: ['fear', 'stereotype', 'racialisation', 'fantasy', 'sticky', 'surfaces'],
        people: ['fanon', 'bhabha', 'laing'],
        diagram: {
          title: 'What passes between bodies in Fanon’s scene', w: 620,
          nodes: [
            { id: 'a', x: 95, y: 75, w: 140, label: 'Black man shivers', sub: 'cold', kind: 'b' }, { id: 'b', x: 270, y: 75, w: 140, label: 'Read as rage', sub: 'misreading', kind: 'a' }, { id: 'c', x: 445, y: 75, w: 150, label: 'White boy trembles', sub: '“I’m frightened!”', kind: 'a' },
            { id: 'd', x: 95, y: 195, w: 150, label: 'Black man fears the child’s fear', sub: 'body sealed, tightened', kind: 'c' }, { id: 'e', x: 270, y: 195, w: 150, label: 'Cannibal fantasy', sub: '“he’ll eat me up”', kind: 'd' }, { id: 'f', x: 445, y: 195, w: 150, label: 'Into mother’s arms', sub: 'home, being-at-home', kind: 'e' },
            { id: 'h', x: 270, y: 320, w: 450, label: 'Stereotypes (“the Negro is…”) — repeated histories — make the encounter readable in advance', kind: 'ghost' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 30, label: 'returned' }, { from: 'c', to: 'e' }, { from: 'e', to: 'f' }, { from: 'h', to: 'b', dash: true }, { from: 'h', to: 'e', dash: true }],
          caption: 'The shiver is passed on as a *sign* that is read differently by each party: affect is not transmitted intact.'
        },
        questions: [
          'Why does Ahmed emphasise that the affect that “passes” is not the same affect? What would a model of “emotional contagion” miss in Fanon’s scene?',
          'Fanon’s text is a first-person account of being made an object. What do you do, as a reader, with the fact that Ahmed’s analysis turns it into a theory?'
        ],
        glosses: [
          { q: 'an ontological statement', t: 'Fear as an ontological claim', b: 'The child’s “I’m frightened” is not merely a report; it constitutes the speaker as endangered and the other as dangerous. Ahmed will develop the performative side in Chapter 4 (“Speaking disgust”) and Chapter 5 (shame as speech act). Compare Fanon’s “I was responsible at the same time for my body, for my race, for my ancestors.”', terms: ['performativity'] },
          { q: 'fixed accounts of the other’s being', t: 'The stereotype and its anxiety', b: 'In “The Other Question” (1983/1994) Bhabha argues that the colonial stereotype is both fixed *and* repeated anxiously: “the same old stories” must be told again and again because they never quite hold. Ahmed uses this to say fixity is an *effect* of repetition and so is vulnerable — a hope that she will cash in Chapter 8.', people: ['bhabha'], terms: ['stereotype'] },
          { q: 'Such a cannibalistic fantasy', t: 'Incorporation and its politics', b: 'Cannibal fantasy has a long role in racial and colonial imaginaries (the “savage” who eats), and in psychoanalysis (oral incorporation). Ahmed’s point is that the *threat to be taken in* justifies violence “in preservation”. See Chapter 6 on love as incorporation (“taking in”) — the same fantasy in a loving key.', terms: ['fantasy'] },
          { q: 'R. D. Laing’s terms', t: 'Laing’s ontological insecurity', b: 'In *The Divided Self* (1960) R. D. Laing contrasts ontological security with insecurity, in which the self’s preservation, not gratification, becomes the dominant concern; the other is felt as engulfing, implosive, or petrifying. Ahmed transposes this from the psyche to the nation: collectives, too, may be organised around “the preservation of what is”.' }
        ]
      },
      {
        title: 'Fear and Anxiety',
        gist: 'Fear is usually distinguished from anxiety by having an object. Ahmed argues that fear is intensified by the passing by of its object, and that anxiety, by contrast, picks up and sticks to objects. Through Heidegger, Freud (Little Hans) and Fanon she shows how fear creates borders and objects, and how it is bound to love.',
        moves: [
          { h: 'The standard distinction', p: 'Fear is a reaction to an identifiable threat; anxiety is tense anticipation of something vague (Rachman).' },
          { h: 'The temporal structure', p: 'Fear is felt as a present intensity that anticipates future hurt. We fear what approaches.' },
          { h: 'Heidegger’s passing by', p: 'The threat is close but “may stay away and pass us by”; this enhances fear. When an object may pass by, fear can no longer be contained by it.' },
          { h: 'Anxiety sticks', p: 'In anxiety, thoughts move between objects, accumulating; anxiety is an approach *to* objects, not produced by an object’s approach. Fear slides into anxiety.' },
          { h: 'Displacement, again', p: 'Little Hans: horse for father. For Freud the displacement leads back to castration; for Ahmed it follows social histories of association (Negro/animal/bad).' },
          { h: 'Fear and love', p: 'Fear is bound up with the loss of the object, as such: the child’s flight is a flight into love, a second skin. Fear keeps alive the fantasy of love as preservation, but only by announcing death.' }
        ],
        voice: 'The way we usually think, fear is clear and anxiety is foggy. I find this too tidy. When the thing we fear might pass by, we do not relax — we fear everything. The slide from fear to anxiety is not a failure of fear; it is what gives it political force. And I find in Freud that fear is bound to love: we fear the loss of what keeps us in the world. That means fear can never be pulled apart from the attachments it defends.',
        context: 'Heidegger’s distinction in *Being and Time* (§30 on fear; §40 on anxiety) is the philosophical standard. Freud’s second theory of anxiety (1926) reverses his earlier idea that anxiety is transformed libido: anxiety is a signal of danger, with phobia as displacement. Ahmed’s interjection is to *socialise* displacement.',
        objection: 'A psychologist will note that fear/anxiety distinctions in clinical research are well-validated (e.g., defensive distance; “fight-or-flight” vs “risk assessment”), and may say Ahmed’s argument is about *discourse* about fear, not fear. A Heideggerian might say she turns an existential-ontological analysis into an ontic-political one.',
        terms: ['fear', 'anxiety', 'displacement', 'psychoanalysis', 'sticky', 'attachment'],
        people: ['heidegger', 'freud', 'fanon'],
        diagram: {
          title: 'Fear and anxiety on one slope', w: 620,
          zones: [{ x: 10, y: 38, w: 295, h: 270, label: 'Fear' }, { x: 320, y: 38, w: 295, h: 270, label: 'Anxiety' }],
          nodes: [
            { id: 'a', x: 158, y: 100, w: 220, label: 'An object approaches', kind: 'b' }, { id: 'b', x: 158, y: 175, w: 220, label: 'It may pass by', sub: 'fear intensified', kind: 'a' }, { id: 'c', x: 158, y: 255, w: 220, label: 'Anything could be it', kind: 'a' },
            { id: 'd', x: 468, y: 100, w: 220, label: '“Nowhere” (Heidegger)', kind: 'b' }, { id: 'e', x: 468, y: 175, w: 220, label: 'Sticks to objects like Velcro', sub: 'accumulates', kind: 'a' }, { id: 'f', x: 468, y: 255, w: 220, label: 'An approach *to* objects', sub: 'a mode of attachment', kind: 'a' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'c', to: 'e', strong: true, label: 'the slide' }],
          caption: 'Ahmed’s thesis in one arrow: the loss of the object *turns* fear into anxiety.'
        },
        questions: [
          'Heidegger says fear is enhanced by the possibility that a threat “may pass us by”. Try applying that to the experience of waiting for test results or for a threatened layoff. What do you notice?',
          'Little Hans’s phobia was read by Freud as displacement from his father to a horse. Ahmed’s alternative: horse and father are linked by *social* histories. What would count as evidence for her reading?'
        ],
        glosses: [
          { q: 'tense anticipation of a threatening but vague event', t: 'Clinical psychology’s distinction', b: 'S. J. Rachman’s *Anxiety* (1998) draws on a research tradition (Freud, Fischer) that defines fear by an identifiable threat and anxiety by anticipatory vagueness. Contemporary neuroscience (e.g., Joseph LeDoux; Lisa Feldman Barrett) is more cautious: the distinction maps onto “defensive survival circuits” versus conscious feelings. Ahmed’s argument is orthogonal: her subject is the *social life* of the distinction.' },
          { q: 'Heidegger argues that fear is felt in the absence of the object', t: 'Heidegger’s analysis of fear (Being and Time §30)', b: 'Heidegger breaks fear into three: *that in the face of which* we fear (the fearsome), *fearing itself*, and *that about which* we fear (Dasein itself). The “passing by” (*vorbeigehen*) belongs to the first. For Heidegger fear is a derivative of anxiety, which reveals Dasein’s being-in-the-world as such. Ahmed’s inversion — anxiety as derivative of fear’s loss of object — is a deliberate move.', people: ['heidegger'] },
          { q: 'it comes from nowhere', t: 'Anxiety’s “nowhere”', b: 'For Heidegger anxiety is “being-in-the-world as such” — the uncanny — and its object is “nothing and nowhere”. Ahmed disputes the claim that anxiety has no object, preferring a model in which it *generates* objects: “anxiety is like Velcro” (note 2). Later work on “free-floating” affect (e.g., Ngai on “anxiety” as the affect of the contemporary) sits in the same register.', terms: ['anxiety'] },
          { q: 'Little Hans case', t: 'Freud’s case history', b: 'In “Analysis of a Phobia in a Five-Year-Old Boy” (1909) Freud treats Hans’s fear of horses as displaced castration anxiety directed at his father. The case is the paradigmatic “primal scene” of phobia; Ahmed’s Introduction (note 12) already hinted at the horse → father slide. Contemporary readings (e.g., Lacan’s Seminar IV) insist that the horse is the signifier that *organises* Hans’s anxiety, which sits closer to Ahmed’s structure of sticky signs.', people: ['freud'], terms: ['displacement'] },
          { q: 'put in the place', t: 'Symptom as substitution', b: 'In *Inhibitions, Symptoms and Anxiety* (1926) Freud says the phobic symptom “takes the place” of the dangerous situation; avoidance of the horse allows the ego to manage a danger that cannot be avoided (the father). Ahmed highlights the *utility* of displacement: it is a way of living with an unliveable fear.' },
          { q: 'being-at-home', t: 'Home as defence', b: 'Heidegger’s *Heimlichkeit/Unheimlichkeit* (the homely/uncanny) provides the background: anxiety is “not-being-at-home”. Ahmed will pursue home and “the stranger” in Chapters 6–7 and in her later *Queer Phenomenology*; see also Gaston Bachelard’s *Poetics of Space* on home as protection.' },
          { q: 'second skin', t: 'Anzieu and the skin-ego', b: 'Didier Anzieu’s *Le Moi-peau* (1985) elaborates the idea that the maternal environment functions as a psychic “skin” that contains the infant. Ahmed borrows the image: the mother’s arms provide a second skin; fear leads the child into love’s enclosure.' }
        ]
      },
      {
        title: 'Bodies That Fear',
        gist: 'Which bodies fear which bodies? Fear is not simply proportional to danger: those least at risk are often the most afraid. Fear shrinks bodies and restricts mobility, and feminist work shows how narratives of vulnerability align bodily and social space — so some bodies move because others are contained.',
        moves: [
          { h: 'Vulnerability is not an inherent quality', p: 'Ditton & Farrall: anxiety about crime does not map victimisation. Sacco & Glackman: vulnerability is a feeling of openness to attack that shapes what counts as danger.' },
          { h: 'Fear shrinks the body', p: 'In fear, the world presses; the body retreats and prepares for flight, restricting mobility.' },
          { h: 'Fanon again', p: 'The white child’s fear leads to the embrace of home; the Black subject, who fears the child’s fear, is crushed and takes up less space. Fear restricts some bodies *through the expansion of others*.' },
          { h: 'Feminist critique', p: 'Stanko, Hanmer & Saunders: women’s fear is structural; narratives of feminine vulnerability construct the outside as dangerous and the home as safe, requiring either domestication or careful movement.' },
          { h: 'Space and territory', p: 'Uneven distribution of fear lets spaces become territories claimed by some bodies. “Freedom” is increasingly defined as freedom from fear and to move.' }
        ],
        voice: 'It is tempting to say that women fear the street because women are vulnerable. But vulnerability is not a property of bodies; it is a relation made through stories that tell some bodies they should be careful, and tell others the street is theirs. When I say fear shrinks the body, I mean it literally: a body that is anticipating injury gathers itself in. And this shrinkage is not only private. It aligns bodies with spaces, and spaces with rights.',
        context: 'Feminist criminology (Stanko’s *Everyday Violence*; Hanmer & Saunders; Valentine; Pain) reframed “fear of crime” as a gendered, structural phenomenon. The “mobility” thesis also draws on the critique of the celebration of mobility in cultural theory (note 8; Ahmed et al. 2003, *Uprootings/Regroundings*), where hypermobility for some depends on containment of others.',
        objection: 'Does the “shrinking” thesis risk reproducing the idea that women are essentially fearful? Ahmed expressly says vulnerability is “an effect”. Another worry: it neglects *resistance* — women’s and racialised people’s collective occupations of public space (Reclaim the Night; Black Lives Matter) are a different practice of fear and mobility. The final section’s attention to “mobilisation” is partial.',
        terms: ['mobility', 'fear', 'surfaces', 'orientation', 'racialisation'],
        people: ['stanko', 'fanon'],
        diagram: {
          title: 'How fear aligns bodily and social space', w: 620,
          nodes: [
            { id: 'a', x: 95, y: 80, w: 150, label: 'Narratives of who is fearsome & who is vulnerable', kind: 'b' },
            { id: 'b', x: 285, y: 80, w: 130, label: 'Fear shrinks bodies', sub: 'withdrawal, preparation for flight', kind: 'a' },
            { id: 'c', x: 475, y: 80, w: 150, label: 'Mobility restricted', sub: 'home / public divide', kind: 'a' },
            { id: 'd', x: 190, y: 210, w: 170, label: 'Some bodies contained', sub: 'women, racialised others', kind: 'c' },
            { id: 'e', x: 400, y: 210, w: 170, label: 'Other bodies expand', sub: 'free to move; space is theirs', kind: 'e' },
            { id: 'f', x: 295, y: 320, w: 300, label: 'Space becomes territory: rights claimed by some, not others', kind: 'd' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: -20 }, { from: 'c', to: 'e' }, { from: 'd', to: 'f' }, { from: 'e', to: 'f' }],
          caption: 'The mobility of some depends on the restriction of others — “freedom from fear” is unequally distributed.'
        },
        questions: [
          'Consider a safety campaign or piece of advice you know. Does it tell potential victims to restrict themselves, or tell potential perpetrators to stop? What does that say about whose mobility counts?',
          'If vulnerability is an “effect” of narratives rather than an inherent quality, how should we think about genuine differences in risk — and responsibilities to protect?'
        ],
        glosses: [
          { q: 'those least in danger are the most afraid', t: 'The “fear of crime paradox”', b: 'Ditton & Farrall (2000) summarise a repeated finding of victimisation surveys: groups with the lowest risk (e.g., older women) report the highest fear. Feminist critics argue the paradox reflects a narrow definition of crime that excludes domestic and sexual violence; Ahmed’s argument takes a different path, treating *fear itself* as a social achievement.' },
          { q: 'As Elizabeth Stanko (1990) argues', t: 'Stanko, Everyday Violence', b: 'Elizabeth Stanko’s *Everyday Violence* (1990) argues that women’s fear is a rational response to the continuum of violence in everyday life, and that advice to “take care” reproduces responsibility for safety on women. Her “safety work” concept anticipates later discussions of “risk management” as gendered labour.', people: ['stanko'] },
          { q: 'Well-Founded Fear', t: 'Hanmer & Saunders', b: 'Jalna Hanmer and Sheila Saunders’s *Well-Founded Fear* (1984), a community study of women’s experience of violence and fear in a Leeds neighbourhood, documented the curtailment of movement as a common response. It belongs to the feminist tradition of treating the fear of violence as a form of violence (“terrorism”) in its own right.' },
          { q: 'femininity as a constrained mobility', t: 'Iris Marion Young', b: 'Compare Iris Marion Young’s “Throwing Like a Girl” (1980), which describes how feminine bodily comportment is characterised by “inhibited intentionality” and self-enclosure. Ahmed’s “shrinkage” is a politicised version: not the bodily style of a gender but the effect of how fear is distributed.' },
          { q: 'the freedom from fear', t: 'Freedom and fear in political rhetoric', b: 'FDR’s “Four Freedoms” (1941) included freedom from fear; after 9/11 the Bush administration recast it as freedom *to move*. Note 6 gives Kierkegaard’s alternative: fear as “the alarming possibility of being able”, a sign of capacity rather than restriction.' }
        ]
      },
      {
        title: 'Global Economies of Fear',
        gist: 'Fear is neither only a tool of rulers nor only a symptom of modern life. After 9/11, fear is produced by intensifying “the threat” in a way that divides the threatened from the threatening; love and flags mobilise some bodies while detention and profiling contain others; the “could-be” terrorist and the asylum seeker slide together; and crisis becomes a technology for preserving “what is”.',
        moves: [
          { h: 'Fear as technology or symptom', p: 'Machiavelli and Hobbes treat fear as an instrument of rule; Furedi, Dunant & Porter, and Beck describe a culture/age of fear. Ahmed: fear is an *effect* of the intensification of threat, which distinguishes those under threat from those who threaten (Campbell).' },
          { h: 'Terrorism and mobility', p: 'Terrorists seek to make others afraid and immobile; Howard and Bush frame attacks as assaults on the free flow of capital and bodies. The nation is represented as *not* afraid — instructed to travel, spend and consume.' },
          { h: 'Flags as sticky signs', p: 'The flag mediates fear as love and “fellow feeling”; staying at home becomes identification with the nation at war. Fear can expand bodies through identification with the collective body (collective narcissism: the “mirror”).' },
          { h: 'Who is contained', p: 'Detention on suspicion; racial profiling; a new category of “Middle Eastern, Arab or Muslim”. Containment relies on the structural possibility that anyone could be a terrorist.' },
          { h: 'Terrorist and asylum seeker', p: 'The slide from asylum seeker to terrorist justifies border policing; Tampa; deaths in containers unmourned.' },
          { h: 'Security and “the not”', p: 'Security presupposes insecurity of “the not me”; transgression is needed to secure the border. Crisis is *produced* by designating fetish objects, justifying defence of “what is” in the name of survival.' },
          { h: 'Falwell, BNP, Bush', p: 'Fear is displaced onto internal “weaknesses” (secularism, gays, feminists) in extremist discourse; in moderate discourse it appears as national strength and citizen-policing (“eyes and ears”) alongside an imperative to love.' }
        ],
        voice: 'After September 11 we were told not to be afraid, to go shopping, to fly. That is itself a politics of fear: fear is defined as the failure of the nation, and the nation’s “strength” is defined as its capacity to move. But the “could be” does something else: it lets suspicion roam over bodies that look a certain way and licenses their containment. And the very impossibility of identifying the terrorist — he “could be” anyone — means the defence never ends. I am suggesting that this is not a bug but the structure: security requires insecurity.',
        context: 'Written within a year of the Iraq war’s start (2003) and drawing on the language of Bush’s speeches, Australia’s Prime Minister John Howard, the UK’s Anti-terrorism, Crime and Security Act 2001, and US post-9/11 detention. Theoretical references include critical security studies (Campbell, Dillon, Burke), Beck’s risk society, and Massumi’s “politics of everyday fear”.',
        objection: 'Critics from security studies may argue that Ahmed collapses distinct processes (securitisation, profiling, nationalism) into one logic of “fear”. Others note that “fear” was only one affect of the post-9/11 moment (grief, anger, solidarity). From the other direction: her analysis arguably understates the real violence of the attacks. Ahmed’s answer is that her question is what the *language* of fear does, not whether threats exist.',
        terms: ['security', 'crisis', 'mobility', 'fear', 'sticky', 'metonymy', 'fetishism', 'racialisation', 'nation'],
        people: ['machiavelli', 'hobbes', 'furedi', 'beck', 'campbell', 'massumi', 'volpp', 'dillon'],
        diagrams: [
          {
            title: 'Fear after 9/11: some are mobilised, others contained', w: 620,
            nodes: [
              { id: 't', x: 310, y: 60, w: 210, label: 'Terrorist attack → fear', kind: 'a' },
              { id: 'm', x: 150, y: 165, w: 210, label: 'Nation “not afraid”', sub: 'flags, home, love, shopping', kind: 'e' },
              { id: 'c', x: 470, y: 165, w: 210, label: '“Could be” terrorist', sub: 'suspicion on bodies that look “Middle Eastern, Arab, Muslim”', kind: 'a' },
              { id: 'mo', x: 150, y: 275, w: 210, label: 'Mobilised bodies', sub: 'capital, citizens-as-police', kind: 'e' },
              { id: 'co', x: 470, y: 275, w: 210, label: 'Contained bodies', sub: 'detained, profiled, asylum seekers', kind: 'c' },
              { id: 's', x: 310, y: 355, w: 250, label: 'Security requires insecurity: the war is never over', kind: 'd' }
            ],
            edges: [{ from: 't', to: 'm' }, { from: 't', to: 'c' }, { from: 'm', to: 'mo' }, { from: 'c', to: 'co' }, { from: 'mo', to: 's', dash: true }, { from: 'co', to: 's', dash: true }],
            caption: 'The same event produces two distributions of fear: love and mobility for the nation’s “we”; suspicion and containment for the bodies that “could be”.'
          },
          {
            title: 'How a “crisis” preserves “what is”', w: 620,
            nodes: [
              { id: 'a', x: 90, y: 80, w: 130, label: 'A fact / figure / event', sub: 'real, e.g. divorce rates, attack', kind: 'b' }, { id: 'b', x: 250, y: 80, w: 130, label: 'Read as crisis', sub: 'turned into a fetish object', kind: 'a' }, { id: 'c', x: 420, y: 80, w: 150, label: 'Declared a matter of life and death', kind: 'a' },
              { id: 'd', x: 250, y: 205, w: 160, label: 'Return to values, norms, forms', kind: 'c' }, { id: 'e', x: 450, y: 205, w: 170, label: 'Defence against those who “fail” the norm', kind: 'c' },
              { id: 'f', x: 340, y: 320, w: 330, label: 'Surveillance never ends: others may take unanticipated forms', kind: 'd' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'f' }, { from: 'e', to: 'f' }],
            caption: '“To announce a crisis is to produce the moral and political justification for maintaining ‘what is’.”'
          }
        ],
        questions: [
          'Compare Bush’s “It is natural to wonder if America’s future is one of fear” with a recent political appeal to resilience or unity. What does the “not afraid” stance accomplish?',
          'Ahmed claims that “fear sticks” to some bodies precisely because it “does not reside positively in any one body.” How does that apply to current categories of suspicion (e.g., “foreign fighters”, “illegals”, “grooming gangs”, “extremists”)?',
          'Is the idea that “security requires insecurity” persuasive? What would security look like in her terms?'
        ],
        glosses: [
          { q: 'safer to be feared than loved', t: 'Machiavelli’s fear', b: 'In *The Prince* ch. XVII, Machiavelli advises that the prince should avoid being hated while preferring to be feared. Ahmed uses the passage to show how political theory has treated fear as an *instrument*. Her own account makes fear a *producer of the collective* — the prince’s subjects are formed as subjects by the way fear is distributed.', people: ['machiavelli'] },
          { q: 'Hobbes (1991)', t: 'Hobbes’s fear', b: 'Hobbes’s *Leviathan* (1651) makes fear of violent death the passion that inclines men to peace and to the covenant that creates sovereignty. Compare Corey Robin on fear as “a political idea”. William Connolly’s “state of nature is shock therapy” (cited) shows how the state of nature is itself a rhetorical device for producing the desire for sovereign protection.', people: ['hobbes'] },
          { q: '‘culture of fear’', t: 'Furedi’s thesis', b: 'Frank Furedi’s *Culture of Fear* (1997) argues risk-aversion has become a dominant cultural logic eroding resilience. Ahmed treats the “age of anxiety” thesis as symptom-talk: it takes fear as a *given condition* rather than a produced relation between those who are threatened and those who threaten. Compare Beck’s *Risk Society* (1992) and Giddens’s “ontological security”.' },
          { q: 'Danger is not an objective condition', t: 'Campbell and the discourse of danger', b: 'David Campbell’s *Writing Security* (1992) uses a Foucauldian/Derridean approach to argue that US foreign policy produces its own enemies by representing “danger” in identity terms. Ahmed makes this *affective*: the threatened and the threatening are produced as such through the intensification of threat.', people: ['campbell'] },
          { q: 'John Howard', t: 'Howard, Bin Laden and “freedom”', b: 'The speech (25 Oct 2001, Australian Prime Minister) interprets terror as an attack on a “world system built on individual freedom… and the international free flow of commerce”. The juxtaposition of capital and bodies is the trace of what Ahmed calls “economies of fear” — fear is *about* the fate of movement. Compare Naomi Klein’s later “shock doctrine” and Zygmunt Bauman’s writing on “liquid fear”.' },
          { q: 'the flag is a sticky sign', t: 'The flag as sign', b: 'Michael Billig’s *Banal Nationalism* (1995) analyses the “unwaved” flag as part of an everyday reminder of nationhood; Ahmed’s focus is on its *stickiness*: the flag sticks to other flags and gives the impression of coherence. Note 10 shows its risks: for Arabs, Muslims and South Asians displaying a flag may be a “cover” against suspicion (Ahmad 2002).', terms: ['sticky'] },
          { q: 'Anti-terrorism, Crime and Security Act 2001', t: 'Belmarsh', b: 'Part 4 allowed indefinite detention without trial of foreign nationals certified as suspected terrorists who could not be deported. In *A v Secretary of State* (2004) the House of Lords found it incompatible with the European Convention on Human Rights; control orders replaced it. The sequence confirms the chapter’s claim that “suspicion itself becomes the grounds for detention”.' },
          { q: 'security involves the securing of ‘the not’', t: 'Dillon on security', b: 'Michael Dillon’s *Politics of Security* (1996) argues that security presupposes an originary insecurity and a prior definition of the “other” against which it secures. Ahmed’s emotional gloss: *anxiety* creates the borders that security then defends. Compare Agamben’s “state of exception” and Foucault’s *Security, Territory, Population*.', people: ['dillon'], terms: ['security'] },
          { q: 'to announce a crisis is to produce the moral and political justification', t: 'Crisis as technology', b: 'Compare Stuart Hall et al., *Policing the Crisis* (1978), on the moral panic about “mugging” as a hegemonic strategy, and Janet Roitman’s *Anti-Crisis* (2014). The “family crisis” example (divorce statistics) shows Ahmed’s feminist concern with how the *family* is installed as the object to be defended.', terms: ['crisis'] },
          { q: 'an unspecifiable may-come-to-pass', t: 'Massumi on pre-emption', b: 'Massumi’s “Everywhere You Want to Be: Introduction to Fear” (1993) argues that fear without a definite object (“may-come-to-pass”) can attach to anything and thus becomes a political resource. His later work on “pre-emption” (2005, 2015) is the foundation of the post-9/11 literature on anticipatory security. Ahmed borrows the phrase but not the framework: for Massumi fear is *intensity*; for her, signs and bodies.', people: ['massumi'] },
          { q: 'the boat Tampa', t: 'The Tampa affair', b: 'In August 2001 the Norwegian freighter MV Tampa rescued 433 mostly Afghan asylum seekers from a sinking vessel; the Howard government refused permission to land, sending the SAS to board and developing the “Pacific Solution” of offshore detention. The refusal was retroactively linked to terrorism after 9/11. See the Chapter 5 and 6 guides on Australian national feeling.' }
        ]
      }
    ]
  });
})();
