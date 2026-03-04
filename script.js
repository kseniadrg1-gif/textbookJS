function sumSalaries(salaries) {
  sum = 0;
  let values = Object.values(salaries);
  for (let value of values) {
    sum += value;
  }
  return sum;
}
