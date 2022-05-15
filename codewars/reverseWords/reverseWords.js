//Complete the function that accepts a string parameter, and reverses each word in the string. 

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('apple'))