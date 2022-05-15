//Solution 1
function sumMix(arr) {
  let sum = 0
  arr.map((el) => {
    sum += parseInt(el)
  })
  return sum;
}

// Solution 2
const sumMixedOneLine = (arr, sum = 0) => 
  arr.map(el => parseInt(el)).reduce((sum, el) => sum + el)

console.log(sumMix([1,'2',3]));
console.log(sumMixedOneLine([1,'2',3]));
