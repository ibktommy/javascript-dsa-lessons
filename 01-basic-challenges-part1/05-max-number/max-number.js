// Function to find the maximum number in an Array
function findMaxNum(numArray) {
  let maxNum = numArray[0]

  for (i = 0; i <= numArray.length; i++) {
    if (numArray[i] > maxNum) {
      maxNum = numArray[i]
    }
  }

  return maxNum
}

module.exports = findMaxNum