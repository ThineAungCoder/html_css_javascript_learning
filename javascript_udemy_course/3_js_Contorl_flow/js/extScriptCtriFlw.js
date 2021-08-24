'use strict';

// switch

// switch (x) {
		// case 'value1': // if (x === 'value1')

		// 	...
		// 	[break];
		// case 'value2';

		// 	...
		// 	[break]
		// default:

		// 	...
		// 	[break];
// }

// bar grade = 'B';

// switch (grade) {
// 	case 'A':
// 		console.log('Excellent');
// 		break;
// 	case 'B';
// 		console.log('Well Done');
// 		break;
// 	case 'C'
// }

// whild & do...while statement

// while (condition) {
// 		// loop body
// }

// var count = 0;
// var total = 0;

// console.log('Count: Total:');

// while (count < 3) {
// 	count++;
// 	total += count;
// 	total += count;		// total = total + count;
// 	console.log(count + '\t\t' + total);
// }

// Count  total			
// 1 		1
// 2        2
// 3        6

// do  {
	// loop body
// } while (condition)

// var conut = 0;

// do {
// 	count += 1;		// count = count + 1;
// 	console.log(count);
// } while (count < 5)

// for loop

// for (begin; condition; step) {
// 	loop body
// }

// for (var count = 0; count < 3; count++) {
// 	console.log('Value: ' + count);
// }

//  for (;;) {
// // 	repeats without limits
//  }

 // break, continue & labeled statement

 // for (var count = 1; count < 10; count++) {
 // 	if (count % 5 == 0) {
 // 		break;
 // 	}
 // 	console.log('Value: ' + count);
 // }

 console.log('Count:' + '\t\t' + 'Num');

 markloop:
 for (var count = 0; count < 3; count++) {
 	for (var num = 0; num < 5; num++) {
 		if (num == 1) {
 			conttinue markloop;
 		}
 		console.log(count + '\t\t' + num);
 		if (num == 2) {
 			break markloop;
 		}
 	}
 }

 console.log('Completed !!!');