// Function that takes in a string and returns the each word having their first letter captalized
function titleCase(strChar) {
	// convert string to array using split method
	const strArray = strChar.split(' ');

	// variable to hold the returned result
	let newStrChar;

	// check if the strArray is one word
	if (strArray.length === 1) {
		// convert the strArray to a string
		const backToString = strArray.toString();
		// capitalize the first letter of the word and lowercase the rest of the letters in the word
		newStrChar =
			backToString[0].toUpperCase() + backToString.slice(1).toLowerCase();
	}

	// check if the strArray contains more than one word
	if (strArray.length > 1) {
		// capitalize the first letter of each word and lowercase the rest of the letters in each word
		const formattedStrArray = strArray.map((strItem) => {
			return strItem[0].toUpperCase() + strItem.slice(1).toLowerCase();
		});

		// convert the formattedStrArray to string and replace all the comma's with a space charachter
		newStrChar = `${formattedStrArray.toString().replaceAll(',', ' ')}`;
	}

	return newStrChar;
}

module.exports = titleCase;
