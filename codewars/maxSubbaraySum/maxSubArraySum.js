//Naive solution - Time complexity quadratic O(n^2)
function maxSubarraySum(arr,num) {
  if (num > arr.length) return null;

  let max = -Infinity
  //it will stop before end of array whatewer number N is
  for(let i=0; i<(arr.length - num) + 1; i++) {
      temp = 0;
      for(let j=0; j < num; j++) {
          temp += arr[i+j]
      }
      console.log(temp, max)
      if (temp > max) {
          max = temp;
      }
  }
  return max;
}

//REFACTOR Sliding windoew approach
//Time complexity O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i=0; i < num; i++) {
      maxSum += arr[i]
  }
  tempSum = maxSum;
  for (let i=num; i<arr.length; i++) {
      tempSum = tempSum - arr[i-num] + arr[i];
      maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,3,4,6,6], 5)) // => 16