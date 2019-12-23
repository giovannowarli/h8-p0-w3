function pasanganTerbesar(num) {
    var numString = String(num);
    var arr = [];
    var largestArr=[];
    for (i=0;i<numString.length-1;i++){
        arr.push(Number(numString[i]+numString[i+1]));
    }
          return Math.max(...arr);
      }
  
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99