Sorting is a process of rearranging the items in a collection (e.g. array)
so that the items are in some kind of order.

Telling JavaScript how to sort
The built-in sort method accepts an optional comparator function.
You can use this comparator function to tell JavaScript how to sort.
The Comparato looks at pairs of elements (a and b), determines their sort order based on the return value:

- if it returns a negative number, a should come before b
- if positive - a should come after b
- if returns 0 - a and b - are the same as far as sort is concerned

Bubble Sort
Sorting algorithm where the largest values bubble up to the top.
Larger values will bubble the top.

Many sorting algorithms involve some type of swapping functionality(e.g. swapping to numbers to put them in order)
//ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}
//ES2015
const swap = (arr, idx1,idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
