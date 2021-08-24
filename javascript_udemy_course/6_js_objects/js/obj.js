'use strict';


// object literal
// var emp = {};

// var emp = new Object();
// var emp = new Object(undefined);
// var emp = new Object(null);

// var emp = {
// 	isManager: false,
// 	hired: function() {
// 		this.isManager = true;
// 		console.log('Employee started Working.');
// 	}
// };

// console.log('Are you Manager? ' + emp.isManager);
// // false
// emp.hired();   		// Employee started working.

// // Object constructor
// var emp = new Object();

// emp.isManager = false;
// emp.hired = function() {
// 	this.isManager = true;
// 	console.log('Employee started working.');
// }

// console.log('Are you Manager? ' + emp.isManager);
// // false
// emp.hired();  		// Employee started working.

// types of properties

// Object.defineProperty(1st, 2nd, 3rd,);

// 1st --> object
// 2nd --> property name of the object
// 3rd --> property descriptors: data/ accessor


// Data descriptors:
// 1st --> Enumerable
// 2nd --> Enumerable
// 3rd --> Writable
// 4th --> Value

// var emp = {};

// emp.isManagr = false;
// console.log('Before deletion: ' +emp.isManagr);
// false
// delete emp.isManagr;
// console.log('after deletion: ' + emp.isManagr)
// undefined

// var emp = {};

// object.define property(emp, 'isManager', {
// 	configurable: false,
// 	value: false
// });

// delete emp.isManager; // TypeError

// var emp = {};

// object.define property(emp, 'isManager', {
// 	configurable: false,
// 	value: false
// });
// var emp = {};

// object.define property(emp, 'isManager', {
// 	configurable: false,
// 	value: false
// });

// delete emp.isManager; // TypeError

// var emp = {};

// emp.isManager = false;
// emp.ename = 'Smith';

// for (var property in emp) {
// 	console.log(property);		// isManger, ename
// }

// var emp = {};

// emp.isManager = false;
// emp.ename = 'Smith';

// Object.defineproperty(emp, 'ename', {
// 	enumerable: false
// })

// for (var property in emp) {
// 	console.log(property);
// }

// Accessor property

// var empDetails = {
// 	firstName: 'James',
// 	lestName: 'Miller'
// }

// Object.defineProperty(empDetails, 'fullName', {
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	},
// 	set: function(value) {
// 		var sections = value.split(' ');
// 		if (sectioons.length == 2) {
// 			this.firstName = sections[0];
// 			this.lastName = sections[1];
// 		} else {
// 			throw 'Invalid format: Name';
// 		}
// 	}
// });

// console.log(empDetail.firstName);	// james Miller

// empDetail.fullName = 'Smith Roy';

// console.log(empDetails.firstName); 	// Smith
// console.log(empDetails.lastName);	// Roy
// console.log(empDetails.fullName);  	// Smith Roy

// var empSal = {};

// object.defineProperties(empSal, {
// 	ename: {
// 		value: 'Smith'
// 	},
// 	sal: {
// 		value: 0.2
// 	},
// 	netSal: {
// 		get: function() {
// 			return this.sal * (1 + this.comm);
// 		}
// 	}
// });

// console.log('The net Salary of ' + empSal.ename + 'is
// 	' + empSal.netSal.toFixed(2) + 'USD');

// 	console.log('****************');

// 	var descriptor = 
// 	object.getOwnPropertyDescriptor(empSal, 'ename');

// 	console.log(descriptor.configurable);	// false
// 	console.log(descriptor.writable);		// false
// 	console.log(descriptor.enumerable);		// false
// 	console.log(descriptor.value);			// Smith

// function emp(ename, age) {
// 	return {
// 		enamge: ename,
// 		age: age
// 	};
// }

// var simone = emp('Simone Weber', 27);

// console.log(simone);
// alert(Simone);

// function emp(ename, age) {
// 	return {
// 		ename: ename,
// 		age: age,

// 		toString: function() {
// 			return 'Employee: ' + '\'' + ename +
// 			'\'';
// 		},

// 		valueOf: function() {
// 			return age + ' Years Old';
// 		}
// 	};
// }

// var simone = emp('Simone Weber', 27);

// console.log(simone.toString());
// alert(simone.toString());

// console.log(simone.valueOf());
// alert(simone.valurOf());

let emp = {
	ename: 'Simone Weber',
	age: 27,

	[Symobl.toPrimitive] (hint) {
		console.log(`hint: ${hint}`);

		return hint == 'string' ? 'Employee: ' +
		'\'' + this.ename + '\' ' : this.age;
	}
};

console.log(String(emp));
console.log(+ emp);
console.log(emp + 3);