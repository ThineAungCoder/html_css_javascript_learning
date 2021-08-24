const calcAge = function(birthYear) {
	return 2021 - birthYear;
}

const yearUntiRetirement = function(birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 -age;
	return retirement
	return `${firstName} retires in ${retiremet} years.`;
}