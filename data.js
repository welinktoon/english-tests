const tests = [
  {
    id: 1, title: "Possessive Case", desc: "Притяжательный падеж — 's и '",
    questions: [
      { q: "Выберите правильный вариант: ___ dresses (girl)", opts: ["girl's", "girls'", "girls", "girl"], ans: 0 },
      { q: "Выберите правильный вариант: my ___ ideas (friends)", opts: ["friend's", "friends'", "friends's", "friend"], ans: 1 },
      { q: "Как правильно: игрушки детей?", opts: ["children's toys", "childrens' toys", "childrens toys", "children toys"], ans: 0 },
      { q: "Kate and Jim's house означает:", opts: ["Общий дом Кейт и Джима", "Дом Кейт и отдельный дом Джима", "Дом рядом с Кейт и Джимом", "Дом без хозяев"], ans: 0 },
      { q: "Как правильно: комната Джеймса?", opts: ["James's room / James' room", "Jame's room", "James room", "Jamess' room"], ans: 0 },
      { q: "___ suits (men)", opts: ["men's", "mens'", "mens", "men"], ans: 0 },
      { q: "___ secrets (women)", opts: ["women's", "womens'", "womens", "women"], ans: 0 },
    ]
  },
  {
    id: 2, title: "Describing People", desc: "Внешность и описание людей",
    questions: [
      { q: "She ___ long dark hair.", opts: ["has", "have", "is", "are"], ans: 0 },
      { q: "He ___ tall and slim.", opts: ["is", "has", "have", "are"], ans: 0 },
      { q: "Переведите: у неё голубые глаза", opts: ["She has blue eyes", "She is blue eyes", "She have blue eyes", "Her blue eyes"], ans: 0 },
      { q: "They ___ very friendly.", opts: ["are", "is", "has", "have"], ans: 0 },
      { q: "Как спросить 'Как он выглядит?'", opts: ["What does he look like?", "How does he look like?", "What is he look?", "How he looks?"], ans: 0 },
    ]
  },
  {
    id: 3, title: "Clothes", desc: "Одежда — названия предметов",
    questions: [
      { q: "Переведите: платье", opts: ["dress", "skirt", "shirt", "blouse"], ans: 0 },
      { q: "Переведите: джинсы", opts: ["jeans", "trousers", "shorts", "pants"], ans: 0 },
      { q: "Переведите: пальто", opts: ["coat", "jacket", "sweater", "vest"], ans: 0 },
      { q: "Что такое 'sweater'?", opts: ["свитер", "рубашка", "шорты", "юбка"], ans: 0 },
      { q: "Что такое 'skirt'?", opts: ["юбка", "платье", "шарф", "брюки"], ans: 0 },
      { q: "Переведите: футболка", opts: ["T-shirt", "shirt", "top", "vest"], ans: 0 },
    ]
  },
  {
    id: 4, title: "Have / Has", desc: "Глагол иметь — have, has, вопросы",
    questions: [
      { q: "I ___ a small kitchen.", opts: ["have", "has", "am", "is"], ans: 0 },
      { q: "She ___ two cats.", opts: ["has", "have", "is", "are"], ans: 0 },
      { q: "___ you have a car?", opts: ["Do", "Does", "Are", "Is"], ans: 0 },
      { q: "He ___ a big house.", opts: ["doesn't have", "don't have", "hasn't", "haven't"], ans: 0 },
      { q: "___ she have Italian speakers in the office?", opts: ["Does", "Do", "Is", "Has"], ans: 0 },
    ]
  },
  {
    id: 5, title: "Desk Objects", desc: "Предметы на столе и в офисе",
    questions: [
      { q: "Что такое 'notebook'?", opts: ["тетрадь/блокнот", "ноутбук", "книга", "папка"], ans: 0 },
      { q: "Переведите: ручка", opts: ["pen", "pencil", "pin", "pan"], ans: 0 },
      { q: "Что такое 'sticky notes'?", opts: ["стикеры", "наклейки", "закладки", "ярлыки"], ans: 0 },
      { q: "There ___ a computer on my desk.", opts: ["is", "are", "have", "has"], ans: 0 },
      { q: "There ___ two pens on the table.", opts: ["are", "is", "have", "has"], ans: 0 },
    ]
  },
  {
    id: 6, title: "Communication Phrases", desc: "Фразы для общения — переспросить, уточнить",
    questions: [
      { q: "Как переспросить вежливо?", opts: ["Sorry?", "What?", "Again!", "Repeat!"], ans: 0 },
      { q: "Как попросить повторить?", opts: ["Can you repeat that?", "Say again!", "One more!", "Do repeat!"], ans: 0 },
      { q: "Переведите: я не понимаю", opts: ["I don't understand", "I not understand", "I doesn't understand", "I am not understand"], ans: 0 },
      { q: "Как сказать 'помедленнее, пожалуйста'?", opts: ["Can you speak more slowly?", "Speak slow!", "More slowly!", "Talk less fast!"], ans: 0 },
      { q: "'What does ___ mean?' — вставьте пропущенное", opts: ["this", "it does", "is that", "that is"], ans: 0 },
    ]
  },
  {
    id: 7, title: "Daily Routine & Habits", desc: "Распорядок дня, привычки, Present Simple",
    questions: [
      { q: "She ___ coffee every day.", opts: ["drinks", "drink", "is drinking", "drinked"], ans: 0 },
      { q: "I never ___ breakfast.", opts: ["eat", "eats", "eating", "am eat"], ans: 0 },
      { q: "He ___ sports on weekends.", opts: ["plays", "play", "playing", "is play"], ans: 0 },
      { q: "Переведите: она всегда голодная", opts: ["She is always hungry", "She always hungry", "She have always hungry", "She always is hungry"], ans: 0 },
      { q: "___ you watch TV every evening?", opts: ["Do", "Does", "Are", "Is"], ans: 0 },
    ]
  },
  {
    id: 8, title: "Possessive with Names", desc: "Притяжательный падеж с именами людей",
    questions: [
      { q: "Ruby is ___ wife. (David)", opts: ["David's", "Davids", "Davids'", "David"], ans: 0 },
      { q: "Max is ___ boyfriend. (Tatiana)", opts: ["Tatiana's", "Tatianas", "Tatianas'", "Tatiana"], ans: 0 },
      { q: "This is ___ car. (Rick)", opts: ["Rick's", "Ricks", "Ricks'", "Rick"], ans: 0 },
      { q: "Janette is ___ sister. (Max)", opts: ["Max's", "Maxs", "Max'", "Maxs'"], ans: 0 },
      { q: "___ house is very big. (The Smiths)", opts: ["The Smiths'", "The Smith's", "The Smiths", "Smith's"], ans: 0 },
    ]
  },
  {
    id: 9, title: "Food & Drinks", desc: "Еда, напитки, фрукты, овощи",
    questions: [
      { q: "Переведите: яблоко", opts: ["apple", "orange", "apricot", "avocado"], ans: 0 },
      { q: "Что такое 'carrot'?", opts: ["морковь", "капуста", "картошка", "кабачок"], ans: 0 },
      { q: "Переведите: банан", opts: ["banana", "mango", "lemon", "melon"], ans: 0 },
      { q: "Что такое 'potato'?", opts: ["картошка", "помидор", "морковь", "лук"], ans: 0 },
      { q: "Переведите: сок", opts: ["juice", "water", "milk", "tea"], ans: 0 },
      { q: "Что значит 'tasty'?", opts: ["вкусный", "солёный", "сладкий", "острый"], ans: 0 },
      { q: "Что такое 'sea buckthorn'?", opts: ["облепиха", "морская капуста", "морской ёж", "шиповник"], ans: 0 },
    ]
  },
  {
    id: 10, title: "Feelings & Mood", desc: "Чувства, настроение, эмоции",
    questions: [
      { q: "How are you ___?", opts: ["feeling", "feel", "felt", "feels"], ans: 0 },
      { q: "Переведите: я счастлива", opts: ["I am happy", "I have happy", "I am happily", "I happy"], ans: 0 },
      { q: "Что значит 'upset'?", opts: ["расстроенный", "счастливый", "уставший", "злой"], ans: 0 },
      { q: "Что значит 'tired'?", opts: ["уставший", "голодный", "скучающий", "грустный"], ans: 0 },
      { q: "Что значит 'hungry'?", opts: ["голодный", "злой", "весёлый", "сонный"], ans: 0 },
    ]
  },
  {
    id: 11, title: "Adverbs of Frequency", desc: "always, usually, sometimes, often, never",
    questions: [
      { q: "Где стоит наречие? 'I ___ have eggs for breakfast.'", opts: ["always", "always I", "have always", "I have"], ans: 0 },
      { q: "Расставьте: she / usually / gets up / early", opts: ["She usually gets up early", "She gets usually up early", "Usually she gets up early", "She gets up usually early"], ans: 0 },
      { q: "Что значит 'never'?", opts: ["никогда", "иногда", "всегда", "часто"], ans: 0 },
      { q: "Что значит 'sometimes'?", opts: ["иногда", "всегда", "никогда", "часто"], ans: 0 },
      { q: "I ___ drink coffee. (никогда)", opts: ["never", "don't never", "ever", "sometimes not"], ans: 0 },
      { q: "He is ___ late for work.", opts: ["often", "oftens", "oftenly", "oft"], ans: 0 },
    ]
  },
  {
    id: 12, title: "Time", desc: "Который час? o'clock, half past, quarter",
    questions: [
      { q: "7:00 =", opts: ["seven o'clock", "seven hours", "seven zero", "seven past"], ans: 0 },
      { q: "7:30 =", opts: ["half past seven", "seven and half", "half seven past", "thirty seven"], ans: 0 },
      { q: "7:15 =", opts: ["quarter past seven", "quarter to seven", "seven fifteen past", "seven quarter"], ans: 0 },
      { q: "6:45 =", opts: ["quarter to seven", "quarter past seven", "half to seven", "six forty-five past"], ans: 0 },
      { q: "Что значит A.M.?", opts: ["до полудня", "после полудня", "полночь", "полдень"], ans: 0 },
      { q: "Что значит P.M.?", opts: ["после полудня", "до полудня", "полночь", "утро"], ans: 0 },
    ]
  },
  {
    id: 13, title: "Days of the Week", desc: "Дни недели на английском",
    questions: [
      { q: "Переведите: понедельник", opts: ["Monday", "Tuesday", "Sunday", "Friday"], ans: 0 },
      { q: "Переведите: среда", opts: ["Wednesday", "Thursday", "Tuesday", "Saturday"], ans: 0 },
      { q: "Переведите: пятница", opts: ["Friday", "Thursday", "Monday", "Sunday"], ans: 0 },
      { q: "Какой день идёт после Thursday?", opts: ["Friday", "Wednesday", "Saturday", "Sunday"], ans: 0 },
      { q: "Как сказать 'в понедельник'?", opts: ["on Monday", "in Monday", "at Monday", "to Monday"], ans: 0 },
      { q: "Переведите: воскресенье", opts: ["Sunday", "Saturday", "Monday", "Tuesday"], ans: 0 },
    ]
  },
  {
    id: 14, title: "Daily Actions", desc: "get up, leave home, have lunch, go to bed...",
    questions: [
      { q: "Переведите: вставать", opts: ["get up", "stand up", "wake up", "rise up"], ans: 0 },
      { q: "Переведите: уходить из дома", opts: ["leave home", "go home", "exit home", "left home"], ans: 0 },
      { q: "Что значит 'have dinner'?", opts: ["ужинать", "обедать", "завтракать", "перекусить"], ans: 0 },
      { q: "Что значит 'go to bed'?", opts: ["ложиться спать", "идти в кровать", "уходить спать", "засыпать"], ans: 0 },
      { q: "Переведите: готовить ужин", opts: ["cook dinner", "do dinner", "make lunch", "prepare eat"], ans: 0 },
      { q: "Что значит 'watch TV'?", opts: ["смотреть телевизор", "включить ТВ", "выключить ТВ", "купить ТВ"], ans: 0 },
    ]
  },
  {
    id: 15, title: "Cafe & Breakfast", desc: "Кафе, меню, столовые приборы",
    questions: [
      { q: "Что такое 'fork'?", opts: ["вилка", "нож", "ложка", "тарелка"], ans: 0 },
      { q: "Что такое 'knife'?", opts: ["нож", "вилка", "ложка", "стакан"], ans: 0 },
      { q: "Что такое 'chopsticks'?", opts: ["палочки для еды", "зубочистки", "шпажки", "спички"], ans: 0 },
      { q: "Что такое 'bowl'?", opts: ["миска", "тарелка", "чашка", "блюдце"], ans: 0 },
      { q: "Как произносится 'croissant'?", opts: ["/kwɑːsɒ̃/", "/kroɪsænt/", "/kresant/", "/kruasant/"], ans: 0 },
      { q: "Переведите: чашка кофе", opts: ["a cup of coffee", "a glass of coffee", "a mug of coffee", "a coffee cup"], ans: 0 },
    ]
  },
  {
    id: 16, title: "Likes & Preferences", desc: "I prefer, I would like, I would choose",
    questions: [
      { q: "I ___ coffee to tea.", opts: ["prefer", "would", "like more", "choose"], ans: 0 },
      { q: "Переведите: я хотела бы...", opts: ["I would like to...", "I want like...", "I like would...", "I am liking..."], ans: 0 },
      { q: "I would ___ pizza.", opts: ["choose", "choosing", "chose", "choosed"], ans: 0 },
      { q: "What's your ___ meal of the day?", opts: ["favourite", "favouring", "most liked", "best liked"], ans: 0 },
      { q: "Do you ___ go to cafes?", opts: ["often", "much", "many", "lot"], ans: 0 },
    ]
  }
];

// === COOKIES ===
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
