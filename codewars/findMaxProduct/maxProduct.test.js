describe("Basic tests",() =>{
  Test.assertEquals(maxProduct([4,3,5], 2), 20);
//   Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
  Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
  Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
  Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);
  Test.assertEquals(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
  Test.assertEquals(maxProduct([-4,-27,-15,-6,-1], 2), 4);
  Test.assertEquals(maxProduct([-17,-8,-102,-309], 2), 136);
  Test.assertEquals(maxProduct([10,3,-27,-1], 3), -30);
  Test.assertEquals(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
  Test.assertEquals(maxProduct([1], 1), 1);
});

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.