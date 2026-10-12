/* Chapter 6: In the Name of Love — authored guide. */
(function () {
  CP.unit('ch6', {
    tagline: 'Love is not the opposite of hate. In the name of love, collectives shape an ideal — and the others who fail to live up to it become the injury.',
    claim: 'Love is a powerful way of **binding** individuals to collectives through shared **ideals**, which take shape through the very bonding. Both white-supremacist “love groups” and **multicultural love for difference** work by making the nation an object of love that others can fail: they are conditional, they conceal their narcissistic investment (the nation loves itself in loving others) and they posit **a breach** — the hateful racist, the unintegrated migrant — as the cause of injury. Love can do other things, but it cannot be a foundation for politics or a sign of good politics.',
    glance: [
      'Hate groups rebrand as “love groups”: “Love Watch” vs “Hate Watch”. Love is narrated as protection of the white nation and a property of respectable femininity.',
      'Freudian love: identification (being) and idealisation (having). Ahmed’s twist: both are ways of making an ideal that returns to the subject — love as narcissism-with-an-object.',
      'Love for the nation as *waiting*: failed return intensifies investment; others are the “obstacle” that explains the failure. Kristeva’s scarf: the national “idea” takes the shape of a body.',
      'Multicultural love: the UK’s conditions of welcome (“learn to be British”), the new English rose, “If only we were closer we would be as one” — love for difference as a national ideal that others fail.'
    ],
    why: 'Appeals to love are everywhere in politics — “love thy neighbour”, “love trumps hate”, “love is love”, “love the nation or leave it”. Ahmed does not dismiss love; she asks what it does when it is used as a political foundation, and whom it positions as unloving. Her analysis of the conditions of multicultural “welcome”, integration tests and gratitude still describes how liberal states speak about migrants; and her warning about benevolent love for the “abject” is a challenge to politics of compassion on the left.',
    extra: [{ callout: { kind: '', h: 'Content note', p: 'The chapter opens with white-supremacist propaganda and discusses racialised femininity, “mixed-race” stereotypes, and the Home Office’s language about migrants. Ahmed also discusses her own parentage (Pakistani father, white English mother) in note 7.' } }],
    argument: {
      steps: [
        { h: 'Love groups', p: 'Hate groups present as organisations of love: love for the nation as inheritance (“our White Racial Family”); hate is attributed to anti-racists. Conversion conceals ambivalence and makes the group “redemptive”.' },
        { h: 'Love makes subjects', p: 'Love becomes a property of subjects (nurturing women) who reproduce the nation as ideal; mixed-race couples are read as hate; reproductive heterosexuality is an obligation to the nation.' },
        { h: 'Identification and idealisation', p: 'Freud: identification (being) and idealisation (having). Ahmed: both are forms of love that make an ideal; the ideal joins ego and object; lovers become “like”; heterosexuality is built on likeness as inheritance, then projects sameness onto homosexuality.' },
        { h: 'Groups and leaders', p: 'Freud’s *Group Psychology*: groups form when they substitute one object for their ego ideal. Love, loss and grief: “could-have-been-me” makes some lives grievable.' },
        { h: 'Love as waiting', p: 'Failure of return extends investment; others are an obstacle explaining non-return; the future “Aryan child” is where hope is placed.' },
        { h: 'The national ideal', p: 'Kristeva on the Muslim scarf: the national idea is “abstract”, the migrant’s difference “concrete”. Ahmed: the idea takes the shape of an unmarked body; others become blockages.' },
        { h: 'Multicultural love', p: 'The UK nation as ideal through plurality and welcome; conditions of love (English exams, allegiance); the new English rose as hybrid whiteness; riots as failure to love; difference as a consensus. Love for difference conceals narcissism and projects sameness onto minorities.' },
        { h: 'Against love as foundation', p: 'Ahmed is not against love, but against assuming love makes politics (Oliver, Silverman). We must love our visions, while remaining open to failure; love might describe solidarity (Dean).' }
      ]
    },
    diagram: {
      title: 'Chapter 6: how acting “in the name of love” makes an ideal others fail', w: 620,
      nodes: [
        { id: 'a', x: 95, y: 75, w: 140, label: 'Love of the nation', sub: 'or of difference', kind: 'e' },
        { id: 'b', x: 270, y: 75, w: 140, label: 'An ideal takes shape', sub: 'in the shape of some bodies', kind: 'b' },
        { id: 'c', x: 445, y: 75, w: 150, label: 'Conditions of love', sub: 'learn, assimilate, be grateful', kind: 'a' },
        { id: 'd', x: 95, y: 200, w: 140, label: 'Some others fail', sub: 'breach, disturbance', kind: 'a' },
        { id: 'e', x: 270, y: 200, w: 150, label: 'Failure of return', sub: 'investment intensifies', kind: 'c' },
        { id: 'f', x: 445, y: 200, w: 150, label: 'Others = the obstacle', sub: 'they explain why love isn’t returned', kind: 'c' },
        { id: 'g', x: 270, y: 320, w: 380, label: 'Love conceals its narcissism: the nation loves itself in loving difference', kind: 'd' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 30 }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'a', curve: -60, dash: true, label: 'more love' }, { from: 'f', to: 'g', dash: true }],
      caption: 'The loop on the right: the very failure of love’s return becomes a reason to love more — and a reason to blame others.'
    },
    context: [
      'Ahmed draws on **Freud** (*Group Psychology*, “On Narcissism”, *Civilization and Its Discontents*), **Butler** (identification, melancholia, the heterosexual matrix), **Salecl**, **Kristeva**, **Levinas** and **Barthes** on love, **Silverman** and **Oliver** on a politics of love, and **Bhabha**, **Yuval-Davis**, **McClintock** and **Fortier** on gender, nation and multiculturalism. The political case: **UK multiculturalism and integration policy after 2001** (the Cantle report, the 2002 White Paper *Secure Borders, Safe Haven*, citizenship tests).',
      'It also continues Chapter 2’s “because we love, we hate” by asking what love does when it is the *explicit* object — in far-right and liberal-multicultural discourses.'
    ],
    terms: ['love', 'ideal', 'identification', 'narcissism', 'whiteness', 'hybrid-whiteness', 'multiculturalism', 'nation', 'attachment', 'ambivalence', 'melancholia', 'fantasy', 'heteronormativity', 'affective-economies'],
    people: ['freud', 'butler', 'kristeva', 'salecl', 'silverman', 'oliver', 'dean', 'bhabha', 'barthes', 'levinas', 'fortier', 'warner', 'mcclintock'],
    sources: [
      { who: 'Sigmund Freud', work: 'Group Psychology and the Analysis of the Ego (1921); “On Narcissism” (1914); Civilization and Its Discontents (1930)', role: 'Love as bond; identification vs object-choice; groups form around a shared ego ideal; narcissistic vs anaclitic love.', use: 'Frame for love as the making of ideals and groups — which she reworks to attack the hetero-logic of “difference vs sameness”.' },
      { who: 'Judith Butler', work: 'The Psychic Life of Power (1997); Frames of War (2009)', role: 'Heterosexual melancholia; “grievable” lives.', use: 'To argue that identification and desire are intertwined; love and grief align with ideals.' },
      { who: 'Renata Salecl', work: '(Per)versions of Love and Hate (1998)', role: 'The love object is placed in the ego ideal; multicultural identification offers the pleasure of seeing oneself as tolerant.', use: 'Mechanism of ideal-formation and multicultural self-image.' },
      { who: 'Julia Kristeva', work: 'Nations without Nationalism (1993); Tales of Love (1987)', role: '“The lover is a narcissist with an object”; the national idea and the Muslim scarf.', use: 'Her argument about French universalism is the key example of an “abstract” ideal that is concretely shaped.' },
      { who: 'Home Office; Ted Cantle', work: 'Secure Borders, Safe Haven (2002); Community Cohesion (2001)', role: 'Policy documents on integration, citizenship and “parallel lives”.', use: 'The material for analysing “multicultural love”.' },
      { who: 'Bhikhu Parekh', work: 'Rethinking Multiculturalism (2000); Parekh Report (2000)', role: 'Multicultural society needs a shared commitment to the political community, up to “intense love”.', use: 'Example of a progressive discourse where love is the shared object.' },
      { who: 'Kaja Silverman; Kelly Oliver; Jodi Dean', work: 'The Threshold of the Visible World (1996); Witnessing (2001); Solidarity of Strangers (1996)', role: 'Politics of love, idealisation, and reflective solidarity.', use: 'Interlocutors she resists or partially embraces.' },
      { who: 'Nira Yuval-Davis; Anne McClintock; Anne-Marie Fortier', work: 'Gender and Nation (1997); Imperial Leather (1995); Multicultural Horizons (2008)', role: 'Women as boundary markers and faces of the nation; multiculturalism as heteronormative.', use: 'For reading the new English rose.' }
    ],
    conversation: [
      { h: 'The politics of love debate', p: 'Martha Nussbaum’s *Political Emotions: Why Love Matters for Justice* (2013) argues that liberal societies need cultivated emotions of love and compassion; Hardt & Negri (*Commonwealth*, 2009) and bell hooks (*All About Love*, 2000) also champion a political love. Ahmed’s critique — love secures ideals and positions others as failures — remains the main counter-argument; Berlant’s *Cruel Optimism* (2011) deepens her point about attachments that damage.' },
      { h: 'Integration, “British values” and conditional belonging', p: 'The chapter anticipates the discourse of “British values” (2014 schools guidance), citizenship tests, the Windrush scandal (2018) and the “hostile environment” (2012–), where belonging is presented as conditional and proven. David Cameron’s 2011 Munich speech declared “state multiculturalism” a failure; Angela Merkel said similar in 2010. Ahmed’s later *On Being Included* (2012) develops the diversity version of this analysis.' },
      { h: 'Whiteness and “hybrid whiteness”', p: 'Critical race scholars (Anne-Marie Fortier; Ghassan Hage’s *White Nation*, 1998; Ahmed’s own “Declarations of Whiteness”) continue to analyse how liberal tolerance positions the white subject as host and giver of recognition. Studies of “diversity work” and the “happy” multicultural image (Ahmed 2012) extend her reading of the mixed-race “new English rose”.' },
      { h: 'Women and the far right', p: 'The “feminisation of fascism” she notes anticipates research on women in far-right movements and the online “tradwife” aesthetic (e.g., Eviane Leidig’s work on women of the far right), which present reproduction and nurturing as national duty.' },
      { h: 'Psychoanalytic critique', p: 'Some psychoanalytic critics argue Ahmed’s account of love as narcissism-with-object flattens differences between idealisation and recognition (see Jessica Benjamin’s *Bonds of Love*, 1988, and the intersubjective tradition), and that her reading of Freud’s theory of difference is hasty. Her note 6–7 suggests a reply: the distinction itself is heteronormative.' }
    ],
    debates: ['love-multiculturalism', 'populism-emotion', 'queer-negativity', 'affective-turn'],
    questions: [
      'What is the work of renaming “hate groups” as “love groups”? Where have you seen “we are the real victims of hate” structures in current politics?',
      'Ahmed claims heterosexuality is often built on *likeness* (“who does the child look like?”), not difference. Does this reframing convince you? What does it do to the idea that heterosexual love is “love for difference”?',
      'The Home Office asks migrants to “learn to be British” as the condition for being loved. Compare to your own context: what are the conditions of welcome (language, dress, gratitude, “contribution”)?',
      'Why does Ahmed say the multicultural nation “loves itself” in loving others? Is there a way of welcoming that isn’t a self-image?',
      'The chapter ends with “we must love the visions we have.” How does that sit with her critique of love as political foundation?'
    ],
    bridges: {
      back: 'Chapter 5’s shame confirmed love of an ideal; Chapter 6 shows how love makes that ideal. Both pick up the thread of conditional belonging begun in Chapter 2’s “genuine” and “bogus”.',
      forward: 'Chapters 7–8 turn to *queer* and *feminist* politics: if love, comfort and pride secure norms, what do queer feelings — discomfort, grief, pleasure — and feminist attachments — anger, wonder, hope — do to reorient us?'
    },
    sections: [
      {
        title: 'Opening: Love Groups and the Feminisation of Fascism',
        gist: 'White-supremacist sites rename themselves “Love Watch” against anti-racist “Hate Watch”. Ahmed reads this conversion of hate into love as a narrative of protection that makes the white nation vulnerable and anti-racists the source of hate — and shows how love becomes a property of “respectable” femininity and obligatory heterosexual reproduction.',
        moves: [
          { h: 'Who has the right to declare love?', p: 'The renaming relocates hate to those who identify hate groups; critics become the haters.' },
          { h: 'Conversion, not ambivalence', p: 'The narrative converts hate into love, concealing ambivalence; groups become “redemptive”, fighting “for” the nation (for-ness requires against-ness).' },
          { h: 'Love as protection', p: 'White subjects are imagined as at risk; the 170 million “crimes” slide to the “crimes” of Hatewatch.' },
          { h: 'Gendered love', p: 'Women are named as nurturing and loving; beauty and “racial pride”; Diana is condemned for her relationships with “non-Aryan men”. Heterosexual love becomes obligation to the nation; mixed-race love, hate.' },
          { h: 'The chapter’s question', p: 'How does love bond individuals to collectives through ideals? What do we do “in the name of love”, and why is the same act better if done from love?' },
          { h: 'Benign love too', p: 'The argument is not limited to fascism: multicultural love will be examined as a more benevolent version of the same structure.' }
        ],
        voice: 'It is easy to dismiss the claim of a hate group to love as hypocrisy. But that misses how love works. When a group says it acts out of love, it asks you to see its violence as protection. And it asks you to see those who name its violence as the ones who hate. I want to follow what love does here: how it makes a family of the nation, a duty of a woman’s choice, and an enemy of anyone who is not part of the family.',
        context: 'The sites are US-based; the discussion of women’s roles in fascism draws on Bacchetta & Power’s *Right-Wing Women* (2002). Ahmed’s feminist critique of the nation as family follows Yuval-Davis, McClintock and Floya Anthias. The Diana example links to Chapter 2 and the Introduction on mourning and femininity.',
        objection: 'A reader might accept this about fascist sites but question whether “love groups” rhetoric tells us about all invocations of love. Ahmed anticipates by saying she will consider multicultural love. Another point: the chapter risks giving oxygen to extremist propaganda; she answers that these texts are “the production of the ordinary” and instructive.',
        terms: ['love', 'ambivalence', 'whiteness', 'nation', 'heteronormativity'],
        people: ['yuval-davis', 'mcclintock'],
        diagram: {
          title: '“Love Watch” inverts “Hate Watch”', w: 600,
          zones: [{ x: 10, y: 38, w: 285, h: 270, label: 'Hate Watch (anti-racist)' }, { x: 305, y: 38, w: 285, h: 270, label: 'Love Watch (love groups)' }],
          nodes: [
            { id: 'a1', x: 152, y: 110, w: 220, label: 'Lists racist groups', kind: 'b' }, { id: 'a2', x: 152, y: 190, w: 220, label: 'Named as the source of hate', sub: '“they create the very hate they purport to erase”', kind: 'a' }, { id: 'a3', x: 152, y: 265, w: 220, label: 'Said to fail to protect white Americans', kind: 'ghost' },
            { id: 'b1', x: 447, y: 110, w: 220, label: 'Lists those who “love this nation”', kind: 'e' }, { id: 'b2', x: 447, y: 190, w: 220, label: 'Defending a “White Racial Family”', sub: 'for-ness requires against-ness', kind: 'e' }, { id: 'b3', x: 447, y: 265, w: 220, label: 'Respectable femininity: love, nurture, reproduce the race', kind: 'e' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }, { from: 'a2', to: 'b2', dash: true, label: 'mirror' }],
          caption: 'The conversion of hate into love reassigns hate to critics and makes violence a form of protection.'
        },
        questions: [
          'How does the claim “we love our own kind” differ from “we hate others”? What do you think the difference does rhetorically?',
          'What does the “feminisation” of the far right accomplish for a movement’s public image?'
        ],
        glosses: [
          { q: 'organisations of love', t: 'Love as rebranding', b: 'The tactic is familiar in extremist movements — “white pride” rather than “white supremacy”; “anti-hate” campaigns as “hate”. Scholars of the far right (e.g., Kathleen Blee, Betty Dobratz) have documented how movements recruit through emotional appeals of belonging and care. Ahmed’s point is analytic, not sociological: love is the *form* that hate takes when it is justified.' },
          { q: 'This feminisation of fascism is significant.', t: 'Women in fascism', b: 'Bacchetta & Power (eds., *Right-Wing Women*, 2002) show that women have been active agents in right-wing movements, not merely victims or bystanders. The “feminine” role — mother, nurse, guardian — is deployed as moral authority. Compare Klaus Theweleit’s *Male Fantasies* (1977), which analyses the soldier-male’s fear of the fluid, feminine and “red” threat.' },
          { q: 'Princess Diana as ‘a woman of such racial beauty and purity’', t: 'Diana again', b: 'Diana appears in the Introduction as the object of mourning and in this chapter as an icon to be policed: the “nation’s” woman. Ahmed’s point echoes McClintock’s: women are made to *carry* the nation’s purity, and their love-objects become matters of national importance.' },
          { q: 'What are we doing when we do something in the name of love?', t: 'In the name of…', b: 'The formula echoes “in the name of the father”, “in the name of God”, and Derrida’s “Passions” on naming. To act “in the name of” authorises the act by appeal to an object whose value is taken for granted. Ahmed’s question is thus a *genealogy of justification*: love as a trump card.' }
        ]
      },
      {
        title: 'Identification and Idealisation',
        gist: 'A critical rereading of Freud’s theory of love: identification (love as being) and idealisation (love as having). Ahmed argues both create an ideal that returns to the subject; love is a form of narcissism-with-an-object; heterosexuality is built on likeness (inheritance, resemblance, “who does the child look like?”) while being said to be love for difference.',
        moves: [
          { h: 'Love is ambivalent and risky', p: 'Freud: making love “the centre of everything” makes the subject vulnerable and dependent. Klein: to love is also to hate the power it gives.' },
          { h: 'Narcissistic vs anaclitic', p: 'Freud distinguishes self-love from object-love; men mature into object-love, women remain narcissistic: a heterosexual economy.' },
          { h: 'Identification as love', p: 'The boy wants to be like his father and take his place; identification is *towardness*, the making of likeness in the future; creates the ego ideal.' },
          { h: 'Being and having', p: 'To be like him I must have her; identification with the father requires dis-identification with the mother. The “heterosexual logic” separates being from having.' },
          { h: 'Desire creates ideal objects', p: 'As identification creates an ego ideal, desire creates an ideal object: love is valuing (Singer); the idealisation returns to the subject (Salecl; Levinas; Kristeva: “the lover is a narcissist with an object”).' },
          { h: 'Likeness is made', p: 'Lovers become more alike through contact; families naturalise proximity as inheritance; heterosexuality is conflated with difference while homosexuality is cast as “sameness” (Warner). Both claims need questioning.' },
          { h: 'Ideals restrict the lovable', p: 'Identification delimits who I can love (“who would my ideal idealise?”). In the “white Aryan” narrative, love extends the ideal to others who can return it.' }
        ],
        voice: 'Freud gives us a way to see that love is not a simple attraction to something good. It makes ideals: to love is to value, and to value is to make something into what I would like to be or have. I do not say that love is therefore selfish. I say that its tendency is to return — to find, in what we love, an image of ourselves. And when that return is organised around some bodies and not others, love becomes a way of reproducing a world.',
        context: 'Freud’s 1914 “On Narcissism”, 1921 *Group Psychology* and 1923 *The Ego and the Id* theorise love through identification and idealisation. Feminist and queer critiques (Butler, de Lauretis, O’Connor & Ryan; Warner) challenge Freud’s heterosexual economy. Ahmed adds a *racial* reading: in her own history (note 7) identification with her white English mother meant a desire to be seen as white.',
        objection: 'Do the psychoanalytic categories bear the weight she puts on them? Critics might say this section treats Freud as a fixed system and ignores post-Freudian developments (object relations, intersubjectivity) that emphasise recognition and mutuality. And “love is narcissism with an object” can seem cynical: does it leave room for self-giving love?',
        terms: ['love', 'identification', 'ideal', 'narcissism', 'heteronormativity', 'orientation'],
        people: ['freud', 'butler', 'salecl', 'levinas', 'kristeva', 'warner'],
        diagrams: [
          {
            title: 'Freud’s division of love — and where Ahmed puts the ideal', w: 620,
            zones: [{ x: 10, y: 38, w: 295, h: 285, label: 'Freud: two loves' }, { x: 320, y: 38, w: 295, h: 285, label: 'Ahmed: one ideal-making' }],
            nodes: [
              { id: 'a1', x: 158, y: 105, w: 230, label: 'Identification: love as *being*', sub: 'the boy and his father → ego ideal', kind: 'b' }, { id: 'a2', x: 158, y: 195, w: 230, label: 'Idealisation: love as *having*', sub: 'the mother as ideal object', kind: 'b' }, { id: 'a3', x: 158, y: 275, w: 230, label: 'Heterosexual logic: same/different', kind: 'ghost' },
              { id: 'b1', x: 468, y: 105, w: 230, label: 'Both create an ideal', sub: 'ego ideal and ideal object', kind: 'e' }, { id: 'b2', x: 468, y: 195, w: 230, label: 'The ideal joins ego and object', sub: 'what one has elevates what one is', kind: 'e' }, { id: 'b3', x: 468, y: 275, w: 230, label: 'Likeness is made, then called inheritance', kind: 'e' }
            ],
            edges: [{ from: 'a1', to: 'b1', dash: true }, { from: 'a2', to: 'b1', dash: true }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
            caption: 'Ahmed’s revision: being and having are not different kinds of love but two routes to the same ideal.'
          },
          {
            title: 'The return of love to the lover', w: 600,
            nodes: [
              { id: 'l', x: 110, y: 100, w: 140, label: 'The lover', kind: 'b' }, { id: 'o', x: 300, y: 100, w: 140, label: 'The loved object', kind: 'b' }, { id: 'i', x: 490, y: 100, w: 150, label: 'Ideal', sub: 'value bestowed', kind: 'e' },
              { id: 'r', x: 300, y: 235, w: 360, label: 'Value returns to the lover: “It is the valuing alone that makes the value” (Singer) — “the lover is a narcissist with an object” (Kristeva)', kind: 'ghost' }
            ],
            edges: [{ from: 'l', to: 'o', label: 'loves' }, { from: 'o', to: 'i', label: 'idealised' }, { from: 'i', to: 'r' }, { from: 'r', to: 'l', curve: 50, strong: true }],
            caption: 'The “humble” anaclitic lover is also exalting himself through what he has.'
          }
        ],
        questions: [
          'Does it seem right to you that lovers become alike through contact? How does this sit with the story that love is love of difference?',
          'Ahmed claims the narrative that “heterosexuality loves difference, homosexuality loves sameness” conceals the investments of heterosexuality in likeness. How do you respond?',
          'Where do you see love making an ideal that returns to the one who loves? Is that inevitable?'
        ],
        glosses: [
          { q: 'make ‘love the centre of everything’', t: 'Freud on love and happiness', b: 'In *Civilization and Its Discontents* (1930) Freud lists techniques for avoiding suffering (intoxication, isolation, sublimation, love) and notes that making love “the centre of everything” exposes us to the greatest suffering when the loved object is lost. Ahmed draws from this the point that love is a form of *dependence on what is not me*.' },
          { q: 'narcissistic and anaclitic', t: 'Freud’s two types of object-choice', b: 'In “On Narcissism” (1914) Freud distinguishes the *anaclitic* (attachment) type, in which love leans on early care-giving figures (mother or nurse), from the *narcissistic* type, in which the subject loves what they are, were, would like to be, or the person who was once part of themselves. He then gendered the types: “complete object-love of the attachment type is characteristic of the male”; women are narcissistic. Feminist critiques (Irigaray, Butler) and queer critics (Warner) contest this.' },
          { q: 'identification (love as being) and idealisation (love as having)', t: 'Being and having', b: 'The vocabulary comes from Freud and Lacan (“to be the phallus / to have the phallus”) and is central to Butler’s *Gender Trouble* and *Psychic Life of Power*: heterosexual gender is produced by the prohibition on homosexual attachment, which turns the lost object into an identification (“I am what I cannot have”). Ahmed’s reading adds the point that the “like/unlike” in such accounts is also racial and familial (note 7).', people: ['butler'] },
          { q: 'A little boy will exhibit a special interest in his father', t: 'Freud on identification', b: 'The passage from *Group Psychology* chapter VII (“Identification”). Freud calls identification “the earliest expression of an emotional tie”; the boy’s “ambivalent” relation to the father is the template of the Oedipus complex. Ahmed’s point: identification is not a result of love but *a way of loving* — an expansion of what the subject might become.' },
          { q: 'to paraphrase Judith Butler', t: 'Butler on the heterosexual matrix', b: 'In *The Psychic Life of Power* (1997: 25) Butler argues that to become a gendered subject one must give up the same-sex object as a possible love and take it into the ego as an identification (melancholic incorporation). Ahmed’s note 7 criticises the reduction of “like/unlike” to gender, noting familial resemblance can be racial, national, classed.', people: ['butler'] },
          { q: 'It is the valuing alone that makes the value', t: 'Singer’s theory of love as bestowal', b: 'Irving Singer’s *The Nature of Love* (1984) distinguishes *appraisal* (finding value) from *bestowal* (creating value by valuing). Ahmed uses bestowal to say that love *creates* the ideality of its object — but she stresses that the value *returns* to the subject.' },
          { q: 'The lover is a narcissist with an object', t: 'Kristeva on love', b: 'From *Tales of Love* (1987): the lover is a narcissist with an object; love is a crisis of identity (“the I is both in and out of itself”). Compare Barthes’s *A Lover’s Discourse* (quoted later): “It is love the subject loves, not the object.” Both support Ahmed’s claim of love’s self-returning structure.', people: ['kristeva', 'barthes'] },
          { q: 'Commentators such as Michael Warner', t: 'Warner on the “sameness” of homosexuality', b: 'Michael Warner’s “Homo-narcissism; or, Heterosexuality” (1990) shows how psychoanalysis casts homosexuality as narcissistic (sameness) and heterosexuality as a mature relation to difference — a rhetorical manoeuvre that conceals heterosexuality’s own narcissism. Ahmed supplements: heterosexual love too is built on likeness.', people: ['warner'] },
          { q: 'Who does the child look like?', t: 'Resemblance as inheritance', b: 'The question reveals the cultural investment in resemblance as proof of belonging. Compare the history of paternity law and racial passing: whether a child can “look like” the (white) father matters for legitimacy. Note 7 shows its personal edge: Ahmed’s identification with whiteness through her mother.' }
        ]
      },
      {
        title: 'The National Ideal',
        gist: 'How love shapes collectives: Freud’s group psychology (a shared object in the place of the ego ideal), grief and “could-have-been-me”, love as waiting (failure of return extends investment), and Kristeva’s argument about the Muslim scarf. Ahmed argues the national ideal is not abstract but takes the shape of an unmarked body; others become blockages.',
        moves: [
          { h: 'Groups form around an ideal', p: 'Freud: groups form when members put the same object in place of their ego ideal and thereby identify with each other.' },
          { h: 'Love, loss and grief', p: 'Loss is compensated by taking on the lost object’s qualities (introjection). Which losses count? Those that “could have been me”. Grievable lives are loveable lives (Butler).' },
          { h: 'Love survives non-return', p: 'Love demands reciprocity but lives with its failure; unreturned love can intensify.' },
          { h: 'National love as waiting', p: 'The nation’s failure to deliver the good life increases investment; leaving would mean recognising that the investment was wasted. Hope moves to the next generation.' },
          { h: 'The obstacle', p: 'Failure of return requires an explanation: the others are the obstacle that lets the fantasy of full identity continue (Lacan; Žižek).' },
          { h: 'Kristeva’s scarf', p: 'The Muslim scarf as a “breach of the national image”; abstract French universalism “superior” to concrete difference.' },
          { h: 'Ahmed’s reply', p: 'The abstract is not empty: it is shaped by bodies that can inhabit it unmarked. Others cannot pass; they become blockages. The nation is an effect of the movement of bodies towards an object of love.' }
        ],
        voice: 'I find it moving that love can survive not being returned. But that is exactly why it can be put to work: if we love a nation that does not love us back, we may blame others for the failure rather than give up on the nation. The more we wait, the more invested we are. The question is then who is made to carry the blame, and whose body gets to look like the nation without having to say so.',
        context: 'Freud’s *Group Psychology* is the crucial source, with Butler on grievability (*Precarious Life*, 2004; *Frames of War*, 2009), Lacan on courtly love and the obstacle, Žižek on the antisemitic “block”, and Kristeva’s *Nations without Nationalism* (1993) on French universalism. The scarf debate in France (the 1989 *affaire du foulard*; later the 2004 school law) forms the backdrop.',
        objection: 'Ahmed’s reading of Kristeva is pointed but may be uncharitable: Kristeva is describing the *psychic* effects of immigration on the host nation and advocating a “polyphonic” cosmopolitan ethics. A defender might add that republican universalism has also been a vehicle for emancipation. Ahmed’s answer: the universal is a “concrete effect” of historical movement, so its claim to abstraction obscures its shape.',
        terms: ['ideal', 'identification', 'melancholia', 'nation', 'attachment', 'whiteness', 'fantasy'],
        people: ['freud', 'butler', 'kristeva', 'lacan'],
        diagram: {
          title: 'National love as waiting', w: 620,
          nodes: [
            { id: 'i', x: 95, y: 80, w: 140, label: 'Invest in the nation', sub: 'time, labour, hope', kind: 'b' },
            { id: 'f', x: 270, y: 80, w: 150, label: 'Return fails', sub: 'the good life is not delivered', kind: 'a' },
            { id: 'e', x: 450, y: 80, w: 160, label: 'Need an explanation', sub: 'otherwise: despair, giving up', kind: 'a' },
            { id: 'o', x: 450, y: 205, w: 160, label: 'Others are the obstacle', sub: '“but for them…”', kind: 'c' },
            { id: 'w', x: 270, y: 205, w: 150, label: 'Wait longer', sub: 'investment deepens', kind: 'c' },
            { id: 'c', x: 95, y: 205, w: 140, label: 'Hope moves to the child', sub: '“the Aryan child”', kind: 'e' },
            { id: 'x', x: 270, y: 320, w: 400, label: 'The ideal is maintained by its deferral — and by the continued presence of those who “block” it', kind: 'd' }
          ],
          edges: [{ from: 'i', to: 'f' }, { from: 'f', to: 'e' }, { from: 'e', to: 'o' }, { from: 'o', to: 'w' }, { from: 'w', to: 'c' }, { from: 'c', to: 'i', curve: 50, dash: true }, { from: 'w', to: 'x', dash: true }],
          caption: 'Compare Chapter 2’s “bogus” asylum seeker: the obstacle is also the proof of the loved object’s value.'
        },
        questions: [
          'Ahmed treats national love as “a form of waiting”. Where do you see this structure in contemporary patriotism, party loyalty, or fandom?',
          'The idea that the universal is shaped by some bodies is a classic feminist and postcolonial point. What example from your own context shows the “unmarked” norm?',
          'Does the scarf example risk reproducing anti-Muslim framing, or does the close reading expose it?'
        ],
        glosses: [
          { q: 'In Group Psychology, Freud offers', t: 'Group psychology and the ego ideal', b: 'Freud’s 1921 text (influenced by Le Bon and McDougall) treats the crowd as bound by libidinal ties — to the leader and to each other. The key formula (“a primary group of this kind is a number of individuals who have substituted one and the same object for their ego ideal”) is quoted by Ahmed. Theodor Adorno’s “Freudian Theory and the Pattern of Fascist Propaganda” (1951) uses it to explain fascist leader-love.', people: ['freud'] },
          { q: 'introjection', t: 'Introjection and incorporation', b: 'In “Mourning and Melancholia” (1917) Freud describes the ego taking on the lost object (melancholic identification). Nicolas Abraham & Maria Torok distinguish *introjection* (healthy assimilation) from *incorporation* (fantasy of swallowing). Ahmed uses the term loosely to say that love of the lost object becomes a way of “becoming” it — a mechanism for collective grief and nationalism.', terms: ['melancholia'] },
          { q: 'grievable', t: 'Butler on grievability', b: 'Butler’s *Frames of War* (2009; the text cites “Butler 2007”, a version of the argument in *Precarious Life*) argues that some lives are not recognised as lives, and therefore their loss is not grievable. Ahmed’s connection: grievability tracks the “could-have-been-me” judgement — a judgement about resemblance to a national ideal. This links love to the Introduction’s question: whose death makes the nation mourn?', people: ['butler'] },
          { q: 'national love as a form of waiting', t: 'Waiting and investment', b: 'Note 9 compares it to being on hold on the telephone. The idea anticipates Berlant’s *Cruel Optimism* (2011): attachments to objects that obstruct our flourishing — “the good life” — but that we continue to cling to because they structure our sense of possibility. Lacan’s reading of courtly love (note 10) provides the earlier source of the idea that the obstacle sustains desire.', people: ['berlant'] },
          { q: 'Nations without Nationalism', t: 'Kristeva on the scarf', b: 'Kristeva’s 1993 essay (originally on the “affaire du foulard” of 1989, when girls were excluded from a school for wearing headscarves) argues that national “depression” in the face of immigration can be exploited by nationalism (Le Pen), and proposes a “universalist” cosmopolitanism that rejects both. Ahmed’s response rereads the argument as an example of how the ideal is produced through the exclusion of marked bodies. Later French laws (2004 school ban; 2010 face-covering ban) show the afterlife.' },
          { q: 'Le Pen’s nationalism takes advantage of such depression', t: 'The politics of national depression', b: 'Jean-Marie Le Pen’s National Front (now National Rally, led by Marine Le Pen) has long built on anxiety about immigration and national decline; Kristeva’s psychoanalytic language (“depression”) frames the nation as an ego threatened by loss of an ideal. The use of affect language in political diagnosis continues (e.g., “nostalgia”, “resentment”, “anxiety” in populism studies).' },
          { q: 'cannot pass as French', t: 'Passing', b: '“Passing” in the sense of being accepted as a member of the dominant group is a key concept in race theory (Nella Larsen’s *Passing*; Fanon). Ahmed repurposes it for the nation: the national ideal is an economy in which some bodies accrue value by passing, and others become “blockages”.' }
        ]
      },
      {
        title: 'Multicultural Love',
        gist: 'The UK’s multicultural nation constructs itself as an ideal by being plural, open and loving — but on conditions: migrants must learn to be British, show gratitude, mix, and love difference. Love for difference conceals narcissism, projects sameness onto minorities, and makes riots look like failures of love. Ahmed critiques political visions of love (Oliver, Silverman) but insists we must still love our visions.',
        moves: [
          { h: 'Multiculturalism as conditional love', p: 'The nation is an ideal through being plural, open, hospitable; multicultural subjects identify with a “good” nation (Salecl).' },
          { h: 'Conditions', p: 'Migrants must “learn to be British”: English exams, allegiance, even at home; hybridity as sociality; the imperative to mix and give difference back to the nation.' },
          { h: 'Love as the shared object', p: 'Parekh: belonging is political, not ethnic — but it can include “intense love”. Love becomes the object that is put in place of the ego ideal; the emotion becomes the object of the emotion (Barthes).' },
          { h: 'Security and welcome', p: '*Secure Borders, Safe Haven*: only when secure can the nation embrace others; border intensification is the condition of love.' },
          { h: 'The new English rose', p: 'A mixed-race model as the nation’s face: hybrid whiteness, the nation’s whiteness confirmed by being “bronzed” by others; she is a fetish cut off from visible inter-racial intimacy.' },
          { h: 'Gratitude and riots', p: 'Migrants must return love through gratitude (“This is how they thank us”). The 2001 riots are read as failure to integrate: “If only we were closer we would be as one.”' },
          { h: 'Diversity as consensus', p: 'Cantle: “parallel lives”. Pluralism becomes consensus; difference as likeness. Minorities are cast as narcissistic; the nation’s own narcissism is concealed.' },
          { h: 'Love, politics and visions', p: 'Not against love, but against love as political foundation; critique of Oliver; ambivalence about Silverman’s “love the abject”; we must love our visions while open to failure; love as solidarity (Dean).' }
        ],
        voice: 'I am not saying we should be against love. I am saying that when the nation says “we love difference” it is also saying “we love ourselves for loving difference.” The invitation to mix is real but comes with a condition: give your difference back to us in a form we can love. And when others do not — when they live parallel lives, or riot — their failure becomes the explanation for why love has failed. I would rather we asked who has been made to carry the work of loving, and what justice would require.',
        context: 'The documents are from the UK Labour government (2001–2003): the *Community Cohesion* (Cantle) report on the 2001 northern riots (Bradford, Oldham, Burnley), the 2002 White Paper, and Blunkett’s citizenship agenda. Sociological context: critics (e.g., Hage 1998, Back, Gilroy) argue that “multicultural nationalism” fixes the nation as host. Visual culture: the *Observer* piece on Genevieve Capovilla and Lola Young’s (1996) work on representations of mixed-race women.',
        objection: 'A policy practitioner might say Ahmed is unfair to attempts to build solidarity and cohesion in divided communities; segregation *is* a real problem and the Cantle report did make recommendations about resources, not just love. Ahmed would reply that the report translates structural inequality and racism into a *failure of mixing* and a *deficit of love*. A philosopher of love might add that her analysis assumes love must be possessive or idealising; many traditions (agape, hooks’s “love ethic”) say otherwise.',
        terms: ['multiculturalism', 'hybrid-whiteness', 'whiteness', 'love', 'nation', 'ideal', 'narcissism', 'fetishism', 'security'],
        people: ['parekh', 'salecl', 'bhabha', 'fortier', 'silverman', 'oliver', 'dean', 'yuval-davis', 'barthes'],
        diagrams: [
          {
            title: 'Multicultural love: conditions and the figure of failure', w: 620,
            nodes: [
              { id: 'n', x: 105, y: 75, w: 150, label: 'Nation as ideal', sub: 'plural, open, loving', kind: 'e' },
              { id: 'c', x: 300, y: 75, w: 140, label: 'Conditions of welcome', sub: 'English, allegiance, mix, be grateful', kind: 'a' },
              { id: 'm', x: 500, y: 75, w: 150, label: 'Migrants “must love back”', sub: 'give difference to the nation', kind: 'b' },
              { id: 'p', x: 500, y: 205, w: 150, label: 'Some fail', sub: 'parallel lives, riots, ingratitude', kind: 'a' },
              { id: 'b', x: 300, y: 205, w: 150, label: 'A breach in the image', sub: 'injury / disturbance', kind: 'c' },
              { id: 'h', x: 105, y: 205, w: 150, label: 'The ideal is re-secured', sub: '“If only we were closer…”', kind: 'd' },
              { id: 'x', x: 300, y: 320, w: 400, label: 'Hidden: the nation’s own narcissism; minorities are cast as “narcissistic” to hide it', kind: 'ghost' }
            ],
            edges: [{ from: 'n', to: 'c' }, { from: 'c', to: 'm' }, { from: 'm', to: 'p' }, { from: 'p', to: 'b' }, { from: 'b', to: 'h' }, { from: 'h', to: 'n', curve: 40, dash: true }, { from: 'b', to: 'x', dash: true }],
            caption: 'The failure of some others is *required* for the nation to appear as an ideal worth loving.'
          },
          {
            title: '“Hybrid whiteness”: the nation takes difference in', w: 620,
            nodes: [
              { id: 'w', x: 100, y: 90, w: 140, label: 'The old rose', sub: 'white skin, blonde hair (Diana)', kind: 'ghost' },
              { id: 'g', x: 310, y: 90, w: 180, label: 'The new English rose', sub: 'golden skin, curly semi-afro (Genevieve)', kind: 'e' },
              { id: 'n', x: 520, y: 90, w: 140, label: 'The nation', sub: 'hybrid, mobile, “at home anywhere”', kind: 'b' },
              { id: 'f', x: 310, y: 215, w: 350, label: 'Fetish: valued, mobile, beautiful — cut off from visible signs of inter-racial intimacy', kind: 'a' },
              { id: 'x', x: 310, y: 320, w: 380, label: 'The nation reproduces itself as “loving difference” by taking it in', kind: 'd' }
            ],
            edges: [{ from: 'w', to: 'g', label: 'replaced by' }, { from: 'g', to: 'n', label: 'face of' }, { from: 'g', to: 'f', dash: true }, { from: 'n', to: 'x', strong: true }],
            caption: 'Bhabha’s “not quite the same, not quite the other” as national promise.'
          }
        ],
        questions: [
          'List the conditions that a state or institution you know imposes on newcomers (language, dress, gratitude, “contribution”). Which are presented as love or hospitality?',
          'Is there a way of welcoming others that is *not* conditional? What would it look like in practice (e.g., sanctuary, open borders, asylum)?',
          'Ahmed’s “we must love the visions we have” seems to take back part of her critique. How would you reconcile the two?',
          'Does multiculturalism necessarily involve narcissism, or only its state-managed versions?'
        ],
        glosses: [
          { q: 'Secure Borders, Safe Haven', t: 'The 2002 White Paper', b: 'Home Office white paper (February 2002), subtitled *Integration with Diversity in Modern Britain*, laid the ground for the Nationality, Immigration and Asylum Act 2002: citizenship ceremonies, an oath/pledge, language requirements, and the later “Life in the UK” test (2005). Its title yokes security and hospitality. The cited quotation from the foreword (“secure within our sense of belonging”) summarises its logic.' },
          { q: 'As Bhikhu Parekh puts it', t: 'Parekh on political belonging', b: 'Parekh’s *Rethinking Multiculturalism* (2000) argues that multicultural societies need a common sense of belonging that is political, not ethnic. Ahmed’s argument is not that this is false but that the *language of love* the passage uses (“intense love”) makes affect a condition of membership — shifting the burden onto emotional display.' },
          { q: 'It is love the subject loves, not the object', t: 'Barthes on love of love', b: 'From *A Lover’s Discourse* (1977): the lover is always in love with love itself; the beloved is a pretext. Ahmed uses this to argue that “love for the nation” becomes love of loving — the *emotion* as the object, to be displayed by newcomers.', people: ['barthes'] },
          { q: 'new English rose', t: 'The Observer piece', b: 'The article (Blanchard 2001, *The Observer*’s “Race” supplement) celebrates a mixed-race model as the new face of Britain — a classic case of what Ahmed calls “hybrid whiteness”. Compare Anne-Marie Fortier’s analysis of multiculturalism and heterosexual reproduction and Rey Chow’s *The Protestant Ethnic* on how “ethnic” difference is converted to cultural capital.', terms: ['hybrid-whiteness'] },
          { q: 'critics such as Nira Yuval-Davis (1997) and Anne McClintock (1995)', t: 'Women as nation’s face', b: 'Yuval-Davis (*Gender and Nation*) argues women symbolise the collective (“mother of the nation”) and reproduce it biologically and culturally. McClintock (*Imperial Leather*; “No Longer in a Future Heaven”, 1993) argues that “all nationalisms are gendered, all are invented, and all are dangerous”. These support Ahmed’s claim that the national ideal is lodged in women’s bodies.', people: ['yuval-davis', 'mcclintock'] },
          { q: 'not quite the same, not quite the other', t: 'Bhabha’s mimicry', b: 'In “Of Mimicry and Man” (1984), Bhabha describes colonial mimicry as the demand that the colonised be “almost the same, but not quite” (and later, “not white/not quite”). Ahmed reverses the context: the mixed-race woman is *almost the same* as the nation’s image and therefore the perfect fetish; but she remains “the exotic”, welcomed because she poses no threat.', people: ['bhabha'] },
          { q: 'This is how they thank us', t: 'The economy of gratitude', b: 'Note 13 cites Hochschild’s “economy of gratitude”: gratitude marks indebtedness. The tabloid headline (after a fire at a detention centre) shows asylum seekers as recipients obliged to return love with obedience. Compare current discourse on “ungrateful refugees” and Mimi Nguyen’s *The Gift of Freedom* (2012) on “refugee gratitude”.' },
          { q: 'If only we were closer we would be as one', t: 'The hope of proximity', b: 'The thesis behind “community cohesion”: contact reduces prejudice (Allport’s contact hypothesis, 1954). Social-psychological evidence is mixed — contact can reduce prejudice under equal-status conditions (Pettigrew & Tropp 2006) but can heighten threat otherwise. Ahmed’s claim is political: the narrative reads segregation as the cause rather than effect of racism.' },
          { q: 'parallel lives', t: 'The Cantle Report', b: 'Ted Cantle’s *Community Cohesion: A Report of the Independent Review Team* (2001) used the phrase after the Bradford, Oldham and Burnley disturbances. It spurred the “community cohesion” agenda in UK policy. Critics (e.g., Arun Kundnani) argued it turned a structural problem (deindustrialisation, police racism, BNP organising) into a cultural one (self-segregation).' },
          { q: 'Kelly Oliver', t: 'Oliver’s politics of love', b: 'In *Witnessing: Beyond Recognition* (2001), Oliver argues that a politics of love, grounded in witnessing the subjectivity of the other, can replace the hate of racism. Ahmed’s reply: love for difference constructs an ideal; to speak “in the name of love” risks speaking for others.', people: ['oliver'] },
          { q: 'Kaja Silverman', t: 'Silverman’s “productive idealisation”', b: 'In *The Threshold of the Visible World* (1996) Silverman proposes extending idealisation to socially devalued bodies by “lighting up” the cultural screen — a politics of loving what has been abjected. Ahmed’s unease (“close to the liberal politics of charity”) recalls Chapter 1 on pity and the compassion that centres the giver.', people: ['silverman'] },
          { q: 'reflective solidarity', t: 'Dean’s solidarity', b: 'Jodi Dean’s *Solidarity of Strangers* (1996) distinguishes affectional solidarity (family, friends), conventional solidarity (shared identity), and *reflective solidarity* (a commitment to others’ difference that transforms the group). Ahmed’s sympathetic reading suggests love may be a name for *affectionate solidarity* — an affect that emerges *from* work rather than grounding it.', people: ['dean'] },
          { q: 'There is no good love that, in speaking its name', t: 'The ethics of not naming', b: 'A close echo of Lord Alfred Douglas’s “the love that dare not speak its name” (and Wilde’s trial), suggesting “loves that do not speak their name” as political resources. The thought sets up Chapter 7, where queer loves are the figure of a love that does not secure the ideal.' }
        ]
      }
    ]
  });
})();
