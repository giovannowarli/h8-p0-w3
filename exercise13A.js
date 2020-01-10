function targetTerdekat(arr) {
    let distance =[];
    if (arr.indexOf('x') === -1) {
        return 0;
      } else {
        const distanceLeft = Math.abs(arr.indexOf('x') - arr.indexOf('o'))
    
        const distanceRight = Math.abs(arr.lastIndexOf('x') - arr.indexOf('o'))
    
        return Math.min(distanceLeft, distanceRight)
      }
        }


        console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
        console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
        console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
        console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
        console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2