
//====================1=============//
document.getElementById('btn-1').onclick = function () {
    alert((0.1 + 0.2).toFixed(1));
  };
//====================2==============//
  document.getElementById('btn-2').onclick = function () {
  alert(Number("1") + 2); 
};

//======================3==============//
 document.getElementById('btn-3').onclick = function() {
  const input = prompt('Введіть обсяг флешки (ГБ)');
  if (input === null) return; 

  const flashSize = parseFloat(input);
  if (isNaN(flashSize) || flashSize <= 0) {
    alert('Введіть правильне число більше 0');
    return;
  }

  const count = Math.floor(flashSize * 1024 / 820);
  alert('Ваша флешка може вмістити ' + count + ' файлів');
};


//===================4===============//
document.getElementById('btn-4').onclick = function() {
  // Запитуємо суму грошей у гаманці
  const moneyInput = prompt('Введіть суму грошей у гаманці (грн)');
  if (moneyInput === null) return; // Користувач скасував
  const money = parseFloat(moneyInput);
  if (isNaN(money) || money <= 0) {
    alert('Введіть правильну суму більше 0');
    return;
  }

  // Запитуємо ціну однієї шоколадки
  const priceInput = prompt('Введіть ціну однієї шоколадки (грн)');
  if (priceInput === null) return; // Користувач скасував
  const price = parseFloat(priceInput);
  if (isNaN(price) || price <= 0) {
    alert('Введіть правильну ціну більше 0');
    return;
  }

  // Обчислюємо, скільки шоколадок можна купити (ціле число)
  const count = Math.floor(money / price);
  // Обчислюємо залишок грошей (здачу)
  const change = (money - count * price).toFixed(2);

  alert('Ви можете купити ' + count + ' шоколадок(у),\n' + 
        'залишок грошей: ' + change + ' грн');
};


//================5=============//
document.getElementById('btn-5').onclick = function() {
  const input = prompt('Введіть тризначне число');
  if (input === null) return; // Користувач скасував

  const num = parseInt(input);
  if (isNaN(num) || num < 100 || num > 999) {
    alert('Будь ласка, введіть саме тризначне число');
    return;
  }

  // Отримуємо цифри числа
  const ones = num % 10;           // остання цифра
  const tens = Math.floor((num % 100) / 10);  // середня цифра
  const hundreds = Math.floor(num / 100);     // перша цифра

  // Формуємо число задом наперед
  const reversed = ones * 100 + tens * 10 + hundreds;

  alert('Число задом наперед: ' + reversed);
};



// ============6==============//

document.getElementById('btn-6').onclick = function() {
  const input = prompt('Введіть суму вкладу в банк (грн)');
  if (input === null) return; // Користувач скасував

  const deposit = parseFloat(input);
  if (isNaN(deposit) || deposit <= 0) {
    alert('Введіть правильну суму більше 0');
    return;
  }

  const annualRate = 0.05; // 5% річних
  const months = 2;
  const interest = deposit * annualRate * (months / 12);

  alert('Сума нарахованих відсотків за 2 місяці: ' + interest.toFixed(2) + ' грн');
};

