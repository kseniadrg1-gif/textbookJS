let number1 = prompt("Введи первое число");
let number2 = prompt("Введи второе число");
if (Number(number1) % Number(number2) === 0) {
  alert("Первое число без остатка делится на второе");
} else {
  alert("Первое число с остатком делится на второе");
}
