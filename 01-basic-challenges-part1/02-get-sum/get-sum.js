function getSum(number1, number2) {
	if (typeof(number1) && typeof(number2) !== 'number')
  return "Both input must be valid Numbers!"

  return number1 + number2
}

module.exports = getSum(10, 2);
