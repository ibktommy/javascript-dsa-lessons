const reverseString = require('./reverse-string')

test(
  'Function that reverse a string',
  () => {
		// Test Inputs
		const input1 = 'Boy iS good';
		const input2 = 'woman';

		// Call Function
		const result1 = reverseString(input1);
		const result2 = reverseString(input2);

    // Expected Result 
    expect(result1).toBe('doog Si yoB')
    expect(result2).toBe('namow')
	}
)