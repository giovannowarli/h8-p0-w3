function angkaPalindrome(num) {
  for (i=0; i<num; i++) {
    num++
    // console.log(num);
    var numString = num.toString();
    var numBalik = '';
    for (j=numString.length-1; j>= 0; j--){
      numBalik += numString[j];
    }
    if (numString === numBalik){
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