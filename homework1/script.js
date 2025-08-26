//1. Створи змінні для імені, віку, країни та виведи їх у консоль.

const human = {
    name: 'Yarik',
    age: '21',
    country: 'Japan',
    skills: {
        hobbies: 'hate niggers and killing jews',
        job: 'being Hitler'
    }
}

console.log(human);

//2.Запитай у користувача його рік народження та порахуй вік.

let age = prompt('whats your born year little bastard?', '2004');

console.log(2025 - age);
alert(`Your age is ${2025 - age}`);

//3.Переведи температуру з Цельсія у Фаренгейти.

let celciy = prompt('Plase enter the temperature in celciy °C:');

let farengeit = (celciy * 1.8) + 32;

console.log('Temperature infarengeits is:', farengeit);
alert(`Temperature infarengeits is: ${(celciy * 1.8) + 32}`);

//4. Обчисли площу та периметр прямокутника.

let Height = prompt('Please enter the height of rectangle: ');
let Width = prompt('Please enter the width of rectangle: ');

Height = Number(Height);
Width = Number(Width);

Perymetr = (2 * (Height + Width));
Square = (Height * Width);

console.log(Perymetr);
console.log(Square);

alert(`The perymeter of rectangleis: ${Perymetr}`);
alert(`The square of rectangleis: ${Square}`);

//5. Перевір, чи введене число парне або непарне.

let Num = prompt('Please enter your fuking number you stupid idiot (write even number): ');

Num = Number(Num);

if (Num % 2 === 0) {
  console.log(Num + " is even");
} else {
  console.log(Num + " is odd");
};

if (Num % 2 === 0){
    alert(`Your number is even sweetie)`);
} else{
    alert(`Are you f***ing kidding me??`);
};

//6.Обчисли квадрат і куб числа.

let NUM = prompt('Enter your number: ')

NUM = Number(NUM);

let sec = Math.pow(NUM,2);
let third = Math.pow(NUM,3);

console.log(sec);
console.log(third);

alert(`your nuber in second degree is: ${sec}`);
alert(`your nuber in third degree is: ${third}`);

//7. Перевір, чи число ділиться на 3 і 5 одночасно.

let num = prompt('Pleas ener your interesting number sweatheart: ');

num = Number(num);

if (num % 3 === 0 || num % 5 === 0){
    console.log('Fine your number is good');
} else {
    console.log('wrong number shorty please try next time)');
};

if (num % 3 === 0 || num % 5 === 0){
    alert(`Fine your number is good`);
} else {
    alert(`wrong number shorty please try next time)`);
};


//8.Створи змінну з рядком і виведи його довжину.

let str = "chikibamboni";

console.log(str.length);

let str1 = prompt('write something to your mother baby)');

alert(str1.length);

//9. Перевір, чи рядок містить певне слово.

let message = prompt('write something cool for us:');

if (message.includes('hui')){
    alert(`you stupid son of a bitch go strait to hell and Lucifer will fuck your dirty ass`);
} else {
    alert(`Good good)`);
}

//10. Перевір, чи число додатне, від’ємне або нуль.

let num1 = prompt("Please enter positive num:"); 
num1 = Number(num); 

if (num > 0) {
    alert("okay bro thats correct");
} else if (num < 0) {
    alert("why did you put minus before it?????");
} else if (num === 0) {
    alert("i will multiply you by zero idiot");
} else {
    alert("HA HA HA......Idiot i will find you liitle peace of poo");
}