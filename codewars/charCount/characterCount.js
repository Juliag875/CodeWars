// Write a function which takes in a string and returns counts of each charecter in a string 

//Solution 1 with regex

function charCount(str){
  let result = {}
  for(let i=0; i < str.length; i++) {
      let char = str[i].toLowerCase()
      if(/[a-z0-9]/.test(char)) {
          if(result[char] > 0) {
           result[char]++;
          }else{
           result[char] = 1
      }}}
      return result
}

//Solution 2 faster

function charCount(str){
    let obj = {}
    for (let char of str){
      if(isAlphaNumeric(char)) {
        char = char.toLowerCase()
        obj[char] = ++obj[char] || 1
     }
    }
     return obj;
  }

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&  //numeric(0-9)
        !(code > 64 && code < 91) && // alfa (A-Z)
        !(code > 96 && code < 123)) {
        return false;
        }
    return true
}


console.log(charCount("hhello"))
console.log(charCount("HEllo World hi!"))