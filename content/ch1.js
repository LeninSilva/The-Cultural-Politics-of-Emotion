/* Chapter 1: The Contingency of Pain — authored guide. */
(function () {
  CP.unit('ch1', {
    tagline: 'The feeling that seems most private — pain — turns out to make our bodies’ edges, bind us to others, and become a political currency.',
    claim: 'Pain is not simply the sensation that corresponds to bodily damage. It is an **intensification** that makes the body’s **surface** felt as a boundary between inside and outside — and because that boundary is made in **contact** with others, pain attaches us to a world of other bodies even as it seems to isolate us. Pain’s sociality demands an **ethics** (be moved by what you cannot know), and a **politics** (stories of pain are unevenly distributed, appropriated, and turned into entitlement or national healing).',
    glance: [
      'Start with a charity letter: “landmines” stands in for a history, while the reader’s *feelings* — not the victims’ — become the real subject.',
      'Phenomenology of pain: stubbed toes, period pain, Leder, Scarry. Pain makes borders by *violating* them.',
      'Politics of pain: Wendy Brown’s warning about “wounded attachments”, the market for suffering, and how the Australian report *Bringing Them Home* both testifies to pain and risks letting the white nation heal itself.',
      '“Contingency” = *contingere*, “to touch together”. Pain is a contingent attachment: what binds us to places and others without ensuring togetherness.'
    ],
    why: 'Most claims in public life are claims of injury: who has been hurt, who should be compensated, who deserves sympathy. Ahmed gives you a way of reading those claims without either dismissing them as “victimhood politics” or taking them at face value. She also models an ethics of reading someone else’s pain — one that refuses both cold detachment and the easy gesture of “I feel your pain”. If you’ve ever wondered why charity appeals make *you* the hero, why apologies can feel self-congratulatory, or how to engage testimonies of trauma, this chapter is a masterclass.',
    argument: {
      steps: [
        { h: 'Pain is political from the start', p: 'The Christian Aid letter turns “landmines” into an agent, conceals who laid them, addresses the reader as a feeling subject, and ends by *empowering the reader*. Charity’s “compassion” can reproduce the hierarchy between the one who has pain and the one who relieves it.' },
        { h: 'Pain can’t be reduced to damage', p: 'Medical science itself (Melzack & Wall; IASP) says pain involves memory, meaning and attribution. So the useful question is not what *determines* pain but what pain *does*.' },
        { h: 'Pain does surface-work', p: 'Following Freud’s “bodily ego”, Ahmed argues that the felt edge of the body arises in moments of intense sensation. Pain *intensifies* contact, giving us a sense of the border by violating it.' },
        { h: 'Reading the hurt', p: '“It hurts” → “you hurt me” → “you are hurtful” → “you are bad”. A feeling of contact becomes a reading of the other, and the border between self and other is made at the same time.' },
        { h: 'Pain is solitary but never private', p: 'Pain calls for a witness. Empathy (feeling *your* pain) often secures the difference it seeks to bridge. An ethics of pain asks us to act *about* what we cannot know, rather than appropriate it as “my sadness”.' },
        { h: 'Pain in the public domain', p: 'Wound culture (Brown) turns injury into identity and entitlement; the privileged can mobilise injury better; suffering is commodified. Yet forgetting repeats the violence. The task: remember how the wound came to be, and break the past’s hold.' },
        { h: 'The case: Australian reconciliation', p: '*Bringing Them Home* gathers testimonies of the Stolen Generations, but frames the response as “national shame”, allowing the nation to heal itself. Ahmed reads Fiona’s testimony as asking for an *impossible hearing* — and for a politics of living with the impossibility of reconciliation.' }
      ]
    },
    diagram: {
      title: 'Chapter 1: from a stubbed toe to a national apology', w: 620,
      nodes: [
        { id: 'a', x: 90, y: 80, w: 150, label: 'Pain is more than damage', sub: 'meaning, memory, reading', kind: 'b' },
        { id: 'b', x: 310, y: 80, w: 150, label: 'Intensification', sub: 'contact felt as a border', kind: 'a' },
        { id: 'c', x: 530, y: 80, w: 150, label: 'Surfaces appear', sub: 'skin, me/not-me', kind: 'c' },
        { id: 'd', x: 90, y: 210, w: 150, label: 'Solitary but not private', sub: 'witness; empathy’s limit', kind: 'c' },
        { id: 'e', x: 310, y: 210, w: 150, label: 'An ethics of not-knowing', sub: 'be moved by what isn’t yours', kind: 'e' },
        { id: 'f', x: 530, y: 210, w: 150, label: 'Politics of pain', sub: 'wounds, entitlement, uneven telling', kind: 'a' },
        { id: 'g', x: 310, y: 330, w: 330, label: 'Bringing Them Home — the nation heals itself; Fiona’s testimony asks us to hear what is impossible', kind: 'd' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 40 }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g' }, { from: 'e', to: 'g', dash: true }],
      caption: 'Read left to right, top row then bottom: from phenomenology (what pain does to a body) to ethics (how to respond) to politics (what happens when pain is told in public).'
    },
    context: [
      'Ahmed begins with pain because it seems to be the paradigm of the *immediate*, bodily and private. If even pain is mediated and social, then emotions generally are. The chapter draws from **phenomenology of embodiment** (Merleau-Ponty, Sartre, Leder, Grosz), **philosophy and literary theory of pain** (Wittgenstein, Scarry), **medical science** (Melzack & Wall; IASP), **psychoanalysis** (Freud’s bodily ego), and **political theory** (Nietzsche → Brown on ressentiment and “wounded attachments”).',
      'The political case is the **Stolen Generations** in Australia — Indigenous children forcibly removed from families under assimilation policies — and the 1997 *Bringing Them Home* report, a defining moment of the “reconciliation” debate. The chapter also gestures at the “testimonial culture” and “wound culture” literature in cultural studies (Ahmed & Stacey; Berlant; Kleinman, Das & Lock’s *Social Suffering*).'
    ],
    terms: ['pain', 'intensification', 'surfaces', 'contingency', 'contact', 'impression', 'sign', 'interpellation', 'fetishism', 'empathy', 'ethics-of-not-knowing', 'testimony', 'wounded-attachments', 'reconciliation', 'stolen-generations'],
    people: ['scarry', 'freud', 'leder', 'sartre', 'spelman', 'brown', 'nietzsche', 'hooks', 'grosz', 'butler', 'massumi'],
    sources: [
      { who: 'Elaine Scarry', work: 'The Body in Pain (1985)', role: 'Pain “shatters” language; it is felt as something external pressing into the body (weapon imagery); torture exploits this.', use: 'Pain’s *unrepresentability* coexists with its *over-representation*. Pain as negation/violation of the border.' },
      { who: 'R. Melzack & P. D. Wall', work: 'The Challenge of Pain (1996)', role: 'Gate-control theory; pain is not proportional to damage and depends on memory, attention and meaning.', use: 'Scientific warrant for treating pain as interpretive; she then turns from *what determines* pain to *what pain does*.' },
      { who: 'Sigmund Freud', work: 'The Ego and the Id (1923)', role: 'The ego is “first and foremost a bodily ego”, a projection of a surface; pain behaves like internal and external perception.', use: 'The psychoanalytic basis for “pain surfaces”.' },
      { who: 'Drew Leder', work: 'The Absent Body (1990)', role: 'The body “disappears” in ordinary functioning and returns to awareness in pain or dysfunction.', use: 'Used, then qualified: Ahmed prefers *intensification* to presence/absence, because it avoids implying bodies simply appear or vanish.' },
      { who: 'Jean-Paul Sartre', work: 'Being and Nothingness (1943)', role: 'Pain as a “contingent attachment to the world”.', use: 'Source of the chapter’s key term; Ahmed ties *contingency* to *contingere*, “to touch”.' },
      { who: 'Elizabeth V. Spelman', work: 'Fruits of Sorrow (1997)', role: 'Compassion can reinforce the subordination that causes suffering; distinguishes co-suffering from pity.', use: 'The feminist framework for critiquing charity discourse and empathy.' },
      { who: 'Wendy Brown', work: 'States of Injury (1995)', role: 'Politicised identities become attached to their wounds (Nietzschean ressentiment).', use: 'Ahmed agrees the wound-as-identity is fetishised, but rejects “forgetting” as the solution.' },
      { who: 'bell hooks', work: 'Talking Back: Thinking Feminist, Thinking Black (1989)', role: '“Not to forget the past but to break its hold.”', use: 'Gives the alternative to Brown/Nietzsche: remembering as a way of unbinding.' },
      { who: 'Bringing Them Home', work: 'Report of the National Inquiry (HREOC, 1997)', role: 'Collects testimonies of the Stolen Generations; frames response through healing, reconciliation, “national shame”.', use: 'The case study that shows pain’s uneven circulation and nation-building effects (continued in Chapter 5).' }
    ],
    conversation: [
      { h: 'Pain science caught up — partly', p: 'Contemporary pain science largely endorses the premise that pain isn’t proportional to tissue damage: the biopsychosocial model, central sensitisation, and Melzack’s later “neuromatrix” stress cognitive-affective and social contributors. The 2020 revision of the IASP definition retains the sensory/emotional duality. Ahmed’s distinctive step is that the *social* is not an add-on but constitutive of the bodily surface.' },
      { h: 'The politics of whose pain is believed', p: 'Empirical work on racial and gender bias in pain assessment (e.g., Hoffman et al. 2016 in *PNAS*, on false beliefs about biological differences) and on the “gender pain gap” turns Ahmed’s claim — that stories of pain are unevenly distributed — into a clinical fact.' },
      { h: 'Compassion politics under scrutiny', p: 'Ahmed’s reading of the charity appeal joins a broader critique of “spectacular” humanitarianism (Boltanski’s *Distant Suffering*; Chouliaraki’s *The Ironic Spectator*; Sontag’s *Regarding the Pain of Others*; Berlant’s edited *Compassion*). The shared worry: compassion centres the feeling spectator.' },
      { h: 'Wounded attachments revisited', p: 'Brown’s thesis remains a touchstone in debates on identity politics, trauma and “victimhood culture” (Campbell & Manning). Ahmed’s response — attend to *how* wounds enter politics, not the rhetorical form alone — has been developed by critics who see the charge of “victimhood” itself as a politics of delegitimating injury (cf. Berlant on the “National Sentimentality”).' },
      { h: 'Australian reconciliation after 1997', p: 'The Howard government refused a formal apology; Kevin Rudd delivered the National Apology on 13 February 2008; the Uluru Statement from the Heart (2017) asked for a constitutionally enshrined Voice, which was rejected in the October 2023 referendum. These events give Ahmed’s reading of shame, apology and “reconciliation” a long afterlife (see Chapter 5).' }
    ],
    debates: ['wounded-attachments', 'compassion-humanitarianism', 'national-apologies', 'affective-turn'],
    questions: [
      'The Christian Aid letter asks “What does this word mean to you now?” and answers “empowerment”. Think of a charity or campaign appeal you have seen: who is the protagonist? What is the emotional arc, and where does it leave the people in pain?',
      'Ahmed says empathy keeps the difference it wants to overcome. Do you accept that? Is there a better word — solidarity, witness, accountability — for what we owe to another’s pain?',
      'She insists pain is “solitary but never private”. Try to construct a counter-example: a pain that really has no relation to others. What would it take?',
      'Brown asks us to give up identity-as-wound; Ahmed asks us to remember in a way that “breaks the hold” of the past. What is the practical difference in, say, a workplace complaint or a reparations debate?',
      'Ahmed reads Fiona’s testimony “with you, but not as one.” What reading practices does this suggest for non-Indigenous readers (and for a book club discussing such a text)?'
    ],
    bridges: {
      back: 'The Introduction said emotions take shape in contact; here you see the argument at its most extreme, in a feeling often thought to be the least social — and the first appearance of *surfaces*, *impressions*, and *attachment*.',
      forward: 'Chapter 2 asks what happens when the feeling of injury is converted into *hate* for others — and introduces “affective economies”, which generalises the circulation of signs only glimpsed here (“landmines” as a sign).'
    },
    sections: [
      {
        title: 'Opening: Landmines and the Reader’s Feelings',
        gist: 'A charity letter makes “landmines” the cause of suffering, addresses the reader’s anger and sadness, and ends by “empowering” the reader. Ahmed uses it to show how pain circulates through signs, how the *reader’s feelings* become the subject of the story, and how compassion can conceal relations of power.',
        moves: [
          { h: 'A sign that conceals', p: '“Landmines” is turned from sign to agent; the humans who placed them, and the histories of war, vanish.' },
          { h: 'The letter is about *you*', p: 'The reader is interpellated as one who “probably” feels anger or sadness. Feeling *about* the other’s suffering keeps the other as the object of “our feeling” — alignment through differentiation.' },
          { h: 'Hope belongs to the reader', p: 'The overcoming of pain becomes a means to the reader’s empowerment; the charity (aligned with the reader) is the agent, the sufferer the beneficiary.' },
          { h: 'Generosity as fetish', p: 'The West “takes, then gives” — and the giving repeats and conceals the taking (Diprose; Spelman). Generosity becomes a national character trait.' },
          { h: 'Pain’s paradox', p: 'Pain is over-represented and unrepresentable (Scarry). So Ahmed will ask what claims to pain *do*, not what pain *is*.' }
        ],
        voice: 'I do not begin here to scold charities. I begin because the letter works so well — and its working is instructive. The word “landmines” does not have to be explained; it already carries injuries and wars. And yet the letter turns that history into a cause, and asks me to feel something that ends with my own sense of empowerment. If I want to speak about pain responsibly, I need to ask what I am doing when I am moved. Am I with the other, or am I turning her suffering into an occasion for my own feeling?',
        context: 'Ahmed’s critique builds on Spelman’s *Fruits of Sorrow* and on postcolonial critiques of humanitarian and development discourse. The notion that giving can conceal prior taking recalls Marcel Mauss’s *The Gift* (via Diprose’s *Corporeal Generosity*) and the gendered analysis of care. “Interpellation” is Althusser’s term for how ideology “hails” a subject.',
        objection: 'Is this uncharitable to the charity? One could argue that appeals necessarily use the donor’s feelings (that’s what appeals are) and that the letter reports real, beneficial work. Ahmed’s claim is structural: the *form* of the address, not the donor’s or charity’s intentions, positions sufferer and giver unequally. A critic might still ask for evidence of how readers actually respond.',
        terms: ['sign', 'interpellation', 'fetishism', 'empathy', 'aboutness'],
        people: ['spelman', 'scarry', 'diprose'],
        diagram: {
          title: 'The Christian Aid letter: how the reader gets empowered', w: 600,
          nodes: [
            { id: 'w', x: 100, y: 75, w: 150, label: 'The West “takes”', sub: 'war, debt, economic relations', kind: 'ghost' },
            { id: 'p', x: 300, y: 75, w: 150, label: 'Others in pain', sub: 'fixed as the ones who “have” pain', kind: 'b' },
            { id: 'l', x: 500, y: 75, w: 150, label: '“Landmines”', sub: 'sign becomes agent', kind: 'a' },
            { id: 'r', x: 500, y: 200, w: 150, label: 'Reader feels anger / sadness', sub: 'pain becomes “our sadness”', kind: 'c' },
            { id: 'g', x: 300, y: 200, w: 150, label: 'Gift', sub: '“your regular support”', kind: 'c' },
            { id: 'e', x: 100, y: 200, w: 150, label: 'Reader empowered', sub: 'charity + reader = agent', kind: 'e' },
            { id: 'c', x: 300, y: 320, w: 380, label: 'The giving repeats and conceals the taking: generosity becomes a national character', kind: 'd' }
          ],
          edges: [{ from: 'w', to: 'p', dash: true }, { from: 'p', to: 'l' }, { from: 'l', to: 'r' }, { from: 'r', to: 'g', label: 'moves to give' }, { from: 'g', to: 'e' }, { from: 'e', to: 'c', strong: true }, { from: 'c', to: 'w', curve: -90, dash: true, label: 'forgotten' }],
          caption: 'The circuit makes the reader’s feelings the engine of the story. The other’s pain is overcome — but the overcoming is “for” the reader’s empowerment.'
        },
        questions: [
          'Where does the letter locate agency? Reread the epigraph and mark every active verb and who performs it.',
          'Do you recognise “anger” and “sadness” as the emotions you are supposed to have? What would an appeal look like that did not script the reader’s feelings?'
        ],
        glosses: [
          { q: 'interpellated', t: 'Interpellation (Althusser)', b: 'Louis Althusser’s “Ideology and Ideological State Apparatuses” (1970) imagines a police officer calling “Hey, you there!” — the person who turns round becomes a subject. Ahmed reads emotion-scripts the same way: the address “you probably feel…” hails a subject whose feelings are presumed. Butler’s *Psychic Life of Power* reworks the idea around guilt and subjection.', terms: ['interpellation'] },
          { q: 'Fruits of Sorrow', t: 'Spelman on compassion', b: 'Spelman’s *Fruits of Sorrow: Framing Our Attention to Suffering* (1997) analyses how Western moral discourse frames who deserves attention, treating suffering as an occasion for the compassionate subject. Her distinction between *compassion* (co-suffering) and *pity* (sorrow for) underlies Ahmed’s later claim that “empathy sustains the very difference it seeks to overcome”.', people: ['spelman'], terms: ['empathy'] },
          { q: 'the West takes, then gives', t: 'The gift that conceals a debt', b: 'The critique echoes postcolonial economics (aid as a continuation of extraction) and Mauss’s *The Gift*: gifts create obligation and hierarchy. Ahmed connects it to *fetishism*: the generosity appears as a trait of the giver (“we are generous”) by forgetting the labour and resources that enable the giving. The same structure returns in Chapter 6’s “multicultural love”.', terms: ['fetishism'] },
          { q: 'shatters', t: 'Scarry: pain destroys language', b: 'Scarry’s *The Body in Pain* argues that pain “has no voice” and destroys the sufferer’s language, while torture and war *use* that unsharability to make power seem real. Ahmed accepts that pain resists description but refuses the conclusion that it is therefore unrepresentable: *claims* to pain are everywhere, and they do things.', people: ['scarry'] }
        ]
      },
      {
        title: 'Pain Surfaces',
        gist: 'Pain is more than a sensation caused by damage; it involves meaning, memory and reading. Ahmed proposes that pain *intensifies* contact so that the border of the body is felt — surfaces “surface” in moments of hurt — and that this contact is also a reading of the other as hurtful.',
        moves: [
          { h: 'The medical definition already says so', p: 'IASP: pain is subjective, more than elementary sensation, tied to aversive states, with attribution of meaning intrinsic. Melzack & Wall: pain is not proportional to damage.' },
          { h: 'Shift the question', p: 'From “what determines pain?” to “what does pain *do*?”' },
          { h: 'Freud’s bodily ego', p: 'The ego is a projection of a surface; pain, an internal perception triggered externally, helps establish the skin as a border.' },
          { h: 'The stubbed toe', p: 'Sensation → “it hurts” (reading) → “it is bad” (judgement) → move away. The surface is felt *in* the event — not before it, and not as a simple cause.' },
          { h: 'Intensification & materialisation', p: 'Linking Butler’s materialisation to *intensification*: borders and worlds take shape through intense encounters — and what makes the border also unmakes it (skin both separates and connects).' },
          { h: 'Leder, Scarry, Grosz', p: 'The body returns to awareness through pain; pain is felt as an intrusion of something other (weapons, knives, blood). The wound is the trace of a surface impressing on another. Ordinary experience is the absence of perception, not the absence of body.' },
          { h: 'Contingency and contact', p: 'Pain is a “contingent attachment to the world” (Sartre); *contingere* = to touch. We are touched differently by different others.' },
          { h: 'From hurt to reading', p: '“It hurts” → “you hurt me” → “you are hurtful” → “you are bad”: a feeling of contact converts into a reading of the other, making borders and values at once.' }
        ],
        voice: 'I do not claim pain causes the body. Nor do I claim that the body is simply there and pain happens to it. Pain is where bodies announce their edges: the table presses on my toe, I say “ouch”, I move; the toe, the table, the “me” and the “not me” appear in that event. And what I read as the source of pain becomes something I turn away from — which is why “it hurts” can become “you are hurtful” before I notice. If this is so, then pain is already a form of relation, even when it is mine alone.',
        context: 'This section draws a line from Freud through phenomenology (Merleau-Ponty, Sartre, Leder) and feminist philosophy of the body (Grosz) to Butler on materialisation. The scientific references (gate theory, chronic pain) are used to secure the claim that pain is not a mere reflex. The period-pain passage is a deliberate feminist intervention: she asks why such pain has not been theorised in phenomenology (note 6).',
        objection: 'Is the claim “pain makes the surface” testable, or a re-description? Phenomenologists might say bodily boundaries precede pain (proprioception, touch). Ahmed grants this (“I do already have a sense of my body surface”) and instead claims that *intensification* is what makes the surface salient. Neuroscientists will want a distinction between body schema and body image; Ahmed does not provide one.',
        terms: ['pain', 'intensification', 'surfaces', 'contingency', 'contact', 'impression'],
        people: ['freud', 'butler', 'leder', 'sartre', 'scarry', 'grosz'],
        diagrams: [
          {
            title: 'The stubbed toe: how a surface surfaces', w: 620,
            nodes: [
              { id: 'c', x: 80, y: 90, w: 110, label: 'Contact', sub: 'toe meets table', kind: 'b' },
              { id: 's', x: 205, y: 90, w: 110, label: 'Sensation', sub: 'intense impression', kind: 'b' },
              { id: 'r', x: 330, y: 90, w: 110, label: '“It hurts”', sub: 'reading', kind: 'a' },
              { id: 'j', x: 455, y: 90, w: 110, label: '“It is bad”', sub: 'judgement', kind: 'a' },
              { id: 'm', x: 560, y: 90, w: 100, label: 'Move away', sub: 'orientation', kind: 'c' },
              { id: 'h', x: 330, y: 215, w: 220, label: 'Past impressions, memories, what I already know', kind: 'ghost' },
              { id: 'f', x: 330, y: 310, w: 260, label: 'The surface is felt as “being there” — body and table take shape', kind: 'e' }
            ],
            edges: [{ from: 'c', to: 's' }, { from: 's', to: 'r' }, { from: 'r', to: 'j' }, { from: 'j', to: 'm' }, { from: 'h', to: 'r', dash: true, label: 'shape the feel' }, { from: 'm', to: 'f', curve: 40 }, { from: 'r', to: 'f', strong: true }],
            caption: 'Not a causal chain but a *slide*: sensation, reading and orientation are folded into one event, and the surface is an effect of it.'
          },
          {
            title: 'From “it hurts” to “you are bad”', w: 620,
            nodes: [
              { id: 'a', x: 80, y: 80, w: 110, label: '“It hurts”', kind: 'b' }, { id: 'b', x: 215, y: 80, w: 120, label: '“You hurt me”', kind: 'a' },
              { id: 'c', x: 360, y: 80, w: 130, label: '“You are hurtful”', kind: 'a' }, { id: 'd', x: 505, y: 80, w: 120, label: '“You are bad”', kind: 'a' },
              { id: 'x', x: 300, y: 195, w: 400, label: 'Each step fixes an other, creates the border between self and other, and gives the other meaning and value', kind: 'e' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'x', dash: true }, { from: 'c', to: 'x', dash: true }],
            caption: 'The conversion that Chapter 2 will turn into a theory of hate.'
          }
        ],
        questions: [
          'Try Ahmed’s reading on a recent minor pain of your own: where in the sequence from “it hurts” to “it is bad” did a *reading* of the cause enter?',
          'She says pain recalls us to the body, and then qualifies Leder. Is *intensification* a better word than *presence*? What does it let her say?',
          'What changes if we accept that the skin is “felt only in the event of being ‘impressed upon’”? Think of a time you were touched (or not touched) by someone and became more aware of your own edges.'
        ],
        glosses: [
          { q: 'the gateway theory of pain', t: 'Gate-control theory', b: 'Melzack and Wall (1965) proposed that spinal “gates” modulate pain signals depending on other input (touch, attention, descending brain signals) — which explained why rubbing a bump relieves pain and why emotion alters pain. It broke the 1-to-1 mapping of stimulus and sensation that Ahmed’s section depends on. The theory has been revised, but the core idea that the *brain actively constructs pain* remains central.' },
          { q: 'first and foremost a bodily ego', t: 'Freud’s bodily ego', b: 'In *The Ego and the Id* (1923) Freud writes that the ego “is first and foremost a bodily ego; it is not merely a surface entity, but is itself the projection of a surface.” A footnote in the 1927 English edition (approved by Freud) adds that the ego “is ultimately derived from bodily sensations, chiefly from those springing from the surface of the body”. Didier Anzieu’s *The Skin Ego* later builds a theory on this. Ahmed uses it to say that *pain is an instance of how the surface is projected*.', people: ['freud'] },
          { q: 'what I would call intensification', t: 'Intensification — Ahmed’s working concept', b: 'Not to be confused with Massumi’s “intensity” as pre-personal affect: for Ahmed, intensification is the *amplification of contact* that makes boundaries felt and so makes bodies “surface”. It is also *economic* in the sense that the more intense the sensations, the more the surface is felt. See note 4 for her explicit disagreement with Massumi’s sensation/emotion split.', terms: ['intensification'], people: ['massumi'] },
          { q: 'the effect of boundary, fixity and surface', t: 'Butler’s materialisation, again', b: 'Butler’s phrase (from *Bodies That Matter*, 1993) is used in the Introduction. Here Ahmed ties it to *felt* intensity: materialisation isn’t only discursive repetition but also sensory impression. This is her way of keeping Butler’s account of norms while insisting that bodies *feel* the impact of the world.', people: ['butler'] },
          { q: 'The Absent Body', t: 'Leder’s dys-appearance', b: 'Drew Leder’s phenomenology of the body argues that the body “disappears” in skilled activity and reappears in “dys-appearance” (pain, illness). Ahmed’s response is to replace presence/absence with *intensity* and to note that chronic pain (note 7) makes the intense ordinary — a point developed in disability studies and critical phenomenology (e.g., Havi Carel’s *Phenomenology of Illness*; Sara Ahmed’s later *Queer Phenomenology*, 2006).', people: ['leder'] },
          { q: 'a contingent attachment to the world', t: 'Sartre’s phrase', b: 'Sartre’s *Being and Nothingness* describes pain as the facticity of the body: an attachment to the world that is *contingent* because it could have been otherwise and depends on what the body is doing. Ahmed’s etymological gloss — *contingere*, to touch — turns the phrase into a theory of *sociality*: what touches us, attaches us.', people: ['sartre'], terms: ['contingency'] },
          { q: '‘it hurts’ becomes, ‘you hurt me’', t: 'The hinge to Chapter 2', b: 'This sequence is the chapter’s “thesis in small”. It shows *attribution of cause* as an affective event with moral content, and anticipates Chapter 2’s account of hate: the conversion of injury into the reading of others as *injurious*. See also Chapter 7’s account of how “discomfort” is read onto others (“you are making me uncomfortable”).', terms: ['affective-economies'] }
        ]
      },
      {
        title: 'The Sociality of Pain',
        gist: 'Pain is solitary but never private: it calls for a witness. Drawing on her mother’s pain, Ahmed argues that empathy keeps the difference it would overcome, and proposes an ethics of being moved by what one cannot know or feel.',
        moves: [
          { h: 'Solitary ≠ private', p: 'The loneliness of pain generates a need to be witnessed. A truly private pain would be a suicide without a note — and even that seeks a later witness.' },
          { h: 'Wittgenstein’s question', p: 'What about the pain of others? Ahmed answers in the first person: living with her mother’s pain (multiple sclerosis, later re-diagnosed).' },
          { h: 'Witnessing', p: 'Witnessing gives pain the status of an *event*, a happening in the world, “a life outside the fragile borders of her … body”.' },
          { h: 'Empathy as wish', p: 'I want to feel your pain, but only insofar as I don’t already have it. Empathy preserves difference; it is a “wish feeling”.' },
          { h: 'An ethics of the ungraspable', p: 'I cannot feel her pain, but I am affected anyway. The ungraspability of her pain makes my own pain ungraspable: I am “undone, before her, and for her”.' },
          { h: 'The ethical demand', p: 'Act about what you cannot know rather than only as you know — otherwise you appropriate her pain as your own and convert it into “our sadness”.' }
        ],
        voice: 'I have been criticised, and I accept it, for writing about my mother’s pain. What I wanted to say is that her pain was not only hers: it organised our shared life, it asked me to be there, it opened me to something I could not feel. I do not want to say that I felt what she felt — that would be a kind of theft. Rather, her pain returned me to my own body, as unknowable. It is in this undoing, and not in knowledge, that I find an ethics.',
        context: 'The section converses with Wittgenstein’s “private language” argument, with Levinas’s ethics of the Other (not cited but strongly present), with Butler’s *Precarious Life* and *Giving an Account of Oneself* (on opacity and being undone), and with feminist work on care. The first-person intrusion models “contact writing” (Introduction).',
        objection: 'Is it a problem to move from the ethics of one’s mother to politics at large? Or to claim an ethics of “not knowing” when much care work *requires* knowing (what medicine, what dose)? Another line of critique: Ahmed’s account may be too individualistic — the witness is a single person, whereas social movements need collective forms of recognition.',
        terms: ['empathy', 'ethics-of-not-knowing', 'testimony', 'contingency'],
        people: ['wittgenstein', 'scarry', 'levinas', 'butler'],
        diagram: {
          title: 'Two ways of answering another’s pain', w: 620,
          zones: [{ x: 10, y: 38, w: 295, h: 270, label: 'Empathy as appropriation' }, { x: 320, y: 38, w: 295, h: 270, label: 'Ethics of the ungraspable' }],
          nodes: [
            { id: 'a1', x: 158, y: 105, w: 220, label: '“I know how you feel”', kind: 'b' }, { id: 'a2', x: 158, y: 175, w: 220, label: 'I imagine feeling your pain for you', sub: '(only insofar as I don’t have it)', kind: 'b' }, { id: 'a3', x: 158, y: 255, w: 220, label: 'Your pain → “my sadness”', sub: 'difference is sustained, pain neutralised', kind: 'a' },
            { id: 'b1', x: 468, y: 105, w: 220, label: '“I cannot know how you feel”', kind: 'c' }, { id: 'b2', x: 468, y: 175, w: 220, label: 'I believe it, more and more', sub: 'and my own pain becomes uncertain', kind: 'c' }, { id: 'b3', x: 468, y: 255, w: 220, label: 'Undone, before her and for her', sub: 'act about what I cannot know', kind: 'e' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3', strong: true }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3', strong: true }],
          caption: 'The left column is the structure of the Christian Aid letter. The right column is the structure Ahmed proposes for a hearing that does not take.'
        },
        questions: [
          'Do you read Ahmed’s mother as “the example” of a general claim or as a person whose story is being used? How does her use of the personal differ from the charity letter’s use of the story of Chamreun?',
          'Think about someone you have cared for. Where did empathy help, and where did it become “a wish feeling”?',
          'Is “acting about what I cannot know” a workable ethic for institutions (hospitals, courts, schools)?'
        ],
        glosses: [
          { q: 'Wittgenstein’s (1964) question', t: 'Wittgenstein on pain', b: 'In the *Blue and Brown Books* (the edition Ahmed cites) and the *Philosophical Investigations* (§§243–315), Wittgenstein argues against a private language of sensations and notes the oddity of “I know I am in pain”. The section on “other minds” (“What about the pain of others?”) is the background for Ahmed’s claim that pain’s apparent privacy is a *social grammar*: it only becomes a problem within language shared with others.', people: ['wittgenstein'] },
          { q: 'a ‘wish feeling’', t: 'Empathy and its critics', b: 'Ahmed’s argument anticipates later critiques of empathy (Paul Bloom’s *Against Empathy*, 2016, makes a different, consequentialist case; Lauren Berlant’s “Introduction: Compassion (and Withholding)” in *Compassion*, 2004; Saidiya Hartman’s *Scenes of Subjection* on how empathy re-centres the white witness by imagining oneself in the slave’s place). Note 9 lists the variants of “fellow-feeling” — sympathy, compassion, pity — that Ahmed lumps together because each depends on *fantasy*.', terms: ['empathy'] },
          { q: 'an ethics of responding to pain involves being open to being affected by that which one cannot know or feel', t: 'The ethical claim', b: 'Compare Levinas: the Other’s face makes an infinite demand that exceeds my comprehension; and Butler (*Giving an Account of Oneself*): ethics begins in *opacity*, not in transparent knowledge. Ahmed’s emphasis is on the **body** of the one who responds being “called back to its surfaces”. Subsequent feminist care ethics (Kittay, Tronto) would want to add: but caring requires practical knowledge — a tension worth raising at book club.', terms: ['ethics-of-not-knowing'], people: ['levinas', 'butler'] },
          { q: 'I am undone, before her, and for her', t: '“Undone”', b: 'The vocabulary of undoing is Butler’s (*Undoing Gender*, 2004; *Precarious Life*, 2004): to be moved by the other is to lose possession of oneself. For Ahmed it marks the difference between being *affected* and being *informed*.', people: ['butler'] }
        ]
      },
      {
        title: 'The Politics of Pain',
        gist: 'How pain enters politics: Wendy Brown warns that wounds become identities; Ahmed agrees on the fetishism but insists on remembering how the wound came to be. She then reads *Bringing Them Home*, showing how “national shame” and healing can let the white nation absorb Indigenous pain — and how Fiona’s testimony demands an “impossible hearing”.',
        moves: [
          { h: 'Don’t flatten pain', p: 'A political model cannot gather all pains into one group; pain produces *uneven* effects.' },
          { h: 'Brown: wounded attachments', p: 'Following Nietzsche, politics built on injury becomes reactive, tying identity to the history of harm (ressentiment).' },
          { h: 'Ahmed: fetishism of the wound', p: 'Making the wound an identity cuts it from the history of *getting hurt*. Testimonial culture, spectacles of suffering, a global “market for suffering”, and the culture of compensation all circulate pain as an equivalent unit.' },
          { h: 'Entitlement and privilege', p: 'The normative subject is secured through narratives of injury (the “hurt” white man). Privileged subjects have more access to mobilise injury; but we should not read all injury narratives as the same (Gutiérrez-Jones).' },
          { h: 'Don’t forget — break the hold', p: 'Forgetting would repeat the violence. Following hooks, remember to “break the hold” of the past; the past is living in open wounds.' },
          { h: 'Bringing Them Home', p: 'Collective trauma damages “the skin of the community”. The report’s call for “national shame” turns Indigenous pain into the nation’s pain; the nation’s skin is sealed and healed.' },
          { h: 'Reading Fiona', p: 'Ahmed reads a testimony closely and refuses to claim it. The mother’s pain is ungraspable even by the daughter; Fiona refuses to blame the missionaries; the reader’s anger finds no object. The testimony calls for a politics of living *beside* each other, “not as one”.' }
        ],
        voice: 'Brown is right that a politics that only reacts to injury can bind us to the history that hurt us. But the cure cannot be to forget. Those who have not yet had their pain recognised cannot be asked to forget it. What I want is to ask how a wound came to be a wound, who was behind its making, and how the wound is told. When a nation says “we are ashamed”, I want to ask who is doing the healing and who is being healed. When I read Fiona’s story, I do not want to turn it into an occasion for my feelings. I want to be affected by what I cannot know, and to let that affect move me to act with and beside, not for.',
        context: 'Wendy Brown’s *States of Injury* (1995) is the main antagonist; its roots are Nietzsche’s *Genealogy of Morals*. The Australian context is the 1997 *Bringing Them Home* report by HREOC, a watershed in settler-colonial reckoning; the Governor-General’s preface (cited in the text) frames shame as national rather than personal. Ahmed’s “impossible hearing” echoes Derrida’s “impossible” as the condition of ethics and Spivak’s “Can the Subaltern Speak?” (the danger of claiming to speak for others).',
        objection: 'Critics from different directions: (1) from the left, that Ahmed lets Brown off lightly — a politics of injury can be politically disabling; (2) from the right, that “national shame” is exactly the right response to historic wrongs; (3) from Indigenous scholars, that the settler reader’s “un-housing” and self-examination risks centring the settler once more — a move Ahmed anticipates but cannot fully escape. Eve Tuck & K. Wayne Yang’s “Decolonization is not a metaphor” (2012) is the sharpest version of this critique.',
        terms: ['wounded-attachments', 'fetishism', 'testimony', 'reconciliation', 'stolen-generations', 'ethics-of-not-knowing'],
        people: ['brown', 'nietzsche', 'hooks', 'butler'],
        diagrams: [
          {
            title: 'Two ways a wound can enter politics', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 285, label: 'Wound as identity (fetish)' }, { x: 320, y: 38, w: 295, h: 285, label: 'Remembering how it came to be' }],
            nodes: [
              { id: 'a1', x: 158, y: 100, w: 220, label: 'Injury becomes who I am', kind: 'a' }, { id: 'a2', x: 158, y: 175, w: 220, label: 'Cut off from the history of “getting hurt”', kind: 'a' }, { id: 'a3', x: 158, y: 255, w: 220, label: 'Equivalence: injury as entitlement / spectacle / market', kind: 'ghost' },
              { id: 'b1', x: 468, y: 100, w: 220, label: 'Ask how the surface was wounded', kind: 'c' }, { id: 'b2', x: 468, y: 175, w: 220, label: 'Keep the past open: “break its hold” (hooks)', kind: 'c' }, { id: 'b3', x: 468, y: 255, w: 220, label: 'Collective politics, uneven stories attended to', kind: 'e' }
            ],
            edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
            caption: 'Brown’s fix is to give up the wound; Ahmed’s is to remember it differently. Neither is “forgetting”.'
          },
          {
            title: '“National shame” and the skin of the nation', w: 620,
            nodes: [
              { id: 'i', x: 105, y: 80, w: 160, label: 'Indigenous testimonies', sub: 'individual stories of loss', kind: 'b' },
              { id: 'r', x: 310, y: 80, w: 150, label: 'Bringing Them Home', sub: 'gathered, healing, listening', kind: 'a' },
              { id: 'w', x: 515, y: 80, w: 150, label: 'White readers', sub: '“not personal guilt”', kind: 'ghost' },
              { id: 'n', x: 310, y: 200, w: 200, label: '“National shame”', sub: 'nation as the subject of feeling', kind: 'c' },
              { id: 'h', x: 310, y: 310, w: 280, label: 'Healing the wound = sealing the nation’s skin; reconciliation as making others fit', kind: 'd' },
              { id: 'f', x: 80, y: 310, w: 130, label: 'Fiona: an impossible hearing', kind: 'e' }
            ],
            edges: [{ from: 'i', to: 'r' }, { from: 'r', to: 'n' }, { from: 'w', to: 'n', dash: true, label: 'allowed to disappear' }, { from: 'n', to: 'h', strong: true }, { from: 'f', to: 'h', dash: true, label: 'unsettles', both: false }],
            caption: 'Indigenous people give the stories; the nation receives the feeling and the healing. The result is that “their pain slides into national pain”.'
          }
        ],
        questions: [
          'Brown thinks politics grounded in injury is reactive; Ahmed thinks forgetting would repeat the injury. Where does your own politics fall? Is there a third option?',
          'The Governor-General says “national shame” without “personal guilt”. What does that division allow, and what does it excuse?',
          'Ahmed reads Fiona’s testimony closely but insists “it is not about me”. How should *we* read testimonies as a book club — what practices keep us from turning them into occasions for our own feelings?',
          'The chapter ends: “we live with and beside each other, and yet we are not as one.” What would politics look like on that basis?'
        ],
        glosses: [
          { q: 'Nietzsche’s model of resentiment', t: 'Ressentiment', b: 'In *On the Genealogy of Morals* (1887) Nietzsche describes ressentiment as the reactive resentment of the powerless who invent a morality in which their weakness is virtue. Brown (1995) appropriates it to critique identity politics grounded in injury; Ahmed’s Chapter 8 will challenge the *reaction/action* distinction that underlies it (note 10).', people: ['nietzsche', 'brown'], terms: ['wounded-attachments'] },
          { q: 'fetishisation of the wound', t: 'Wound fetishism', b: 'Ahmed borrows “fetishism” from Marx (value detached from labour) and Freud (a substitute object disavowing a lack). Here the wound is detached from the *history* of its making and made a free-standing sign of identity. Compare Lauren Berlant’s “national sentimentality” (the US public sphere’s use of pain as a claim to citizenship).', terms: ['fetishism', 'wounded-attachments'] },
          { q: 'testimonial culture', t: 'Testimony culture', b: 'Ahmed & Stacey (eds.), *Testimonial Cultures* (2001), a special issue of *Cultural Values*. The wider literature includes Shoshana Felman and Dori Laub’s *Testimony* (1992), and critical commentary on truth commissions (South Africa’s TRC). A recurring question: who is positioned to *tell*, and who is positioned to *receive* and be redeemed by the telling?', terms: ['testimony'] },
          { q: 'There is a market for suffering', t: 'Social Suffering', b: 'Kleinman, Das and Lock edited *Social Suffering* (1997), an anthropological analysis of how institutions mediate and commodify suffering. The line “victimhood is commodified” anticipates later work on “trauma economies”, humanitarian branding, and the NGO complex.' },
          { q: 'not to forget the past but to break its hold', t: 'hooks and the politics of memory', b: 'bell hooks, *Talking Back* (1989: 155). The formula separates *remembering* from *conserving*: memory as a weapon against the past’s power. Ahmed will repeat the move in Chapter 8: the past “remains open in the present”.', people: ['hooks'] },
          { q: 'Bringing Them Home', t: 'The 1997 report', b: 'The National Inquiry into the Separation of Aboriginal and Torres Strait Islander Children from Their Families (Human Rights and Equal Opportunity Commission), chaired by Sir Ronald Wilson and Mick Dodson, was tabled in 1997 (the book’s text dates the document 1996). Its 54 recommendations included a national apology and reparations; the Howard government declined a formal apology. See the Chapter 5 guide for the apology debate.', terms: ['stolen-generations', 'reconciliation'] },
          { q: 'national shame rather than personal guilt', t: 'Shame vs guilt', b: 'The Governor-General’s preface separates *guilt* (individual blameworthiness) from *shame* (collective identity). The distinction has a long philosophical lineage — Karl Jaspers on German guilt, Bernard Williams’s *Shame and Necessity*, Martha Nussbaum — and is critiqued by Ahmed in Chapter 5, where shame serves *nation building*.', terms: ['national-shame'] },
          { q: 'reconciliation has a double meaning', t: 'Nicoll on reconciliation', b: 'Fiona Nicoll (1998, “B(l)acklash: Reconciliation after Wik”) notes that “reconcile” can mean *coming to terms with* or *making passive* — to reconcile someone to their fate. The semantic doubleness becomes a political diagnosis: reconciliation as assimilation. See also Aileen Moreton-Robinson’s *Talkin’ Up to the White Woman* (2000) on white feminist “possessive” positions.', terms: ['reconciliation'] },
          { q: 'un-housing', t: 'Settler implication', b: 'Ahmed’s “un-housing” — recognising “that where one lived was not one’s home to give or to give up” — is an early version of what later became *settler colonial studies* (Patrick Wolfe: “invasion is a structure not an event”) and the critique of settler “moves to innocence” (Tuck & Yang 2012). The risk she flags (“it is not premised on giving up one’s home”) differs from decolonial demands for land return.', terms: ['stolen-generations'] },
          { q: 'learn how to hear what is impossible', t: 'An impossible hearing', b: 'Here Ahmed stages a deliberately aporetic ethics: hearing is demanded, but hearing as comprehension is a violation. Compare Gayatri Spivak’s “Can the Subaltern Speak?” (1988), where *listening* is the responsibility of those who would speak *for*, and Derrida on the “impossible” as the structure of justice and hospitality.', terms: ['ethics-of-not-knowing'] }
        ]
      }
    ]
  });
})();
