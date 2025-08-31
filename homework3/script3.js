//21. Виведи числа від 1 до 100.

//for (let i = 0; i <= 100; i++) {
//  alert(`${i}`);
//}

//22. Виведи всі парні числа від 1 до 50.

//for (let i = 0; i <= 100; i++) {
//  if (i % 2 === 0){
//    alert(`${i}`);
//  }
//}

//23. Обчисли суму чисел від 1 до n.


//let n = +prompt('Enter the "n" numb: ')


//let sum = 0;

//for (let i = 0; i <= n; i++) {
//  sum += i;
//}

//alert (`${sum}`);


//24. Обчислити факторіал числа "n"

//let n = +prompt('Enter the "n" numb: ')


//let factorial = 1;

//for (let i = 1; i <= n; i++) {
//  factorial *= i;
//}

//alert (`${factorial}`);

//25. Виведи таблицю множення на 5.

//const n = 5;

//for (let i = 1; i <= 20; i++){
//    alert (`Number that we multiplicate to 5 is: ${i} , and result is ${i * n}`);
//}

//26. Знайди всі прості числа до 100.

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break; 
    }
  }

  if (isPrime) {
    alert(num); 
  }
}


//27.Зроби трикутник з * у консолі.

let height = 5;

for (let i = 1; i <= height; i++) {
  let spaces = " ".repeat(height - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}


//28.Виведи всі літери рядка по одній.

//let text = prompt('Enter some text here:', 'Heil Hittler');

//for (let i = 0; i < text.length; i++) {
//  alert(text[i]);  
//}


//29. Порахуй кількість голосних у рядку.

let text = prompt('Enter some text here:', 'Heil Hittler');

text = text.toLowerCase();

let vowels = "аеєиіїоуюяaeiou"; // українські + англійські голосні
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i])) {
    count++;
  }
}

alert(`Count of wovel letters: ` + count);


//30.Реверсни рядок без .reverse().

let str = prompt('Enter some text to reverse it:' , 'Улибок тебе дед макар');

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

alert(`Reversed string: ` + reversed);
