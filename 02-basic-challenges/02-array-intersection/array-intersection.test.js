const printArrayIntersects = require('./array-intersection');

// The Test
test ("Program to return the intersection of items in two array", () => {
  // Test Inputs
  const arrayInputTypeA1 = [1, 2, 3, 4, 5];
	const arrayInputTypeA2 = [1, 3, 5, 7, 9];
	const arrayInputTypeB1 = [1, 1, 1, 1, 1];
	const arrayInputTypeB2 = [2, 2, 2, 2, 2];
	const arrayInputTypeC1 = [1, 2, 3, 4, 5, true, 'time'];
	const arrayInputTypeC2 = [4, 2, 0, 'time', false, 0];

  // Function Call
  const outputTypeA = printArrayIntersects(arrayInputTypeA1, arrayInputTypeA2)
  const outputTypeB = printArrayIntersects(arrayInputTypeB1, arrayInputTypeB2)
  const outputTypeC = printArrayIntersects(arrayInputTypeC1, arrayInputTypeC2)

  // Expected Result
  expect(outputTypeA).toEqual([1, 3, 5]);
  expect(outputTypeB).toBe('The Arrays do not have an intersection');
  expect(outputTypeC).toEqual([2, 4, 'time']);
})