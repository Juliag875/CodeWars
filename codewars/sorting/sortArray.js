function numCompare(num1, num2) {
  return num1-num2 //if negative num1 comes before num2 and if positive vice versa
  }
  console.log([6,4,15,10].sort(numCompare)) //[4,6,10,15]
  
  function numCompare(num1, num2) {
  return num2-num1
  }
  //[15,10,6,4]
  
  function compareByLength(str1, str2) {
  return str1.length - str2.length
  }
  console.log(["Steele", "Colt", "Data Structure"].sort(compareByLength))