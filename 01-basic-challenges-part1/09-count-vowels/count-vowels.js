// Function to count the number of vowels in a string

// function countVowels(str) {
// 	let engAlphabet = [];

// 	for (let letters = 0; letters <= str.length - 1; letters++) {}
// }

function getLowerCaseLetters() {
  let lowerCaseLetters = []

  for (let utfCode = 97; utfCode <= 122; utfCode++) {
    lowerCaseLetters.push(String.fromCharCode(utfCode))
  }

  return lowerCaseLetters
}

function getUpperCaseLetters() {
  let upperCaseLetters = []

  for (let utfCode = 65; utfCode <= 90; utfCode++) {
		upperCaseLetters.push(String.fromCharCode(utfCode));
	}

  return upperCaseLetters
}

// module.exports = getLowerCaseLetters
module.exports = getUpperCaseLetters


