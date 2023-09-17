function getSum(number1, number2) {
	let result;
	if (typeof number1 !== 'number' || typeof number2 !== 'number') {
		return 'Invalid Inputs - Both inputs must be numbers';
	}

	result = number1 + number2;
	return result;
}

module.exports = getSum;
