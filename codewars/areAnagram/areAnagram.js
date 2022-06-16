// Write a function that checks if two provided strings are anagrams of each other; 
// letter casing shouldn’t matter. 
// Also, consider only characters, not spaces or punctuation. 
// For example:
// function('finder', 'Friend')  --> true
// function('hello', 'bye') --> false 
 
function areAnagramOne(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') ===
         str2.toLowerCase().split('').sort().join('')
}

//Solution Frequency Count - O(n)
function areAnagramTwo(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {}
  
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    //if letter exist increment by one otherwise set to 1
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
  }
  console.log(lookup)
  for (let i = 0; i < str2.length; i++){
    let letter = str2[i]
    //cant find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1
    }
  }
  console.log(lookup)
  return true;
}

console.log(areAnagramOne('listen', 'silent'));
console.log(areAnagramTwo('they see', 'the eyes')); 
console.log(areAnagramTwo('car', 'rat'));
console.log(areAnagramTwo('zza', 'aaz'));