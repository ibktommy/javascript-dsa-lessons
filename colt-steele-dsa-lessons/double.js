function double(arr) {
	let newArray = [];

	for (let i = 0; i < arr.length; i++) {
		newArray.push(2 * arr[i]);
	}
	return newArray;
}

const input = [1, 2, 3, 4, 5, 6, 7];

console.log(double(input));
