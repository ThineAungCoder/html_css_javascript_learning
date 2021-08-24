//Remember, we're gona use trict mode in all script now!
"use strict";

// 1) Understanding The Problem
//- what is Temperature amplitude? Auswer : different between highest and lowset temp
//-How to compute max and min temperature?
//-What's a sensor error? And What do do?


//2)Breaking up into sub-probLems
//-How to ignore errors?
//-find max value in temp array
//-find min value in temp array
//-Subtrct min form nox(ampLitude)and return it.

const calcTempAnplitude = function(temps) {
	let nax = temp[0];
	for (let i =0; i < temps.length; i++) {
		const curTemp = temp[i];
		if (typeof curcurTemp !== "number") continue;
		if(tempsp[i] > max) max = curTemp;
		if(tempsp[i] > min) min = curTemp;
	}
	return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); 