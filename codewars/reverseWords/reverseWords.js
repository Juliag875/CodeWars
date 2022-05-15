//Complete the function that accepts a string parameter, and reverses each word in the string. 

//Solution 1
function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')   
}

//Solution 2 - Regex
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

//Solution 3 - for loop
function reverseWords(str) {
  let reverseWord = '';
  let reverseStr = '';
  for (let i = 0; i<str.length; i++){
    if(str[i] != ' ') {
    reverseWord += str[i]
  } else {
    reverseStr += reverseWord + ' ';
    reverseWord = '';
  }
}
 return reverseStr + reverseWord;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('apple'))