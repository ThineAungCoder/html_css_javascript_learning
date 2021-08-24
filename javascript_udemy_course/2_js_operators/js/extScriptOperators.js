'use strict';

// operand
// 10/2

// expression

// x = y;

// console.log(10/ 2); 	//5
// console.log(10 / 2 === 10.0 / 2.0);		// true

// console.log(10 % 7);	//3
// console.log(10 % 2);	//0

// console.log(2 ** 2); 	// 4
// console.log(2 ** 4); 	// 16

// var x1 = 3;
// console.log(++x1);

// var y1 = 8;
// console.log(y1++);

// var z = y1;
// console.log(zl);

// var x = 10;
// console.log(-x);

// var m = 10, n = 7;
// console.log(m - n);

// var str = 'alpha' + 'bet';
// console.log(str);

// console.log( '10' + 20); 	// 1020
// console.log(20 + '10');		// 2010

// console.log(3 + 3 + '2');

// comparison operators

// console.log(50 > 20);	// true
// console.log(50 == 20);	// False
// console.log(50 == 50);	// true
// console.log(50 != 20);	// true

// console.log('Z' > 'A');		// true
// console.log('Tony' > 'Tiny');	// true

// console.log('6' > 'A');
// console.log('02' == 2);	

// console.log(true == 1);		// true
// console.log(false == 0);	// true
// console.log(' ' === false); // true

// console.log(0 === false);		// false
// console.log('' === false);		// false
// console.log('' !== false);		//true

// logical operators

// console.log(false && false);		// false
// console.log(false && true);			// false
// console.log(true && false);			// false
// console.log(true && true);	 		// true

// var isAge = 30;
// var isEyeSight = 0.75;

// if (isAge >= 18 && isEyeSight >= 0.5) {
// 	console.log('Issue Driving Li')
// } else {
// 	console.log('Un-Authorized Candidate');
// }

// console.log( !true);	// false
// console.log( !!true);   // true
// console.log(!!true);	// console.log( true);	

var testScore = prompt('Enter the marks obtained?',
	'');

// if (testScore > = 90) {
// 	console.log('Grade A');
// } else if (testScore >= 70) {
// 	console.log('Grade B');	
// } else if (testScore >= 50) {
// 	console.log('Grade C');
// } else {
// 	console.log('Grade D');
// }

var grade = (testScore >= 90) ? console.log('Grade A'):
			(testScore >= 70) ? console.log('Grade B'):
			(testScore >= 50) ? console.log('Grade C'):