const tests = [
  // ===== 1. TO BE =====
  {
    id: 1, title: "To Be", desc: "am, is, are — быть", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Выберите правильную форму: I ___ a student.", opts: ["am", "is", "are", "be"], ans: 0 },
        { q: "Переведите: Я — учитель.", opts: ["I am a teacher.", "I is a teacher.", "I are a teacher.", "I be a teacher."], ans: 0 }
      ]},
      { vars: [
        { q: "Выберите правильную форму: She ___ happy.", opts: ["am", "is", "are", "be"], ans: 1 },
        { q: "Выберите правильную форму: He ___ my friend.", opts: ["are", "am", "is", "be"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильную форму: We ___ from Russia.", opts: ["am", "is", "are", "be"], ans: 2 },
        { q: "Выберите правильную форму: They ___ at home.", opts: ["am", "is", "are", "be"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильную форму: It ___ cold today.", opts: ["am", "are", "is", "be"], ans: 2 },
        { q: "Выберите правильную форму: The cat ___ on the table.", opts: ["am", "are", "is", "be"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["You is tired.", "You am tired.", "You are tired.", "You be tired."], ans: 2 },
        { q: "Какое предложение правильное?", opts: ["They is here.", "They am here.", "They are here.", "They be here."], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Он не студент.", opts: ["He is not a student.", "He are not a student.", "He not is a student.", "He am not a student."], ans: 0 },
        { q: "Переведите: Она не дома.", opts: ["She are not at home.", "She is not at home.", "She not is at home.", "She am not at home."], ans: 1 }
      ]},
      { vars: [
        { q: "Сделайте вопрос: You are a doctor. → ___ you a doctor?", opts: ["Am", "Is", "Are", "Do"], ans: 2 },
        { q: "Сделайте вопрос: She is busy. → ___ she busy?", opts: ["Am", "Is", "Are", "Do"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: Ты готов?", opts: ["Are you ready?", "Is you ready?", "Am you ready?", "Do you ready?"], ans: 0 },
        { q: "Переведите: Он дома?", opts: ["Are he at home?", "Is he at home?", "Am he at home?", "Does he at home?"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите сокращённую форму: I am → ___", opts: ["I'm", "I'am", "Im", "Ia"], ans: 0 },
        { q: "Выберите сокращённую форму: She is → ___", opts: ["She's", "Shes", "She'is", "She`s"], ans: 0 }
      ]},
      { vars: [
        { q: "Выберите отрицательную сокращённую форму: is not → ___", opts: ["isn't", "isnt", "is'nt", "in't"], ans: 0 },
        { q: "Выберите отрицательную сокращённую форму: are not → ___", opts: ["arn't", "arent", "aren't", "are'nt"], ans: 2 }
      ]},
      { vars: [
        { q: "Заполните пропуск: My parents ___ at work now.", opts: ["am", "is", "are", "be"], ans: 2 },
        { q: "Заполните пропуск: The children ___ in the park.", opts: ["am", "is", "are", "be"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильный ответ: — Is she a nurse? — ___", opts: ["Yes, she is.", "Yes, she are.", "Yes, she am.", "Yes, she do."], ans: 0 },
        { q: "Выберите правильный ответ: — Are you OK? — ___", opts: ["Yes, I are.", "Yes, I is.", "Yes, I am.", "Yes, I do."], ans: 2 }
      ]}
    ]
  },

  // ===== 2. PRONOUNS =====
  {
    id: 2, title: "Pronouns", desc: "Местоимения — I/me/my/mine", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Какое местоимение — подлежащее (subject)? «Она читает книгу.»", opts: ["Her", "She", "Hers", "Her's"], ans: 1 },
        { q: "Какое местоимение — подлежащее (subject)? «Они живут в Москве.»", opts: ["Them", "Their", "They", "Theirs"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите объектное местоимение (object): Give it to ___. (он)", opts: ["he", "his", "him", "himself"], ans: 2 },
        { q: "Выберите объектное местоимение (object): Call ___. (мы)", opts: ["we", "our", "us", "ours"], ans: 2 }
      ]},
      { vars: [
        { q: "Притяжательное прилагательное (possessive adj.): This is ___ book. (я)", opts: ["I", "me", "my", "mine"], ans: 2 },
        { q: "Притяжательное прилагательное (possessive adj.): ___ name is Anna. (она)", opts: ["She", "Her", "Hers", "She's"], ans: 1 }
      ]},
      { vars: [
        { q: "Притяжательное местоимение (possessive pronoun): The car is ___. (они)", opts: ["they", "them", "their", "theirs"], ans: 3 },
        { q: "Притяжательное местоимение (possessive pronoun): This bag is ___. (я)", opts: ["I", "me", "my", "mine"], ans: 3 }
      ]},
      { vars: [
        { q: "Заполните: ___ is my brother. (он)", opts: ["Him", "He", "His", "Himself"], ans: 1 },
        { q: "Заполните: ___ are students. (мы)", opts: ["Us", "Our", "We", "Ours"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: I saw ___ at the park. (она)", opts: ["she", "her", "hers", "herself"], ans: 1 },
        { q: "Выберите: Tell ___ the truth. (он)", opts: ["he", "his", "him", "himself"], ans: 2 }
      ]},
      { vars: [
        { q: "Какой тип: «my» — это...", opts: ["subject pronoun", "object pronoun", "possessive adjective", "possessive pronoun"], ans: 2 },
        { q: "Какой тип: «mine» — это...", opts: ["subject pronoun", "object pronoun", "possessive adjective", "possessive pronoun"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите правильное: This is ___ car, not yours. (я)", opts: ["I", "me", "my", "mine"], ans: 2 },
        { q: "Выберите правильное: The house is ___. (мы)", opts: ["we", "us", "our", "ours"], ans: 3 }
      ]},
      { vars: [
        { q: "Заполните: ___ dog is big. (они)", opts: ["They", "Them", "Their", "Theirs"], ans: 2 },
        { q: "Заполните: ___ cat is small. (ты)", opts: ["You", "Your", "Yours", "Yourself"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите «его» в: «Это его ручка.»", opts: ["he", "him", "his", "he's"], ans: 2 },
        { q: "Переведите «её» в: «Это её комната.»", opts: ["she", "her (object)", "her (possessive adj.)", "hers"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «us»?", opts: ["мы (подлежащее)", "нас / нам", "наш", "наши"], ans: 1 },
        { q: "Что значит «them»?", opts: ["они (подлежащее)", "их / им", "свой", "их (притяж.)"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: Is this pen ___? (ты)", opts: ["you", "your", "yours", "yourself"], ans: 2 },
        { q: "Выберите: Are these shoes ___? (он)", opts: ["he", "him", "his", "himself"], ans: 2 }
      ]}
    ]
  },

  // ===== 3. ARTICLES =====
  {
    id: 3, title: "Articles", desc: "Артикли — a, an, the", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Выберите артикль: ___ apple a day keeps the doctor away.", opts: ["A", "An", "The", "—"], ans: 1 },
        { q: "Выберите артикль: I have ___ orange.", opts: ["a", "an", "the", "—"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите артикль: She is ___ teacher.", opts: ["a", "an", "the", "—"], ans: 0 },
        { q: "Выберите артикль: He is ___ engineer.", opts: ["a", "an", "the", "—"], ans: 1 }
      ]},
      { vars: [
        { q: "Когда используем «an»?", opts: ["перед согласным звуком", "перед гласным звуком", "перед определённым предметом", "перед множ. числом"], ans: 1 },
        { q: "Когда используем «a»?", opts: ["перед гласным звуком", "перед согласным звуком", "перед определённым предметом", "всегда перед существительным"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: ___ sun is very bright today.", opts: ["A", "An", "The", "—"], ans: 2 },
        { q: "Выберите: ___ moon is beautiful tonight.", opts: ["A", "An", "The", "—"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: I like ___ music. (музыка вообще)", opts: ["a", "an", "the", "— (без артикля)"], ans: 3 },
        { q: "Выберите: ___ water is important for life. (вода вообще)", opts: ["A", "An", "The", "— (без артикля)"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: I saw ___ cat in the garden. Then ___ cat ran away.", opts: ["a ... a", "a ... the", "the ... a", "the ... the"], ans: 1 },
        { q: "Выберите: There is ___ book on the table. ___ book is interesting.", opts: ["the ... A", "a ... A", "a ... The", "the ... The"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["She plays a piano.", "She plays the piano.", "She plays an piano.", "She plays piano."], ans: 1 },
        { q: "Какое предложение правильное?", opts: ["He plays a guitar.", "He plays an guitar.", "He plays the guitar.", "He plays guitar."], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: ___ honest man (честный человек)", opts: ["A", "An", "The", "—"], ans: 1 },
        { q: "Выберите: ___ university (университет)", opts: ["A", "An", "The", "—"], ans: 0 }
      ]},
      { vars: [
        { q: "Выберите: I go to ___ school every day.", opts: ["a", "an", "the", "— (без артикля)"], ans: 3 },
        { q: "Выберите: She goes to ___ work by bus.", opts: ["a", "an", "the", "— (без артикля)"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: ___ Volga is the longest river in Europe.", opts: ["A", "An", "The", "—"], ans: 2 },
        { q: "Выберите: ___ Everest is the highest mountain.", opts: ["A", "An", "The", "— (без артикля)"], ans: 3 }
      ]},
      { vars: [
        { q: "Когда используем «the»?", opts: ["когда предмет новый", "когда предмет известен собеседникам", "перед гласным звуком", "перед множ. числом"], ans: 1 },
        { q: "Когда НЕ используем артикль?", opts: ["перед конкретным предметом", "перед уникальным предметом", "перед абстрактными и неисчисляемыми в общем значении", "перед ед. числом"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: What ___ beautiful day!", opts: ["a", "an", "the", "—"], ans: 0 },
        { q: "Выберите: What ___ interesting idea!", opts: ["a", "an", "the", "—"], ans: 1 }
      ]}
    ]
  },

  // ===== 4. NUMBERS =====
  {
    id: 4, title: "Numbers", desc: "Числа 1-100, порядковые", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Как пишется число 13 по-английски?", opts: ["thirteen", "threeteen", "thirten", "therteen"], ans: 0 },
        { q: "Как пишется число 15 по-английски?", opts: ["fiveteen", "fiften", "fifteen", "fivteen"], ans: 2 }
      ]},
      { vars: [
        { q: "Как пишется число 40 по-английски?", opts: ["fourty", "forty", "forthy", "fourtie"], ans: 1 },
        { q: "Как пишется число 50 по-английски?", opts: ["fivety", "fiftie", "fifty", "fifthy"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: двадцать один", opts: ["twenty-one", "twenty one", "twentyone", "twenty-first"], ans: 0 },
        { q: "Переведите: тридцать два", opts: ["thirty two", "thirty-two", "thirtytwo", "thirty-second"], ans: 1 }
      ]},
      { vars: [
        { q: "Какое порядковое числительное от «one»?", opts: ["oneth", "first", "the one", "onest"], ans: 1 },
        { q: "Какое порядковое числительное от «two»?", opts: ["twoth", "the two", "second", "twond"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое порядковое числительное от «three»?", opts: ["threeth", "third", "the three", "threeth"], ans: 1 },
        { q: "Какое порядковое числительное от «five»?", opts: ["fiveth", "fivth", "fifth", "the five"], ans: 2 }
      ]},
      { vars: [
        { q: "Как пишется 12th словом?", opts: ["twelvth", "twelfth", "twelveth", "twelf"], ans: 1 },
        { q: "Как пишется 9th словом?", opts: ["nineth", "nineth", "ninth", "nith"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: ___ — это число 80.", opts: ["eighty", "eighthy", "eightty", "eigthy"], ans: 0 },
        { q: "Выберите: ___ — это число 90.", opts: ["ninty", "ninety", "ninetey", "ninthy"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите «сто» на английский.", opts: ["a hundred", "a hunderd", "one hundret", "a hundered"], ans: 0 },
        { q: "Как будет 100 по-английски?", opts: ["one hundert", "one hunderd", "one hundred", "a hundered"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «seventy-six»?", opts: ["67", "76", "77", "66"], ans: 1 },
        { q: "Что значит «forty-eight»?", opts: ["84", "44", "48", "38"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильное написание числа 14:", opts: ["forteen", "fourteen", "fourten", "forteen"], ans: 1 },
        { q: "Выберите правильное написание числа 16:", opts: ["sixten", "sixtine", "sixteen", "sexteen"], ans: 2 }
      ]},
      { vars: [
        { q: "Порядковое от «twenty» (20)?", opts: ["twentyth", "twentieth", "twenty-th", "twenth"], ans: 1 },
        { q: "Порядковое от «thirty» (30)?", opts: ["thirtieth", "thirtyth", "thirty-th", "thirdty"], ans: 0 }
      ]},
      { vars: [
        { q: "Today is the ___ of January. (3-й)", opts: ["three", "third", "thirdth", "threeth"], ans: 1 },
        { q: "She finished ___. (1-й)", opts: ["one", "oneth", "first", "the one"], ans: 2 }
      ]}
    ]
  },

  // ===== 5. PREPOSITIONS OF PLACE =====
  {
    id: 5, title: "Prepositions of Place", desc: "Предлоги места — in, on, at, under", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Выберите предлог: The book is ___ the table. (на столе)", opts: ["in", "on", "at", "under"], ans: 1 },
        { q: "Выберите предлог: The cat is ___ the chair. (под стулом)", opts: ["in", "on", "at", "under"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите предлог: She lives ___ Moscow.", opts: ["on", "at", "in", "under"], ans: 2 },
        { q: "Выберите предлог: He works ___ an office.", opts: ["on", "at", "in", "under"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите предлог: The picture is ___ the wall.", opts: ["in", "on", "at", "under"], ans: 1 },
        { q: "Выберите предлог: There is a clock ___ the wall.", opts: ["in", "at", "on", "under"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите предлог: I am ___ the bus stop.", opts: ["in", "on", "at", "under"], ans: 2 },
        { q: "Выберите предлог: She is ___ home.", opts: ["in", "on", "at", "under"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: между столами", opts: ["next to the tables", "behind the tables", "between the tables", "in front of the tables"], ans: 2 },
        { q: "Переведите: рядом со столом", opts: ["between the table", "behind the table", "in front of the table", "next to the table"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: The pharmacy is ___ the bank. (за банком)", opts: ["in front of", "behind", "between", "next to"], ans: 1 },
        { q: "Выберите: The park is ___ the school. (перед школой)", opts: ["behind", "in front of", "under", "between"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «in front of»?", opts: ["позади", "между", "перед (напротив)", "рядом с"], ans: 2 },
        { q: "Что значит «behind»?", opts: ["рядом с", "перед", "между", "позади / за"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: The keys are ___ my bag. (внутри сумки)", opts: ["on", "at", "in", "under"], ans: 2 },
        { q: "Выберите: The money is ___ the box. (внутри коробки)", opts: ["on", "at", "in", "under"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: The lamp is ___ the desk. (на столе, сверху)", opts: ["under", "in", "on", "behind"], ans: 2 },
        { q: "Выберите: The shoes are ___ the bed. (под кроватью)", opts: ["on", "in", "behind", "under"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: The cafe is ___ the bookshop and the bank.", opts: ["next to", "behind", "between", "in front of"], ans: 2 },
        { q: "Выберите: My house is ___ the river and the forest.", opts: ["next to", "between", "behind", "in front of"], ans: 1 }
      ]},
      { vars: [
        { q: "Какой предлог используется с адресом (at / on / in)? «___ 5 Oak Street»", opts: ["in", "on", "at", "under"], ans: 2 },
        { q: "Какой предлог используется с улицей? «___ Oak Street»", opts: ["in", "on", "at", "under"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: There is a garden ___ the house. (за домом)", opts: ["in front of", "between", "behind", "next to"], ans: 2 },
        { q: "Выберите: The dog is ___ the tree. (под деревом)", opts: ["on", "in", "behind", "under"], ans: 3 }
      ]}
    ]
  },

  // ===== 6. POSSESSIVE CASE =====
  {
    id: 6, title: "Possessive Case", desc: "Притяжательный падеж — 's и '", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Переведите: кошка Анны", opts: ["Anna cat", "Anna's cat", "Annas cat", "cat Anna's"], ans: 1 },
        { q: "Переведите: собака Тома", opts: ["Tom dog", "dog Tom's", "Tom's dog", "Toms dog"], ans: 2 }
      ]},
      { vars: [
        { q: "Как правильно: машина моего отца?", opts: ["my father car", "my fathers car", "my father's car", "my fathers' car"], ans: 2 },
        { q: "Как правильно: дом моей мамы?", opts: ["my mother house", "my mothers house", "my mothers' house", "my mother's house"], ans: 3 }
      ]},
      { vars: [
        { q: "Притяжательный для мн. числа: the girls' room — чья комната?", opts: ["одной девочки", "нескольких девочек", "девочка", "ничья"], ans: 1 },
        { q: "Притяжательный для мн. числа: the boys' toys — чьи игрушки?", opts: ["одного мальчика", "нескольких мальчиков", "мальчик", "ничьи"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет: игрушки детей (children)?", opts: ["children's toys", "childrens toys", "childrens' toys", "children toys"], ans: 0 },
        { q: "Как будет: ноги мужчин (men)?", opts: ["men's legs", "mens legs", "mens' legs", "men legs"], ans: 0 }
      ]},
      { vars: [
        { q: "Выберите правильное: ___ is very big.", opts: ["The house of my uncle", "My uncle's house", "My uncles house", "My uncle house"], ans: 1 },
        { q: "Выберите правильное: ___ is blue.", opts: ["The car of my sister", "My sister car", "My sisters car", "My sister's car"], ans: 3 }
      ]},
      { vars: [
        { q: "Когда ставим только апостроф (') без s?", opts: ["после имён", "после мн. числа на -s", "после неисчисляемых", "никогда"], ans: 1 },
        { q: "Когда ставим 's после слова?", opts: ["только после имён", "после ед. числа и нерегулярного мн.", "после мн. числа на -s", "всегда"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: комната Джеймса", opts: ["James room", "James' room", "Jame's room", "James's room"], ans: 1 },
        { q: "Переведите: кабинет босса", opts: ["boss room", "boss's office", "boss' office", "bosss office"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["My parents's house is old.", "My parent's house is old.", "My parents' house is old.", "My parents house is old."], ans: 2 },
        { q: "Какое предложение правильное?", opts: ["The teachers' room is upstairs.", "The teacher's room is upstairs.", "The teachers room is upstairs.", "The teachers's room is upstairs."], ans: 0 }
      ]},
      { vars: [
        { q: "This is my ___. (друг моего брата)", opts: ["brother friend", "brother's friend", "brothers friend", "brothers' friend"], ans: 1 },
        { q: "I found my ___. (телефон моей сестры)", opts: ["sister phone", "sister's phone", "sisters phone", "sisters' phone"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: жена моего друга", opts: ["my friend wife", "my friend's wife", "my friends wife", "my friends' wife"], ans: 1 },
        { q: "Переведите: муж моей подруги", opts: ["my friend husband", "my friends' husband", "my friend's husband", "my friends husband"], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать: ресторан Марко?", opts: ["Marco restaurant", "Marcos restaurant", "Marco's restaurant", "Marcos' restaurant"], ans: 2 },
        { q: "Как сказать: пицца Луки?", opts: ["Luca pizza", "Lucas pizza", "Luca's pizza", "Lucas' pizza"], ans: 2 }
      ]},
      { vars: [
        { q: "Множественное: the women's hats — это...", opts: ["шляпы одной женщины", "шляпы нескольких женщин", "женские шляпы вообще", "шляпа женщины"], ans: 1 },
        { q: "Множественное: the people's choice — это...", opts: ["выбор одного человека", "выбор людей", "люди выбирают", "людям выбрали"], ans: 1 }
      ]}
    ]
  },

  // ===== 7. DESCRIBING PEOPLE =====
  {
    id: 7, title: "Describing People", desc: "Внешность и описание людей", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Переведите: высокий", opts: ["short", "tall", "thin", "fat"], ans: 1 },
        { q: "Переведите: низкий (о росте)", opts: ["tall", "thin", "short", "small"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «стройная» по-английски?", opts: ["fat", "slim", "short", "wide"], ans: 1 },
        { q: "Как будет «полный» по-английски?", opts: ["slim", "thin", "overweight", "tall"], ans: 2 }
      ]},
      { vars: [
        { q: "She has ___ hair. (прямые волосы)", opts: ["curly", "wavy", "straight", "bald"], ans: 2 },
        { q: "He has ___ hair. (кудрявые волосы)", opts: ["straight", "curly", "bald", "wavy"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: у него голубые глаза", opts: ["He has blue eyes.", "He is blue eyes.", "He have blue eyes.", "His eyes blue."], ans: 0 },
        { q: "Переведите: у неё зелёные глаза", opts: ["She is green eyes.", "She have green eyes.", "Her eyes green.", "She has green eyes."], ans: 3 }
      ]},
      { vars: [
        { q: "Как описать человека: «средний рост»?", opts: ["middle tall", "medium height", "average tall", "normal high"], ans: 1 },
        { q: "Как описать: «среднего телосложения»?", opts: ["middle body", "average build", "normal size", "medium fat"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: борода", opts: ["moustache", "beard", "sideburns", "fringe"], ans: 1 },
        { q: "Переведите: усы", opts: ["beard", "sideburns", "moustache", "fringe"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: She is ___ her thirties. (ей за тридцать)", opts: ["at", "on", "in", "of"], ans: 2 },
        { q: "Выберите: He looks ___ he is about 40. (как будто)", opts: ["as if", "in", "at", "for"], ans: 0 }
      ]},
      { vars: [
        { q: "Как сказать «светлые волосы»?", opts: ["dark hair", "blonde hair", "red hair", "grey hair"], ans: 1 },
        { q: "Как сказать «тёмные волосы»?", opts: ["blonde hair", "fair hair", "dark hair", "red hair"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите «freckles»:", opts: ["морщины", "родинки", "веснушки", "шрамы"], ans: 2 },
        { q: "Переведите «wrinkles»:", opts: ["веснушки", "морщины", "родинки", "шрамы"], ans: 1 }
      ]},
      { vars: [
        { q: "She wears ___. (очки)", opts: ["lenses", "glasses", "sunglasses", "monocle"], ans: 1 },
        { q: "He wears ___. (контактные линзы)", opts: ["glasses", "sunglasses", "contact lenses", "monocle"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое слово описывает причёску — «хвостик»?", opts: ["bun", "ponytail", "braid", "fringe"], ans: 1 },
        { q: "Какое слово описывает причёску — «коса»?", opts: ["ponytail", "bun", "braid", "fringe"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: красивый (о мужчине)", opts: ["beautiful", "pretty", "handsome", "cute"], ans: 2 },
        { q: "Переведите: красивая (о женщине)", opts: ["handsome", "beautiful", "ugly", "plain"], ans: 1 }
      ]}
    ]
  },

  // ===== 8. CLOTHES =====
  {
    id: 8, title: "Clothes", desc: "Одежда — названия предметов", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: рубашка", opts: ["skirt", "shirt", "shorts", "shoes"], ans: 1 },
        { q: "Переведите: юбка", opts: ["shirt", "scarf", "skirt", "shorts"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «trousers»?", opts: ["шорты", "брюки", "юбка", "платье"], ans: 1 },
        { q: "Что такое «jeans»?", opts: ["шорты", "юбка", "джинсы", "брюки"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: платье", opts: ["dress", "blouse", "skirt", "suit"], ans: 0 },
        { q: "Переведите: костюм", opts: ["dress", "jacket", "suit", "coat"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «кроссовки» по-английски?", opts: ["boots", "sandals", "sneakers", "slippers"], ans: 2 },
        { q: "Как будет «сапоги» по-английски?", opts: ["sneakers", "boots", "sandals", "slippers"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: шарф", opts: ["hat", "scarf", "gloves", "belt"], ans: 1 },
        { q: "Переведите: перчатки", opts: ["scarf", "socks", "gloves", "mittens"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «sweater»?", opts: ["свитер", "рубашка", "жилет", "пиджак"], ans: 0 },
        { q: "Что такое «jacket»?", opts: ["свитер", "куртка / пиджак", "пальто", "жилет"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: носки", opts: ["shoes", "boots", "socks", "stockings"], ans: 2 },
        { q: "Переведите: шляпа", opts: ["cap", "hat", "hood", "helmet"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: She is wearing a ___ (пальто).", opts: ["coat", "skirt", "blouse", "tie"], ans: 0 },
        { q: "Выберите: He is wearing a ___ (галстук).", opts: ["scarf", "belt", "tie", "bow"], ans: 2 }
      ]},
      { vars: [
        { q: "Что означает «underwear»?", opts: ["верхняя одежда", "нижнее бельё", "спортивная одежда", "рабочая одежда"], ans: 1 },
        { q: "Что означает «hoodie»?", opts: ["шапка", "худи / толстовка с капюшоном", "куртка", "свитер"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: ремень", opts: ["tie", "scarf", "belt", "buckle"], ans: 2 },
        { q: "Переведите: зонт", opts: ["umbrella", "raincoat", "hood", "parasol"], ans: 0 }
      ]},
      { vars: [
        { q: "Как будет «тапочки» по-английски?", opts: ["sandals", "sneakers", "slippers", "flip-flops"], ans: 2 },
        { q: "Как будет «шлёпанцы» по-английски?", opts: ["slippers", "flip-flops", "sandals", "boots"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «blouse»?", opts: ["блузка", "юбка", "платье", "жилет"], ans: 0 },
        { q: "Что такое «vest»?", opts: ["блузка", "жилет", "рубашка", "куртка"], ans: 1 }
      ]}
    ]
  },

  // ===== 9. HAVE / HAS =====
  {
    id: 9, title: "Have / Has", desc: "Глагол иметь — have, has, вопросы", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Выберите: I ___ a car.", opts: ["has", "have", "having", "haves"], ans: 1 },
        { q: "Выберите: We ___ two children.", opts: ["has", "have", "having", "haves"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: She ___ a beautiful house.", opts: ["have", "has", "having", "haves"], ans: 1 },
        { q: "Выберите: He ___ a new phone.", opts: ["have", "has", "having", "haves"], ans: 1 }
      ]},
      { vars: [
        { q: "Отрицание: I ___ a dog. (не имею)", opts: ["don't have", "doesn't have", "haven't", "hasn't"], ans: 0 },
        { q: "Отрицание: We ___ any money. (не имеем)", opts: ["doesn't have", "don't have", "hasn't", "haven't"], ans: 1 }
      ]},
      { vars: [
        { q: "Отрицание: She ___ a brother. (не имеет)", opts: ["don't have", "doesn't have", "haven't", "hasn't"], ans: 1 },
        { q: "Отрицание: He ___ any friends here.", opts: ["don't have", "doesn't have", "haven't", "hasn't"], ans: 1 }
      ]},
      { vars: [
        { q: "Вопрос: ___ you have a pen?", opts: ["Does", "Do", "Have", "Has"], ans: 1 },
        { q: "Вопрос: ___ they have a garden?", opts: ["Does", "Do", "Has", "Have"], ans: 1 }
      ]},
      { vars: [
        { q: "Вопрос: ___ she have a cat?", opts: ["Do", "Does", "Have", "Has"], ans: 1 },
        { q: "Вопрос: ___ he have a ticket?", opts: ["Do", "Does", "Have", "Has"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: У меня есть сестра.", opts: ["I has a sister.", "I have a sister.", "I am have a sister.", "I having a sister."], ans: 1 },
        { q: "Переведите: У них есть собака.", opts: ["They has a dog.", "They have a dog.", "They are have a dog.", "They having a dog."], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: У неё нет машины.", opts: ["She don't have a car.", "She doesn't have a car.", "She haven't a car.", "She not has a car."], ans: 1 },
        { q: "Переведите: У него нет времени.", opts: ["He don't have time.", "He not has time.", "He doesn't have time.", "He haven't time."], ans: 2 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["It have four legs.", "It has four legs.", "It haves four legs.", "It is have four legs."], ans: 1 },
        { q: "Какое предложение правильное?", opts: ["The house have a garden.", "The house has a garden.", "The house haves a garden.", "The house is have a garden."], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите «have got»: I ___ a headache.", opts: ["has got", "have got", "got has", "got have"], ans: 1 },
        { q: "Выберите «have got»: She ___ a new dress.", opts: ["have got", "has got", "got has", "got have"], ans: 1 }
      ]},
      { vars: [
        { q: "Ответьте: — Do you have a bike? — Yes, I ___.", opts: ["have", "do", "has", "does"], ans: 1 },
        { q: "Ответьте: — Does she have a laptop? — No, she ___.", opts: ["don't", "hasn't", "doesn't", "haven't"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «I have to go»?", opts: ["У меня есть путь", "Я должен идти", "Я хочу идти", "Я иду"], ans: 1 },
        { q: "Что значит «She has to work»?", opts: ["У неё есть работа", "Она должна работать", "Она хочет работать", "Она работает"], ans: 1 }
      ]}
    ]
  },

  // ===== 10. DESK OBJECTS =====
  {
    id: 10, title: "Desk Objects", desc: "Предметы на столе и в офисе", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: ручка", opts: ["pencil", "pen", "marker", "eraser"], ans: 1 },
        { q: "Переведите: карандаш", opts: ["pen", "ruler", "pencil", "marker"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «stapler»?", opts: ["скрепка", "степлер", "дырокол", "ножницы"], ans: 1 },
        { q: "Что такое «paper clip»?", opts: ["степлер", "ножницы", "скрепка", "дырокол"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: ножницы", opts: ["scissors", "stapler", "ruler", "tape"], ans: 0 },
        { q: "Переведите: линейка", opts: ["scissors", "tape", "ruler", "stapler"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «ластик» по-английски?", opts: ["rubber / eraser", "sharpener", "ruler", "marker"], ans: 0 },
        { q: "Как будет «точилка» по-английски?", opts: ["eraser", "sharpener", "ruler", "marker"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «folder»?", opts: ["конверт", "тетрадь", "папка", "файл"], ans: 2 },
        { q: "Что такое «envelope»?", opts: ["папка", "конверт", "тетрадь", "файл"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: клавиатура", opts: ["mouse", "monitor", "keyboard", "screen"], ans: 2 },
        { q: "Переведите: мышь (компьютерная)", opts: ["keyboard", "monitor", "screen", "mouse"], ans: 3 }
      ]},
      { vars: [
        { q: "Что такое «notebook»?", opts: ["блокнот / тетрадь", "книга", "конверт", "календарь"], ans: 0 },
        { q: "Что такое «calendar»?", opts: ["тетрадь", "дневник", "календарь", "блокнот"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «скотч / клейкая лента»?", opts: ["glue", "tape", "string", "rubber"], ans: 1 },
        { q: "Как будет «клей»?", opts: ["tape", "glue", "rubber", "string"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: принтер", opts: ["scanner", "printer", "copier", "fax"], ans: 1 },
        { q: "Переведите: сканер", opts: ["printer", "copier", "scanner", "fax"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «whiteboard»?", opts: ["доска для записей (белая)", "чёрная доска", "экран", "стенд"], ans: 0 },
        { q: "Что такое «desk lamp»?", opts: ["потолочный светильник", "настольная лампа", "торшер", "фонарик"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «кнопка (канцелярская)» по-английски?", opts: ["button", "pin", "thumbtack / pushpin", "nail"], ans: 2 },
        { q: "Как будет «дырокол» по-английски?", opts: ["stapler", "hole punch", "paper clip", "scissors"], ans: 1 }
      ]}
    ]
  },

  // ===== 11. COMMUNICATION PHRASES =====
  {
    id: 11, title: "Communication Phrases", desc: "Фразы для общения", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Как вежливо попросить повторить?", opts: ["What?", "Say again!", "Could you repeat that, please?", "Repeat!"], ans: 2 },
        { q: "Как вежливо спросить, если не расслышал?", opts: ["Huh?", "Sorry, I didn't catch that.", "What did you say?!", "Louder!"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: Приятно познакомиться.", opts: ["How are you?", "Nice to meet you.", "See you later.", "Good morning."], ans: 1 },
        { q: "Переведите: Рад вас видеть.", opts: ["Nice to see you.", "How do you do?", "Good evening.", "See you later."], ans: 0 }
      ]},
      { vars: [
        { q: "Как спросить «Как дела?»", opts: ["Who are you?", "What is your name?", "How are you?", "Where are you?"], ans: 2 },
        { q: "Как ответить на «How are you?»", opts: ["I am 25.", "I'm fine, thanks.", "My name is Alex.", "I live here."], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «Excuse me»?", opts: ["Простите (привлечь внимание)", "Спасибо", "Пожалуйста", "До свидания"], ans: 0 },
        { q: "Что значит «I'm sorry»?", opts: ["Извините (мне жаль)", "Спасибо", "Пожалуйста", "Не за что"], ans: 0 }
      ]},
      { vars: [
        { q: "Как попрощаться неформально?", opts: ["Goodbye, sir.", "See you!", "Farewell.", "It was a pleasure."], ans: 1 },
        { q: "Как попрощаться формально?", opts: ["Bye!", "See ya!", "Goodbye. Have a nice day.", "Later!"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Не могли бы вы мне помочь?", opts: ["Help me!", "Could you help me, please?", "I need help now!", "You help me."], ans: 1 },
        { q: "Переведите: Можно вас попросить?", opts: ["I ask you!", "May I ask you something?", "You do it.", "Give me."], ans: 1 }
      ]},
      { vars: [
        { q: "Что ответить на «Thank you»?", opts: ["Thanks.", "Sorry.", "You're welcome.", "Excuse me."], ans: 2 },
        { q: "Что ответить на «Sorry»?", opts: ["Thank you.", "You're welcome.", "Excuse me.", "That's OK. / No problem."], ans: 3 }
      ]},
      { vars: [
        { q: "Как спросить «Вы говорите по-английски?»", opts: ["You speak English?", "Do you speak English?", "Are you English?", "Can English?"], ans: 1 },
        { q: "Как сказать «Я не понимаю»?", opts: ["I don't know.", "I don't understand.", "I can't speak.", "I'm not English."], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: Одну минуту, пожалуйста.", opts: ["Wait!", "One moment.", "Just a moment, please.", "Stop!"], ans: 2 },
        { q: "Переведите: Подождите, пожалуйста.", opts: ["Stop!", "Go away!", "Please wait.", "Be quick!"], ans: 2 }
      ]},
      { vars: [
        { q: "Как представиться?", opts: ["I called Alex.", "My name is Alex.", "I naming Alex.", "Me Alex."], ans: 1 },
        { q: "Как спросить имя?", opts: ["Who you?", "You name?", "What is your name?", "Name?"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «Take care»?", opts: ["Возьми это", "Берегите себя", "Будь осторожен", "Позаботься"], ans: 1 },
        { q: "Что значит «Have a good one»?", opts: ["Получи один", "Хорошего дня", "Удачи на экзамене", "Будь здоров"], ans: 1 }
      ]}
    ]
  },

  // ===== 12. DAILY ROUTINE & HABITS =====
  {
    id: 12, title: "Daily Routine & Habits", desc: "Распорядок дня, Present Simple", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Выберите: She ___ up at 7 o'clock.", opts: ["get", "gets", "getting", "to get"], ans: 1 },
        { q: "Выберите: He ___ breakfast at 8.", opts: ["have", "has", "having", "to have"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: Я хожу на работу каждый день.", opts: ["I go to work every day.", "I goes to work every day.", "I going to work every day.", "I am go to work every day."], ans: 0 },
        { q: "Переведите: Она ходит в школу каждый день.", opts: ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She is go to school every day."], ans: 1 }
      ]},
      { vars: [
        { q: "Отрицание: I ___ coffee in the morning.", opts: ["don't drink", "doesn't drink", "not drink", "no drink"], ans: 0 },
        { q: "Отрицание: She ___ TV in the evening.", opts: ["don't watch", "doesn't watch", "not watch", "no watch"], ans: 1 }
      ]},
      { vars: [
        { q: "Вопрос: ___ you brush your teeth twice a day?", opts: ["Does", "Do", "Are", "Is"], ans: 1 },
        { q: "Вопрос: ___ he take a shower every morning?", opts: ["Do", "Does", "Is", "Are"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «I have lunch at noon»?", opts: ["Я обедаю в полдень.", "У меня ланч в полночь.", "Я завтракаю днём.", "Я ужинаю в полдень."], ans: 0 },
        { q: "Что значит «She has dinner at 7 pm»?", opts: ["Она обедает в 7 утра.", "Она завтракает в 7.", "Она ужинает в 7 вечера.", "Она ест в 7 утра."], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: After work, I usually ___ home.", opts: ["go", "goes", "going", "am go"], ans: 0 },
        { q: "Выберите: In the evening, she often ___ books.", opts: ["read", "reads", "reading", "is read"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите «to take a shower»:", opts: ["искупаться", "принять душ", "помыть руки", "почистить зубы"], ans: 1 },
        { q: "Переведите «to get dressed»:", opts: ["раздеться", "помыться", "одеться", "лечь спать"], ans: 2 }
      ]},
      { vars: [
        { q: "Какое наречие подходит? I ___ go jogging. (каждое утро)", opts: ["never", "rarely", "always", "sometimes"], ans: 2 },
        { q: "Какое наречие подходит? He ___ eats fast food. (очень редко)", opts: ["always", "usually", "often", "rarely"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: My alarm clock ___ at 6:30.", opts: ["ring", "rings", "ringing", "is ring"], ans: 1 },
        { q: "Выберите: The bus ___ at 8:15.", opts: ["leave", "leaves", "leaving", "is leave"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: Я ложусь спать в 11.", opts: ["I go to sleep at 11.", "I go to bed at 11.", "I sleep at 11.", "I lay at 11."], ans: 1 },
        { q: "Переведите: Она просыпается в 6.", opts: ["She wakes up at 6.", "She gets up at 6.", "She stands up at 6.", "She rises at 6."], ans: 0 }
      ]},
      { vars: [
        { q: "Когда используем Present Simple?", opts: ["для действий прямо сейчас", "для привычек и регулярных действий", "для прошлых событий", "для будущих планов"], ans: 1 },
        { q: "Какие слова-маркеры Present Simple?", opts: ["now, right now", "yesterday, last week", "every day, usually, always", "tomorrow, next week"], ans: 2 }
      ]}
    ]
  },

  // ===== 13. POSSESSIVE WITH NAMES =====
  {
    id: 13, title: "Possessive with Names", desc: "Притяжательный с именами", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Как сказать: «телефон Кати»?", opts: ["Katya phone", "Katya's phone", "Katyas phone", "phone Katya"], ans: 1 },
        { q: "Как сказать: «велосипед Миши»?", opts: ["Misha bike", "Mishas bike", "Misha's bike", "bike Misha"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильное: ___ car is red. (Марк)", opts: ["Mark", "Marks", "Mark's", "Marks'"], ans: 2 },
        { q: "Выберите правильное: ___ dress is blue. (Лиза)", opts: ["Lisa", "Lisas", "Lisa's", "Lisas'"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Это сумка Ольги.", opts: ["This is Olga bag.", "This is Olga's bag.", "This is Olgas bag.", "This is bag Olga."], ans: 1 },
        { q: "Переведите: Это ноутбук Андрея.", opts: ["This is Andrey laptop.", "This is Andreys laptop.", "This is laptop Andrey.", "This is Andrey's laptop."], ans: 3 }
      ]},
      { vars: [
        { q: "Как спросить: «Чей это дом?»", opts: ["Who house is this?", "Whose house is this?", "Who's house is this?", "Whom house is this?"], ans: 1 },
        { q: "Как спросить: «Чья это книга?»", opts: ["Who book is this?", "Who's book is this?", "Whose book is this?", "Whom book is this?"], ans: 2 }
      ]},
      { vars: [
        { q: "«Whose» и «Who's» — в чём разница?", opts: ["Это одно и то же", "Whose = чей, Who's = кто есть", "Whose = кто, Who's = чей", "Нет разницы"], ans: 1 },
        { q: "Выберите: ___ coming to the party? (Кто идёт?)", opts: ["Whose", "Who's", "Whos", "Who"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: друг Алекса", opts: ["Alex friend", "Alexs friend", "Alex's friend", "friend of Alex"], ans: 2 },
        { q: "Переведите: мама Сары", opts: ["Sara mother", "Saras mother", "Sara's mother", "mother Sara"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: I'm going to ___. (к Анне домой)", opts: ["Anna", "Annas", "Anna's", "the Anna"], ans: 2 },
        { q: "Выберите: We're meeting at ___. (у Пита дома)", opts: ["Pete", "Petes", "Pete's", "the Pete"], ans: 2 }
      ]},
      { vars: [
        { q: "Как правильно: ответ Чарльза?", opts: ["Charles answer", "Charles' answer", "Charless answer", "Charles's answer"], ans: 1 },
        { q: "Как правильно: офис Росса?", opts: ["Ross office", "Ross' office", "Rosss office", "Ross's office"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: машина Тима и Лизы (общая)", opts: ["Tim and Lisa car", "Tim's and Lisa's car", "Tim and Lisa's car", "Tims and Lisas car"], ans: 2 },
        { q: "Переведите: комнаты Тима и Лизы (у каждого своя)", opts: ["Tim and Lisa's rooms", "Tim's and Lisa's rooms", "Tim and Lisa rooms", "Tims and Lisas rooms"], ans: 1 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["Anna's and Maria's mother (одна мама)", "Anna and Maria's mother (одна мама)", "Anna's and Maria mother", "Anna Maria's mother"], ans: 1 },
        { q: "Какое предложение правильное?", opts: ["Tom and Jerry's show (одно шоу)", "Tom's and Jerry's show (одно шоу)", "Tom's and Jerry show", "Tom Jerry's show"], ans: 0 }
      ]},
      { vars: [
        { q: "Выберите: This is my ___. (сестра моей подруги Нины)", opts: ["friend Nina sister", "friend Nina's sister", "friend's Nina sister", "friend Nina sisters"], ans: 1 },
        { q: "Выберите: I like ___. (готовка моей бабушки)", opts: ["my grandmother cooking", "my grandmother's cooking", "my grandmothers cooking", "my grandmothers' cooking"], ans: 1 }
      ]}
    ]
  },

  // ===== 14. FOOD & DRINKS =====
  {
    id: 14, title: "Food & Drinks", desc: "Еда, напитки, фрукты, овощи", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: яблоко", opts: ["orange", "apple", "banana", "grape"], ans: 1 },
        { q: "Переведите: апельсин", opts: ["apple", "lemon", "orange", "peach"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «cucumber»?", opts: ["помидор", "морковь", "огурец", "картофель"], ans: 2 },
        { q: "Что такое «carrot»?", opts: ["огурец", "капуста", "помидор", "морковь"], ans: 3 }
      ]},
      { vars: [
        { q: "Переведите: хлеб", opts: ["butter", "bread", "cheese", "rice"], ans: 1 },
        { q: "Переведите: масло (сливочное)", opts: ["bread", "oil", "butter", "cheese"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «молоко» по-английски?", opts: ["juice", "milk", "water", "tea"], ans: 1 },
        { q: "Как будет «сок» по-английски?", opts: ["milk", "water", "juice", "soda"], ans: 2 }
      ]},
      { vars: [
        { q: "Что такое «chicken»?", opts: ["свинина", "говядина", "курица", "рыба"], ans: 2 },
        { q: "Что такое «beef»?", opts: ["курица", "говядина", "свинина", "баранина"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: рис", opts: ["pasta", "rice", "bread", "cereal"], ans: 1 },
        { q: "Переведите: макароны", opts: ["rice", "bread", "pasta", "cereal"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «клубника»?", opts: ["blueberry", "raspberry", "strawberry", "cherry"], ans: 2 },
        { q: "Как будет «вишня»?", opts: ["strawberry", "cherry", "raspberry", "blueberry"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «onion»?", opts: ["чеснок", "лук", "перец", "капуста"], ans: 1 },
        { q: "Что такое «garlic»?", opts: ["лук", "перец", "чеснок", "имбирь"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: яйцо", opts: ["egg", "cheese", "meat", "fish"], ans: 0 },
        { q: "Переведите: сыр", opts: ["egg", "butter", "cheese", "cream"], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «чай» по-английски?", opts: ["coffee", "tea", "cocoa", "juice"], ans: 1 },
        { q: "Как будет «кофе» по-английски?", opts: ["tea", "coffee", "cocoa", "milk"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «watermelon»?", opts: ["дыня", "арбуз", "тыква", "ананас"], ans: 1 },
        { q: "Что такое «pineapple»?", opts: ["арбуз", "дыня", "ананас", "кокос"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: грибы", opts: ["nuts", "beans", "mushrooms", "seeds"], ans: 2 },
        { q: "Переведите: орехи", opts: ["beans", "nuts", "seeds", "mushrooms"], ans: 1 }
      ]}
    ]
  },

  // ===== 15. FEELINGS & MOOD =====
  {
    id: 15, title: "Feelings & Mood", desc: "Чувства, настроение, эмоции", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: счастливый", opts: ["sad", "angry", "happy", "tired"], ans: 2 },
        { q: "Переведите: грустный", opts: ["happy", "sad", "angry", "bored"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «tired»?", opts: ["злой", "голодный", "уставший", "скучающий"], ans: 2 },
        { q: "Что значит «bored»?", opts: ["уставший", "скучающий", "злой", "голодный"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «злой / сердитый»?", opts: ["sad", "scared", "angry", "nervous"], ans: 2 },
        { q: "Как будет «испуганный»?", opts: ["angry", "nervous", "scared", "worried"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Мне холодно.", opts: ["I am hot.", "I am cold.", "I am cool.", "I am warm."], ans: 1 },
        { q: "Переведите: Мне жарко.", opts: ["I am cold.", "I am warm.", "I am hot.", "I am cool."], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «I am hungry»?", opts: ["Мне скучно.", "Я голоден.", "Я хочу пить.", "Я устал."], ans: 1 },
        { q: "Что значит «I am thirsty»?", opts: ["Я голоден.", "Я устал.", "Я хочу пить.", "Мне скучно."], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать «Я взволнован / в восторге»?", opts: ["I am worried.", "I am excited.", "I am nervous.", "I am surprised."], ans: 1 },
        { q: "Как сказать «Я удивлён»?", opts: ["I am excited.", "I am confused.", "I am surprised.", "I am worried."], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите «nervous»:", opts: ["грустный", "нервный / тревожный", "злой", "уставший"], ans: 1 },
        { q: "Переведите «worried»:", opts: ["взволнованный", "обеспокоенный", "удивлённый", "расстроенный"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «I feel great»?", opts: ["Я чувствую себя ужасно.", "Я чувствую себя отлично.", "Мне нормально.", "Мне плохо."], ans: 1 },
        { q: "Что значит «I feel terrible»?", opts: ["Мне отлично.", "Мне нормально.", "Мне ужасно.", "Мне хорошо."], ans: 2 }
      ]},
      { vars: [
        { q: "Как будет «расстроенный»?", opts: ["angry", "upset", "confused", "lonely"], ans: 1 },
        { q: "Как будет «одинокий»?", opts: ["upset", "confused", "lonely", "bored"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Я в порядке.", opts: ["I am fine.", "I am great.", "I am bad.", "I am sick."], ans: 0 },
        { q: "Переведите: Мне плохо (болею).", opts: ["I am fine.", "I am angry.", "I feel sick.", "I am bored."], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «embarrassed»?", opts: ["злой", "смущённый", "уставший", "счастливый"], ans: 1 },
        { q: "Что значит «proud»?", opts: ["грустный", "гордый", "стеснительный", "нервный"], ans: 1 }
      ]},
      { vars: [
        { q: "Как спросить: «Как ты себя чувствуешь?»", opts: ["How do you feel?", "What do you feel?", "How are you feel?", "What are you feel?"], ans: 0 },
        { q: "Как спросить: «Ты в порядке?»", opts: ["Do you OK?", "Is you OK?", "Are you OK?", "You OK is?"], ans: 2 }
      ]}
    ]
  },

  // ===== 16. ADVERBS OF FREQUENCY =====
  {
    id: 16, title: "Adverbs of Frequency", desc: "always, usually, sometimes, never", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Расставьте по частоте: 100% → 0%. Что идёт первым?", opts: ["usually", "always", "sometimes", "never"], ans: 1 },
        { q: "Расставьте по частоте: что означает 0%?", opts: ["always", "usually", "sometimes", "never"], ans: 3 }
      ]},
      { vars: [
        { q: "Переведите «usually»:", opts: ["всегда", "обычно", "иногда", "никогда"], ans: 1 },
        { q: "Переведите «sometimes»:", opts: ["всегда", "обычно", "иногда", "никогда"], ans: 2 }
      ]},
      { vars: [
        { q: "Где стоит наречие частоты? She ___ goes to the gym.", opts: ["после глагола", "перед глаголом", "в конце", "в начале"], ans: 1 },
        { q: "Где стоит наречие частоты с «to be»? She is ___ late.", opts: ["перед is", "после is", "в конце", "в начале"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: I ___ eat fish. (около 50% времени)", opts: ["always", "never", "sometimes", "usually"], ans: 2 },
        { q: "Выберите: He ___ drinks water. (почти всегда, ~90%)", opts: ["never", "sometimes", "rarely", "usually"], ans: 3 }
      ]},
      { vars: [
        { q: "Переведите «rarely»:", opts: ["часто", "обычно", "редко", "всегда"], ans: 2 },
        { q: "Переведите «often»:", opts: ["редко", "часто", "иногда", "никогда"], ans: 1 }
      ]},
      { vars: [
        { q: "Какое предложение правильное?", opts: ["She drinks always coffee.", "She always drinks coffee.", "Always she drinks coffee.", "She coffee always drinks."], ans: 1 },
        { q: "Какое предложение правильное?", opts: ["He late is never.", "He never is late.", "He is never late.", "Never he is late."], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «hardly ever»?", opts: ["часто", "обычно", "почти никогда", "всегда"], ans: 2 },
        { q: "Что значит «from time to time»?", opts: ["всегда", "никогда", "время от времени", "обычно"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: ___ do you go swimming? — Twice a week.", opts: ["How long", "How much", "How often", "How many"], ans: 2 },
        { q: "Выберите: ___ does she visit her parents? — Once a month.", opts: ["How much", "How often", "How long", "How far"], ans: 1 }
      ]},
      { vars: [
        { q: "Заполните: I ___ forget my keys. (никогда)", opts: ["always", "sometimes", "usually", "never"], ans: 3 },
        { q: "Заполните: She ___ arrives on time. (всегда)", opts: ["never", "rarely", "always", "sometimes"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите правильный порядок:", opts: ["He usually is tired.", "He is usually tired.", "Usually he tired is.", "Tired he is usually."], ans: 1 },
        { q: "Выберите правильный порядок:", opts: ["They go often to the cinema.", "They often go to the cinema.", "Often they go to cinema.", "They to the cinema go often."], ans: 1 }
      ]},
      { vars: [
        { q: "Что чаще: «often» или «usually»?", opts: ["often (чаще)", "usually (чаще)", "одинаково", "нельзя сравнить"], ans: 1 },
        { q: "Что реже: «rarely» или «sometimes»?", opts: ["sometimes (реже)", "rarely (реже)", "одинаково", "нельзя сравнить"], ans: 1 }
      ]}
    ]
  },

  // ===== 17. TIME =====
  {
    id: 17, title: "Time", desc: "Который час? o'clock, half past, quarter", difficulty: "medium",
    questions: [
      { vars: [
        { q: "Как сказать 3:00?", opts: ["three o'clock", "three hours", "three zero", "three oh"], ans: 0 },
        { q: "Как сказать 7:00?", opts: ["seven hours", "seven o'clock", "seven zero", "seven hundred"], ans: 1 }
      ]},
      { vars: [
        { q: "Как сказать 5:30?", opts: ["half to five", "half past five", "thirty five", "five and thirty"], ans: 1 },
        { q: "Как сказать 9:30?", opts: ["half to nine", "nine and half", "half past nine", "thirty nine"], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать 2:15?", opts: ["quarter to two", "quarter past two", "fifteen two", "two and quarter"], ans: 1 },
        { q: "Как сказать 6:15?", opts: ["quarter to six", "six and fifteen", "quarter past six", "fifteen six"], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать 4:45?", opts: ["quarter past four", "quarter to five", "quarter past five", "forty-five four"], ans: 1 },
        { q: "Как сказать 8:45?", opts: ["quarter past eight", "quarter to eight", "quarter to nine", "forty-five eight"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «half past eleven»?", opts: ["10:30", "11:30", "11:15", "12:30"], ans: 1 },
        { q: "Что значит «quarter to three»?", opts: ["3:15", "3:45", "2:45", "2:15"], ans: 2 }
      ]},
      { vars: [
        { q: "Как спросить «Который час?»", opts: ["How much time?", "What time is it?", "How is the time?", "When is the hour?"], ans: 1 },
        { q: "Как спросить «У тебя есть время?» (о часах)", opts: ["Do you have a watch?", "Do you have the time?", "What is your time?", "Is there time?"], ans: 1 }
      ]},
      { vars: [
        { q: "10 AM — это...", opts: ["10 вечера", "10 утра", "22:00", "полночь"], ans: 1 },
        { q: "10 PM — это...", opts: ["10 утра", "полдень", "10 вечера", "полночь"], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать 1:10?", opts: ["ten past one", "ten to one", "one ten", "ten one"], ans: 0 },
        { q: "Как сказать 3:50?", opts: ["fifty past three", "ten past four", "ten to four", "fifty three"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «noon»?", opts: ["полночь", "утро", "полдень", "вечер"], ans: 2 },
        { q: "Что значит «midnight»?", opts: ["полдень", "утро", "вечер", "полночь"], ans: 3 }
      ]},
      { vars: [
        { q: "Как сказать 12:00 дня?", opts: ["twelve o'clock midnight", "twelve o'clock noon", "twelve afternoon", "twelve hours"], ans: 1 },
        { q: "Как сказать 12:00 ночи?", opts: ["twelve noon", "twelve night", "twelve o'clock midnight", "twelve evening"], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: The meeting is ___ 3 o'clock. (предлог)", opts: ["in", "on", "at", "by"], ans: 2 },
        { q: "Выберите: I wake up ___ 7 AM. (предлог)", opts: ["in", "on", "at", "by"], ans: 2 }
      ]}
    ]
  },

  // ===== 18. DAYS OF THE WEEK =====
  {
    id: 18, title: "Days of the Week", desc: "Дни недели на английском", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: понедельник", opts: ["Tuesday", "Monday", "Wednesday", "Sunday"], ans: 1 },
        { q: "Переведите: пятница", opts: ["Thursday", "Saturday", "Friday", "Wednesday"], ans: 2 }
      ]},
      { vars: [
        { q: "Какой день идёт после Wednesday?", opts: ["Tuesday", "Friday", "Thursday", "Monday"], ans: 2 },
        { q: "Какой день идёт после Friday?", opts: ["Thursday", "Saturday", "Sunday", "Monday"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: суббота", opts: ["Sunday", "Saturday", "Friday", "Monday"], ans: 1 },
        { q: "Переведите: воскресенье", opts: ["Saturday", "Monday", "Friday", "Sunday"], ans: 3 }
      ]},
      { vars: [
        { q: "Какой предлог используем с днями недели? ___ Monday", opts: ["in", "at", "on", "by"], ans: 2 },
        { q: "Выберите правильное: I have a meeting ___ Friday.", opts: ["in", "at", "on", "by"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «Tuesday»?", opts: ["понедельник", "вторник", "среда", "четверг"], ans: 1 },
        { q: "Что значит «Thursday»?", opts: ["вторник", "среда", "четверг", "пятница"], ans: 2 }
      ]},
      { vars: [
        { q: "Как пишется «среда» по-английски?", opts: ["Wensday", "Wendsday", "Wednesday", "Wednasday"], ans: 2 },
        { q: "Как пишется «вторник» по-английски?", opts: ["Tuseday", "Tueday", "Tuesday", "Tusday"], ans: 2 }
      ]},
      { vars: [
        { q: "Первый день недели в Англии:", opts: ["Monday", "Sunday", "Saturday", "Tuesday"], ans: 1 },
        { q: "Первый рабочий день недели:", opts: ["Sunday", "Monday", "Saturday", "Tuesday"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «the day after tomorrow»?", opts: ["вчера", "позавчера", "завтра", "послезавтра"], ans: 3 },
        { q: "Что значит «the day before yesterday»?", opts: ["завтра", "послезавтра", "вчера", "позавчера"], ans: 3 }
      ]},
      { vars: [
        { q: "Выберите: We have English class ___ Mondays and Wednesdays.", opts: ["in", "at", "on", "by"], ans: 2 },
        { q: "Выберите: The shop is closed ___ Sundays.", opts: ["in", "at", "on", "by"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Я не работаю по выходным.", opts: ["I don't work on weekdays.", "I don't work on weekends.", "I don't work on holidays.", "I don't work on Mondays."], ans: 1 },
        { q: "Что означает «weekday»?", opts: ["выходной", "будний день", "праздник", "отпускной день"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «каждую среду»?", opts: ["every Wednesdays", "every Wednesday", "on every Wednesday", "all Wednesdays"], ans: 1 },
        { q: "Как будет «по четвергам»?", opts: ["every Thursdays", "in Thursdays", "on Thursdays", "at Thursdays"], ans: 2 }
      ]}
    ]
  },

  // ===== 19. DAILY ACTIONS =====
  {
    id: 19, title: "Daily Actions", desc: "get up, leave home, go to bed...", difficulty: "easy",
    questions: [
      { vars: [
        { q: "Переведите: вставать (утром)", opts: ["go to bed", "get up", "wake up", "stand up"], ans: 1 },
        { q: "Переведите: просыпаться", opts: ["get up", "wake up", "stand up", "rise up"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «to have breakfast»?", opts: ["готовить завтрак", "завтракать", "пропустить завтрак", "купить завтрак"], ans: 1 },
        { q: "Что значит «to have lunch»?", opts: ["готовить обед", "пропустить обед", "обедать", "купить обед"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: чистить зубы", opts: ["wash face", "brush teeth", "take a shower", "comb hair"], ans: 1 },
        { q: "Переведите: умываться", opts: ["brush teeth", "wash face", "take a bath", "comb hair"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «выходить из дома»?", opts: ["go home", "leave home", "come home", "stay home"], ans: 1 },
        { q: "Как будет «приходить домой»?", opts: ["go home", "leave home", "come home", "stay home"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «to go to bed»?", opts: ["встать с кровати", "лечь спать", "застелить кровать", "купить кровать"], ans: 1 },
        { q: "Что значит «to fall asleep»?", opts: ["лечь спать", "заснуть", "проснуться", "не спать"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: одеваться", opts: ["get dressed", "get undressed", "put on", "take off"], ans: 0 },
        { q: "Переведите: раздеваться", opts: ["get dressed", "get undressed", "put on", "take off"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «готовить еду»?", opts: ["eat food", "cook food", "buy food", "order food"], ans: 1 },
        { q: "Как будет «мыть посуду»?", opts: ["cook dishes", "buy dishes", "do the dishes", "break dishes"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «to take a bus»?", opts: ["купить автобус", "ехать на автобусе", "ждать автобус", "водить автобус"], ans: 1 },
        { q: "Что значит «to drive to work»?", opts: ["идти на работу", "ехать на работу (за рулём)", "бежать на работу", "лететь на работу"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: делать домашнее задание", opts: ["do homework", "make homework", "write homework", "read homework"], ans: 0 },
        { q: "Переведите: гулять с собакой", opts: ["run with the dog", "walk the dog", "play with the dog", "feed the dog"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «принимать душ»?", opts: ["have a bath", "take a shower", "wash up", "go swimming"], ans: 1 },
        { q: "Как будет «принимать ванну»?", opts: ["take a shower", "take a bath", "wash up", "go swimming"], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «to do the laundry»?", opts: ["мыть полы", "стирать бельё", "гладить одежду", "убирать комнату"], ans: 1 },
        { q: "Что значит «to tidy up»?", opts: ["стирать", "мыть посуду", "убираться / наводить порядок", "готовить"], ans: 2 }
      ]}
    ]
  },

  // ===== 20. CAFE & BREAKFAST =====
  {
    id: 20, title: "Cafe & Breakfast", desc: "Кафе, меню, столовые приборы", difficulty: "hard",
    questions: [
      { vars: [
        { q: "Как вежливо заказать в кафе?", opts: ["Give me coffee!", "I want coffee.", "Could I have a coffee, please?", "Coffee. Now."], ans: 2 },
        { q: "Как попросить меню?", opts: ["Menu!", "Could I see the menu, please?", "I want menu.", "Show menu."], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: вилка", opts: ["knife", "spoon", "fork", "plate"], ans: 2 },
        { q: "Переведите: нож", opts: ["fork", "knife", "spoon", "cup"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «napkin»?", opts: ["тарелка", "стакан", "салфетка", "поднос"], ans: 2 },
        { q: "Что такое «tray»?", opts: ["салфетка", "стакан", "тарелка", "поднос"], ans: 3 }
      ]},
      { vars: [
        { q: "Как спросить «Сколько это стоит?»", opts: ["How many is it?", "How much is it?", "What is the cost?", "How is the price?"], ans: 1 },
        { q: "Как попросить счёт?", opts: ["Give me money.", "Could I have the bill, please?", "I want to pay money.", "How much bill?"], ans: 1 }
      ]},
      { vars: [
        { q: "Что такое «scrambled eggs»?", opts: ["варёные яйца", "яичница-глазунья", "яичница-болтунья", "омлет"], ans: 2 },
        { q: "Что такое «boiled eggs»?", opts: ["яичница-болтунья", "варёные яйца", "жареные яйца", "омлет"], ans: 1 }
      ]},
      { vars: [
        { q: "Переведите: тост с маслом", opts: ["toast with cheese", "bread with butter", "toast with butter", "toast with jam"], ans: 2 },
        { q: "Переведите: каша (овсяная)", opts: ["cereal", "porridge / oatmeal", "rice", "soup"], ans: 1 }
      ]},
      { vars: [
        { q: "Как сказать: «Мне, пожалуйста, чай с молоком»?", opts: ["Tea milk please.", "I'd like tea with milk, please.", "Give me milk tea.", "Tea and milk I want."], ans: 1 },
        { q: "Как сказать: «Мне кофе без сахара»?", opts: ["Coffee no sugar.", "I'd like coffee without sugar, please.", "Give me coffee not sugar.", "Coffee I want no sugar."], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «still water»?", opts: ["горячая вода", "газированная вода", "негазированная вода", "минеральная вода"], ans: 2 },
        { q: "Что значит «sparkling water»?", opts: ["негазированная вода", "газированная вода", "горячая вода", "кипячёная вода"], ans: 1 }
      ]},
      { vars: [
        { q: "Как будет «чаевые»?", opts: ["change", "tip", "bill", "receipt"], ans: 1 },
        { q: "Как будет «чек / квитанция»?", opts: ["bill", "tip", "receipt", "change"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: официант", opts: ["chef", "waiter", "barista", "manager"], ans: 1 },
        { q: "Переведите: повар", opts: ["waiter", "barista", "chef", "manager"], ans: 2 }
      ]},
      { vars: [
        { q: "Как спросить: «Есть ли свободные столики?»", opts: ["Free tables?", "Do you have a free table?", "Table available?", "Where table?"], ans: 1 },
        { q: "Как спросить: «Можно столик на двоих?»", opts: ["Table for two!", "A table for two, please.", "Two people table.", "Give two table."], ans: 1 }
      ]},
      { vars: [
        { q: "Что значит «takeaway»?", opts: ["на месте", "доставка", "с собой (еда навынос)", "бронирование"], ans: 2 },
        { q: "Что значит «dine in»?", opts: ["с собой", "доставка", "бронирование", "есть на месте"], ans: 3 }
      ]}
    ]
  },

  // ===== 21. LIKES & PREFERENCES =====
  {
    id: 21, title: "Likes & Preferences", desc: "I prefer, I would like, I would choose", difficulty: "hard",
    questions: [
      { vars: [
        { q: "Переведите: Мне нравится читать.", opts: ["I like read.", "I like reading.", "I like to reading.", "I likes reading."], ans: 1 },
        { q: "Переведите: Ей нравится плавать.", opts: ["She like swimming.", "She likes swim.", "She likes swimming.", "She is like swimming."], ans: 2 }
      ]},
      { vars: [
        { q: "Как сказать «Я бы хотел чай»?", opts: ["I want tea.", "I would like tea.", "I am like tea.", "I will tea."], ans: 1 },
        { q: "Как сказать «Я бы хотела кофе»?", opts: ["I want coffee.", "I am wanting coffee.", "I'd like coffee.", "I will coffee."], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: I prefer tea ___ coffee.", opts: ["than", "from", "to", "over"], ans: 2 },
        { q: "Выберите: She prefers walking ___ driving.", opts: ["than", "from", "to", "over"], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «I don't mind»?", opts: ["Мне не нравится", "Мне всё равно / я не против", "Я отказываюсь", "Я ненавижу"], ans: 1 },
        { q: "Что значит «I can't stand»?", opts: ["Я обожаю", "Мне нравится", "Я не могу стоять", "Я терпеть не могу"], ans: 3 }
      ]},
      { vars: [
        { q: "Какое предложение означает «Я обожаю»?", opts: ["I hate", "I don't mind", "I love / I'm crazy about", "I dislike"], ans: 2 },
        { q: "Какое предложение означает «Я терпеть не могу»?", opts: ["I enjoy", "I hate / I can't stand", "I prefer", "I love"], ans: 1 }
      ]},
      { vars: [
        { q: "Выберите: ___ you like to come with us?", opts: ["Do", "Would", "Are", "Have"], ans: 1 },
        { q: "Выберите: ___ you like chocolate? (вообще)", opts: ["Would", "Are", "Do", "Have"], ans: 2 }
      ]},
      { vars: [
        { q: "В чём разница между «Do you like» и «Would you like»?", opts: ["Нет разницы", "Do you like = вообще; Would you like = сейчас/предложение", "Do you like = сейчас; Would you like = вообще", "Оба о прошлом"], ans: 1 },
        { q: "«I'd like» — это сокращение от:", opts: ["I did like", "I had like", "I would like", "I could like"], ans: 2 }
      ]},
      { vars: [
        { q: "Переведите: Я предпочитаю чай.", opts: ["I like tea.", "I prefer tea.", "I want tea.", "I need tea."], ans: 1 },
        { q: "Переведите: Я бы выбрал рыбу.", opts: ["I choose fish.", "I will choose fish.", "I would choose fish.", "I am choosing fish."], ans: 2 }
      ]},
      { vars: [
        { q: "Выберите: She enjoys ___ music. (слушать)", opts: ["listen", "to listen", "listening to", "listen to"], ans: 2 },
        { q: "Выберите: He enjoys ___ books. (читать)", opts: ["read", "to read", "reading", "reads"], ans: 2 }
      ]},
      { vars: [
        { q: "Как ответить на: «Do you like pizza?» — Да, очень.", opts: ["Yes, I do. I love it!", "Yes, I would.", "Yes, I am.", "Yes, I have."], ans: 0 },
        { q: "Как ответить на: «Would you like some tea?» — Да, пожалуйста.", opts: ["Yes, I like.", "Yes, I do.", "Yes, please.", "Yes, I have."], ans: 2 }
      ]},
      { vars: [
        { q: "Что значит «I'd rather stay home»?", opts: ["Я должен остаться дома", "Я лучше останусь дома", "Я люблю быть дома", "Мне нравится дом"], ans: 1 },
        { q: "Что значит «I'd rather not go»?", opts: ["Я не пойду", "Я должен не идти", "Я лучше не пойду", "Мне нельзя идти"], ans: 2 }
      ]},
      { vars: [
        { q: "Расставьте от любви к ненависти: love > ___ > don't mind > dislike > hate", opts: ["prefer", "like", "enjoy", "want"], ans: 1 },
        { q: "Что слабее «hate», но сильнее «don't mind»?", opts: ["love", "like", "dislike", "enjoy"], ans: 2 }
      ]}
    ]
  }
];

// ===== Cookie Helper Functions =====
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
}
function getCookie(name) {
  const v = document.cookie.split('; ').find(r => r.startsWith(name + '='));
  if (!v) return null;
  try { return JSON.parse(decodeURIComponent(v.split('=').slice(1).join('='))); } catch { return null; }
}
function getBestResults() { return getCookie('eng_best') || {}; }
function saveBest(testId, pct, score, total) {
  const best = getBestResults();
  if (!best[testId] || pct > best[testId].pct) {
    best[testId] = { pct, score, total, date: new Date().toLocaleDateString('ru') };
  }
  setCookie('eng_best', best, 365);
}
