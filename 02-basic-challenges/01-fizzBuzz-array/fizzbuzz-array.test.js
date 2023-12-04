const fizzBuzz = require('./fizzbuzz-array')

test('Test for fizzBuzzArray function', () => {
  //Test Input
  const input = 5

  // Function Call
  const output = fizzBuzz(input)

  // Expected Result
  expect(output).toEqual([1, 2, "Fizz3", 4, "Buzz5"])
})