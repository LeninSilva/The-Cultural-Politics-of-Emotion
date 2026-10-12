/* Chapter 7: Queer Feelings — authored guide. */
(function () {
  CP.unit('ch7', {
    tagline: 'Norms are felt as comfort. Queer politics begins in discomfort, grief and pleasure — not as freedom from norms but as a different way of inhabiting them.',
    claim: 'Heterosexuality works as a **comfort zone**: spaces take the shape of the bodies that inhabit them, so those bodies “sink in” and do not notice. **Queer feelings** are not an essence of queer people but effects of failing to fit: **discomfort** (which makes surfaces felt and can rework the script), **grief** (which asks how to share loss without making it the nation’s loss) and **pleasure** (which opens bodies, claims space and disturbs comfort). Queer politics does not transcend norms; it is **affected by** the repetition of norms it fails to reproduce — and that attachment is what lets queer do its work.',
    glance: [
      'Compulsory heterosexuality as an accumulation of repetition: norms are like “repetitive strain injuries” on the body.',
      '(Dis)comfort: comfort is the fit between body and space; heteronormativity is public comfort; queer discomfort is “non-sinking” — generative, not just negative. Assimilation vs transgression are not choices but effects of who can inhabit norms.',
      'Queer grief after 9/11: queer losses are excluded or absorbed into the nation’s grief (“we too”). Alternative: grieve *with* and not *for* — share impressions without making “our loss”. Continuing bonds, melancholia as ethical.',
      'Queer pleasures: neither innocent nor commodity-proof; they open bodies and take up space — and must be considered alongside class, race and capital.'
    ],
    why: 'Debates about marriage equality, “born this way”, pride, assimilation, “pinkwashing”, and queer politics’ ambivalence about the nation are all debates about norms and feelings. Ahmed’s vocabulary (comfort, fit, orientation, “queer as a sticky sign”) is a toolkit for any minority or non-normative position: why “just be yourself” is harder than it sounds, why inclusion can come at a cost, and why discomfort can be a form of knowledge. It also introduces ideas that she takes forward in *Queer Phenomenology* (2006) and *The Promise of Happiness* (2010).',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'This chapter discusses homophobia, HIV/AIDS, bereavement, sex and 9/11 mourning. It includes Ahmed’s first-person reflections on queer life.' } }],
    argument: {
      steps: [
        { h: 'The family as global politics', p: 'Reproduction of “life as we know it” links xenophobia, homophobia and fear of miscegenation (Goodman). Heterosexuality is a script that binds the familial with the global.' },
        { h: 'Norms are felt on the body', p: 'Compulsory heterosexuality (Rich) shapes what bodies *can do* through repetition (RSIs). Sexual orientation is a way of orienting the body, shaping how one enters spaces.' },
        { h: 'Queer feelings ≠ feeling queer', p: 'Ahmed explores queer feelings without assuming queerness has a particular emotional life; “queer” is a sticky sign preserving its history of abuse.' },
        { h: 'Comfort', p: 'Comfort is fit; spaces take the shape of bodies that repeatedly inhabit them; heteronormativity is public comfort that conceals labour (“feeling fetishism”).' },
        { h: 'Assimilation, transgression, discomfort', p: 'Sullivan’s “virtually normal” is melancholic assimilation (Crimp); but queer ideals of mobility are fetishised (Epps, Martin). Queer families are doing words; discomfort generates rework. Assimilation/transgression are effects, not choices.' },
        { h: 'Queer grief', p: 'Queer lives are not recognised as losable; the 9/11 queer responses say “we too”, blanketing the nation. Mourning vs melancholia: keep impressions alive; share without “our loss”.' },
        { h: 'Queer pleasures', p: 'Pleasure is not an escape: it is commodified (pink pound), gendered, classed — yet opens bodies and takes up space, disturbing comfort. Queer hope is non-sentimental: it relies on the persistence of the norms that make it queer.' }
      ]
    },
    diagram: {
      title: 'Chapter 7: from comfort zones to queer attachments', w: 620,
      nodes: [
        { id: 'a', x: 95, y: 80, w: 140, label: 'Compulsory heterosexuality', sub: 'repetition shapes bodies', kind: 'b' },
        { id: 'b', x: 270, y: 80, w: 140, label: 'Comfort', sub: 'fit; the surface disappears', kind: 'e' },
        { id: 'c', x: 445, y: 80, w: 150, label: 'Discomfort', sub: 'non-sinking; surface felt', kind: 'a' },
        { id: 'd', x: 95, y: 205, w: 140, label: 'Queer grief', sub: 'not “our” loss', kind: 'c' },
        { id: 'e', x: 270, y: 205, w: 140, label: 'Queer pleasure', sub: 'opens bodies; takes space', kind: 'c' },
        { id: 'f', x: 445, y: 205, w: 150, label: 'Reworking norms', sub: 'inhabiting them differently', kind: 'd' },
        { id: 'g', x: 270, y: 320, w: 400, label: 'Queer is not transcendence: it works by being affected by what it fails to reproduce', kind: 'ghost' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'for some bodies' }, { from: 'c', to: 'd', curve: 30 }, { from: 'c', to: 'e' }, { from: 'c', to: 'f' }, { from: 'd', to: 'g', dash: true }, { from: 'e', to: 'g', dash: true }, { from: 'f', to: 'g', dash: true }],
      caption: 'Discomfort is the hinge: it is both the cost of non-fit and the condition of rework.'
    },
    context: [
      'The chapter’s intellectual field is **queer theory** — Rich, Butler, Sedgwick, Warner, Berlant, Halberstam, Crimp, Edelman, Muñoz, Eng — and **queer-of-colour and postcolonial critique** (Gopinath, Fortier, Epps, Martin). Ahmed’s distinctive resources are phenomenology (orientation, comfort, surfaces) and the book’s own concepts (impressions, stickiness, affective economies).',
      'The political contexts: **gay marriage debates** (the 2000s; Butler’s “Is Kinship Always Already Heterosexual?”); **AIDS activism** and the **Names Project Quilt**; **post-9/11** mourning and queer responses (NLGJA); and global capitalism’s “pink pound”.'
    ],
    terms: ['heteronormativity', 'compulsory-heterosexuality', 'queer', 'comfort', 'orientation', 'surfaces', 'melancholia', 'grief', 'pleasure', 'attachment', 'sticky', 'fetishism', 'affective-economies', 'ideal'],
    people: ['rich', 'butler', 'sedgwick', 'warner', 'berlant', 'crimp', 'halberstam', 'sullivan', 'eng', 'cvetkovich', 'leder', 'gopinath', 'weston', 'freud', 'hennessy'],
    sources: [
      { who: 'Adrienne Rich', work: '“Compulsory Heterosexuality and Lesbian Existence” (1980)', role: 'Heterosexuality as a political institution, not just orientation.', use: 'The phrase “compulsory heterosexuality” and the notion of cumulative effects.' },
      { who: 'Lauren Berlant & Michael Warner', work: '“Sex in Public” (1998) / “National Heterosexuality”', role: 'Heterosexuality as the mechanism by which national culture is imagined as sentimental.', use: 'The “sanitised space of sentimental feeling”.' },
      { who: 'Andrew Sullivan; Douglas Crimp', work: 'Virtually Normal (1995); Melancholia and Moralism (2002)', role: 'Assimilationist gay conservatism; Crimp’s melancholic reading.', use: 'Case for assimilation as identification with the homophobe’s repudiation.' },
      { who: 'Judith Butler', work: '“Is Kinship Always Already Heterosexual?” (2002); Psychic Life of Power (1997)', role: 'Gay marriage extends norms; heterosexual melancholia and ungrievable loss.', use: 'Frame for queer grief and the marriage dilemma.' },
      { who: 'Tim Dean & Christopher Lane; Judith Halberstam', work: 'Homosexuality and Psychoanalysis (2001); queer anti-normativity', role: 'Queer as resistance to all norms.', use: 'The “ideal” queer life that Ahmed questions.' },
      { who: 'Kath Weston; Jacqui Gabb; Weeks, Heaphy & Donovan', work: 'Families We Choose (1991); Same Sex Intimacies (2001)', role: 'Chosen families; families as practices; lesbian parenting.', use: 'Case for queer families as doing and non-ideal.' },
      { who: 'Marita Sturken; David Eng; Ann Cvetkovich', work: 'Memorials; “loss” and 9/11 grief; An Archive of Feelings (2003)', role: 'Hierarchies of the dead; heteronormativity in grief; AIDS mourning.', use: 'Frame for analysing the NLGJA statement.' },
      { who: 'Eng & Kazanjian; Silverman & Klass', work: 'Loss (2003); Continuing Bonds (1996)', role: 'Melancholia as an ethical response; maintaining bonds.', use: 'Alternative to Freud’s “letting go”.' },
      { who: 'Rosemary Hennessy; Michael Bronski; Warner', work: 'Profit and Pleasure (2000); Pleasure Principle (1998)', role: 'Commodification of queer; pleasure as political.', use: 'The risks and promises of queer pleasure.' },
      { who: 'Drew Leder', work: 'The Absent Body (1990)', role: 'Pleasure opens the body to the world.', use: 'Contrast with pain (Chapter 1).' }
    ],
    conversation: [
      { h: 'Queer negativity vs queer hope', p: 'Lee Edelman’s *No Future* (2004) argued that queerness should refuse the politics of “reproductive futurism” (the Child); José Esteban Muñoz’s *Cruising Utopia* (2009) argued for a queer utopian hope. Ahmed’s “queer hope is not sentimental” sits between them: hope that is non-transcendent and works through persistent attachments to norms. Heather Love (*Feeling Backward*, 2007) and Halberstam (*The Queer Art of Failure*, 2011) develop the politics of negative affect.' },
      { h: 'Marriage equality and its critics', p: 'Same-sex marriage has since become law in many countries (UK 2013; US *Obergefell*, 2015; Australia 2017). Butler’s and Ahmed’s worry — that it creates a new distinction between legitimate and illegitimate queer lives — is paralleled by Lisa Duggan’s “homonormativity” (2002) and by critiques that marriage equality channelled resources away from housing, health and trans justice.' },
      { h: 'Homonationalism and the NLGJA example', p: 'Jasbir Puar’s *Terrorist Assemblages* (2007) names “homonationalism”: how queer subjects are incorporated into the nation by being contrasted with racialised others (Muslims). Ahmed’s reading of queer 9/11 statements — where queer communities fold into national grief and hatred — is an early version.' },
      { h: 'Queer of colour critique', p: 'Roderick Ferguson (*Aberrations in Black*, 2004) and others argue that “queer” as a universal figure of mobility ignores racial and class histories. Ahmed’s citations of Gopinath, Epps and Martin and her own unease with the sign “queer” join this critique.' },
      { h: 'Queer phenomenology and affect', p: 'Ahmed’s own *Queer Phenomenology* (2006) develops “orientation” and “disorientation”; Cvetkovich’s *Depression: A Public Feeling* (2012) and Berlant & Edelman’s *Sex, or the Unbearable* (2014) extend the discussion of bad feelings and politics. Also see Sedgwick’s “reparative reading” as an alternative to suspicion.' }
    ],
    debates: ['queer-negativity', 'wounded-attachments', 'national-apologies', 'affective-turn'],
    questions: [
      'Where have you noticed comfort — a chair, a room, a script — only when it was absent? How does Ahmed’s “sinking” help make sense of that?',
      'Ahmed claims assimilation and transgression are not choices but effects of how subjects can inhabit norms. Do you agree? What about when people choose strategically?',
      'The NLGJA statement says “we too” felt vulnerable; Ahmed reads it as both challenging and supporting the nation’s narrative. How do you read the same words?',
      'What do you make of her proposal: share impressions of the lost without making them “our loss”? What would that look like in a memorial, a vigil, a book club?',
      'Is queer pleasure political? How do you weigh Ahmed’s warnings about commodification and masculinist “freedom” against the political uses of pleasure?'
    ],
    bridges: {
      back: 'Chapters 5–6 showed shame and love secure ideals; here, shame and love are experienced at the *edge* of the ideal: queer discomfort is the affect of not fitting. The chapter also picks up Chapter 1’s surfaces and pleasure as expansion (Leder).',
      forward: 'Chapter 8 asks about feminist attachments — anger, wonder and hope — as ways of keeping open the possibility of being affected by what we do not know, which is Chapter 7’s “queer hope” generalised to feminism.'
    },
    sections: [
      {
        title: 'Opening: Reproduction, Orientation and the Question of “Queer Feelings”',
        gist: 'Starting from Goodman’s claim that the family is defended as a matter of global politics, Ahmed argues that heterosexuality is a script of coupling and reproduction that shapes bodies through repetition (“repetitive strain injuries”). She introduces orientation, the cost of not following scripts, and her decision to study “queer feelings” without presuming that queerness has its own emotional essence.',
        moves: [
          { h: 'The family in global politics', p: 'The defence of the family links fear of strangers (xenophobia), queers (homophobia) and miscegenation: coupling as “birthing” of civilisation.' },
          { h: 'Compulsory heterosexuality', p: 'The accumulated effect of repeating heterosexuality as an ideal coupling shapes what bodies can do; norms surface as the surfaces of bodies (RSIs).' },
          { h: 'Orientation', p: 'Sexual orientation is how bodies are oriented towards and away from others, and how they enter social space.' },
          { h: 'Costs of not following', p: 'Refusing the script is still being affected by it: shame, melancholia. Might queer moments be the affirmation of failure, enjoying the negativity of shame?' },
          { h: 'Not “feeling queer”', p: 'Ahmed will not translate queer feelings into the emotional life of queer people; “queer” is produced through histories as a sign of failed being.' },
          { h: 'The plan', p: 'Norms and affects in debates on queer families (comfort/discomfort); grief (9/11); pleasure.' }
        ],
        voice: 'I do not want to say what queer people feel. I want to ask what happens to feelings when bodies do not follow the lines that have been laid out for them. Norms are not only ideas; they are repetitions that bend bodies as a repetitive task bends a wrist. If I speak of queer feelings, I mean feelings that are about that bending — the discomfort, the grief, the pleasure of not fitting — not feelings that belong to queers.',
        context: 'Rich’s 1980 essay frames heterosexuality as an institution. Butler’s *Gender Trouble* and *Bodies That Matter* give the model of norms as repeated performances. Ahmed’s *Queer Phenomenology* (2006) elaborates “orientation”; here, in 2004, the term is introduced to link emotions and bodily direction.',
        objection: 'Is “queer feelings” a fair choice if it avoids saying what queer lives feel like? Critics of queer theory’s abstraction (e.g., from sociologists of sexuality) ask for empirical specificity: who are the “queers” in the argument? Ahmed’s answer is that her focus is on affective *structures*, not on identities — though her first-person asides complicate the claim.',
        terms: ['heteronormativity', 'compulsory-heterosexuality', 'queer', 'orientation', 'surfaces'],
        people: ['rich', 'butler', 'goodman'],
        diagram: {
          title: 'Norms as repetitive strain', w: 600,
          nodes: [
            { id: 'a', x: 95, y: 80, w: 140, label: 'Narratives of the ideal couple', kind: 'b' },
            { id: 'b', x: 290, y: 80, w: 150, label: 'Repeated gestures & approaches', sub: 'some objects, not others', kind: 'a' },
            { id: 'c', x: 490, y: 80, w: 150, label: 'Bodies take shape', sub: 'twisted: able and unable', kind: 'a' },
            { id: 'd', x: 290, y: 205, w: 230, label: 'Orientation: a congealed history of approaches', kind: 'c' },
            { id: 'e', x: 290, y: 315, w: 330, label: 'To refuse the script is still to be affected by it (shame, melancholia)', kind: 'd' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e', dash: true }],
          caption: 'Compulsory means not necessary: it can be refused, but refusal is itself shaped by what is refused.'
        },
        questions: [
          'Ahmed says “something compulsory shows it is not necessary.” What do you make of that formulation?',
          'What does it mean to explore “queer feelings” without “feeling queer”?'
        ],
        glosses: [
          { q: 'compulsory heterosexuality', t: 'Rich’s concept', b: 'Adrienne Rich (1980) argued that heterosexuality is enforced by a range of institutions (marriage, economic dependence, the denial of lesbian existence), not natural. Ahmed (note 1) borrows the phrase to say that its power is *cumulative*: repetition builds a world. Butler’s “heterosexual matrix” (*Gender Trouble*, 1990) is the poststructuralist cousin.', people: ['rich'] },
          { q: 'repetitive strain injuries', t: 'RSIs as a model of norms', b: 'A striking analogy: norms injure not by one blow but by repeated, minor, ordinary labour — the long accumulation of small gestures that restrict capacities. It recalls Bourdieu’s *habitus* (embodied history) and Foucault’s “docile bodies”, but its metaphor is *labour*: norms are produced by work that is concealed under nature.' },
          { q: 'Sexual orientation is not then simply about the direction one takes towards an object of desire', t: 'From sexual orientation to orientation', b: 'Here begins the argument of *Queer Phenomenology* (2006): orientation is not only a matter of sexuality but of how bodies are directed towards objects and thereby inhabit worlds (Husserl’s “here” and “there”, Merleau-Ponty’s “I can”). The chapter’s note 2 flags the project.' },
          { q: 'enjoyment of the negativity of shame', t: 'Staying with shame', b: 'The reference is to queer theorists (Crimp, Sedgwick, Halperin & Traub) who propose not converting shame to pride but valuing its negativity. See Chapter 5, note 5, where Ahmed expresses scepticism: embracing shame still involves a conversion of negative to positive affect.', terms: ['shame'] }
        ]
      },
      {
        title: '(Dis)comfort and Norms',
        gist: 'The core section: heterosexuality is felt as comfort, which is fit between body and space and hence invisible to those it fits. Queer discomfort — a “non-sinking” — makes surfaces felt and can rework scripts. Against both assimilation (Sullivan) and the fetishisation of mobility/transgression, Ahmed argues these are not choices but effects of how subjects can inhabit norms; queer families are “doing words”; and discomfort is generative.',
        moves: [
          { h: 'Norms are investments', p: 'Heteronormativity is felt in casual conversation (“Do you have a boyfriend?”); repeated interpellation can be experienced as injury.' },
          { h: 'Comfort', p: 'Comfort is fit between body and object (the sinking chair); in comfort, surfaces disappear from view. Heteronormativity is public comfort; spaces carry the “impressions” of bodies that inhabit them (Valentine).' },
          { h: 'Discomfort', p: 'Queer subjects feel disorientation, out-of-place-ness; may be asked not to make heterosexuals uncomfortable. Comfort for some depends on the labour and concealment of others (“feeling fetishism”).' },
          { h: 'Anti-normative theory', p: 'Queer theory as resistance to all norms (Dean & Lane). Heteronormativity includes “good match”, monogamy, marriage, reproduction, good citizenship.' },
          { h: 'Assimilation', p: 'Sullivan’s “virtually normal”: gay relationships modelled on heterosexual marriage; Crimp: melancholic identification with the homophobe’s repudiation. Butler: gay marriage creates new legitimate/illegitimate hierarchy — but the costs of non-recognition are enormous.' },
          { h: 'The queer ideal', p: 'Defining an ideal queer life relies on others who fail it; Gopinath on South Asian lesbians; discomfort in queer spaces. Queer theory’s idealisation of movement as a fetish (Epps, Martin).' },
          { h: 'Queer families', p: 'Families as practices (Weeks et al.), not ideals; lesbian parents negotiating schools; Gabb: “just like other families” may be necessary. Assimilation/transgression are effects, not choices.' },
          { h: 'Generative discomfort', p: 'Weston’s excitement of building kinship without models; Sedgwick’s elastic family; do not make “the family” a new fetish; discomfort is not assimilation or resistance but inhabiting norms differently.' }
        ],
        voice: 'I want to say that comfort is something you do not notice until you lose it. A world that has taken your shape holds you like a chair that has taken the shape of its sitters. When that world does not take your shape, you feel your body as a surface — you notice the seams. I do not think this is only misery. The discomfort of not fitting can also become attention to the work done to make a fit look natural, and a source of excitement in imagining other shapes for living.',
        context: 'The “comfort” theme draws on phenomenology and on feminist critiques of “home”. The assimilation debate (Sullivan v. Crimp/Warner/Butler) frames the 1990s–2000s gay-rights dilemma; “homonormativity” (Duggan 2002) names assimilationist politics. Gopinath, Epps, Martin, Fortier add postcolonial and feminist critique of “mobility” as a queer value. Social-scientific support comes from Weston, Weeks et al., Gabb, Carrington.',
        objection: 'Critics may argue that Ahmed’s stance is too accommodating to assimilationist choices — if assimilation and transgression are “not choices”, how can we judge political strategy? And “comfort” may be culturally specific: for many, home is a site of danger, not comfort. Ahmed’s response would be that “comfort” is about *fit*, which is distributed unevenly — including within queer spaces.',
        terms: ['comfort', 'heteronormativity', 'orientation', 'surfaces', 'fetishism', 'melancholia', 'ideal', 'queer', 'attachment'],
        people: ['berlant', 'warner', 'halberstam', 'sullivan', 'crimp', 'butler', 'gopinath', 'weston', 'sedgwick', 'bhabha'],
        diagrams: [
          {
            title: 'Comfort as “sinking”: how a chair takes the shape of its sitters', w: 620,
            nodes: [
              { id: 'b', x: 105, y: 85, w: 150, label: 'Some bodies repeatedly inhabit a space', kind: 'b' },
              { id: 's', x: 310, y: 85, w: 150, label: 'The space takes their shape', sub: 'impressions on surfaces', kind: 'b' },
              { id: 'c', x: 515, y: 85, w: 150, label: 'Those bodies “sink in”', sub: 'surfaces disappear: comfort', kind: 'e' },
              { id: 'q', x: 205, y: 215, w: 190, label: 'Other bodies don’t fit', sub: 'non-sinking; surface felt', kind: 'a' },
              { id: 'd', x: 425, y: 215, w: 190, label: 'Discomfort', sub: 'disorientation, out-of-place', kind: 'a' },
              { id: 'x', x: 310, y: 325, w: 420, label: 'Comfort is hard to notice and depends on others’ labour and concealment — “feeling fetishism”', kind: 'ghost' }
            ],
            edges: [{ from: 'b', to: 's' }, { from: 's', to: 'c' }, { from: 's', to: 'q', label: 'but' }, { from: 'q', to: 'd' }, { from: 'c', to: 'x', dash: true }, { from: 'd', to: 'x', dash: true }],
            caption: 'The same space is comfortable for some, uncomfortable for others — not because of what bodies are, but because of what has repeatedly inhabited the space.'
          },
          {
            title: 'Not a choice between assimilation and transgression', w: 620,
            zones: [{ x: 10, y: 38, w: 595, h: 270, label: 'Effects of how subjects can inhabit norms' }],
            nodes: [
              { id: 'a', x: 120, y: 120, w: 170, label: 'Assimilation', sub: 'Sullivan: “virtually normal”', kind: 'a' },
              { id: 't', x: 500, y: 120, w: 170, label: 'Transgression', sub: 'queer ideal of freedom/mobility', kind: 'a' },
              { id: 'c', x: 310, y: 215, w: 220, label: 'Class, race, kinship, safety, survival', sub: 'what is possible', kind: 'ghost' },
              { id: 'd', x: 310, y: 290, w: 300, label: 'Discomfort: inhabiting norms differently', kind: 'e' }
            ],
            edges: [{ from: 'c', to: 'a', dash: true }, { from: 'c', to: 't', dash: true }, { from: 'c', to: 'd' }],
            caption: '“Being recognised as like any other family might not simply be strategic, but necessary for survival.”'
          }
        ],
        questions: [
          'Where in your daily life do you feel “sinking” and where do you feel “seams”? What changed when you moved between spaces?',
          'Is “just like other families” a betrayal or a strategy? How does Ahmed’s argument change the question?',
          'Why might defining an “ideal queer life” create its own norms? Have you seen that in practice?'
        ],
        glosses: [
          { q: 'National heterosexuality is the mechanism by which a core national culture', t: 'Berlant & Warner on national heterosexuality', b: 'From “Sex in Public” (*Critical Inquiry*, 1998): heterosexual culture’s intimacy norms (romance, family) are made to seem private and sentimental, while sustaining a *public* order. Berlant’s later *The Queen of America Goes to Washington City* (1997) analyses “national sentimentality” — the same structure Ahmed uses in Chapters 1 and 5.', people: ['berlant', 'warner'] },
          { q: 'comfort zone', t: 'The “comfort zone” pun', b: 'Ahmed turns a self-help idiom (“step outside your comfort zone”) into a political concept. Comfort is a *zone*: a space of fit. Compare Bourdieu’s “fish in water” (habitus in a field it fits) and Iris Marion Young’s *Intersecting Voices*. Her later *Queer Phenomenology* extends it to “feeling at home”.', terms: ['comfort'] },
          { q: 'sinking into a comfortable chair', t: 'The chair', b: 'The chair recurs in *Queer Phenomenology* (the table) and *The Promise of Happiness* (the “happy objects”). It teaches that comfort is *relational*: the chair is comfortable *for* a body. The “impressions” are literal: cushions record repeated sitters.' },
          { q: 'Gill Valentine has argued', t: 'Valentine on heterosexualised space', b: 'Gill Valentine’s “(Re)Negotiating the ‘Heterosexual Street’” (1996) argues that public space is routinely produced as heterosexual by everyday displays; queer presence becomes “out of place”. Ahmed combines it with Chapter 3’s mobility argument. See also Skeggs (1999) and Bell & Binnie (2000).' },
          { q: 'feeling fetishism', t: 'Comfort as fetish', b: 'Marx’s commodity fetishism hides labour; here the *feeling* of comfort hides the work of those who produce it (cleaners, carers; and the work of concealing queerness). Hochschild’s *emotional labour* (1983) is cited in note 7. It also resonates with Arlie Hochschild’s “second shift” and with McClintock on tourism’s invisible labour.', terms: ['fetishism'] },
          { q: '‘homonormative’', t: 'Homonormativity', b: 'The term is usually attributed to Lisa Duggan (“The New Homonormativity”, 2002): a politics that does not contest heteronormative institutions but upholds and sustains them while promising a demobilised gay constituency. Ahmed credits Halberstam’s usage (2003). Later scholarship on “homonationalism” (Puar) and “pinkwashing” extends it.', people: ['halberstam'] },
          { q: 'Virtually Normal', t: 'Sullivan', b: 'Andrew Sullivan’s *Virtually Normal* (1995) argues for gay marriage and military service as paths to equality grounded in conservative principles. Critics in the queer left (Warner’s *The Trouble with Normal*, 1999) say it demands conformity. Ahmed’s Bhabha paraphrase (“almost normal, but not quite”) borrows mimicry from colonial theory.', people: ['sullivan', 'warner'] },
          { q: 'his melancholia consists precisely in his identification with the homophobe’s repudiation', t: 'Crimp on Sullivan', b: 'From “Melancholia and Moralism” (2002; originally 1993): Crimp argues Sullivan’s assimilationism is melancholic in Freud’s sense: an identification with the lost/rejected object (the heterosexual norm) that has itself rejected him. It is a harsh diagnosis; Ahmed’s own note 8 acknowledges that analogies to Fanon’s racial assimilation have limits.', people: ['crimp'], terms: ['melancholia'] },
          { q: 'campaigns for gay marriage', t: 'The marriage dilemma', b: 'Butler’s “Is Kinship Always Already Heterosexual?” (2002) asks whether marriage equality would extend or limit queer life. The dilemma has since played out: civil partnerships (UK 2004), Massachusetts (2004), the UK’s 2013 Act and *Obergefell v. Hodges* (2015). Ahmed’s intervention: attend to attachments rather than choose.', people: ['butler'] },
          { q: 'it makes fluidity a fetish', t: 'Epps on queer theory’s fetish of movement', b: 'Brad Epps’s “The Fetish of Fluidity” (2001) warns that celebrating mobility, hybridity and movement ignores those who cannot move (migrants without papers, the poor). Biddy Martin (“Sexuality without Gender and Other Queer Utopias”, 1994/96) criticises queer theory’s contempt for “stagnant” femininity. Both support Ahmed’s reservations about freedom-from-norms.' },
          { q: 'more as an adjective or, possibly, a verb', t: 'Families we do', b: 'Weeks, Heaphy and Donovan’s “families of choice” literature (also Weston’s *Families We Choose*, 1991) reframes kinship as practice. David Morgan’s “family practices” (1996) is the sociological source. The paradox Ahmed notes: making “family” the queer ideal risks a new norm.' },
          { q: 'Discomfort is hence not about assimilation or resistance, but about inhabiting norms differently', t: 'The chapter’s thesis in a line', b: 'This is the move from queer anti-normativity to a queer *phenomenology of norms*: queer is the condition of bodies that do not “sink”, whose discomfort reveals the work of fit. It anticipates Ahmed’s later claims about “disorientation” as a political resource and about the “wilful” as those who do not follow the line.', terms: ['comfort', 'orientation'] }
        ]
      },
      {
        title: 'Queer Grief',
        gist: 'Queer lives are often not recognised as losable, so queer losses are not grieved. After 9/11, queer groups named queer losses — but in ways that folded queer grief into the nation’s. Ahmed reworks Freud’s mourning/melancholia and the “continuing bonds” literature to propose that grieving means keeping impressions alive, and that queer politics should share grief *with* rather than *for* — without turning it into “our loss”.',
        moves: [
          { h: 'The politics of recognition at death', p: 'Gay and lesbian mourners excluded in hospitals, courts. Butler: heterosexuality is built on an ungrievable homosexual loss; queer lives are not recognised as lives that can be lost.' },
          { h: 'AIDS and mourning as militancy', p: 'Crimp, Cvetkovich: activism transforms mourning; the Names Project Quilt makes loss public.' },
          { h: '9/11 and the hierarchy of the dead', p: 'Sturken: media privileged firefighters, traders, the economically valued; Eng: the language of “fathers and mothers” aligned the nation with the nuclear family.' },
          { h: 'Queer responses: “we too”', p: 'The NLGJA statement names queer losses and heroes, but folds queer vulnerability into the nation’s; “our community knows … hate” re-installs the nation as the hated subject (“why do they hate us?”).' },
          { h: 'Mourning vs melancholia', p: 'Freud: letting go is healthy. Continuing Bonds, Eng & Kazanjian: refusing to let go can be ethical.' },
          { h: 'Impressions', p: 'We are “with” others before “apart”; impressions of others are within us and more than us. To lose another is not to lose impressions; to preserve attachment is to keep impressions alive, not to internalise the other.' },
          { h: 'A queer politics of grief', p: 'Share impressions without converting them into “our loss” (which would take them away from others). Recognise others as *grievers*, not just objects of grief. Naples’s ethnography: queer families of carers.' }
        ],
        voice: 'I do not want to say queer people should not ask for recognition of their losses; we have paid too heavily for being unrecognised. But I want to say something about how we might ask. If I say “we too lost people”, I am joining a nation and asking it to see me as one of its mourners. If instead I share my impressions of those I have lost, and let you share yours, then grief can circulate among us without becoming the property of a nation. And to recognise another’s grief means making room for their time and space to grieve, not grieving in their place.',
        context: 'Ahmed’s source for “ungrievable” is Butler’s *Psychic Life of Power* (1997) and *Precarious Life* (2004); the AIDS cultural-activism literature (Crimp; Cvetkovich; Treichler) and queer melancholia (Eng & Kazanjian). The 9/11 case includes the NLGJA statement and the Victim Compensation Fund’s treatment of same-sex partners (note 14). The “impressions” vocabulary connects to Chapter 1 and the Introduction.',
        objection: 'One objection: Ahmed’s distinction between grieving *with* vs *for* may be hard to hold in public rituals, which necessarily speak in “we”. Another: Butler’s ungrievability thesis arguably has to be nuanced for contexts where queer communities have strong mourning cultures (the AIDS Quilt; drag family funerals). Ahmed cautiously says nothing excludes such cultures; the problem arises when queer grief is incorporated into national narratives.',
        terms: ['grief', 'melancholia', 'testimony', 'nation', 'impression', 'heteronormativity', 'queer'],
        people: ['butler', 'freud', 'eng', 'cvetkovich', 'crimp', 'sedgwick'],
        diagrams: [
          {
            title: 'Three ways of responding to loss', w: 620,
            zones: [{ x: 10, y: 38, w: 195, h: 270, label: 'Freud: mourning' }, { x: 213, y: 38, w: 195, h: 270, label: 'Melancholia' }, { x: 416, y: 38, w: 195, h: 270, label: 'Ahmed: impressions' }],
            nodes: [
              { id: 'a1', x: 108, y: 110, w: 160, label: 'Let go of the object', kind: 'b' }, { id: 'a2', x: 108, y: 190, w: 160, label: 'Detach; new attachments', kind: 'b' }, { id: 'a3', x: 108, y: 265, w: 160, label: '“healthy”', kind: 'ghost' },
              { id: 'b1', x: 311, y: 110, w: 160, label: 'Object kept inside the ego', kind: 'a' }, { id: 'b2', x: 311, y: 190, w: 160, label: 'Ghostly attachment', kind: 'a' }, { id: 'b3', x: 311, y: 265, w: 160, label: '“pathological” (Freud) / “ethical” (Eng & Kazanjian)', kind: 'ghost' },
              { id: 'c1', x: 514, y: 110, w: 160, label: 'Let go of the other as outsider', kind: 'e' }, { id: 'c2', x: 514, y: 190, w: 160, label: 'Keep impressions alive', sub: 'both me and more than me', kind: 'e' }, { id: 'c3', x: 514, y: 265, w: 160, label: 'Share with others, not as “our loss”', kind: 'e' }
            ],
            edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }, { from: 'c1', to: 'c2' }, { from: 'c2', to: 'c3' }],
            caption: 'Impressions let Ahmed avoid both “letting go” and “incorporating”: the lost other is neither fully external nor swallowed.'
          },
          {
            title: '“We too”: how queer grief gets folded into the nation', w: 620,
            nodes: [
              { id: 'a', x: 105, y: 80, w: 150, label: 'Queer losses unnamed', sub: 'hierarchy of the dead', kind: 'a' },
              { id: 'b', x: 310, y: 80, w: 150, label: 'Queer groups name them', sub: 'individual names, heroism', kind: 'c' },
              { id: 'c', x: 515, y: 80, w: 150, label: '“We too”', sub: 'inclusion claim', kind: 'c' },
              { id: 'd', x: 515, y: 205, w: 150, label: 'Queer vulnerability “blankets the nation”', kind: 'a' },
              { id: 'e', x: 310, y: 205, w: 160, label: 'The nation is the true subject of grief', sub: '“Why do they hate us?”', kind: 'a' },
              { id: 'f', x: 105, y: 205, w: 150, label: 'Other losses concealed', sub: 'Afghanistan, Iraq, Palestine', kind: 'ghost' },
              { id: 'x', x: 310, y: 320, w: 420, label: 'Alternative: share impressions; recognise others as *grievers*; give time and space', kind: 'e' }
            ],
            edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'e', to: 'x', dash: true }],
            caption: 'The queer statement challenges the hierarchy of the dead while supporting the narrative that conceals other losses.'
          }
        ],
        questions: [
          'Consider a public mourning ritual you know. Who is named as “us”? Whose grief is left out or absorbed?',
          'What does it mean to recognise someone “as a griever” rather than grieving for them? Where might that matter in practice?',
          'Do you find Ahmed’s “impressions” a helpful middle path between letting go and holding on? What do you gain or lose compared with Freud’s terms?'
        ],
        glosses: [
          { q: 'ungrievable loss', t: 'Butler on ungrievable loss', b: 'In *The Psychic Life of Power* (1997) Butler argues that the “heterosexual” subject is constituted through the foreclosure of homosexual attachment: the loss is never acknowledged as a loss, so it cannot be grieved, and it returns as melancholic identification. In *Precarious Life* (2004) she extends the idea to national grief: some lives are “ungrievable” because they were never regarded as lives.', people: ['butler'], terms: ['melancholia', 'grief'] },
          { q: 'Names Project Quilt', t: 'The AIDS Memorial Quilt', b: 'Begun in San Francisco in 1987 (Cleve Jones), the Quilt now comprises tens of thousands of panels. Crimp (“Mourning and Militancy”, 1989) argued that mourning should be militant — not privatised sorrow but political action. Ahmed points to its double effect: it makes loss public, and (Crimp 2002) risks sanitising loss for a mainstream audience.' },
          { q: 'hierarchy of the dead', t: 'Sturken on 9/11 memory', b: 'Marita Sturken’s analysis of memorialisation (2002; later *Tourists of History*, 2007) shows how the media constructed a hierarchy of the dead (firefighters over janitors). Eng’s “nationalist domesticity” adds the heteronormative family frame. The point helps connect Chapter 7 to Chapters 3–4: who counts as “us”?' },
          { q: 'As David L. Eng has argued', t: 'Eng on queer grief and nationalism', b: 'David Eng’s work (*The Feeling of Kinship*, 2010; with Kazanjian, *Loss*, 2003) analyses how kinship, race and nation shape grief: queer Asian American subjects are positioned in contested “racial melancholia”. His 9/11 essay shows heteronormative scripts of grief (“fathers and mothers”).', people: ['eng'] },
          { q: '‘we too’', t: 'Politics of “too”', b: 'The “we too” (inclusion claim) is the grammar of liberal rights movements: the excluded appeal to be counted. Ahmed’s point is that the claim reaffirms the community it appeals to and conceals others. This theme anticipates Puar’s “homonationalism” (2007).' },
          { q: 'Freud’s distinction between mourning and melancholia', t: 'Freud 1917', b: '“Mourning and Melancholia” distinguishes normal mourning (the “work” of withdrawing libido from the lost object) from melancholia, in which the lost object is incorporated and the ego is impoverished (self-reproach). Later Freud (*The Ego and the Id*, 1923) acknowledges that identification via lost objects is how the ego is formed — undermining the distinction. See Butler on gender melancholia.', people: ['freud'] },
          { q: 'Continuing Bonds', t: 'Continuing bonds', b: 'Klass, Silverman and Nickman’s *Continuing Bonds: New Understandings of Grief* (1996) overturned the “detachment” model in grief psychology: bereaved people often maintain relationships with the dead. Eng & Kazanjian’s *Loss* (2003) politicises it: melancholia as keeping the past alive. Ahmed adds the “impression”.', terms: ['melancholia'] },
          { q: 'To grieve for others is to keep their impressions alive', t: 'Impressions revisited', b: 'The “impression” from the Introduction returns as a theory of memory and kinship: we carry impressions of others in gestures and phrases (cf. Diprose’s *Corporeal Generosity*). This is a materialist, non-possessive account of internalisation: neither “taking in” the other nor “letting go”.', terms: ['impression'] },
          { q: 'Not to name ‘my’ or ‘your’ loss as ‘our loss’', t: 'Against “our loss”', b: 'Sharing without sameness is a recurring ethics in Ahmed (cf. “we live with and beside each other, yet not as one” in Chapter 1). The *grammar* matters: pronouns can be forms of appropriation. Compare Butler’s “the ‘we’ is a question”.' },
          { q: 'Nancy A. Naples', t: 'Queer families of carers', b: 'Naples’s autoethnographic account of her father’s death describes being marginalised at the funeral and finding support from queer kin. It exemplifies Weston’s “families we choose” in the context of grief, and the importance of grief *infrastructure* as a practical politics.' }
        ]
      },
      {
        title: 'Queer Pleasures',
        gist: 'Queer pleasure is not simply liberation: it is a site of fascination and envy, can be commodified (“pink pound”), idealised in masculinist ways, and tied to colonial discovery narratives. Yet pleasure opens bodies to others and to worlds, takes up space, and can disturb the comforts of heteronormativity. Queer hope is non-sentimental and works only because the norms persist.',
        moves: [
          { h: 'Ambivalent fascination', p: 'Queers are abject yet fascinating; others envy the supposed enjoyment (Bronski, Žižek) — or the supposed suffering (charity, vanguardism). The other is an investment.' },
          { h: 'The pleasure economy', p: 'Capitalism commands pleasure but as reward for good conduct; heterosexual pleasure is oriented towards reproduction; queer pleasure is allowed as passing distraction.' },
          { h: 'Commodification', p: 'The pink pound: queer pleasures can be profitable; non-normative desires are rebound into commodity forms (Hennessy); commodification depends on exploited labour.' },
          { h: 'Idealising pleasure', p: 'Crimp, Warner, Bronski idealise promiscuity and sexual autonomy; “uncharted territory” echoes colonial discovery narratives — who is the explorer?' },
          { h: 'Pleasure opens bodies', p: 'Unlike pain, pleasure opens (Leder). Pleasure takes up more space (football fans, Skeggs). Display of queer pleasure makes heteronormative comfort less comfortable.' },
          { h: 'Contact', p: 'Queer pleasures put bodies into contact that have been kept apart; those bodies are reshaped; new impressions on social space.' },
          { h: 'Gathering and hope', p: 'Queer gatherings are activism. Queer hope is not sentimental: it persists in the face of the negative attachment of “the not”; queer maintains hope for non-repetition only by announcing the persistence of norms.' }
        ],
        voice: 'It would be easy to end with a celebration of queer pleasure as freedom. I cannot do that. Pleasure is also an economy: it can be sold, and it can be organised around the ones who can afford to enjoy. But I do not want to give up on pleasure either. When bodies touch bodies that have been kept apart, and when they gather in streets and clubs and kitchens, the world is a little less comfortable for those it was made to fit. That is a hope — not a hope for transcendence, but for a rearrangement of who is close to whom.',
        context: 'The pleasure debate belongs to queer theory’s “sex-positive” tradition (Rubin, Bersani, Warner’s *The Trouble with Normal*, Crimp) and to Marxist-queer critiques of commodification (Hennessy; Drucker; Duggan). Drew Leder’s phenomenology of pleasure is deployed for the claim that pleasure opens bodies. Skeggs’ ethnography of heterosexual “colonisation” of queer space and Spivak’s critique of speaking for the other provide the counterpoints.',
        objection: 'Some queer theorists object that Ahmed’s critique of sexual freedom underestimates its political stakes in regimes that criminalise sex; others (e.g., Bersani) value the *negativity* of sex rather than its openness. And “pleasure opens bodies” may be too optimistic about the *ethics* of opening (consent, power). Ahmed’s answer is that the openness is not guaranteed: it depends on histories of contact.',
        terms: ['pleasure', 'fetishism', 'affective-economies', 'surfaces', 'orientation', 'queer', 'comfort'],
        people: ['leder', 'hennessy', 'warner', 'crimp', 'bronski', 'zizek', 'spivak', 'berlant'],
        diagram: {
          title: 'What queer pleasure can and cannot do', w: 620,
          nodes: [
            { id: 'p', x: 310, y: 60, w: 220, label: 'Queer pleasure', sub: 'enjoyment of the “non”', kind: 'e' },
            { id: 'c', x: 100, y: 180, w: 170, label: 'Commodified', sub: 'pink pound; labour of others', kind: 'a' },
            { id: 'i', x: 310, y: 180, w: 170, label: 'Idealised', sub: 'freedom, promiscuity, “frontier”', kind: 'a' },
            { id: 'o', x: 520, y: 180, w: 170, label: 'Opens bodies', sub: 'takes space, makes contact', kind: 'c' },
            { id: 'd', x: 520, y: 290, w: 170, label: 'Disturbs comfort', sub: 'new impressions on space', kind: 'e' },
            { id: 'h', x: 200, y: 310, w: 300, label: 'Hope: non-sentimental; works because the norms persist', kind: 'd' }
          ],
          edges: [{ from: 'p', to: 'c' }, { from: 'p', to: 'i' }, { from: 'p', to: 'o' }, { from: 'o', to: 'd' }, { from: 'd', to: 'h', dash: true }, { from: 'c', to: 'h', dash: true, label: 'limits' }],
          caption: 'Left: risks. Right: possibilities. Ahmed keeps both in view.'
        },
        questions: [
          'Does the opposition between pain turning bodies in and pleasure opening them up persuade you? What would be a counter-example?',
          'Ahmed asks of the “uncharted territory” image: “Who is the explorer here? And who provides the territory?” How does that change your reading of sexual-freedom discourse?',
          'What are contemporary examples of queer pleasure as commodity (pride merchandise, apps) and as disturbance (protest, dancing, gatherings)? Which forms do you think can do political work?'
        ],
        glosses: [
          { q: 'cast out from the domain of the liveable', t: 'Butler on the abject', b: 'From *Bodies That Matter* (1993: 3): the abject designates “those ‘unlivable’ and ‘uninhabitable’ zones of social life which are nevertheless densely populated by those who do not enjoy the status of the subject”. It builds on Kristeva (Chapter 4) and underlies Butler’s later work on grievability. Ahmed asks whether pleasure can *answer* abjection without simply inverting it.', people: ['butler'] },
          { q: 'Žižek also examines the ambivalence of the investment in ‘the other’ as the one ‘who enjoys’', t: 'The thief of enjoyment', b: 'Žižek’s Lacanian claim: the racist imagines the Other as stealing *our* enjoyment (“they steal our jobs/women/way of life”) while also enjoying excessively. Ahmed links it to Chapter 2’s “because we love, we hate” and Chapter 6’s “obstacle”. It is a psychoanalytic form of the “you took my pleasure” trope in anti-queer discourse.' },
          { q: 'speaking for the other', t: 'Spivak’s critique', b: 'Gayatri Spivak’s “Can the Subaltern Speak?” (1988) criticises both colonial and radical intellectual projects that represent (“speak for”) the subaltern. Ahmed’s point here: the left’s investment in the pain of the oppressed also positions the speaker as one who has *plenitude*. The same logic as Chapter 1’s charity.', people: ['spivak'] },
          { q: 'pink pound', t: 'The pink pound', b: 'The “pink pound” (UK; “pink dollar” in the US) refers to the purchasing power of gay consumers. Rosemary Hennessy’s *Profit and Pleasure* (2000) argues that queer visibility has been produced through capitalism’s “niche” marketing. Contemporary debates on “rainbow capitalism” and “pinkwashing” (corporate pride campaigns; Israel’s pinkwashing critiques) continue this line.', people: ['hennessy'] },
          { q: 'gay male promiscuity', t: 'Sexual freedom debates', b: 'Crimp’s “How to Have Promiscuity in an Epidemic” (1987) argued for the ethical and political value of gay promiscuity as a cultural achievement that could inform safer sex. Warner’s *The Trouble with Normal* (1999) defends “sexual autonomy”. Ahmed’s worry: their idealised “freedom” may be gendered and classed. Compare Leo Bersani’s “Is the Rectum a Grave?” (1987), which sees sex as self-shattering.', people: ['crimp', 'warner'] },
          { q: 'uncharted territory', t: 'Colonial metaphors of discovery', b: 'Warner’s phrase (from *The Trouble with Normal*) pictures queer sociality as frontier. Ahmed (with Anne McClintock’s *Imperial Leather*) points out the colonial genealogy of “uncharted territory”: exploration implies a subject who maps and a land that is “empty”. The challenge parallels critiques of “queer as free movement” (Epps) and of “sexual tourism”.' },
          { q: 'As Drew Leder has argued, pleasure', t: 'Leder on pleasure', b: 'In *The Absent Body* (1990: 75), Leder contrasts pain’s tendency to constrict and withdraw the body with pleasure’s tendency to open and extend. Ahmed uses Leder in both Chapter 1 (pain) and here. Feminist phenomenologists (Ahmed’s later *Queer Phenomenology*; Iris Young) develop a more situated account of embodied pleasure.', people: ['leder'] },
          { q: 'football fans', t: 'Public pleasure as claim', b: 'A deliberately non-queer example: displays of joy can occupy and exclude. Ahmed’s link to the “shape of public space” is Gillian Rose and Doreen Massey’s feminist geography. Skeggs’s *Formations of Class and Gender* and “Matter Out of Place” (1999) show heterosexual hen parties “colonising” gay venues.' },
          { q: 'weapons of pleasure against their own oppression', t: 'Berlant & Freeman’s “Queer Nationality”', b: 'The phrase (1997; the essay is from *Fear of a Queer Planet*, 1993) captures the claim that sexuality can be used as a political weapon. Ahmed is cautious: pleasure’s potential is not a guarantee. A comparison: Audre Lorde’s “Uses of the Erotic” (1978) sees the erotic as a power that is also *not* only sexual.' },
          { q: 'It is the non-transcendence of queer that allows queer to do its work', t: 'Queer without transcendence', b: 'The concluding formulation. Against Edelman (queer as the death drive that refuses futurity) and Muñoz (queer as utopian horizon), Ahmed sees queer’s capacity as dependent on the persistence of norms: a queer politics that denies attachments to norms would have nothing to work on. It anticipates her emphasis on *use* and *willfulness* (*Willful Subjects*, 2014).', terms: ['attachment'] }
        ]
      }
    ]
  });
})();
