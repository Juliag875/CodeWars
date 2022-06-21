//count a number of times a s,aller str appears in a longer str
//a straightforward approach involves checking pairs of characters individually

// Exercise
//loop over the longer string
//loop over shorter str
//if the characters dont match break out of the inner loop
//if they match keep going and if u hit end of short str - u found a match
//if you complete the inner loop and find a match, increment the count of matches
//return count

function naiveSearch (long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++){
    for (let j=0; j < short.length; j++) {
     console.log(short[j], long[i+j] )
     if(short[j] !== long[i+j]) {
      console.log('break')
      break;
     }
      if(j === short.length - 1) {
        console.log('found')
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"))