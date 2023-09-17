// Function that returns the number of times a character appears in a string
function countOccurrence(word, letter) {
  // Check if word and letter are 'string' type
  if ((typeof(word) && typeof(letter)) !== 'string') {
    return 'Both inputs must be a string'
  }

  let count = 0;

  const wordArray = Array.from(word)
  wordArray.forEach((wordItem) => {
    
    if(wordItem === letter) {
      count = count + 1
      return
    }
  })

  return count
}

module.exports = countOccurrence