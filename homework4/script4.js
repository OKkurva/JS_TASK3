//31.Напиши функцію sum(a, b) → сума.

// function sum(a, b) {
//   return a + b;
// }

// let a = +prompt('enter first numb you want to sum' , 2);
// let b = +prompt('enter second numb you want to sum' , 4);


// let result = sum(a, b);
// console.log(result); 

// alert(`your result is ${result}`);


//32.Функція для обчислення факторіалу.
// let c = 1;

// function factorial(n,c){
//     for (let i = 1; i <= n; i++) {
//       c *= i;
//     }

//     return c;
// }

// let n = +prompt('enter the n nymber');

// let result1 = factorial(n,c);

// alert(`Your result of factorial ${n} is ${result1}`);

//33. Функція, яка перевіряє, чи число просте



// function isPrime(num) {
//   if (num <= 1) {
//     return false; 
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// let number = +prompt("Enter your number and we will check if it's prime or not:"); 

// if (isPrime(number)) {
//   alert(number + " okay little bro you got it)");
// } else {
//   alert(number + "please try next time lil bro");
// }


//34. Функція, яка повертає максимальне з трьох чисел.  

// let giganiga = 1;

// function biggernigger(n,i,g){

//   if (n > i && n > g){
//      giganiga = n;
//   } else if (i > n && i > g){
//      giganiga = i;
//   } else if (g > n && g > i){
//      giganiga = g;
//   }

//   return giganiga;
// }

//  let n = +prompt('enter some numb you want' , 2);
//  let i = +prompt('enter some second numb you want' , 4);
//  let g = +prompt('enter some third numb you want' , 6);

// let meganiga = biggernigger(n,i,g);

// alert(giganiga + "is bigger then others");


//35. Функція, яка рахує середнє арифметичне масиву

// function average(arr) {
//   if (arr.length === 0) {
//     return null; 
//   }
  
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
  
//   return sum / arr.length;
// }


// let numbers = [23, 12, 6, 1, 17];
// alert(average(numbers)); 

//36. Функція для перевірки паліндрому.


// function Palindrome(randword){
//     const normalized = randword.toLowerCase();
//     return normalized === normalized.split('').reverse().join('');
// }

// const randword = prompt('enter your word: ');

// if (Palindrome(randword)){
//     alert(`Okay this is palindrome`);
// } else {
//     alert(`No no no this is not palindrome word`);
// }

//37. Функція для конвертації рядка у формат Title Case.


// function toTitleCase(str) {
//   const smallWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "from", "by", "of", "in"];

//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word, index, arr) => {
//       if (smallWords.includes(word) && index !== 0 && index !== arr.length - 1) {
//         return word; 
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

//     const userInput = prompt("Введіть текст для форматування у Title Case:");

//     if (userInput) {
//       alert(toTitleCase(userInput));
//     } else {
//       alert("Ви нічого не ввели!");
//     }

//38. Функція, яка рахує кількість слів у рядку.

// function countWords(str) {
 
//   return str.trim().split(/\s+/).filter(Boolean).length;
// }

// const strInput = prompt('Enter some sentence: ');

// if (strInput) {
//     alert(countWords(strInput));
// } else {
//   alert('Please put something in box');
// }


//39. Функція, яка генерує випадкове число у діапазоні.

function getRandomInt(min, max) {

      min = Math.ceil(min);
      max = Math.floor(max);
      
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const min = parseInt(prompt("Введіть мінімальне число:"), 10);
    const max = parseInt(prompt("Введіть максимальне число:"), 10);

    if (!isNaN(min) && !isNaN(max) && min <= max) {
      const randomNum = getRandomInt(min, max);
      alert("Your numb: " + randomNum);
    } else {
      alert("Please enter the correct number.");
    }

//40. Функція, яка форматує дату у вигляді dd.mm.yyyy.

function formatDate(input) {
  const date = new Date(input);

  if (isNaN(date)) {
    throw new Error("Неправильна дата");
  }

  const day = String(date.getDate()).padStart(2, "0");        // день (01–31)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // місяці 0–11, тому +1
  const year = date.getFullYear();                            // рік

  return `${day}.${month}.${year}`;
}

const normDate = prompt('Enter some date and we will turn it into correct form ', '2025.09.04' );

if (normDate) {
      const formatted = formatDate(normDate);
      if (formatted) {
        alert("Formatted date: " + formatted);
      } else {
        alert("Enter the correct date");
      }
    } else {
      alert("Please enter something next time!");
    }


