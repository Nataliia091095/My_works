// ----------- Мінімум (Автомобіль) -----------
const car = {                            // Об'єкт, що описує автомобіль
  manufacturer: "Toyota",                // Виробник автомобіля
  model: "Camry",                        // Модель автомобіля
  year: 2022,                           // Рік випуску автомобіля
  avgSpeed: 80,                         // Середня швидкість руху (км/год)
  tankVolume: 50,                       // Об'єм паливного баку (літри)
  avgFuelConsumption: 8,                // Середня витрата палива (л на 100 км)
  drivers: [],                          // Масив імен водіїв

  showInfo() {                          // Метод для виводу інформації про авто та водіїв
    const info = `Автомобіль:\nВиробник: ${this.manufacturer}\nМодель: ${this.model}\nРік випуску: ${this.year}\nСередня швидкість: ${this.avgSpeed} км/год\nОб'єм паливного баку: ${this.tankVolume} л\nСередня витрата палива: ${this.avgFuelConsumption} л/100 км\nВодії: ${this.drivers.length ? this.drivers.join(", ") : "немає"}`; // Формуємо текст інформації
    document.getElementById("output-min").textContent = info; // Виводимо текст в елемент сторінки з id "output-min"
  },

  addDriver() {                        // Метод для додавання нового водія
    const name = prompt("Введіть ім'я водія:");  // Запитуємо ім'я у користувача
    if (name) {                         // Якщо ім'я введено (не порожнє)
      if (!this.drivers.includes(name.trim())) {  // Перевіряємо, чи немає такого водія у списку
        this.drivers.push(name.trim()); // Додаємо водія у список
        alert(`Водія ${name} додано.`); // Повідомляємо про додавання
      } else {
        alert("Такий водій вже є у списку."); // Якщо водій вже є — повідомляємо
      }
    }
  },

  checkDriver() {                     // Метод для перевірки, чи є водій у списку
    const name = prompt("Введіть ім'я водія для перевірки:"); // Запитуємо ім'я
    if (name) {                       // Якщо ім'я введено
      const found = this.drivers.includes(name.trim()); // Перевіряємо наявність у списку
      const message = found ? `Водій ${name} є у списку.` : `Водія ${name} немає у списку.`; // Формуємо повідомлення
      document.getElementById("output-min").textContent = message; // Виводимо повідомлення
    }
  },

  calculateTrip() {                  // Метод для розрахунку часу та палива на поїздку
    let distanceStr = prompt("Введіть відстань у км:"); // Запитуємо відстань
    if (!distanceStr) return;          // Якщо скасовано — виходимо

    let distance = parseFloat(distanceStr); // Перетворюємо введене у число
    if (isNaN(distance) || distance <= 0) {  // Якщо число не коректне
      alert("Введіть коректне додатне число для відстані."); // Попереджаємо
      return;                          // Вихід
    }

    let timeWithoutStops = distance / this.avgSpeed; // Рахуємо час без перерв (год)
    let breaks = Math.floor(timeWithoutStops / 4);   // Рахуємо кількість перерв (1 година кожна)
    let totalTime = timeWithoutStops + breaks;       // Загальний час з урахуванням перерв
    let fuelNeeded = (distance / 100) * this.avgFuelConsumption; // Рахуємо потрібне паливо (літри)

    const output = `Для подолання ${distance} км потрібно:\nЧас (з урахуванням перерв): ${totalTime.toFixed(2)} год\nПалива: ${fuelNeeded.toFixed(2)} л`; // Формуємо текст
    document.getElementById("output-min").textContent = output; // Виводимо результат
  }
};

function addDriver() {                 // Функція для виклику додавання водія з HTML
  car.addDriver();                    // Виклик відповідного методу об'єкта car
}

function checkDriver() {               // Функція для перевірки водія з HTML
  car.checkDriver();                  // Виклик відповідного методу об'єкта car
}

function calculateTrip() {             // Функція для розрахунку поїздки з HTML
  car.calculateTrip();                // Виклик відповідного методу об'єкта car
}

// ----------- Норма (Час) -----------
const time = {                        // Об'єкт, що зберігає час
  hours: 20,                         // Поточні години (0–23)
  minutes: 59,                       // Поточні хвилини (0–59)
  seconds: 45,                       // Поточні секунди (0–59)

  showTime() {                      // Метод для виводу поточного часу
    const timeStr = this.formatTime(); // Форматуємо час у вигляді рядка
    document.getElementById("output-norm").textContent = `Поточний час: ${timeStr}`; // Виводимо у DOM
  },

  formatTime() {                    // Форматування часу з провідними нулями
    const h = this.hours.toString().padStart(2, "0");   // Додаємо 0 до годин, якщо потрібно
    const m = this.minutes.toString().padStart(2, "0"); // Додаємо 0 до хвилин, якщо потрібно
    const s = this.seconds.toString().padStart(2, "0"); // Додаємо 0 до секунд, якщо потрібно
    return `${h}:${m}:${s}`;         // Повертаємо форматований рядок часу
  },

  addSeconds(sec) {                 // Метод для додавання секунд
    let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec; // Конвертуємо весь час в секунди
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400; // Нормалізуємо час в межах 24 годин (86400 секунд)
    this.hours = Math.floor(totalSeconds / 3600);            // Обчислюємо години
    this.minutes = Math.floor((totalSeconds % 3600) / 60);   // Обчислюємо хвилини
    this.seconds = totalSeconds % 60;                         // Обчислюємо секунди
  },

  addMinutes(min) {                 // Метод для додавання хвилин
    this.addSeconds(min * 60);      // Конвертуємо хвилини в секунди та додаємо
  },

  addHours(hr) {                   // Метод для додавання годин
    this.addSeconds(hr * 3600);    // Конвертуємо години в секунди та додаємо
  }
};

function addSeconds() {             // Функція для додавання секунд через prompt
  const secStr = prompt("Введіть кількість секунд для додавання:"); // Запитуємо скільки додати секунд
  if (secStr === null) return;      // Якщо користувач скасував — вихід
  let sec = parseInt(secStr);       // Перетворюємо рядок у число
  if (isNaN(sec)) {                 // Якщо введене не число — повідомляємо
    alert("Введіть правильне число секунд");
    return;
  }
  time.addSeconds(sec);             // Додаємо секунди до часу
  time.showTime();                  // Показуємо оновлений час
}

function addMinutes() {             // Функція для додавання хвилин через prompt
  const minStr = prompt("Введіть кількість хвилин для додавання:"); // Запитуємо хвилини
  if (minStr === null) return;      // Якщо скасовано — вихід
  let min = parseInt(minStr);       // Конвертуємо у число
  if (isNaN(min)) {                 // Перевірка на число
    alert("Введіть правильне число хвилин");
    return;
  }
  time.addMinutes(min);             // Додаємо хвилини
  time.showTime();                  // Показуємо результат
}

function addHours() {               // Функція для додавання годин через prompt
  const hrStr = prompt("Введіть кількість годин для додавання:");  // Запитуємо години
  if (hrStr === null) return;       // Якщо скасовано — вихід
  let hr = parseInt(hrStr);         // Конвертуємо у число
  if (isNaN(hr)) {                 // Перевірка числа
    alert("Введіть правильне число годин");
    return;
  }
  time.addHours(hr);               // Додаємо години
  time.showTime();                // Показуємо оновлений час
}

// ----------- Максимум (Звичайний дріб) -----------
class Fraction {                    // Клас для роботи зі звичайними дробами
  constructor(numerator, denominator) { // Конструктор приймає чисельник та знаменник
    if (denominator === 0) throw new Error("Знаменник не може бути 0"); // Знаменник не може бути нуль
    this.numerator = numerator;      // Зберігаємо чисельник
    this.denominator = denominator;  // Зберігаємо знаменник
  }

  add(f) {                         // Додавання дробів
    const num = this.numerator * f.denominator + f.numerator * this.denominator; // Формула чисельника
    const den = this.denominator * f.denominator;                               // Формула знаменника
    return new Fraction(num, den).reduce();                                     // Повертаємо скорочений результат
  }

  subtract(f) {                    // Віднімання дробів
    const num = this.numerator * f.denominator - f.numerator * this.denominator; // Формула чисельника
    const den = this.denominator * f.denominator;                               // Формула знаменника
    return new Fraction(num, den).reduce();                                     // Скорочуємо та повертаємо результат
  }

  multiply(f) {                    // Множення дробів
    const num = this.numerator * f.numerator;    // Множимо чисельники
    const den = this.denominator * f.denominator; // Множимо знаменники
    return new Fraction(num, den).reduce();       // Скорочуємо та повертаємо результат
  }

  divide(f) {                      // Ділення дробів
    if (f.numerator === 0) throw new Error("Ділення на нуль"); // Перевірка ділення на 0
    const num = this.numerator * f.denominator;               // Формуємо чисельник результату
    const den = this.denominator * f.numerator;               // Формуємо знаменник результату
    return new Fraction(num, den).reduce();                   // Скорочуємо і повертаємо результат
  }

  gcd(a, b) {                     // Знаходження найбільшого спільного дільника (НСД) — алгоритм Евкліда
    while (b !== 0) {             // Поки b не 0
      [a, b] = [b, a % b];       // Обмін значеннями: a = b, b = a mod b
    }
    return a;                    // Повертаємо НСД
  }

  reduce() {                     // Скорочує дріб
    const gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator)); // Знаходимо НСД
    this.numerator /= gcd;        // Ділимо чисельник на НСД
    this.denominator /= gcd;      // Ділимо знаменник на НСД
    if (this.denominator < 0) {   // Якщо знаменник від’ємний — міняємо знаки, щоб знаменник був додатним
      this.denominator = -this.denominator;
      this.numerator = -this.numerator;
    }
    return this;                  // Повертаємо скорочений дріб
  }

  toString() {                   // Перетворює дріб у рядок для виводу
    if (this.denominator === 1) return `${this.numerator}`;  // Якщо знаменник 1 — повертаємо просто чисельник
    return `${this.numerator}/${this.denominator}`;          // Інакше повертаємо "чисельник/знаменник"
  }
}

let fraction1 = new Fraction(3, 4);   // Приклад: перший дріб 3/4
let fraction2 = new Fraction(2, 5);   // Приклад: другий дріб 2/5

function performOperation(op) {       // Виконує операцію над дробами, залежно від op
  let result;
  try {
    switch(op) {
      case 'add':
        result = fraction1.add(fraction2);       // Додавання дробів
        break;
      case 'subtract':
        result = fraction1.subtract(fraction2);  // Віднімання дробів
        break;
      case 'multiply':
        result = fraction1.multiply(fraction2);  // Множення дробів
        break;
      case 'divide':
        result = fraction1.divide(fraction2);    // Ділення дробів
        break;
    }
    document.getElementById("output-max").textContent = `Результат: ${result.toString()}`; // Виводимо результат у DOM
  } catch(e) {
    document.getElementById("output-max").textContent = "Помилка: " + e.message;         // Виводимо помилку, якщо є
  }
}

function reduceFraction() {            // Скорочує перший дріб і виводить результат
  fraction1.reduce();
  document.getElementById("output-max").textContent = `Перший дріб після скорочення: ${fraction1.toString()}`;
}