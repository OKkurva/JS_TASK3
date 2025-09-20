//81. Кнопка, яка змінює колір фону сторінки.

function changeBackgroundColor() {
      document.body.style.backgroundColor = '#000';
    }

//82. Інпут + кнопка → додають текст у список.

function addItem() {
      const input = document.getElementById("itemInput");
      const text = input.value.trim();

      if (text !== "") {
        const li = document.createElement("li"); // створюємо <li>
        li.textContent = text;                   // додаємо текст
        document.getElementById("itemList").appendChild(li); // вставляємо у список
        input.value = ""; // очищаємо поле вводу
      } else {
        alert("Будь ласка, введіть текст!");
      }
    }

//83. Лічильник (кнопки + і – змінюють число на екрані).

    let count = 0; 

    function updateDisplay() {
      document.getElementById("count").textContent = count;
    }

    function increase() {
      count++;
      updateDisplay();
    }

    function decrease() {
      count--;
      updateDisplay();
    }

//84. Форма реєстрації → вивести дані у консоль.

const form = document.getElementById('registerForm');
    const errorBox = document.getElementById('error');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Не перезавантажувати сторінку

      errorBox.textContent = ''; // очистити попередні помилки

      // Зчитуємо значення полів
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('passwordConfirm').value;

      // Простая валідація
      if (!fullName) {
        errorBox.textContent = 'Будь ласка, введіть імʼя.';
        return;
      }

      if (!email) {
        errorBox.textContent = 'Будь ласка, введіть email.';
        return;
      }

      // Проста перевірка формату email (швидка, не замінює серверну валідацію)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorBox.textContent = 'Невірний формат email.';
        return;
      }

      if (password.length < 6) {
        errorBox.textContent = 'Пароль має містити щонайменше 6 символів.';
        return;
      }

      if (password !== passwordConfirm) {
        errorBox.textContent = 'Паролі не співпадають.';
        return;
      }

      // Формуємо об'єкт користувача для виводу в консоль
      const userData = {
        fullName,
        email,
        // У реальному застосунку **не логуй** пароль у консоль!
        // Тільки для демонстрації нижче виводимо, але краще видалити password.
        password
      };

      // Виводимо в консоль
      console.log('Нова реєстрація:', userData);

      // Коротке підтвердження для користувача
      alert('Дані успішно відправлено (перевірте консоль).');

      // Очистити форму (опціонально)
      form.reset();
    });

    //85. Гра "Вгадай число" з input.

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const input = document.getElementById("guessInput");
      const guess = parseInt(input.value, 10);
      const message = document.getElementById("message");

      if (isNaN(guess)) {
        message.textContent = "Будь ласка, введіть число!";
        return;
      }

      attempts++;

      if (guess === secretNumber) {
        message.textContent = ` Вітаю! Ви вгадали число ${secretNumber} за ${attempts} спроб(и).`;
      } else if (guess < secretNumber) {
        message.textContent = "Загадане число більше ⬆";
      } else {
        message.textContent = "Загадане число менше ⬇";
      }

      input.value = ""; // очищаємо поле
      input.focus();    // курсор назад у поле
    }

//86. Кнопка "Like", яка рахує кількість лайків.


let likes = 0;

function addLike() {
  likes++;
  document.getElementById("count").textContent = likes;
}

//87. Таймер відліку.

let timeLeft = 10;      // початковий час
    let timerId = null;     // ідентифікатор таймера

    function updateDisplay() {
      document.getElementById("timer").textContent = timeLeft;
    }

    function startTimer() {
      if (timerId !== null) return; // якщо вже йде, не запускати ще раз

      timerId = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          clearInterval(timerId);
          timerId = null;
          alert("⏰ Час вийшов!");
        }
      }, 1000); // кожну секунду
    }

    function resetTimer() {
      clearInterval(timerId);
      timerId = null;
      timeLeft = 10;
      updateDisplay();
    }

    // показати стартове значення
    updateDisplay();


//88. Світлофор (кнопка перемикає кольори).

let current = 0; // 0 - червоний, 1 - жовтий, 2 - зелений

    function updateLights() {
      document.getElementById("red").style.background = (current === 0) ? "red" : "#555";
      document.getElementById("yellow").style.background = (current === 1) ? "yellow" : "#555";
      document.getElementById("green").style.background = (current === 2) ? "lime" : "#555";
    }

    function nextLight() {
      current = (current + 1) % 3; // перемикаємо 0 → 1 → 2 → 0
      updateLights();
    }

    // показати стартовий стан
    updateLights();

//89. Калькулятор (HTML + JS).

 const display = document.getElementById("display");

    function append(value) {
      display.value += value;
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    function clearDisplay() {
      display.value = "";
    }


//90. To-do list (додавання/видалення завдань).

 function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();

      if (text === "") {
        alert("Введіть завдання!");
        return;
      }

      // створюємо <li>
      const li = document.createElement("li");
      li.textContent = text;

      // кнопка видалення
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✖";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();

      // додаємо кнопку до <li>
      li.appendChild(deleteBtn);

      // вставляємо <li> у список
      document.getElementById("taskList").appendChild(li);

      // очистка поля вводу
      input.value = "";
    }






















