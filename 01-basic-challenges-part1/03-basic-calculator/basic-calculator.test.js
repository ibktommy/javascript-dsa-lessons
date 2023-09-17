const calculator = require('./basic-calculator.js');

test('Test for function that performs basic arithmetic', () => {
  // Test Inputs
  let num1 = 25
  let num2 = 4

  // Call calculator-function
  const multiply = calculator(num1, num2, '*')
  const division = calculator(num1, num2, '/')
  const addition = calculator(num1, num2, '+')
  const subtraction = calculator(num1, num2, '-')

  // Expected results
  expect(multiply).toBe(100)
  expect(division).toBe(6.25)
  expect(addition).toBe(29)
  expect(subtraction).toBe(21)
})