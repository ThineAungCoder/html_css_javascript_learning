const myBio = {
	firstName: 'II',
	lestName: 'Yan Tote',
	birthYear: 1987,
	job: 'Developer',
	friends: ['Michal', 'Peter' 'Steven'],
	hasDriversLicense: true,
	calcAge: function(birthYear) {
		return 2021 - birthYear;
	}
}

const calcAge = function(birthYear) {
	return 2021 - birthYear;
}

console.log(myBio.calcAge(1987));
// console.log(myBio['calcAge'](1987));