// const amplitude = colcTempAmplitude([5, 12, 9, 21]);
// console.log(amplitude);

 // -String need to contain day(inidex + 1)
 // -Add ... between elements and start and end of string

 const printForceCase = function(arr) {
 	let str = " ";
 	for (let i = 0; i < arr.length; i++) {
 		str += `S{arr[i]}c`;
 	}
 	console.log(str);
 };
 printForceCase(data1);