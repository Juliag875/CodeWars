//Given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and the negatives become positives.
//You can assume that all values are integers. Do not mutate the input array/list

//Solution 1
function invert(arr) {
  return arr.map(num => num * - 1)
}

// Solution 2
function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

//Solution 4
function invert(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] *= -1
  }
  return arr;
}

//Solution 3
// function invert(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     console.log("before " + arr);
//     if (arr[i] === 0) {
//       newArr.push(-0);
//     } else {
//       newArr.push(arr[i] * - 1);
//     }
//   }
//   console.log("after " + arr);
//   return newArr;;
// }


console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([0]));
console.log(invert([]));
