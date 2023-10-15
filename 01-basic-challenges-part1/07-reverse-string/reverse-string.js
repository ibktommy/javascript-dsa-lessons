// Function that returns the reverse of a string
function reverseString(strChar) {
 let strCharArr = []

 for (let i = strChar.length - 1; i >= 0; i--) {
    strCharArr.push(strChar[i])
 }

 return strCharArr.join('')
}

module.exports = reverseString