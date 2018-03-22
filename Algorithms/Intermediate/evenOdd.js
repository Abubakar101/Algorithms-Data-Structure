// Given an array of ints, return the string "even" if there are more even elements in the array, or "odd" if there are more odd elements in the array.
function evenOdd(arr) {
	let even = 0,
		odd = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			even++;
		} else {
			odd++;
		}
	}
	return even > odd ? `even` : `odd`;
}
console.log('Even-OR-Odd => ', evenOdd([2, 4, 6, 3, 5, 7, 9]));
