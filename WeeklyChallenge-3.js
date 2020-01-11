/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 */
function mineCraft(mine, steps) {
	const mineral = ['c','s','g','d'];
	let arrayTampung = [];
	let counter = steps;
	for(i=0;i<mine.length;i++){
	  for(j=0;j<mine[i].length;j++){
		if(counter === 0){
		break;
		}
		counter--
		if(mine[i][j]==='c'
		  ||mine[i][j] ==='s'
		  ||mine[i][j] ==='g'
		  ||mine[i][j] ==='d'
		  ){
			arrayTampung.push(mine[i][j])
		  }
		}
	}
	var sortedArr = []
	  for(i=0;i<mineral.length;i++){
		  var temp =[];
		  for(j=0;j<arrayTampung.length;j++){
			  if (mineral[i]===arrayTampung[j]){
				  temp.push(arrayTampung[j]);
			  }
		  }
		  if(temp.length < 1 || temp === undefined){
			  continue
		  } else {
		  sortedArr.push(temp);
		  }
	  }
	var finalArr = [];
	for(i=0;i<sortedArr.length;i++){
		if(sortedArr[i][0]==='c'){
			finalArr.push([sortedArr[i].length,'copper'])
		} else if (sortedArr[i][0]==='s') {
			finalArr.push([sortedArr[i].length,'silver'])
		} else if (sortedArr[i][0]==='g') {
			finalArr.push([sortedArr[i].length,'gold'])
		} else if (sortedArr[i][0]==='d') {
			finalArr.push([sortedArr[i].length,'diamond'])
  		}
	}	

	return finalArr;
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// // [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// // [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]