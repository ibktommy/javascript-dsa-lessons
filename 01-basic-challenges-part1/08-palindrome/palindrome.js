// Function that takes in a string and check if it is a palindrome, i.e when the string is reversed the word is also same as the original

function palindrome(word) {
  let reversedWord = ''

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]
  }

  // return reversedWord
  if (reversedWord === word) {
    return `"${word}" is an example of a Palindrome`
  }

  return `"${word}" is not an example of a Palindrome`
}

module.exports = palindrome