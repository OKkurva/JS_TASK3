//41. Створи масив чисел, знайди найбільше і найменше.

//  function getMinMax(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       throw new Error("Your array must be field by numbers");
//     }

//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     return { min, max };
//   }

//   const input = prompt('Enter your array of numbers (for example: 5,12,3,27,8):');
//   const numbers = input.split(",").map(num => Number(num.trim()));

//   const { min, max } = getMinMax(numbers);

//   alert(`Min numb: ${min} \nMax numb: ${max}`);



//42. Знайди суму елементів масиву.

// const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

// const arr = input.split(",").map(num => Number(num.trim()));

// if (!Array.isArray(arr) || arr.length === 0) {
//   alert(`Your array must be field by numbers`);
// } else {

//   const sum = arr.reduce((acc, num) => acc + num, 0);

//   alert(`Summ of your array is: ${sum}`);
// }

//43. Знайди середнє значення масиву.

// const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

// const arr = input.split(",").map(num => Number(num.trim()));

// if (!Array.isArray(arr) || arr.length === 0) {
//   alert(`Your array must be field by numbers`);
// } else {

//   const sum = arr.reduce((acc, num) => acc + num, 0);

//   const midlearef = sum / arr.length;

//   alert(`Middle number of your array is: ${midlearef}`);
// }

//44. Відсортуй масив від меншого до більшого.
    
// const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

// const arr = input.split(",").map(num => Number(num.trim()));

// if (!Array.isArray(arr) || arr.length === 0) {

//   alert(`Your array must be field by numbers`);

// } else {

//  arr.sort(function(a, b) {
//   return a - b; 
// });

// alert(arr);

// }

//45. Видали дублікати з масиву

// const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

// const arr = input.split(",").map(num => Number(num.trim()));

// const unique = [...new Set(arr)];

// alert(`Унікальні значення: ` + unique.join(", "));


//46. Об’єднай два масиви в один.

// const arr1 = [137846, 245673898, 321];
// const arr2 = [1590, 1945, 1866];
// const arr3 = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):')

// const arr33 = arr3.split(",").map(num => Number(num.trim()));

// const arr4 = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):')

// const arr44 = arr4.split(",").map(num => Number(num.trim()));

// const united = [...arr1, ...arr2, ...arr33, arr44];

// alert(united); 

//47. Створи масив і реверсни його без .reverse().

// const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

// const arr = input.split(",").map(num => Number(num.trim()));

// let reversed = "";

// for(let i = arr.length - 1; i >= 0; i-- ){
//     reversed += arr[i]; 
// }

// alert(reversed);

//48. Знайди індекс елемента у масиві.

//   const arr = [123, 456, 789, 321];

//   const input = prompt("Enter a number to find its index (123, 456, 789, 321):");
//   const num = Number(input.trim());

//   const index = arr.indexOf(num);

//   if (index !== -1) {
//     alert(`Index of ${num} is: ${index}`);
//   } else {
//     alert(`Element ${num} was not found in the array`);
//   }


//49. Зроби масив лише з парних чисел.

//  const input = prompt('Pleas enter some array numbers (for example: 5,12,3,27,8):');

//  const arr = input.split(",").map(num => Number(num.trim()));

// const evenNumbers = arr.filter(num => num % 2 === 0);


// alert(`Okay there is only even numbers from your array ${evenNumbers}`)


//50. Створи масив об’єктів (ім’я + вік), відсортуй за віком.

const pers1 = {
    name: 'Yarik',
    age: 21,
    job: 'nope',
    girlfriend: 'nope',
    car: 'Mitsubishi Outlander 1-st gen 2.4 turbo 4WD AUTOMATIC'
};

const pers2 = {
    name: 'Olekssander',
    age: 26,
    job: 'Full stack senior developer',
    girlfriend: 'Tetiana',
    car: 'Mazda sorry i dont know something more about your car '
};

const pers3 = {
    name: 'Igor',
    age: 21,
    job: 'nope',
    girlfriend: 'Natalia',
    car: 'Tpypta Corola 1.3 atmosfere FWD'
};

const friends = [pers1, pers2, pers3];

friends.sort((a, b) => a.age - b.age);


  const result = friends
    .map(friend => `${friend.name} — ${friend.age} років`)
    .join("\n");



alert(result);



