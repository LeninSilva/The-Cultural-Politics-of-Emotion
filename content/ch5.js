/* Chapter 5: Shame Before Others — authored guide. */
(function () {
  CP.unit('ch5', {
    tagline: 'Shame is an exposure that seeks cover — and when a nation says “we are ashamed”, the confession can become a way of feeling proud again.',
    claim: 'Shame turns the subject back on itself *before another*: it is a burning exposure and an attempt to hide, and it presupposes love for the witness and for an **ideal** that has been failed. Because shame confirms the ideal, a **nation that expresses shame** — in a preface, in Sorry Books, in an apology — can use the expression to **reconcile itself to itself**, converting shame into pride and passing over the injustice. Speech-act analysis shows why: an apology’s “action” is unfinished and depends on reception; refusals and substitutes (“regret”) **cut the present off from the past**.',
    glance: [
      'Lived shame: exposure, concealment, “turning away”; shame vs guilt vs disgust; shame needs a witness and an ideal self.',
      'Shame can bind: it confirms our love of ideals — and polices norms (queer desires as “shaming”).',
      'National shame in *Bringing Them Home* and Sorry Books: “our shame” about “their pain” can become *our* recovery (shame → pride).',
      'Apology as speech act (Austin): conditions, “behabitives”, reception; the 2001 UN conference refusal of an apology for slavery; “regret” as bypassing responsibility; the “return address”.'
    ],
    why: 'Public apologies are now a standard political genre: governments, churches, universities, corporations. Ahmed helps you tell what an apology *does* beyond what it says — who it centres, whether it creates obligations, and whether the expression of shame is a way of showing that “we are good people”. The chapter is also a rare careful phenomenology of shame itself, useful for anyone thinking about feelings of exposure, stigma, and the weight of social ideals.',
    argument: {
      steps: [
        { h: 'Nation-building shame', p: 'The Governor-General’s preface replaces individual guilt with national shame. Shame “moves” the nation and “asserts our identity” — a form of nation-building, and potentially a way of feeling better.' },
        { h: 'The experience of shame', p: 'Burning exposure, turning away, hiding (cover/un-cover); the whole self is at stake (vs guilt’s act); the badness cannot be expelled onto others, so I must expel myself from myself.' },
        { h: 'Witness and ideal', p: 'Shame requires a witness whom I love or admire (Tomkins) and an ideal self. Failing the ideal exposes the failure of love — and my shame confirms my love for the ideal.' },
        { h: 'Shame polices norms', p: 'Shame can reintegrate and deter; it enforces norms of family and sexuality; queer desires are “shaming by proxy”. Shame and melancholia: taking the badness on as one’s own.' },
        { h: 'National shame as reproduction', p: 'The nation is reproduced through expressions of shame either brought by illegitimate others or brought on itself; the white national subject can “show” it is ideal by being ashamed.' },
        { h: 'Sorry Books', p: 'Messages shame the Prime Minister’s shamelessness, demand shame be made “official”, call on the world as witness, and aim at being able to be “truly proud”. The ideal nation is based on some bodies, not others: who gets to be proud?' },
        { h: 'Apology as speech act', p: 'Austin: apologies are “behabitives”; their action is unfinished, depends on reception and later conduct. They can declare emotion, admit responsibility, or both.' },
        { h: 'Refusals and regret', p: 'At the 2001 UN conference, “apology” was struck out; “regret” replaced it. “It was agreed” defers responsibility; “long ago” cuts off the past. Howard’s “regret” does the same. The alternative is a *return address*: shame “not only before others, but for others”.' }
      ]
    },
    diagram: {
      title: 'Chapter 5: from shame to pride — and the way back', w: 620,
      nodes: [
        { id: 'a', x: 95, y: 75, w: 140, label: 'Past wrong', sub: 'testimony of pain', kind: 'b' },
        { id: 'b', x: 270, y: 75, w: 140, label: 'National shame', sub: '“our shame”', kind: 'a' },
        { id: 'c', x: 445, y: 75, w: 150, label: '“We mean well”', sub: 'witnessing as virtue', kind: 'a' },
        { id: 'd', x: 95, y: 200, w: 140, label: 'Recovery of pride', sub: 'ideal restored', kind: 'c' },
        { id: 'e', x: 270, y: 200, w: 140, label: 'Past passed over', sub: 'shame ends the story', kind: 'c' },
        { id: 'f', x: 445, y: 200, w: 160, label: 'Responsibility bypassed', sub: 'regret, “long ago”', kind: 'c' },
        { id: 'g', x: 270, y: 320, w: 390, label: 'Alternative: a return address — shame for others, apology as an unfinished action', kind: 'e' }
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', curve: 30 }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'g', dash: true }, { from: 'b', to: 'g', dash: true }],
      caption: 'The risk is the loop in the middle row: shame as the passage to pride, which makes the expression of shame a way of finishing the story.'
    },
    context: [
      'Ahmed combines **psychology of shame** (Tomkins, Helen Block Lewis, Nathanson, Erikson, Lynd, Braithwaite), **phenomenology** (Sartre), **psychoanalytic ego-ideal theory**, **queer theory** (Sedgwick, Crimp, Probyn), and **speech-act theory** (Austin, Butler, Sedgwick, Reddy). Politically she reads the Australian reconciliation process (the 1997 *Bringing Them Home* report, Sorry Books, Sorry Day, John Howard’s refusal) and the 2001 UN World Conference Against Racism at Durban.',
      'This chapter develops Chapter 1’s politics of pain: the apology that follows testimony; and sets up Chapter 6: shame confirms love of an ideal — love is the next object.'
    ],
    terms: ['shame', 'ideal', 'identification', 'witness', 'apology', 'performativity', 'speech-act', 'reconciliation', 'national-shame', 'heteronormativity', 'melancholia', 'ambivalence', 'orientation', 'affective-economies'],
    people: ['tomkins', 'sartre', 'austin', 'sedgwick', 'butler', 'barkan', 'gaita', 'probyn', 'spelman', 'reddy', 'crimp'],
    sources: [
      { who: 'Silvan Tomkins', work: 'Affect, Imagery, Consciousness vol. 2 (1963)', role: 'Shame as a primary negative affect; requires prior interest in the other; peeking through fingers.', use: 'To show shame is ambivalent: it presupposes love or interest.' },
      { who: 'Jean-Paul Sartre', work: 'Being and Nothingness (1943)', role: '“I am ashamed of myself as I appear to the Other.”', use: 'Shame as relation of self to self mediated by the Other’s look.' },
      { who: 'Donald Nathanson; Helen Block Lewis; Michael Lewis', work: 'Shame and guilt psychology', role: 'Guilt is about an act; shame about the global self.', use: 'To define the lived experience and then qualify (“emotions don’t have referents”).' },
      { who: 'John Braithwaite', work: 'Crime, Shame and Reintegration (1989)', role: 'Reintegrative shaming returns the offender to the community.', use: 'Shame as social binding that confirms ideals.' },
      { who: 'Raimond Gaita', work: 'A Common Humanity (2000)', role: 'Shame is necessary for lucid acknowledgement of wrongs suffered by Aboriginal Australians.', use: 'Representative of the “national shame” position.' },
      { who: 'Elazar Barkan', work: 'The Guilt of Nations (2000)', role: 'Apology as a “new public morality”.', use: 'The apology debate she complicates.' },
      { who: 'J. L. Austin', work: 'How to Do Things with Words (1962)', role: 'Performatives, felicity conditions, behabitives.', use: 'To analyse apology as a speech act with an unfinished action.' },
      { who: 'Eve Sedgwick; Douglas Crimp; Elspeth Probyn', work: 'Touching Feeling (2003); queer shame; Blush (2005)', role: 'Shame in queer politics; “staying with shame”; shame and interest.', use: 'Contrast to pride politics; Ahmed’s scepticism about both pride and shame.' },
      { who: 'Elizabeth Spelman', work: 'Fruits of Sorrow (1997)', role: 'Regret does not assume responsibility.', use: 'To argue that “regret” bypasses apology and reparation.' },
      { who: 'William Reddy', work: 'The Navigation of Feeling (2001)', role: '“Emotives” as performatives that change emotion.', use: 'Note 17: emotions as speech acts.' }
    ],
    conversation: [
      { h: 'The apology era', p: 'Since 2001 the genre has multiplied: Kevin Rudd’s 2008 National Apology to Australia’s Stolen Generations; Canada’s 2008 apology for Indian Residential Schools and the 2015 Truth and Reconciliation Commission; Germany’s 2021 recognition of the Herero and Nama genocide; the Dutch government’s 2022 apology for slavery; the Pope’s 2022 apology in Canada. Scholars (e.g., Mihaela Mihai, Nicholas Tavuchis, Jennifer Lind) debate sincerity, reparation and “what the apology does”. Ahmed’s test — does it become a way of recovering the nation? — remains a sharp lens.' },
      { h: 'Reparations after Durban', p: 'The Durban Declaration (2001) acknowledged slavery as a crime against humanity but offered “regret” without apology or compensation. The CARICOM ten-point plan for reparatory justice (2014) and recent institutional moves (universities, churches, some city councils) have kept the issue live; in 2020–21 debates about the “legacies of slavery” in Britain showed the same cut-off logic (“it was long ago”).' },
      { h: 'White shame, white fragility', p: 'Later work on whiteness — Robin DiAngelo’s *White Fragility* (2018), Eve Tuck & K. Wayne Yang’s “moves to innocence” (2012), and Ahmed’s own “Declarations of Whiteness: The Non-Performativity of Anti-Racism” (2004) — extends this chapter’s claim that declarations of shame or anti-racism can become ways of showing one is a good person.' },
      { h: 'Queer shame and pride', p: 'Halperin and Traub (eds.), *Gay Shame* (2009) and Heather Love’s *Feeling Backward* (2007) continue the debate that Ahmed enters in note 5: whether to convert shame to pride or to “stay with” it. Ahmed’s own answer (Chapter 7) is to resist both as *the* queer feeling.' },
      { h: 'Emotions and speech acts', p: 'Reddy’s “emotives”, Butler’s *Excitable Speech*, and recent philosophy of apology (e.g., Nick Smith’s *I Was Wrong*, 2008) all treat apology as more than expression. Ahmed’s distinctive claim: the apology’s *unfinished* action is the ethical key.' }
    ],
    debates: ['national-apologies', 'wounded-attachments', 'queer-negativity', 'affective-turn'],
    questions: [
      'Compare the Governor-General’s “national shame, as well as national pride” with a recent organisational apology you know. Who is the “we”? Who is positioned as witness?',
      'Is it possible to feel shame without wanting to convert it to pride? What would that look like in practice?',
      'Ahmed says a sceptic should ask: “If saying sorry leads to pride, who gets to be proud?” Do you find it a fair or unfair challenge to Sorry Day participants?',
      'Is “regret” always a way of avoiding responsibility? Consider contexts where it might be the honest word.',
      'The chapter ends by proposing shame “not only before others, but for others.” What would a *return address* look like for an institution you belong to?'
    ],
    bridges: {
      back: 'Chapter 1 ended with the report’s testimonies; here the *response* to testimony — national shame — becomes the topic. Chapter 4’s “That’s disgusting!” was a speech act that expelled others; “I’m sorry” is a speech act that can re-cover the self.',
      forward: 'Shame confirms love of ideals. Chapter 6 asks what love does: how it makes a national ideal, how multiculturalism asks us to love difference, and why loving the nation can be a way of excluding others.'
    },
    sections: [
      {
        title: 'Opening: National Shame as Nation-Building',
        gist: 'The Governor-General’s preface to *Bringing Them Home* replaces personal guilt with “national shame”, making shame a precondition of reconciliation and a way to “assert our identity as a nation”. Ahmed asks who feels shame, what it covers, and whether it lets the nation feel better.',
        moves: [
          { h: 'Shame for the nation', p: 'Shame is *movement*: the nation is moved by its past. It is also the necessary counterpart to Indigenous pain (Gaita).' },
          { h: 'Who feels it?', p: 'Individuals are said to have “no part in what was done”; shame belongs to the nation. Individuals are implicated because they already belong.' },
          { h: 'Cloak or skin', p: 'National shame surrounds individuals like a skin; it exposes some wounds while concealing others.' },
          { h: 'Does shame make us feel better?', p: 'Shame can be a form of nation-building and a route to “feeling better”: recovering identity through bad feeling.' },
          { h: 'The roadmap', p: 'Lived shame and guilt; national shame and Sorry Books; shame, apology and speech acts — including the 2001 UN conference.' }
        ],
        voice: 'I want to take seriously that national shame, as the preface says, is better than detachment. But I also want to ask what it does. If a nation can say “we are ashamed” and thereby be a nation that is moved by justice, then shame has already become part of the nation’s image of itself. The danger is that expressions of shame might be a way of covering over — of recovering — rather than uncovering the past.',
        context: 'The “Sorry” movement and national reconciliation context in 1990s Australia — the High Court’s *Mabo* (1992) and *Wik* (1996) decisions and the Howard government’s “practical reconciliation” — formed the political ground. Gaita and others offered a philosophical case that shame is the proper moral response to historical injustice; Ahmed examines the *form* of the claim.',
        objection: 'Does Ahmed underestimate what the preface achieved — acknowledging a wrong that had been denied? Many Indigenous leaders valued the report and sought an apology; and the expression of shame is not obviously self-serving. Ahmed’s claim is conditional: shame becomes problematic when it *finishes* the story. She is not arguing against all national acknowledgment.',
        terms: ['national-shame', 'shame', 'reconciliation', 'identification', 'ideal'],
        people: ['gaita', 'barkan'],
        diagram: {
          title: 'What the preface does with shame', w: 600,
          nodes: [
            { id: 'p', x: 105, y: 80, w: 150, label: 'Individual guilt', sub: 'denied: “had no part”', kind: 'ghost' },
            { id: 'n', x: 300, y: 80, w: 150, label: 'National shame', sub: 'acts and omissions “in the name of the community”', kind: 'a' },
            { id: 'a', x: 495, y: 80, w: 150, label: 'Assert our identity', sub: 'shame as nation-building', kind: 'c' },
            { id: 'r', x: 300, y: 205, w: 210, label: 'Reconciliation', sub: 'the nation reconciled to itself', kind: 'e' },
            { id: 'q', x: 300, y: 315, w: 330, label: 'Who feels shame? Who is healed? Whose pain is the ground?', kind: 'd' }
          ],
          edges: [{ from: 'p', to: 'n', label: 'replaced by', dash: true }, { from: 'n', to: 'a' }, { from: 'a', to: 'r' }, { from: 'r', to: 'q', dash: true }],
          caption: 'The detachment of shame from individuals allows the nation to be the subject of feeling — echoing the Introduction’s “the nation mourns”.'
        },
        questions: [
          'The preface says individuals “who had no part in what was done” should not feel personal guilt. Do you think that separation is coherent? What responsibilities remain?',
          'In what ways does “our shame” depend on “their pain” as ground? Revisit Chapter 1’s section on Fiona.'
        ],
        glosses: [
          { q: 'Shame is as necessary for the lucid acknowledgement', t: 'Gaita’s moral philosophy of shame', b: 'Raimond Gaita (*A Common Humanity*, 2000; *Romulus, My Father*, 1998) argues that shame is “a form of moral understanding” which links us to wrongs done in our name. This is a Williams-style (*Shame and Necessity*, 1993) account of shame as responsive to the *kind of person* one is, rather than a particular act. Ahmed’s critique targets how the feeling can function in political discourse, not the philosophy of shame as such.', people: ['gaita'] },
          { q: 'third UN conference on racism', t: 'Durban 2001', b: 'The UN World Conference against Racism, Racial Discrimination, Xenophobia and Related Intolerance met in Durban, 31 Aug–8 Sept 2001. The final declaration acknowledged slavery and the slave trade as crimes against humanity and expressed regret, but not apology or compensation. The US and Israeli delegations walked out over language about the Middle East. The conference remains controversial and has been invoked in later debates on reparations.' },
          { q: 'a form of nation building', t: 'Shame and the nation', b: 'Compare Benedict Anderson’s *Imagined Communities* (1983), where nations are forged partly through shared mourning and forgetting, and Ernest Renan’s “What is a Nation?” (1882) (“forgetting… is a crucial factor in the creation of a nation”). Ahmed adds that *shame* is a way of remembering that also forgets — it “covers over” as it uncovers.', terms: ['national-shame'] }
        ]
      },
      {
        title: 'Lived Experiences of Shame',
        gist: 'A phenomenology of shame: it burns on the surface, makes the subject turn away and back into itself, and doubles concealment with exposure. Unlike disgust, shame cannot expel the badness onto others. It requires a witness and an ego ideal; it is ambivalent because it presupposes love. Shame can reintegrate subjects into norms — and can be experienced as the cost of non-normative loves.',
        moves: [
          { h: 'Burning exposure', p: 'Tomkins, Darwin, Erikson: concealment, turning away, “visible and not ready to be visible”. To have one’s shame witnessed is more shaming.' },
          { h: 'Turning on oneself', p: 'Unlike disgust, shame cannot expel the badness; to expel it I must “expel myself from myself”. There may be nowhere to turn.' },
          { h: 'Cover and uncover', p: '“Shame” derives from “to cover”; shame both covers and exposes; re-covering would be recovery. Blushing depends on skin — and some skins do not “show” shame.' },
          { h: 'Shame vs guilt', p: 'Guilt is about an act; shame about the self (Nathanson, Lynd). But emotions do not have referents; recognition of oneself as ashamed is a relation to self and others.' },
          { h: 'Witness and interest', p: 'Only some others can shame me: those I am interested in (Tomkins), whose gaze I take on; shame is ambivalent.' },
          { h: 'Ego ideal and love', p: 'Shame is conflict between ego and ego ideal. The ideal’s *content* is empty; it is the *gift* of the ideal through practices of love that matters. Shame exposes the failure of love — and shows it.' },
          { h: 'Reintegration and norms', p: 'Shame can deter and reintegrate (Braithwaite); it enforces norms of family and sexuality; queer desires can be shaming by proxy; shame and melancholia: taking on the badness of failing loved others.' }
        ],
        voice: 'Shame is often called a feeling of the self. I want to say it is a feeling of the self *before others*: my skin burns because another’s look returns me to myself. And it is ambivalent, because I am shamed by those I love or admire. When I fail what they have given me to be, I am pained — and in being pained I show my love for what I failed. This is why shame can be so binding: it keeps me within the form it makes me feel I have departed from.',
        context: 'Shame studies range across psychoanalysis (Freud, Lewis, Piers & Singer), ego psychology (Erikson), phenomenology (Sartre, Scheler, Lynd), affect psychology (Tomkins, Nathanson), and sociology (Scheff, whom Ahmed criticised in the Introduction). Queer/feminist work on shame includes Sedgwick & Frank’s “Shame in the Cybernetic Fold” (1995).',
        objection: 'Phenomenologies of shame assume a normative subject; are the claims generalisable? Ahmed’s note 3 on blushing is a reminder: the visible signs of shame are racialised. Another critique: moving from “shame needs an ideal” to “all shame is a form of love” may be too neat; shame at being *abused* may not confirm any ideal.',
        terms: ['shame', 'ideal', 'ambivalence', 'melancholia', 'heteronormativity', 'orientation', 'witness'],
        people: ['tomkins', 'sartre', 'sedgwick'],
        diagrams: [
          {
            title: 'The triangle of shame', w: 600,
            nodes: [
              { id: 's', x: 110, y: 220, w: 150, label: 'The subject', sub: 'burns, turns away', kind: 'a' },
              { id: 'w', x: 490, y: 220, w: 150, label: 'The witness', sub: 'loved, admired, “like me”', kind: 'b' },
              { id: 'i', x: 300, y: 80, w: 170, label: 'The ideal', sub: 'an ego ideal, given through love', kind: 'e' },
              { id: 'x', x: 300, y: 320, w: 300, label: 'I see myself as the witness sees me: a failure of myself to myself', kind: 'ghost' }
            ],
            edges: [{ from: 'w', to: 's', label: 'looks' }, { from: 's', to: 'w', label: 'turns away', curve: 30 }, { from: 's', to: 'i', label: 'fails', dash: true }, { from: 'w', to: 'i', label: 'embodies', dash: true }, { from: 's', to: 'x' }, { from: 'w', to: 'x', dash: true }],
            caption: 'Shame is relational: without a witness who shares or represents the ideal, there is no shame.'
          },
          {
            title: 'Three feelings, three directions of the “bad”', w: 620,
            zones: [{ x: 10, y: 38, w: 195, h: 270, label: 'Guilt' }, { x: 213, y: 38, w: 195, h: 270, label: 'Disgust' }, { x: 416, y: 38, w: 195, h: 270, label: 'Shame' }],
            nodes: [
              { id: 'g1', x: 108, y: 110, w: 160, label: 'About an act', kind: 'b' }, { id: 'g2', x: 108, y: 185, w: 160, label: 'Conflict: superego vs ego', kind: 'b' }, { id: 'g3', x: 108, y: 255, w: 160, label: 'Can be atoned', kind: 'b' },
              { id: 'd1', x: 311, y: 110, w: 160, label: 'About an object', kind: 'a' }, { id: 'd2', x: 311, y: 185, w: 160, label: 'Badness expelled onto others', kind: 'a' }, { id: 'd3', x: 311, y: 255, w: 160, label: 'Sticks to bodies', kind: 'a' },
              { id: 's1', x: 514, y: 110, w: 160, label: 'About the self', kind: 'c' }, { id: 's2', x: 514, y: 185, w: 160, label: 'Badness cannot be expelled', kind: 'c' }, { id: 's3', x: 514, y: 255, w: 160, label: 'Conflict: ego vs ego ideal', kind: 'c' }
            ],
            edges: [{ from: 'g1', to: 'g2' }, { from: 'g2', to: 'g3' }, { from: 'd1', to: 'd2' }, { from: 'd2', to: 'd3' }, { from: 's1', to: 's2' }, { from: 's2', to: 's3' }],
            caption: 'Ahmed’s comparison is about *orientation*, not essence: she insists emotions have no referents and that these are tendencies in how the “bad” is directed.'
          }
        ],
        questions: [
          'Recall a moment of shame. Who was the witness, and what ideal was exposed as failed? How did the feeling move your body?',
          'Ahmed says shame “confirms” the ideal that is failed. Is there such a thing as shame that *rejects* the ideal?',
          'Note 3 raises that the blush is not a reliable sign of shame. What follows for how we read others as “shameless”?'
        ],
        glosses: [
          { q: 'Silvan S. Tomkins defines shame as one of the primary ‘negative affects’', t: 'Tomkins’s affect theory', b: 'In Tomkins’s system (*Affect, Imagery, Consciousness*, 1962–92) there are nine innate affects, among them shame-humiliation, which is triggered by an *incomplete reduction* of interest or enjoyment — hence it presupposes a positive attachment. Sedgwick & Frank’s “Shame in the Cybernetic Fold” (1995) turned this into the basis of a queer theory of shame. Ahmed accepts the point about interest but resists Tomkins’s universal, innate framework.', people: ['tomkins', 'sedgwick'] },
          { q: 'Under a keen sense of shame', t: 'Darwin on shame and blushing', b: 'Darwin (1872) treated the blush as “the most peculiar and the most human of all expressions” and tied it to attention to one’s own appearance in the eyes of others. Note 3 shows a critical reading: if shame is read from a blush, only some skins are legible; the “shameless” may simply be unreadable.', people: ['darwin'] },
          { q: 'the Indo-European verb for ‘to cover’', t: 'Etymology of shame', b: 'The Proto-Indo-European root *(s)kem-/*(s)kam- (to cover) underlies English *shame* and German *Scham*; compare Genesis 3 (the fig leaf), noted in footnote 1. Ahmed’s point is that the word contains its own ambivalence: cover implies exposure, and *re-covering* implies *recovery*.' },
          { q: 'I am ashamed of myself as I appear to the Other', t: 'Sartre’s shame', b: 'In *Being and Nothingness* (Part III, ch. 1) Sartre argues that shame reveals the Other’s existence and my being-an-object for them: I am what the Other sees. This “look” is the model for Fanon’s “Look, a Negro!” (Chapter 3). Ahmed’s reading stresses that *what is at stake is the body*: the skin is where being-seen is felt.', people: ['sartre'] },
          { q: 'Guilt implies action, while shame implies that some quality of the self has been brought into question', t: 'Shame vs guilt', b: 'The distinction runs from anthropologists (Ruth Benedict’s “shame cultures” vs “guilt cultures” — now widely criticised) to Helen Block Lewis and June Tangney’s empirical psychology, where shame is linked to global self-evaluation and guilt to behaviour. Ahmed qualifies it: emotions don’t have referents; the *recognition* of an emotion has referential effects. Bernard Williams (1993) argues the contrast is overdrawn and that Greek *aidōs* encompasses both.' },
          { q: 'an ego ideal', t: 'Ego ideal and ideal ego', b: 'In Freud (“On Narcissism”, 1914) the ego ideal is the internalised standard formed from parental admiration and critical agencies; the superego is the later critical function. Lacan distinguishes the *ideal ego* (imaginary self-image) and the *ego-ideal* (symbolic position from which one is seen). Ahmed’s insistence that the ideal has no fixed content (note 4) is made in tension with Chapter 6’s claim that ideals take the shape of some bodies.', terms: ['ideal'] },
          { q: 'It is the gift of the ideal rather than the content of the ideal that matters', t: 'The gift of the ideal', b: 'A subtle formulation: the *relation* through which an ideal is given (love, recognition) matters more than what the ideal prescribes. It anticipates Chapter 6 on how love “gives” subjects forms to approximate; compare Mauss’s gift again (Chapter 1).', terms: ['ideal'] },
          { q: 'Shame can reintegrate subjects', t: 'Reintegrative shaming', b: 'John Braithwaite’s *Crime, Shame and Reintegration* (1989) distinguishes reintegrative shaming (disapproval followed by forgiveness) from stigmatising shaming (permanent outcast status) and underlies restorative justice. Ahmed’s concern is its flip side: reintegration confirms the norm and the community that shames.', people: ['braithwaite'] },
          { q: 'melancholia', t: 'Shame and melancholia', b: 'In “Mourning and Melancholia” (1917) Freud describes melancholia as the incorporation of a lost object into the ego, so that the self is blamed for what was lost. Butler’s *Psychic Life of Power* and *Gender Trouble* apply this to the foreclosure of homosexual attachment. Ahmed’s Chapter 7 returns to “queer grief”.', terms: ['melancholia'] }
        ]
      },
      {
        title: 'National Shame',
        gist: 'How national shame works: the nation is reproduced through expressions of shame, with shame “brought onto” the nation by illegitimate others or by the nation itself. Reading the Sorry Books, Ahmed shows how shame becomes a route to pride — “our shame means that we mean well” — and how the ideal nation is built from some bodies and not others.',
        moves: [
          { h: 'Shame and (hetero)normativity', p: 'National shame is a narrative of reproduction: shame “brought” by queer others or asylum seekers; shame the nation brings on itself by failing a multicultural ideal.' },
          { h: 'Double witnessing', p: 'White readers are asked to witness Indigenous testimony *and* to witness their own shame: both caught out and catching out. Reconciliation becomes self-reconciliation.' },
          { h: 'Shame → pride', p: 'By witnessing the shameful past, the nation can “live up to” its ideals; shame shows we are well-meaning; the transference of bad feeling is temporary.' },
          { h: 'The content of the ideal', p: 'The national ideal takes the shape of some bodies; pride is tautological for those who fit it.' },
          { h: 'Sorry Books', p: 'Messages address Howard’s refusal: the shameless is the source of shame. The call is to make shame official. “Shamed by the shameless.”' },
          { h: 'The world as witness', p: '“Eyes of the world”, “mirror”: the nation looks at itself through international civil society; shame lets the nation point the finger at others after it has looked at itself.' },
          { h: 'Recovery', p: 'Recognising shame is a way of being able to celebrate “present glories”; pride is the goal. Who gets to be proud?' }
        ],
        voice: 'I read the Sorry Books not to mock the people who wrote them — many are moving — but to notice how their wish to be able to be proud again shapes how they speak of the past. If saying sorry is a step on the way to feeling good about the nation, then the person who has been wronged is positioned as the occasion of my recovery. And I notice that the nation they wish to be proud of already has a shape: some bodies fit it, others do not.',
        context: 'The Sorry Books were created after *Bringing Them Home* and are linked to the movement for an official apology; Ahmed analyses an online Sorry Book as a petition to John Howard. Her discussion of the “ideal” draws on psychoanalysis (ego ideal), Butler’s melancholia, and critical whiteness studies. Note 6 anticipates the later claim that shame can “function as an exercise of privilege”.',
        objection: 'A critic might say Ahmed seems to ask for people to feel shame without it being rewarded; but desire for recognition and pride is human, and a good politics may harness it. Others: the Sorry Book messages are mediated by a petition genre that *requires* a rhetoric of pride and unity. Ahmed accepts that exposure of the nation’s failure “is politically important” — her critique is conditional.',
        terms: ['national-shame', 'shame', 'ideal', 'identification', 'reconciliation', 'whiteness', 'heteronormativity', 'nation'],
        people: ['gaita', 'butler'],
        diagram: {
          title: 'Sorry Books: the route from shame to pride', w: 620,
          nodes: [
            { id: 'h', x: 105, y: 75, w: 150, label: 'Government refuses', sub: '“shameless” — no official apology', kind: 'a' },
            { id: 'c', x: 310, y: 75, w: 150, label: 'Citizens are shamed', sub: 'by the lack of shame', kind: 'a' },
            { id: 's', x: 515, y: 75, w: 150, label: '“It is time to say sorry”', sub: 'shame made official', kind: 'c' },
            { id: 'w', x: 105, y: 205, w: 150, label: 'The world watches', sub: '“the eyes of the world”, “apartheid”', kind: 'b' },
            { id: 'p', x: 310, y: 205, w: 160, label: 'Pride recovered', sub: '“truly proud”, “celebrate present glories”', kind: 'e' },
            { id: 'q', x: 515, y: 205, w: 150, label: 'Who gets to be proud?', sub: 'the ideal has some bodies as its form', kind: 'd' },
            { id: 'x', x: 310, y: 320, w: 380, label: 'Shame as a passage: a “passing phase” on the way to being-as-nation', kind: 'ghost' }
          ],
          edges: [{ from: 'h', to: 'c' }, { from: 'c', to: 's' }, { from: 's', to: 'p', curve: 30 }, { from: 'w', to: 'c', dash: true }, { from: 'p', to: 'q' }, { from: 'p', to: 'x' }],
          caption: 'The imagined witness (“the world”, “history”) is also a mirror: the nation’s better self.'
        },
        questions: [
          'Ahmed notes that messages call for shame to be made “official.” What does officialisation add — and what does it risk?',
          'Is the desire to be able to be “truly proud” of one’s country compatible with taking responsibility for its past? Can pride and shame coexist?',
          'Note 6 suggests shame about privilege can function as an exercise of privilege. Where have you seen this?'
        ],
        glosses: [
          { q: 'shaming by proxy', t: 'Shame brought on the nation', b: 'The family/nation is shamed by those who “fail to reproduce its form”. Compare how nationalist discourses cast homosexuality, “illegitimate” migrants, or unmarried mothers as sources of national shame; and how states have used shaming (“name and shame”) as a policy tool. Ahmed’s Chapter 7 asks how queer subjects relate to this positioning.', terms: ['heteronormativity'] },
          { q: 'reconciled to itself through witnessing the pain of others', t: 'Self-reconciliation', b: 'This is the chapter’s sharpest formulation: reconciliation as a *relationship of the nation to itself*, using Indigenous pain as medium. Aileen Moreton-Robinson (*Talkin’ Up to the White Woman*, 2000; *The White Possessive*, 2015) analyses how white subjects position themselves as arbiters of Indigenous reconciliation. See also Chapter 1’s “who is doing the healing and who is being healed”.' },
          { q: 'Sorry Books', t: 'Sorry Books and Sorry Day', b: 'Sorry Books (begun 1997–98) were signed by thousands of Australians; National Sorry Day has been held on 26 May since 1998 (anniversary of the tabling of *Bringing Them Home*). Note 7 records Ahmed’s acknowledgment that they brought people together. Her focus on one electronic Sorry Book is a close-reading choice, not a claim about all participants.', terms: ['reconciliation'] },
          { q: 'Shamed by the shameless', t: 'The shame of shamelessness', b: 'A reversal: the target of shaming is the *shameless* government. This is a classical activist tactic (“naming and shaming”). Ahmed shows its limits: it seeks the *government’s* shame and thereby makes shame a measure of national virtue.' },
          { q: 'People all over the world are comparing us to South African apartheid', t: 'The world as witness', b: 'This message appeals to international opinion; Ahmed observes that the *comparison* (“like them”) makes Australia shameful by association with another shamed nation. The “like” structure resonates with Chapter 2 on likeness and unlikeness.' },
          { q: 'put a mirror up to our own', t: 'The mirror', b: 'The mirror (also in Bush’s “our better selves” in Chapter 3) is an image of narcissistic nationhood: seeing the nation’s own image as a loved ideal. The Lacanian *mirror stage* (1936/1949) is the background: identity as an image that returns from the Other.' },
          { q: 'If saying sorry leads to pride, who gets to be proud?', t: 'Who is the “we”?', b: 'The citizen’s statement presupposes that “Australian” is a single identity. Indigenous Australians, many of whom were excluded from full civic participation (census, voting, guardianship laws) into the 1960s, may relate to the nation differently — a point developed in Indigenous scholarship (Moreton-Robinson; Irene Watson; Marcia Langton).' },
          { q: 'without that how can we celebrate present glories', t: 'Shame as a condition of celebration', b: 'The message shows shame as an *instrumental* step to a better national narrative — what Tuck & Yang (2012) call “settler moves to innocence”: gestures that relieve settler guilt without relinquishing structure.' }
        ]
      },
      {
        title: 'Shame and Speech Acts',
        gist: 'The final section analyses apology as a speech act: its conditions, the “behabitive” ambiguity, and how its action is unfinished and depends on reception and subsequent conduct. The 2001 UN conference refusal of an apology for slavery, replaced by “regret”, and Howard’s refusal show how speech acts can cut the present off from the past. Ahmed proposes a “return address”: shame that does not turn back on itself.',
        moves: [
          { h: 'The politics of apology', p: 'Barkan: apology as a new public morality. But what does an apology do — show an emotion or admit responsibility? Does saying sorry make the speaker responsible?' },
          { h: 'Apologies are conditional', p: 'What we apologise for delimits the force; unconditional apologies often fail; “I am sorry” can describe, be polite, or admit responsibility.' },
          { h: 'Austin and happiness', p: 'Performatives are happy or unhappy depending on conditions; apologies are “behabitives” — troublesome. Ahmed: emotions can be effects of how signs are received.' },
          { h: 'The unfinished action', p: 'Unlike “I thee wed”, an apology requires reception and later conduct; it is an “undecided action”, a conditional performative.' },
          { h: 'Durban 2001', p: 'African states demanded apology for slavery; Europeans feared class actions; “apology” was struck; “regret” substituted. “Condemned in the present, regretted in the past.”' },
          { h: 'Bypassing', p: '“It was agreed”; “long ago”; “we were not there”: the refusal cuts the present from the past; regret = disappointment without responsibility (Spelman).' },
          { h: 'Howard', p: 'Refusal of apology is itself a speech act and an act of violence; it makes the nation by declaring it not responsible.' },
          { h: 'A return address', p: 'When others demand shame, expression should answer to them, not return the self to itself; shame must not finish the act or convert to pride; it can be “not only before others but for others”.' }
        ],
        voice: 'I do not want to say apologies are useless. I want to say that an apology is a risky thing to say, and that its risk is part of what it does. If it is only an expression of my feeling, I will want it to be accepted and to make me feel better. But if it is an answer to someone’s demand, it is not mine to finish. The people who refuse to apologise know this: they fear what the words will commit them to. And the people who apologise as a way of recovering pride have not understood it at all.',
        context: 'Austin’s *How to Do Things with Words* (1962) is the base text; Butler’s *Excitable Speech* (1997) and Sedgwick’s *Touching Feeling* (2003) extend it; Reddy’s “emotives” (2001) is cited in note 17. The policy context is the apology boom described by Barkan (*The Guilt of Nations*, 2000), the Durban conference, and Howard’s “practical reconciliation”.',
        objection: 'Is the claim that apologies are “unfinished” too demanding? Apology scholars (Tavuchis; Smith) argue that apology can have *essential* elements (acknowledgment, regret, responsibility, reparation), and that political apologies can succeed. Another concern: the “return address” seems to ask for shame without relief — is it sustainable? Ahmed says only: stay open to others’ claims.',
        terms: ['apology', 'speech-act', 'performativity', 'shame', 'national-shame', 'reconciliation', 'affective-economies'],
        people: ['austin', 'barkan', 'sedgwick', 'butler', 'reddy', 'spelman'],
        diagrams: [
          {
            title: 'Why an apology is an unfinished action', w: 620,
            nodes: [
              { id: 'u', x: 95, y: 80, w: 130, label: 'The utterance', sub: '“I/We apologise for…”', kind: 'a' },
              { id: 'a', x: 250, y: 80, w: 130, label: 'Authorisation', sub: 'who speaks for whom', kind: 'b' },
              { id: 'r', x: 410, y: 80, w: 140, label: 'Reception', sub: 'does this apology apologise?', kind: 'c' },
              { id: 'c', x: 545, y: 80, w: 100, label: 'Conduct after', sub: 'actions that follow', kind: 'c' },
              { id: 'd', x: 310, y: 215, w: 330, label: 'Declares emotion? Admits responsibility? Opens claims for reparation?', kind: 'ghost' },
              { id: 'x', x: 310, y: 320, w: 380, label: 'The “action” is undecided: it can be finished, or undone, by what others do', kind: 'd' }
            ],
            edges: [{ from: 'u', to: 'a' }, { from: 'a', to: 'r' }, { from: 'r', to: 'c' }, { from: 'u', to: 'd', dash: true }, { from: 'r', to: 'd', dash: true }, { from: 'd', to: 'x' }],
            caption: 'Contrast Austin’s “I thee wed”: no reading by the recipient is needed once the conditions are met.'
          },
          {
            title: 'Ladder of statements: how much responsibility do they carry?', w: 620,
            nodes: [
              { id: '1', x: 120, y: 70, w: 180, label: '“We apologise for…”', sub: 'admission of responsibility', kind: 'e' },
              { id: '2', x: 320, y: 140, w: 180, label: '“We are sorry / ashamed”', sub: 'declaration of feeling', kind: 'c' },
              { id: '3', x: 120, y: 210, w: 180, label: '“We regret…”', sub: '“What a shame”; no subject to be called on', kind: 'b' },
              { id: '4', x: 320, y: 280, w: 220, label: '“It was agreed… long ago”', sub: 'authority deferred; present cut from past', kind: 'a' },
              { id: '5', x: 520, y: 70, w: 160, label: 'Reparations, claims', sub: 'what apology might open', kind: 'ghost' }
            ],
            edges: [{ from: '1', to: '2', noarrow: true }, { from: '2', to: '3', noarrow: true }, { from: '3', to: '4', noarrow: true }, { from: '1', to: '5', dash: true, label: 'floodgates' }],
            caption: 'The movement from “sorry” to “regret” passes over “shame” — and responsibility drops out with it.'
          }
        ],
        questions: [
          'Draft the wording of an institutional apology you think would be “happy” in Austin’s sense — and note what it commits the institution to.',
          'Why might “regret” be more acceptable to governments than “apology”? Who benefits from the difference?',
          'Ahmed argues that a good response to a demand for an apology is a *return address*. What would it take, in your own context, to answer a demand rather than to express your own feeling?'
        ],
        glosses: [
          { q: 'Elazar Barkan discusses the politics of apology', t: 'The Guilt of Nations', b: 'Barkan’s book (2000) charts post-Cold War restitution claims — Holocaust-era assets, Japanese-American internment, Indigenous land — and sees a “new morality” of public confession. Critics (e.g., Jennifer Lind; Mihai) argue that it risks turning politics into therapy. Ahmed’s intervention is to ask how apology works *as a speech act*, not whether it signals sincerity.', people: ['barkan'] },
          { q: 'How to Do Things with Words', t: 'Austin’s performatives', b: 'J. L. Austin’s 1955 Harvard lectures (1962) distinguish *constative* statements (true/false) from *performatives* (happy/unhappy) and then collapse the distinction: every utterance has locutionary, illocutionary and perlocutionary aspects. Austin’s “felicity conditions” (A.1–C.2) include conventional procedure, appropriate persons, and sincerity. Derrida’s “Signature Event Context” criticises Austin’s exclusion of “parasitic” (theatrical) uses; Butler extends this to social norms.', people: ['austin'] },
          { q: 'behabitives', t: 'Austin’s “troublesome” class', b: 'In Lecture XII Austin lists five classes of illocutionary acts — verdictives, exercitives, commissives, behabitives, expositives — and notes that behabitives (apologising, congratulating, commiserating, cursing) are “troublesome” because they overlap with the others and with feeling. Ahmed’s point: Austin treats sincerity as a condition (an inner state expressed), but apologies also *do* things regardless of inner state.' },
          { q: 'the performative is happy', t: 'Happiness as felicity', b: 'Austin’s “felicity” (the Latin root of *happy*) is a pun Ahmed will exploit in *The Promise of Happiness* (2010): happiness as an *orientation* toward objects that are promised to make us happy. Note 16 observes that happiness/unhappiness relates speech acts to affects.' },
          { q: 'Eve Kosofsky Sedgwick includes the apology in her class of explicit performatives', t: 'Sedgwick on performatives', b: 'In *Touching Feeling* (2003) Sedgwick’s “Queer Performativity” and the essay on Austin and Henry James treats explicit performatives (“I apologise”) as those whose verb names the act, and notes how shame is the affect that makes performativity *beside* itself. Ahmed’s “unfinished action” is her extension.', people: ['sedgwick'] },
          { q: 'open up the floodgates for massive class actions', t: 'Why governments fear apology', b: 'US and EU delegations feared that admitting slavery was a crime against humanity would ground claims for reparations. Compare the legal tradition of avoiding “admission of liability” in apology (some jurisdictions have passed “apology laws” that make apologies inadmissible) — a stark case of law policing the speech act.' },
          { q: 'slavery has to be condemned in the present and regretted in the past', t: 'Present condemned, past regretted', b: 'The formula treats the past as “another country”, a stance that critics of historicism (e.g., Dipesh Chakrabarty) have long questioned: moral judgement is applied to the present while the past is placed beyond it. Ahmed’s counter: injustice in the present *is* the history; the world’s resources are unequally divided because of what happened “long ago”.' },
          { q: 'was agreed', t: 'The passive voice of authority', b: 'The “was agreed” formula deflects agency, a form of what Hannah Arendt described as “rule by nobody”. Ahmed’s argument is that deferral of authorisation “replicates the bypassing of responsibility” for the injustice itself.' },
          { q: 'statements of regret do not assume any responsibility', t: 'Spelman on regret', b: 'In *Fruits of Sorrow* (1997: 104) Spelman distinguishes regret (a sense of loss) from remorse and responsibility; regret can be expressed for events one did not cause (“I regret the weather”). Ahmed turns this into a political diagnosis: statements of regret keep the subject of responsibility unnamed.', people: ['spelman'] },
          { q: 'return address', t: 'The ethics of the return address', b: 'The metaphor imagines a letter: the demand for an apology is a message sent from elsewhere; the apology is a reply addressed to that place. Responding to an address requires going to where the other is — echoing Chapter 1’s “impossible hearing”. Ahmed will develop the theme in her later essay “The Non-Performativity of Anti-Racism”.', terms: ['apology'] },
          { q: 'not only before others, but for others', t: 'Shame for others', b: 'The final move recasts shame as a *vector* — not merely an exposure *before* a witness who confirms my ideal, but an orientation *towards* others who have a claim. Compare Levinas’s “being-for-the-other” and Butler’s *Giving an Account of Oneself* (2005) where accountability involves opacity and obligation.' }
        ]
      }
    ]
  });
})();
