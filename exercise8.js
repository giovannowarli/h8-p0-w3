function pasanganTerbesar(num) {
    numString = num.toString();
    newArr = [];
    for(i=0;i<numString.length-1;i++){
      newArr.push(numString[i]+numString[i+1])
    }
    console.log(newArr);
    let compare = 0;
    for(i=0;i<newArr.length;i++){
      if(newArr[i]>compare){
        compare = newArr[i];
      }
    }
    return compare;
  }
  
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99