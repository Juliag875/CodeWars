function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left+right) / 2);
    let potentialMatch = nums[middle]
     if (nums[middle] === target) {
       return middle
      } else if (potentialMatch > target) {
        right =  middle - 1;
      } else {
        left = middle + 1
      }
  }
  return -1;
}

//Pseudo Code:
//Create variable left / right
//while loop left <= righy
//create middle variable - average of arr - add left + right /2
//create potential match variable - index of middle
//create condition - if potential match equal to target - return middle -index
//if target is < potential match - change right pointer to middle -1
//if target > potential match  change left


console.log(search([-1,0,3,5,9,12], 9));