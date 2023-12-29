// function that accepts an array of name-of-persons and display the number of person that like a post

function displayLikes(arr) {
	// Check if input is an Arrays
	if (Array.isArray(arr) === false) {
		return 'Input must be an Array!';
	}

	// Check if items in the Array are string-datatype only
	for (let index = 0; index < arr.length; index++) {
		if (typeof(arr[index]) !== 'string') {
			return('All Array items must be a string!');
		}
	}

	// Main Program Logic
	const lengthOfArray = arr.length;
	if (lengthOfArray === 0) {
		return('No one likes the post!');
	} else if (lengthOfArray === 1) {
		return(`${arr[0]} likes the post!`);
	} else if (lengthOfArray === 2) {
		return(`${arr[0]} and ${arr[1]} likes the post!`);
	} else if (lengthOfArray > 2) {
		const likesLeft = arr.length - 2;
		return(`${arr[0]}, ${arr[1]}, and ${likesLeft} other likes the post!`);
	}
}

module.exports = displayLikes