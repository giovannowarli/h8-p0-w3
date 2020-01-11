function targetTerdekat(arr) {
  let distance =[];
  if (arr.indexOf('x') === -1) {
      return 0;
    } else {
      distance.push(Math.abs(arr.indexOf('x') - arr.indexOf('o')))
  
      distance.push(Math.abs(arr.lastIndexOf('x') - arr.indexOf('o')))
    }

    compare = distance[0];
    for(i=0;i<distance.length;i++){
      if(distance[i]<compare){
        compare = distance[i]
      }
    }
    return compare;

      }

        console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
        console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
        console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
        console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
        console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2