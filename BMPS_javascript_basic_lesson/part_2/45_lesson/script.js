const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	hightL 1.69,
	calcBMI: function() {
		this.bmi = this.mass / this.hight ** 2;
	}
}

const john = {
	fullName: 'John Smith',
	mass: 92,
	calcBMI: function() {
		this.bmi = this.mass / this.hight ** 2;
	}
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);


if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher
		 them ${john.fullName}'s BMI (${john.bmi}) `)
} else if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mar.
		fullName} 's BMI (${mark.bmi}`)
}