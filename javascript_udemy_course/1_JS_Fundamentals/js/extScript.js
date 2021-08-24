// console.log('Ext: Hello World');

// Identifier

userLastName
pageNavigation
devPhase
test123

// Reserved Keywords

case-sensitivity

color				COLOR
instanceof			instanceOf

// statement

console.log('Hello');
console.log('World');

console.log('Error Exists')
[1, 2].forEach( console.log )


// Comments

// This is a single-line comment

// this is block or multi-line comment
// that can have multiple lines

// "udr strict" --> On the top
'use strict'

// this code the works the modern way
...

// var ename;
// ename = 'Smith';
// console.log(ename);

// var ename = 'King',
// 	age = 50,
// 	job = 'President';
// ename = 9999;

// var dept;
// console.log(dept);

// console.log(sal);

// function sayGreeting() {
// 	// local variable
// 	var message = 'Hello';
// 	console.log(message);
// }

// sayGreeting();

// console.log(ename);
// var ename;
// ename = 'Smith';aw

// var ename;
// console.log(ename);
// ename = 'Smith';

// var sal = 2000, age = 40;
// {
// 	let temp = sal;
// 	sal = age;
// 	age = temp;
// }

// console.log(temp);

const DESIGNATION  = 'Manager';
DESIGNATION = 'Salesman';
console.log(DESIGNATION);

var num1 = 123.
// Primitive vs. Reference

// var x = 50;
// var y = x;
// y = 100;

// var num = 100;
 

 // var binNum = 0b11111111;
 // console.log(binNum);

 // var octNum = 0o50
 // console.log(octNum);


//  var hexNum = 0xDE;
//  console.log(hexNum);


// var num1 = 123.45;
// var num2 = .5;;
// console.log(num2);


// console.log(Number.MAX_VALUE);

// console.log(x);
// console.log(y);

var p = {dept: 'R&D'};
var q = p;
q.dept = 'Sales';

console.log(p.dept);
console.log(q.dept);

// console.log(Math.flor(15.8));
// console.log(Math.ceil(15.8));
// console.log(Math.round(15.8));
// console.log(Math trunc(15.0));
// console.log(Math.randow());

// console.log(Math.max(7, -10, 0));
// console.log(Math.min(7, -10, 0));
// console.log(Math.pow(2, 10));

// toFixed()
// var numObj = 56.78;
// console.log(numObj.toFixed());
// console.log(numObj.toFixed(1));
// console.log(numObj.toFixed(4));

// toExponential()
// var x = 70, y = 789000;
// console.log(x.toExponential());
// console.log(y.toExponential());

// // toPrecision()
// var z = 1.456;
// console.log(z.toPrecision()); // 1.456
// console.log(z.toPrecision(2)); //1.5
// console.log(z.toPrecision(1)); //1

// var numObj = new Number(10);
// var num = 10;

// console.log(typeof numObj); // object
// console.log(typeof num);  // number

// console.log(numObj instanceof Number); // true
// console.log(num instanceof Number); // false

// console.log(str.length); //4
// console.log(str.valueOf());
// console.log(str.toString()); // Test

// var ename = 'Smith';
// console.log(ename.toLowerCase()); // Smith
// console.log(ename.toUpperCase());  //SMITH

// console.log(str[0]); //T
// console.log(str.charAt(1)); // e

// var s1 = "Paul";
// var s2 = "Miller";
// var s3 = sl.concat(s2);
// console.log(s3);
// console.log(s1);

// var s4 = s1 + s2;
// console.log(s4);

// substr(startIndex, length)

var str = "Chrome Browser";
// console.log(str.substr(0, 8));  // Chrome B
// console.log(str.substr(8, 4));  // rows

// substing(startIndex, endIndex)

// var str = "Chrome Browser";
// console.log(str.substing(2, 13)); // rome Browse

// string.indexOf(substring, fromIndex);

// var str = "Chrome Browser";
// console.log(str.indexOf('ro', 1));  //2
// console.log(str.indexOf('ro'));     //2

// string.lastIndexOf(substing, fromIndex);

// var str = "chrome Browser";
// console.log(str.lastIndexOf('ro', 6));  //2
// console.log(str.lastIndexOf('ro'));     //8
// console.log(str.lastIndexOf('ro'));     //-1

// var greet = ' Hello ';
// console.log(greet.trim());  //Hello

// firstStr.localeCompare(SecondStr);
// console.log('X'.localeCompare('Y'));    //-1
// console.log('Y'.localeCompare('Y'));    //0
// console.log('Z'.localeCompare('Z')); //1

// var str = 'USE Chrome Browser';
// var regexp str.match(/[SE]/ig);
// console.log();


// var str = 'USE Chrome Browser';
// var pos = str.search(/se/);
// console.log(pos); // 15

// // boolean vs.  Boolean

// var test = Boolean('Hello');
// console.log(test);          // true
// console.log(typeof(test));   // boolean

// var testVal = new Boolean(false);
// console.log(testVal.valueOf());  // false
// console.log(testVal.toString());    //'false'

// var mu = true;
// var sigma = new Boolean(false);

// sigma.primitiveValue = sigma.valueOf();
// console.log(sigma.primitiveValue);  // false

// mu.name = 'primitive';      // TypeError
// console.log(mu.name);       // undefined

// Boolean vs. Boolean

// var test = Boolean('Hello');   
// console.log(test);      // true
// console.log(typeof(test));      //boolean

// var testVal = new Boolean(false);
// console.log(testVal.valueOf());     // false
// console.log(testVal.toString());    // 'false'

// var mu = true;
// var sigma = new Boolean(false);

// sigma.primitiveValue = sigma.valueOf();
// console.log(sigma.primitiveValue);      // false

// //mu.name = 'primitive';          // TypeError
// console.log(mu.name);           // undefined

// console.log(typeof mu);         // boolean
// console.log(typeof sigma);      // object

// console.log(mu instanceof Boolean);     // false
// console.log(sigma instanceof Boolean);  //true

var falseObj = new Boolean(false);

if (falseOj) {
    console.log('Strange part of the Boolean Object');
}






