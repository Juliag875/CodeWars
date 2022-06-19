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


SOLUTIONS FOR THIS SECTION
POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}