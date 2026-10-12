/* Glossary, part 1: Ahmed's core concepts and the named emotions. (Original explanatory entries.) */
(function () {
  var list = [];
  function T(id, name, cat, auto, o) { o.id = id; o.name = name; o.cat = cat; o.auto = auto; list.push(o); }

  /* ---------------- CORE CONCEPTS ---------------- */
  T('affective-economies', 'Affective economies', 'core', ['affective economies', 'affective economy'], {
    short: 'The idea that emotions do not sit inside subjects or objects but are produced and accumulated as signs and figures **circulate** — so “value” builds up in them the more they move.',
    long: 'The term borrows from Marx’s picture of capital: a commodity gains value as it circulates in exchange, not because value sits inside it. Ahmed applies the structure to emotion: a word like “bogus” or a figure like “the asylum seeker” becomes more emotionally charged each time it is repeated, linked to other words, and attached to bodies. The result is that hate, fear or disgust *seem* to belong to the object — as if the stranger were intrinsically threatening — when they are effects of circulation.\n\nBecause the economy is relational (a sign gets its force from difference from other signs), no single subject or object is its origin or end. The subject is “one nodal point” in the economy.',
    ahmed: 'In Ahmed’s most charitable framing she is not saying emotions are “only” discourse. She is making a claim about *where to look*: when a feeling feels immediate and natural, ask what history of circulation made it available. The model is deliberately partial (she concedes the Marx analogy is limited) and is meant as an aid to description, not a complete psychology.',
    genealogy: 'Marx’s analysis of commodity circulation (M–C–M′) in *Capital*; Freud’s displacement of affect from one idea to another (“The Unconscious”, 1915); Saussurean and Derridean accounts of meaning as difference. Ahmed introduced the term in Chapter 2 and kept it in *Strange Encounters*/*Promise of Happiness*; later scholars use it for migration, nationalism, and online outrage.',
    example: '“Flood”, “swamped”, “overwhelmed” attached to asylum in UK speeches, then to “bogus”, “burglar”, “terrorist”: the figure accumulates menace without any fact about a particular person.',
    misread: 'It is not the claim that emotions are “fake” or merely rhetorical. Nor is it a literal market of feelings; “economy” names a *logic of circulation and accumulation*.',
    related: ['sticky', 'circulation', 'affective-value', 'fetishism', 'metonymy', 'displacement'],
    people: ['marx', 'freud', 'lacan'], units: ['ch2', 'ch3', 'ch4', 'afterword'],
    questions: ['What is the “value” accumulating in a political slogan you know? Who benefits from its accumulation?', 'Where does the Marx analogy help, and where does it break?']
  });

  T('sticky', 'Stickiness / sticky signs', 'core', ['sticky signs', 'sticky sign', 'stickiness', 'sticky'], {
    short: 'The way signs, objects and bodies become bound together through histories of contact, so that some associations resist change; stickiness is an **effect** of those histories, not a property.',
    long: 'A sign is “sticky” when it brings with it other words and images that are not spoken — a slur evokes “dirty”, “outsider”; “terrorist” slides towards “Muslim”. Stickiness works through repetition and concealment: the associations are hidden, which lets the sign accumulate affective value. Objects and bodies can be sticky too: they pick up elements through contact and carry them forward.\n\nStickiness is double: it **binds** (it holds elements together, producing cohesion) and **blocks** (it stops movement, making change hard). That double function is why it is a good name for both attachment and impasse.',
    ahmed: 'The most generous reading treats “sticky” as a descriptive rather than explanatory term: it directs us to ask *why some associations hold*. Ahmed is explicit that things can become unstuck — the hopeful note of the Introduction (“things can get unstuck”) and Chapter 8.',
    genealogy: 'Sartre on “the slimy”, Miller and Tomkins on disgust and contact, Derrida on iterability (signs can be cut off from context — but resist), Butler on performativity and sedimentation. Ahmed makes it central in Chapter 4 (“On Stickiness”).',
    example: 'A word that cannot be reclaimed no matter how often it is repeated innocently; a brand or sign that sticks to a community; “the flag” sticking to other flags to make the nation look coherent.',
    misread: 'It does not mean “permanent” or “natural”. Nor is it a metaphor you can unpack by finding the one origin; it is about *chains* of contact.',
    related: ['sign', 'metonymy', 'affective-economies', 'fetishism', 'performativity', 'attachment'],
    people: ['sartre', 'miller', 'butler', 'derrida', 'grosz'], units: ['intro', 'ch2', 'ch3', 'ch4', 'ch6'],
    questions: ['Choose a word that “sticks”. What unspoken words stick to it?', 'Is stickiness explanatory, or a useful description of persistence?']
  });

  T('circulation', 'Circulation (of objects of emotion)', 'core', ['circulation'], {
    short: 'The movement of **objects of emotion** — figures, signs, words, images — between bodies and contexts; for Ahmed it is objects, not feelings, that circulate.',
    long: 'Popular and scientific models (contagion, transmission) say that a feeling passes from person to person, staying the same. Ahmed argues that what circulates is something around which people orient: a figure of hate, a happy object, the nation. Because people can be oriented to the same object while feeling differently, circulation can produce tension as well as cohesion.\n\nCirculation is also uneven: some objects stick to some bodies and slide past others, which is why “what goes round does not always come round”.',
    ahmed: 'Charitably: Ahmed is not denying that affects can be passed between bodies (the Afterword says so explicitly). She is warning against models that assume smooth sharing and neglect how feelings are blocked, resisted and unequally distributed.',
    genealogy: 'Marx on commodity circulation; Freud on displacement; Tomkins/Izard on emotional contagion (her foil); later Brennan’s “transmission”.',
    example: 'A crowd at a funeral shares an object (the dead) but not identical feelings; a viral image circulates, with very different reactions.',
    misread: 'It does not mean feelings are not felt, or that circulation is smooth and equal.',
    related: ['affective-economies', 'contagion', 'sticky', 'attunement'],
    people: ['marx', 'freud', 'tomkins', 'brennan'], units: ['intro', 'ch2', 'afterword'],
    questions: ['What is circulating in a meeting you were in — a mood, or an object that people oriented to?']
  });

  T('contact', 'Contact', 'core', ['contact'], {
    short: 'The meeting of bodies, objects and signs — touch, proximity, encounter — through which feelings take shape; contact is shaped by histories that precede the meeting.',
    long: 'Ahmed borrows from Descartes the idea that feelings are shaped by how objects affect us (help or harm), not by objects’ intrinsic properties. “Contact” in Latin (*contingere*) is “to touch together”, and she links it to *contingency*: things might have been otherwise. Contact is never neutral: past histories of contact determine how a present encounter is read (“reading the contact”).\n\nThe notion supports her claims that the border between inside and outside is made in encounter (surfaces), and that emotions are neither simply in the subject nor in the object.',
    ahmed: 'Contact allows Ahmed to say that attributions of cause (“you hurt me”, “it is fearsome”) are themselves effects of the encounter; she avoids both causal determinism by objects and subjectivism.',
    genealogy: 'Descartes’ *Passions of the Soul*; phenomenologies of touch (Merleau-Ponty); Pratt’s “contact zone”; Latin *contingere*.',
    example: 'A child meets a bear: the child’s fear is shaped by contact and by histories of images; the bear becomes fearsome and the child fearful in one event.',
    misread: 'It is not “just physical touch” — contact can be with memories, images, and imagined objects.',
    related: ['impression', 'contingency', 'surfaces', 'aboutness'],
    people: ['descartes', 'pratt', 'sartre'], units: ['intro', 'ch1', 'ch4'],
    questions: ['What histories shape how you read a “simple” encounter, e.g., a stranger on the train?']
  });

  T('impression', 'Impression', 'core', ['impressions', 'impression'], {
    short: 'A word Ahmed uses for how objects and others *press upon* us, leaving marks that are both feelings and ideas — it avoids splitting sensation, emotion and thought.',
    long: 'From Hume’s term for vivid perceptions, but exploited through its everyday senses: an impression can be an effect (“she made an impression”), a belief (“under the impression”), an image (“to create an impression”), or a mark on a surface (“to leave an impression”). All involve a *press*: contact between surfaces.\n\nThe notion lets Ahmed avoid the analytic division between bodily sensation, emotion and thought and keep the idea that we are shaped by those we come into contact with. In Chapter 7 she uses “impressions” for memory and grief: we carry impressions of others that are both ours and more than ours.',
    ahmed: 'Charitably, impression names the *medium* in which feelings and ideas are indistinguishable: a feeling is a way of taking an object, and an object leaves its mark on a body.',
    genealogy: 'Hume’s *Treatise* (impressions vs ideas); Locke; Descartes’ contact; Ahmed’s own pun on “press”.',
    example: 'The impression a stranger makes at a first meeting: part feeling, part judgement, part bodily reaction.',
    misread: 'It is not “first impressions” alone, nor merely subjective: impressions are made by histories on both parties.',
    related: ['contact', 'surfaces', 'aboutness', 'orientation'],
    people: ['hume', 'descartes'], units: ['intro', 'ch1', 'ch7', 'afterword'],
    questions: ['What impressions of someone you have lost do you still carry in gestures or phrases?']
  });

  T('surfaces', 'Surfaces and boundaries', 'core', ['surfacing', 'surfaces of bodies', 'bodily surface'], {
    short: 'The skin of bodies (and of nations, communities, objects) — Ahmed argues emotions produce the **effect** of surfaces and borders, rather than starting inside them.',
    long: 'Following Freud (the ego as a projection of a surface) and Butler (materialisation as the “effect of boundary, fixity and surface”), Ahmed claims that the felt edge of a body appears in encounters of intensity — pain, shame, disgust. A border is not a given line but something that surfaces through contact and that can be unmade by it (the skin both separates and connects).\n\nCollectives have surfaces too: the “skin” of the nation or a community, which can be “bruised” (“soft touch”) or “sealed” (healing a national wound).',
    ahmed: 'The best reading sees “surface” as shorthand for the *felt boundary* of bodies and groups, and “surfacing” as the process in which that boundary is registered, which explains how emotions can align “I” with “we”.',
    genealogy: 'Freud’s bodily ego; Anzieu’s skin-ego; Butler; phenomenology of touch (Merleau-Ponty).',
    example: 'A stubbed toe makes the toe and the table “surface”; a shame blush exposes the skin; a nation “torn apart” is said to need its skin healed.',
    misread: 'It is not saying bodies are only metaphors; the claim is that bodily and collective boundaries are produced in encounters.',
    related: ['intensification', 'contact', 'impression', 'orientation'],
    people: ['freud', 'butler', 'grosz', 'leder'], units: ['intro', 'ch1', 'ch2', 'ch4', 'ch7'],
    questions: ['When did you last become aware of your own skin as a boundary — and what produced that awareness?']
  });

  T('intensification', 'Intensification', 'core', ['intensification', 'intensify', 'intensifies'], {
    short: 'The amplification of contact so that a boundary is felt — in pain, shame, disgust — which is how bodies and worlds “take shape”.',
    long: 'In Chapter 1, Ahmed argues that the impression of a surface is an effect of intensifications of feeling: it is when sensations become intense (an injury, a cramp) that we become aware of the body as a bounded surface. Intensification is also “economic”: the more intense, the more the surface is felt.\n\nThe term is distinct from Massumi’s “intensity” as pre-personal affect: Ahmed ties intensification to *reading* and *attribution*, which keeps it social.',
    ahmed: 'The charitable reading: intensification names a *relation* between contact and attention. It explains why encounters of pain, fear and disgust shape borders more strongly than ordinary comfort, which hides surfaces.',
    genealogy: 'Butler on materialisation; Leder on the absent body; phenomenology of pain (Scarry).',
    example: 'You notice your breath only when you are short of it; a social border is felt at moments of tension.',
    misread: 'Not the same as Massumi’s affect-as-intensity; for Ahmed intensification is mediated by past impressions.',
    related: ['surfaces', 'pain', 'comfort', 'contact'],
    people: ['butler', 'leder', 'massumi'], units: ['ch1', 'ch2'],
    questions: ['What intensifications have made a boundary visible in your own life?']
  });

  T('orientation', 'Orientation / towardness and awayness', 'core', ['orientation', 'orientations', 'orientated'], {
    short: 'How emotions direct bodies **toward** or **away from** objects and others; emotions are a way of facing or turning from the world, which shapes bodily and social space.',
    long: 'Ahmed’s answer to “what do emotions do?” is that they orient: love is a pull towards, disgust a pulling away, fear a shrinking, hope a reaching. Orientations accumulate: repeated approaches shape bodies (“congealed histories of approaches”) and determine which spaces and others one can inhabit with ease.\n\nThe Afterword links orientation to phenomenology: being affected by something is being directed towards it. She develops the concept extensively in *Queer Phenomenology* (2006).',
    ahmed: 'The idea unifies the book’s separate chapters: each emotion is a different orientation. It avoids defining emotions by essence (“basic emotions”) and describes what they do.',
    genealogy: 'Husserl’s “here/there”, Merleau-Ponty on bodily orientation; Spinoza on affects increasing or diminishing power; Sartre.',
    example: 'A body that leans toward a loved other and away from a feared one; heterosexuality as an orientation that makes some approaches easy.',
    misread: 'Not only sexual orientation; and not an inner disposition — it is relational and spatial.',
    related: ['aboutness', 'contact', 'attachment', 'comfort'],
    people: ['spinoza', 'sartre', 'heidegger'], units: ['intro', 'ch3', 'ch4', 'ch7', 'afterword'],
    questions: ['How does your body orient towards or away from something you fear or love?']
  });

  T('aboutness', 'Aboutness / intentionality', 'core', ['aboutness'], {
    short: 'The phenomenological idea that emotions are *about* something — directed at objects — which Ahmed combines with contact: emotions are about objects **and** shaped by contact with them.',
    long: 'Phenomenologists (Brentano, Husserl, Sartre) insist that consciousness is always consciousness *of* something; emotions are not raw feelings but ways of apprehending the world. Ahmed accepts this but adds that objects need not exist (they can be remembered or imagined) and that “aboutness” involves a reading of contact.\n\nIn Chapter 1 she shows that even pain, usually called non-intentional, is “because something”, with attributions that function as its object (Bending).',
    ahmed: 'Aboutness lets her say that emotions have effects “referential” in character, while denying that emotions have fixed referents.',
    genealogy: 'Brentano’s intentionality; Husserl; Sartre’s *Sketch*; analytic cognitivism (Solomon, Nussbaum).',
    example: 'You are afraid *of* something; shame is *before* someone; hate is hate *of* a figure.',
    misread: 'Aboutness does not mean emotions are just beliefs; and it does not guarantee that the object exists.',
    related: ['orientation', 'contact', 'phenomenology', 'cognitivism'],
    people: ['sartre', 'heidegger'], units: ['intro', 'ch1', 'ch2'],
    questions: ['What is the “object” of a mood — is there one?']
  });

  T('inside-out-outside-in', 'Inside out / outside in', 'core', ['inside out', 'outside in'], {
    short: 'Ahmed’s names for two standard models: psychology’s emotions that start **inside** and move out; sociology’s emotions that start **outside** and move in — both assume the inside/outside border is given.',
    long: 'In the “inside out” model, I have feelings which I express, and which others receive; in the “outside in” model, feeling comes from a collective (Durkheim; crowd psychology) and enters the individual. Both treat the individual/social divide as objective.\n\nAhmed argues that emotions *produce* that divide — the effect of surfaces — so that neither model is adequate and neither “I” nor “we” is the origin.',
    ahmed: 'She acknowledges she summarises complex literatures schematically (Afterword, note 2); the point is to mark a shared assumption, not to caricature the fields.',
    genealogy: 'Expressivist psychology (Darwin, Ekman); Durkheim, Le Bon; Freud’s *Group Psychology*.',
    example: '“I express anger to you” vs “the crowd’s mood sweeps me up”.',
    misread: 'Not the claim that emotions are neither individual nor social; “my model refuses the abbreviation of the ‘and’”.',
    related: ['sociality', 'surfaces', 'contagion'],
    people: ['durkheim', 'darwin', 'freud'], units: ['intro', 'ch3'],
    questions: ['Which model do you default to when explaining your own feelings?']
  });

  T('sociality', 'Sociality of emotion', 'core', ['sociality'], {
    short: 'The way emotions are shared, circulated and organised between bodies — which Ahmed locates in the circulation of objects and in how emotions align (or fail to align) “I” with “we”.',
    long: 'Ahmed’s account of the sociality of emotion is distinct from contagion and from Durkheimian collective feeling. Shared situations produce tension as well as cohesion: we may share an object (a funeral, a flag) without sharing a feeling; a feeling may be “in the room” without being the same for everyone.\n\nSociality also includes unevenness: emotions align some bodies and not others, and the boundaries of collectives (the nation, the family, feminism) are effects of those alignments.',
    ahmed: 'She treats the “social” not as a container but as an effect of contact; thus “the sociality of pain” (Chapter 1) is a contingent attachment.',
    genealogy: 'Durkheim; Scheler on community of feeling; Chapter 2’s affective economies.',
    example: 'A shared grief can unite a family and still be differently felt by each member.',
    misread: 'Not “shared feeling”: Ahmed rejects the assumption that social = same.',
    related: ['circulation', 'contagion', 'attunement'],
    people: ['durkheim', 'scheler'], units: ['intro', 'ch1', 'afterword'],
    questions: ['Where have you been in a room where people shared an object but not a feeling?']
  });

  T('affective-value', 'Affective value', 'core', ['affective value'], {
    short: 'The emotional weight a sign or figure accumulates by circulating — analogous to surplus value in Marx.',
    long: 'The more a sign circulates and is linked to other signs, the more affective it becomes: “passion” is not what drives accumulation (Marx’s capitalist) but what is accumulated. Affective value is concealed because the history of circulation is forgotten, which lets value appear to reside in the object.',
    ahmed: 'She calls her use of Marx “a limited analogy”; the key point is the structure of accumulation through movement.',
    genealogy: 'Marx’s surplus value; Freud’s displacement; Bourdieu’s symbolic capital (a related but distinct idea).',
    example: 'A political catchphrase gains charge each time it is repeated across news cycles.',
    misread: 'It is not measurable like money; it is a heuristic for tracking accumulation.',
    related: ['affective-economies', 'fetishism', 'circulation'],
    people: ['marx'], units: ['ch2', 'ch4'],
    questions: ['What has accumulated “value” in a phrase you hear constantly?']
  });

  T('attachment', 'Attachment', 'core', ['attachments', 'attachment'], {
    short: 'The bonds that connect us to people, objects, ideals and norms — including bonds to the very forms of power that hurt us; the book asks “what sticks?”',
    long: 'Ahmed’s central political question is why transformation is so hard. Her answer is that subjects are *invested* in norms (family, nation, heterosexuality, gender) through emotion; investments accumulate through time and labour and are felt as love, comfort, loyalty. Even critical politics (queer, feminist) cannot suspend attachments; they must work through them.\n\nThe book distinguishes attachments that bind (cohesion) from those that block (impasse), and emphasises that attachments can move.',
    ahmed: 'Her stance contrasts with Brown’s “let go”: Ahmed argues that critique cannot detach, but investments “move as we move”.',
    genealogy: 'Butler’s “passionate attachment” (*Psychic Life of Power*); Brown’s “wounded attachments”; Berlant’s later “cruel optimism” (attachments to what hinders flourishing).',
    example: 'Attachment to a nation that fails to return love; attachment to feminism despite its exclusions.',
    misread: 'Not necessarily positive or negative; attachment names the *hold* of something on us.',
    related: ['wounded-attachments', 'orientation', 'love', 'hope'],
    people: ['butler', 'brown', 'berlant'], units: ['intro', 'ch6', 'ch7', 'ch8'],
    questions: ['Which of your attachments would be hard to give up even if you wished to?']
  });

  T('fetishism', 'Fetishism (affective fetishism)', 'core', ['fetishism', 'fetishisation', 'fetish'], {
    short: 'When a quality seems to belong to an object (“the disgusting thing”, “the hateful stranger”) because the history of its production and circulation has been concealed.',
    long: 'Marx’s commodity fetishism describes value appearing as a natural property of things because the labour that made them is hidden. Ahmed adapts the idea: feelings become “fetishes” — qualities residing in objects — through an erasure of the history of their production and circulation. She also uses fetishism for the wound (Chapter 1), the mixed-race woman (Chapter 6) and the “crisis” (Chapter 3).',
    ahmed: 'Her version is more careful than Marx’s: it is not emotions that are erased (as if already there) but the *making* of emotions.',
    genealogy: 'Marx, *Capital* ch. 1; Freud on sexual fetishism; McClintock on commodity racism.',
    example: 'A feeling of comfort appears as a quality of a hotel room, hiding the labour of cleaners (“feeling fetishism”).',
    misread: 'Not “a sexual fetish” in the everyday sense.',
    related: ['affective-value', 'affective-economies', 'wounded-attachments'],
    people: ['marx', 'freud', 'mcclintock'], units: ['intro', 'ch1', 'ch3', 'ch7'],
    questions: ['What labour is hidden by a good feeling you rely on?']
  });

  T('cultural-politics', 'Cultural politics (of emotion)', 'core', ['cultural politics'], {
    short: 'The study of how emotions do world-making work: aligning bodies with collectives, producing boundaries, and attaching us to norms.',
    long: 'Ahmed approaches emotion as a form of “world making” rather than as a private state. Cultural politics here is not about “culture” as a separate sphere; it concerns how circulating signs, narratives and figures direct feelings and thereby shape who counts as “us”.\n\nShe contrasts it with the psychologising of emotions and with models of social structure that neglect the emotional intensities that make structures feel like forms of being.',
    ahmed: 'The generous reading is that “cultural politics” insists that emotions are neither epiphenomena of structure nor private, but part of how power is lived.',
    genealogy: 'Cultural studies (Hall, Williams); feminist theory of the personal as political; Butler on norms.',
    example: 'The feeling of national pride at a sporting event, which is also a way of drawing the line of who belongs.',
    misread: 'It is not only the politics of “culture” as arts; it is power as lived affect.',
    related: ['affective-economies', 'attachment', 'performativity'],
    people: ['butler', 'berlant'], units: ['intro', 'conclusion'],
    questions: ['Where do you see emotions used to draw lines of belonging?']
  });

  T('archive', 'Archive / contact zone (method)', 'core', ['archive'], {
    short: 'Ahmed’s name for her corpus: not a neutral collection but an effect of multiple contacts (libraries, friends, cases), a “contact zone”, in which she tracks how words and objects of feeling circulate.',
    long: 'Unlike Cvetkovich’s “archive of feelings”, which treats culture as a repository of feeling, Ahmed treats texts as sites where emotion words and objects move and stick. Her texts — websites, speeches, reports — are chosen because they matter to her; she is explicit that the archive is shaped by her own contact and by the cases (Australia, terror, asylum) she is involved in.',
    ahmed: 'The charitable view: she offers a situated, exemplary method, not a representative sample; she wants to show *how to read* emotions in public texts.',
    genealogy: 'Pratt’s “contact zone”; feminist standpoint epistemology; Cvetkovich’s *Archive of Feelings*.',
    example: 'A letter from a charity, a website of a hate group, a government white paper read as texts of emotion.',
    misread: 'It is not an empirical sample of what people feel.',
    related: ['cultural-politics', 'metonymy'],
    people: ['cvetkovich', 'pratt'], units: ['intro'],
    questions: ['What would a different archive for this book look like?']
  });

  T('affect', 'Affect', 'core', ['affect studies', 'affect theory'], {
    short: 'In affect theory, a name for bodily forces or intensities that are said to precede or exceed emotion; Ahmed uses the term in a more everyday sense of “being affected” and resists making it a separate order.',
    long: 'Spinoza’s *affectus* names modifications of the body that increase or decrease its power of acting. Deleuze, Massumi and others turn this into a theory of affect as pre-personal intensity distinct from emotion. Ahmed’s Afterword argues that emotion already involves bodily affecting and being affected, and that creating a distinct order of “affect” risks reducing emotion to personal feeling and gendering the distinction.',
    ahmed: 'She does not deny bodily processes; she denies that separating them from emotion explains more than it hides, and she prefers the language of orientation and impressions.',
    genealogy: 'Spinoza → Deleuze → Massumi; Tomkins → Sedgwick & Frank; psychology (affect vs emotion in experimental work).',
    example: 'A shiver or the sense of an atmosphere before you can say why.',
    misread: 'In everyday English “affect” is also a verb (“to affect”); the theory-term and the verb are not identical.',
    related: ['affective-turn', 'impression', 'orientation'],
    people: ['spinoza', 'deleuze', 'massumi', 'tomkins'], units: ['ch1', 'afterword'],
    questions: ['Does separating “affect” from “emotion” help your own analysis? What does it add or hide?']
  });

  T('affective-turn', 'The affective turn', 'core', ['affective turn'], {
    short: 'The wave of humanities and social-science work since the 1990s that foregrounds affect and emotion; Ahmed argues it has often become a turn *to affect* that displaces feminist and queer work on emotion.',
    long: 'The label was in use around 2001 (Koivunen) and was popularised by Clough (2007) and Gregg & Seigworth (2010). It encompasses feminist work on emotion, Tomkins-inspired affect theory (Sedgwick & Frank), Deleuzian affect (Massumi), non-representational theory, and critiques of these.\n\nThe controversy is about origins, vocabulary (affect vs emotion), and what the turn is a turn *from* (e.g., social constructionism, the “linguistic turn”).',
    ahmed: 'Her Afterword asks who gets credit and whose vocabularies become authoritative, noting how sexism can operate as citational practice.',
    genealogy: 'Feminist philosophy of emotion (1980s–90s); queer public-feelings projects (Cvetkovich, Berlant); affect theory (Massumi).',
    example: 'Reading lists on “affect theory” beginning with Deleuze and omitting Jaggar or Lorde.',
    misread: 'It is not one unified movement.',
    related: ['affect', 'phenomenology'],
    people: ['hardt', 'massumi', 'cvetkovich', 'leys', 'wetherell'], units: ['intro', 'afterword'],
    questions: ['Whose work is cited as the origin of affect theory in your field?']
  });

  T('attunement', 'Attunement', 'core', ['attunement'], {
    short: 'A shared mood or sense of being “in tune” with others (from Heidegger’s *Stimmung*); Ahmed argues attunement involves shared **leanings** and can create **strangers** at the edges.',
    long: 'Heidegger describes moods as atmospheres that determine our being with others in advance. Developmental psychologists (Stern) speak of affective attunement between mother and infant. Ahmed notes that attunement is not exhaustive: to be attuned to some is to be non-attuned to others; the loss of attunement (a joke you don’t find funny) can be a crisis that makes an object more distinct.',
    ahmed: 'She treats attunement as a way of describing the *work* of being with others — and the emotional labour demanded of those who arrive in a room whose mood is already set.',
    genealogy: 'Heidegger; Scheler on sympathy and infection; Stern; affect theory (Stewart on atmospheres).',
    example: 'A meeting’s cheerful mood changes when a person of colour enters the room (hooks).',
    misread: 'Not always positive harmony; one can be attuned in sadness.',
    related: ['contagion', 'sociality', 'happiness', 'stranger'],
    people: ['heidegger', 'scheler', 'hooks'], units: ['afterword'],
    questions: ['When did you last “lose attunement” in a room — what did you do?']
  });

  T('contagion', 'Emotional contagion', 'core', ['contagion'], {
    short: 'The model in which one person’s feeling passes to another, unchanged; Ahmed critiques it because it treats emotion as a property that can be passed on and assumes smooth sharing.',
    long: 'Crowd psychologists (Le Bon), Tomkins and Izard, and later Hatfield & Cacioppo use “contagion”; Brennan speaks of “transmission”. The word comes from Latin for “contact”. Ahmed agrees that feelings can move between bodies but argues models that assume the same feeling passes miss tension and disagreement; what passes are objects of emotion.',
    ahmed: 'She keeps the insight that emotions are not individual possessions, but resists the idea that sociality is sameness.',
    genealogy: 'Le Bon; Freud’s *Group Psychology*; Tomkins; Izard; Brennan; social-network studies (Fowler & Christakis).',
    example: '“Happiness is contagious” headlines; a laughing room.',
    misread: 'She does not say contagion never happens.',
    related: ['circulation', 'attunement', 'sociality', 'inside-out-outside-in'],
    people: ['tomkins', 'brennan'], units: ['intro', 'afterword'],
    questions: ['When have you “caught” a feeling — and when have you found you did not share it?']
  });

  T('dumb-view', 'The “Dumb View” of emotions', 'theory', ['Dumb View'], {
    short: 'Spelman’s name for the view that emotions are brute, unthinking feelings — which has been used to rank emotional people (women, racial others) as less rational.',
    long: 'The Dumb View treats emotions as automatic bodily reactions caused by objects, with no cognitive content. Feminist philosophers (Spelman, Jaggar) argued this view is both philosophically wrong (emotions involve judgement and interpretation) and politically harmful (it positions the emotional as irrational).',
    ahmed: 'She uses the critique to move beyond the sensation/cognition split rather than to side with cognitivism.',
    genealogy: 'Spelman’s “Anger and Insubordination” (1989); Jaggar’s “Love and Knowledge” (1996).',
    example: 'The assumption that a child’s fear of a bear is an automatic reflex.',
    misread: 'It does not mean emotions are *only* thought.',
    related: ['cognitivism', 'phenomenology'],
    people: ['spelman', 'jaggar'], units: ['intro'],
    questions: ['Where is the Dumb View still presumed in public debate?']
  });

  T('metonymy', 'Metonymy and metaphor', 'theory', ['metonymy', 'metonymic'], {
    short: 'Figures of speech: **metaphor** substitutes by similarity, **metonymy** links by contiguity. Ahmed argues emotions work by metonymic “sliding” and “sticking” of signs.',
    long: 'Jakobson distinguished two axes of language; Lacan mapped them onto Freud’s condensation (metaphor) and displacement (metonymy). In Ahmed’s texts, metonymy explains how words like “asylum seeker”, “bogus” and “terrorist” become associated by proximity without explicit argument, and how association becomes resemblance (“mixed couples are like rape”).',
    ahmed: 'The point is not stylistic: metonymy is a mechanism by which histories work through concealment — “resistance to literalisation”.',
    genealogy: 'Jakobson; Freud; Lacan; Stuart Hall on stereotypes.',
    example: '“Islam” and “terrorism” stuck together by repeated adjacency, even when explicitly denied.',
    misread: 'Not merely “word association”; it is a political mechanism.',
    related: ['sticky', 'displacement', 'sign'],
    people: ['freud', 'lacan'], units: ['intro', 'ch2', 'ch3', 'ch4'],
    questions: ['Find a metonymic slide in a news story.']
  });

  T('displacement', 'Displacement', 'theory', ['displacement'], {
    short: 'In psychoanalysis, the shifting of affect from one idea or object to another (horse for father); Ahmed borrows it but rejects returning it to the subject as origin.',
    long: 'Freud: what is repressed is not the feeling but the idea it was attached to; the feeling attaches elsewhere. Ahmed keeps the sideways and backwards movement of affect across signs but insists that associations are social and historical, not only intra-psychic, so that the “unconscious” is the failure of presence that constitutes relations among subjects, objects and signs.',
    ahmed: 'Her aim is to apply the *form* of displacement to public discourse without assuming a unitary psyche.',
    genealogy: 'Freud (*Interpretation of Dreams*; Little Hans); Lacan (metonymy).',
    example: 'Fear of a horse as a displacement of fear of the father; fear of an asylum seeker displaced onto a “terrorist”.',
    misread: 'Not simply “projection”.',
    related: ['metonymy', 'psychoanalysis', 'projection'],
    people: ['freud', 'lacan'], units: ['ch2', 'ch3'],
    questions: ['Where do you see fear displaced from one object to another?']
  });

  T('psychoanalysis', 'Psychoanalysis (in the book)', 'theory', ['psychoanalysis', 'psychoanalytic'], {
    short: 'Freudian and post-Freudian theory used for displacement, ambivalence, identification, melancholia and the unconscious — taken up critically and socialised.',
    long: 'Ahmed uses psychoanalysis selectively: Freud on unconscious emotions and displacement, Klein on projection, the ego ideal and identification, Butler on melancholia. She refuses to return emotions to a psychic origin and criticises the heterosexual logic of Freudian accounts of love.',
    ahmed: 'She says she would draw on psychoanalysis less if writing the book now (Afterword).',
    genealogy: 'Freud, Klein, Lacan; feminist and queer revisions (Butler, Kristeva).',
    example: 'Fort-da: a child’s game expressing love through hostility.',
    misread: 'She is not simply “applying” psychoanalysis.',
    related: ['displacement', 'projection', 'identification', 'melancholia'],
    people: ['freud', 'klein', 'lacan', 'butler'], units: ['ch2', 'ch3', 'ch6'],
    questions: ['What does psychoanalytic language give you that sociology does not?']
  });

  T('projection', 'Projection / projective identification', 'theory', ['projection', 'projective identification'], {
    short: 'The psychoanalytic idea that undesirable parts of the self are located in another; Ahmed critiques it as assuming emotions move from inside to outside.',
    long: 'In projection, the self attributes unwanted feelings to others (Laplanche & Pontalis). Klein’s projective identification adds that the other may be induced to feel them. Ahmed argues these models still presuppose an inside from which feelings are pushed; she asks why hate *feels* as though it comes from inside.',
    ahmed: 'She does not reject the truth in projection (“bad feelings are crucial to subject formation”) but says bad feelings “within” may be effects.',
    genealogy: 'Freud; Klein; Craib; Laplanche & Pontalis.',
    example: 'A subject who cannot bear their own aggression attributes it to a hated group.',
    misread: 'Not a simple “blame the other” mechanism.',
    related: ['displacement', 'psychoanalysis', 'hate'],
    people: ['freud', 'klein'], units: ['ch2'],
    questions: ['What is the difference between projecting a feeling and attributing it through circulation?']
  });

  T('identification', 'Identification (and idealisation)', 'theory', ['identification'], {
    short: 'In Freud, the earliest form of emotional tie: wanting to be like another; Ahmed reads it as a form of loving and aligning that creates likeness, and links it to idealisation (having).',
    long: 'Identification is “towardness” — becoming like another in the future. Ahmed argues it is not a result of love but a form of it, and that love/hate align subjects with some and against others. Idealisation (love as having) creates ideal objects whose value returns to the subject. Both create ideals.',
    ahmed: 'Her revision: being and having are not separate loves but two routes to the same ideal; heterosexuality builds on likeness, not difference.',
    genealogy: 'Freud (*Group Psychology*); Butler; Lacan.',
    example: 'Identification with a national ideal or with a parent’s whiteness (note 7, Ch. 6).',
    misread: 'Not identical to “empathy”.',
    related: ['ideal', 'narcissism', 'love', 'psychoanalysis'],
    people: ['freud', 'butler'], units: ['ch2', 'ch5', 'ch6'],
    questions: ['Who or what have you identified with — and what ideal did that create?']
  });

  T('ideal', 'Ideal (ego ideal, national ideal)', 'theory', ['ego ideal', 'national ideal'], {
    short: 'A shared image of who or what we should be (ego ideal; national ideal) that binds people; Ahmed argues ideals take the shape of some bodies and not others.',
    long: 'In psychoanalysis the ego ideal is the self one would like to be. Groups form when members put the same object in place of their ego ideal. Ahmed argues the content of an ideal is an effect of idealisation (the ideal nation takes the shape of white, heterosexual bodies, etc.), so that some bodies approximate it unmarked while others fail it.',
    ahmed: 'Her stance: ideals are not empty but are produced by movements of some bodies; shame and pride register success or failure to approximate them.',
    genealogy: 'Freud (“On Narcissism”; *Group Psychology*); Lacan (ideal ego / ego ideal).',
    example: 'The “new English rose” as an ideal image of the nation.',
    misread: 'Not “values” in the abstract.',
    related: ['identification', 'national-shame', 'love', 'whiteness'],
    people: ['freud', 'lacan', 'kristeva'], units: ['ch5', 'ch6'],
    questions: ['Whose body does a national or institutional ideal look like?']
  });

  T('narcissism', 'Narcissism (and love for difference)', 'theory', ['narcissism', 'narcissistic'], {
    short: 'Love of the self through an object; Ahmed argues love for difference can be narcissistic when the nation loves itself in loving others.',
    long: 'Freud distinguished narcissistic from anaclitic love. Kristeva: “the lover is a narcissist with an object”. Ahmed argues that the anaclitic lover’s “humility” is also self-exaltation and that national multicultural love conceals the nation’s investment in itself while casting minorities as narcissistic (“sealed” communities).',
    ahmed: 'The argument is about structure, not about the moral character of lovers.',
    genealogy: 'Freud (1914); Kristeva; Warner on “homo-narcissism”.',
    example: 'A nation that celebrates its diversity as a sign of its own virtue.',
    misread: 'Not used as an insult but as a description of return.',
    related: ['love', 'identification', 'multiculturalism'],
    people: ['freud', 'kristeva', 'warner'], units: ['ch2', 'ch6'],
    questions: ['Is there a form of love that does not return to the lover?']
  });

  T('ambivalence', 'Ambivalence', 'theory', ['ambivalence', 'ambivalent'], {
    short: 'The coexistence of opposed feelings toward the same object (love/hate; attraction/disgust); Ahmed shows many emotions are ambivalent attachments.',
    long: 'Freud and Klein highlight ambivalence as basic to relations to objects. Ahmed argues hate is not opposed to love but an attachment that needs its object; disgust is both repelling and fascinating (Miller); shame presupposes interest.',
    ahmed: 'Ambivalence undermines clean oppositions (love/hate, good/bad feeling) and explains why conversion between emotions is easy.',
    genealogy: 'Freud; Klein; Bleuler; Miller on disgust; Tomkins on shame.',
    example: 'A hate group declaring itself a love group.',
    misread: 'Not indecision.',
    related: ['hate', 'disgust', 'shame', 'love'],
    people: ['freud', 'klein', 'allport'], units: ['ch2', 'ch4', 'ch5'],
    questions: ['What feeling in your life is best described as ambivalent attachment?']
  });

  T('performativity', 'Performativity', 'theory', ['performativity', 'performative', 'performatives'], {
    short: 'The way utterances and norms *do* what they name by repeating past conventions; for Ahmed, emotion words and speech acts (“that’s disgusting”, “sorry”) generate their objects.',
    long: 'Austin distinguished constative statements from performatives (“I promise”); Derrida stressed iterability; Butler extended performativity to gender and norms as “the power of discourse to produce effects through reiteration”. Ahmed adds stickiness: histories adhere to signs, giving some performatives more force.',
    ahmed: 'Her innovation is to attend to *affective* histories: performatives work not only by convention but by what sticks.',
    genealogy: 'Austin; Derrida; Butler; Sedgwick.',
    example: '“The nation mourns” makes a mourning nation; “That’s disgusting!” generates a disgusting object and a community of witnesses.',
    misread: 'Not “theatrical performance”.',
    related: ['speech-act', 'sticky', 'apology'],
    people: ['austin', 'butler', 'derrida', 'sedgwick'], units: ['intro', 'ch4', 'ch5'],
    questions: ['What does a common utterance “do” beyond describing?']
  });

  T('speech-act', 'Speech act', 'theory', ['speech act', 'speech acts'], {
    short: 'An utterance that performs an action (apologising, promising, naming); Ahmed treats emotions and emotion-naming as speech acts that need uptake.',
    long: 'Austin’s speech acts depend on felicity conditions: authorisation, procedure, sincerity. Ahmed argues that the success of acts like apology depends on reception and subsequent conduct; anger is a speech act that needs uptake (Frye); refusals to apologise are acts too.',
    ahmed: 'The speech-act frame lets her analyse emotions without assuming inner states are the key to meaning.',
    genealogy: 'Austin; Searle; Butler; Frye.',
    example: 'An official apology; an expression of anger at a meeting.',
    misread: 'Not “just words”.',
    related: ['performativity', 'apology', 'anger'],
    people: ['austin', 'frye', 'butler'], units: ['ch4', 'ch5', 'ch8'],
    questions: ['What speech acts are available to you in a conflict — which succeed or fail?']
  });

  T('interpellation', 'Interpellation', 'theory', ['interpellated', 'interpellation'], {
    short: 'Althusser’s term for how ideology “hails” individuals as subjects; Ahmed uses it for how texts address “you” with presumed feelings.',
    long: 'Althusser’s police officer: “Hey, you there!” — the person who turns becomes a subject. In Ahmed, a charity letter that says “you probably feel angry or saddened” interpellates the reader as an emotional subject; “you” in a poster hails a white taxpayer; a racial slur hails the other as hated.',
    ahmed: 'Interpellation shows how emotions are invited through address.',
    genealogy: 'Althusser, “Ideology and Ideological State Apparatuses” (1970); Butler’s *Excitable Speech*.',
    example: '“I hope you feel a sense of empowerment.”',
    misread: 'Not necessarily successful: addressees may refuse.',
    related: ['performativity', 'sign'],
    people: ['althusser', 'butler', 'fanon'], units: ['ch1', 'ch2'],
    questions: ['How are you addressed by the media you consume?']
  });

  T('sign', 'Sign / figure', 'theory', [], {
    short: 'A word, image or figure that stands for something; for Ahmed, emotions work *through* signs, which become charged by circulation (e.g., “the bogus asylum seeker”).',
    long: 'Following semiotics, a sign has meaning through difference from other signs. Ahmed’s “figures” are signs with a bodily face: the stranger, the terrorist, the bogus asylum seeker. Such figures need not refer to any actual individual; their power comes from circulation and from the possibility that anyone could be them.',
    ahmed: 'The emphasis on signs does not mean bodies disappear; signs stick to bodies in encounters (Afterword defends this against Wetherell).',
    genealogy: 'Saussure; Derrida; Hall.',
    example: 'The “bogey man”.',
    misread: 'Not “merely words”.',
    related: ['sticky', 'metonymy', 'affective-economies'],
    people: ['lacan', 'derrida'], units: ['ch1', 'ch2', 'ch4'],
    questions: ['What figure circulates in your public life — and who gets stuck to it?']
  });

  T('phenomenology', 'Phenomenology', 'theory', ['phenomenology', 'phenomenological'], {
    short: 'The philosophical tradition (Husserl, Heidegger, Sartre, Merleau-Ponty) that studies lived experience and intentionality; Ahmed’s source for aboutness, orientation and comfort.',
    long: 'Phenomenology describes how the world appears to embodied consciousness. Ahmed borrows its attention to bodies, objects, directedness and the “ordinary” as what is not noticed, and queers it (she develops *Queer Phenomenology* in 2006). She also criticises its tendency to assume a neutral subject.',
    ahmed: 'She uses phenomenology to resist reducing emotion to physiology or to belief.',
    genealogy: 'Husserl, Heidegger, Sartre, Merleau-Ponty; feminist phenomenology (Young, Grosz).',
    example: 'The description of sinking into a chair.',
    misread: 'Not a theory of “subjective feelings”.',
    related: ['aboutness', 'orientation', 'comfort'],
    people: ['sartre', 'heidegger', 'leder', 'grosz'], units: ['intro', 'ch1', 'ch7', 'afterword'],
    questions: ['What would a phenomenology of your workplace notice?']
  });

  T('cognitivism', 'Cognitivism (about emotion)', 'theory', [], {
    short: 'The view that emotions involve judgements or appraisals (Aristotle, Solomon, Nussbaum); Ahmed argues for sensation and judgement together as impressions.',
    long: 'Cognitivists hold that emotions are not mere feelings but ways of evaluating the world: anger is a judgement that one has been wronged. Critics note that this can neglect the body. Ahmed’s “impression” seeks to avoid both extremes.',
    ahmed: 'She does not reject cognition; she denies that cognition and sensation are separate realms.',
    genealogy: 'Aristotle’s *Rhetoric*; Solomon; Nussbaum’s *Upheavals of Thought*.',
    example: 'Anger as the judgement that something bad has been done.',
    misread: 'Not the same as saying emotions are rational.',
    related: ['dumb-view', 'aboutness'],
    people: ['solomon', 'nussbaum', 'spelman'], units: ['intro'],
    questions: ['Does anger involve a judgement, a sensation, or both?']
  });

  T('passion', 'Passion / passivity', 'theory', ['passio'], {
    short: 'The Latin root *passio* (suffering) links “passion” and “passive”; emotion has been ranked beneath thought as being acted upon.',
    long: 'Philosophers from the Stoics to Descartes treat passions as what the soul undergoes. Ahmed notes the association with femininity and nature, and the evolutionary story that emotions are “behind” civilised man. She turns the hierarchy into an object of analysis rather than a given.',
    ahmed: 'The point is political: “being emotional” is attributed to some bodies; her question is how.',
    genealogy: 'Greek *pathos*; Descartes; Darwin; feminist critiques (Lloyd, Spelman).',
    example: '“Soft touch” nation; “too emotional” women.',
    misread: 'Not equating emotion and femininity.',
    related: ['dumb-view', 'cognitivism'],
    people: ['descartes', 'darwin', 'spelman'], units: ['intro'],
    questions: ['Where is “being emotional” used as a criticism?']
  });

  T('contingency', 'Contingency', 'core', ['contingency', 'contingent'], {
    short: 'From *contingere* (to touch together): what depends on contact and could have been otherwise; pain as a “contingent attachment”.',
    long: 'Sartre calls pain a contingent attachment to the world. Ahmed uses the etymology to tie contingency to touch and sociality: what attaches us to others is not necessary but dependent on contact. Contingency also underlies her claim that emotions are not caused by objects: the link between feeling and object is made in contact and can change.',
    ahmed: 'Contingency does not mean randomness: contact is shaped by histories, so some contingent associations are stubborn (“sticky”).',
    genealogy: 'Sartre; Latin etymology; Derrida on contingency of context.',
    example: 'A pain that attaches me to a place or person.',
    misread: 'Not “accidental”.',
    related: ['contact', 'sociality'],
    people: ['sartre'], units: ['ch1', 'ch4'],
    questions: ['What attachments in your life are contingent but binding?']
  });

  /* ---------------- THE NAMED EMOTIONS ---------------- */
  T('pain', 'Pain', 'emotion', [], {
    short: 'For Ahmed, pain is not just a sensation caused by damage but an intensification that makes bodily surfaces felt, involves reading and attribution, and is socially mediated.',
    long: 'Medical science shows pain is not proportional to injury. Ahmed argues pain surfaces bodies: it violates borders and thereby makes them felt; it solicits witness; and in public life, stories of pain are unevenly told and used (charity, wound culture, national healing).',
    ahmed: 'The generous point: pain is the strongest test case for her claim that emotions are mediated; if pain is social, so is everything else.',
    genealogy: 'Scarry; Leder; Melzack & Wall; Sartre; Freud; Brown.',
    example: 'A stubbed toe; Fiona’s testimony of separation.',
    misread: 'She does not say pain is “just social” or unreal.',
    related: ['intensification', 'surfaces', 'wounded-attachments', 'testimony'],
    people: ['scarry', 'leder', 'brown'], units: ['ch1'],
    questions: ['What can and cannot be shared about another’s pain?']
  });

  T('hate', 'Hate', 'emotion', [], {
    short: 'An intimate, ambivalent attachment that generates its objects through circulation, aligning “I” and “we” by likeness and unlikeness.',
    long: 'Ahmed argues hate does not reside in subject or object; it circulates between signs and figures (an affective economy). Hate is not the opposite of love but a form of attachment that needs its object and often presents itself as love.',
    ahmed: 'Her analysis resists treating hate as the pathology of extremists; it is part of producing the ordinary.',
    genealogy: 'Freud, Klein; Allport; Suttie; Lorde; Matsuda.',
    example: 'The Aryan Nations’ “It is not hate. It is Love.”',
    misread: 'Not “just prejudice”.',
    related: ['affective-economies', 'ambivalence', 'hate-crime', 'love'],
    people: ['allport', 'lorde', 'matsuda'], units: ['ch2'],
    questions: ['How does hate present itself as defence?']
  });

  T('fear', 'Fear', 'emotion', [], {
    short: 'A felt anticipation of future harm, intensified by the possibility that the object may pass by; it shrinks some bodies, expands others and justifies security.',
    long: 'Following Heidegger and Fanon, Ahmed shows fear shifting from object to anxiety, being attributed to bodies through stereotype, aligned with mobility and space, and used in security rhetoric where threat is produced rather than discovered.',
    ahmed: 'She treats fear as relational and political, not as an inner reaction to objective danger.',
    genealogy: 'Heidegger, Freud, Fanon; Campbell on danger; Stanko.',
    example: 'The “could-be” terrorist.',
    misread: 'Not claiming there is no real danger.',
    related: ['anxiety', 'security', 'mobility', 'stereotype'],
    people: ['fanon', 'heidegger', 'campbell'], units: ['ch3'],
    questions: ['Whose fear is treated as reasonable?']
  });

  T('anxiety', 'Anxiety', 'emotion', [], {
    short: 'In Ahmed, anxiety is not objectless but sticks to objects (“like Velcro”) and accumulates; it is what fear becomes when its object passes by.',
    long: 'Heidegger says anxiety has no object (“nowhere”). Ahmed counters that anxiety generates and attaches to objects, intensifying through accumulation. Anxiety about loss of objects (love) can be displaced onto objects of fear.',
    ahmed: 'The interest is how anxiety supplies the affective energy for crisis narratives.',
    genealogy: 'Heidegger; Freud; Kierkegaard.',
    example: 'Post-attack anxiety attaching to many suspect bodies.',
    misread: 'Not clinical anxiety disorder.',
    related: ['fear', 'crisis', 'security'],
    people: ['heidegger', 'freud'], units: ['ch3'],
    questions: ['What objects does anxiety stick to in your life?']
  });

  T('disgust', 'Disgust', 'emotion', [], {
    short: 'A double movement of proximity and recoil that generates “disgusting” objects, sticks signs to bodies, and aligns communities through shared pulling away.',
    long: 'Disgust is intentional and ambivalent; contact is crucial; objects become disgusting through contact with already-disgusting objects; its power lies in hierarchy (the low). Performatively, “That’s disgusting” makes an object and a community.',
    ahmed: 'Her claim is not that disgust has no bodily basis but that what counts as disgusting is made in history.',
    genealogy: 'Darwin, Miller, Kristeva, Douglas, Rozin; Nussbaum.',
    example: 'The 9/11 posting.',
    misread: 'Not a reliable moral guide in itself (nor simply “irrational”).',
    related: ['abjection', 'sticky', 'performativity'],
    people: ['darwin', 'miller', 'kristeva', 'douglas'], units: ['ch4'],
    questions: ['Where is “disgust” used to end debate?']
  });

  T('shame', 'Shame', 'emotion', [], {
    short: 'A burning exposure before a loved or admired witness that turns the subject back on itself; it confirms ideals even as it signals failure — and can become a route to pride.',
    long: 'Shame covers and uncovers; unlike disgust, it cannot expel the bad onto others; it requires an ego ideal and interest in the witness. Politically, national shame can function as nation-building; apologies and “regret” are speech acts that can cover over.',
    ahmed: 'She is sympathetic to shame as acknowledgement but critical of its conversion into recovery.',
    genealogy: 'Tomkins, Sartre, Lynd, Nathanson; Braithwaite; Sedgwick.',
    example: 'Sorry Books.',
    misread: 'Not the same as guilt.',
    related: ['ideal', 'national-shame', 'apology', 'ambivalence'],
    people: ['tomkins', 'sartre', 'braithwaite', 'sedgwick'], units: ['ch5'],
    questions: ['Can shame be felt without wanting to restore pride?']
  });

  T('love', 'Love', 'emotion', [], {
    short: 'A way of binding subjects to ideals and collectives; it makes ideals, is conditional, and can work to exclude those who fail to return it — in nationalisms and in multiculturalism.',
    long: 'Ahmed does not define “love” but asks what we do “in the name of love”. Identification and idealisation create ideals that return to the lover; national love is a form of waiting; multicultural love requires migrants to love back.',
    ahmed: 'She says she is not “against love” but against making it the foundation of politics.',
    genealogy: 'Freud, Kristeva, Salecl, Singer; Oliver, Silverman, Dean.',
    example: '“Learn to be British.”',
    misread: 'Not anti-love.',
    related: ['identification', 'ideal', 'narcissism', 'multiculturalism'],
    people: ['freud', 'kristeva', 'salecl', 'oliver'], units: ['ch6'],
    questions: ['Who is excluded when a politics is declared a politics of love?']
  });

  T('anger', 'Anger', 'emotion', [], {
    short: 'A reading of pain as wrong that creates and then loses its object, becoming a movement; it needs uptake and can be blocked by returned anger.',
    long: 'Following Lorde, anger is “loaded with information and energy”, visionary and not merely reactive. Anger is a speech act: whether it works depends on how it is received. Feminism can be dismissed as “angry”; the answer is not “we are rational” but to contest the opposition.',
    ahmed: 'She counsels hearing others’ anger and staying uncomfortable.',
    genealogy: 'Lorde, Frye, Spelman; Brown (ressentiment).',
    example: 'Thobani’s speech.',
    misread: 'Not valorising rage.',
    related: ['speech-act', 'wounded-attachments', 'solidarity'],
    people: ['lorde', 'frye', 'brown'], units: ['ch8'],
    questions: ['Who gets to be angry without being dismissed?']
  });

  T('wonder', 'Wonder', 'emotion', [], {
    short: 'Surprise at what is before us — Descartes’ first passion — which makes the ordinary strange, reveals the world as made, and opens bodies; a basis of feminist pedagogy.',
    long: 'Wonder does not erase history; it reveals historicity by making what seemed “just there” look made. It links to learning, to Marx’s critique of reification, and to the unknown capacities of bodies (Spinoza/Deleuze).',
    ahmed: 'She turns wonder on feminism itself (critical wonder).',
    genealogy: 'Aristotle; Descartes; Irigaray; Fisher.',
    example: 'The Women’s Studies classroom.',
    misread: 'Not naïve amazement.',
    related: ['ordinary', 'hope', 'orientation'],
    people: ['descartes', 'irigaray', 'marx'], units: ['ch8'],
    questions: ['What recently stopped being “just the way things are” for you?']
  });

  T('hope', 'Hope', 'emotion', [], {
    short: 'An impression of the “not yet” in the present that asks for action; it is not a mere disposition and can become a fixation — and it moves feminism through attachments, not detachment.',
    long: 'Hope is expansive (Bloch) but not sufficient (Pieper); Potamianou warns it can serve fixation. Ahmed argues that feminism stays alive by turning towards its objects and by forming a “we” that is an effect, with solidarity that does not presume sameness.',
    ahmed: 'Her hope is present-tense and collective, not optimistic faith.',
    genealogy: 'Bloch; Fromm; Potamianou; Hage; Mohanty.',
    example: 'Protest as the enjoyment of hope.',
    misread: 'Not the same as optimism.',
    related: ['attachment', 'solidarity', 'wonder'],
    people: ['bloch', 'potamianou', 'hage'], units: ['ch8'],
    questions: ['What distinguishes hope from optimism in your experience?']
  });

  CP.addTerms(list);
})();
