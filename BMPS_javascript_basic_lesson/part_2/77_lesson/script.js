const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
//When There is no input
if (!guess) {
	document.querySelector('.message').textContent = 'No Number';
	//When Player Win
} else if (guess === secretNumber) {
	document.querySelector('.message').textContent = 'Correct Number';
	document.querySelector('.number').textContent = secretNumber;
	document.querySelector('.body').style.backgroundColor = 'green';
	document.querySelector('.number').style.width = '30rem';
	//When Guess is too high

} else if (guess > secretNumber) {
	if (score > 0) {
		document.querySelector('.message').textContent = 'Too Low';
		score--;
		document.querySelector('.score').textContent = score;
	} else {
		document.querySelector('.message').textConten = 'Loose The Game';
		document.querySelector('.score').textContent = 0;
	}

};

document.querySelector('.again').addEventListener('.click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.randon() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = ' ';
	document.querySelector('.body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});

if (score > hightScore) {
	hightScore = score;
	document.querySelector('.hightScore').textContent = hightScore;
}
//When guess is too high


