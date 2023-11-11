// Function that takes in a string and check if it is a palindrome, i.e when the string is reversed the word is also same as the original

function palindrome(word) {
  const lowercaseAlphabets = getLowerCaseAlphabets(word)

  console.log(`After removing all characters that are not lowercase Alphabets, here is the reformatted word: \n ${lowercaseAlphabets}`);

  const reversedWord = getReversedString(lowercaseAlphabets)

  if (reversedWord === lowercaseAlphabets) {
    return `"${lowercaseAlphabets}" is a Palindrome!`
  } else {
    return `"${lowercaseAlphabets}" is not a Palindrome!`;
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

// Function to return a reversed string
function getReversedString(str) {
	  let reversedString = ''

	  for (let i = str.length - 1; i >= 0; i--) {
	    reversedString += str[i];
	  }

    return reversedString
}

module.exports = palindrome



