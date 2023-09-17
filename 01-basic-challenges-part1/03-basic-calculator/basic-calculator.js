// Function to perform basic arithmetic
function calculator(num1, num2, operator) {
  // Check if first inputs are of 'number' type
  if (typeof(num1) !== 'number' && typeof(num2 !== 'number')) {
    return 'The first two inputs must be a number'
  }

  // Perform calculations with switch statement
  let result;
  switch (operator) {
		case '+':
			result = num1 + num2;
			break;

		case '-':
			result = num1 - num2;
			break;

		case '*':
			result = num1 * num2;
			break;

		case '/':
			result = num1 / num2;
			break;

		default:
      return new Error("Invalid operator, use any of '+, *, /, -'");
	}

  return result
}

module.exports = calculator