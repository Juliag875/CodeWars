//Given an array/list [] of integers , 
//Find the Nth smallest element in this array of integers

function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos-1]
}

console.log(nthSmallest([3,1,2], 2));
console.log(nthSmallest([15,20,7,10,4,3],3));