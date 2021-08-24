const hasDriverLicence = true;
const hasGoodbision = true;

console.log(hasDriverLicence & & hasGoodbision);
console.log(hasDriverLicence || hasGoodbision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodbision;

if (shouldDrive) {
	console.log('He Should Be Able To Drive');
} else {
	console.log('He Should Not Be able to Drive');
}