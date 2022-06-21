//define a function, takes an arr - numbers
//start looping with a variable called i the end of the arr towards the beginning
//Start an inner loop with a variable j from the beginning until i-1
//if arr[j] is greater than arr[j+1] => swap those 2 values!

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        //SWAP
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log("one pass complete")
  }
  return arr;
}

//ES2015 Solution
function bubbleSortES(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i-1; j++) {
        if (arr[j] > arr [j+1]) {
          swap(arr, j, j+1)
        }
      }
    }
  
  return arr;
}

console.log(bubbleSort([37,45,29,8,12,-3,88])) 
console.log(bubbleSortES([36,44,26,7,11,-5,89])) 