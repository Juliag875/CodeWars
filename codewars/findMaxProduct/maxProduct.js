//Given an array/list [] of integers , Find the product of the k maximal numbers.

//Solution 1
function maxProduct(numbers, size){
  return numbers.sort((a,b) => b-a)
  .slice(0, size)
  .reduce((a,b) => a*b)
}

//Solution 2
function maxProduct(numbers, size) {
  nums = numbers.sort((a,b) => b-a)
  let result = 1;
  for (let i=0; i<size;i++){
    result *= numbers[i]
  }
  return result;
}

console.log(maxProduct([4,3,5], 2));
console.log(maxProduct([10,8,7,9], 3))