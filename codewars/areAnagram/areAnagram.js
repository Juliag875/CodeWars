// Write a function that checks if two provided strings are anagrams of each other; 
// letter casing shouldn’t matter. 
// Also, consider only characters, not spaces or punctuation. 
// For example:
// function('finder', 'Friend')  --> true
// function('hello', 'bye') --> false 
 
function areAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') ===
         str2.toLowerCase().split('').sort().join('')
}

console.log(areAnagram('listen', 'silent'));
console.log(areAnagram('they see', 'the eyes')); 