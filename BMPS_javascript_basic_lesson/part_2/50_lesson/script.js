const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; 1 < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.
}

console.log(bills, tips, total);

const calcAverage = function(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr,length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));