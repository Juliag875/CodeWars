//define a function, takes an arr - numbers
//start looping with a variable called i the end of the arr towards the beginning
//Start an inner loop with a variable j from the beginning until i-1
//if arr[j] is greater than arr[j+1] => swap those 2 values!

function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      console.log(arr)
      if(arr[j] > arr[j+i]) {
        //SWAP
        let temp = arr[j];
        arr[j] = arr[i]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37,45,29,81]))