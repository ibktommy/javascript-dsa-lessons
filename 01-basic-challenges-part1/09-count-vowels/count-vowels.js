// Function to count the number of vowels in a string

function countVowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	for (letter = 0; letter <= str.length - 1; letter++) {
		// Check if the string contains a non-alphabet
		if (
			getUpperCaseLetters().includes(str[letter]) === false &&
			getLowerCaseLetters().includes(str[letter]) === false
		) {
			continue;
		} else {
      // Check if the string-letter is a vowel
			if (vowels.includes(str[letter])) {
        // console.log(`${str[letter]} is a vowel letter`);
				count++;
			}
		}
	}

	return `${count} is the number of vowels in "${str}"`;
}

// Function that returns the lowercase letters in the English Alphabet
function getLowerCaseLetters() {
	let lowerCaseLetters = [];

	for (let utfCode = 97; utfCode <= 122; utfCode++) {
		lowerCaseLetters.push(String.fromCharCode(utfCode));
	}

	return lowerCaseLetters;
}

// Function that returns the uppercase letters in the English Alphabet
function getUpperCaseLetters() {
	let upperCaseLetters = [];

	for (let utfCode = 65; utfCode <= 90; utfCode++) {
		upperCaseLetters.push(String.fromCharCode(utfCode));
	}

	return upperCaseLetters;
}

module.exports = countVowels;
