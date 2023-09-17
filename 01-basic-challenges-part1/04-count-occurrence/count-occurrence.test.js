const countOccurrence = require('./count-occurence');

test('Test for function that returns the the number of times a character appears in a string', () => {
  // Test Inputs
  const word = 'occurrence'
  const letter = 'c'

  // Call countOccurrence-function
  const result = countOccurrence(word, letter)

  // Expected results
  expect(result).toBe(3)
});