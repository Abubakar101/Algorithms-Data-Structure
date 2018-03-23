// Write a method that finds the second highest number in an array of integers.


// const secHighestNum = arr => arr.sort((a, b) => b - a)[1];


function secHighestNum(arr) {
	let largestNum = 0,
		secLargestNum = 0;

	for (let num of arr) {
		if (num > largestNum) {
			largestNum = num;
		} else if (num > secLargestNum && num < largestNum) {
			secLargestNum = num;
		}
	}
	return secLargestNum;
}
console.log('SecHighestNum => ', secHighestNum([1, 5, 10, 50, 15]));
