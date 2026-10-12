/* Glossary, part 2: theory, politics and the later chapters' vocabulary. */
(function () {
  var list = [];
  function T(id, name, cat, auto, o) { o.id = id; o.name = name; o.cat = cat; o.auto = auto; list.push(o); }

  T('abjection', 'Abjection / the abject', 'theory', ['abjection', 'abject'], {
    short: 'Kristeva’s term for what is cast out so that a subject or community can exist: what disturbs identity, system, order. For Ahmed the border itself becomes an object that is expelled.',
    long: 'The abject is neither subject nor object; it is what the self must expel to be a self (the corpse, bodily waste, the skin on milk). Abjection is bound up with the insecurity of “the not”: the border must be threatened to be maintained. Ahmed combines it with Douglas’s “dirt as matter out of place”.',
    ahmed: 'She uses abjection to explain how disgust generates border objects and why expulsion is never finished.',
    genealogy: 'Kristeva, *Powers of Horror* (1980); Douglas; Butler (the abject as “unliveable zones”).',
    example: 'The “roach” in Lorde’s subway story.',
    misread: 'Not simply “gross”.',
    related: ['disgust', 'body-out-of-place', 'othering'],
    people: ['kristeva', 'douglas', 'butler'], units: ['ch4', 'ch7'],
    questions: ['What does your community treat as a threat to its border?']
  });

  T('affect-alien', 'Affect alien', 'core', ['affect aliens', 'affect alien'], {
    short: 'Someone who is not made happy by what is supposed to make them happy, and so appears to alienate others — the figure behind the “killjoy”.',
    long: 'In *The Promise of Happiness* (2010), Ahmed describes those who fail to be affected in the right way by “happy objects” (marriage, a wedding, family) as affect aliens: they become the cause of unhappiness because they get in the way of the shared good feeling.',
    ahmed: 'The concept names the *social* position of not feeling right; it does not pathologise those who do not feel as expected.',
    genealogy: '*The Promise of Happiness*; Hochschild’s “feeling rules”.',
    example: 'The bride who is not happy on her wedding day.',
    misread: 'Not “people who lack emotions”.',
    related: ['killjoy', 'happiness', 'emotional-labour'],
    people: ['hochschild'], units: ['afterword'],
    questions: ['When have you felt out of tune with a shared celebration?']
  });

  T('apology', 'Apology (as speech act)', 'politics', [], {
    short: 'A speech act whose action is unfinished: it depends on authorisation, reception and subsequent conduct; it can declare emotion, admit responsibility, or both.',
    long: 'Austin placed apologies among “behabitives”. Ahmed argues the apology’s success cannot be settled by sincerity; the addressee must read it, and what follows can undo it. Official apologies raise fears of liability (Durban 2001), leading to substitutes like “regret”.',
    ahmed: 'She argues for a “return address”: an apology that answers a demand rather than turning back to restore the speaker’s pride.',
    genealogy: 'Austin; Barkan; Spelman; Reddy.',
    example: 'The 2001 UN conference declaration; Howard’s refusal.',
    misread: 'Not always empty; it can be powerful.',
    related: ['speech-act', 'national-shame', 'reconciliation'],
    people: ['austin', 'barkan', 'spelman'], units: ['ch5'],
    questions: ['What would a “return address” apology commit an institution to?']
  });

  T('body-out-of-place', 'Bodies out of place', 'core', ['bodies out of place', 'body out of place'], {
    short: 'Ahmed’s phrase (from *Strange Encounters*) for bodies recognised as strangers: those marked as not belonging in a place, by techniques of recognition.',
    long: 'It extends Douglas’s “matter out of place”: a stranger is not anyone we do not know but somebody who is recognised as not belonging. The techniques are bodily and institutional (Neighbourhood Watch, border control). The idea recurs in her analysis of hate, fear and diversity work.',
    ahmed: 'The claim emphasises that recognition is an *affective judgement* made in an instant.',
    genealogy: 'Douglas, *Purity and Danger*; *Strange Encounters*.',
    example: 'Neighbourhood Watch suspicion; “go home”.',
    misread: 'Not only migrants — it applies to anyone marked as not belonging.',
    related: ['stranger', 'othering', 'abjection'],
    people: ['douglas'], units: ['intro', 'ch2', 'ch3', 'ch8', 'afterword'],
    questions: ['Where in your daily life are bodies read as “out of place”?']
  });

  T('comfort', 'Comfort / discomfort', 'core', ['comfort zone'], {
    short: 'Comfort is the fit between body and space in which the surface disappears; heteronormativity is a form of public comfort; discomfort is a non-sinking that makes surfaces felt and can rework norms.',
    long: 'Using the image of a chair that takes the shape of its sitters, Ahmed argues that spaces take the shape of bodies that repeatedly inhabit them, so those bodies “sink in” unnoticed. Comfort depends on others’ labour (feeling fetishism). Discomfort is not just negative: it can be generative.',
    ahmed: 'She applies comfort/discomfort to queer life, to feminism (staying uncomfortable) and later to institutions.',
    genealogy: 'Phenomenology; Valentine on heterosexualised space; hooks.',
    example: 'A room whose mood changes when a body not “expected” arrives.',
    misread: 'Not necessarily psychological ease.',
    related: ['orientation', 'heteronormativity', 'queer'],
    people: ['valentine', 'hooks'], units: ['ch7', 'ch8'],
    questions: ['Where do you feel “seams” in your environment?']
  });

  T('compassion', 'Compassion (and compassionate politics)', 'politics', ['compassion'], {
    short: 'Suffering with or feeling for another; Ahmed and Berlant argue compassion can elevate the compassionate subject and reproduce the structures that produce suffering.',
    long: 'Spelman distinguishes compassion from pity; Ahmed notes that charity discourse positions the donor as the agent and the sufferer as the object. In the Conclusion, compassion for an injured Iraqi child becomes a gift that makes the saved other indebted and erases other losses.',
    ahmed: 'She does not reject compassion; she asks what narrative form it takes and who gets to be moved.',
    genealogy: 'Spelman; Berlant; Boltanski; Sontag.',
    example: 'The Christian Aid letter.',
    misread: 'Not advocating coldness.',
    related: ['empathy', 'ethics-of-not-knowing', 'fetishism'],
    people: ['spelman', 'berlant'], units: ['ch1', 'conclusion'],
    questions: ['How might an appeal avoid making the donor the hero?']
  });

  T('compulsory-heterosexuality', 'Compulsory heterosexuality', 'politics', ['compulsory heterosexuality'], {
    short: 'Rich’s term for heterosexuality as an enforced institution; for Ahmed, the cumulative effect of repeating heterosexuality as the ideal coupling, which shapes what bodies can do.',
    long: 'Ahmed emphasises repetition and labour: norms become “repetitive strain injuries”; they shape orientation, approach, and the space in which bodies move. “Compulsory” shows it is not necessary, yet refusal is still shaped by it.',
    ahmed: 'She treats it as an affective as well as institutional regime.',
    genealogy: 'Adrienne Rich (1980); Butler’s heterosexual matrix.',
    example: '“Do you have a boyfriend?”',
    misread: 'Not saying heterosexual people are oppressed; it is a system.',
    related: ['heteronormativity', 'orientation', 'queer'],
    people: ['rich', 'butler'], units: ['ch7'],
    questions: ['What everyday questions presume the script?']
  });

  T('crisis', 'Crisis (as political technology)', 'politics', [], {
    short: 'A declaration of emergency that turns facts into fetish objects and justifies defending “what is” in the name of survival.',
    long: 'Crises are produced by designating something as already under threat; this installs it as what we must fight for. Ahmed’s examples: the “crisis” of the family (divorce rates), terrorism, asylum.',
    ahmed: 'Declaring a crisis is not making something from nothing but reading facts as threat.',
    genealogy: 'Hall et al., *Policing the Crisis*; Campbell; Massumi.',
    example: 'The post-9/11 “state of emergency”.',
    misread: 'Not saying there are no real crises.',
    related: ['security', 'fear', 'fetishism'],
    people: ['campbell', 'massumi'], units: ['ch3'],
    questions: ['Which “crises” are currently declared, and who benefits?']
  });

  T('embodied-thought', 'Embodied thought', 'core', ['embodied thought'], {
    short: 'Rosaldo’s phrase for emotions as thoughts “seeped with the apprehension that ‘I am involved’”; Ahmed’s alternative to the reason/emotion binary.',
    long: 'Rather than defend feminism as “rational”, Ahmed contests the opposition: emotion is not “the unthought”, and “rational thought” is not unemotional.',
    ahmed: 'The phrase supports her claim that knowledge is bound up with feeling.',
    genealogy: 'Michelle Rosaldo (1984); feminist epistemology.',
    example: 'A scholar’s anger as part of how she knows.',
    misread: 'Not a claim that all thought is emotion.',
    related: ['anger', 'phenomenology'],
    people: ['rosaldo'], units: ['ch8'],
    questions: ['How do your emotions inform what you know?']
  });

  T('emotional-labour', 'Emotional labour', 'core', ['emotional labour'], {
    short: 'Work done to manage feelings (one’s own and others’); Hochschild’s term, extended by Ahmed to everyday life and diversity work.',
    long: 'In *The Managed Heart* (1983), Hochschild showed that service workers manage feeling for a display. Ahmed extends it: the bride who “saves the day”; the Black trainer who must counter a stereotype; those who must make others comfortable.',
    ahmed: 'The concept marks hidden work behind comfort and happiness.',
    genealogy: 'Hochschild; feminist labour theory.',
    example: 'Building rapport against a stereotype.',
    misread: 'Not only paid work.',
    related: ['comfort', 'killjoy', 'stranger'],
    people: ['hochschild'], units: ['ch7', 'afterword'],
    questions: ['What emotional labour do you do without recognition?']
  });

  T('empathy', 'Empathy (and fellow-feeling)', 'theory', ['empathy'], {
    short: 'Imagining oneself into another’s feelings; Ahmed argues it keeps the difference it seeks to overcome — a “wish feeling”.',
    long: 'Empathy and sympathy require imagining how the other feels, which depends on fantasy. “I want to feel your pain” is wanted only insofar as one does not already have it. Empathy can convert the other’s pain into “my sadness” (appropriation).',
    ahmed: 'She proposes an ethics of being affected by what one cannot know.',
    genealogy: 'Scheler; Solomon; Spelman; Hartman.',
    example: 'The Christian Aid letter.',
    misread: 'Not a rejection of care.',
    related: ['compassion', 'ethics-of-not-knowing', 'testimony'],
    people: ['spelman', 'scheler', 'hartman'], units: ['ch1'],
    questions: ['What would be a better word than empathy for what we owe others?']
  });

  T('ethics-of-not-knowing', 'An ethics of not-knowing (impossible hearing)', 'theory', ['impossible hearing'], {
    short: 'Acting about what we cannot know — being open to being affected by another’s pain without appropriating it; hearing what is impossible.',
    long: 'Ahmed’s ethics begins from the other’s pain and moves towards them, without claiming to know it. It resists turning testimony into the hearer’s feelings and requires non-indigenous readers to take history “personally” without taking it as theirs.',
    ahmed: 'The ethic is explicitly tentative and paradoxical.',
    genealogy: 'Levinas; Butler on opacity; Spivak on listening.',
    example: 'Reading Fiona’s testimony.',
    misread: 'Not an excuse for inaction.',
    related: ['empathy', 'testimony', 'reconciliation'],
    people: ['levinas', 'butler', 'spivak'], units: ['ch1', 'ch5'],
    questions: ['What practices make a hearing less appropriating?']
  });

  T('fantasy', 'Fantasy', 'theory', [], {
    short: 'In Ahmed, shared imaginings (the ordinary white subject; the cannibal other; the “could-be” terrorist) that organise feeling and justify action.',
    long: 'Fantasies of incorporation (“he’s going to eat me up”), of the nation as loved object, of the family’s reproduction organise fear, hate and love. They are not private but circulate in language and images.',
    ahmed: 'Treating fantasy as social lets her connect psychoanalysis and politics.',
    genealogy: 'Freud; Lacan; Žižek.',
    example: 'The fantasy that whites “built this land”.',
    misread: 'Not “unreal”: fantasies have effects.',
    related: ['fear', 'ideal', 'nation'],
    people: ['freud', 'zizek'], units: ['ch2', 'ch3', 'ch6'],
    questions: ['Which fantasies organise your political environment?']
  });

  T('feminism', 'Feminism (as attachment)', 'politics', [], {
    short: 'A politics shaped by what it is against and for; for Ahmed, an emotional and attached response to the world, not a transcendence of norms.',
    long: 'Chapter 8 argues that feminism begins in pain and anger, is opened by wonder, and persists through hope; its objects (patriarchy, gender) are not given; its “we” is an effect; and feminist attachments are not a failure but a condition of change.',
    ahmed: 'Her feminism is explicitly intersectional and transnational (Lorde, hooks, Mohanty).',
    genealogy: 'Second-wave feminism; Black feminist thought; queer theory.',
    example: 'Consciousness-raising groups.',
    misread: 'Not one doctrine.',
    related: ['anger', 'wonder', 'hope', 'solidarity'],
    people: ['lorde', 'hooks', 'mohanty'], units: ['ch8'],
    questions: ['What is feminism against, for you — and for whom is it?']
  });

  T('grief', 'Grief / grievability', 'politics', [], {
    short: 'Mourning loss; “grievable” lives (Butler) are those recognised as losable. Ahmed examines who is grieved, and how grief becomes the nation’s.',
    long: 'In Chapters 6–7 and the Conclusion, grief aligns subjects with ideals (“could-have-been-me”), marks hierarchies of the dead, and can absorb queer or Iraqi losses into national narratives. She proposes sharing impressions without making “our loss”.',
    ahmed: 'She values grief but warns against appropriation.',
    genealogy: 'Freud; Butler; Eng & Kazanjian; Crimp.',
    example: 'The Names Project Quilt; 9/11 portraits.',
    misread: 'Not saying do not grieve.',
    related: ['melancholia', 'compassion', 'testimony'],
    people: ['butler', 'eng', 'freud'], units: ['ch6', 'ch7', 'conclusion'],
    questions: ['Whose deaths are publicly grieved where you live?']
  });

  T('happiness', 'Happiness / happy objects', 'politics', ['happy objects', 'happiness'], {
    short: 'Things become “happy objects” by being promised to bring happiness, which orients us towards them before any encounter; happiness is not a sign of justice.',
    long: 'In the Conclusion and Afterword, Ahmed shows happiness as promise, telos and social command; it sustains investment in norms and nation; it is a technology of citizenship (“whose happiness comes first”).',
    ahmed: 'She develops it in *The Promise of Happiness* (2010).',
    genealogy: 'Locke; Hume vs Smith; Berlant; Hochschild.',
    example: 'The wedding day as “happiest day of your life”.',
    misread: 'Not anti-happiness.',
    related: ['killjoy', 'affect-alien', 'attachment', 'justice'],
    people: ['hochschild', 'berlant'], units: ['conclusion', 'afterword'],
    questions: ['What are you promised will make you happy?']
  });

  T('hate-crime', 'Hate crime', 'politics', ['hate crime'], {
    short: 'Crime motivated by group identity; Ahmed argues the category is useful because it names hate as attachment, limited because it treats identity as a prior cause and psychologises power.',
    long: 'The word “because” in legal definitions presumes group identity precedes the crime. Ahmed argues violence also seals bodies into identities. She advocates listening to the affective life of injustice rather than treating the victim’s body as evidence.',
    ahmed: 'Her stance is a careful middle path.',
    genealogy: 'Matsuda, Butler, Goldberg, Rosga, Jacobs & Potter.',
    example: '*Wisconsin v. Mitchell*.',
    misread: 'She does not oppose hate-crime law as such.',
    related: ['hate', 'performativity', 'racialisation'],
    people: ['matsuda', 'butler'], units: ['ch2'],
    questions: ['What would a better legal response to hate look like?']
  });

  T('healing', 'Healing (and recovery as exposure)', 'politics', [], {
    short: 'The language linking therapy to national reconciliation; Ahmed argues healing should expose the wound rather than cover it over — a good scar sticks out.',
    long: 'She is wary of reading collectives as individuals that “have” feelings, of making emotions outcomes, and of recovery that is a covering over (re-covering). Healing as exposure keeps injury visible.',
    ahmed: 'She defends feeling better without making it the goal.',
    genealogy: 'Minow; Braithwaite; truth commissions.',
    example: 'Reconciliation as national recovery.',
    misread: 'Not anti-therapy.',
    related: ['scar', 'testimony', 'restorative-justice'],
    people: ['minow', 'braithwaite'], units: ['ch1', 'ch5', 'conclusion'],
    questions: ['What does a healing that exposes look like?']
  });

  T('heteronormativity', 'Heteronormativity', 'politics', ['heteronormativity', '(hetero)normative'], {
    short: 'The assumption that heterosexuality is normal, and the regulatory ideal that associates sexual conduct with a good life (match, marriage, reproduction, citizenship).',
    long: 'It is felt as comfort for those who inhabit it, shapes spaces, and is reproduced through everyday scripts and national sentiment. Ahmed stresses that it includes monogamy, class and race “matching”, and good citizenship.',
    ahmed: 'She treats it as affective investment, not only as belief.',
    genealogy: 'Warner & Berlant; Rich; Butler.',
    example: '“National heterosexuality” as sentimental space.',
    misread: 'Not the same as individual homophobia.',
    related: ['compulsory-heterosexuality', 'comfort', 'queer'],
    people: ['berlant', 'warner', 'rich'], units: ['ch5', 'ch6', 'ch7'],
    questions: ['How does heteronormativity appear in non-sexual institutions?']
  });

  T('hybrid-whiteness', 'Hybrid whiteness', 'politics', ['hybrid whiteness'], {
    short: 'Ahmed’s name for how the multicultural nation confirms its whiteness by incorporating and being “bronzed” by difference — the nation as hybrid, mobile, loving difference.',
    long: 'In Chapter 6, the mixed-race “new English rose” becomes the nation’s idealised face: a fetish cut off from visible inter-racial intimacy. The nation reproduces itself as loving difference by taking it in.',
    ahmed: 'The term describes a structure, not individuals.',
    genealogy: 'Bhabha; Fortier; Hage; Wiegman.',
    example: 'The Observer article on Genevieve.',
    misread: 'Not saying mixed-race people are fake.',
    related: ['whiteness', 'multiculturalism', 'fetishism'],
    people: ['bhabha', 'fortier'], units: ['ch6'],
    questions: ['Where is difference used as a sign of the nation’s virtue?']
  });

  T('justice', 'Justice (and “just emotions”)', 'politics', [], {
    short: 'The Conclusion’s question: justice is not reducible to feeling bad or good; emotions are effects and investments in norms and involved in justice.',
    long: 'She rejects justice as virtue (Solomon), as detached reason (Kant), and as happiness. She argues justice should leave room for feeling better without making it the goal.',
    ahmed: 'The positive proposal is working with and on the wounds.',
    genealogy: 'Solomon, Berlant, Benhabib, Young.',
    example: 'The scar.',
    misread: 'Not offering a theory of justice.',
    related: ['restorative-justice', 'healing', 'testimony'],
    people: ['solomon', 'berlant'], units: ['conclusion'],
    questions: ['What would justice require beyond feelings?']
  });

  T('killjoy', 'Feminist killjoy', 'core', ['killjoy'], {
    short: 'The one who gets in the way of others’ happiness by naming a problem and so becomes the problem; Ahmed finds political energy in accepting the assignment.',
    long: 'The killjoy appears in the Afterword and *The Promise of Happiness*: a figure produced by happy objects who is willing to “get in the way of any happiness that does not have your agreement”. It connects to Chapter 8’s “angry woman of colour”.',
    ahmed: 'She treats the figure as a resource for politics, not a pathology.',
    genealogy: '*The Promise of Happiness*; Lorde; Frye.',
    example: 'The person who objects at a family dinner.',
    misread: 'Not merely a joke.',
    related: ['affect-alien', 'happiness', 'anger'],
    people: ['lorde'], units: ['afterword', 'ch8'],
    questions: ['When have you been called a killjoy?']
  });

  T('melancholia', 'Melancholia / mourning', 'theory', ['melancholia', 'melancholic'], {
    short: 'Freud: mourning lets go of the lost object; melancholia keeps it inside the ego. Ahmed reworks both: keep impressions alive without incorporating the other.',
    long: 'Butler uses melancholia for gender and heterosexuality; Eng & Kazanjian value melancholic persistence; Ahmed proposes “impressions” as a way to preserve attachments that are neither letting go nor taking in.',
    ahmed: 'This model is used for queer grief and for feminism’s attachment to its objects.',
    genealogy: 'Freud (1917); Butler; Eng & Kazanjian; Silverman & Klass.',
    example: 'Queer responses to 9/11.',
    misread: 'Not “depression”.',
    related: ['grief', 'attachment', 'impression'],
    people: ['freud', 'butler', 'eng'], units: ['ch5', 'ch7', 'ch8'],
    questions: ['When is refusing to let go ethical?']
  });

  T('mobility', 'Mobility (and containment)', 'politics', [], {
    short: 'Freedom to move through space; fear and security distribute mobility unevenly: some bodies are expanded, others shrunk or detained.',
    long: 'Ahmed links the politics of fear to the politics of mobility (women’s restricted public space; the war on terror’s “free flow” of capital; detention and profiling). She is critical of idealising movement in theory (queer, cosmopolitan).',
    ahmed: 'The concept shows the interdependence of freedom and containment.',
    genealogy: 'Stanko; Valentine; Ahmed et al. *Uprootings/Regroundings*.',
    example: 'Women’s advice not to walk alone; airport screening.',
    misread: 'Not only physical movement.',
    related: ['fear', 'security', 'queer'],
    people: ['stanko'], units: ['ch3', 'ch7'],
    questions: ['Whose mobility is treated as a right?']
  });

  T('multiculturalism', 'Multiculturalism (as conditional love)', 'politics', ['multiculturalism', 'multicultural'], {
    short: 'In Ahmed’s analysis, a national ideal of loving difference that sets conditions of love and casts those who fail it as a breach.',
    long: 'The UK’s Home Office documents set “learn to be British” and “mix” as conditions; riots are read as failure to integrate; the nation’s own narcissism is concealed. She does not reject multiculturalism’s aims but analyses the discourse of love.',
    ahmed: 'The critique focuses on state discourse, not on communities’ own practices.',
    genealogy: 'Parekh; Fortier; Hage; Cantle.',
    example: 'The 2002 White Paper.',
    misread: 'Not an attack on diversity.',
    related: ['love', 'hybrid-whiteness', 'nation'],
    people: ['parekh', 'fortier'], units: ['ch6', 'afterword'],
    questions: ['What conditions does “welcome” impose?']
  });

  T('nation', 'Nation (as body and loved object)', 'politics', [], {
    short: 'Imagined as a body with skin, a family, an ideal and an object of love, which others may threaten or fail.',
    long: 'The book shows emotions making nations: the “soft touch”, national shame, the national ideal, the happy nation. Ahmed treats “the nation” as an effect of how bodies move towards it.',
    ahmed: 'She does not treat nations as unreal but as made.',
    genealogy: 'Anderson; Yuval-Davis; McClintock.',
    example: '“The nation mourns.”',
    misread: 'Not rejecting all belonging.',
    related: ['ideal', 'love', 'national-shame'],
    people: ['yuval-davis', 'mcclintock'], units: ['intro', 'ch5', 'ch6'],
    questions: ['How is your nation imagined as a body?']
  });

  T('national-shame', 'National shame', 'politics', ['national shame'], {
    short: 'The shame attributed to the nation (not individuals) for past wrongs, which can function as nation-building and a route to restored pride.',
    long: 'The *Bringing Them Home* preface and Sorry Books illustrate how shame confirms ideals; Ahmed critiques the conversion of shame to pride and the positioning of the nation as the subject of feeling.',
    ahmed: 'She is not hostile to acknowledgement but to its closure.',
    genealogy: 'Gaita; Barkan; Williams.',
    example: 'The Governor-General’s preface.',
    misread: 'Not “shame is bad”.',
    related: ['shame', 'apology', 'reconciliation'],
    people: ['gaita', 'barkan'], units: ['ch1', 'ch5'],
    questions: ['Can a nation be ashamed without recovering pride?']
  });

  T('ordinary', 'The ordinary', 'core', [], {
    short: 'What is taken for granted, not felt; for Ahmed it is produced (the ordinary white subject) and denaturalised by wonder.',
    long: 'Chapter 2 shows hate producing the ordinary as endangered; Chapter 8 links the ordinary to non-feeling and comfort; wonder reveals it as made.',
    ahmed: 'She treats “ordinary” as an effect of reification and history.',
    genealogy: 'Wittgenstein; Marx; Williams.',
    example: 'The “ordinary” farmer or taxpayer.',
    misread: 'Not “boring”.',
    related: ['wonder', 'comfort', 'fantasy'],
    people: ['marx'], units: ['ch2', 'ch8'],
    questions: ['What do you treat as ordinary?']
  });

  T('othering', 'Othering', 'politics', ['othering'], {
    short: 'The process by which others are produced as “not us”; Ahmed emphasises how it works through emotions (attributing feelings, making others objects of feeling).',
    long: 'Drawing on Black and critical race scholarship (Said, Fanon, Lorde, hooks, Bhabha), she shows othering as affective: others are made fearsome, disgusting, hated.',
    ahmed: 'She wants to avoid psychologising racism.',
    genealogy: 'Said; Fanon; Spivak.',
    example: '“Swarms” of asylum seekers.',
    misread: 'Not merely “prejudice”.',
    related: ['racialisation', 'body-out-of-place'],
    people: ['fanon', 'lorde', 'hooks', 'bhabha'], units: ['intro'],
    questions: ['How does othering use emotion words?']
  });

  T('pleasure', 'Pleasure (queer pleasures)', 'emotion', [], {
    short: 'An opening of bodies to others and the world; queer pleasures disturb comfort but can also be commodified and idealised.',
    long: 'Ahmed contrasts pleasure with pain (Leder): pleasure opens bodies and claims space. The pleasure economy rewards “good” pleasures; queer pleasures can be profitable (pink pound) or romanticised.',
    ahmed: 'Her stance is non-sentimental hope.',
    genealogy: 'Leder; Bronski; Hennessy; Warner.',
    example: 'Queer gatherings in streets and clubs.',
    misread: 'Not anti-pleasure.',
    related: ['queer', 'comfort', 'fetishism'],
    people: ['leder', 'hennessy'], units: ['ch7'],
    questions: ['When is pleasure political?']
  });

  T('queer', 'Queer (as sticky sign)', 'politics', [], {
    short: 'A term once of abuse that became a name for an alternative orientation; Ahmed treats it as sticky: it keeps its history of insult.',
    long: 'Queer theory advocates anti-normativity; Ahmed suggests queer works by being affected by the norms it fails to reproduce. She explores queer feelings without assuming a queer emotional essence.',
    ahmed: 'The sign’s force depends on collective activism, not individuals alone.',
    genealogy: 'Butler; Sedgwick; Halberstam; Rechy.',
    example: 'Reclaiming “queer”.',
    misread: 'Not one identity.',
    related: ['heteronormativity', 'comfort', 'pleasure', 'sticky'],
    people: ['butler', 'sedgwick', 'halberstam'], units: ['ch7'],
    questions: ['What is lost and gained by the word “queer”?']
  });

  T('racialisation', 'Racialisation', 'politics', ['racialisation', 'racialised'], {
    short: 'The process by which bodies and spaces are made “racial”; in the book, through affect, stereotype and the white gaze.',
    long: 'Fanon’s “epidermalisation” and Ahmed’s analyses of the stranger, hate and fear show how racialisation operates through emotion: the Black body is “sealed” as an object of fear or hate.',
    ahmed: 'She distinguishes it from “race” as a given attribute.',
    genealogy: 'Fanon; Hall; Omi & Winant.',
    example: '“Looks black.”',
    misread: 'Not equal to “racism” alone.',
    related: ['stereotype', 'othering', 'whiteness'],
    people: ['fanon'], units: ['ch2', 'ch3', 'afterword'],
    questions: ['How are spaces racialised in your city?']
  });

  T('reconciliation', 'Reconciliation', 'politics', ['reconciliation'], {
    short: 'In Australia, the process of coming to terms with colonial wrongs; Ahmed shows it can be a way of making others fit the white nation or of reconciling the nation to itself.',
    long: 'Nicoll notes “reconcile” can mean “come to terms with” or “make passive”. Ahmed suggests a politics based on learning to live with the impossibility of reconciliation, “beside each other, yet not as one”.',
    ahmed: 'The final line of Chapter 1 states her alternative.',
    genealogy: 'Nicoll; *Bringing Them Home*; truth commissions.',
    example: 'Sorry Day.',
    misread: 'Not opposing repair.',
    related: ['national-shame', 'apology', 'stolen-generations'],
    people: ['gaita'], units: ['ch1', 'ch5'],
    questions: ['What would reconciliation without assimilation look like?']
  });

  T('restorative-justice', 'Restorative justice', 'politics', ['restorative justice'], {
    short: 'A model of justice that centres harm to persons and emotional encounter, remorse, forgiveness and reintegration; Ahmed critiques its emotional signs and idealised bonds.',
    long: 'She is sympathetic to its emphasis on the personal but notes risks: personalisation, remorse as sign, reintegrative shaming in loving families, and the assumption that justice is “good relationships”, which others might have the right to refuse.',
    ahmed: 'She focuses on the literature’s idealisation of the social bond.',
    genealogy: 'Braithwaite; Johnstone; Zehr.',
    example: 'Victim–offender conferences.',
    misread: 'Not dismissing victims’ voices.',
    related: ['healing', 'justice', 'shame'],
    people: ['braithwaite', 'johnstone', 'minow'], units: ['conclusion'],
    questions: ['What are the rights of the harmed regarding contact?']
  });

  T('scar', 'The good scar', 'core', ['good scar'], {
    short: 'The book’s closing image: a good scar is one that sticks out — it allows healing but exposes the injury, rather than hiding it.',
    long: 'Against the truism that the best scar is invisible, Ahmed proposes that just emotions work with and on wounds. Recovery as exposure rather than covering over.',
    ahmed: 'The image makes her critique of national healing concrete.',
    genealogy: 'Conclusion of the book.',
    example: 'Memorials that mark rather than erase.',
    misread: 'Not valorising injury.',
    related: ['healing', 'justice'],
    people: [], units: ['conclusion'],
    questions: ['What institutions treat wounds as scars that show?']
  });

  T('security', 'Security (and “the not”)', 'politics', [], {
    short: 'Securing a border requires insecurity of “the not”; Ahmed analyses security discourse as producing the threat it defends against.',
    long: 'Dillon: security presupposes insecurity. In the war on terror, “could-be” figures extend powers of detention; crisis narratives justify “what is” in the name of survival.',
    ahmed: 'She emphasises its affective foundation.',
    genealogy: 'Dillon; Campbell; Massumi.',
    example: 'Detention on suspicion.',
    misread: 'Not claiming no one needs safety.',
    related: ['fear', 'crisis', 'mobility'],
    people: ['dillon', 'campbell'], units: ['ch3'],
    questions: ['What does your institution call “security”?']
  });

  T('solidarity', 'Solidarity', 'politics', ['solidarity'], {
    short: 'Commitment to others’ struggles without assuming the same pain or hope; Ahmed ends on solidarity as shared ground, not shared feeling.',
    long: 'Dean’s “reflective solidarity” and Mohanty’s “transnational solidarity” give her terms. The feminist “we” is an effect of those who move towards it.',
    ahmed: 'Her final claim is that “we do live on common ground”.',
    genealogy: 'Dean; Mohanty; Lorde.',
    example: 'Feminists speaking against the war.',
    misread: 'Not unity.',
    related: ['hope', 'feminism', 'love'],
    people: ['dean', 'mohanty'], units: ['ch6', 'ch8'],
    questions: ['What is the difference between solidarity and empathy?']
  });

  T('stereotype', 'Stereotype', 'theory', ['stereotype', 'stereotypes'], {
    short: 'A fixed account of the other’s being repeated as if from nowhere; Bhabha: the repetition required to fix it shows insecurity.',
    long: 'In Fanon’s scene, “the Negro is…” stereotypes make the encounter readable in advance. Diversity trainers manage stereotypes that are “well and truly fixed”.',
    ahmed: 'She notes that fixity is an effect of repetition and hence vulnerable.',
    genealogy: 'Bhabha; Hall.',
    example: '“Black male sexual stereotype”.',
    misread: 'Not only cognitive.',
    related: ['racialisation', 'sticky', 'stranger'],
    people: ['bhabha', 'fanon'], units: ['ch3', 'afterword'],
    questions: ['How do stereotypes arrive before people?']
  });

  T('stranger', 'Stranger / stranger danger', 'core', ['stranger danger'], {
    short: 'Not anyone we do not know but a charged figure: some bodies are recognised as strangers by techniques that are bodily and institutional; the charge arrives before the body.',
    long: 'In the Afterword, Ahmed shows how “stranger danger” training (Neighbourhood Watch; child protection) produces strangers; “could be anyone” points to some bodies; stop and search is a blunt instrument.',
    ahmed: 'She starts from *Strange Encounters* (2000).',
    genealogy: 'Simmel; Fanon; Ahmed (2000).',
    example: 'Trayvon Martin.',
    misread: 'Not the same as “unknown person”.',
    related: ['body-out-of-place', 'racialisation', 'attunement'],
    people: ['fanon', 'yancy'], units: ['afterword'],
    questions: ['Who is the “stranger” in your neighbourhood?']
  });

  T('stolen-generations', 'The Stolen Generations', 'politics', ['Stolen Generation', 'Stolen Generations'], {
    short: 'Indigenous Australian children forcibly removed from families under assimilation policies; documented in *Bringing Them Home* (1997).',
    long: 'The report collected testimonies and recommended an apology and reparations; the Rudd government apologised in 2008. Ahmed reads the report and a testimony (Fiona) in Chapters 1 and 5.',
    ahmed: 'She emphasises that readers must not take testimony as theirs.',
    genealogy: 'HREOC inquiry; Indigenous scholarship.',
    example: 'Fiona’s story.',
    misread: 'Not a single past event.',
    related: ['reconciliation', 'testimony', 'national-shame'],
    people: [], units: ['ch1', 'ch5'],
    questions: ['How should settler readers read testimonies?']
  });

  T('testimony', 'Testimony / witnessing', 'politics', ['testimony', 'testimonies'], {
    short: 'Telling injury to be witnessed; Ahmed treats testimony as recognition and exposure, making demands on hearers, not necessarily therapeutic.',
    long: 'Testimony makes a concealed history visible; hearers may take it as theirs (appropriation). Truth commissions rely on it. “Testimonial culture” has risks of fetishising the wound.',
    ahmed: 'She values testimony while resisting converting it into the nation’s feelings.',
    genealogy: 'Felman & Laub; Ahmed & Stacey.',
    example: '*Bringing Them Home*.',
    misread: 'Not “just stories”.',
    related: ['stolen-generations', 'ethics-of-not-knowing', 'wounded-attachments'],
    people: ['scarry', 'minow'], units: ['ch1', 'conclusion'],
    questions: ['What does it mean to hear testimony justly?']
  });

  T('whiteness', 'Whiteness', 'politics', ['whiteness'], {
    short: 'A national and bodily norm presented as unmarked; Ahmed shows it produced through love, hate, fear and ideals; it may be “hybrid” in multiculturalism.',
    long: 'Whiteness is “racial kindred” in far-right discourse, an unmarked ideal in universalism, and a hybrid ideal in multicultural love. It shapes who inhabits spaces comfortably.',
    ahmed: 'Her later “Phenomenology of Whiteness” (2007) develops it as orientation.',
    genealogy: 'Fanon; hooks; Hage; Dyer.',
    example: '“Our White Racial Family”.',
    misread: 'Not a biological category.',
    related: ['hybrid-whiteness', 'ideal', 'racialisation'],
    people: ['fanon', 'hooks'], units: ['ch2', 'ch6'],
    questions: ['What are the “unmarked” norms around you?']
  });

  T('witness', 'Witness', 'theory', [], {
    short: 'The one who sees or hears; shame and grief require witnesses; testimonies call for them; disgust speech acts call on witnesses to share the pulling away.',
    long: 'Ahmed returns to witnessing in many chapters: the witness in shame, the witness of the nation (“the world”), the witness who may appropriate. “Not just before others but for others.”',
    ahmed: 'She examines the politics of witnessing.',
    genealogy: 'Probyn; Oliver; Sartre’s “look”.',
    example: 'Sorry Books’ imagined “eyes of the world”.',
    misread: 'Not a neutral spectator.',
    related: ['shame', 'testimony', 'apology'],
    people: ['probyn', 'oliver'], units: ['ch1', 'ch4', 'ch5'],
    questions: ['Who are the witnesses in your story?']
  });

  T('wounded-attachments', 'Wounded attachments / wound culture', 'politics', ['wounded attachments', 'wound culture', 'fetishisation of the wound'], {
    short: 'Brown’s term for politics attached to the injury that grounds it; Ahmed agrees the wound-as-identity is fetishised but argues for remembering how wounds were made rather than forgetting.',
    long: 'Brown follows Nietzsche’s ressentiment: reaction substitutes for action. Ahmed responds that action cannot be pure, forgetting repeats violence, and the key is how wounds enter politics (uneven stories).',
    ahmed: 'She asks for different kinds of remembrance, with hooks: “break its hold”.',
    genealogy: 'Brown; Nietzsche; Berlant; Kleinman, Das & Lock.',
    example: 'Testimonial culture.',
    misread: 'Not dismissing injury.',
    related: ['pain', 'fetishism', 'anger', 'attachment'],
    people: ['brown', 'nietzsche', 'hooks', 'berlant'], units: ['ch1', 'ch2', 'ch8'],
    questions: ['How can injury ground politics without becoming identity?']
  });

  CP.addTerms(list);
})();
