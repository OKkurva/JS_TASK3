 //91. Конвертер валют (курс задаєш сам).
 
 function convert() {
      const rate = parseFloat(document.getElementById("rateInput").value);
      const usd = parseFloat(document.getElementById("usdInput").value);
      const answerDiv = document.getElementById("answer");

      if (isNaN(rate) || rate <= 0) {
        answerDiv.textContent = "❌ Невірний курс!";
        return;
      }

      if (isNaN(usd) || usd < 0) {
        answerDiv.textContent = "❌ Введіть коректну суму!";
        return;
      }

      const uah = usd * rate;
      answerDiv.textContent = `${usd} $ = ${uah.toFixed(2)} грн`;
    }

//92. Конвертер температури (C ↔ F).

function convertTemp() {
    const userTempInput = parseFloat(document.getElementById("celciumInput").value);
    const farengheit = ((userTempInput * 1.8) + 32);
    const tempResultDiv = document.getElementById("tempResult");

    tempResultDiv.textContent = `Ваша температура у фаренгейтах ${farengheit}`
}

//93. Проста гра "Камінь-ножиці-папір".

function play(userChoice) {
      const choices = ["Камінь", "Ножиці", "Папір"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let result = `Ти: ${userChoice} | Комп'ютер: ${computerChoice} → `;

      if (userChoice === computerChoice) {
        result += "Нічия 🤝";
      } else if (
        (userChoice === "Камінь" && computerChoice === "Ножиці") ||
        (userChoice === "Ножиці" && computerChoice === "Папір") ||
        (userChoice === "Папір" && computerChoice === "Камінь")
      ) {
        result += "Ти переміг 🎉";
      } else {
        result += "Комп'ютер переміг 💻";
      }

      document.getElementById("resultGame").textContent = result;
    }

//94. Таблиця множення в DOM.

function createMultiplicationTable(size = 10) {
      const table = document.createElement("table");

      // Заголовок першого рядка
      const headerRow = document.createElement("tr");
      const emptyCell = document.createElement("th");
      headerRow.appendChild(emptyCell);

      for (let i = 1; i <= size; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      // Рядки таблиці
      for (let i = 1; i <= size; i++) {
        const row = document.createElement("tr");

        // перша клітинка з номером рядка
        const th = document.createElement("th");
        th.textContent = i;
        row.appendChild(th);

        for (let j = 1; j <= size; j++) {
          const td = document.createElement("td");
          td.textContent = i * j;
          row.appendChild(td);
        }

        table.appendChild(row);
      }

      document.getElementById("tableContainer").appendChild(table);
    }

    // створюємо таблицю при завантаженні
    createMultiplicationTable(10);

//95. Календар (вивести дні місяця).

function generateCalendar() {
      const month = parseInt(document.getElementById("month").value) - 1; // місяці в JS від 0
      const year = parseInt(document.getElementById("year").value);

      const container = document.getElementById("calendarContainer");
      container.innerHTML = ""; // очищення попереднього календаря

      const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

      const calendar = document.createElement("div");
      calendar.className = "calendar";

      // заголовок днів тижня
      for (let d of daysOfWeek) {
        const cell = document.createElement("div");
        cell.className = "day day-name";
        cell.textContent = d;
        calendar.appendChild(cell);
      }

      // перший день місяця
      const firstDay = new Date(year, month, 1);
      const startDay = (firstDay.getDay() + 6) % 7; // зробимо Пн = 0

      // кількість днів у місяці
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // пусті клітинки перед початком
      for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        empty.className = "day empty";
        calendar.appendChild(empty);
      }

      // клітинки з днями
      for (let i = 1; i <= daysInMonth; i++) {
        const cell = document.createElement("div");
        cell.className = "day";
        cell.textContent = i;
        calendar.appendChild(cell);
      }

      container.appendChild(calendar);
    }

    // створюємо календар одразу при завантаженні
    generateCalendar();

//96. Простий слайдер картинок.

let currentIndex = 0;
    const slides = document.querySelectorAll(".slides img");

    function showSlide(index) {
      slides.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

//97. Генератор випадкового пароля.

 function generatePassword() {
      const length = parseInt(document.getElementById("lengthInput").value);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      let password = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }

      document.getElementById("result").textContent = "Ваш пароль: " + password;
    }

//98. Калькулятор ІМТ (індекс маси тіла).

function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const heightCm = parseFloat(document.getElementById("height").value);

      if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById("result").textContent = "❌ Введіть правильні дані!";
        return;
      }

      const heightM = heightCm / 100; // переводимо у метри
      const bmi = weight / (heightM * heightM);

      let category = "";
      if (bmi < 18.5) category = "Недостатня вага";
      else if (bmi < 25) category = "Норма";
      else if (bmi < 30) category = "Надмірна вага";
      else category = "Ожиріння";

      document.getElementById("result").textContent = 
        `Ваш ІМТ: ${bmi.toFixed(2)} (${category})`;
    }

//99. Секундомір.

// стан секундоміра
    let startTime = null;      // час останнього старту (ms)
    let elapsed = 0;           // вже пройшовший час у мс (при паузі)
    let timerId = null;        // id setInterval
    const display = document.getElementById('display');
    const lapsList = document.getElementById('laps');

    // кнопки
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const lapBtn = document.getElementById('lapBtn');
    const resetBtn = document.getElementById('resetBtn');

    function formatTime(ms) {
      const totalCentis = Math.floor(ms / 10);             // соті секунди
      const centis = totalCentis % 100;
      const totalSeconds = Math.floor(totalCentis / 100);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const pad = (n, l=2) => String(n).padStart(l, '0');
      return `${pad(minutes)}:${pad(seconds)}.${pad(centis)}`;
    }

    function update() {
      const now = Date.now();
      const currentElapsed = elapsed + (startTime ? (now - startTime) : 0);
      display.textContent = formatTime(currentElapsed);
    }

    function start() {
      if (timerId) return; // вже працює
      startTime = Date.now();
      timerId = setInterval(update, 10); // оновлюємо кожні 10 ms
      startBtn.disabled = true;
      stopBtn.disabled = false;
      lapBtn.disabled = false;
      resetBtn.disabled = false;
    }

    function stop() {
      if (!timerId) return;
      clearInterval(timerId);
      timerId = null;
      // накопичуємо пройдений час
      elapsed += Date.now() - startTime;
      startTime = null;
      update();
      startBtn.disabled = false;
      stopBtn.disabled = true;
      lapBtn.disabled = true;
    }

    function reset() {
      // зупиняємо, очищуємо
      clearInterval(timerId);
      timerId = null;
      startTime = null;
      elapsed = 0;
      display.textContent = '00:00.00';
      lapsList.innerHTML = '';
      startBtn.disabled = false;
      stopBtn.disabled = true;
      lapBtn.disabled = true;
      resetBtn.disabled = true;
    }

    function lap() {
      // фіксуємо поточний час у списку кіл
      const nowElapsed = elapsed + (startTime ? (Date.now() - startTime) : 0);
      const li = document.createElement('li');
      li.textContent = formatTime(nowElapsed);
      // додаємо зверху (останнє коло першим)
      lapsList.insertBefore(li, lapsList.firstChild);
    }

    // навіска на кнопки
    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);
    resetBtn.addEventListener('click', reset);
    lapBtn.addEventListener('click', lap);

    // додатково: пробіл/Enter керують старт/стоп
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        timerId ? stop() : start();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (!timerId && elapsed === 0) start();
      }
    });

    // відображаємо стартове значення
    update();

//100. Міні-гра "Змійка" або "2048" (простий варіант).

const SIZE = 4;
    let grid = [];
    let score = 0;

    const boardEl = document.getElementById('board');
    const scoreEl = document.getElementById('score');
    const messageEl = document.getElementById('message');
    const newBtn = document.getElementById('newBtn');

    // Ініціалізація DOM-клітинок
    function initBoardDOM() {
      boardEl.innerHTML = '';
      for (let i = 0; i < SIZE * SIZE; i++) {
        const div = document.createElement('div');
        div.className = 'cell';
        boardEl.appendChild(div);
      }
    }

    // Ініціалізуємо логічну сітку
    function initGrid() {
      grid = [];
      for (let r = 0; r < SIZE; r++) {
        grid.push(new Array(SIZE).fill(0));
      }
      score = 0;
      messageEl.textContent = '';
      spawnRandom();
      spawnRandom();
      updateUI();
    }

    // Знайти всі порожні клітинки і вставити 2 (90%) або 4 (10%)
    function spawnRandom() {
      const empties = [];
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (grid[r][c] === 0) empties.push([r, c]);
        }
      }
      if (empties.length === 0) return false;
      const [r, c] = empties[Math.floor(Math.random() * empties.length)];
      grid[r][c] = Math.random() < 0.9 ? 2 : 4;
      return true;
    }

    // Оновлення інтерфейсу з grid
    function updateUI() {
      const cells = boardEl.children;
      let idx = 0;
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          const value = grid[r][c];
          const el = cells[idx++];
          el.textContent = value === 0 ? '' : value;
          // клас по значенню для стилів
          el.className = 'cell';
          if (value !== 0) {
            const cls = 'tile-' + value;
            // якщо не існує конкретного класу — використовуємо generic
            el.classList.add(cls);
          }
        }
      }
      scoreEl.textContent = 'Score: ' + score;
    }

    // Slide & merge один рядок вліво. Повертає {newRow, changed, gained}
    function processRow(row) {
      const nonZero = row.filter(x => x !== 0);
      const newRow = [];
      let gained = 0;
      let i = 0;
      while (i < nonZero.length) {
        if (i + 1 < nonZero.length && nonZero[i] === nonZero[i+1]) {
          const merged = nonZero[i] * 2;
          newRow.push(merged);
          gained += merged;
          i += 2; // пропускаємо наступний, бо об'єднали
        } else {
          newRow.push(nonZero[i]);
          i += 1;
        }
      }
      // добити нулями до довжини
      while (newRow.length < SIZE) newRow.push(0);
      const changed = newRow.some((v, idx) => v !== row[idx]);
      return { newRow, changed, gained };
    }

    // Рух вліво по всій сітці
    function moveLeft() {
      let moved = false;
      let gainedTotal = 0;
      for (let r = 0; r < SIZE; r++) {
        const { newRow, changed, gained } = processRow(grid[r]);
        if (changed) {
          grid[r] = newRow;
          moved = true;
          gainedTotal += gained;
        }
      }
      if (gainedTotal > 0) score += gainedTotal;
      return moved;
    }

    // Рух вправо — обернути кожен ряд, виконати left, знову обернути
    function moveRight() {
      // mirror rows
      for (let r = 0; r < SIZE; r++) grid[r].reverse();
      const moved = moveLeft();
      // restore
      for (let r = 0; r < SIZE; r++) grid[r].reverse();
      return moved;
    }

    // Транспонувати матрицю
    function transpose() {
      const t = [];
      for (let r = 0; r < SIZE; r++) t.push(new Array(SIZE).fill(0));
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          t[c][r] = grid[r][c];
        }
      }
      grid = t;
    }

    // Рух вверх: транспонувати -> left -> транспонувати
    function moveUp() {
      transpose();
      const moved = moveLeft();
      transpose();
      return moved;
    }

    // Рух вниз
    function moveDown() {
      transpose();
      const moved = moveRight();
      transpose();
      return moved;
    }

    // Перевірка перемоги (наявність 2048)
    function checkWin() {
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (grid[r][c] === 2048) return true;
        }
      }
      return false;
    }

    // Перевірка, чи є хід
    function hasMoves() {
      // є пусті клітинки?
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (grid[r][c] === 0) return true;
        }
      }
      // перевірка суміжних однакових
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          const v = grid[r][c];
          if (r + 1 < SIZE && grid[r+1][c] === v) return true;
          if (c + 1 < SIZE && grid[r][c+1] === v) return true;
        }
      }
      return false;
    }

    // Обробка ходу (викликати одну з функцій руху)
    function handleMove(direction) {
      if (messageEl.textContent) return; // після кінця гри не дозволяємо ходи
      let moved = false;
      if (direction === 'left') moved = moveLeft();
      else if (direction === 'right') moved = moveRight();
      else if (direction === 'up') moved = moveUp();
      else if (direction === 'down') moved = moveDown();

      if (moved) {
        spawnRandom();
        updateUI();
        if (checkWin()) {
          messageEl.textContent = '🎉 Вітаю! Досягнуто 2048!';
        } else if (!hasMoves()) {
          messageEl.textContent = '💥 Гра закінчена. Нема ходів!';
        }
      }
    }

    // Клавіатурні події
    document.addEventListener('keydown', (e) => {
      if (messageEl.textContent) return;
      let handled = true;
      switch (e.key) {
        case 'ArrowLeft': handleMove('left'); break;
        case 'ArrowRight': handleMove('right'); break;
        case 'ArrowUp': handleMove('up'); break;
        case 'ArrowDown': handleMove('down'); break;
        default: handled = false;
      }
      if (handled) e.preventDefault();
    });

    // Кнопка нова гра
    newBtn.addEventListener('click', () => initGrid());

    // Ініціалізація DOM + старт гри
    initBoardDOM();
    initGrid();

    // Опціонально: простий жест для мобільних (свайп)
    let touchStartX = 0, touchStartY = 0;
    document.addEventListener('touchstart', e => {
      const t = e.touches[0];
      touchStartX = t.clientX; touchStartY = t.clientY;
    }, {passive:true});
    document.addEventListener('touchend', e => {
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) handleMove('right'); else handleMove('left');
      } else {
        if (dy > 0) handleMove('down'); else handleMove('up');
      }
    }, {passive:true});






