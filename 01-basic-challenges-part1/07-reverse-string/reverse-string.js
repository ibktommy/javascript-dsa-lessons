// Function that returns the reverse of a string
function reverseString(strChar) {
 let strCharArr = []

 for (let i = strChar.length; i >= 0; i--) {
  if (strChar[i] !== undefined) {
    strCharArr.push(strChar[i])
  }
 }

 return strCharArr.join('')
}

module.exports = reverseString