// Program to add the sum of numbers in an Array and return the sum

function sumOfArrayItems(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

const input = [1,2,3,4,5,6,7]

console.log(sumOfArrayItems(input));