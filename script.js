let number = 12345;
let sum = 0;

for (let digit of String(number)) {
  sum += Number(digit);
}

console.log(sum);
