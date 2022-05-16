//Solution 1 - for loop
const number = function(busStop) {
  let remaining = 0;
  for (let i=0; i < busStop.length; i++){
    remaining += busStop[i][0] - busStop[i][1]
  }
  return remaining;
}

//Solution 2 - reduce() method
function numberReducer(arr) {
  return arr.reduce((sum, i) => sum + (i[0] - i[1]), 0)
}


console.log(numberReducer([[10,0],[3,5],[5,8]]));

console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); 