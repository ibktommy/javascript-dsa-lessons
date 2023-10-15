const palindrome = require('./palindrome.js')

test('Palindrom Test', () => {
  //Test Inputs
  const input1 = 'woman'
  const input2 = 'hello'
  const input3 = 'racecar'

  // Call Function
  const result1 = palindrome(input1)
  const result2 = palindrome(input2)
  const result3 = palindrome(input3)

  // Expected Result
  expect(result1).toBe(`"${input1}" is not an example of a Palindrome`)
  expect(result2).toBe(`"${input2}" is not an example of a Palindrome`)
  expect(result3).toBe(`"${input3}" is an example of a Palindrome`)
})