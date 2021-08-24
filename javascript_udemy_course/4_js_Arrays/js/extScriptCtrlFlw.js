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

var num = '5678';
var queue = [];

for (var i = 0; i < num.length; i++) {
	console.log(num[i]);
	queue.unshift(num[i]);
}

console.log(queue);

// Removal
while (queue.length > 1) {
	queue.shift();
}
console.log(queue);
		

