/* ============================================================
   PROPHETS DATA — 25 Prophets with Arabic verses & Hadith
   ============================================================ */

const PROPHETS = [
  {
    id: 1,
    name: "Adam",
    arabicName: "آدم",
    summary:
      "First human created by Allah. Taught the names of all things. Story of Iblis rejecting him.",
    arabicAyah:
      "وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ فَكُلَا مِنْهَا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ",
    ayahRef: "Surah Al-Baqarah (2:35)",
    ayahTranslation:
      "And We said, 'O Adam, dwell, you and your wife, in Paradise and eat therefrom in abundance from wherever you will. But do not approach this tree, lest you be among the wrongdoers.'",
    hadithArabic:
      "قَالَ رَسُولُ اللَّهِ ﷺ: احْتَجَّ آدَمُ وَمُوسَى، فَقَالَ مُوسَى: يَا آدَمُ، أَنْتَ أَبُونَا خَيَّبْتَنَا وَأَخْرَجْتَنَا مِنَ الْجَنَّةِ. فَقَالَ لَهُ آدَمُ: يَا مُوسَى، اصْطَفَاكَ اللَّهُ بِكَلَامِهِ وَخَطَّ لَكَ بِيَدِهِ، أَتَلُومُنِي عَلَى أَمْرٍ قَدَّرَ اللَّهُ عَلَىَّ قَبْلَ أَنْ يَخْلُقَنِي بِأَرْبَعِينَ سَنَةً؟",
    hadithRef: "Sahih Muslim 2652",
    hadithTranslation:
      "The Messenger of Allah ﷺ said: 'Adam and Moses argued. Moses said: O Adam, you are our father; you have disappointed us and caused us to be expelled from Paradise. Adam said: O Moses, Allah chose you by His speech and wrote for you with His hand; do you blame me for a matter which Allah had decreed for me forty years before He created me?'",
  },
  {
    id: 2,
    name: "Idris",
    arabicName: "إدريس",
    summary:
      "Raised to a high station by Allah. Known for his truthfulness and patience.",
    arabicAyah:
      "وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا ۝ وَرَفَعْنَاهُ مَكَانًا عَلِيًّا",
    ayahRef: "Surah Maryam (19:56-57)",
    ayahTranslation:
      "And mention in the Book, Idris. Indeed, he was a man of truth and a prophet. And We raised him to a high station.",
    hadithArabic: null,
    hadithRef:
      "Tafsir Ibn Kathir mentions his ascension; no specific authentic hadith with full Arabic text located.",
    hadithTranslation:
      "The Quran praises his truthfulness and high rank. Classical tafsir discusses his prophethood and ascension.",
  },
  {
    id: 3,
    name: "Nuh",
    arabicName: "نوح",
    summary:
      "Built an Ark to save believers from the flood. Called his people for 950 years.",
    arabicAyah:
      "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ",
    ayahRef: "Surah Al-Ankabut (29:14)",
    ayahTranslation:
      "And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty years, and the flood seized them while they were wrongdoers.",
    hadithArabic:
      "لَمَّا حَمَلَ نُوحٌ فِي السَّفِينَةِ مِنْ كُلِّ زَوْجَيْنِ اثْنَيْنِ قَالَ أَصْحَابُهُ: وَكَيْفَ تَطْمَئِنُّ الْمَوَاشِي وَمَعَهَا الأَسَدُ؟ قَالَ: فَأَوْحَى اللَّهُ إِلَيْهِ أَنْ اضْرِبْ بَيْنَ الْأَسَدِ وَالْمَوَاشِي بِالْعَصَا فَإِذَا هِيَ سَاكِنَةٌ",
    hadithRef: "Musnad Ahmad",
    hadithTranslation:
      "When Nuh loaded the ark with pairs of every kind, his companions asked: 'How can the livestock be at ease while the lion is among them?' Allah revealed to him: 'Strike between the lion and the livestock with a staff.' Then they became calm.",
  },
  {
    id: 4,
    name: "Hud",
    arabicName: "هود",
    summary:
      "Warned the mighty 'Ad people against arrogance; they were destroyed by a fierce wind.",
    arabicAyah:
      "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ أَفَلَا تَتَّقُونَ",
    ayahRef: "Surah Al-A'raf (7:65)",
    ayahTranslation:
      "And to the 'Ad [We sent] their brother Hud. He said, 'O my people, worship Allah; you have no deity other than Him. Then will you not fear Him?'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran narrates Hud's call and the destruction of 'Ad. Consult Tafsir Ibn Kathir for detailed commentary.",
  },
  {
    id: 5,
    name: "Salih",
    arabicName: "صالح",
    summary:
      "Sent to Thamud with the miracle of the she-camel; the people hamstrung it and were destroyed.",
    arabicAyah:
      "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا فَاسْتَغْفِرُوهُ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
    ayahRef: "Surah Hud (11:61)",
    ayahTranslation:
      "And to Thamud [We sent] their brother Salih. He said, 'O my people, worship Allah; you have no deity other than Him...'",
    hadithArabic:
      "لَا تَدْخُلُوا عَلَى هَؤُلَاءِ الْمُعَذَّبِينَ إِلَّا أَنْ تَكُونُوا بَاكِينَ، فَإِنْ لَمْ تَكُونُوا بَاكِينَ فَلَا تَدْخُلُوا عَلَيْهِمْ، فَيُصِيبَكُمْ مِثْلُ مَا أَصَابَهُمْ",
    hadithRef: "Sahih al-Bukhari 3380",
    hadithTranslation:
      "The Prophet ﷺ said about the ruins of Thamud: 'Do not enter upon these punished people unless you are weeping, lest what happened to them befall you.'",
  },
  {
    id: 6,
    name: "Ibrahim",
    arabicName: "إبراهيم",
    summary:
      "Friend of Allah, destroyed idols, tested with his son Ismail, rebuilt the Kaaba.",
    arabicAyah:
      "فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ",
    ayahRef: "Surah As-Saffat (37:102)",
    ayahTranslation:
      "And when he reached with him the age of exertion, he said, 'O my son, indeed I have seen in a dream that I must sacrifice you, so see what you think.' He said, 'O my father, do as you are commanded...'",
    hadithArabic:
      "يَلْقَى إِبْرَاهِيمُ أَبَاهُ آزَرَ يَوْمَ الْقِيَامَةِ، فَيَقُولُ إِبْرَاهِيمُ: يَا رَبِّ، إِنَّكَ وَعَدْتَنِي أَنْ لَا تُخْزِيَنِي يَوْمَ يُبْعَثُونَ، فَيَقُولُ اللَّهُ: إِنِّي حَرَّمْتُ الْجَنَّةَ عَلَى الْكَافِرِينَ",
    hadithRef: "Sahih al-Bukhari 3350",
    hadithTranslation:
      "Ibrahim will meet his father Azar on the Day of Resurrection. Ibrahim will say: 'O my Lord, You promised me that You would not disgrace me on the Day when they are resurrected.' Allah will say: 'I have forbidden Paradise for the disbelievers.'",
  },
  {
    id: 7,
    name: "Lut",
    arabicName: "لوط",
    summary:
      "Warned his people against immorality; they were destroyed by a rain of stones.",
    arabicAyah:
      "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ",
    ayahRef: "Surah Al-A'raf (7:80)",
    ayahTranslation:
      "And [We had sent] Lot when he said to his people, 'Do you commit such immorality as no one has preceded you with from among the worlds?'",
    hadithArabic:
      "يَغْفِرُ اللَّهُ لِلُوطٍ، إِنْ كَانَ لَيَأْوِي إِلَى رُكْنٍ شَدِيدٍ",
    hadithRef: "Sahih al-Bukhari 3374",
    hadithTranslation:
      "The Prophet ﷺ said: 'May Allah forgive Lot. He used to seek refuge in a strong support [i.e., Allah].'",
  },
  {
    id: 8,
    name: "Ismail",
    arabicName: "إسماعيل",
    summary: "Son of Ibrahim, known for truthfulness; helped build the Kaaba.",
    arabicAyah:
      "وَاذْكُرْ فِي الْكِتَابِ إِسْمَاعِيلَ ۚ إِنَّهُ كَانَ صَادِقَ الْوَعْدِ وَكَانَ رَسُولًا نَّبِيًّا",
    ayahRef: "Surah Maryam (19:54)",
    ayahTranslation:
      "And mention in the Book, Ishmael. Indeed, he was true to his promise, and he was a messenger and a prophet.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results; his story is closely tied to Ibrahim's sacrifice.",
    hadithTranslation:
      "The Quran praises Ismail for his truthfulness and prophethood. See Surah As-Saffat (37:99-111).",
  },
  {
    id: 9,
    name: "Ishaq",
    arabicName: "إسحاق",
    summary:
      "Son of Ibrahim, given as a gift; blessed with prophethood and righteous descendants.",
    arabicAyah: "وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ",
    ayahRef: "Surah As-Saffat (37:112)",
    ayahTranslation:
      "And We gave him good tidings of Isaac, a prophet from among the righteous.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran mentions Ishaq as a righteous prophet and a blessing from Allah.",
  },
  {
    id: 10,
    name: "Yaqub",
    arabicName: "يعقوب",
    summary: "Father of Yusuf, known for his patience and trust in Allah.",
    arabicAyah:
      "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ ۚ كُلًّا هَدَيْنَا ۚ وَنُوحًا هَدَيْنَا مِن قَبْلُ ۖ وَمِن ذُرِّيَّتِهِ دَاوُودَ وَسُلَيْمَانَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَارُونَ ۚ وَكَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ",
    ayahRef: "Surah Al-An'am (6:84)",
    ayahTranslation:
      "And We gave to him Isaac and Jacob; each We guided. And Noah, We had guided before...",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "Yaqub's story is detailed in Surah Yusuf. The Prophet ﷺ said: 'The noble one, son of the noble one... Yusuf son of Yaqub son of Ishaq son of Ibrahim' (Sahih al-Bukhari 3387).",
  },
  {
    id: 11,
    name: "Yusuf",
    arabicName: "يوسف",
    summary:
      "Known for his beauty and patience; falsely accused, imprisoned, then became a high official in Egypt.",
    arabicAyah:
      "وَقَالَ الْمَلِكُ ائْتُونِي بِهِ ۖ فَلَمَّا جَاءَهُ الرَّسُولُ قَالَ ارْجِعْ إِلَىٰ رَبِّكَ فَاسْأَلْهُ مَا بَالُ النِّسْوَةِ اللَّاتِي قَطَّعْنَ أَيْدِيَهُنَّ ۚ إِنَّ رَبِّي بِكَيْدِهِنَّ عَلِيمٌ",
    ayahRef: "Surah Yusuf (12:50)",
    ayahTranslation:
      "And the king said, 'Bring him to me.' But when the messenger came to him, [Joseph] said, 'Return to your master and ask him what is the case of the women who cut their hands...'",
    hadithArabic:
      "لَوْ لَبِثْتُ فِي السِّجْنِ مَا لَبِثَ يُوسُفُ ثُمَّ أَتَانِي الدَّاعِي لَأَجَبْتُ",
    hadithRef: "Sahih al-Bukhari 3372",
    hadithTranslation:
      "The Prophet ﷺ said: 'If I had stayed in prison as long as Joseph did, and then the caller came to me, I would have responded.'",
  },
  {
    id: 12,
    name: "Ayyub",
    arabicName: "أيوب",
    summary:
      "Model of patience; tested with severe illness and loss of wealth but remained steadfast.",
    arabicAyah:
      "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    ayahRef: "Surah Al-Anbiya (21:83)",
    ayahTranslation:
      "And [mention] Job, when he called to his Lord, 'Indeed, adversity has touched me, and you are the Most Merciful of the merciful.'",
    hadithArabic:
      "بَيْنَمَا أَيُّوبُ يَغْتَسِلُ عُرْيَانًا خَرَّ عَلَيْهِ رَجُلٌ جَرَادٌ مِنْ ذَهَبٍ، فَجَعَلَ أَيُّوبُ يَحْتَثِي فِي ثَوْبِهِ، فَنَادَاهُ رَبُّهُ: يَا أَيُّوبُ، أَلَمْ أَكُنْ أَغْنَيْتُكَ عَمَّا تَرَى؟ قَالَ: بَلَى يَا رَبِّ، وَلَكِنْ لَا غِنَى لِي عَنْ بَرَكَتِكَ",
    hadithRef: "Sahih al-Bukhari 279",
    hadithTranslation:
      "While Job was bathing, a swarm of golden locusts fell upon him. His Lord called: 'O Job, have I not made you rich enough?' He said: 'Yes, but I cannot do without Your blessing.'",
  },
  {
    id: 13,
    name: "Shu'aib",
    arabicName: "شعيب",
    summary: "Sent to Madyan, warned against fraud and cheating in trade.",
    arabicAyah:
      "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ ۚ إِنِّي أَرَاكُم بِخَيْرٍ وَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ مُّحِيطٍ",
    ayahRef: "Surah Hud (11:84)",
    ayahTranslation:
      "And to Madyan [We sent] their brother Shu'ayb. He said, 'O my people, worship Allah... And do not decrease from the measure and the scale...'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran details his call to justice in trade. See Tafsir Ibn Kathir for detailed commentary.",
  },
  {
    id: 14,
    name: "Musa",
    arabicName: "موسى",
    summary:
      "Spoke to Allah, confronted Pharaoh, split the sea, received the Torah.",
    arabicAyah:
      "فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِب بِّعَصَاكَ الْبَحْرَ ۖ فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ",
    ayahRef: "Surah Ash-Shu'ara (26:63)",
    ayahTranslation:
      "Then We inspired to Moses, 'Strike with your staff the sea,' and it parted, and each portion was like a great towering mountain.",
    hadithArabic:
      "إِنَّ مُوسَى كَانَ رَجُلًا حَيِيًّا سَتِيرًا، لَا يَرَى مِنْ جِلْدِهِ شَيْئًا اسْتِحْيَاءً مِنْهُ، فَآذَاهُ مَنْ آذَاهُ مِنْ بَنِي إِسْرَائِيلَ، فَقَالُوا: مَا يَتَسَتَّرُ هَذَا التَّسَتُّرَ إِلَّا مِنْ عَيْبٍ بِجِلْدِهِ",
    hadithRef: "Sahih al-Bukhari 3404",
    hadithTranslation:
      "The Prophet ﷺ said: 'Moses was a shy and modest man... Those who harmed him from the Children of Israel said: He does not cover himself like this except because of a defect in his skin.'",
  },
  {
    id: 15,
    name: "Harun",
    arabicName: "هارون",
    summary:
      "Brother of Musa, eloquent speaker; supported him in his mission to Pharaoh.",
    arabicAyah: "وَوَهَبْنَا لَهُ مِن رَّحْمَتِنَا أَخَاهُ هَارُونَ نَبِيًّا",
    ayahRef: "Surah Maryam (19:53)",
    ayahTranslation:
      "And We gave him out of Our mercy his brother Aaron as a prophet.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "Harun is mentioned alongside Musa in many verses. See Tafsir Ibn Kathir.",
  },
  {
    id: 16,
    name: "Dhul-Kifl",
    arabicName: "ذو الكفل",
    summary: "Mentioned as one of the patient and righteous servants of Allah.",
    arabicAyah:
      "وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ",
    ayahRef: "Surah Al-Anbiya (21:85)",
    ayahTranslation:
      "And [mention] Ishmael, Idris, and Dhul-Kifl; all were of the patient.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation: "The Quran describes him as patient and righteous.",
  },
  {
    id: 17,
    name: "Dawud",
    arabicName: "داود",
    summary: "King and prophet, slew Goliath, given the Zabur (Psalms).",
    arabicAyah:
      "وَقَتَلَ دَاوُودُ جَالُوتَ وَآتَاهُ اللَّهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهُ مِمَّا يَشَاءُ ۗ وَلَوْلَا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُم بِبَعْضٍ لَّفَسَدَتِ الْأَرْضُ وَلَٰكِنَّ اللَّهَ ذُو فَضْلٍ عَلَى الْعَالَمِينَ",
    ayahRef: "Surah Al-Baqarah (2:251)",
    ayahTranslation:
      "And David killed Goliath, and Allah gave him the kingdom and wisdom and taught him of what He willed...",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran mentions Dawud's kingdom, wisdom, and the Zabur. The Prophet ﷺ said: 'The most beloved fasting to Allah is the fasting of David' (Sahih al-Bukhari 1131).",
  },
  {
    id: 18,
    name: "Sulayman",
    arabicName: "سليمان",
    summary:
      "King with control over jinn and wind; understood the language of birds and ants.",
    arabicAyah:
      "وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ ۖ وَأُوتِينَا مِن كُلِّ شَيْءٍ ۖ إِنَّ هَٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ",
    ayahRef: "Surah An-Naml (27:16)",
    ayahTranslation:
      "And Solomon inherited David. He said, 'O people, we have been taught the language of birds, and we have been given from all things...'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran details his miracles and kingdom. See Surah An-Naml and Surah Saba.",
  },
  {
    id: 19,
    name: "Ilyas",
    arabicName: "إلياس",
    summary: "Called his people to abandon the worship of the idol Baal.",
    arabicAyah:
      "وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ ۝ إِذْ قَالَ لِقَوْمِهِ أَلَا تَتَّقُونَ",
    ayahRef: "Surah As-Saffat (37:123-124)",
    ayahTranslation:
      "And indeed, Elias was from among the messengers, when he said to his people, 'Will you not fear Allah?'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation: "The Quran narrates his call to abandon Baal.",
  },
  {
    id: 20,
    name: "Alyasa",
    arabicName: "اليسع",
    summary: "Mentioned twice in the Quran as a chosen and righteous prophet.",
    arabicAyah:
      "وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا ۚ وَكُلًّا فَضَّلْنَا عَلَى الْعَالَمِينَ",
    ayahRef: "Surah Al-An'am (6:86)",
    ayahTranslation:
      "And [mention] Ishmael and Elisha and Jonah and Lot. And all of them We preferred over the worlds.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation: "The Quran mentions him among the chosen prophets.",
  },
  {
    id: 21,
    name: "Yunus",
    arabicName: "يونس",
    summary:
      "Swallowed by the whale; saved by his supplication. Known as Dhul-Nun.",
    arabicAyah:
      "وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    ayahRef: "Surah Al-Anbiya (21:87)",
    ayahTranslation:
      "And [mention] the man of the fish, when he went off in anger... And he called out within the darknesses, 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.'",
    hadithArabic:
      "دَعْوَةُ ذِي النُّونِ إِذْ دَعَا وَهُوَ فِي بَطْنِ الْحُوتِ: لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ، فَإِنَّهُ لَمْ يَدْعُ بِهَا رَجُلٌ مُسْلِمٌ فِي شَيْءٍ قَطُّ إِلَّا اسْتَجَابَ اللَّهُ لَهُ",
    hadithRef: "Sunan al-Tirmidhi 3505",
    hadithTranslation:
      "The Prophet ﷺ said: 'The supplication of Dhul-Nun... no Muslim ever supplicates with it for anything except that Allah answers him.'",
  },
  {
    id: 22,
    name: "Zakariya",
    arabicName: "زكريا",
    summary:
      "Prayed for a righteous heir; given Yahya in old age as a sign of Allah's power.",
    arabicAyah:
      "إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا ۝ قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا",
    ayahRef: "Surah Maryam (19:3-4)",
    ayahTranslation:
      "When he called to his Lord a private call. He said, 'My Lord, indeed my bones have weakened, and my head has filled with white...'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran details his beautiful supplication in Surah Maryam.",
  },
  {
    id: 23,
    name: "Yahya",
    arabicName: "يحيى",
    summary:
      "Son of Zakariya; given the Scripture and wisdom while still a boy.",
    arabicAyah:
      "يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ ۖ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا",
    ayahRef: "Surah Maryam (19:12)",
    ayahTranslation:
      "[It was said], 'O John, take the Scripture with determination.' And We gave him judgment while yet a boy.",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran praises his purity and righteousness in Surah Maryam.",
  },
  {
    id: 24,
    name: "Isa",
    arabicName: "عيسى",
    summary:
      "Messiah, son of Maryam; given the Injil, performed miracles by Allah's permission.",
    arabicAyah:
      "إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ",
    ayahRef: "Surah Al-Imran (3:45)",
    ayahTranslation:
      "[And mention] when the angels said, 'O Mary, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Jesus, the son of Mary...'",
    hadithArabic: null,
    hadithRef:
      "No specific hadith with Arabic text found in the search results.",
    hadithTranslation:
      "The Quran details his birth, miracles, and prophethood. The Prophet ﷺ said: 'Both in this world and in the Hereafter, I am the nearest of all the people to Jesus, the son of Mary' (Sahih al-Bukhari 3443).",
  },
  {
    id: 25,
    name: "Muhammad ﷺ",
    arabicName: "محمد",
    summary:
      "Final Prophet, mercy to the worlds; the Quran revealed to him over 23 years.",
    arabicAyah:
      "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ ۗ وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا",
    ayahRef: "Surah Al-Ahzab (33:40)",
    ayahTranslation:
      "Muhammad is not the father of any one of your men, but he is the Messenger of Allah and last of the prophets. And ever is Allah, of all things, Knowing.",
    hadithArabic:
      "إِنِّي عِنْدَ اللَّهِ لَخَاتَمُ النَّبِيِّينَ، وَإِنَّ آدَمَ لَمُنْجَدِلٌ فِي طِينَتِهِ",
    hadithRef: "Sunan al-Tirmidhi 3609",
    hadithTranslation:
      "The Prophet ﷺ said: 'I am the last of the prophets in the sight of Allah, even when Adam was still kneaded in his clay.'",
  },
];
