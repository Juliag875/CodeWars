// Given an array of integers 
// Find the minimum sum which is obtained from summing each Two integers product .

function minSort(arr) {
  let sum = 0;
  let sorted = arr.sort((a,b) => a-b);

  for (let i = 0; i < arr.length/2; i++){
    sum += sorted[i] * sorted[sorted.length-1-i]
  }

  return sum
}

console.log(minSort([5,4,2,3]));
console.log(minSort([12,6,10,26,3,24]));
