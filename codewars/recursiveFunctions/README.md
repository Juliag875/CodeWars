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