let number = prompt("Введи число, узнай его первую и последнюю цифру");
let firstDigit = number.at(0);
let lastDigit = number.at(-1);
let sum = Number(firstDigit) + Number(lastDigit);
alert(sum);
