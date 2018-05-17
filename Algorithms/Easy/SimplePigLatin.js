/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/

function pigIt(str) {
	let word = '',
		tempChar = '';
	for (let i = 0, j = str.length; i < j; i++) {
		if (i == 0 || str[i - 1] === ' ') {
			tempChar = str[i];
		} else if (str[i + 1] === ' ' || i === str.length - 1) {
			word += str[i] + tempChar + 'ay';
		} else {
			word += str[i];
		}
	}
	return word;
}

console.log(
	pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay'
	pigIt('This is my string') === 'hisTay siay ymay tringsay'
);
