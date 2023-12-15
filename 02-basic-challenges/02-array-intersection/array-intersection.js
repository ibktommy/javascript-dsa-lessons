// Program to return the intersection of items in two arrays

function printArrayIntersects(arrInputOne, arrInputTwo) {
  // Check if both inputs are arrays
  if (!Array.isArray(arrInputOne) || !Array.isArray(arrInputTwo)) {
    return (console.log("Both Inputs must be an Array!"))
  }

  // Declare the Output Array to be returned
  const arrOutput = [];

  // Loop through each item in the firstArray and see if any of it exists in the second Array
  for (let i = 0; i <= arrInputOne.length; i++) {
    if (arrInputTwo.includes(arrInputOne[i])) {
      arrOutput.push(arrInputOne[i])
    }
  }

  // Print the new Array with intersected items
  if (arrOutput.length === 0) {
    return console.log('The Arrays do not have an intersection');
  } else {
    return console.log(arrOutput);
  }
}

module.exports = printArrayIntersects;