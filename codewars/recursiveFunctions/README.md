Essential parts of recursive fn:
1.Base Case (without base case stack will be adding functions --> stack overflow)
2.Different input

Helper Method Recursion 
Outer non-recursive fn calls inner recursive function

function outer(input){
  let outerScopedVariable = []

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--) - //calles itself recursively
  }
  helper(input)
  return outerScopedVariable;
}

Pure Recursion
Fn itself is self-contained and recursive
For ARR use method like slice, the spread operator and concat that make copies of arr so you don't mutate them.
For STR - str are immutable so you will need to use slice, substr or substring to make copies of strings.
For OBJ - to make copies of obj use Object.assign or spresd operator