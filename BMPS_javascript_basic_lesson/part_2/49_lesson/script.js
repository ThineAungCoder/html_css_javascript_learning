let rep = 1;
while (rep <= 10) {
	console.log('Lifting Weight Repetition ${rep}');
}

let dice = Math.random() * 6;
// console.log(dice);

while (dice ! == 6) {
	console.log(`You Rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;

	if (dice === 6) console.log('Loop is about to end ....');
}