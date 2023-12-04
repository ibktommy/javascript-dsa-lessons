const removeDuplicatesInArray = require('./remove-duplicates');

test('Test for removing duplicates in An Array', () => {
	// Test Input
	const input = [1, 1, 'a', 'b', 'a', true, 2, false, true];

	// Call Function
	const output = removeDuplicatesInArray(input);

	// Expected Output
	expect(output).toEqual([1, "a", "b", true, 2, false]);
});
