function sameFrequency(num1, num2){
  if (num1.length !== num2.length) return false;
    let str1 = num1.toString()
    let str2 = num2.toString()
  
    let freq1 = {}
    let freq2 = {}
      
    for (let i=0; i<str1.length; i++) {
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1
      }
    
    for (let i=0; i<str2.length; i++) {
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1
    }
    
    for (let i in freq1){
        if(freq1[i] !== freq2[i]) return false
    }  

    return true    
  
 }

 console.log(sameFrequency(182,281));
 console.log(sameFrequency(34,14));