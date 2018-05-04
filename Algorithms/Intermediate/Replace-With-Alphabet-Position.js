/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
*/

function alphabetPosition(text) {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let str = '';
	const letters = /^[A-Za-z]+$/;
	const smallCase = text.toLowerCase();

	for (let char of smallCase)
		if (char.match(letters)) {
			if (str.length >= 1) str += ' ';
			str += alphabet.indexOf(char) + 1;

		}
	return str;
}

console.log(
	alphabetPosition("The sunset sets at twelve o' clock.") ===
		'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);
console.log(alphabetPosition("(=h/1&07") === "8")
