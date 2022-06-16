//Naive approach O(n^2) quadratic
function sameOne(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for (let i=0; i< arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i]**2)
    if(correctIndex === -1){ //-1 meaning not there
      return false;
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1) //// Removes 1 item at index 1
  }
  return true;
}

console.log(sameOne([1,2,3,2], [9,1,4,4]))

// REFACTOR Linear time O(n) - 3n --> n
function sameTwo(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  let freqCounter1 = {}
  let freqCounter2 = {}
  //2 loops better than nested
  for(let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1 //number of times value occures in arr
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }

  console.log(freqCounter1)
  console.log(freqCounter2)

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false
    }
  }
  
  return true
}

console.log(sameTwo([1,2,3,2], [9,1,4,4]))
console.log(sameTwo([1,2,3,2,5], [9,1,4,4,11]))
  
