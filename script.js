let styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-ролл");

console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";

console.log(styles);

let firstElement = styles.shift();
console.log(firstElement);

console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);
