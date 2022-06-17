// 4! 4 factorial - 4*3*2*1
function factorial(num) {
  let total =1;
  for(let i=num; i>1; i--){
      total *= i
  }
  return total
}

console.log(factorial(3))