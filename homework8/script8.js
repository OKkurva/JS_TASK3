//71. Згенеруй випадкове число від 1 до 100.

let randomNumber = Math.floor(Math.random() * 100) + 1;

alert(randomNumber);

//72. Згенеруй випадковий пароль з 8 символів.

function generatePassword(lengthPass = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";

  for (let i = 0; i < lengthPass; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

    let lengthPass = prompt("Введіть довжину пароля (наприклад 8):", "8");

    lengthPass = parseInt(lengthPass, 10);

    if (isNaN(lengthPass) || lengthPass <= 0) {
      lengthPass = 8;
    }

    let password = generatePassword(lengthPass);
    alert("Ваш пароль: " + password);


//73. Зроби кидок кубика (1–6).

let cubeNumber = Math.floor(Math.random() * 6) + 1;

alert(`Кубик показує ${cubeNumber}`);

//74. Зроби "монетку" (орел/решка).

function flipCoin() {
  return Math.random() < 0.5 ? "Орел" : "Решка";
}

let result = flipCoin();
alert("Випало: " + result);

//75. Згенеруй масив із 10 випадкових чисел.

function generateRandomArray(length = 10, min = 1, max = 100) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomNum);
  }
  return arr;
}

let numbers = generateRandomArray();
console.log(numbers);

//76. Знайди мінімальне та максимальне число у масиві.

let numbersArr = [12, 45, 7, 89, 23, 5, 67, 34];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Мінімальне:", min); 
console.log("Максимальне:", max); 

//77. Зроби випадковий колір у форматі #RRGGBB.

function randomHexColor() {
  const r = Math.floor(Math.random() * 256); // 0..255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // переводимо в 2-значний шістнадцятковий рядок і об'єднуємо
  const hex = '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');

  return hex.toUpperCase(); 
}

console.log(randomHexColor()); 
document.body.style.backgroundColor = randomHexColor();

//78. Обчисли корінь числа.

let num = +prompt("Введіть число, з якого треба знайти квадратний корінь:", "25");


    if (isNaN(num) || num < 0) {
      alert("Будь ласка, введіть додатне число!");
    } else {
      let root = Math.sqrt(num);
      alert("Квадратний корінь з " + num + " дорівнює " + root);
    }

//79. Зроби функцію округлення до 2 знаків після коми.

    function roundToTwo(num) {
      return Math.round(num * 100) / 100;
    }

    let input = +prompt("Введіть число для округлення:", "3.14159");


    if (isNaN(numTwoDots)) {
      alert("Будь ласка, введіть коректне число!");
    } else {
      let result = roundToTwo(numTwoDots);
      alert("Округлене число: " + result);
    }

//80. Обчисли відстань між двома точками (x1,y1) і (x2,y2).

    function distance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    // запитуємо координати користувача
    let x1 = parseFloat(prompt("Введіть x1:"));
    let y1 = parseFloat(prompt("Введіть y1:"));
    let x2 = parseFloat(prompt("Введіть x2:"));
    let y2 = parseFloat(prompt("Введіть y2:"));

    if ([x1, y1, x2, y2].some(isNaN)) {
      alert("Будь ласка, введіть коректні числа для всіх координат!");
    } else {
      let dist = distance(x1, y1, x2, y2);
      alert("Відстань між точками: " + dist);
    }

























