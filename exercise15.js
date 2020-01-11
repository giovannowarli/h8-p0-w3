function groupAnimals(animals) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = [];
  
  for(i=0;i<alphabet.length;i++){
    newAnimals = [];
    for(j=0;j<animals.length;j++){
      if(animals[j][0] === alphabet[i]){
        newAnimals.push(animals[j])
      }
    }
   if(newAnimals.length < 1 ||newAnimals == undefined){
     continue;
   } else {
     result.push(newAnimals);
   }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]