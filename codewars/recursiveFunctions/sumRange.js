function sumRange(num){
  if(num===1) return 1; //base case
  return num + sumRange(num-1)
}


// sumRange(3) waiting
//   return 3 + sumRange(2) waiting for sumRange of 2
//             return 2 + sumRange(1)
//                 return 1 -base case there is no more recursive call
// ---> STACK

console.log(sumRange(3))