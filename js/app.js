// All translated text lives here. Add matching keys in both languages.
const translations = {
  lv: {
    pastelThemes:'Pasteļtoņi', neutralThemes:'Balta un melna', themeChoice:'Krāsas', themeTitle:'Izvēlies savu noskaņu', themeHint:'Izvēlies vienu no desmit pasteļtoņiem vai neitrālu tēmu zemāk.', treatsLabel:'Par uzdevumiem', foxStart:'Žuļiks arī mācās kopā ar tevi!', translationHint:'Vidējais klikšķis — tulkojums uz 10 sekundēm.', chooseClass:'Izvēlies klasi', classHint:'Katram mācību gadam — savs mazais ceļš.', backClasses:'← Visas klases', backTopics:'← Tēmas', soon:'Tēmas vēl tiek gatavotas.', available:'Atvērt tēmas', chooseTopic:'Izvēlies tēmu',
    yourSpace:'Tava mācību vieta', school:'Skola', math:'Matemātika', grade:'6. klase', fractions:'Daļas',
    studyBuddy:'TAVA MĀCĪBU DRAUDZENE', petName:'Фенечка', petPlaceholder:'Pagaidām — zaķīša prototips',
    petStart:'Mācīsimies kopā! Soli pa solim tev izdosies. ♡', petDone:'Lieliski! Tu esi apguvusi pirmo tēmu. 🥕',
    theme:'Lavandas tēma', littleSteps:'MAZI SOĻI, LIELI ATKLĀJUMI', welcome:'Prieks tevi satikt!',
    welcomeText:'Izvēlies klasi un turpini savu mācību ceļu. Katrs mazais solis ir svarīgs.', progress:'Tavs progress',
    firstTopic:'01 · PIRMĀ TĒMA', subtitle:'Veselais un tā daļas — sāksim ar vienkāršu piemēru.',
    info:'Šis ir pirmais prototips: viena tēma 6. klasei. Izlasi skaidrojumu un atzīmē tēmu kā apgūtu. Progress saglabājas šīs pārlūkprogrammas atmiņā.',
    whatIsFraction:'Kas ir daļa?', explanation:'Daļa apraksta vienu vai vairākas vienādas veselā daļas. Piemēram, sadalām šokolādi četrās vienādās daļās un paņemam trīs: tās ir 3/4 šokolādes.',
    numerator:'Skaitītājs', numeratorText:'augšējais skaitlis; cik daļu paņemts.', denominator:'Saucējs', denominatorText:'apakšējais skaitlis; cik vienādās daļās sadalīts veselais.',
    example:'APLŪKO PIEMĒRU', exampleText:'Iekrāsotas trīs no četrām vienādām daļām.', visual:'Trīs no četrām vienādām daļām ir iekrāsotas',
    remember:'Atceries', rememberText:'Daļām jābūt vienādām. Saucējs nevar būt nulle.', complete:'Esmu izlasījusi un sapratusi šo tēmu', saved:'Tavs progress tiek saglabāts automātiski.', footer:'Mācību dārzs · Pirmais prototips · Mācies savā ritmā',
    menu:'Atvērt vai aizvērt izvēlni', information:'Informācija par tēmu', storage:'Pārlūkprogramma neļauj saglabāt datus. Progress darbosies tikai līdz lapas aizvēršanai.'
  },
  ru: {
    pastelThemes:'Пастельные оттенки', neutralThemes:'Белый и чёрный', themeChoice:'Цвета', themeTitle:'Выбери своё настроение', themeHint:'Выбери один из десяти пастельных оттенков или нейтральную тему ниже.', treatsLabel:'За задания', foxStart:'Жулик тоже учится вместе с тобой!', translationHint:'Средний клик — перевод на 10 секунд.', chooseClass:'Выбери класс', classHint:'У каждого учебного года — свой маленький путь.', backClasses:'← Все классы', backTopics:'← Темы', soon:'Темы ещё готовятся.', available:'Открыть темы', chooseTopic:'Выбери тему',
    yourSpace:'Твоё место для учёбы', school:'Школа', math:'Математика', grade:'6 класс', fractions:'Дроби',
    studyBuddy:'ТВОЯ ПОДРУГА В УЧЁБЕ', petName:'Фенечка', petPlaceholder:'Пока — заглушка кролика',
    petStart:'Давай учиться вместе! Шаг за шагом всё получится. ♡', petDone:'Здорово! Ты прошла первую тему. 🥕',
    theme:'Лавандовая тема', littleSteps:'МАЛЕНЬКИЕ ШАГИ, БОЛЬШИЕ ОТКРЫТИЯ', welcome:'Рада тебя видеть!',
    welcomeText:'Выбери класс и продолжай свой учебный путь. Каждый маленький шаг важен.', progress:'Твой прогресс',
    firstTopic:'01 · ПЕРВАЯ ТЕМА', subtitle:'Целое и его части — начнём с простого примера.',
    info:'Это первый прототип: одна тема для 6 класса. Прочитай объяснение и отметь тему как пройденную. Прогресс сохраняется в памяти этого браузера.',
    whatIsFraction:'Что такое дробь?', explanation:'Дробь описывает одну или несколько равных частей целого. Например, разделим шоколад на четыре равные части и возьмём три: это 3/4 шоколада.',
    numerator:'Числитель', numeratorText:'верхнее число; сколько частей взяли.', denominator:'Знаменатель', denominatorText:'нижнее число; на сколько равных частей разделили целое.',
    example:'ПОСМОТРИ НА ПРИМЕР', exampleText:'Закрашены три из четырёх равных частей.', visual:'Три из четырёх равных частей закрашены',
    remember:'Запомни', rememberText:'Части должны быть равными. Знаменатель не может быть нулём.', complete:'Я прочитала и поняла эту тему', saved:'Твой прогресс сохраняется автоматически.', footer:'Учебный сад · Первый прототип · Учись в своём ритме',
    menu:'Открыть или закрыть меню', information:'Информация о теме', storage:'Браузер не разрешает сохранять данные. Прогресс будет работать только до закрытия страницы.'
  }
};
Object.assign(translations.lv, { practiceTitle:'Mazs uzdevums', practiceQuestion:'Šokolāde ir sadalīta 4 vienādās daļās. Tu paņem 3 daļas. Kāda daļa ir paņemta?', answerLabel:'Tava atbilde', checkAnswer:'Pārbaudīt', correct:'Pareizi! Draugiem piešķirts viens kopīgs kārums.', alreadyRewarded:'Pareizi! Kārums par šo uzdevumu jau saņemts.', incorrect:'Pamēģini vēlreiz: skaitītājs rāda paņemto daļu skaitu.' });
Object.assign(translations.ru, { practiceTitle:'Небольшое задание', practiceQuestion:'Шоколад разделён на 4 равные части. Ты берёшь 3 части. Какая доля взята?', answerLabel:'Твой ответ', checkAnswer:'Проверить', correct:'Верно! Друзья получили одну общую вкусняшку.', alreadyRewarded:'Верно! Вкусняшка за это задание уже получена.', incorrect:'Попробуй ещё раз: числитель показывает число взятых частей.' });

// Storage keeps the old key so existing lesson progress survives this update.
const STORAGE_KEY = 'learning-garden-v1';
let state = { completed: false, theme: 'lavender', treats: 0, rewarded: false };
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved) {
    state.completed = saved.completed === true;
    state.theme = typeof saved.theme === 'string' ? saved.theme : 'lavender';
    state.treats = Number.isInteger(saved.treats) && saved.treats >= 0 ? saved.treats : 0;
    state.rewarded = saved.rewarded === true;
  }
} catch (error) { storageAvailable = false; }
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { storageAvailable = false; }
}

// Ten pastel palettes, then two neutral palettes in their own section.
const themes = [
  ['lavender','Rozā lavanda','#eee0ef','#fcf7fc','#936b9c'],
  ['sky','Zils sarma','#dce9f5','#f6faff','#527ba2'],
  ['lilac','Gaiša malva','#eadfee','#fcf8fd','#94739f'],
  ['wheat','Kvieši','#eee2bd','#fdfaf1','#91773c'],
  ['mint','Gaiša piparmētra','#d8eee2','#f4fbf7','#517f68'],
  ['cream','Krēmkrāsa','#f2ead7','#fffdf6','#8b7852'],
  ['aqua','Gaišs tirkīzs','#d5ecec','#f4fcfc','#4f8286'],
  ['salmon','Laškrāsa','#f3dcd6','#fff8f6','#a4695d'],
  ['lime','Gaišs dzeltenzaļš','#e9efcf','#fbfdf4','#748347'],
  ['caramel','Gaiša karamele','#efdfcc','#fdf9f4','#9a744c'],
  ['white','Balta','#f1f1f3','#ffffff','#60616c'],
  ['dark','Melna','#252633','#181922','#c4b6df']
];
// Russian palette names appear with the same temporary sentence translation.
const themeNamesRu = ['Розово-лавандовый','Синий иней','Светлая мальва','Пшеничный','Светло-мятный','Сливочный','Светло-бирюзовый','Лососевый','Очень светлый жёлто-зелёный','Светло-карамельный','Белый','Чёрный'];
function progressColor(number) {
  // Progress uses the current theme's accent instead of a fixed red/green palette.
  const accentShare = 65 + classProgress(number) * .35;
  return `color-mix(in srgb, var(--purple) ${accentShare}%, var(--muted))`;
}

function applyTheme() {
  const theme = themes.find(item => item[0] === state.theme) || themes[0];
  state.theme = theme[0];
  document.body.dataset.theme = theme[0];
  const style = document.documentElement.style;
  style.setProperty('--sidebar', theme[2]);
  style.setProperty('--background', theme[3]);
  style.setProperty('--purple', theme[4]);
  const dark = theme[0] === 'dark';
  style.setProperty('--text', dark ? '#f1edf8' : '#373442');
  style.setProperty('--muted', dark ? '#b8b3c4' : '#77717f');
  style.setProperty('--line', dark ? '#41414f' : '#e7e1e9');
  style.setProperty('--white', dark ? '#292a37' : '#ffffff');
  document.querySelectorAll('[data-theme-option]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeOption === state.theme)));
}
function buildThemes() {
  themes.forEach((theme, index) => {
    const button = document.createElement('button');
    button.className = 'theme-option';
    button.dataset.themeOption = theme[0];
    button.innerHTML = `<span class="theme-swatch" style="background:${theme[2]};border-color:${theme[4]}"></span>`;
    const name = document.createElement('strong');
    putTranslatedText(name, theme[1], themeNamesRu[index]);
    button.append(name);
    button.addEventListener('click', () => { state.theme = theme[0]; applyTheme(); saveState(); document.querySelector('#themeDialog').close(); });
    document.querySelector(index < 10 ? '#themeOptions' : '#neutralThemeOptions').append(button);
  });
}

// Each sentence receives its own span, so translating one never changes its neighbours.
const translationTimers = new Map();
function putTranslatedText(element, lv, ru) {
  element.replaceChildren();
  const split = text => text.split(/(?<=[.!?])\s+(?=[A-ZĀČĒĢĪĶĻŅŠŪŽА-ЯЁ])/).map((part, index, parts) => part + (index < parts.length - 1 ? ' ' : ''));
  const original = split(lv);
  const translated = split(ru);
  original.forEach((sentence, index) => {
    const span = document.createElement('span');
    span.className = 'translated-sentence';
    span.textContent = sentence;
    span.dataset.lv = sentence;
    span.dataset.ru = translated[index] || ru;
    span.title = translations.lv.translationHint;
    element.append(span);
  });
}
function translateSentence(span) {
  if (translationTimers.has(span)) clearTimeout(translationTimers.get(span));
  span.textContent = span.dataset.ru;
  span.lang = 'ru';
  span.classList.add('temporary-translation');
  translationTimers.set(span, setTimeout(() => {
    span.textContent = span.dataset.lv;
    span.lang = 'lv';
    span.classList.remove('temporary-translation');
    translationTimers.delete(span);
  }, 10000));
}
document.addEventListener('mousedown', event => {
  if (event.button === 1 && event.target.closest('.translated-sentence')) event.preventDefault();
});
document.addEventListener('auxclick', event => {
  if (event.button !== 1) return;
  const sentence = event.target.closest('.translated-sentence');
  if (sentence) { event.preventDefault(); translateSentence(sentence); }
});

// On phones, hold a sentence for 550 ms to translate it.
// Moving a finger cancels the hold so normal scrolling stays comfortable.
let touchHold = null;
let touchStart = null;
let suppressTouchClickUntil = 0;
function cancelTouchHold() {
  if (touchHold !== null) clearTimeout(touchHold);
  touchHold = null;
  touchStart = null;
}
document.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch') return;
  const sentence = event.target.closest('.translated-sentence');
  if (!sentence) return;
  cancelTouchHold();
  touchStart = { x: event.clientX, y: event.clientY };
  touchHold = setTimeout(() => {
    translateSentence(sentence);
    suppressTouchClickUntil = Date.now() + 800;
    touchHold = null;
  }, 550);
});
document.addEventListener('pointermove', event => {
  if (touchStart && Math.hypot(event.clientX - touchStart.x, event.clientY - touchStart.y) > 10) cancelTouchHold();
});
document.addEventListener('pointerup', cancelTouchHold);
document.addEventListener('pointercancel', cancelTouchHold);
document.addEventListener('click', event => {
  if (Date.now() < suppressTouchClickUntil) { event.preventDefault(); event.stopImmediatePropagation(); }
}, true);
document.addEventListener('contextmenu', event => {
  if (window.matchMedia('(pointer: coarse)').matches && event.target.closest('.translated-sentence')) event.preventDefault();
});

let selectedClass = 6;
// Twelve distinct SVG silhouettes. Text is a separate layer and never rotates.
const shapes = [
  '<circle cx="50" cy="50" r="42"/>',
  '<rect x="10" y="10" width="80" height="80" rx="8"/>',
  '<polygon points="50,5 95,50 50,95 5,50"/>',
  '<polygon points="50,5 96,90 4,90"/>',
  '<polygon points="50,5 94,37 77,90 23,90 6,37"/>',
  '<polygon points="27,9 73,9 96,50 73,91 27,91 4,50"/>',
  '<polygon points="50,5 85,22 94,61 70,92 30,92 6,61 15,22"/>',
  '<polygon points="30,7 70,7 93,30 93,70 70,93 30,93 7,70 7,30"/>',
  '<polygon points="50,4 63,33 95,36 71,58 79,90 50,73 21,90 29,58 5,36 37,33"/>',
  '<path d="M50 91 C38 79 7 61 7 34 C7 8 36 3 50 24 C64 3 93 8 93 34 C93 61 62 79 50 91Z"/>',
  '<path d="M50 8 C63 -1 76 9 73 25 C91 19 103 37 86 50 C103 63 91 81 73 75 C76 91 63 101 50 92 C37 101 24 91 27 75 C9 81 -3 63 14 50 C-3 37 9 19 27 25 C24 9 37 -1 50 8Z"/>',
  '<path d="M14 10 H86 V48 C86 69 71 83 50 95 C29 83 14 69 14 48Z"/>'
];
function className(number) { return `${number}. klase`; }
function classProgress(number) { return number === 6 && state.completed ? 100 : 0; }
function progressDetails(number) {
  const total = number === 6 ? 1 : 0;
  const done = number === 6 && state.completed ? 1 : 0;
  document.querySelector('#progressTitle').textContent = className(number);
  const message = document.querySelector('#progressCount');
  putTranslatedText(message, `${done} no ${total} tēmām apgūtas.${total === 0 ? ' Tēmas vēl tiek gatavotas.' : ''}`, `Пройдено ${done} из ${total} тем.${total === 0 ? ' Темы ещё готовятся.' : ''}`);
  const bar = document.querySelector('#detailProgress');
  bar.max = total || 1;
  bar.value = done;
  bar.style.setProperty('--progress-color', progressColor(number));
  document.querySelector('#progressDialog').showModal();
}
function addProgressShape(container, number) {
  const shape = document.createElement('button');
  shape.className = 'shape progress-shape';
  shape.innerHTML = `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">${shapes[number - 1]}</svg><span>${classProgress(number)}%</span>`;
  shape.style.setProperty('--progress-color', progressColor(number));
  shape.setAttribute('aria-label', `${className(number)}: ${classProgress(number)}%. Progresa informācija`);
  shape.title = 'Labais klikšķis — progresa informācija';
  shape.addEventListener('contextmenu', event => { event.preventDefault(); progressDetails(number); });
  // Keyboard and touch users can open the same details with a regular activation.
  shape.addEventListener('click', () => progressDetails(number));
  container.append(shape);
}
function renderClasses() {
  const container = document.querySelector('#classCards');
  container.replaceChildren();
  for (let number = 1; number <= 12; number++) {
    const card = document.createElement('div');
    card.className = 'class-card';
    const button = document.createElement('button');
    button.className = 'class-open';
    const title = document.createElement('strong');
    putTranslatedText(title, className(number), `${number} класс`);
    const hint = document.createElement('small');
    const key = number === 6 ? 'available' : 'soon';
    putTranslatedText(hint, translations.lv[key], translations.ru[key]);
    button.append(title, hint);
    button.addEventListener('click', () => { selectedClass = number; showView('topic'); });
    card.append(button);
    addProgressShape(card, number);
    container.append(card);
  }
}
function renderTopics() {
  putTranslatedText(document.querySelector('#selectedClassTitle'), `${className(selectedClass)} · ${translations.lv.chooseTopic}`, `${selectedClass} класс · ${translations.ru.chooseTopic}`);
  const container = document.querySelector('#topicCards');
  container.replaceChildren();
  if (selectedClass !== 6) {
    const message = document.createElement('p');
    message.className = 'empty-topics';
    putTranslatedText(message, translations.lv.soon, translations.ru.soon);
    container.append(message);
    return;
  }
  const card = document.createElement('div');
  card.className = 'class-card';
  const button = document.createElement('button');
  button.className = 'class-open';
  putTranslatedText(button, translations.lv.fractions, translations.ru.fractions);
  button.addEventListener('click', () => showView('lesson'));
  card.append(button);
  addProgressShape(card, 6);
  container.append(card);
}
function showView(view) {
  ['class','topic','lesson'].forEach(name => document.querySelector(`#${name}View`).hidden = name !== view);
  renderTopics();
  const target = document.querySelector(view === 'class' ? '#classTitle' : view === 'topic' ? '#selectedClassTitle' : '#lesson');
  target.setAttribute('tabindex', '-1'); target.focus();
}
function render() {
  document.documentElement.lang = 'lv';
  document.title = 'Matemātika · Фенечка un Жулик';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    putTranslatedText(element, translations.lv[key], translations.ru[key]);
  });
  document.querySelector('#completed').checked = state.completed;
  renderClasses(); renderTopics();
  const key = state.completed ? 'petDone' : 'petStart';
  putTranslatedText(document.querySelector('#petMessage'), translations.lv[key], translations.ru[key]);
  document.querySelector('#treatCount').textContent = state.treats;
  document.querySelector('#fractionVisual').setAttribute('aria-label', translations.lv.visual);
  const notice = document.querySelector('#storageNotice');
  notice.hidden = storageAvailable;
  putTranslatedText(notice, translations.lv.storage, translations.ru.storage);
}
document.querySelector('#completed').addEventListener('change', event => { state.completed = event.target.checked; saveState(); render(); });
document.querySelector('#practiceForm').addEventListener('submit', event => {
  event.preventDefault();
  const answer = document.querySelector('#practiceAnswer').value.replace(/\s/g, '').replace(',', '.');
  let key = 'incorrect';
  if (answer === '3/4' || answer === '0.75') {
    key = state.rewarded ? 'alreadyRewarded' : 'correct';
    if (!state.rewarded) { state.rewarded = true; state.treats += 1; saveState(); }
    document.querySelector('#treatCount').textContent = state.treats;
  }
  putTranslatedText(document.querySelector('#practiceResult'), translations.lv[key], translations.ru[key]);
});
const menuToggle = document.querySelector('#menuToggle');
function setMenu(open) {
  document.body.classList.toggle('menu-closed', !open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.querySelector('#sidebar').inert = !open;
  const phone = window.matchMedia('(max-width:760px)').matches;
  document.querySelector('#menuBackdrop').hidden = !open || !phone;
  document.body.classList.toggle('drawer-open', open && phone);
}
document.querySelector('#menuBackdrop').addEventListener('click', () => { setMenu(false); menuToggle.focus(); });
const phoneLayout = window.matchMedia('(max-width:760px)');
// Keep the menu state sensible after rotating a phone or resizing a window.
phoneLayout.addEventListener?.('change', event => setMenu(!event.matches));
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.querySelector('dialog[open]')) { setMenu(false); menuToggle.focus(); }
});
document.querySelector('#mathButton').addEventListener('click', () => { if (window.matchMedia('(max-width:760px)').matches) setMenu(false); showView('class'); });
document.querySelector('#backToClasses').addEventListener('click', () => showView('class'));
document.querySelector('#backToTopics').addEventListener('click', () => showView('topic'));
document.querySelector('#infoToggle').addEventListener('click', event => { const panel = document.querySelector('#lessonInfo'); panel.hidden = !panel.hidden; event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden)); });
document.querySelector('#themeToggle').addEventListener('click', () => document.querySelector('#themeDialog').showModal());
document.querySelector('#closeThemes').addEventListener('click', () => document.querySelector('#themeDialog').close());
document.querySelector('#closeProgress').addEventListener('click', () => document.querySelector('#progressDialog').close());
buildThemes(); applyTheme(); setMenu(!window.matchMedia('(max-width:760px)').matches); render();
