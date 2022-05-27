describe("Basic tests",() =>{
  Test.assertEquals(nthSmallest([3,1,2],2),2);
  Test.assertEquals(nthSmallest([15,20,7,10,4,3],3),7);
  Test.assertEquals(nthSmallest([-5,-1,-6,-18],4),-1);
  Test.assertEquals(nthSmallest([-102,-16,-1,-2,-367,-9],5),-2);
  Test.assertEquals(nthSmallest([2,169,13,-5,0,-1],4),2);
});


// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

//Explanation:
//Since the passed number is 2 , Then * the second smallest element in this array/list is 2*