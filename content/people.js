/* Thinkers and interlocutors. (Original summaries; "read" lists are suggestions for further reading.) */
(function () {
  var list = [];
  function P(id, name, dates, field, auto, o) { o.id = id; o.name = name; o.dates = dates; o.field = field; o.auto = auto; list.push(o); }

  P('allport', 'Gordon W. Allport', '1897–1967', 'Social psychology', ['Allport', 'Gordon W. Allport'], {
    one: 'Author of *The Nature of Prejudice* (1954), the classic psychological study of prejudice.',
    gist: 'He argued prejudice involves ingroup love and outgroup rejection and proposed the “contact hypothesis”: under the right conditions, contact reduces prejudice.',
    relation: 'Ahmed uses Allport’s claim that love precedes hate to argue hate is an attachment (Ch. 2), and his contact idea resonates with the multicultural hope “If only we were closer…” (Ch. 6).',
    tension: 'Ahmed resists psychologising prejudice as individual disposition.',
    read: ['The Nature of Prejudice (1954)'], units: ['ch2', 'ch6'], terms: ['hate']
  });
  P('althusser', 'Louis Althusser', '1918–1990', 'Marxist philosophy', ['Althusser'], {
    one: 'Marxist philosopher who theorised ideology and “interpellation”.',
    gist: 'In “Ideology and Ideological State Apparatuses” (1970), individuals become subjects when hailed by ideology.',
    relation: 'Ahmed uses interpellation for emotional address (“you probably feel…”) and for being hailed as the hated.',
    tension: 'She stresses that interpellation is uneven and can fail.',
    read: ['Ideology and Ideological State Apparatuses (1970)'], units: ['ch1', 'ch2'], terms: ['interpellation']
  });
  P('austin', 'J. L. Austin', '1911–1960', 'Philosophy of language', ['Austin', 'J. L. Austin'], {
    one: 'Ordinary-language philosopher who founded speech-act theory in *How to Do Things with Words* (1962).',
    gist: 'He distinguished constatives and performatives, and described “felicity conditions” that make speech acts happy or unhappy.',
    relation: 'Ahmed reads apologies as “behabitives”, treats emotion words as performatives, and calls anger a speech act needing uptake.',
    tension: 'She argues Austin’s sincerity condition assumes emotions are inner states.',
    read: ['How to Do Things with Words (1962)'], units: ['ch4', 'ch5'], terms: ['performativity', 'speech-act']
  });
  P('barkan', 'Elazar Barkan', 'b. 1954', 'History / restitution studies', ['Barkan', 'Elazar Barkan'], {
    one: 'Historian of restitution; author of *The Guilt of Nations* (2000).',
    gist: 'He sees a “new public morality” of apology and reparation in international politics.',
    relation: 'Ahmed asks what an apology does as a speech act instead of treating it as evidence of emotion.',
    tension: 'She resists the idea that apology shows sincere feeling.',
    read: ['The Guilt of Nations (2000)'], units: ['ch5', 'conclusion'], terms: ['apology']
  });
  P('barthes', 'Roland Barthes', '1915–1980', 'Semiotics / literary theory', ['Barthes', 'Roland Barthes'], {
    one: 'French critic whose *A Lover’s Discourse* (1977) anatomises the language of love.',
    gist: 'The lover is always in love with love; the beloved is a pretext.',
    relation: 'Ahmed uses the line “it is love the subject loves, not the object” for multicultural “love for love” (Ch. 6).',
    tension: '—', read: ['A Lover’s Discourse (1977)'], units: ['ch6'], terms: ['love']
  });
  P('beck', 'Ulrich Beck', '1944–2015', 'Sociology', ['Beck', 'Ulrich Beck'], {
    one: 'Theorist of the “risk society”.',
    gist: 'In late modernity, solidarity forms around shared risk and insecurity rather than need.',
    relation: 'Ahmed extends his idea to say fear aligns bodies with and against others.',
    tension: 'She treats risk as produced through threat, not a given.',
    read: ['Risk Society (1992)'], units: ['ch3'], terms: ['fear', 'security']
  });
  P('berlant', 'Lauren Berlant', '1957–2021', 'Cultural theory / queer theory', ['Berlant', 'Lauren Berlant'], {
    one: 'Theorist of intimacy, sentimentality, the public sphere and “cruel optimism”.',
    gist: 'She showed how pain, compassion and national heterosexuality form US public culture, and how attachments to “the good life” can obstruct flourishing.',
    relation: 'A key ally throughout: on wound culture (Ch. 1–2), national heterosexuality (Ch. 7), compassion and happiness (Conclusion), and in the Afterword on “emotion vs affect”.',
    tension: 'She read Ahmed as “not really working on affect but emotion”.',
    read: ['The Queen of America Goes to Washington City (1997)', 'Cruel Optimism (2011)', 'Compassion (ed., 2004)'], units: ['intro', 'ch1', 'ch2', 'ch7', 'conclusion', 'afterword'], terms: ['attachment', 'happiness', 'compassion']
  });
  P('bhabha', 'Homi K. Bhabha', 'b. 1949', 'Postcolonial theory', ['Bhabha', 'Homi Bhabha', 'Homi K. Bhabha'], {
    one: 'Postcolonial theorist of the stereotype, mimicry and hybridity (*The Location of Culture*, 1994).',
    gist: 'The colonial stereotype is fixed yet requires anxious repetition; mimicry produces the “almost the same, but not quite”.',
    relation: 'Ahmed uses him on stereotype (Ch. 3), on “almost normal, but not quite” (Ch. 7) and hybrid whiteness (Ch. 6).',
    tension: '—', read: ['The Location of Culture (1994)'], units: ['intro', 'ch3', 'ch6', 'ch7'], terms: ['stereotype', 'hybrid-whiteness']
  });
  P('bloch', 'Ernst Bloch', '1885–1977', 'Marxist philosophy', ['Bloch', 'Ernst Bloch'], {
    one: 'Philosopher of utopian hope (*The Principle of Hope*).',
    gist: 'Hope is an expectant emotion that expands us toward the not-yet.',
    relation: 'Ahmed contrasts hope with fear (which shrinks) and then qualifies it (Ch. 8).',
    tension: 'She cautions that hope is not a disposition.',
    read: ['The Principle of Hope (1954–59)'], units: ['ch8'], terms: ['hope']
  });
  P('boler', 'Megan Boler', 'b. 1955', 'Philosophy of education', ['Boler', 'Megan Boler'], {
    one: 'Feminist philosopher of education; *Feeling Power: Emotions and Education* (1999).',
    gist: 'Emotions in the classroom are critical inquiry; “pedagogy of discomfort”.',
    relation: 'Ahmed follows Boler on wonder, discomfort and the “touchy-feely” dismissal (Ch. 8).',
    tension: '—', read: ['Feeling Power (1999)'], units: ['ch8'], terms: ['wonder']
  });
  P('braithwaite', 'John Braithwaite', 'b. 1951', 'Criminology', ['Braithwaite', 'John Braithwaite'], {
    one: 'Criminologist behind “reintegrative shaming” and restorative justice theory.',
    gist: 'Shame that maintains bonds and ends in forgiveness reintegrates offenders.',
    relation: 'Ahmed critiques the idealisation of loving families and the social bond (Conclusion).',
    tension: 'She worries restorative models restore unjust bonds.',
    read: ['Crime, Shame and Reintegration (1989)'], units: ['ch5', 'conclusion'], terms: ['restorative-justice', 'shame']
  });
  P('brennan', 'Teresa Brennan', '1952–2003', 'Philosophy / psychoanalytic theory', ['Brennan', 'Teresa Brennan'], {
    one: 'Theorist of “transmission of affect” (*The Transmission of Affect*, 2004).',
    gist: 'Affects pass between bodies physically; she links this to a psychoanalytic and biological account.',
    relation: 'A contrast to Ahmed’s “objects circulate, not feelings” in the Afterword.',
    tension: 'Ahmed worries that transmission models assume smooth passage.',
    read: ['The Transmission of Affect (2004)'], units: ['afterword'], terms: ['contagion']
  });
  P('bronski', 'Michael Bronski', 'b. 1949', 'Queer cultural history', ['Bronski', 'Michael Bronski'], {
    one: 'Writer on gay culture; *The Pleasure Principle* (1998).',
    gist: 'Homosexuality is feared and desired as sexual pleasure divorced from reproduction.',
    relation: 'Ahmed notes the ambivalence of fascination and warns against idealising pleasure (Ch. 7).',
    tension: '—', read: ['The Pleasure Principle (1998)'], units: ['ch7'], terms: ['pleasure']
  });
  P('brown', 'Wendy Brown', 'b. 1955', 'Political theory', ['Brown', 'Wendy Brown'], {
    one: 'Political theorist; *States of Injury* (1995) on “wounded attachments”.',
    gist: 'Politics grounded in injury risks ressentiment; she later urged feminism to “let its objects fly”.',
    relation: 'Ahmed’s main interlocutor on pain (Ch. 1, 8) and on hope; she agrees about wound fetishism but not about letting go.',
    tension: 'Forgetting vs remembering; detachment vs getting closer.',
    read: ['States of Injury (1995)', 'Women’s Studies Unbound (2003)'], units: ['intro', 'ch1', 'ch2', 'ch8'], terms: ['wounded-attachments', 'hope']
  });
  P('butler', 'Judith Butler', 'b. 1956', 'Philosophy / gender theory', ['Butler', 'Judith Butler'], {
    one: 'Theorist of gender performativity, norms, subjection and grievability.',
    gist: 'Norms materialise through repetition; subjects are attached to their subjection; some lives are not grievable.',
    relation: 'Ahmed’s most pervasive influence: materialisation (Intro, Ch. 1), performativity (Ch. 4), melancholia and grievability (Ch. 6–7, Conclusion).',
    tension: 'She extends Butler’s “like/unlike” beyond gender (race, family) and adds affective stickiness to iterability.',
    read: ['Bodies That Matter (1993)', 'The Psychic Life of Power (1997)', 'Excitable Speech (1997)', 'Precarious Life (2004)'], units: ['intro', 'ch1', 'ch2', 'ch4', 'ch5', 'ch6', 'ch7', 'conclusion'], terms: ['performativity', 'melancholia', 'grief']
  });
  P('campbell', 'David Campbell', 'b. 1960', 'International relations', ['David Campbell'], {
    one: 'Critical security theorist (*Writing Security*, 1992).',
    gist: 'Danger is not an objective condition but is produced through identity discourses.',
    relation: 'Ahmed uses him to argue threat is produced and fear an effect (Ch. 3).',
    tension: '—', read: ['Writing Security (1992)'], units: ['ch3'], terms: ['security', 'crisis']
  });
  P('crimp', 'Douglas Crimp', '1944–2019', 'Art critic / queer theorist', ['Crimp', 'Douglas Crimp'], {
    one: 'Critic and AIDS activist; “Mourning and Militancy”, “Melancholia and Moralism”.',
    gist: 'Mourning must be militant; promiscuity as cultural achievement; assimilation as melancholia.',
    relation: 'Ahmed draws on him for AIDS grief and the critique of Sullivan (Ch. 7), but is sceptical of idealising pleasure.',
    tension: 'On “staying with shame”.', read: ['Melancholia and Moralism (2002)'], units: ['ch5', 'ch7'], terms: ['melancholia', 'pleasure']
  });
  P('cvetkovich', 'Ann Cvetkovich', 'b. 1957', 'Queer and affect studies', ['Cvetkovich', 'Ann Cvetkovich'], {
    one: 'Author of *An Archive of Feelings* (2003) and *Depression: A Public Feeling* (2012).',
    gist: 'Cultural texts and ephemera as repositories of feeling; trauma and queer public cultures.',
    relation: 'Ahmed’s “archive” differs from hers (Intro); Cvetkovich is also an ally in the Afterword’s account of the affective turn.',
    tension: 'On whether feelings are “in” texts.',
    read: ['An Archive of Feelings (2003)', 'Depression: A Public Feeling (2012)'], units: ['intro', 'ch7', 'afterword'], terms: ['archive', 'affective-turn']
  });
  P('damasio', 'Antonio Damasio', 'b. 1944', 'Neuroscience', ['Damasio', 'Antonio Damasio'], {
    one: 'Neuroscientist of emotion and feeling (*Descartes’ Error*, *The Feeling of What Happens*).',
    gist: 'Emotions (somatic markers) are essential to reasoning; emotion has survival functions.',
    relation: 'Ahmed critiques his treatment of suspicious faces as objective (Afterword).',
    tension: 'Function vs history; “right” affect.',
    read: ['Descartes’ Error (1994)'], units: ['afterword'], terms: ['affect']
  });
  P('darwin', 'Charles Darwin', '1809–1882', 'Natural history', ['Darwin', 'Charles Darwin'], {
    one: 'Evolutionary theorist; *The Expression of the Emotions in Man and Animals* (1872).',
    gist: 'Emotional expressions are survivals of animal habits; disgust, shame and blushing are universal.',
    relation: 'Ahmed reads his accounts as imperial encounters and the “primitive” as emotional (Intro, Ch. 4).',
    tension: 'Universalism vs history.', read: ['The Expression of the Emotions in Man and Animals (1872)'], units: ['intro', 'ch4', 'ch5'], terms: ['disgust', 'passion']
  });
  P('dean', 'Jodi Dean', 'b. 1962', 'Political theory', ['Jodi Dean'], {
    one: 'Theorist of “reflective solidarity” (*Solidarity of Strangers*, 1996).',
    gist: 'Solidarity grounded in openness to difference.',
    relation: 'Ahmed ends Chapter 6 with her.', tension: '—',
    read: ['Solidarity of Strangers (1996)'], units: ['ch6'], terms: ['solidarity']
  });
  P('deleuze', 'Gilles Deleuze', '1925–1995', 'Philosophy', ['Deleuze', 'Gilles Deleuze'], {
    one: 'French philosopher whose reading of Spinoza underlies affect theory.',
    gist: 'Bodies are defined by capacities to affect and be affected.',
    relation: 'Ahmed uses him for “you don’t know what a body can do” (Ch. 8) but resists affect-as-separate-order (Afterword).',
    tension: 'Encounter as starting point (note 25).', read: ['Spinoza: Practical Philosophy (1970/88)'], units: ['ch8', 'afterword'], terms: ['affect']
  });
  P('derrida', 'Jacques Derrida', '1930–2004', 'Philosophy', ['Derrida', 'Jacques Derrida'], {
    one: 'Founder of deconstruction; theorist of iterability and the structure of the sign.',
    gist: 'Signs can be repeated in new contexts; meaning is differential.',
    relation: 'Ahmed adds stickiness to iterability (Ch. 4).', tension: '—',
    read: ['Signature Event Context (1972)'], units: ['ch2', 'ch4'], terms: ['performativity']
  });
  P('descartes', 'René Descartes', '1596–1650', 'Philosophy', ['Descartes', 'René Descartes'], {
    one: 'Author of *The Passions of the Soul* (1649).',
    gist: 'Passions arise from how objects help or harm; wonder is the first passion.',
    relation: 'Source of Ahmed’s “contact” and of her account of wonder.',
    tension: 'Mind/body dualism.', read: ['The Passions of the Soul (1649)'], units: ['intro', 'ch8'], terms: ['contact', 'wonder']
  });
  P('dillon', 'Michael Dillon', 'b. 1950s', 'International relations', ['Michael Dillon'], {
    one: 'Theorist of security and its ontology (*The Politics of Security*, 1996).',
    gist: 'Security presupposes insecurity and an excluded other.',
    relation: 'Ahmed uses him for “the securing of the not” (Ch. 3).', tension: '—',
    read: ['The Politics of Security (1996)'], units: ['ch3'], terms: ['security']
  });
  P('diprose', 'Rosalyn Diprose', 'b. 1950s', 'Philosophy', ['Diprose', 'Rosalyn Diprose'], {
    one: 'Author of *Corporeal Generosity* (2002).',
    gist: 'Generosity as a bodily relation, with Nietzsche, Merleau-Ponty and Levinas.',
    relation: 'Ahmed cites her on forgetting gifts made by others and on proximity.', tension: '—',
    read: ['Corporeal Generosity (2002)'], units: ['ch1', 'ch7'], terms: ['compassion']
  });
  P('douglas', 'Mary Douglas', '1921–2007', 'Anthropology', ['Mary Douglas'], {
    one: 'Anthropologist of pollution and classification (*Purity and Danger*, 1966).',
    gist: 'Dirt is “matter out of place”.',
    relation: 'Ahmed uses it for disgust and “bodies out of place”.', tension: 'She notes that placement is itself made by disgust.',
    read: ['Purity and Danger (1966)'], units: ['intro', 'ch4'], terms: ['body-out-of-place', 'abjection']
  });
  P('durkheim', 'Émile Durkheim', '1858–1917', 'Sociology', ['Durkheim', 'Émile Durkheim'], {
    one: 'Founder of sociology; theorist of collective effervescence and social facts.',
    gist: 'Social forces come from outside and bind individuals through shared feeling.',
    relation: 'The canonical “outside in” model (Intro).', tension: 'She accepts the insight on binding, rejects the fixed inside/outside.',
    read: ['The Elementary Forms of Religious Life (1912)'], units: ['intro'], terms: ['inside-out-outside-in']
  });
  P('eng', 'David L. Eng', 'b. 1960s', 'Asian American / queer studies', ['David L. Eng', 'David Eng'], {
    one: 'Theorist of racial melancholia and queer kinship; co-editor of *Loss* (2003).',
    gist: 'Melancholia as an ethical refusal to let go; heteronormativity in public grief.',
    relation: 'Ahmed draws on him for the 9/11 grief analysis (Ch. 7).', tension: 'She proposes “impressions” instead.',
    read: ['Loss (2003, with Kazanjian)', 'The Feeling of Kinship (2010)'], units: ['ch7'], terms: ['melancholia']
  });
  P('fanon', 'Frantz Fanon', '1925–1961', 'Psychiatry / anticolonial theory', ['Fanon', 'Frantz Fanon'], {
    one: 'Anticolonial thinker; *Black Skin, White Masks* (1952) on the lived experience of the Black man.',
    gist: 'The Black body is sealed into objecthood by the white gaze; racial fear is lived on the skin.',
    relation: 'The opening of Chapter 3 and a recurrent resource (sealing, hailing); also in the Afterword.',
    tension: 'She keeps his phenomenology but resists treating his scene as universal.',
    read: ['Black Skin, White Masks (1952)'], units: ['intro', 'ch2', 'ch3', 'afterword'], terms: ['racialisation', 'stereotype']
  });
  P('fortier', 'Anne-Marie Fortier', 'b. 1960s', 'Sociology', ['Fortier', 'Anne-Marie Fortier'], {
    one: 'Scholar of multiculturalism, migration and heterosexuality (*Multicultural Horizons*, 2008).',
    gist: 'Multiculturalism reproduces the nation through heterosexual intimacy.',
    relation: 'Ahmed credits her for the new English rose analysis (Ch. 6).', tension: '—',
    read: ['Multicultural Horizons (2008)'], units: ['ch6', 'ch7'], terms: ['multiculturalism']
  });
  P('foucault', 'Michel Foucault', '1926–1984', 'Philosophy / history of ideas', ['Foucault', 'Michel Foucault'], {
    one: 'Theorist of discourse, power and genealogy.',
    gist: 'Genealogy records the history of what we tend to feel is without history.',
    relation: 'Ahmed cites his definition for a “history of the felt” (Afterword).', tension: '—',
    read: ['Nietzsche, Genealogy, History (1971)'], units: ['afterword'], terms: ['affective-economies']
  });
  P('freire', 'Paulo Freire', '1921–1997', 'Education', ['Freire', 'Paulo Freire'], {
    one: 'Brazilian educator; *Pedagogy of the Oppressed* (1970).',
    gist: 'Against the “banking” model of education.',
    relation: 'Ahmed applies the metaphor to emotions as outcomes (Ch. 8).', tension: '—',
    read: ['Pedagogy of the Oppressed (1970)'], units: ['ch8'], terms: ['wonder']
  });
  P('freud', 'Sigmund Freud', '1856–1939', 'Psychoanalysis', ['Freud', 'Sigmund Freud'], {
    one: 'Founder of psychoanalysis; theorist of the unconscious, displacement, identification, mourning.',
    gist: 'Emotions can be displaced from their original idea; the ego is a bodily surface; love and hate are ambivalent.',
    relation: 'A constant resource, treated critically (Ch. 1–3, 5–7).', tension: 'She refuses to return displacement to the subject’s psyche.',
    read: ['The Ego and the Id (1923)', 'Group Psychology (1921)', 'Mourning and Melancholia (1917)'], units: ['intro', 'ch1', 'ch2', 'ch3', 'ch5', 'ch6', 'ch7'], terms: ['displacement', 'psychoanalysis', 'melancholia']
  });
  P('frye', 'Marilyn Frye', 'b. 1941', 'Feminist philosophy', ['Frye', 'Marilyn Frye'], {
    one: 'Feminist philosopher; “A Note on Anger” (1983).',
    gist: 'Anger presupposes standing and requires uptake.',
    relation: 'Ahmed uses her for anger as a speech act (Ch. 8).', tension: '—',
    read: ['The Politics of Reality (1983)'], units: ['ch8'], terms: ['anger']
  });
  P('furedi', 'Frank Furedi', 'b. 1947', 'Sociology', ['Furedi', 'Frank Furedi'], {
    one: 'Author of *Culture of Fear* (1997).',
    gist: 'Risk-aversion saturates modern culture.',
    relation: 'Ahmed treats it as symptom-talk (Ch. 3).', tension: '—',
    read: ['Culture of Fear (1997)'], units: ['ch3'], terms: ['fear']
  });
  P('gaita', 'Raimond Gaita', 'b. 1946', 'Philosophy', ['Gaita', 'Raimond Gaita'], {
    one: 'Australian philosopher (*A Common Humanity*, 2000).',
    gist: 'Shame is necessary for acknowledging wrongs against Aboriginal Australians.',
    relation: 'Representative of national-shame arguments (Ch. 5).', tension: 'Ahmed asks what shame does.',
    read: ['A Common Humanity (2000)'], units: ['ch5'], terms: ['national-shame']
  });
  P('goodman', 'Robin Truth Goodman', 'b. 1960s', 'Cultural theory', ['Goodman'], {
    one: 'Author of an essay on the family and global politics (2001), quoted in Chapter 7.',
    gist: 'The defence of the family connects reproduction with global production.',
    relation: 'Ahmed’s epigraph for Chapter 7.', tension: '—', read: [], units: ['ch7'], terms: ['heteronormativity']
  });
  P('gopinath', 'Gayatri Gopinath', 'b. 1960s', 'Queer diaspora studies', ['Gopinath', 'Gayatri Gopinath'], {
    one: 'Theorist of queer diasporas (*Impossible Desires*, 2005).',
    gist: 'South Asian lesbians’ desires may be lived in private spaces rather than public queer visibility.',
    relation: 'Ahmed cites her to show queer ideals are not equally accessible (Ch. 7).', tension: '—',
    read: ['Impossible Desires (2005)'], units: ['ch7'], terms: ['queer']
  });
  P('grosz', 'Elizabeth Grosz', 'b. 1952', 'Feminist philosophy', ['Grosz', 'Elizabeth Grosz'], {
    one: 'Feminist philosopher of the body (*Volatile Bodies*, 1994).',
    gist: 'Pain and fluidity as socially organised; critique of Sartre’s slime.',
    relation: 'Ahmed uses her on pain and stickiness (Ch. 1, 4).', tension: '—',
    read: ['Volatile Bodies (1994)'], units: ['ch1', 'ch4'], terms: ['surfaces', 'sticky']
  });
  P('hage', 'Ghassan Hage', 'b. 1957', 'Anthropology', ['Hage', 'Ghassan Hage'], {
    one: 'Theorist of nationalism and hope (*White Nation*, 1998; *Against Paranoid Nationalism*, 2003).',
    gist: 'Hope is socially distributed; paranoid nationalism arises when hope is scarce.',
    relation: 'Ahmed engages his political economy of hope (Ch. 8).', tension: 'She resists making hope a prerequisite for generosity.',
    read: ['Against Paranoid Nationalism (2003)'], units: ['ch8'], terms: ['hope']
  });
  P('halberstam', 'Jack (Judith) Halberstam', 'b. 1961', 'Queer theory', ['Halberstam', 'Judith Halberstam'], {
    one: 'Queer theorist of failure, time and anti-normativity.',
    gist: 'Queer lives should refuse homonormative aspirations.',
    relation: 'Ahmed cites the ideal of queer life that avoids comfort (Ch. 7).', tension: 'She questions the “ideal” queer life.',
    read: ['The Queer Art of Failure (2011)'], units: ['ch7'], terms: ['queer']
  });
  P('hardt', 'Michael Hardt', 'b. 1960', 'Political theory', ['Hardt', 'Michael Hardt'], {
    one: 'Co-author of *Empire*; wrote the preface to Clough’s *The Affective Turn* (2007).',
    gist: 'Affect as a new synthesis beyond mind/body and reason/passion.',
    relation: 'Ahmed’s foil for the history of the affective turn (Afterword).', tension: 'Feminist work reduced to precursor.',
    read: ['Preface to The Affective Turn (2007)'], units: ['afterword'], terms: ['affective-turn']
  });
  P('hartman', 'Saidiya Hartman', 'b. 1961', 'Literary / Black studies', ['Hartman', 'Saidiya Hartman'], {
    one: 'Historian of slavery’s archive (*Scenes of Subjection*, 1997).',
    gist: 'Opacity of the archive; empathy risks re-centring the witness.',
    relation: 'Ahmed cites her on the opacity of texts (Afterword).', tension: '—',
    read: ['Scenes of Subjection (1997)'], units: ['afterword'], terms: ['testimony']
  });
  P('heidegger', 'Martin Heidegger', '1889–1976', 'Philosophy', ['Heidegger', 'Martin Heidegger'], {
    one: 'Phenomenologist of fear, anxiety and mood (*Being and Time*).',
    gist: 'Fear anticipates a threat that may pass by; anxiety is “nowhere”; moods attune us.',
    relation: 'Basis of the “passing by” argument (Ch. 3) and attunement (Afterword).', tension: 'She argues anxiety sticks to objects.',
    read: ['Being and Time (1927)'], units: ['ch3', 'afterword'], terms: ['fear', 'attunement']
  });
  P('hennessy', 'Rosemary Hennessy', 'b. 1950s', 'Cultural theory', ['Hennessy', 'Rosemary Hennessy'], {
    one: 'Marxist feminist critic of queer commodification (*Profit and Pleasure*, 2000).',
    gist: 'Gay visibility is bound to commodity forms.',
    relation: 'Ahmed uses her for the pink pound (Ch. 7).', tension: '—',
    read: ['Profit and Pleasure (2000)'], units: ['ch7'], terms: ['pleasure']
  });
  P('hobbes', 'Thomas Hobbes', '1588–1679', 'Political philosophy', ['Hobbes', 'Thomas Hobbes'], {
    one: 'Author of *Leviathan*; fear as foundation of government.',
    gist: 'Fear of violent death leads to the covenant creating sovereignty.',
    relation: 'Ahmed contrasts fear as tool with fear as producer of the collective (Ch. 3).', tension: '—',
    read: ['Leviathan (1651)'], units: ['ch3'], terms: ['fear']
  });
  P('hochschild', 'Arlie Russell Hochschild', 'b. 1940', 'Sociology', ['Hochschild', 'Arlie Hochschild', 'Arlie Russell Hochschild'], {
    one: 'Sociologist of emotional labour (*The Managed Heart*, 1983).',
    gist: 'Workers manage feelings to produce displays; “feeling rules”.',
    relation: 'Ahmed uses her for the economy of gratitude, feeling fetishism and the bride (Ch. 6–7, Afterword).', tension: '—',
    read: ['The Managed Heart (1983)'], units: ['intro', 'ch6', 'ch7', 'conclusion', 'afterword'], terms: ['emotional-labour']
  });
  P('hooks', 'bell hooks', '1952–2021', 'Black feminist theory', ['bell hooks', 'hooks'], {
    one: 'Black feminist writer and cultural critic (*Talking Back*, *Feminist Theory: From Margin to Center*).',
    gist: 'Remember the past to “break its hold”; feminism needs collective critical consciousness.',
    relation: 'A key voice on pain (Ch. 1, 8) and on the atmosphere when a woman of colour enters a room (Afterword).', tension: '—',
    read: ['Talking Back (1989)', 'Feminist Theory: From Margin to Center (1984)'], units: ['ch1', 'ch8', 'afterword'], terms: ['wounded-attachments', 'comfort']
  });
  P('hume', 'David Hume', '1711–1776', 'Philosophy', ['Hume', 'David Hume'], {
    one: 'Empiricist philosopher; “impressions” in the *Treatise*.',
    gist: 'Passions are impressions; sympathy transmits feeling.',
    relation: 'Source of the “impression” pun (Intro).', tension: 'Hybrid models of passion (Afterword note 10).',
    read: ['A Treatise of Human Nature (1739–40)'], units: ['intro'], terms: ['impression']
  });
  P('irigaray', 'Luce Irigaray', 'b. 1930', 'Feminist philosophy', ['Irigaray', 'Luce Irigaray'], {
    one: 'French feminist philosopher of sexual difference.',
    gist: 'Wonder keeps sexual difference open.',
    relation: 'Ahmed borrows “wonder as the motivating force behind mobility” (Ch. 8).', tension: '—',
    read: ['An Ethics of Sexual Difference (1984)'], units: ['ch8'], terms: ['wonder']
  });
  P('jaggar', 'Alison M. Jaggar', 'b. 1942', 'Feminist philosophy', ['Jaggar', 'Alison Jaggar', 'Alison M. Jaggar'], {
    one: 'Feminist philosopher of emotion and epistemology.',
    gist: '“Love and Knowledge” (1996) argues emotions are essential to knowing.',
    relation: 'One of Ahmed’s feminist routes into philosophy of emotion (Intro, Afterword).', tension: '—',
    read: ['Love and Knowledge (1996)'], units: ['intro', 'afterword'], terms: ['dumb-view']
  });
  P('james', 'William James', '1842–1910', 'Psychology / philosophy', ['William James'], {
    one: 'Author of “What Is an Emotion?” (1884).',
    gist: 'Emotion is the feeling of bodily change.',
    relation: 'The “sensation” pole; his bear example is reworked by Ahmed (Intro).', tension: '—',
    read: ['What Is an Emotion? (1884)'], units: ['intro'], terms: ['dumb-view']
  });
  P('johnstone', 'Gerry Johnstone', 'b. 1950s', 'Criminology', ['Johnstone', 'Gerry Johnstone'], {
    one: 'Restorative justice theorist.',
    gist: 'Crime as violation of a person by a person.',
    relation: 'Ahmed’s example of personalised justice (Conclusion).', tension: '—',
    read: ['Restorative Justice (2002)'], units: ['conclusion'], terms: ['restorative-justice']
  });
  P('kant', 'Immanuel Kant', '1724–1804', 'Philosophy', ['Kant', 'Immanuel Kant'], {
    one: 'Philosopher of universal moral law.',
    gist: 'Morality rests on reason, not feeling.',
    relation: 'Ahmed critiques the Kantian detachment of justice from emotion (Conclusion).', tension: '—',
    read: ['Groundwork of the Metaphysics of Morals (1785)'], units: ['conclusion'], terms: ['justice']
  });
  P('klein', 'Melanie Klein', '1882–1960', 'Psychoanalysis', ['Melanie Klein', 'Klein'], {
    one: 'Psychoanalyst of object relations and projective identification.',
    gist: 'Love and hate are intertwined in early object relations.',
    relation: 'Ahmed notes projective identification (Ch. 2).', tension: 'She questions inside-to-outside models.',
    read: ['Envy and Gratitude (1957)'], units: ['ch2', 'ch6'], terms: ['projection']
  });
  P('kristeva', 'Julia Kristeva', 'b. 1941', 'Psychoanalysis / literary theory', ['Kristeva', 'Julia Kristeva'], {
    one: 'Theorist of abjection (*Powers of Horror*) and of love (*Tales of Love*).',
    gist: 'The abject is what the subject expels; the lover is a narcissist with an object.',
    relation: 'Frame for Chapter 4 and for her essay on the Muslim scarf (Ch. 6).', tension: 'Ahmed’s critique of French universalism.',
    read: ['Powers of Horror (1980)', 'Nations without Nationalism (1993)'], units: ['ch4', 'ch6'], terms: ['abjection']
  });
  P('lacan', 'Jacques Lacan', '1901–1981', 'Psychoanalysis', ['Lacan', 'Jacques Lacan'], {
    one: 'French psychoanalyst of the subject, the signifier and desire.',
    gist: 'The unconscious is structured like a language; the subject is constituted by lack.',
    relation: 'Ahmed refuses his return to “the subject” (Ch. 2), uses his reading of courtly love (Ch. 6).', tension: 'Subject-centred economy.',
    read: ['Écrits (1966)'], units: ['ch2', 'ch4', 'ch6'], terms: ['metonymy']
  });
  P('laing', 'R. D. Laing', '1927–1989', 'Psychiatry', ['R. D. Laing', 'Laing'], {
    one: 'Psychiatrist of ontological insecurity (*The Divided Self*, 1960).',
    gist: 'Insecure selves are concerned with preservation rather than gratification.',
    relation: 'Ahmed extends it to nations (Ch. 3).', tension: '—',
    read: ['The Divided Self (1960)'], units: ['ch3'], terms: ['fear']
  });
  P('leder', 'Drew Leder', 'b. 1954', 'Philosophy / phenomenology of the body', ['Leder', 'Drew Leder'], {
    one: 'Author of *The Absent Body* (1990).',
    gist: 'The body disappears in ordinary functioning and returns in pain; pleasure opens it.',
    relation: 'Ahmed qualifies his presence/absence with intensification (Ch. 1) and uses his account of pleasure (Ch. 7).', tension: '—',
    read: ['The Absent Body (1990)'], units: ['ch1', 'ch7'], terms: ['pain', 'pleasure']
  });
  P('levinas', 'Emmanuel Levinas', '1906–1995', 'Philosophy', ['Levinas', 'Emmanuel Levinas'], {
    one: 'Philosopher of ethics as responsibility to the Other.',
    gist: 'The Other’s face makes an infinite demand that exceeds knowledge.',
    relation: 'Echoed in Ahmed’s ethics of not-knowing (Ch. 1) and love’s return (Ch. 6).', tension: '—',
    read: ['Totality and Infinity (1961)'], units: ['ch1', 'ch6'], terms: ['ethics-of-not-knowing']
  });
  P('leys', 'Ruth Leys', 'b. 1939', 'Intellectual history', ['Leys', 'Ruth Leys'], {
    one: 'Critic of the “turn to affect” (2011; *The Ascent of Affect*, 2017).',
    gist: 'Affect theory shares Tomkins–Ekman assumptions: pre-cognitive, non-intentional affects.',
    relation: 'An ally in the Afterword’s critique of affect/emotion splitting.', tension: '—',
    read: ['The Turn to Affect: A Critique (2011)'], units: ['afterword'], terms: ['affect']
  });
  P('little', 'Graham Little', '1940–2008', 'Political psychology', ['Graham Little'], {
    one: 'Author on public emotions (*The Public Emotions*, 1999).',
    gist: 'Emotions can start “out there” and draw us in; analysis of Diana’s death.',
    relation: 'An “outside in” example (Intro).', tension: '—',
    read: ['The Public Emotions (1999)'], units: ['intro'], terms: ['inside-out-outside-in']
  });
  P('lorde', 'Audre Lorde', '1934–1992', 'Black feminist poet / theorist', ['Lorde', 'Audre Lorde', 'Audre'], {
    one: 'Black lesbian feminist poet and essayist (*Sister Outsider*, 1984).',
    gist: 'Anger is loaded with information and energy; the erotic is power; the master’s tools…',
    relation: 'Her subway story (Ch. 2) and “Uses of Anger” (Ch. 8) are central.', tension: '—',
    read: ['Sister Outsider (1984)'], units: ['ch2', 'ch4', 'ch8'], terms: ['anger', 'hate']
  });
  P('machiavelli', 'Niccolò Machiavelli', '1469–1527', 'Political theory', ['Machiavelli', 'Niccolò Machiavelli'], {
    one: 'Author of *The Prince*.',
    gist: 'It is safer to be feared than loved.',
    relation: 'Ahmed’s example of fear as instrument (Ch. 3).', tension: '—',
    read: ['The Prince (1532)'], units: ['ch3'], terms: ['fear']
  });
  P('marx', 'Karl Marx', '1818–1883', 'Political economy', ['Marx', 'Karl Marx'], {
    one: 'Theorist of capital, circulation and fetishism.',
    gist: 'Value arises in circulation; commodity fetishism hides labour.',
    relation: 'Provides the model for affective economies and fetishism; and for wonder as denaturalisation (Ch. 8).', tension: 'She notes the analogy’s limits.',
    read: ['Capital, vol. 1 (1867)', 'The German Ideology (1846)'], units: ['intro', 'ch2', 'ch8'], terms: ['affective-economies', 'fetishism']
  });
  P('massumi', 'Brian Massumi', 'b. 1956', 'Philosophy / cultural theory', ['Massumi', 'Brian Massumi'], {
    one: 'Translator of Deleuze; theorist of affect as autonomous intensity (*Parables for the Virtual*, 2002).',
    gist: 'Affect is pre-personal, non-intentional; emotion is its capture.',
    relation: 'The main foil for Ahmed’s emotion/affect argument (Ch. 1 note 4, Afterword); also a source on fear (Ch. 3).', tension: 'Sensation vs emotion.',
    read: ['Parables for the Virtual (2002)', 'The Politics of Everyday Fear (1993)'], units: ['ch1', 'ch3', 'afterword'], terms: ['affect']
  });
  P('matsuda', 'Mari J. Matsuda', 'b. 1956', 'Critical race / legal theory', ['Matsuda', 'Mari Matsuda', 'Mari J. Matsuda'], {
    one: 'Critical race theorist; *Words That Wound* (1993).',
    gist: 'Hate speech inflicts physical and emotional harm.',
    relation: 'Ahmed keeps the victim’s affect in view against Butler’s indeterminacy (Ch. 2).', tension: '—',
    read: ['Words That Wound (1993)'], units: ['ch2'], terms: ['hate-crime']
  });
  P('mcclintock', 'Anne McClintock', 'b. 1954', 'Postcolonial theory', ['McClintock', 'Anne McClintock'], {
    one: 'Author of *Imperial Leather* (1995).',
    gist: 'Race, gender and class interlock in imperial commodity culture.',
    relation: 'Ahmed uses her on women as faces of the nation and commodity fetishism.', tension: '—',
    read: ['Imperial Leather (1995)'], units: ['ch6', 'ch7'], terms: ['nation']
  });
  P('miller', 'William Ian Miller', 'b. 1946', 'Law / history', ['William Ian Miller', 'W. I. Miller'], {
    one: 'Author of *The Anatomy of Disgust* (1997).',
    gist: 'Disgust is intentional, ambivalent, hierarchical and contaminating by contact.',
    relation: 'Ahmed builds on and historicises him (Ch. 4).', tension: 'Stability of disgust’s objects.',
    read: ['The Anatomy of Disgust (1997)'], units: ['ch4'], terms: ['disgust']
  });
  P('minow', 'Martha Minow', 'b. 1954', 'Law', ['Minow', 'Martha Minow'], {
    one: 'Legal scholar of reconciliation (*Between Vengeance and Forgiveness*, 1998).',
    gist: 'Narrating trauma needs emotional and bodily detail; politics should leave room for therapy.',
    relation: 'Ahmed engages her on healing (Conclusion).', tension: 'Individual vs collective healing.',
    read: ['Between Vengeance and Forgiveness (1998)'], units: ['conclusion'], terms: ['healing']
  });
  P('mohanty', 'Chandra Talpade Mohanty', 'b. 1955', 'Feminist theory', ['Mohanty', 'Chandra Talpade Mohanty'], {
    one: 'Transnational feminist theorist (*Feminism without Borders*, 2003).',
    gist: 'Solidarity across difference grounded in common context of struggle.',
    relation: 'Ahmed ends Chapter 8 with her term (transnational solidarity).', tension: '—',
    read: ['Feminism without Borders (2003)'], units: ['ch8'], terms: ['solidarity']
  });
  P('nietzsche', 'Friedrich Nietzsche', '1844–1900', 'Philosophy', ['Nietzsche', 'Friedrich Nietzsche'], {
    one: 'Philosopher of ressentiment and genealogy.',
    gist: 'Reactive politics is driven by revenge.',
    relation: 'Via Brown; Ahmed questions the action/reaction distinction.', tension: 'Pure action.',
    read: ['On the Genealogy of Morals (1887)'], units: ['ch1', 'ch8'], terms: ['wounded-attachments']
  });
  P('nussbaum', 'Martha C. Nussbaum', 'b. 1947', 'Philosophy', ['Nussbaum', 'Martha Nussbaum'], {
    one: 'Philosopher of emotions and justice (*Upheavals of Thought*, 2001).',
    gist: 'Emotions are judgements of value; disgust and shame can mislead.',
    relation: 'Ahmed cites her cognitivism (Intro) and her attack on Butler (Ch. 8).', tension: '—',
    read: ['Upheavals of Thought (2001)', 'Political Emotions (2013)'], units: ['intro', 'ch8', 'conclusion'], terms: ['cognitivism']
  });
  P('oliver', 'Kelly Oliver', 'b. 1958', 'Philosophy', ['Kelly Oliver'], {
    one: 'Philosopher of witnessing and love (*Witnessing: Beyond Recognition*, 2001).',
    gist: 'A politics of love grounded in witnessing the other’s subjectivity.',
    relation: 'Ahmed questions speaking “in the name of love” (Ch. 6).', tension: '—',
    read: ['Witnessing: Beyond Recognition (2001)'], units: ['ch6'], terms: ['love']
  });
  P('orbach', 'Susie Orbach', 'b. 1946', 'Psychotherapy', ['Orbach', 'Susie Orbach'], {
    one: 'Psychotherapist and author.',
    gist: 'Therapy is staying with bad feeling.',
    relation: 'Ahmed’s Conclusion uses her against converting bad feeling.', tension: '—',
    read: ['Towards Emotional Literacy (1999)'], units: ['conclusion'], terms: ['healing']
  });
  P('parekh', 'Bhikhu Parekh', 'b. 1935', 'Political theory', ['Parekh', 'Bhikhu Parekh'], {
    one: 'Theorist of multiculturalism; chair of the 2000 Parekh Report.',
    gist: 'A multicultural society needs a political sense of belonging.',
    relation: 'Ahmed reads his passage on “intense love” (Ch. 6).', tension: '—',
    read: ['Rethinking Multiculturalism (2000)'], units: ['ch6'], terms: ['multiculturalism']
  });
  P('potamianou', 'Anna Potamianou', '', 'Psychoanalysis', ['Potamianou', 'Anna Potamianou'], {
    one: 'Psychoanalyst; *Hope: A Shield in the Economy of Borderline States* (1997).',
    gist: 'Hope can be a fixation that preserves a lost object.',
    relation: 'Ahmed’s warning about hope (Ch. 8).', tension: '—',
    read: ['Hope (1997)'], units: ['ch8'], terms: ['hope']
  });
  P('pratt', 'Mary Louise Pratt', 'b. 1948', 'Comparative literature', ['Pratt', 'Mary Louise Pratt'], {
    one: 'Coined “contact zone” (*Imperial Eyes*, 1992).',
    gist: 'Social spaces of unequal cultural encounter.',
    relation: 'Ahmed’s archive and disgust as contact zones (Intro, Ch. 4).', tension: '—',
    read: ['Imperial Eyes (1992)'], units: ['intro', 'ch4'], terms: ['archive']
  });
  P('probyn', 'Elspeth Probyn', 'b. 1958', 'Cultural studies', ['Probyn', 'Elspeth Probyn'], {
    one: 'Author of *Carnal Appetites* (2000) and *Blush* (2005).',
    gist: 'Shame and disgust as public acts calling for witnesses.',
    relation: 'Ahmed’s community of witnesses (Ch. 4) and pedagogy (Ch. 8).', tension: '—',
    read: ['Carnal Appetites (2000)'], units: ['ch4', 'ch8'], terms: ['witness']
  });
  P('reddy', 'William M. Reddy', 'b. 1950', 'History', ['Reddy', 'William Reddy'], {
    one: 'Historian of emotions (*The Navigation of Feeling*, 2001).',
    gist: '“Emotives” are speech acts that change feeling.',
    relation: 'Ahmed’s note on emotions as performatives (Ch. 5).', tension: '—',
    read: ['The Navigation of Feeling (2001)'], units: ['ch5'], terms: ['speech-act']
  });
  P('rich', 'Adrienne Rich', '1929–2012', 'Poet / feminist theorist', ['Adrienne Rich'], {
    one: 'Poet and essayist (“Compulsory Heterosexuality and Lesbian Existence”, 1980).',
    gist: 'Heterosexuality is a political institution.',
    relation: 'Source of Ahmed’s phrase (Ch. 7).', tension: '—',
    read: ['Compulsory Heterosexuality and Lesbian Existence (1980)'], units: ['ch7'], terms: ['compulsory-heterosexuality']
  });
  P('rosaldo', 'Michelle Rosaldo', '1944–1981', 'Anthropology', ['Rosaldo', 'Michelle Rosaldo'], {
    one: 'Anthropologist of emotion (“Toward an Anthropology of Self and Feeling”, 1984).',
    gist: 'Emotions are embodied thoughts.',
    relation: 'Ahmed’s phrase for emotion in feminism (Ch. 8).', tension: '—',
    read: ['Knowledge and Passion (1980)'], units: ['intro', 'ch8'], terms: ['embodied-thought']
  });
  P('rozin', 'Paul Rozin', 'b. 1936', 'Psychology', ['Rozin', 'Paul Rozin'], {
    one: 'Psychologist of disgust and food.',
    gist: 'Disgust as revulsion at oral incorporation; laws of contagion and similarity.',
    relation: 'Ahmed uses and critiques his definition (Ch. 4).', tension: '—',
    read: ['A Perspective on Disgust (1987)'], units: ['ch4'], terms: ['disgust']
  });
  P('salecl', 'Renata Salecl', 'b. 1962', 'Philosophy / Lacanian theory', ['Salecl', 'Renata Salecl'], {
    one: 'Slovenian theorist of love, hate and ideology.',
    gist: 'The love object is placed in the ego ideal.',
    relation: 'Ahmed uses her for idealisation and multicultural identification (Ch. 6).', tension: '—',
    read: ['(Per)versions of Love and Hate (1998)'], units: ['ch6'], terms: ['love', 'ideal']
  });
  P('sartre', 'Jean-Paul Sartre', '1905–1980', 'Existentialism', ['Sartre', 'Jean-Paul Sartre'], {
    one: 'Existentialist philosopher of emotions, shame and slime.',
    gist: 'Emotion is a magical transformation of the world; shame reveals the Other’s look; pain is a contingent attachment.',
    relation: 'Used in Chapters 1, 4, 5.', tension: 'Individualist phenomenology.',
    read: ['Sketch for a Theory of the Emotions (1939)', 'Being and Nothingness (1943)'], units: ['intro', 'ch1', 'ch4', 'ch5'], terms: ['contingency', 'shame']
  });
  P('scarry', 'Elaine Scarry', 'b. 1946', 'Literary theory', ['Scarry', 'Elaine Scarry'], {
    one: 'Author of *The Body in Pain* (1985).',
    gist: 'Pain shatters language; torture exploits this.',
    relation: 'A key interlocutor for Chapter 1.', tension: 'Unrepresentability vs over-representation.',
    read: ['The Body in Pain (1985)'], units: ['ch1'], terms: ['pain']
  });
  P('scheler', 'Max Scheler', '1874–1928', 'Phenomenology', ['Scheler', 'Max Scheler'], {
    one: 'Phenomenologist of sympathy (*The Nature of Sympathy*).',
    gist: 'Distinguishes community of feeling, fellow-feeling, infection, identification.',
    relation: 'Ahmed uses him against smooth transmission (Afterword).', tension: '—',
    read: ['The Nature of Sympathy (1913)'], units: ['afterword', 'ch1'], terms: ['attunement']
  });
  P('sedgwick', 'Eve Kosofsky Sedgwick', '1950–2009', 'Queer theory / literary studies', ['Sedgwick', 'Eve Sedgwick', 'Eve Kosofsky Sedgwick'], {
    one: 'Queer theorist of shame, performativity and Tomkins.',
    gist: 'Shame as the affect of queer performativity; reparative reading; the “strange” in Tomkins.',
    relation: 'An ally on shame (Ch. 5), apology as performative, and family (Ch. 7).', tension: 'On affect theory’s use of Tomkins.',
    read: ['Touching Feeling (2003)', 'Epistemology of the Closet (1990)'], units: ['intro', 'ch5', 'ch7', 'afterword'], terms: ['shame', 'performativity']
  });
  P('silverman', 'Kaja Silverman', 'b. 1947', 'Film theory', ['Kaja Silverman'], {
    one: 'Film theorist of idealisation and the gaze (*The Threshold of the Visible World*, 1996).',
    gist: 'Idealisation should be extended to the abjected.',
    relation: 'Ahmed is wary: it risks the politics of charity (Ch. 6).', tension: '—',
    read: ['The Threshold of the Visible World (1996)'], units: ['ch6'], terms: ['love']
  });
  P('solomon', 'Robert C. Solomon', '1942–2007', 'Philosophy', ['Solomon', 'Robert C. Solomon'], {
    one: 'Philosopher of emotions as judgements and of justice as virtue.',
    gist: 'Emotions are judgements; justice is a function of character.',
    relation: 'Ahmed’s foil in the Conclusion.', tension: '—',
    read: ['A Passion for Justice (1990)', 'The Passions (1976)'], units: ['intro', 'conclusion'], terms: ['justice']
  });
  P('sontag', 'Susan Sontag', '1933–2004', 'Essayist', ['Sontag', 'Susan Sontag'], {
    one: 'Essayist; wrote on photography, illness and suffering.',
    gist: 'Her 2001 *New Yorker* piece criticised the rhetoric after 9/11.',
    relation: 'Her case shows dissent met with disgust (Ch. 4).', tension: '—',
    read: ['Regarding the Pain of Others (2003)'], units: ['ch4'], terms: ['disgust']
  });
  P('spelman', 'Elizabeth V. Spelman', 'b. 1945', 'Feminist philosophy', ['Spelman', 'Elizabeth V. Spelman', 'Elizabeth Spelman'], {
    one: 'Feminist philosopher; “Anger and Insubordination”; *Fruits of Sorrow*.',
    gist: 'The “Dumb View” of emotions; compassion can reinforce subordination.',
    relation: 'A foundational feminist source for the Introduction, Ch. 1 and Ch. 5.', tension: '—',
    read: ['Fruits of Sorrow (1997)'], units: ['intro', 'ch1', 'ch5'], terms: ['dumb-view', 'compassion']
  });
  P('spinoza', 'Baruch Spinoza', '1632–1677', 'Philosophy', ['Spinoza', 'Baruch Spinoza'], {
    one: 'Philosopher of affects as modifications of the body’s power.',
    gist: 'Nothing is good or bad in itself; affects increase or diminish power.',
    relation: 'Source for “what emotions do” (Intro), capacities (Ch. 8), and affect theory.', tension: 'Ahmed does not make affect an autonomous order.',
    read: ['Ethics (1677)'], units: ['intro', 'ch8', 'afterword'], terms: ['affect']
  });
  P('spivak', 'Gayatri Chakravorty Spivak', 'b. 1942', 'Postcolonial theory', ['Spivak', 'Gayatri Spivak', 'Gayatri Chakravorty Spivak'], {
    one: 'Postcolonial theorist of subalternity and translation (“Can the Subaltern Speak?”).',
    gist: 'Speaking for the other can silence; some secrets cannot be translated.',
    relation: 'Ahmed uses her on investing in the other’s pain (Ch. 7) and on opacity (Afterword).', tension: '—',
    read: ['Can the Subaltern Speak? (1988)'], units: ['ch7', 'afterword'], terms: ['ethics-of-not-knowing']
  });
  P('stanko', 'Elizabeth Stanko', 'b. 1950s', 'Criminology', ['Stanko', 'Elizabeth Stanko'], {
    one: 'Feminist criminologist (*Everyday Violence*, 1990).',
    gist: 'Women’s fear is structural; safety advice restricts women.',
    relation: 'Ahmed’s source on gendered fear and mobility (Ch. 3).', tension: '—',
    read: ['Everyday Violence (1990)'], units: ['ch3'], terms: ['mobility']
  });
  P('sullivan', 'Andrew Sullivan', 'b. 1963', 'Political writer', ['Andrew Sullivan'], {
    one: 'Conservative gay writer (*Virtually Normal*, 1995).',
    gist: 'Gay couples should seek marriage and “normal” life.',
    relation: 'Ahmed’s example of assimilation (Ch. 7).', tension: '—',
    read: ['Virtually Normal (1995)'], units: ['ch7'], terms: ['heteronormativity']
  });
  P('terada', 'Rei Terada', 'b. 1960s', 'Literary theory', ['Terada', 'Rei Terada'], {
    one: 'Author of *Feeling in Theory* (2001).',
    gist: 'Poststructuralism contains a theory of emotion without a subject.',
    relation: 'Ahmed uses her against “championing affect” (Afterword).', tension: '—',
    read: ['Feeling in Theory (2001)'], units: ['intro', 'afterword'], terms: ['affect']
  });
  P('thobani', 'Sunera Thobani', 'b. 1960s', 'Feminist scholar', ['Thobani', 'Sunera Thobani'], {
    one: 'Canadian feminist scholar attacked after a 2001 speech against the “war on terror”.',
    gist: 'Her speech linked feminism, anti-racism and criticism of US foreign policy.',
    relation: 'Opening case of Chapter 8.', tension: '—',
    read: ['Closing Ranks (2003)'], units: ['ch8'], terms: ['anger']
  });
  P('tomkins', 'Silvan S. Tomkins', '1911–1991', 'Psychology', ['Tomkins', 'Silvan Tomkins', 'Silvan S. Tomkins'], {
    one: 'Psychologist of affect (*Affect, Imagery, Consciousness*).',
    gist: 'Nine innate affects, including shame; “affect scripts”.',
    relation: 'A resource on shame and disgust, and the model for contagion Ahmed resists (Intro, Ch. 4–5, Afterword).', tension: 'Innate vs learned affect.',
    read: ['Shame and Its Sisters (Sedgwick & Frank, 1995)'], units: ['intro', 'ch4', 'ch5', 'afterword'], terms: ['shame', 'contagion']
  });
  P('valentine', 'Gill Valentine', 'b. 1965', 'Human geography', ['Valentine', 'Gill Valentine'], {
    one: 'Geographer of sexuality and women’s fear (“The Geography of Women’s Fear”).',
    gist: 'Public space is made heterosexual through everyday displays.',
    relation: 'Ahmed on heterosexualised space (Ch. 7).', tension: '—',
    read: ['(Re)negotiating the “heterosexual street” (1996)'], units: ['ch7'], terms: ['comfort']
  });
  P('volpp', 'Leti Volpp', 'b. 1960s', 'Law', ['Volpp', 'Leti Volpp'], {
    one: 'Legal scholar of race and citizenship after 9/11.',
    gist: 'A new identity category groups “Middle Eastern, Arab, or Muslim” persons.',
    relation: 'Ahmed’s evidence for the “could-be terrorist” (Ch. 3).', tension: '—',
    read: ['The Citizen and the Terrorist (2002)'], units: ['ch3'], terms: ['racialisation']
  });
  P('warner', 'Michael Warner', 'b. 1958', 'Queer theory', ['Michael Warner'], {
    one: 'Queer theorist (*The Trouble with Normal*, 1999).',
    gist: 'Critique of homonarcissism and marriage politics; defends sexual autonomy.',
    relation: 'A source (and target) for Ahmed in Chapters 6–7.', tension: 'On “uncharted territory” and pleasure.',
    read: ['The Trouble with Normal (1999)'], units: ['ch6', 'ch7'], terms: ['heteronormativity']
  });
  P('weston', 'Kath Weston', 'b. 1958', 'Anthropology', ['Kath Weston'], {
    one: 'Anthropologist of chosen kinship (*Families We Choose*, 1991).',
    gist: 'Lesbian and gay kinship constructed without models.',
    relation: 'Ahmed’s example of the excitement of non-fit (Ch. 7).', tension: '—',
    read: ['Families We Choose (1991)'], units: ['ch7'], terms: ['queer']
  });
  P('wetherell', 'Margaret Wetherell', 'b. 1950s', 'Social psychology', ['Wetherell', 'Margaret Wetherell'], {
    one: 'Author of *Affect and Emotion* (2012); critic of Ahmed and of affect theory.',
    gist: 'Emotion as “affective practice”; Ahmed’s account is “disembodied”.',
    relation: 'Ahmed replies in the Afterword’s notes.', tension: 'Signs vs bodies; basic emotions.',
    read: ['Affect and Emotion (2012)'], units: ['afterword'], terms: ['affect']
  });
  P('wittgenstein', 'Ludwig Wittgenstein', '1889–1951', 'Philosophy', ['Wittgenstein', 'Ludwig Wittgenstein'], {
    one: 'Philosopher of language and the “private language” argument.',
    gist: 'The pain of others; the ordinary as what we do not experience.',
    relation: 'Ahmed asks his question about others’ pain (Ch. 1) and invokes the ordinary (Ch. 8).', tension: '—',
    read: ['Philosophical Investigations (1953)'], units: ['ch1', 'ch8'], terms: ['pain']
  });
  P('yancy', 'George Yancy', 'b. 1961', 'Philosophy', ['Yancy', 'George Yancy'], {
    one: 'Philosopher of race and the white gaze (“Walking While Black”).',
    gist: 'Reads Zimmerman’s call as an instance of the white gaze.',
    relation: 'Ahmed’s source for the Trayvon Martin case (Afterword).', tension: '—',
    read: ['Look, a White! (2012)'], units: ['afterword'], terms: ['stranger']
  });
  P('yuval-davis', 'Nira Yuval-Davis', 'b. 1943', 'Sociology', ['Yuval-Davis', 'Nira Yuval-Davis'], {
    one: 'Author of *Gender and Nation* (1997).',
    gist: 'Women are symbolic boundaries and reproducers of nations.',
    relation: 'Ahmed uses her on the woman as face of the nation (Ch. 6).', tension: '—',
    read: ['Gender and Nation (1997)'], units: ['ch6'], terms: ['nation']
  });
  P('zizek', 'Slavoj Žižek', 'b. 1949', 'Philosophy / cultural theory', ['Žižek', 'Slavoj Žižek'], {
    one: 'Lacanian-Marxist cultural theorist.',
    gist: 'The Other is imagined as stealing our enjoyment; society’s blockage is projected onto the Jew.',
    relation: 'Ahmed uses him on the obstacle (Ch. 6) and on enjoyment (Ch. 7).', tension: '—',
    read: ['The Sublime Object of Ideology (1989)'], units: ['ch6', 'ch7'], terms: ['fantasy']
  });

  CP.addPeople(list);

  /* A map of the conversation: Ahmed's neighbours, grouped by what they supply. */
  CP.lineage = {
    title: 'Who Ahmed draws on, and for what', w: 700,
    zones: [
      { x: 8, y: 36, w: 210, h: 420, label: 'Philosophy of emotion' }, { x: 226, y: 36, w: 210, h: 420, label: 'Psychoanalysis & Marx' },
      { x: 444, y: 36, w: 248, h: 420, label: 'Feminist · queer · race' }
    ],
    nodes: [
      { id: 'a', x: 113, y: 110, w: 190, label: 'Descartes · Hume · Spinoza', sub: 'contact, impressions, affect', kind: 'b' },
      { id: 'b', x: 113, y: 200, w: 190, label: 'Sartre · Heidegger', sub: 'aboutness, shame, mood, fear', kind: 'b' },
      { id: 'c', x: 113, y: 290, w: 190, label: 'Spelman · Jaggar · Solomon', sub: 'the “Dumb View”; cognitivism', kind: 'b' },
      { id: 'd', x: 113, y: 380, w: 190, label: 'Darwin · Durkheim · Hochschild', sub: 'inside-out / outside-in', kind: 'ghost' },
      { id: 'e', x: 331, y: 110, w: 190, label: 'Freud · Klein · Lacan', sub: 'displacement, ambivalence', kind: 'a' },
      { id: 'f', x: 331, y: 200, w: 190, label: 'Marx', sub: 'circulation, fetishism', kind: 'a' },
      { id: 'g', x: 331, y: 290, w: 190, label: 'Kristeva · Douglas', sub: 'abjection, dirt', kind: 'a' },
      { id: 'h', x: 331, y: 380, w: 190, label: 'Austin · Derrida', sub: 'speech acts, iterability', kind: 'a' },
      { id: 'i', x: 568, y: 110, w: 225, label: 'Butler · Berlant · Brown', sub: 'norms, attachment, wounds', kind: 'e' },
      { id: 'j', x: 568, y: 200, w: 225, label: 'Fanon · Lorde · hooks · Bhabha', sub: 'race, anger, stereotype', kind: 'e' },
      { id: 'k', x: 568, y: 290, w: 225, label: 'Sedgwick · Cvetkovich · Crimp', sub: 'shame, grief, queer public feeling', kind: 'e' },
      { id: 'l', x: 568, y: 380, w: 225, label: 'Massumi · Leys · Wetherell', sub: 'the affect/emotion debate', kind: 'c' }
    ],
    edges: [],
    caption: 'A rough sort, not a genealogy: most thinkers appear in several chapters. Click any name in the cards below for a full entry.'
  };
})();
