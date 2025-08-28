//11. Напиши програму, яка виводить "Добрий ранок/день/вечір" залежно від години.

let day = new Date();       
let hour = day.getHours();   

let greeting;

if (hour >= 5 && hour < 12) {
    greeting = "Good morning! ☀️";
} else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon! 🌤️";
} else if (hour >= 18 && hour < 22) {
    greeting = "Good evening! 🌙";
} else {
    greeting = "Good night! 😴";
}

console.log(greeting);
alert(greeting);


//12. Запитай у користувача оцінку і виведи рівень ("Погано", "Добре", "Відмінно")


let rate = prompt('Please rate our servisevfrom 1 to 6:')

if (rate < 3){
    alert(`ooooooohhhhhh my got this is so bad bro`);
} else if (rate >=3 && rate <5){
    alert(`not bad not bad now you`);
} else if (rate >=5 && rate <= 6){
    alert (`good nigger!`);
} else {
    alert(`Please enter the correct number next time or i will kill whole your family by bana knife! have a good day!`);
}


//13. Визнач, чи рік високосний.

let year = prompt('Enter the year you want to know if it visokosniy', '2025');

year = Number(year);

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        alert(`Visokosniy rik`);
    } else {
        alert(`Ne visokosniy rik`);
    }


//14. Калькулятор через switch (+, -, *, /).

let num1 = +prompt(`Enter the first nymber you want: `);
let num2 = +prompt(`Enter the second nymber you want: `);

let operator = prompt("Enter operation that you need (+, -, *, /):");

let result;

switch(operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
    if(num2 === 0){
        result = "Ти шо галава дохуя розумний? Тоді піздуй вишмат вчи і діли на ноль скільки влізе" ;
    } else {
        result = num1 / num2;
        break;
    }   

    default: 
    result = "УЇБАТЬ?";
}

alert(`here is your result sweatheart: ${result}`);

//15.Визнач пору року за номером місяця.

let monthnumb = +prompt("Please enter your month number and i will tell you what season now:" , "from 1 to 12");

if ((monthnumb <= 2) || (monthnumb === 12)){
    alert(`It's winter now, bro go play with snowballs`);
} if (monthnumb >= 3 && monthnumb <= 5){
    alert(`It's spring now bro`);
} if (monthnumb >= 6 && monthnumb <= 8){
    alert(`It's summer now, bro let's go buhat`);
} if (monthnumb >= 9 && monthnumb <= 11) {
    alert(`It's autumn now, bro we don't need go to school anymore)`);
} else {
    alert(`Please enter the fucking numb of current month`);
}

//16. Вгадай число (рандом 1–10, користувач вводить, перевірка).


let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Вгадай число від 1 до 10:");


if (userGuess === randomNumber) {
    alert("Condratulations 🎉 you guessed the number: " + randomNumber);
} else {
    alert("HA HA LOSER!!: " + randomNumber);
}

//.17 Користувач вводить вік → чи може купити алкоголь.

let age = +prompt('Plese write youre age truthly: ' , '0-123');

if (age >= 18 && age <= 123){
    alert(`Okay fine you can by some Glok 18`);
} if (age >= 0 && age <= 17){
    alert(`Little bro you should leave this place or i shoot you in your small ass`);
} else {
    alert(`what the fuck bro`);
}

//18.Перевір, чи користувач ввів правильний пароль.

let firstpass = +prompt('Enter your super secret password: ');
let secondpass = +prompt('Enter your super secret password again please than we should know tha you are you: ');

if (firstpass === secondpass){
    alert(`Okay it's you)`);
} else {
    alert('Who are you -_-');
}

//19. Перевір, чи введене слово є паліндром.

function Palindrome(randword){
    const normalized = randword.toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}

const randword = prompt('enter your word: ');

if (Palindrome(randword)){
    alert(`Okay this is palindrome`);
} else {
    alert(`No no no this is not palindrome word`);
}


//20. Виведи кількість днів у місяці (користувач вводить номер місяця).

function daysInMonth(month, year1){
    return new Date(year, month +1, 0).getDate();
}

const year1 = parseInt(prompt("Enter the year that you want"));
const month = parseInt(prompt("Enter the month that you want"));

const days = daysInMonth(month, year1);


alert(`У ${month}.${year1} є ${days} днів`);