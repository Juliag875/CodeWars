// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrName(name) {
  return name.split(' ').map(el => el[0].toUpperCase()).join('.');
}

console.log(abbrName("Sam Harris"));
console.log(abbrName("Evan Cole"));

//Pseudocode
//split string, take 1st char, capitalize, do this for both words, 
//join by dot, return joined chars