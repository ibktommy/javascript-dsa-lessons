// Create a function that loops from 1 - 100 and print out each number. If the number is divisible by 3, print out "Fizz" and if the number is divisible by 5, print out "Buzz" instead.

function fizzBuzz(numberInput) {
  let arrContainer = []

  let number = 1;

  while (number <= numberInput) {
    if (number % 3 === 0) {
      arrContainer.push(`Fizz${number}`)
    }
    if (number % 5 === 0) {
			arrContainer.push(`Buzz${number}`);
		}
    if ((number % 3 === 0) && (number % 5 === 0)) {
      arrContainer.push(`FizzBuzz${number}`)
    }
    if ((number % 3 !== 0) && (number % 5 !== 0)) {
      arrContainer.push(number)
    }

    number++
  }

  return arrContainer

}

module.exports = fizzBuzz;