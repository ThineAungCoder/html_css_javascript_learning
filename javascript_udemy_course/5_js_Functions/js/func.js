'use strict';

// function addition(numq, num2) {
// 	var sum = num1 + num2;
// 	return sum;
// }

// var result = addition(10, 5);	
// console.log(result);  // 15

// //================================

// var result = addition(10, 5);	
// console.log(result);  // 15

// function addition(numq, num2) {
// 	var sum = num1 + num2;
// 	return sum;
// }

// var addition = new Function('a', 'b', 'return a + b');
// console.log(addition(10, 20) );  // 30

// var result = addition(10, 5);
// console.log(result);

// function addition() {
// 	var sum = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;  //15
// }

// ================================

// var result = addition(10, 5);	
// console.log(result);  // 15

// function addition(numq, num2) {
// 	var sum = num1 + num2;
// 	return sum;
// }

// var  result function addition(numq, num2) {
// 	var sum = num1 + num2;
// 	return sum;
// };

// var total = result(10, 20);
// console.log(total);  // 30

 // javascript function type


// var result = function (a, b, c) {
// 	var sum = a + b + c;
// 	console.log(sum);
// }

// console.log(result.name);	// result
// console.log(result.length);	//3
// console.log(result.prototype);		// object{}
// console.log(result(10, 20, 30)) // 40

// var shares = [
// 	{name: 'TATA', price: 600},
// 	{name: 'SUZLON', price: 50},
// 	{name: 'ICICI', price: 250}
// ];

// function displayShares(shares) {
// 	console.log('Name: \t Price:');
// 	for (var i = 0; i < shares.length; i++) {
// 		console.log(`${Shares[i].name} \t
// 		${Shares[i].price}`);
// 	}
// };

// function compareBy(property() {
// 	return function(a, b) {
// 		var propA = a[property];
// 		var propB = b[property];
// 		if (propA , propB) {
// 			return -1;
// 		}
// 		if (propA < propB) {
// 			return 1;
// 		}
// 		return 0;
// 	}
// }

// console.log('Un-Sorted:');
// displayShares(shares);

// console.log('=========================');
// console.log('Sorted by Name:');
// displayShares(shares.sort(cpmpareBy('name')));

// console.log('=========================');
// console.log('Shorted by Price:');
// displayShares(shares.sort(compareBy('price')));

// this

// console.log(this === window);		// true

// this.x - 'GLOBAL';
// console.log(window.x);		// GLOBAL
// console.log(x);

// function f1() {
// 	return this;
// }
// console.log(f1() === window);		// true

// function f2() {
// 	'use strict';
// 	return this;
// }
// console.log(f2() === undefined);		// true

// apply() & call()

// var obj = {animal: 'Lion', sleepDuration: '14 and 18 
// hours.'};

// function greet(greeting) {
// 	console.log(greeting);
// 	var reply = [this.animal, 'typically sleep
// 	vetween', this.sleepDuration].join(' ');
// 	console.log(reply)

// }

// greet.apply(obj, ['Welcome to Forest:']);

// greet.call(obj, 'Welcome to Forest:');

// bind()

// var module = {
// 	obj: {animal: 'Lion', sleepDuration: '14 and 18
// 	hours'},
// 	getObj: function() {
// 		var reply = [This.obj.animal, 'typically sleep
// 		between', this.obj.sleepDuration].join(' ');
// 		return reply;
// 	}
// }

// var module = {
// 	obj: {animal: 'Lion', sleepDuration: '14 and 18
// 	hours'},
// 	getObj: function() {
// 		var reply = [This.obj.animal, 'typically sleep
// 		between', this.obj.sleepDuration].join(' ');
// 		return reply;
// 	}
// }

// recursion

// Factorial of 4;
// 4! = 4 x 3 x 2 x 1 = 24

// function factorial(n) {
// 	var result = 1;
// 	for(var i = n; i > 1; i--) {
// 		result *= i;
// 	}
// 	return result;
// }
// console.log(factorial(4));		//24

// var factorial = function fact(n) {
// 	return n < 2 ? 1 : n * fact(n - 1);
// };
// console.log(factorial(4));  	// 24

// function product() {
// 	var company = 'Google';
// 	function originatorOfGoogle() {
// 		console.log(company);
// 	}
// 	originatorOfGoogle();
// }
// // product()

// // closure

// var prefix = 'The product is - '; 
//  function product() {
// 	var company = 'Google';
// 	function originatorOfGoogle() {
// 		bar browser = 'Chrome;'
// 		console.log(prefix + company + browser);
// 	}
// 	return originatorOfGoogle;
// }
// var chrome = product();
// chrome();  //The  product is - Google: Chrome 

// Case 1:

// function product(company) {
// 	var prefix = 'The product is - ';
// 	function browserName(browser) {
// 	return prefix + company + ': ' + browser;

//    }
//    return browserName;

// }

// var prodOfGoogle = product('Google');
// console.log(prodOfGoogle('chrome'));		// The product
// is - Google: Chrome

// var prodOfMozilla = product('Mozilla');
// console.log(prodOfMozilla('Firefox'));		// The
// product is - Mozilla: Firefox

// Case 2;
// function productId() {
// 	var productId = 700;

// 	return {
// 		getID: function() {
// 			return productId;
// 		},
// 		setID; function(newId) {
// 			productId = newId;
// 		}
// 	}
// }

// var webBrowserId = productId();

// console.log( webBrowserId.getId() );		// 700
// webBrowserId.setID(500);
// console.log( webBrowserId.setID() );  // 500 

// Case 3

//  function productIdCreator(webBrowsers) {
//  	var i;
//  	var serialNo = 100;

//  	for (i = 0; i < webBrowsers.length; i++) {
//  		webBrowsers[i]['id'] = function(j) {
//  			retun function() {
//  				retun serialNo + j;
//  				()
//  			}
//  		}
//  	}
//  	retun webBrowsers;
//  }

// var webProducts = [{browser: 'Chrome', id: 0},
//  					{browser: 'Firefox', id: 0},
//  					{browser: 'Explorer', id: 0}];

//  var createIdForWebProducts = 
//  productIdCreator(webProducts);

//  var createIdForWebProducts[0];
//  console.log(chromeId.id());    // 103

//  var firefoxId = createIdForWebProducts[1];
//  console.log(firefoxId.id());   // 103

//  var explorerId = createIdForWebProducts[2];
// console.log(explorerId.id());   // 103

// // Fix using IIFE:


//  function productIdCreator(webBrowsers) {
//  	var i;
//  	var serialNo = 100;

//  	for (i = 0; i < webBrowsers.length; i++) {
//  		webBrowsers[i]['id'] = function(j) {
//  			return function() {
//  				return serialNo + j;
//  				(i);
//  			}
//  		}
//  	}
//  	retun webBrowsers;
//  }

// var webProducts = [{browser: 'Chrome', id: 0},
//  					{browser: 'Firefox', id: 0},
//  					{browser: 'Explorer', id: 0}];

//  var createIdForWebProducts = 
//  productIdCreator(webProducts);

//  var createIdForWebProducts[0];
//  console.log(chromeId.id);    // 103

//  var firefoxId = createIdForWebProducts[1];
//  console.log(firefoxId.id);   // 103

//  var explorerId = createIdForWebProducts[2];
// console.log(explorerId.id);   // 103

// Timers

// var id = setTimeout(fn, delay);
// function delayedWarning() {
// 	timeoutId = window.setTimeout(ShowWarning, 2000);
// }

// function ShowWarning() {
// 	console.log('Delayed by 2 seconds !!!');
// 	clearTimeout(timeoutId);
// 	console.log('!! Execution Stopped !!');
// }

// console.log('!! Execution Started !!');
// delayedWarning();

// var id = setInterval(fn, delay); 

// var count = 0;
// function delayedWarning() {
// 	window.setInterval(showWarning, 2000);
// }

// function showWarning() {
// 	console.log('Recursive delay:' + (++ count));
// }

// console.log('Execution Started !!');
// delayedWarning();

// clearInterval(id)

// var timeoutId;
// var count = 0;
// function delayedWarning() {
// 	window.setInterval(showWarning, 2000);
// }

// function showWarning() {
// 	console.log('Recursive delay:' + (++ count));

// 	if (count === 3) {
// 		clearInterval(timeoutId);
// 		console.log('Execution Stopped !!'); 
// 	}
// }

// console.log('Execution Started !!');
// delayedWarning();