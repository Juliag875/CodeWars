//Naive solution you compare to every single number start at 0 index
//Time complexity O(n^2) Space complexity O(1)
function sumZero(arr) {
  for (let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++) {
          if(arr[i] + arr[j] === 0) {
              return [arr[i], arr[j]]
          }
   }
  }
}

//REFACTORING Multiple pointer pattern 
//Time complexity O(N) Space Complexity O(1)}
function sumZeroMultPointer(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      let sum = arr[left] + arr[right]
      if(sum === 0) {
          return [arr[left], arr[right]]
      }else if(sum>0) {
          right--
      }else {
          left++
      }  
  }
}


  
console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZeroMultPointer([-2,-1,0,1,2,3,5]))