//Fn accepts an arr and a value
//loop through the arr and check if current element is equal to the value
//return index at which element is found
//if value never found return -1
//O(n)
function linearSearch(arr, value) {
  for (let i=0; i < arr.length; i++) {
    // console.log(i, value)
    if (arr[i] === value) return i 
  }
  return -1;
}


console.log(linearSearch([1,2,3], 3))
console.log(linearSearch([1,2,5,6,37,3], 37))