/* Conclusion: Just Emotions — authored guide. The printed Conclusion has no subheadings, so `splits`
   divides it into five study movements by paragraph index. */
(function () {
  CP.unit('conclusion', {
    splits: [
      { title: 'Ali’s Arms: Grief, Compassion and the Child', from: 0 },
      { title: 'Is Justice a Matter of “Just Emotions”?', from: 7 },
      { title: 'Feeling Good Is Not Justice', from: 13 },
      { title: 'Restorative Justice, Healing and the Social Bond', from: 15 },
      { title: 'Testimony, Feeling Better and Good Scars', from: 21 }
    ],
    tagline: 'Justice is not a feeling, but it involves feelings. The task is not to convert bad feelings into good ones but to work with and on the wounds.',
    claim: 'Looking back over the book: emotions work through **sticky signs** on bodies to make the **surfaces and boundaries** of worlds. Applied to **justice**, this means that neither “just emotions” as a virtue (compassion, love, sympathy) nor the removal of emotion from judgement will do. **Injustice is not reducible to suffering**, and **justice is not feeling good**; converting hate to love, shame to pride, despair to hope can repeat the violence. Ahmed proposes **leaving room for feeling better** without making it the goal, valuing **testimony as exposure**, and rethinking healing through the image of **a good scar — one that sticks out**.',
    glance: [
      'Case: a British tabloid story of an injured Iraqi boy, Ali: grieving the “ungrievable” child turns into compassion-as-gift, gratitude and “becoming British”.',
      'Against justice-as-virtue (Solomon) and against detaching justice from emotion (Kantian universalism). Emotions are effects, investments in norms, not grounds of judgement.',
      'Against happiness as the truth of justice (Berlant’s “stupid optimism”; Orbach: stay with bad feeling). Restorative justice and healing: personal but not only personal; critique of the family/social bond ideal and of forced proximity.',
      'Testimony as recognition and exposure; feeling better matters (energy, space, shelter, air) but is not the goal; the scar that shows; emotions as “the flesh of time”.'
    ],
    why: 'Public life asks for emotional conversions all the time: forgiveness, reconciliation, “closure”, “healing”, resilience, positivity. The Conclusion gives a vocabulary for evaluating them — asking what bad feelings are *doing*, who is asked to feel better, and whether the language of healing covers over harm. It is also the book’s clearest statement of what Ahmed does *not* claim: that emotion is the ground of truth, or that feeling good is justice.',
    argument: {
      steps: [
        { h: 'Recap of the thesis', p: 'Emotions work through signs and on bodies, materialising surfaces and boundaries. The Conclusion asks what this implies for (in)justice.' },
        { h: 'Grieving the ungrievable', p: 'Butler: the war is justified through distinguishing grievable from ungrievable lives. When an ungrieved child (Ali) is grieved, that can become compassionate gift, gratitude, and nation-making — and erase other losses.' },
        { h: 'Converting feelings does not repair injustice', p: 'Hate→love, indifference→sympathy, shame→pride, despair→hope can repeat the structure of violence by sustaining the subject/object divide.' },
        { h: 'Injustice is not reducible to suffering', p: 'Basing wrong on felt suffering permits violence where the other “is not hurting”. But suffering is not separable from injustice either; emotions are not transparent.' },
        { h: 'Emotions are signs, not possessions', p: 'Justice cannot be a matter of having the right emotions (Solomon’s character-based view) nor of eliminating emotion (Kant); emotions are effects and investments in norms, not ground.' },
        { h: 'Justice is not feeling good', p: 'Happiness as the truth of justice is a promise sustaining investment in the nation (Berlant). Therapy (Orbach) is staying with bad feeling.' },
        { h: 'Restorative justice', p: 'Personal harm and emotional encounter are valuable, but the personal is mediated; remorse as sign; reintegrative shaming idealises loving families; the social bond may be the site of injustice; others have the right not to be with me.' },
        { h: 'Testimony, feeling better, scars', p: 'Testimony is recognition and exposure; feeling better matters but is not the goal; anger can be enabling; a good scar sticks out; emotions are the flesh of time; where we go with feelings remains open.' }
      ]
    },
    diagram: {
      title: 'Conclusion: what “just emotions” would and would not mean', w: 620,
      zones: [{ x: 10, y: 38, w: 295, h: 230, label: 'Not' }, { x: 320, y: 38, w: 295, h: 230, label: 'But' }],
      nodes: [
        { id: 'a', x: 158, y: 105, w: 230, label: 'Justice = having the right feelings (virtue, fellow-feeling)', kind: 'a' },
        { id: 'b', x: 158, y: 205, w: 230, label: 'Justice = detached reason (no feelings)', kind: 'a' },
        { id: 'c', x: 468, y: 105, w: 230, label: 'Emotions are effects, investments in norms — involved in justice', kind: 'e' },
        { id: 'd', x: 468, y: 205, w: 230, label: 'Leave room for feeling better; don’t make it the goal', kind: 'e' },
        { id: 'x', x: 310, y: 335, w: 500, label: 'A good scar sticks out: work with and on the wounds rather than over them', kind: 'd' }
      ],
      edges: [{ from: 'a', to: 'c', dash: true }, { from: 'b', to: 'c', dash: true }, { from: 'c', to: 'x' }, { from: 'd', to: 'x' }],
      caption: 'Two failed models on the left; Ahmed’s alternative on the right.'
    },
    context: [
      'The Conclusion draws on **political philosophy of emotion** (Solomon; Hume and Smith’s moral sentiments), **feminist critique of Kantian universalism** (Benhabib, Young), **critical theory of sentimentality** (Berlant), **restorative justice and reconciliation literatures** (Braithwaite, Johnstone, Minow, Hudson & Galaway) and **psychotherapy** (Orbach). The case is the British press’s coverage of the Iraq war, via a tabloid story about an injured Iraqi boy.',
      'It also reprises the book’s earlier cases: Butler on grievability (Ch. 6–7), charity (Ch. 1), shame and apology (Ch. 5), multicultural love (Ch. 6), anger (Ch. 8).'
    ],
    terms: ['justice', 'compassion', 'grief', 'restorative-justice', 'healing', 'testimony', 'happiness', 'attachment', 'sticky', 'performativity', 'ethics-of-not-knowing', 'scar'],
    people: ['butler', 'berlant', 'solomon', 'orbach', 'braithwaite', 'minow', 'hochschild', 'nussbaum', 'kant'],
    sources: [
      { who: 'Judith Butler', work: 'Precarious Life (2004); Frames of War (2009)', role: 'Grievable vs ungrievable lives justify war.', use: 'Frame for the Ali story and the question of grieving the ungrieved.' },
      { who: 'Lauren Berlant', work: '“Compassion (and Withholding)” (2004); Cruel Optimism (2011)', role: 'Compassion as conservative sentimentality; optimism as faith in adjustment.', use: 'Critique of compassion and happiness-as-justice.' },
      { who: 'Robert C. Solomon', work: 'A Passion for Justice (1990/1995)', role: '“Justice is first of all a function of personal character.”', use: 'The virtue model of justice and emotion.' },
      { who: 'Susie Orbach', work: 'Towards Emotional Literacy (1999)', role: 'Psychotherapy is staying with bad feelings, not converting them.', use: 'To argue overcoming bad feeling is not the measure of healing.' },
      { who: 'John Braithwaite; Gerry Johnstone; Martha Minow', work: 'Restorative justice; Between Vengeance and Forgiveness (1998)', role: 'Restorative, reintegrative justice; healing; testimony.', use: 'The main model of “emotions in justice” she evaluates.' },
      { who: 'Arlie Hochschild', work: 'The Commercialization of Intimate Life (2003)', role: 'Economy of gratitude.', use: 'Indebtedness of the “saved” other.' }
    ],
    conversation: [
      { h: 'Restorative and transformative justice', p: 'Restorative justice has expanded (schools, workplaces, criminal justice, post-conflict states); critics such as Annalise Acorn (*Compulsory Compassion*, 2004) argue it demands emotional performance from victims, a concern close to Ahmed’s. Abolitionist and “transformative justice” movements (Angela Davis, Ruth Wilson Gilmore, Mia Mingus) ask for responses that address structural conditions and avoid carceral logics; they often foreground collective accountability and care. #MeToo and “accountability” debates have made emotions and apologies central.' },
      { h: 'Truth commissions and reconciliation', p: 'South Africa’s Truth and Reconciliation Commission (1996–2002) and Canada’s TRC (2015) are the largest experiments in “healing” through testimony; Mahmood Mamdani, Fiona Ross and others criticise the therapeutic frame and the narrowing of justice to individual stories. Ahmed’s claim that testimony is both recognition and exposure belongs here.' },
      { h: 'Emotions and law', p: 'Susan Bandes (*The Passions of Law*, 1999), Martha Nussbaum (*Political Emotions*, 2013) and others debate whether law should be dispassionate. Ahmed refuses both the stoic and the sentimentalist side; her view is closest to feminist critiques of “reason” (Young, Benhabib).' },
      { h: 'Happiness and its critics', p: 'Ahmed’s next book *The Promise of Happiness* (2010) takes up the line “being happy is not itself a sign of justice” — the “happiness industry”, positive psychology (Barbara Ehrenreich’s *Bright-Sided*, 2009), and Berlant’s optimism.' },
      { h: 'Children as political figures', p: 'The “innocent child” as figure of universal sympathy has been analysed in queer theory (Edelman’s *No Future*, 2004) and humanitarian studies (Lisa Malkki on the “child” as depoliticised subject). Ahmed’s note that “the child represents the face of innocence” is part of that literature.' }
    ],
    debates: ['compassion-humanitarianism', 'national-apologies', 'wounded-attachments', 'affective-turn'],
    questions: [
      'What do you think of Ahmed’s claim that to be moved by an injured child can be a way of being elevated into compassion while other others remain erased? Where do you see this in humanitarian or news coverage?',
      'Does the argument that justice is not reducible to suffering ring true? What are the dangers of making justice depend on how people feel?',
      'Do you agree that overcoming bad feeling is not a measure of healing? How would that change how institutions respond to harm?',
      'How would you apply Ahmed’s critique of restorative justice (personalisation, family idealisation, the duty of relationship) to a real case — a workplace dispute, a school conflict?',
      'What does “a good scar sticks out” mean in practice? What institutional or personal practices would honour scars rather than hiding them?'
    ],
    bridges: {
      back: 'The Conclusion revisits Chapter 1 (compassion, testimony), Chapter 5 (apology, healing), Chapter 6 (love, gratitude), Chapter 7 (grievability) and Chapter 8 (anger, hope), turning them toward one question: what is a just response to injustice?',
      forward: 'The Afterword (2nd edition) steps back to place the book in the “affective turn” and to describe its development in *Strange Encounters* and *The Promise of Happiness* — including the question of emotions and their objects.'
    },
    sections: [
      {
        title: 'Ali’s Arms: Grief, Compassion and the Child',
        gist: 'Ahmed asks what emotions do in relation to (in)justice, starting from a British newspaper story about an injured Iraqi boy. Grieving the “ungrievable” seems to correct an injustice — but it can turn into compassion-as-gift, indebtedness and a story of “becoming British”, and erase other losses. Converting bad feeling into good doesn’t repair injustice.',
        moves: [
          { h: 'The book’s question, applied', p: 'What do emotions do? In conclusion: how are emotions bound up with stories of justice and injustice, and with restoration, repair and healing? Is a just response about having “just emotions”?' },
          { h: 'Grievability and war', p: 'Butler: the distinction between grievable and ungrievable lives is needed to justify war as recovery rather than repetition of terror. What happens when the ungrieved are grieved?' },
          { h: 'Ali', p: 'The Iraqi child’s loss becomes visible to British readers who are asked to mourn; the child “stands for” the nation’s pain; other losses are erased by the singular figure.' },
          { h: 'Compassion elevates', p: 'Compassion shows the subject as loving in the midst of violence (Berlant: compassion as the new face of conservatism). The child is the face of innocence; “that child could be mine”.' },
          { h: 'Gift and gratitude', p: 'If compassion is a gift, the other is indebted (Hochschild); Ali’s “hope of the nation” becomes the promise of becoming British (“ask the Queen to stay for ever”).' },
          { h: 'The lesson', p: 'Justice cannot be read as good feeling; converting bad feeling into good (hate→love, indifference→sympathy, shame→pride, despair→hope) can repeat violence by keeping the subject/object structure.' }
        ],
        voice: 'I begin with a story that seems the opposite of the earlier ones: it is about grief for an Iraqi child. It would be wrong to say that grief is bad. But it matters how the grief is told: who is moved, who is thanked, who is erased. When a nation weeps for a child, it can be moved into a better image of itself while the lives it has destroyed remain uncounted. So the question is not whether we feel, but what our feeling lets us avoid.',
        context: 'British press coverage of the 2003 Iraq invasion (the Mirror was an anti-war paper and its coverage of the injured boy is the text’s example). The widely reported injured Baghdad boy of 2003 is generally identified with Ali Ismaeel Abbas; the text’s citations are to the Mirror. The wider frame is Butler’s *Precarious Life* and Berlant’s writing on compassion; the Chapter 1 critique of charity returns.',
        objection: 'One may ask if this is fair to the readers who gave money or to the campaign that helped Ali: concrete help was delivered. Ahmed’s argument concerns the *narrative form*, not the aid; but a critic may say it risks discouraging compassion altogether. Her answer in the final section is that feeling better and material help matter — they are not the same as justice.',
        terms: ['grief', 'compassion', 'justice', 'fetishism', 'nation'],
        people: ['butler', 'berlant', 'hochschild'],
        diagram: {
          title: 'The Ali narrative: grief as gift', w: 620,
          nodes: [
            { id: 'a', x: 105, y: 80, w: 150, label: 'An “ungrievable” life', sub: 'Iraqi child, injured', kind: 'ghost' },
            { id: 'b', x: 310, y: 80, w: 150, label: 'Grieved by British readers', sub: 'compassion, moved', kind: 'c' },
            { id: 'c', x: 515, y: 80, w: 150, label: 'The child stands for the nation', sub: 'hope of Iraq', kind: 'c' },
            { id: 'd', x: 515, y: 205, w: 150, label: 'Gift → indebtedness', sub: 'gratitude', kind: 'a' },
            { id: 'e', x: 310, y: 205, w: 160, label: '“Stay in Britain for ever”', sub: 'hope = becoming British', kind: 'a' },
            { id: 'f', x: 105, y: 205, w: 150, label: 'Other losses erased', sub: 'too many to name', kind: 'ghost' },
            { id: 'x', x: 310, y: 320, w: 400, label: 'Converting bad feeling into good does not repair — it can sustain the structure', kind: 'd' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' }, { from: 'f', to: 'x', dash: true }, { from: 'e', to: 'x', dash: true }],
          caption: 'The extension of grief to one figure is also the occasion for forgetting others.'
        },
        questions: [
          'Why is a child’s suffering especially able to “touch the nation”? What does the figure of the child do?',
          'What would it mean to grieve for Ali *without* the story of gratitude and becoming British?'
        ],
        glosses: [
          { q: 'the distinction between lives that are grievable and ungrievable', t: 'Butler on grievability', b: 'Butler’s *Precarious Life: The Powers of Mourning and Violence* (2004) asks which lives are “grievable” and notes that in the “war on terror”, public obituaries and the media framed some deaths as losses and others as non-losses. She argues that acknowledging precarity — shared vulnerability — could ground a different politics. *Frames of War* (2009) develops it as a critique of the “frames” that determine whose lives count.', people: ['butler'] },
          { q: 'Lauren Berlant examines how compassion has become the new face of conservatism', t: 'Compassionate conservatism', b: 'Berlant’s “Compassion and Withholding” (in *Compassion: The Culture and Politics of an Emotion*, 2004) analyses US “compassionate conservatism” (Bush’s slogan): the state’s turn from structural redistribution to emotional gestures of care. Ahmed’s link to Chapter 1: compassion can reproduce the structures that produce suffering.', people: ['berlant'] },
          { q: 'The child represents the face of innocence', t: 'The innocent child', b: 'Note 9 of the Introduction already flagged the figure of the child as the “not-yet subject”. Here the *political* child becomes the object of universal compassion, enabling identification across difference (“that child could be mine”). Compare Lee Edelman’s “the Child” as the figure of reproductive futurism (*No Future*, 2004) and Lisa Malkki’s “Children, humanity and the infantilization of peace”.' },
          { q: 'The position of indebtedness is the position of gratitude', t: 'The economy of gratitude', b: 'Arlie Hochschild’s “economy of gratitude” (cited in Chapter 6’s note 13) treats gratitude as a structural position, not merely a feeling. The Mirror’s subsequent headline (“I’m going to ask the Queen if I can stay in Britain for ever”) fits the pattern: the saved subject expresses gratitude by wishing to be incorporated into the saving nation. Compare Mimi Nguyen’s *The Gift of Freedom* (2012) on “refugee gratitude”.' }
        ]
      },
      {
        title: 'Is Justice a Matter of “Just Emotions”?',
        gist: 'Ahmed argues injustice cannot be reduced to feeling bad — that would let violence stand when the other “is not hurting” — but cannot be separated from it either. Emotions are signs on bodies, not possessions; so justice cannot be a matter of having the right emotions (virtue ethics) nor of eliminating emotion (Kantian universalism). Emotions are effects and investments in norms.',
        moves: [
          { h: 'Injustice ≠ pain', p: 'Berlant: injustice cannot be reduced to feeling bad. If wrongness depended on suffering, violence could be justified where the other claims or is claimed not to suffer — “not hurting”, “happy”.' },
          { h: 'But not separable', p: 'The effects of violence are part of why it is bad; but emotions are not transparent; they circulate through objects (Chs. 2–3), are performative (Ch. 4).' },
          { h: 'Emotions as signs', p: 'Emotion is not a possession or an instrument of persuasion (rhetoric as style without content). It operates in the relation between signs: “stickiness”.' },
          { h: 'Against justice as virtue', p: 'Solomon: justice as personal character, fellow-feeling. But justice defined as sympathy elevates the giver, personalises and privatises injustice; character is an effect, not a ground.' },
          { h: 'Against detachment', p: 'The Kantian tradition detaches justice from emotion, constructing emotion as unreasonable; it justifies treating women and racial others as less capable of judgement and the “rule of law” as a sign of injustice.' },
          { h: 'Her position', p: 'Emotions are effects, not origins; they are investments in norms; “feeling” the costs of norms as collective loss is crucial to struggling against injustice, but not as the ground for action (note 2: norms and affects both).' }
        ],
        voice: 'There are two tempting responses to the thought that injustice should not be measured by feeling. One is to say justice is a virtue — if we had better feelings we would be fairer. The other is to say justice must leave feelings behind. I disagree with both. To make justice depend on how you feel lets others’ feelings be doubted; to remove feeling leaves a model of judgement that was never as unfeeling as it claimed. What I want is to see emotions as part of how norms hold, and so part of what must change when norms do.',
        context: 'Solomon’s *A Passion for Justice* (1990) argues for emotions as basic to justice; Hume and Smith’s sentimentalist ethics are the lineage. The Kantian/Habermasian tradition is criticised by feminist philosophers (Young’s *Justice and the Politics of Difference*, 1990; Benhabib’s *Situating the Self*, 1992), cited in note 2. Berlant (2000) provides the claim that injustice is not reducible to pain.',
        objection: 'A Kantian might respond that universal moral law does not deny emotion but demands that it not be the ground of obligation, which is exactly Ahmed’s position when she says emotions cannot be the ground of judgement. A virtue ethicist may respond that character is not individualist: virtues are social (MacIntyre). So the dispute may be narrower than Ahmed makes it; the distinctive part is her claim that character is an effect of social relations of power.',
        terms: ['justice', 'sticky', 'performativity', 'attachment', 'compassion'],
        people: ['solomon', 'berlant', 'kant', 'nussbaum'],
        diagram: {
          title: 'Three views of emotions and justice', w: 620,
          zones: [{ x: 10, y: 38, w: 195, h: 270, label: 'Virtue (Solomon)' }, { x: 213, y: 38, w: 195, h: 270, label: 'Detachment (Kant)' }, { x: 416, y: 38, w: 195, h: 270, label: 'Ahmed' }],
          nodes: [
            { id: 'a1', x: 108, y: 110, w: 160, label: 'Justice = good character, fellow-feeling', kind: 'b' }, { id: 'a2', x: 108, y: 190, w: 160, label: 'Elevates the one who can feel for others', kind: 'a' }, { id: 'a3', x: 108, y: 260, w: 160, label: 'Personalises injustice', kind: 'a' },
            { id: 'b1', x: 311, y: 110, w: 160, label: 'Justice = reason without emotion', kind: 'b' }, { id: 'b2', x: 311, y: 190, w: 160, label: 'Emotion = unreasonable', kind: 'a' }, { id: 'b3', x: 311, y: 260, w: 160, label: 'Others cast as “swayed by emotions”', kind: 'a' },
            { id: 'c1', x: 514, y: 110, w: 160, label: 'Emotions are effects, not grounds', kind: 'e' }, { id: 'c2', x: 514, y: 190, w: 160, label: 'Investments in norms', kind: 'e' }, { id: 'c3', x: 514, y: 260, w: 160, label: 'Feeling the costs of norms as collective loss', kind: 'e' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }, { from: 'c1', to: 'c2' }, { from: 'c2', to: 'c3' }],
          caption: 'Both rival views rest on the idea that emotions are possessions; Ahmed’s answer shifts to emotions as relations between signs and bodies.'
        },
        questions: [
          'Where do you see the argument “they’re not really hurting” used to justify harm? How does Ahmed’s caution help you respond?',
          'Do you agree that character is “an effect rather than a ground”? What might a defender of virtue ethics say?'
        ],
        glosses: [
          { q: 'Berlant has argued that injustice cannot be reduced to pain', t: 'Berlant on “the subject of true feeling”', b: 'In “The Subject of True Feeling: Pain, Privacy, and Politics” (2000) Berlant criticises how US political culture treats pain as the guarantee of the truth of a claim, making “who feels pain” the test of political legitimacy. Ahmed’s Conclusion reaffirms: suffering matters, but cannot be the ground (note 3 on Williams: “my maid says blacks are happy”).', people: ['berlant'] },
          { q: 'But emotions are not transparent', t: 'Opacity of emotion', b: 'Ahmed reasserts a theme from the Introduction (the subject does not always know how she feels). Compare Butler’s *Giving an Account of Oneself* (2005): the subject is opaque to herself; and critiques of “sincerity” in apology (Chapter 5). The claim is also a defence against “emotional literacy” discourse that treats feelings as readable.' },
          { q: 'Justice is first of all a function of personal character', t: 'Solomon’s A Passion for Justice', b: 'Robert Solomon (1990) argues, with Aristotle, Hume and Smith, that justice is a virtue grounded in sentiments, especially “fellow-feeling”. Ahmed’s critique builds on Chapters 1 and 6: sympathy elevates the sympathiser. A defender might point to Smith’s “impartial spectator” as correcting this.', people: ['solomon'] },
          { q: 'Kantian and post-Kantian ethical traditions', t: 'Feminist critique of Kantian reason', b: 'Carol Gilligan’s *In a Different Voice* (1982), Seyla Benhabib’s *Situating the Self* (1992) and Iris Marion Young’s *Justice and the Politics of Difference* (1990) argue that the ideal of impartial reason masks particular standpoints and devalues emotion and care. Ahmed’s (Chapter 8) argument that the reason/emotion hierarchy maps onto gender and race is in this lineage.', people: ['kant'] }
        ]
      },
      {
        title: 'Feeling Good Is Not Justice',
        gist: 'If injustice is not simply feeling bad, justice is not feeling good. Happiness can be a promise that sustains investment in norms (Berlant’s “stupid optimism”); the nation becomes the agent of an always-deferred justice. Overcoming bad feeling can erase the signs of injustice; Orbach’s psychotherapy is staying with bad feeling.',
        moves: [
          { h: 'Happiness is not a sign of justice', p: 'Happiness can be promised as a return for investment in social norms. Berlant: faith that adjustment will secure happiness is a “stupid” optimism.' },
          { h: 'The nation as deferred promise', p: 'The nation is installed as the hope of the subject — the “pursuit of happiness”. Justice becomes the promised return that must not be realised for investment to be sustained (Chapter 6).' },
          { h: 'Covering over', p: 'Shame in Chapter 5: a narrative of recovery and covering over. The desire to feel better can erase relations of violence.' },
          { h: 'Orbach', p: 'Psychotherapy is staying with and accepting bad feelings long enough to make personal sense of them — not turning them into good.' },
          { h: 'The question', p: 'Is the struggle against injustice about a different relation to bad feeling — not installed as the truth of injustice, not something to overcome?' }
        ],
        voice: 'We are told that if justice were done we would be happy. I want to turn that around: being happy is not itself a sign of justice. Happiness can be the reward for believing the right things, adjusting to the right norms, loving the right nation. And it can be a way of ending the story too soon. I do not mean we should cultivate misery. I mean that a politics that treats feeling better as its measure may be treating the symptom as the cure.',
        context: 'Berlant’s critique of optimism (the Conclusion cites a 2002 essay; the idea becomes *Cruel Optimism*, 2011). Orbach’s writing on emotional literacy in psychotherapy provides a clinical analogy. Ahmed would devote *The Promise of Happiness* (2010) to the idea that happiness works as a “technology” of social norms. McGill (1967) and Sumner (1996) are cited for philosophical analyses of happiness.',
        objection: 'A utilitarian would say that of course feeling good matters morally — wellbeing is the measure of justice. Ahmed accepts that “feeling better does and should matter” (in the final section). The disagreement is about whether feeling good can be *the sign or goal* of justice; and about “happiness” as a social duty.',
        terms: ['happiness', 'attachment', 'nation', 'justice', 'shame'],
        people: ['berlant', 'orbach'],
        diagram: {
          title: 'How happiness sustains investment', w: 600,
          nodes: [
            { id: 'a', x: 110, y: 80, w: 140, label: 'Invest in the norm / nation', kind: 'b' },
            { id: 'b', x: 300, y: 80, w: 160, label: 'Promise: happiness', sub: 'as reward for adjustment', kind: 'a' },
            { id: 'c', x: 490, y: 80, w: 150, label: 'Return deferred', sub: 'waiting', kind: 'a' },
            { id: 'd', x: 300, y: 205, w: 230, label: 'Justice = promised return that must not be realised', kind: 'd' },
            { id: 'e', x: 300, y: 310, w: 400, label: 'Alternative (Orbach): stay with bad feeling long enough to make sense of it', kind: 'e' }
          ],
          edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'a', curve: -55, dash: true, label: 'more invested' }, { from: 'd', to: 'e', dash: true }],
          caption: 'Compare Chapter 6’s “love as waiting”: happiness is the form the promised return takes.'
        },
        questions: [
          'Where do you see happiness presented as the goal of politics or of institutions (wellbeing programs, “positivity”, resilience)? What gets covered over?',
          'What would it mean for an institution to “stay with” bad feeling after a harm?'
        ],
        glosses: [
          { q: 'stupid form of optimism', t: 'Berlant on optimism', b: 'In the essay Ahmed cites (Berlant 2002) Berlant describes “stupid optimism” — the faith that adjustment to certain forms of living will secure happiness. The idea was developed into “cruel optimism” (2011): attachments to objects that impede the flourishing they promise. Ahmed’s own *The Promise of Happiness* (2010) takes “happiness” itself as the object.', people: ['berlant'], terms: ['happiness'] },
          { q: 'Susie Orbach’s work', t: 'Orbach and the therapeutic', b: 'Susie Orbach, psychotherapist and author of *Fat Is a Feminist Issue* (1978), co-founded the Women’s Therapy Centre. Ahmed quotes *Towards Emotional Literacy* (1999) for the idea that therapy is not conversion of bad feelings into good. Contrast the “happiness industry” critique (Davies 2015) of therapeutic culture as discipline.', people: ['orbach'] },
          { q: 'staying with and accepting the bad feelings', t: 'Staying with the trouble', b: 'The phrase foreshadows later feminist uses (Haraway’s “staying with the trouble”, 2016; Ahmed’s own “sweaty concepts”) of remaining with discomfort. In activism, “staying with” resonates with Audre Lorde’s claim that anger carries information.' }
        ]
      },
      {
        title: 'Restorative Justice, Healing and the Social Bond',
        gist: 'Restorative justice returns emotions to the scene of justice: harm as personal, remorse, forgiveness, reintegration. Ahmed is sympathetic to the personal but critiques its reliance on emotions as signs, its idealisation of the family and the social bond (Braithwaite’s “loving families”), its assumption that justice is “good relationships”, and the risk of reading the collective as an individual that heals.',
        moves: [
          { h: 'The model', p: 'Crime as violation of a person by a person; offenders made to feel the harm, victims communicate feelings; remorse and forgiveness symbolise restoration of community (Johnstone, Daly, Braithwaite, Hudson & Galaway).' },
          { h: 'Why the personal matters', p: '“Don’t take it personally” conceals effects on somebody. But reducing injustice to the personal conceals its public, systematic dimensions.' },
          { h: 'Emotions as signs', p: 'Remorse is treated as overcoming injury; but, as with apology (Chapter 5), expressions may stand in for emotion, and the circulation of signs may be a sign of something else.' },
          { h: 'Reintegrative shaming and the family', p: 'Braithwaite: shame works when it is administered by loving families; “the best place to see reintegrative shaming is in loving families”. The idealisation of the family excludes others (queers) already cast as failing its form.' },
          { h: 'The social bond', p: 'The literature assumes injustice is the failure of the bond; but the bond has conditions of love that others fail (Chapter 6); justice should not be a manual for good relationships; others may have the right “not to be with me”.' },
          { h: 'Healing language', p: 'Healing travels between therapy and national reconciliation; the risk is reading the collective as an individual that “has” feelings; Minow: politics should leave room for therapy without being reduced to it.' }
        ],
        voice: 'I find in the restorative justice literature something that matters: the insistence that harm is done to somebody, and that they must be heard. What troubles me is how quickly it turns to the language of community, family and healing — as if the bond were innocent. If injustice is a matter of how bonds are made, then restoring them can restore what was unjust. And if I do not wish to be near you after what you did, justice should leave me that right.',
        context: 'Restorative justice emerged in the 1970s–90s (Zehr, Christie, Braithwaite); it has been applied to youth justice (New Zealand’s family group conferences), schools and post-conflict contexts. Healing discourse is prominent in truth commissions (Minow’s *Between Vengeance and Forgiveness*, 1998). The Conclusion’s reading ties these to Chapters 5–7: apology, family, multicultural bonds.',
        objection: 'Restorative justice practitioners may reply that Ahmed’s critique applies to bad practice, not the principle: good practice centres victim choice, includes structural analysis (e.g., “circles” in Indigenous traditions), and can be refused. Another reply: reintegrative shaming is not about “loving families” but about relationships of respect. Ahmed’s argument is at the level of how the literature *idealises* the bond.',
        terms: ['restorative-justice', 'healing', 'shame', 'apology', 'attachment', 'heteronormativity', 'multiculturalism'],
        people: ['braithwaite', 'minow', 'johnstone'],
        diagram: {
          title: 'The restorative sequence — and what it leaves out', w: 620,
          nodes: [
            { id: 'h', x: 90, y: 75, w: 120, label: 'Harm', sub: 'a person violated', kind: 'a' },
            { id: 'c', x: 235, y: 75, w: 130, label: 'Encounter', sub: 'victim voices feeling', kind: 'b' },
            { id: 'r', x: 385, y: 75, w: 130, label: 'Remorse', sub: 'a sign of feeling', kind: 'b' },
            { id: 'f', x: 530, y: 75, w: 130, label: 'Forgiveness', sub: 'a gift', kind: 'b' },
            { id: 'b', x: 310, y: 190, w: 230, label: 'Reintegration into the community', sub: '“loving families”', kind: 'e' },
            { id: 'x1', x: 120, y: 305, w: 190, label: 'Left out: how the bond is made', sub: 'conditions of love; others who fail', kind: 'ghost' },
            { id: 'x2', x: 500, y: 305, w: 210, label: 'Left out: the right “not to be with me”', kind: 'ghost' }
          ],
          edges: [{ from: 'h', to: 'c' }, { from: 'c', to: 'r' }, { from: 'r', to: 'f' }, { from: 'f', to: 'b', curve: -20 }, { from: 'b', to: 'x1', dash: true }, { from: 'b', to: 'x2', dash: true }],
          caption: 'Ahmed’s worry: restoring the bond may restore its injustices.'
        },
        questions: [
          'What is gained and what is lost by treating injustice as a personal harm to be addressed through emotional encounter?',
          'Do you agree that others may have the right “not to be with me”? Where does that matter in practice (reconciliation, mediation, workplaces)?',
          'How does the critique of the idealised family bear on restorative practices in schools and workplaces?'
        ],
        glosses: [
          { q: 'restorative justice', t: 'A short history', b: 'Restorative justice draws on Indigenous practices (Māori family group conferences; Canadian First Nations circles), the 1970s victim–offender mediation movement (Zehr’s *Changing Lenses*, 1990), and Braithwaite’s theory. Critics (Acorn 2004; Daly 2002) discuss coercion, gender and the problem of emotional demand on victims. Ahmed’s notes 5–6 acknowledge Nietzsche’s critique of retribution and forgiveness’s ambivalent status.' },
          { q: 'The best place to see reintegrative shaming at work is in loving families', t: 'Braithwaite and the family', b: 'Braithwaite’s *Crime, Shame and Reintegration* (1989) uses the family as the paradigm of shaming that does not stigmatise. Feminist and queer critics note that families are also sites of violence and normative policing. Ahmed’s Chapter 5 on shame within families (note 5) and Chapter 7 on queer families are the background.', people: ['braithwaite'] },
          { q: '‘not to be with me’', t: 'The right not to relate', b: 'This resonates with Ahmed’s interest in “being left alone” and with decolonial arguments for *refusal* (Audra Simpson’s *Mohawk Interruptus*, 2014; Carole McGranahan’s “ethnographic refusal”). It complicates the assumption in healing discourse that reconciliation requires proximity.' },
          { q: 'For Minow, the work of healing', t: 'Minow on healing and politics', b: 'Martha Minow’s *Between Vengeance and Forgiveness: Facing History after Genocide and Mass Violence* (1998) examines truth commissions and trials. Ahmed quotes her view that narrating trauma needs emotional and bodily detail — and that politics should leave room for therapy without reduction to it.', people: ['minow'] }
        ]
      },
      {
        title: 'Testimony, Feeling Better and Good Scars',
        gist: 'The book’s last movement: testimony as recognition and exposure; healing as exposing the wound; the work of repeating testimony; why feeling better matters though it is not justice; anger as enabling; and a new image of healing — a good scar is one that sticks out. Emotions are “the flesh of time”.',
        moves: [
          { h: 'Testimony', p: 'Truth commissions and reparation depend on telling injury. Telling is not necessarily therapeutic; it makes demands on witnesses and may be covered over. Testimonies are recognition in themselves: they claim an injustice did happen.' },
          { h: 'Healing as exposure', p: 'Recognition changes history: if violence shapes the present, the “truths” of history are questioned. Healing does not cover over but exposes: recovery is a form of exposure.' },
          { h: 'Repeating', p: 'Exposure is not over in the moment of hearing; testimonies must be repeated; defences against hearing (guilt, shame, anger, denial, indifference) must be worked through.' },
          { h: 'Feeling better', p: 'Justice must leave room for feeling better — not as the goal. Feeling better can mean telling, silence, apology, compensation, space, time, shelter, warmth, air; we cannot know in advance.' },
          { h: 'Negative emotions enable', p: 'Anger, rage and shame can be enabling or creative; moving is work, not “moving on”.' },
          { h: 'The scar', p: 'A good scar is one that sticks out; it allows healing and covers over but exposes the injury; just emotions work with and on the wounds, not over them.' },
          { h: 'Time', p: 'Emotions are the “flesh” of time: they show how histories persist; they also open futures. Justice is not a feeling; feelings are not always just; but justice involves feelings. Where we go is open.' }
        ],
        voice: 'I end with a scar. We admire surgeons whose stitching leaves no trace. But a wound that leaves no trace lets us forget that there was a wound. I want a politics of the scar that sticks out — that allows healing and does not hide where the injury was. That is also why I say feeling better matters: people need air to breathe, not just recognition. But feeling better should not be the measure by which we decide the world is just. Emotions show how long things take; they are the flesh of time. And where we go with them is a question I am glad to leave open.',
        context: 'The truth-commission and reparations discourse in South Africa, Canada, Australia and Latin America; the debate on “testimonial cultures” (Ahmed & Stacey 2001) and Chapter 1’s *Bringing Them Home*. The scar image is Ahmed’s own; compare Alexis Pauline Gumbs, Gloria Anzaldúa on wounds, and Japanese *kintsugi* (repair that shows the break), although she does not cite them.',
        objection: 'Some readers find the ending too open: what practical orientation does “working with and on the wounds” give? Others may argue that the scar metaphor accepts permanence of injury where political demands should seek *repair* and *restitution*. Ahmed’s answer would be that repair that conceals — compensation without recognition — repeats the injury, but she is careful not to reject material remedy.',
        terms: ['testimony', 'healing', 'anger', 'justice', 'scar', 'happiness'],
        people: ['butler', 'minow'],
        diagram: {
          title: 'A good scar sticks out', w: 620,
          zones: [{ x: 10, y: 38, w: 295, h: 235, label: 'The usual ideal' }, { x: 320, y: 38, w: 295, h: 235, label: 'Ahmed’s alternative' }],
          nodes: [
            { id: 'a1', x: 158, y: 105, w: 230, label: 'A good scar is hard to see', kind: 'a' }, { id: 'a2', x: 158, y: 175, w: 230, label: 'We forget the wounding', sub: 'recovery as covering over', kind: 'a' }, { id: 'a3', x: 158, y: 240, w: 230, label: '“It never happened”', kind: 'ghost' },
            { id: 'b1', x: 468, y: 105, w: 230, label: 'A good scar sticks out', sub: 'a lumpy sign on the skin', kind: 'e' }, { id: 'b2', x: 468, y: 175, w: 230, label: 'Healing that exposes: recovery as exposure', kind: 'e' }, { id: 'b3', x: 468, y: 240, w: 230, label: 'Bodies are shaped by their injuries', kind: 'e' }
          ],
          edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
          caption: 'The image applies to individuals and to nations: reconciliation without scars is forgetting.'
        },
        questions: [
          'Where do you see “a good scar” that sticks out — in memorials, apologies, institutions? Where do you see attempts to cover over?',
          'What would count, in your own context, as “feeling better” without being a sign that justice has been done?',
          'What does it mean to say emotions are “the flesh of time”? Which histories persist on bodies and surfaces around you?',
          'What do you think the book leaves open — and what would you like to ask Ahmed?'
        ],
        glosses: [
          { q: 'truth commissions', t: 'Truth commissions and testimony', b: 'South Africa’s TRC (1996–2002, chaired by Desmond Tutu) made public testimony central to its “restorative” approach; critics (Mamdani; Ross, *Bearing Witness*, 2003) argued the commission individualised violence and privileged “reconciliation” over redistribution. Canada’s Indian Residential Schools TRC (2008–15) reported on cultural genocide; its Calls to Action are a measure of what “recognition” requires.' },
          { q: 'Healing does not cover over, but exposes the wound to others', t: 'Recovery as exposure', b: 'A deliberate pun on “recovery” (to get better; to cover again) that echoes Chapter 5’s “re-covering”: the “re-covering of the nation”. The task is to heal in a way that does not re-cover. Compare Derrida’s “The Work of Mourning” and the long tradition of testimony as witnessing (Felman & Laub 1992).' },
          { q: 'justice has to leave room for feeling better', t: 'A pragmatic ethics of care', b: 'The passage is a realist concession: those who are exhausted by violence need rest, air, shelter. It has a kinship with Audre Lorde’s “Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare” (*A Burst of Light*, 1988) and with disability justice’s “care webs” (Piepzna-Samarasinha, *Care Work*, 2018).' },
          { q: 'A good scar is one that sticks out', t: 'The scar as sign', b: 'Scars recur in feminist and postcolonial writing as sites of memory (Toni Morrison’s *Beloved*; Anzaldúa’s “wound” of the borderlands). Ahmed’s reversal of the “truism” of the invisible scar parallels debates about memorials (the Vietnam Veterans Memorial’s “gash”) and about how nations narrate injury (e.g., Germany’s *Mahnmal*, countermonuments).' },
          { q: 'emotions are the very ‘flesh’ of time', t: 'Emotion and temporality', b: 'A closing thesis: emotion is how the past persists and futures open. The phrase echoes Merleau-Ponty’s “flesh of the world” and Bergson’s duration; it anticipates Ahmed’s later work on “queer temporalities” (Freeman’s *Time Binds*, 2010) and on happiness as an orientation to futures.' }
        ]
      }
    ]
  });
})();
