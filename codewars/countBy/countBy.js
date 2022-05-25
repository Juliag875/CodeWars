function countBy(x,n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    result.push(i * x)
  }

  return result;
}

console.log(countBy(1,10));
console.log(countBy(2,5));
