// Function that takes in a string and check if it is a palindrome, i.e when the string is reversed the word is also same as the original

// function palindrome(word) {
//   let reversedWord = ''

//   for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i]
//   }

//   // return reversedWord
//   if (reversedWord === word) {
//     return `"${word}" is an example of a Palindrome`
//   } else {
//     return `"${word}" is not an example of a Palindrome`;
//   }
// }

// Function to get the character codes in a string
function getCharCode(str) {
  for (let i = 0; i <= str.length - 1; i++) {
   console.log(str.charCodeAt(i));
  }
}

// Function to return only lowercase alphabets in a string
function getLowerCaseAlphabets(str) {
	let lowercaseAlphabets = [];

	for (let i = 0; i <= str.length - 1; i++) {
		if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
			lowercaseAlphabets.push(str[i]);
		}
	}

	return lowercaseAlphabets.join('');
}

// module.exports = palindrome
// module.exports = getCharCode
module.exports = getLowerCaseAlphabets


