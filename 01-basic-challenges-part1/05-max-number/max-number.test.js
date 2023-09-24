const findMaxNum = require('./max-number')

test('Test for Function to find the maximum number in an Array', () => {
  // Test Inputs
  const numArray = [2, 65, 9, 90, 1, 4]
  
  // Call findMaxNum function
  const result = findMaxNum(numArray)

  // Expected Results
  expect(result).toBe(90)
});