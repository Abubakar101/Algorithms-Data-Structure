// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

function maxSpan(arr) {
	let obj = {},
		largetNum = 0,
		minIndex = 0,
		maxIndex = 0,
		count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = 1;
		} else {
			obj[arr[i]]++;
		}
	}

	for (let key in obj) {
		if (largetNum < obj[key]) {
			largetNum = Number(key);
		}
	}

	minIndex = arr.indexOf(largetNum);
	maxIndex = arr.lastIndexOf(largetNum);

	for (let j = minIndex; j < maxIndex + 1; j++) {
		count++;
	}

	console.log(count);
}

maxSpan([1, 2, 1, 1, 3]); // → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]); // → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]); // → 6
