function countDown(num) {
    for (let i=num; i > 0; i--) {
      console.log(i)
    }
    console.log('All done')
  }

  //Recursive solution
  function countDownRec(num) {
    //base case
    if(num  <= 0) {
      console.log("all done");
      return;
    }
    console.log(num);
    num--;
    countDown(num)
  }

  console.log(countDown(5))
  console.log(countDownRec(3))
