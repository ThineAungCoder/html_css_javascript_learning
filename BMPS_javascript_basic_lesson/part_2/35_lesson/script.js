const calcAge2 = brithYear => 2021 - brithYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearUntiRetirement = brithYear => {
	const age = 2021 - birthYear;
	const retirement = 65 - age;
	return`${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(1991, 'BMPS'));
console.log(yearUntilRetirement(1987, 'Mark'));
console.log(yearUntilRetirement(1980, 'Mark'));