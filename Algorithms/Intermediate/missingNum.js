// An array is supposed to contain the numbers 1-10, but one number is missing. Find and return that number.

function missingNum(arr) {
	for (let i = 0, j = arr.length; i < j; i++) {
		if (i + 1 !== arr[i]) return i;
	}
}
console.log('Number => ', missingNum([1, 2, 3, 4, 5, 7, 8, 9, 10]));
