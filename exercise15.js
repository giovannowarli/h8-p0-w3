function groupAnimals(animals) {
    animals.sort();
    //console.log(animals);
    let sortedAnimals = [];
    let compareAlphabet = [animals[0]];
    for (i=1; i <= animals.length-1; i++){
       if(animals[i][0]===compareAlphabet[0][0]){
         compareAlphabet.push(animals[i]);
       } else {
         sortedAnimals.push(compareAlphabet)
         compareAlphabet = [animals[i]];
       }
       
    }
    sortedAnimals.push(compareAlphabet);
    return sortedAnimals;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]