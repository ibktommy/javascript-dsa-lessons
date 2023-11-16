const countVowels = require('./count-vowels');

test('Count Vowels Test', () => {
	//Test Inputs
	const input1 = 'woman';
	const input2 = 'hel6437][loo';
	const input3 = 'racing @in car';

	// Call Function
	const result1 = countVowels(input1);
	const result2 = countVowels(input2);
	const result3 = countVowels(input3);

	// Expected Result
	expect(result1).toBe(`2 is the number of vowels in "${input1}"`);
	expect(result2).toBe(`3 is the number of vowels in "${input2}"`);
	expect(result3).toBe(`4 is the number of vowels in "${input3}"`);
});
