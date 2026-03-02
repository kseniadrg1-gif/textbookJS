function sumInput() {
  let numbers = []; // Создаем пустой массив для чисел

  while (true) {
    // Бесконечный цикл
    let value = prompt("Введите число", 0); // Запрашиваем значение

    // Проверяем, нужно ли остановить ввод
    if (value === null || value === "" || isNaN(value)) {
      break; // Выходим из цикла
    }

    numbers.push(Number(value)); // Преобразуем в число и добавляем в массив
  }

  // Подсчитываем сумму
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  return sum; // Возвращаем сумму
}

// Вызов функции
let result = sumInput();
alert("Сумма: " + result);
