"use strict";

//====================1=============//
document.getElementById('btn-1').onclick = function () {
  alert((0.1 + 0.2).toFixed(1));
}; //====================2==============//


document.getElementById('btn-2').onclick = function () {
  alert(Number("1") + 2);
}; //======================3==============//


document.getElementById('btn-3').onclick = function () {
  var input = prompt('Введіть обсяг флешки (ГБ)');
  if (input === null) return;
  var flashSize = parseFloat(input);

  if (isNaN(flashSize) || flashSize <= 0) {
    alert('Введіть правильне число більше 0');
    return;
  }

  var count = Math.floor(flashSize * 1024 / 820);
  alert('Ваша флешка може вмістити ' + count + ' файлів');
}; //===================4===============//


document.getElementById('btn-4').onclick = function () {
  // Запитуємо суму грошей у гаманці
  var moneyInput = prompt('Введіть суму грошей у гаманці (грн)');
  if (moneyInput === null) return; // Користувач скасував

  var money = parseFloat(moneyInput);

  if (isNaN(money) || money <= 0) {
    alert('Введіть правильну суму більше 0');
    return;
  } // Запитуємо ціну однієї шоколадки


  var priceInput = prompt('Введіть ціну однієї шоколадки (грн)');
  if (priceInput === null) return; // Користувач скасував

  var price = parseFloat(priceInput);

  if (isNaN(price) || price <= 0) {
    alert('Введіть правильну ціну більше 0');
    return;
  } // Обчислюємо, скільки шоколадок можна купити (ціле число)


  var count = Math.floor(money / price); // Обчислюємо залишок грошей (здачу)

  var change = (money - count * price).toFixed(2);
  alert('Ви можете купити ' + count + ' шоколадок(у),\n' + 'залишок грошей: ' + change + ' грн');
}; //================5=============//


document.getElementById('btn-5').onclick = function () {
  var input = prompt('Введіть тризначне число');
  if (input === null) return; // Користувач скасував

  var num = parseInt(input);

  if (isNaN(num) || num < 100 || num > 999) {
    alert('Будь ласка, введіть саме тризначне число');
    return;
  } // Отримуємо цифри числа


  var ones = num % 10; // остання цифра

  var tens = Math.floor(num % 100 / 10); // середня цифра

  var hundreds = Math.floor(num / 100); // перша цифра
  // Формуємо число задом наперед

  var reversed = ones * 100 + tens * 10 + hundreds;
  alert('Число задом наперед: ' + reversed);
}; // ============6==============//


document.getElementById('btn-6').onclick = function () {
  var input = prompt('Введіть суму вкладу в банк (грн)');
  if (input === null) return; // Користувач скасував 

  var deposit = parseFloat(input);

  if (isNaN(deposit) || deposit <= 0) {
    alert('Введіть правильну суму більше 0');
    return;
  }

  var annualRate = 0.05; // 5% річних

  var months = 2;
  var interest = deposit * annualRate * (months / 12);
  alert('Сума нарахованих відсотків за 2 місяці: ' + interest.toFixed(2) + ' грн');
};