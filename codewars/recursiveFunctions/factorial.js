// 4! 4 factorial - 4*3*2*1
function factorial(num) {
  let total =1;
  for(let i=num; i>1; i--){
      total *= i
  }
  return total
}

//Recursive method
function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorial(num-1)
}

console.log(factorial(3))
console.log(factorialRecursive(5))
console.log(factorial(4))