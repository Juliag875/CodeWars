//write fn accepts SORTED arr and number we r looking for
//create left pointer at start, and right length - 1
//loop over while left comes before right 
//pick middle position - create pointer
//if u find value - return index
//if value is too small - move left pointer up
//if val too large - move pointer down
// if u never find value - return -1

// Time complexity = lenght of arr growth - O(log n) - to to what power gives us n - worst case and average, O(1) - best case

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
      console.log(start, middle, end)
      if (elem < arr[middle]) {
          end = middle -1
      } else {
          start = middle + 1
      }
      middle = Math.floor((start+end) / 2)
  }
  console.log(start, middle, end)
  return arr[middle] === elem ? middle : -1
  //or
  // if (arr[middle] === elem) {
  //     return middle;
  // }
  // return -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 50))
console.log(binarySearch([2,5,6,9,13,15,28,30], 15))