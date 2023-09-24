const titleCase = require('./title-case')

test(
	'Function that takes in a string and returns the each word having their first letter captalized', () => {
    // Test Inputs
    const stringInput1 = 'tHe boy iS gOIng to THE MarKeT';
    const stringInput2 = 'HERE IS MY HANDLE HERE IS MY SPOUT';

    // Call function
    const result = titleCase(stringInput1); 
    const result2 = titleCase(stringInput2); 

    // Expected result
    expect(result).toBe("The Boy Is Going To The Market")
    expect(result2).toBe('Here Is My Handle Here Is My Spout');
  }
);