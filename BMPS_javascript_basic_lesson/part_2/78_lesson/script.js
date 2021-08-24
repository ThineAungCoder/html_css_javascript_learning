let score = 20;
let hightScore = 0;
const displayMessage = function(message) {
	
}


// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('.click', function() {

})
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
//When There is no input
if (!guess) {
	document.querySelector('.message').textContent = 'No Number';
	//When Player Win
} else if (guess === secretNumber) {
	displayMessage('Correct Number');
	document.querySelector('.number').textContent = secretNumber;
	document.querySelector('.body').style.backgroundColor = 'green';
	document.querySelector('.number').style.width = '30rem';
	
	if (score > hight5core)  {
		hight5core = score;
		document.querySelector('.highscore').textContent = hightScore;
	}

} else if (guess !==secretNumber) {
	if (score > 0) {
		displayMessage(guess > secretNumber ? 'Too Hight' : 'Too Low');
		score--;
		document.querySelector('.score').textContent = score;
	} else {
		displayMessage('Loose The Game');
		document.querySelector('.score').textContent = 0;

	} 


		// When Guess is Too Low
} else if (guess < secretNumber) {
	if (score > 0) {
		document.querySelector('.message').textContent = 'Too Low';
		score--;
		document.querySelector('.score').textContent = score;
	} else{
		document.querySelector('.message').textContent = 'Loose The Game';
		document.querySelector('.score').textContent = 0;
	}
}

document.querySelector('.again').addEventListener('.click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.randon() * 20) + 1;
	displayMessage('Start guessing...');
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


