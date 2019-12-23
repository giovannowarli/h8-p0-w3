function angkaPalindrome(num) {
    for (i=0; i<num;i++){
      num++
      var numString = String(num);
      var numLength = numString.length;
      var newString = '';
      for (j=numLength-1; j>=0; j--){
        newString += numString[j];
      }
      if (numString === newString){
        return num;
      }
      }  
    }
      // TEST CASES
      //console.log(angkaPalindrome(8)); // 9
      console.log(angkaPalindrome(10)); // 11
      console.log(angkaPalindrome(117)); // 121
      console.log(angkaPalindrome(175)); // 181
      console.log(angkaPalindrome(1000)); // 1001