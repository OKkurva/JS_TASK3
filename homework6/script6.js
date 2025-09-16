//51. Створи об’єкт user з полями ім’я, вік, email.

const user = {
    name: 'Slavik',
    age: 555,
    email: 'kuskus@gmAIL.com'
}

//52. Додай метод, який повертає рядок "Мене звати …".

// const pers1 = {
//     name: 'Yarik',
//     age: 21,
//     job: 'nope',
//     girlfriend: 'nope',
//     car: 'Mitsubishi Outlander 1-st gen 2.4 turbo 4WD AUTOMATIC'
// };

// alert(`My name is ${pers1.name}`);


//53. Створи масив об’єктів cars і відфільтруй новіші за 2015 рік.

// const car1 = {
//     name: 'Mitsubishi',
//     year: 2008,
// };

// const car2 = {
//     name: 'Mazda',
//     year: 2016,
// };

// const car3 = {
//     name: 'Toyota',
//     year: 2007,
// };

// const car4 = {
//     name: 'Audi',
//     year: 2015,
// }

// const cars = [car1, car2, car3, car4];

// const newCars = cars.filter(car => car.year >= 2015);

// const result = newCars
//     .map(car => `${car.name} — ${car.year} року`)
//     .join("\n");

// alert(result);

//54. Знайди найдорожчий товар у масиві об’єктів products.

// const product1 = {
//     name: 'Ogurchik',
//     price: 45,
// };

// const product2 = {
//     name: 'Pomidorchik',
//     price: 89,
// };

// const product3 = {
//     name: 'Kabachki',
//     price: 130,
// };

// const products = [product1, product2, product3];

// const maxPrice = Math.max(...products.map(product => product.price));
// const highestPrice = products.find(product => product.price === maxPrice)


// alert(`${highestPrice.name} — ${highestPrice.price} ГРІВІНЬ АХУЄТЬ`);

// //55. Створи словник (object) перекладів з англійської на українську.


// const dictionary = {
//   dig: 'член',
//   car: 'бібіка',
//   house: 'хата',
//   idiot: 'довбойоб',
// };

// const word = prompt("Введіть слово англійською:").toLowerCase();

// if (dictionary[word]) {
//   alert("Here is your translation: " + dictionary[word]);
// } else {
//   alert("Sorry bro but i have no idea what does this word means:(");
// }

//56. Створи об’єкт-калькулятор з методами add, sub, mul, div.

// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   sub: function(a, b) {
//     return a - b;
//   },
//   mul: function(a, b) {
//     return a * b;
//   },
//   div: function(a, b) {
//     if (b === 0) {
//       return "Go on aplied mathematic fuckig smartass";
//     }
//     return a / b;
//   }
// };

// let num1 = +prompt("enter first numb:");
// let num2 = +prompt("Enteer second numb:");
// let operation = prompt("Choose your operation (+, -, *, /):");

// let result;

// switch (operation) {
//   case "+":
//     result = calculator.add(num1, num2);
//     break;
//   case "-":
//     result = calculator.sub(num1, num2);
//     break;
//   case "*":
//     result = calculator.mul(num1, num2);
//     break;
//   case "/":
//     result = calculator.div(num1, num2);
//     break;
//   default:
//     result = "Don't play with me boy!";
// }

// alert("Result: " + result);

//57. Перевір, чи в об’єкті є певний ключ.

const car1 = {
    name: 'Mitsubishi',
    year: 2008,
    key: 'true',
};

const car2 = {
    name: 'Mazda',
    year: 2016,
};

const car3 = {
    name: 'Toyota',
    year: 2007,
};

const car4 = {
    name: 'Audi',
    year: 2015,
}

const cars = [car1, car2, car3, car4]

const check = prompt("Enter car that you want to see if it has keyes:").toLowerCase();  

const carsWithKeys = cars.filter(car => car.key);

if (carsWithKeys.length > 0) {
  let result = carsWithKeys.map(car => car.name).join(", ");
  alert("Here is your keyes: " + result);
} else {
  alert("Sorry bro but don't have keyes from this car :(");
}

//58. Перетвори об’єкт у масив ключів і значень.

const carForArray = {
    name: 'Mitsubishi',
    year: 2008,
    key: 'true',
};

const values = Object.values(carForArray);
const keys = Object.keys(carForArray);

alert(`Here your keys and values \n ${keys} \n ${values}` );

//59.Зроби глибоку копію об’єкта.

const userForCopy = {
  name: "Alex",
  age: 25,
  address: {
    city: "Kyiv",
    zip: 12345
  },
  hobbies: ["coding", "music", "travel"]
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const copyUser = deepClone(userForCopy);

copyUser.address.city = "Dnipro";
copyUser.hobbies.push("reading");

const valuesUserForCopy = Object.values(userForCopy);
const keysUserForCopy = Object.keys(userForCopy);

const valuesCopyUser = Object.values(copyUser);
const keysCopyUser = Object.keys(copyUser);

console.log("Original user:", userForCopy);
console.log("Copy 3:", copyUser);

alert(
  `Original user:\n${JSON.stringify(userForCopy, null, 2)}`
);

alert(
  `Copied user:\n${JSON.stringify(copyUser, null, 2)}`
);


//60. З’єднай два об’єкти в один.

const carForMerge = {
  name: "Car",
  specs: {
    engine: "V6",
    doors: 4
  }
};

const carForMerge2 = {
  specs: {
    engine: "V8",   // перезапише V6
    color: "red"
  },
  year: 2020
};

const merged = { ...carForMerge, ...carForMerge2 };
console.log(merged);


//simply spread
/*
{
  name: "Car",
  specs: { engine: "V8", color: "red" }, // ❌ перезаписав, загубив doors
  year: 2020
}
*/


//deep merge
function deepMerge(target, source) {
  for (let key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const mergedDeep = deepMerge({ ...carForMerge }, carForMerge2);

console.log(mergedDeep);
/*
{
  name: "Car",
  specs: {
    engine: "V8",   // замінило
    doors: 4,       // зберегло
    color: "red"    // додало
  },
  year: 2020
}
*/














