function isPairOfSum(arr, sum) {
	let obj = {};

	for (let index of arr) {
		if (!obj[sum - index]) {
			obj[index] = true;
		} else {
			return [index,sum - index];
		}
	}
	return [];
}

isPairOfSum([1, 4, 5, 5], 10);
