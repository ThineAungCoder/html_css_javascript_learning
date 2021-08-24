'use strict';

// array

// var colors = new Array();

// var depts = [];

var fuits = ['Apple', 'Banana', 'Mango'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[3] = 'Coconut';
// fruits[1] = 'Guava';

// console.log(fruits.length); 	// 4
// console.log(fruits);

// console.log(typeof fruits); 	// object
// console.log(Array.isArray(fruits));  // true

// console.log(fruits.toString());
// console.log(fruits.valueOf());

// console.log(fruits.join(' $ '));
// console.log(fruits.join(' - '));

// var mixarr = [ {ename: 'Smith'},
// 	false,
// 	function() {console.log('Hello')},
// 	'Apple'];

// console.log(mixArr[0].ename);		// Smith
// mixArr[2]();						// Hello

var cubes = [
	[1, 2, 3],
	[4, 5, 6]
];

for (var i = 0; i < cubes.length; i++) {
	var cube = cubes[i];
	for (var j = 0; j < cube.length; j++) {
		console.log('cube[' + i + '][' + j + '] '+ cube[j]);
	}
}
// Stack

// var stack = [];

// stack.push(1);
// console.log(stack);		// [1]

// stack.push(2);
// console.log(stack);		// [1,2]

// stack.push(3);
// console.log(stack);		// [1,2,3]

// console.log(stack.pop());
// console.log(stack);		// [1,2]

// console.log(stack.pop());
// console.log(stack);		// [1]

// console.log(stack.pop());
// console.log(stack);		// []

// console.log(stack.pop());		// undefined

// function reverse(str) {
// 	var stack = [];
// 	for (var i = 0; i < str.length; i++) {
// 		stack.push(str[i]);
// 	}

// 	var reverseeStr = ' ';
// 	while (stack.length > 0) {
// 		reverseeStr = reverseeStr + stack.pop;
// 	}

// 	console.log(reverseeStr) {

// 	}
// }

// reverseeStr('JavaScript');

// Queue

// var num = '5678';
// var queue = [];

// for (var i = 0; i < num.length; i++) {
// 	console.log(num[i]);
// 	queue.unshift(num[i]);
// }

// console.log(queue);

// // Removal
// while (queue.length > 1) {
// 	queue.shift();
// }
// console.log(queue);
		

// shallow copy

// // spilce()

// var months = ['jan', 'Feb', 'Mar', 'Apr', 'May',
// 				'Jun'];
// var deleteMonths = months.splice(0, 4);

// console.log(months);		//[May, Jun]
// console.log(deleteMonths);	// [Jan, feb, Mar, Apr]

// var months = ['Jul', 'Aup', 'Nov', 'Dec'];
// months.splice(2, 0, 'Sep', 'Oct');

// console.log(months);		//[Jul, aug. Sep, Oct, Nov,
// 	// Dec];

// arr.slice(start stop);


// var depts = [10, 20, 30, 40, 50];
// var newDepts = depts.slice();

// console.log('depts: ' + depts);	// [10, 20, 30, 40, 50];
// console.log('newDepts: ' + newDepts); // [10, 20, 30, 40, 50]

// var depts = [10, 20, 30, 40, 50];
// var newDepts = depts.slice(0, 3);

// console.log('depts: ' + depts);

// indexOf()

// arr.indexOf(searchElement,fromIndex);

// var depts = [40, 30, 20, 40, 20];

// console.log(depts.indexOf(30));   //1
// console.log(depts.indexOf(40));   //0
// console.log(depts.indexOf(20));   //2
// console.log(depts.indexOf(50));   //-1

// console.log(depts.indexOf(40, -5 ));   //5 + (-5) = 0
// // ==> 0
// console.log(depts.indexOf(30, -2));   // 5 + (-2) = 3

// function locateAll(element, arr) {
// 	var reslts = [];
// 	var idx = arr.indexOf(element);

// 	while (idx != -1) {
// 		results.push(idx);
// 		idx = arr.indexOf(element, idx + 1);
// 	}

// 	return results;
// }

// var depts = [40, 30, 20, 40, 20];
// console.log(locateAll(20, depts)); // [2, 4,]

// lastIndexOf()
// arr.lastIndexOf(searchElement, fromIndex);

// var depts =[40, 30, 20, 40, 20];

// console.log(depts.lastIndexOf(40)) //3
// console.log(depts.lastIndexOf(30)) //1
// console.log(depts.lastIndexOf(20)) //4
// console.log(depts.lastIndexOf(50)) //-1

// find()
// var gadgets = [
// 	{name: 'Apple', quantity: 3},
// 	{name: 'Nokia', quantity: 0},
// 	{name: 'Mi', quantity: 7}
// ];

// function isMi(mobile) {
// 	return mobile.name === 'Mi';
// }

// var result = gadest.find('isMi');
// var result = gadets.find(mobile => mobile.name === 'Mi');

// console.log(result);  //{name: 'Mi', quantis}

// findIndex()// 

// var gadgets = [
// 	{name: 'Apple', quantity: 3},
// 	{name: 'Nokia', quantity: 0},
// 	{name: 'Mi', quantity: 7}
// ];

// function isMi(mobile) {
// 	return mobile.name === 'Mi';
// }

// var result = gadest.find('isMi');
// var result = gadets.find(mobile => mobile.name === 'Mi');

// console.log(result);  //{name: 'Mi', quantis}

// reduce() and reduceRight()

// var numbers =[1, 2, 3, 4, 5];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// }

console.log(sum);		// 15

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(previous, current) {
	return previous + current;
});

console.log(sum);  //
