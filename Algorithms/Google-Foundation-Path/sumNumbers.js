// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row.

function sumNumbers(param) {
	let num = param.split(/[A-Za-z\s]/);
	let sumNumber = 0;

	for (let i = 0; i < num.length; i++) {
		let parseNum = parseInt(num[i]);
		if (!isNaN(parseNum)) {
			sumNumber += parseNum;
		}
	}
	console.log(sumNumber);
}

sumNumbers('abc123xyz');
// → 123
sumNumbers('aa11b33');
// → 44
sumNumbers('7 11');
// → 18
