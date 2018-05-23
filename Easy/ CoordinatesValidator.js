/*
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3
And some invalid ones:

23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324

https://www.codewars.com/kata/5269452810342858ec000951/train/javascript

*/

// Latitude 0 - 90, positive or negative.
// Longitude 0 and 180, positive or negative
// contain digits, symbols (including space after comma) -, .
// no space between the minus "-" sign and the digit after it.
function isValidCoordinates(coordinates) {
	const arr = coordinates.split(',');
	const lat = Number(arr[0]),
		lng = Number(arr[1]);

	if (arr.length !== 2) return false;
	if (arr[0].match(/[a-z]/i) || arr[1].match(/[a-z]/i)) return false;
	if ((!(lat >= -90) || !(lat <= 90))) return false;
	if (!(lng >= -180) || !(lng <= 180)) return false;

	return true;
}

var ValidCoordinates = [
	'-23, 25',
	'4, -3',
	'24.53525235, 23.45235',
	'04, -23.234235',
	'43.91343345, 143',
];

var InvalidCoordinates = [
	'23.234, - 23.4234',
	'2342.43536, 34.324236',
	'N23.43345, E32.6457',
	'99.234, 12.324',
	'6.325624, 43.34345.345',
	'0, 1,2',
	'0.342q0832, 1.2324',
	'23.245, 1e1',
];
for (let i in ValidCoordinates) {
	// console.log(InvalidCoordinates[i]);
	isValidCoordinates(ValidCoordinates[i]);
}
