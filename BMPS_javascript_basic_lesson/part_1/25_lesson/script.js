// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas) {
// 	console.log('Dolphin win Trophy');
// } else if (scoreKoalas > scoreDolphin) {
// 	console.log('Koalas win Trophy');
// } else {
// 	console.log('Both win Trophy');
// }

const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
	console.log('Dolphin win Trophy');
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
	console.log('Koalas win Trophy');
}  else if (scoreDolphin === scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100) {

}else {
	console.log('No one win');
}