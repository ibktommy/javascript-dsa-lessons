function removeDuplicatesInArray (arrData) {
  // Check if input is an Array
  if (Array.isArray(arrData) !== true) {
    return 'Not an Array!, the input should be an Array!'
  }

  let newArr = [];

  for (let arrItem = 0; arrItem <= arrData.length - 1; arrItem++) {
    if (newArr.includes(arrData[arrItem]) === true) {
      continue;
    }

    newArr.push(arrData[arrItem]);
  }

  return newArr

}

module.exports = removeDuplicatesInArray;