//61. Переверни рядок.

let originalString = prompt('Enter some sentence: ')
let reversedString = originalString.split('').reverse().join('');

console.log(reversedString); // Виведе: "тіСтірпиП"

function flipString(str) {
  const map = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
    i: "ᴉ", j: "ɾ", k: "ʞ", l: "ʃ", m: "ɯ", n: "u", o: "o", p: "d",
    q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
    y: "ʎ", z: "z",
    A: "∀", E: "Ǝ", H: "H", I: "I", M: "W", O: "O", T: "┴", U: "∩", V: "Λ", W: "M", Y: "⅄"
  };

  return str
    .split("")
    .reverse()
    .map(ch => map[ch] || ch)
    .join("");
}

const inputflip = prompt("Enter some text or wor that you wnt to flip:");
const flipped = flipString(inputflip);

alert(`Enjoy bro:\n${flipped}`);

//62. Зроби першу літеру великою.

function capitalizeFirstLetter(text) {
  if (!text) return text; 
  const firstChar = text[0]; 
  const rest = text.slice(1); 

  if (firstChar === firstChar.toUpperCase()) {
    return firstChar + rest;
  } else {
    return firstChar.toUpperCase() + rest;
  }
}

const input = prompt("Enter some txt:");
const result = capitalizeFirstLetter(input);

alert(result);

//63. Порахуй кількість слів у реченні.

function countWords(sentence) {
  if (!sentence) return 0; 
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const inputcalc = prompt("Введіть речення:");
const resultcalc = countWords(inputcalc);

alert(`Кількість слів у реченні: ${resultcalc}`);

//64. Заміни всі пробіли на _.

function replaceSpaces(text) {
  return text.replace(/ /g, "_"); 
}

const inputUndermark = prompt("Введіть текст:");
const resultUndermark = replaceSpaces(inputUndermark);

alert(resultUndermark);


//65. Видали всі голосні з рядка.

function removeVowels(text) {
  return text.replace(/[aeiouаеєиіїоуюяAEIOUАЕЄИІЇОУЮЯ]/g, "");
}

const inputDelete = prompt("Введіть текст:");
const resultDelete = removeVowels(inputDelete);

alert(resultDelete);


//66. Знайди найдовше слово у рядку.

function findLongestWord(sentence) {
  // 1. Прибрати зайві пробіли й розбити на масив слів
  let words = sentence.trim().split(/\s+/);

  // 2. Використати reduce для пошуку найдовшого
  let longest = words.reduce((a, b) => (b.length > a.length ? b : a));

  return longest;
}

console.log(findLongestWord("  Привіт   це   прикладовий рядок з JavaScript  "));

let inputLongestWord = prompt('Input here some sentence:')

let resultLongestWord = findLongestWord(inputLongestWord);

alert(`Longest word is ${resultLongestWord}`)


//67. Перевір, чи рядок містить тільки цифри.

function findNumber(numbers){

  let numbers = text.match(/\d+/g); 

  return numbers;
}

let findNumInSentence = prompt('Enter some sentence with numbers and we will fid it: ');

let resultFindNumberFromSentence = findNumber(findNumInSentence);

alert(`Here is your numbers from sentence: ${resultFindNumberFromSentence}`)

//68. Розбий рядок на масив слів.

function stringArray(string) {
  let stringarr  = string.trim().split(/\s+/);

  return stringarr;
}

let inputStrForArray = prompt('Enter some string for array');

let resultStrForArray = stringArray(inputStrForArray);

alert(`Here is your array from your previous sentence ${resultStrForArray}`);


//69. Зроби скорочення з імені (John Smith → J.S.).

function makeInitials(name) {
  return name
    .trim()                 // прибираємо зайві пробіли
    .split(/\s+/)           // розбиваємо на слова
    .map(word => word[0].toUpperCase()) // беремо перші літери
    .join('.') + '.';       // додаємо крапки
}

console.log(makeInitials("John Smith"));      
console.log(makeInitials("  john   smith  ")); 
console.log(makeInitials("John Ronald Reuel Tolkien")); 

let userName = prompt('Enter your full name: ', 'Yaroslav Yakymyshyn');
let userShortName = makeInitials(userName);

alert(`Your initials is "${userShortName}"`);

//70. Зроби цензуру: заміни "погані слова" на ***.

function censorText(text, badWords) {

  let pattern = new RegExp(badWords.join("|"), "gi"); 

  return text.replace(pattern, "***");

}

let badWords = ["dibil", "konch", "huesos"];

let sentence = prompt("Enter some sentence but dont use bad words");
let censored = censorText(sentence, badWords);

console.log(censored);
alert(`Here is your sentence ${censored}`);
























