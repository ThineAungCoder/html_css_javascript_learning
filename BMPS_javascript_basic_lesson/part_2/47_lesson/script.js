const myBio = [
	'IT',
	'Yan Tote',
	2021 - 1987,
	'Developer', ['Michal', 'Peter', 'Steven'],
	true
]

for (let i = 0; i < myBio.length; i++) {
	if (typeof myBio[i] !== 'string') continue;

	console.log(myBio[i], typeof myBio[i]);
}

// const type = [];
// type[0] = 'string';
// type[1] = number;
// type[2] = boolean;

// for (let i = 0; i < myBio.length; i++) {
// 	console.log(myBio[i] (typeof myBio[i]));
// 	type[i] = typeof myBio[i];
// }
// console.log(type);k

const years = [1991,2007,1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
	ages.push(2021 - years[i]);
}

console.log(years, ages);