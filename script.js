function readNumber() {
  let num;

  do {
    num = prompt("Введите число:", 0);

    if (num === null || num === "") {
      return null;
    }
  } while (isNaN(+num));

  return +num;
}

let value = readNumber();
alert(`Вы ввели: ${value}`);
