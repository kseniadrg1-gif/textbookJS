let arr = [5, 6, 7, 8, 11, 12];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    sum += arr[i];
  }
}
console.log(sum);
