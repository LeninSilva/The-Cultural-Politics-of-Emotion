/* Chapter 8: Feminist Attachments — authored guide. */
(function () {
  CP.unit('ch8', {
    tagline: 'Feminism is moved by pain and anger, opened by wonder, and sustained by hope — and none of these lets it escape the attachments it critiques.',
    claim: 'Feminists who speak out are dismissed as emotional; Ahmed refuses to answer by claiming feminism is *rational* instead. Emotions are **embodied thought**, and feminism’s emotions are **attachments** — not signs of failure but the condition of change. **Anger** is a reading of pain and a form of “against-ness” that creates an object and then **loses it**, becoming a movement; it needs *uptake* and a willingness to hear others’ anger. **Wonder** sees the ordinary as made (historicity), opening bodies and classrooms. **Hope** is in the present, not a mere disposition; feminism stays alive not by letting its objects fly but by **turning towards** them. The feminist “we” is an effect, not a foundation.',
    glance: [
      'Sunera Thobani’s 2001 speech is attacked as “hate speech” and “ranting”: emotion as a way of delegitimising subaltern women’s critique.',
      'Anger: Lorde’s “loaded with information and energy”; against-ness is creative; anger as a speech act (Frye, Silver) that can be blocked by returned anger; hear the anger of other feminists.',
      'Wonder: the ordinary as non-feeling; seeing the world “as if for the first time” reveals it as made (Marx as a philosophy of wonder); feminist pedagogy; capacity as unknown (Spinoza/Deleuze).',
      'Hope: not a disposition but an impression of the “not yet” in the present; Potamianou’s warning (hope as fixation); Brown’s “let our objects fly” vs Ahmed’s “keep them close”; solidarity as shared ground, not shared feeling.'
    ],
    why: 'Anyone who organises, protests, teaches, or complains encounters the claim that their feelings undermine their argument. Ahmed gives a way of answering without conceding that emotion is the enemy of reason. Her account of anger’s uptake, of wonder as a pedagogy, and of hope as stubborn, present-tense work is practical as well as theoretical — and the chapter prefigures her later work on the “feminist killjoy”, “willfulness”, and the politics of complaint.',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'The chapter opens with a first-person account of harassment and death threats directed at a feminist scholar after a speech against the “war on terror”, and discusses violence against women and racialised stereotypes (“the angry Black woman”).' } }],
    argument: {
      steps: [
        { h: 'The risk of speaking out', p: 'Thobani’s speech draws “hate crime” accusations and personal attacks (“nutty”, “wingnut”). Subaltern women are cast as failing standards of reason; the “you are either with us or against us” logic equates critique with terror.' },
        { h: 'Emotion and reason', p: 'The thought/emotion hierarchy projects emotion onto women and racial others, concealing the emotion in “reason”. Don’t reply that feminism is rational; contest the opposition. Emotions as “embodied thought”.' },
        { h: 'Attachment is not a failure', p: 'Against the view (e.g., Brown 2003) that attachment is a problem to “let go”, Ahmed argues anti-normative politics cannot suspend norms; transformation is hard because we remain invested, but possible because investments move.' },
        { h: 'Pain → anger', p: 'Feminism begins in pain but cannot rest on it (Brown, hooks; Nussbaum on Butler). Anger is a reading of pain, a reaction that is also action — there is no pure originary action.' },
        { h: 'Anger creates and loses an object', p: 'Feminists have named their object differently; what feminism is against is not a given object. The loss of the object lets feminism move. Anger is visionary (Lorde).' },
        { h: 'Anger as speech act', p: 'Frye, Silver: anger needs uptake; returning anger blocks; reception may undo the claim. Persist; hear others’ anger; stay uncomfortable within feminism; avoid hosts/strangers hierarchy.' },
        { h: 'Wonder', p: 'Descartes’ first passion: surprise before the familiar. Wonder makes the ordinary strange, reveals the world as made, ties to learning; opens bodies; feminist pedagogy begins in wonder, including wonder about feminism itself (Black feminism).' },
        { h: 'Hope and the “we”', p: 'Hope impresses the “not yet” on the present; it is not mere disposition; it can be fixation (Potamianou). Keep the objects of feminism close; the “we” is an effect of those who move towards it; solidarity without sameness.' }
      ]
    },
    diagram: {
      title: 'Chapter 8: four feminist attachments', w: 620,
      nodes: [
        { id: 'p', x: 95, y: 80, w: 140, label: 'Pain', sub: 'a call, not a ground', kind: 'a' },
        { id: 'a', x: 270, y: 80, w: 140, label: 'Anger', sub: 'reads pain; against-ness; loses its object', kind: 'a' },
        { id: 'w', x: 445, y: 80, w: 150, label: 'Wonder', sub: 'the ordinary made strange; learning', kind: 'e' },
        { id: 'h', x: 270, y: 205, w: 150, label: 'Hope', sub: 'the not-yet in the present', kind: 'e' },
        { id: 'o', x: 95, y: 205, w: 150, label: 'Attachments persist', sub: 'norms not transcended', kind: 'c' },
        { id: 'we', x: 445, y: 205, w: 150, label: 'A “we” forms', sub: 'effect, not foundation', kind: 'd' },
        { id: 'x', x: 270, y: 320, w: 380, label: 'Politics moves because investments move — not because we detach from what we are against', kind: 'ghost' }
      ],
      edges: [{ from: 'p', to: 'a' }, { from: 'a', to: 'w', label: 'and' }, { from: 'a', to: 'h' }, { from: 'w', to: 'h' }, { from: 'o', to: 'h', dash: true }, { from: 'h', to: 'we' }, { from: 'we', to: 'x', dash: true }, { from: 'o', to: 'x', dash: true }],
      caption: 'Attachment is the thread through all four: feminism cannot step outside the objects it critiques, but it can move them.'
    },
    context: [
      'The chapter brings together **feminist theory** (Lorde, hooks, Frye, Spelman, Brown, Butler, Mohanty), **philosophy of emotion** (Descartes on wonder; Spinoza/Deleuze on capacities; Bloch and Fromm on hope), **psychoanalytic critique** (Potamianou on hope), **feminist pedagogy** (Boler, Probyn, Freire), and **political context**: the post-9/11 “war on terror” and the attack on Sunera Thobani (2001).',
      'It is the book’s answer to its own opening question of *what sticks*: it shows stickiness as the condition of change, and prepares the Conclusion’s question about justice.'
    ],
    terms: ['anger', 'wonder', 'hope', 'attachment', 'embodied-thought', 'speech-act', 'performativity', 'orientation', 'solidarity', 'feminism', 'ordinary', 'comfort', 'wounded-attachments'],
    people: ['thobani', 'lorde', 'brown', 'frye', 'hooks', 'butler', 'descartes', 'spinoza', 'deleuze', 'irigaray', 'boler', 'probyn', 'freire', 'bloch', 'potamianou', 'hage', 'mohanty', 'marx', 'nussbaum', 'rosaldo'],
    sources: [
      { who: 'Sunera Thobani', work: '“Closing Ranks: Racism and Sexism in Canada’s War on Terror” (2003)', role: 'Her account of the attacks after her speech.', use: 'The case that opens and closes the chapter.' },
      { who: 'Audre Lorde', work: '“The Uses of Anger” (1981), Sister Outsider (1984)', role: 'Anger as clarifying, loaded with information and energy; fear of anger is a turning from the future.', use: 'Anger as visionary and translating pain.' },
      { who: 'Wendy Brown', work: 'States of Injury (1995); “Women’s Studies Unbound” (2003)', role: 'Ressentiment, wounded attachments; feminism should let its objects “fly”.', use: 'Ahmed’s main interlocutor.' },
      { who: 'Marilyn Frye; Brenda Silver', work: 'The Politics of Reality (1983); anger as speech act', role: 'Anger needs uptake; returned anger blocks it.', use: 'To argue anger is performative; link to Chapter 5.' },
      { who: 'René Descartes', work: 'The Passions of the Soul (1649)', role: 'Wonder as the first of all passions.', use: 'Wonder as surprise before the ordinary.' },
      { who: 'Karl Marx; Philip Fisher; Luce Irigaray', work: 'The German Ideology; Wonder, the Rainbow…; An Ethics of Sexual Difference', role: 'Reification vs wonder; wonder and learning; wonder as a motive of movement.', use: 'Wonder as historicity and learning.' },
      { who: 'Megan Boler; Elspeth Probyn; Paulo Freire', work: 'Feeling Power (1999); Teaching Bodies; Pedagogy of the Oppressed', role: 'Emotions in feminist pedagogy; banking model.', use: 'Emotions in the classroom as process, not outcome.' },
      { who: 'Ernst Bloch; Ghassan Hage; Anna Potamianou', work: 'The Principle of Hope; Against Paranoid Nationalism (2003); Hope: A Shield in the Economy of Borderline States (1997)', role: 'Hope as expansive; hope as distributed; hope as fixation.', use: 'To theorise hope without making it a disposition or a lost object.' },
      { who: 'Chandra Talpade Mohanty', work: 'Feminism without Borders (2003)', role: 'Transnational feminist solidarity.', use: 'Solidarity as shared ground, not sameness.' }
    ],
    conversation: [
      { h: 'The politics of anger', p: 'A large literature on women’s and Black women’s anger followed: Brittney Cooper’s *Eloquent Rage* (2018), Rebecca Traister’s *Good and Mad* (2018), Soraya Chemaly’s *Rage Becomes Her* (2018), Amia Srinivasan’s “The Aptness of Anger” (2018) and Myisha Cherry’s *The Case for Rage* (2021). Srinivasan’s “affective injustice” — that one may be rightly angry yet be told to calm down — develops Ahmed’s point about uptake.' },
      { h: 'The feminist killjoy and complaint', p: 'Ahmed’s own later work follows these threads: the “feminist killjoy” (*The Promise of Happiness*, 2010), “willfulness” (*Willful Subjects*, 2014), *Living a Feminist Life* (2017) and *Complaint!* (2021) take the problem of uptake into institutions. She resigned from Goldsmiths in 2016 over the institution’s handling of sexual harassment.' },
      { h: 'Epistemic injustice and tone policing', p: 'Miranda Fricker’s *Epistemic Injustice* (2007) and the idea of “tone policing” name the process Thobani and Ahmed describe — dismissing speakers as emotional so that their claims need not be addressed. Ahmed’s intervention is that *everyone’s* knowing is emotional.' },
      { h: 'Wonder and pedagogy', p: 'Affective pedagogy and “pedagogies of discomfort” (Boler & Zembylas 2003) extend the claim that learning requires being moved; Lorraine Daston and Katharine Park (*Wonders and the Order of Nature*, 1998) provide the history of wonder that Ahmed’s account leaves out; critiques of “trigger warnings” and “safe spaces” revisit the stakes of emotion in teaching.' },
      { h: 'Hope after optimism', p: 'Berlant’s *Cruel Optimism* (2011) analyses attachments to “the good life” that hinder flourishing; Muñoz’s *Cruising Utopia* (2009) and Rebecca Solnit’s *Hope in the Dark* (2004) offer hope as political practice. Ahmed’s “hope as an impression of the not-yet in the present” bridges them. Postfeminism (McRobbie 2009; Gill) shows the “cruel” translation of feminist hope she predicted.' }
    ],
    debates: ['feminist-affect', 'wounded-attachments', 'queer-negativity', 'populism-emotion'],
    questions: [
      'How have you seen anger used as a reason to dismiss a claim? What response did Ahmed’s “don’t say we are rational” strategy open for you?',
      'Ahmed says “what feminism is against is what gives feminist politics its edge.” Can any politics be defined without an “against”? What changes if the “against” is seen as inside?',
      'Think of an organisation where one group’s anger was returned as defensiveness. What would “hearing” have required?',
      'Is wonder a politically useful emotion? What would it look like in a classroom, workplace or book club?',
      'Brown says let feminism’s objects fly; Ahmed says keep them close. Which would you choose for the movements you are part of — and what would each look like in practice?'
    ],
    bridges: {
      back: 'Chapter 8 answers Chapter 1’s question about pain and politics (don’t fetishise the wound, don’t forget it), reuses Chapter 5’s speech-act analysis (uptake) and Chapter 7’s discomfort; it returns the book to its opening claim that emotions are ranked.',
      forward: 'The Conclusion turns the question of justice: what does it mean to ask for “just emotions” in a world where emotions already do injustice, and what do the pain and shame of others ask of us?'
    },
    sections: [
      {
        title: 'Opening: Speaking Out and Being Emotional',
        gist: 'The attacks on Sunera Thobani’s speech against the “war on terror” show how critique by a subaltern woman is delegitimised as emotional and as hate. Ahmed argues against answering by claiming feminism is rational, proposing emotions as “embodied thought” and attachments as the condition of change.',
        moves: [
          { h: 'The case', p: 'Thobani criticised US foreign policy and urged solidarity with Afghan women; she was attacked in media and Parliament, received threats, and became the subject of a “hate-crime” complaint.' },
          { h: '“With us or against us”', p: 'To criticise the war is to be positioned as terrorist; the “truths” of the war world (freedom, democracy, love) must be defended.' },
          { h: 'Personalised delegitimation', p: 'She is called “nutty”, “mean-mouthed”, “hate-filled”; told to “go home”; cast as an ungrateful immigrant woman; her speech is excluded from legitimate speech by attributing purely negative passion.' },
          { h: 'The hierarchy again', p: 'The thought/emotion hierarchy translates into one between subjects: reason ↔ masculine, Western; emotion ↔ feminine, racial others. This conceals the emotion in reason.' },
          { h: 'Embodied thought', p: 'The response is not “we are rational” but to contest the opposition: emotion as embodied thought (Rosaldo); thinking involves being moved.' },
          { h: 'Attachment as problem?', p: 'Some critical feminism treats attachment as a problem (Brown). Ahmed: anti-normative politics cannot suspend norms; emotions explain why change is hard and how it is possible.' }
        ],
        voice: 'I begin with Thobani because her case shows what is at stake when we say “emotion”. It is a way of dismissing — of saying that a woman who speaks about violence is not thinking. I do not want to say she is not angry; I want to say that being angry is part of how she knows. And I want to say the same of everyone who speaks, including those who accuse her. My question in this chapter is not how feminists can avoid attachment, but how they can live with attachments that move.',
        context: 'Thobani’s speech (October 2001) and her subsequent article (2003) are an example of how post-9/11 politics policed dissent (compare Sontag in Chapter 4). The “angry woman” trope has been analysed by Spelman, Lorde, Campbell (1994) and others; Ahmed’s “embodied thought” borrows Michelle Rosaldo’s anthropology of emotion.',
        objection: 'Does refusing the reason/emotion binary leave room for evaluating *arguments*? A critic may say Ahmed’s stance risks making every claim an expression of feeling. Ahmed’s answer is that arguments and feelings are not opposites; one can ask for reasons *and* attend to emotions. The question is who gets to be heard as reasoning.',
        terms: ['embodied-thought', 'attachment', 'feminism', 'anger', 'security', 'racialisation'],
        people: ['thobani', 'brown', 'rosaldo'],
        diagram: {
          title: 'How a critique gets heard as “emotion”', w: 620,
          nodes: [
            { id: 's', x: 105, y: 80, w: 150, label: 'A critique is spoken', sub: 'Thobani on the war', kind: 'b' },
            { id: 'r', x: 310, y: 80, w: 150, label: 'Read as hate / rage', sub: '“hate-filled”, “wingnut”', kind: 'a' },
            { id: 'x', x: 515, y: 80, w: 150, label: 'Excluded from legitimate speech', sub: 'she is “out of place”', kind: 'a' },
            { id: 'h', x: 310, y: 205, w: 230, label: 'Hierarchy: reason (masculine, Western) vs emotion (feminine, racial others)', kind: 'ghost' },
            { id: 'o', x: 105, y: 205, w: 150, label: 'Not: “we are rational”', kind: 'ghost' },
            { id: 'a', x: 515, y: 205, w: 160, label: 'But: emotion as embodied thought', kind: 'e' }
          ],
          edges: [{ from: 's', to: 'r' }, { from: 'r', to: 'x' }, { from: 'h', to: 'r', dash: true, label: 'enables' }, { from: 'o', to: 'h', dash: true, label: 'accepts' }, { from: 'h', to: 'a', strong: true, label: 'contest' }],
          caption: 'Ahmed’s strategy: refuse the terms of the opposition rather than claim the privileged side.'
        },
        questions: [
          'Can you think of a time when a claim was dismissed as “just emotional”? What would it have taken for it to be heard as thought?',
          'What would it mean to say that the “truths” of the war world are dependent on emotions?'
        ],
        glosses: [
          { q: 'Sunera Thobani', t: 'The Thobani case', b: 'Sunera Thobani, a Canadian feminist scholar (then at the University of British Columbia), delivered a speech in Ottawa in October 2001 criticising US foreign policy and calling on women to build solidarity with Afghan women’s organisations. Politicians and media condemned her; the RCMP announced a hate-crime investigation (it did not result in charges). Her 2003 essay “Closing Ranks” is the source of the epigraph.', people: ['thobani'] },
          { q: 'You are either with us or against us.', t: 'Bush’s dichotomy', b: 'Bush’s formulation (20 September and 6 November 2001) became the template of post-9/11 politics: neutrality was impossible. Ahmed ties it back to Chapter 3’s “could be” and Chapter 4’s “disgust at disgust”: dissent is positioned inside the object it dissents from.' },
          { q: '‘out of place’ as an immigrant woman', t: 'Bodies out of place', b: 'Ahmed’s earlier concept (*Strange Encounters*) returns: the “immigrant woman” is told to “go home”. Compare the later rhetoric aimed at British MPs, American Congresswomen and others (“go back where you came from”). The link between hospitality (“gratefully received”) and speech recalls Chapter 6.', terms: ['body-out-of-place'] },
          { q: 'embodied thought', t: 'Rosaldo’s phrase', b: 'Michelle Rosaldo (“Toward an Anthropology of Self and Feeling”, 1984) argued that emotions are “embodied thoughts” — thoughts “seeped with the apprehension that ‘I am involved’”. She was criticising the Western opposition between reason and feeling on the basis of Ilongot ethnography. Ahmed adopts the phrase as the heart of her feminist epistemology.', people: ['rosaldo'], terms: ['embodied-thought'] },
          { q: 'see attachment as a ‘problem’ for feminism', t: 'Brown’s “Women’s Studies Unbound”', b: 'Brown (2003) argued that feminism’s attachments to “women” and “gender” as objects stand in the way of its becoming a broader transformative politics: she called for feminism to let its objects “fly” and to mourn its passing. Ahmed takes this as the main foil of the chapter.', people: ['brown'] }
        ]
      },
      {
        title: 'Feminism and Anger',
        gist: 'Feminism begins in pain but cannot rest on it; anger reads pain, creates an object, and — by losing the object — turns feminism into a movement. Drawing on Lorde, Ahmed argues that anger is visionary and not mere reaction; but as a speech act it needs uptake, can be blocked by returned anger, and demands that feminists hear each other’s anger, staying uncomfortable within feminism.',
        moves: [
          { h: 'Pain in feminism', p: 'Consciousness-raising transforms pain into collectivity (Tavris, Burstow). But Brown: politics grounded in pain cannot hold out a future; wounds become identities.' },
          { h: 'Don’t fetishise or forget', p: 'Nussbaum’s use of “ordinary women’s suffering” against Butler shows fetishism of pain as a measure of truth. Return to Chapter 1: remember how wounds were made; do the work of translation (hooks).' },
          { h: 'Anger and reaction', p: 'The response to pain requires anger (“this is wrong”). There is no pure or originary action outside histories of contact; agency is the space between reaction and decision.' },
          { h: 'Lorde', p: 'Anger is “loaded with information and energy”; it translates pain into knowledge and a vision of the future; fear of anger turns away from the future.' },
          { h: 'Anger and its object', p: 'Anger reads and creates an object (patriarchy, gender…); feminists have named it variously; the object is not given. The loss of the object — a critique of “what is” — lets feminism move.' },
          { h: 'Anger as a speech act', p: 'Frye, Silver: anger needs uptake; returned anger blocks it. Persist in explaining why anger is reasonable; the conditions of reception are not ours.' },
          { h: 'Hear others’ anger', p: 'White feminists’ defensiveness to Lorde; accept that one’s position might anger others; Fisher: uncomfortable voices are a built-in critique. Don’t make hosts and strangers within feminism; stay uncomfortable.' }
        ],
        voice: 'There is a tradition that treats anger as reaction and therefore as less than politics. I want to say that there is no politics that is not a reaction in some way: we are all affected by what comes before us. What matters is what we do with what affects us. Anger can turn pain into a question about the world; it can lose its object and become a response to “what is” rather than to this person or that. But it can also be blocked, by those who hear it as proof that we are unreasonable — and by feminists who hear it as a threat to their own place. The ethical task is to hear.',
        context: 'The debate sets Brown’s Nietzschean critique of ressentiment against Black feminist theory of anger (Lorde; also Cooper later). The “speech act” theory of anger (Frye 1983) links with Austin’s uptake. The feminist-history context includes 1970s consciousness-raising, radical feminist therapy, and tensions between white feminism and women of colour (Lorde’s “Uses of Anger” addresses a 1981 conference).',
        objection: 'Critics ask whether Ahmed’s defence of anger risks valorising it. She says not all anger is good; her claim is about its structure. A deeper worry: her “no pure action” thesis could be read as excusing reactionary politics (“to react is not always to be reactionary” — note 3 — but sometimes is). The distinction between reaction and reactionary remains to be argued case by case.',
        terms: ['anger', 'wounded-attachments', 'speech-act', 'performativity', 'attachment', 'comfort', 'orientation'],
        people: ['lorde', 'brown', 'frye', 'hooks', 'nussbaum', 'butler', 'spelman', 'nietzsche'],
        diagrams: [
          {
            title: 'Anger: from pain to movement', w: 620,
            nodes: [
              { id: 'p', x: 95, y: 80, w: 130, label: 'Pain', sub: 'testimony, violence', kind: 'a' },
              { id: 'r', x: 245, y: 80, w: 130, label: 'A reading', sub: '“this is wrong”', kind: 'a' },
              { id: 'o', x: 395, y: 80, w: 140, label: 'An object named', sub: 'patriarchy, gender…', kind: 'b' },
              { id: 'l', x: 545, y: 80, w: 120, label: 'Object lost', sub: 'a critique of “what is”', kind: 'c' },
              { id: 'm', x: 320, y: 210, w: 300, label: 'Feminism becomes a movement: open to what is not yet', kind: 'e' },
              { id: 'x', x: 320, y: 320, w: 440, label: 'Anger is also “for”: visionary (Lorde); “against-ness” and “for-ness” are not separable', kind: 'ghost' }
            ],
            edges: [{ from: 'p', to: 'r' }, { from: 'r', to: 'o' }, { from: 'o', to: 'l' }, { from: 'l', to: 'm', strong: true }, { from: 'm', to: 'x', dash: true }],
            caption: 'Ahmed’s reversal: it is the *loss* of the object, not its creation, that allows feminism to move.'
          },
          {
            title: 'Anger as a speech act: what happens at uptake', w: 620,
            nodes: [
              { id: 'a', x: 110, y: 80, w: 140, label: 'Anger expressed', sub: 'a claim of against-ness', kind: 'a' },
              { id: 'u', x: 310, y: 80, w: 140, label: 'Uptake', sub: 'heard, answered', kind: 'e' },
              { id: 'b', x: 510, y: 80, w: 140, label: 'Blocked', sub: 'returned anger, defensiveness, “reasonableness”', kind: 'a' },
              { id: 'i', x: 510, y: 205, w: 150, label: 'Intensification', sub: 'despair, bitterness', kind: 'a' },
              { id: 'h', x: 310, y: 205, w: 170, label: 'A just hearing?', sub: 'translated into action', kind: 'e' },
              { id: 'p', x: 110, y: 205, w: 150, label: 'Persist anyway', sub: 'banners, statements, explanation', kind: 'c' },
              { id: 'x', x: 310, y: 320, w: 420, label: 'Hear others’ anger without defending your own position — stay uncomfortable inside feminism', kind: 'd' }
            ],
            edges: [{ from: 'a', to: 'u' }, { from: 'a', to: 'b', curve: 40 }, { from: 'b', to: 'i' }, { from: 'u', to: 'h' }, { from: 'i', to: 'p', curve: -30, dash: true }, { from: 'h', to: 'x', dash: true }],
            caption: 'A speech act of anger can be “unhappy” (Austin) if its reception finishes it differently — connecting to Chapter 5’s apologies.'
          }
        ],
        questions: [
          'Do you agree there is no “pure” action outside reaction? What would be a counter-example?',
          'Think of a time you were the one who “blocked” someone’s anger. What did you say or do, and what might hearing have required?',
          'Is “staying uncomfortable within feminism” a realistic request? What practices would support it?'
        ],
        glosses: [
          { q: 'consciousness-raising groups', t: 'Pain into collectivity', b: 'Consciousness-raising (CR) was a core practice of second-wave feminism: small groups in which women shared experiences to see them as political. Burstow’s *Radical Feminist Therapy* (1992) and Tavris’s *Anger: The Misunderstood Emotion* (1982) are cited. Critics (including Black feminists) said CR groups often assumed a white middle-class “woman”. Ahmed acknowledges both the value and the limit.' },
          { q: 'Wendy Brown’s critique of the politics of pain', t: 'Brown, again', b: 'Brown’s *States of Injury* (1995) is the antagonist of Chapters 1 and 8. For Brown, identity politics based on injury produces “wounded attachments”, preferring a politics of desire (“I want”) to being (“I am”). Ahmed’s reply is that both pain and desire are mediated; and that forgetting the wound reproduces the forgetting that fetishises it.', people: ['brown'] },
          { q: 'professor of parody', t: 'Nussbaum v. Butler', b: 'Martha Nussbaum’s review “The Professor of Parody” (*The New Republic*, 1999) attacked Butler for “collaborating with evil” and for failing to help “hungry women”. Butler replied (“Values of Difficulty”). Ahmed reads Nussbaum’s move as using women’s suffering as an *immediate measure of truth* — fetishism — and as an example of how a feminist can delegitimise another.', people: ['nussbaum', 'butler'] },
          { q: 'naming one’s personal pain is insufficient', t: 'hooks on therapy culture', b: 'bell hooks’s *Talking Back* (1989) warns that “personal” pain narratives can be absorbed by individualist therapeutic culture unless connected to collective political education. The argument resonates with critiques of “confessional” politics and with the later “neoliberal feminism” literature (Rottenberg 2018).', people: ['hooks'] },
          { q: 'There is no pure or originary action', t: 'Agency and reaction', b: 'Note 3: “Politics is the space left between the surfaces of reaction and the necessity of a decision about what to do.” Ahmed deliberately departs from Lois McNay’s idea of agency as pre-given creativity, and from the liberal model of the autonomous agent. Compare Butler’s account of agency as “resignification” and Spinoza’s idea of the *conatus* shaped by encounters.', terms: ['attachment'] },
          { q: 'My response to racism is anger', t: 'Lorde on anger', b: 'From “The Uses of Anger: Women Responding to Racism” (keynote, National Women’s Studies Association, 1981): Lorde distinguishes anger (a response to injustice) from hatred (“the fury of those who do not share our goals”), and insists that guilt and defensiveness are “bricks in a wall against which we all flounder”. Ahmed uses her to show that anger is visionary and directed at *change*.', people: ['lorde'] },
          { q: 'It is the loss of the object, rather than its creation', t: 'The loss of the object', b: 'This is the chapter’s most distinctive claim: feminism does not need a stable object (patriarchy, women) and becomes a movement when it loses it. The idea has been taken up in debates about the category “women” (Butler’s *Gender Trouble*), intersectionality (Crenshaw 1989), and “feminism without women”. Compare Ahmed’s own later move to “feminism as a movement of the willful”.' },
          { q: 'Marilyn Frye', t: 'Frye on anger', b: 'Frye’s “A Note on Anger” (in *The Politics of Reality*, 1983) argues that anger presupposes a claim to standing and expects uptake; anger that is dismissed (“she’s hysterical”) is a way of denying the angry person’s standing. Ahmed’s link to Austin makes “uptake” a *performative* condition: anger can be “unhappy”.', people: ['frye'] },
          { q: 'The voices that make us most uncomfortable', t: 'Fisher on discomfort as critique', b: 'Berenice Fisher’s “Feminist Process and Women’s Studies” (1984) argues that tensions within feminist groups are not failures but a *built-in critique*. Ahmed’s “stay uncomfortable” is an application of Chapter 7’s queer discomfort to feminist community — and anticipates later critiques of white feminism’s “comfort” (Ahmed 2012; Ortega 2006).', terms: ['comfort'] },
          { q: 'natives and strangers', t: 'Hosts and strangers in feminism', b: 'A callback to *Strange Encounters* and Chapters 2 and 6 (hosts, hospitality, welcome): feminist ideals can become conditions of belonging, setting some feminists up as hosts who grant recognition. Intersectionality and transnational feminism (Mohanty) are the corrective practices in view.' }
        ]
      },
      {
        title: 'Feminism and Wonder',
        gist: 'Not all feminist attachment is negation: wonder — Descartes’ first passion — responds to surprise and makes the ordinary strange. Ahmed argues wonder reveals the world as made (a Marxist “philosophy of wonder”), ties to learning, opens bodies, and grounds feminist pedagogy, including critical wonder about feminism itself. Capacities are unknown in advance (Spinoza, Deleuze).',
        moves: [
          { h: 'Beyond negation', p: 'Feminism is not only about pain, anger and rage; it is also creative: joy, care, attention to surprising details.' },
          { h: 'Descartes on wonder', p: 'Wonder arises when an object is novel before we know whether it is good or bad: the first passion. It is a departure from the ordinary — which is felt as non-feeling (like comfort).' },
          { h: '“As if for the first time”', p: 'Does wonder erase history? No: it reveals the world as made. The ordinary is the effect of reification (Marx). Marxism as a philosophy of wonder; Gramsci’s common sense.' },
          { h: 'Wonder and learning', p: 'Being struck is opposite to being struck dumb (Fisher). Wonder is bodily: the body opens as the world opens; it risks closure; it radicalises our relation to the past.' },
          { h: 'Wonder in the feminist life', p: 'Wonder brought Ahmed to feminism: everything became surprising; it showed that what hurts is not necessary and can be unmade. Wonder energises hope.' },
          { h: 'Pedagogy', p: 'Emotions in the classroom (Lee, hooks, Boler, Probyn, Wiegman); don’t treat emotions as outcomes (Freire’s banking model); wonder as process: assurance → disbelief → wonder (“How did the world come to take this shape?”).' },
          { h: 'Critical wonder', p: 'Wonder about feminism itself (Black feminism shows categories exclude); capacities are about how bodies affect each other (Spinoza/Deleuze): “you do not know beforehand what a body can do”.' }
        ],
        voice: 'I find it easier to describe feminism as a response to injustice than as a response to wonder. But the second description is truer to what it felt like: everything came alive. A world that had seemed simply there became a world that had been made, and could be made differently. Wonder is not a retreat from politics; it is its beginning — the moment when what we have taken for granted stops being granted. And in a classroom it can be shared without being the same: we do not arrive at the same place, but at a shared capacity to leave the ordinary.',
        context: 'The history of wonder runs from Aristotle (philosophy begins in wonder) and Descartes to Adam Smith and the “wonder cabinet” (Daston & Park). Ahmed’s Marxist reading (Marx & Engels, Gramsci) makes wonder the affect of denaturalisation; her pedagogy draws on feminist educational research (Boler, Lee, hooks, Probyn, Wiegman) and critical pedagogy (Freire). The phenomenological claim that the ordinary is non-felt links to Wittgenstein and Merleau-Ponty.',
        objection: 'A critic of “wonder” would note that it has a colonial history: “wonder” at the exotic (Greenblatt’s *Marvelous Possessions*). Ahmed’s wonder is turned at the *familiar*, but the risk remains that wonder aestheticises. Also, from teaching practice, wonder cannot be demanded: a pedagogy of wonder can become coercive. Ahmed’s answer is that emotions cannot be outcomes — which is also a limit on her proposal.',
        terms: ['wonder', 'ordinary', 'embodied-thought', 'orientation', 'comfort', 'surfaces', 'attachment'],
        people: ['descartes', 'marx', 'irigaray', 'boler', 'probyn', 'freire', 'spinoza', 'deleuze', 'hooks', 'lorde'],
        diagram: {
          title: 'Wonder: from the ordinary to critical wonder', w: 620,
          nodes: [
            { id: 'o', x: 95, y: 80, w: 140, label: 'The ordinary', sub: 'not felt; taken for granted', kind: 'ghost' },
            { id: 's', x: 270, y: 80, w: 140, label: 'Surprise', sub: 'something out of the ordinary', kind: 'a' },
            { id: 'w', x: 445, y: 80, w: 150, label: 'Wonder', sub: '“as if for the first time”', kind: 'e' },
            { id: 'm', x: 95, y: 205, w: 150, label: 'The world as made', sub: 'historicity, not erasure', kind: 'c' },
            { id: 'l', x: 270, y: 205, w: 140, label: 'Learning', sub: 'questions: how did it get this shape?', kind: 'c' },
            { id: 'b', x: 445, y: 205, w: 150, label: 'Opened bodies', sub: 'capacity unknown in advance', kind: 'c' },
            { id: 'c', x: 270, y: 320, w: 440, label: 'Critical wonder about feminism itself: categories have exclusions (Black feminism)', kind: 'd' }
          ],
          edges: [{ from: 'o', to: 's' }, { from: 's', to: 'w' }, { from: 'w', to: 'm', curve: 40 }, { from: 'm', to: 'l' }, { from: 'l', to: 'b' }, { from: 'b', to: 'c', dash: true }, { from: 'l', to: 'c', strong: true }],
          caption: 'Wonder is the bodily opening that keeps the “taken for granted” from being granted.'
        },
        questions: [
          'Recall a moment when a familiar situation suddenly became strange (a lecture, a book, a conversation). What changed in your body and in your sense of how things came to be?',
          'Ahmed warns that emotions should not become the outcome of teaching. How do you plan or avoid planning emotion in a book club?',
          'Is “critical wonder about feminism itself” a good description of intersectional critique? What would be lost without it?'
        ],
        glosses: [
          { q: 'Descartes’ ‘The Passions of the Soul’ describes ‘wonder’', t: 'Wonder as the first passion', b: 'In *Passions of the Soul* (arts. 53–78) Descartes argues that wonder (*l’admiration*) comes before any judgement of good or bad; it focuses attention on novelty and thus aids learning, but excess can lead to astonishment (*l’étonnement*). The line from Aristotle (“philosophy begins in wonder”) to Descartes to Irigaray is Ahmed’s lineage.', people: ['descartes'], terms: ['wonder'] },
          { q: 'as if for the first time', t: 'The “as if” of wonder', b: 'The phrase risks suggesting naïve innocence; Ahmed insists it is a *radicalised relation to the past*. Compare Brecht’s *Verfremdungseffekt* (making the familiar strange), the Russian formalists’ *ostranenie* (Shklovsky), and Husserl’s epoché. Her Marxist reading ties wonder to denaturalisation.' },
          { q: 'I would describe Marxism as a philosophy of wonder', t: 'Marx’s sensuous certainty', b: 'The passage from *The German Ideology* — Feuerbach’s “sensuous certainty” is itself produced by industry and commerce (the cherry tree was brought to Europe by trade) — shows the natural attitude as historical. Gramsci’s “common sense” (cited) is the political counterpart. For Ahmed, wonder is the affective moment of this critical perception.', people: ['marx'] },
          { q: 'As Philip Fisher argues', t: 'Fisher on wonder', b: 'Philip Fisher’s *Wonder, the Rainbow, and the Aesthetics of Rare Experiences* (1998) argues that wonder is a *learning* emotion — the first step of inquiry — and distinguishes it from the sublime. He emphasises rarity and the “first time”. Ahmed borrows his tie between wonder and learning but historicises it.' },
          { q: 'Luce Irigaray emphasises', t: 'Irigaray on wonder', b: 'In *An Ethics of Sexual Difference* (1984/1993) Irigaray makes wonder the passion that preserves difference between the sexes: it keeps the other other. Ahmed takes up the movement aspect (“the motivating force behind mobility”) but is more wary than Irigaray of sexual difference as the paradigm.', people: ['irigaray'] },
          { q: 'Janet Lee', t: 'Emotions in the Women’s Studies classroom', b: 'Lee (1999), Boler (*Feeling Power*, 1999), hooks (*Teaching to Transgress*, 1994), Wiegman (1999) and Probyn (2001) form the literature on emotion in feminist pedagogy. The shared claim: emotions are not private disturbances but part of critical inquiry. The “touchy-feely” stereotype (Boler) is a gendered dismissal.' },
          { q: 'to evoke Freire’s (1996) classic metaphor', t: 'The banking model', b: 'Paulo Freire (*Pedagogy of the Oppressed*, 1970) criticises the “banking” concept of education, where teachers deposit knowledge in students as containers. Ahmed applies it to *emotions*: a pedagogy that aims to deposit the right feelings (outrage, empathy) treats emotions as fetish objects. A good prompt for diversity training and activist workshops.', people: ['freire'] },
          { q: 'You do not know beforehand what a body or a mind can do', t: 'Deleuze on Spinoza', b: 'Deleuze’s “Ethology: Spinoza and Us” (1992) paraphrases Spinoza (*Ethics* III, 2 scholium: “no one has yet determined what the body can do”). It is the principle behind “affect” theories: capacities are relational, not intrinsic. Ahmed uses it to say wonder keeps bodies open to the surprise of each combination.', people: ['spinoza', 'deleuze'] },
          { q: 'touchy-feely', t: 'Boler on dismissal', b: 'Megan Boler (*Feeling Power*, 1999) shows that feminist and critical pedagogy involving emotion is labelled “touchy-feely” in a way that other critical pedagogy is not; “emotional” is used to dismiss. Boler’s “pedagogy of discomfort” invites students to examine inherited ways of seeing.', people: ['boler'] }
        ]
      },
      {
        title: 'Feminism and Hope',
        gist: 'Hope is the question of the future: a political and affective one. Ahmed distinguishes hope as an impression of the “not yet” in the present from hope as a disposition; takes Potamianou’s warning that hope can be a fixation seriously; rejects Brown’s vision of feminism letting its objects fly in favour of keeping them close; and ends with the feminist “we” as an effect of those who move towards it, and a solidarity that does not presume the same pain, struggle or hope.',
        moves: [
          { h: 'The question of the future', p: 'Feminism wants the future not to repeat the past; it also needs the legacies of feminist pasts. The question of the future is an affective one: hope as well as fear.' },
          { h: 'Hope and politics', p: 'Politics without hope is impossible; hope without politics is a reification of possibility. Hope allows anger not to become despair.' },
          { h: 'Hope in the present', p: 'Not just the failure of repetition (iterability): the “not yet” impresses on us in the present, so we must act (Benjamin).' },
          { h: 'Hope reads openness', p: 'Fear reads openness as danger and shrinks bodies; hope reads it as possibility and expands them (Bloch). But hope is not a disposition or will; one does not hope for what one can bring about (Pieper).' },
          { h: 'Potamianou', p: 'Hope can function as stubbornness, in the service of fixations; “hope in hope” when the object is given up; investment in an ego ideal. The nation as an object of hope (Chapter 6). Hope can encrypt its object.' },
          { h: 'De-gendering and post-feminism', p: 'The hope for a world without gender seems naïve; it is cruelly translated into post-feminism: “not the world we hoped for, but a continuation of what we were against under our name”.' },
          { h: 'Brown’s flight vs keeping close', p: 'Brown wants feminism to let its objects fly. Ahmed: keep them close; turn towards them, as with queer grief; the objects move as we move; we must decide again and again when to let go.' },
          { h: 'The “we”', p: 'Hope is for others, whose pain is a thread in the weave of the present; a “we” forms through listening; it is an effect, not a foundation; solidarity (Mohanty) without sameness: common ground.' }
        ],
        voice: 'I have always been hopeful about feminism, though I do not think hope is a mood. Hope is what it feels like when what is not yet impresses upon the present and asks me to act. And it is not enough to be hopeful: no one hopes for what they can make themselves. I want to say that we keep feminism alive not by letting its objects fly, but by turning towards them — by staying with what we are against, as signs that it persists — and by letting the “we” be made by those who risk its name.',
        context: 'The hope literature spans philosophy (Bloch, Pieper, Marcel), psychology (Fromm, Lynch, Averill et al.), psychoanalysis (Potamianou), sociology (Hage), and political theory (Brown). The feminist background is the 1970s–80s “de-gendering” debates (Chodorow, Dinnerstein) and 1990s–2000s postfeminism. Ahmed’s answer to Brown extends her account of queer grief in Chapter 7. Mohanty’s “transnational solidarity” frames the conclusion.',
        objection: 'Is “keep the objects close” a recipe for conservatism — a feminism that cannot move on from “women” or “gender”? Brown’s call to let go is partly about not letting a movement become an institution. Ahmed’s rejoinder (“When should we let go? And what should we let go of?”) leaves the decision open — which some readers find an evasion and others find honest. Another worry: her hope is “present-tense” but vague about what hope would concretely require.',
        terms: ['hope', 'attachment', 'solidarity', 'feminism', 'melancholia', 'ideal', 'fear'],
        people: ['bloch', 'potamianou', 'hage', 'brown', 'mohanty', 'butler'],
        diagrams: [
          {
            title: 'Fear and hope read the body’s openness differently', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 140, label: 'Fear (Chapter 3)' }, { x: 320, y: 38, w: 295, h: 140, label: 'Hope' }],
            nodes: [
              { id: 'f1', x: 158, y: 105, w: 220, label: 'Openness read as danger', kind: 'a' }, { id: 'f2', x: 158, y: 155, w: 220, label: 'Body shrinks, flight', kind: 'a' },
              { id: 'h1', x: 468, y: 105, w: 220, label: 'Openness read as possibility', kind: 'e' }, { id: 'h2', x: 468, y: 155, w: 220, label: 'Body expands, reaches (Bloch)', kind: 'e' },
              { id: 'x', x: 310, y: 255, w: 480, label: 'But hope is not mere disposition (Hage); can be fixation (Potamianou); is not sufficient for the future', kind: 'ghost' }
            ],
            edges: [{ from: 'f1', to: 'f2' }, { from: 'h1', to: 'h2' }, { from: 'f2', to: 'x', dash: true }, { from: 'h2', to: 'x', dash: true }],
            caption: 'The comparison is Ahmed’s own, from Chapter 3.'
          },
          {
            title: 'Let the objects fly — or keep them close?', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 270, label: 'Brown: let objects fly' }, { x: 320, y: 38, w: 295, h: 270, label: 'Ahmed: turn towards them' }],
            nodes: [
              { id: 'b1', x: 158, y: 110, w: 220, label: 'Objects (sex, gender) delimit feminism', kind: 'b' }, { id: 'b2', x: 158, y: 190, w: 220, label: 'Let go: feminism becomes part of a larger politics', kind: 'b' }, { id: 'b3', x: 158, y: 265, w: 220, label: 'Risk: lets go too much; objects become relics, encrypted', kind: 'ghost' },
              { id: 'a1', x: 468, y: 110, w: 220, label: 'Objects are not secured; they move with us', kind: 'c' }, { id: 'a2', x: 468, y: 190, w: 220, label: 'Get closer: alive, shaped by contact', kind: 'e' }, { id: 'a3', x: 468, y: 265, w: 220, label: 'Decide again and again: when to let go? what?', kind: 'e' }
            ],
            edges: [{ from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3', dash: true }, { from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }],
            caption: 'The difference parallels Chapter 7’s “queer grief”: neither letting go nor incorporating but keeping impressions alive.'
          }
        ],
        questions: [
          'How do you distinguish hope as “a disposition” from hope as an impression of the “not yet” in the present? What practical difference does it make?',
          'Potamianou warns that hope can become a fixation. Are there movements or institutions you think are sustained by “hope in hope”?',
          'Is Ahmed’s account of the feminist “we” persuasive? What would solidarity “on common ground” without shared feeling look like in your own work?',
          'The book ends with hope — what, if anything, do you think it hopes for?'
        ],
        glosses: [
          { q: 'Politics without hope is impossible', t: 'On hope', b: 'Hope has been theorised as a virtue (Aquinas), an affect (Spinoza: hope and fear are twin passions), a utopian drive (Bloch’s *The Principle of Hope*, 1938–47), and a political practice (Freire’s *Pedagogy of Hope*, 1992). Ahmed pays attention to its *object-directedness* (“hope is intentional”) and so to the risk that it becomes investment in a deferred promise (Chapter 6).', terms: ['hope'] },
          { q: '‘iterability’', t: 'Butler on repetition with a difference', b: 'Butler’s iterability (via Derrida) is the structural possibility that a norm is repeated with a difference. Ahmed says it would be a mistake to rest hope on it: it would “empty politics of work”. This is a quiet critique of a strand of poststructuralist optimism that treats failure of repetition as automatically subversive.', people: ['butler'] },
          { q: 'As Ernst Bloch suggests', t: 'Bloch and the expansive emotion', b: 'In *The Principle of Hope* (1986: 3) Bloch writes that hope is an “expectant emotion” that “goes out of itself, makes people broad instead of confining them”. He contrasts it with fear, which confines. Ahmed’s use directly contrasts Chapter 3: fear shrinks, hope expands.', people: ['bloch'] },
          { q: 'a disposition to be confident in the face of the future', t: 'Hage on hope', b: 'Ghassan Hage’s *Against Paranoid Nationalism* (2003) argues that hope is a social good that can be unevenly distributed: “paranoid nationalism” arises when the nation has too little hope to give. Ahmed’s note 6 criticises the suggestion that people need to be “cuddled” (cared for) before they can be hospitable — a version of New Labour’s multiculturalism (Chapter 6).', people: ['hage'] },
          { q: 'Anna Potamianou, for example, suggests', t: 'Potamianou’s psychoanalysis of hope', b: 'In *Hope: A Shield in the Economy of Borderline States* (1997), Potamianou describes how hope can serve as a defence against mourning, fixing the patient to a lost object. The psychoanalytic insight — that hope can be a way of *not* letting go — is the counter-voice to the philosophical hymns to hope. Ahmed responds by distinguishing hope that “animates” from hope that “encrypts” (a term from Abraham & Torok).' },
          { q: 'goes all the way down', t: 'Gender and hope', b: 'The critique of gender as pervasive (Butler’s *Gender Trouble*; Rubin’s “sex/gender system”) made 1970s–80s hopes for “de-gendering” (e.g., Nancy Chodorow’s co-parenting proposals) seem naïve. Ahmed says such hopes underestimated the *attachments* that make gender seem natural.' },
          { q: 'post-feminist vision of a present', t: 'Postfeminism', b: 'Angela McRobbie (*The Aftermath of Feminism*, 2009) and Rosalind Gill (“Postfeminist media culture”, 2007) analyse how feminism is “taken into account” and then declared over. Ahmed’s formulation — “a continuation of what we were against under our name” — anticipates her later critique of “happy” diversity talk and of neoliberal feminism (Rottenberg’s *The Rise of Neoliberal Feminism*, 2018).' },
          { q: 'Wendy Brown’s vision of a feminism that lets ‘our objects fly’', t: 'Letting objects fly', b: 'Brown (2003) imagines feminism ending its attachment to “women” and “gender” so as to become part of a broader transformative politics, mourning feminism’s own passing. Ahmed’s answer — keep the objects alive by getting closer — echoes the queer-grief section: neither letting go nor incorporating, but sharing impressions.', people: ['brown'] },
          { q: 'Chandra Talpade Mohanty’s (2003) term', t: 'Transnational solidarity', b: 'Mohanty’s *Feminism without Borders* (2003) argues for a feminism that accounts for global capitalism and “common context of struggle” without assuming a universal woman. Ahmed: solidarity does not assume the same pain, struggle, or hope; “we do live on common ground” — a phrase to hold on to for the Conclusion.', people: ['mohanty'], terms: ['solidarity'] }
        ]
      }
    ]
  });
})();
