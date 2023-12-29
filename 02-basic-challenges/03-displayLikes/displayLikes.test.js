const displayLikes = require('./displayLikes')

// The Test
test ("Program to return the intersection of items in two array", () => {
  // Test Inputs
  const firstInput = [];
	const secondInput = ['dave', 2];
	const thirdInput = ['dave'];
	const fourthInput = ['mat', 'dave'];
	const fifthInput = ['Jerry', 'Sharon', 'Spencer'];
	const sixthInput = ['Cole', 'Dami', 'JJ', 'Roy', 'Ife'];

  // Function Call
  const outputTypeA = displayLikes(firstInput)
  const outputTypeB = displayLikes(secondInput)
  const outputTypeC = displayLikes(thirdInput)
  const outputTypeD = displayLikes(fourthInput)
  const outputTypeE = displayLikes(fifthInput)
  const outputTypeF = displayLikes(sixthInput)

  // Expected Result
  expect(outputTypeA).toBe('No one likes the post!');
  expect(outputTypeB).toBe('All Array items must be a string!');
  expect(outputTypeC).toBe('dave likes the post!');
  expect(outputTypeD).toBe('mat and dave likes the post!');
  expect(outputTypeE).toBe(
		'Jerry, Sharon, and 1 other likes the post!',
	);
  expect(outputTypeF).toBe(
		'Cole, Dami, and 3 other likes the post!',
	);
})