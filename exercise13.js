function targetTerdekat(arr) {
    let distance =[];
    if (arr.indexOf('x')=== -1){
      return 0;
    } else{
      const oIndex = arr.indexOf('o')
      for(i=oIndex; i<arr.length; i++){
        if (arr[i]==='x') {
          distance.push(i-oIndex)
        }
      }
      for (let i = 0; i < oIndex; i++) {
      if (arr[i] === 'x') {
        distance.push(oIndex - i)
      }
    }
    }
    return Math.min(...distance);
        }
      

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2