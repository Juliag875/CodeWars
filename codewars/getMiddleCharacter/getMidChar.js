//return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function getMiddle(str) {
  let middle = Math.floor(str.length / 2)

  if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle]
  } else {
    return str[middle]
  }
}

console.log(getMiddle("middle"))
console.log(getMiddle("test"))
console.log(getMiddle("testing"))