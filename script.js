let n = 10;

for (let i = 2; i <= n; i++) {
  let prostoe = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) prostoe = false;
  }

  if (prostoe) console.log(i);
}
