const getSum = require('./get-sum')

test('Test For Function that calculates sum of two numbers and return their sum', () => {
  // Test Inputs
  const num1 = 2
  const num2 = 2

  // Call the function
  const result = getSum(num1, num2)

  // Check if the result is equal to the expected sum
  expect(result).toBe(4)
})