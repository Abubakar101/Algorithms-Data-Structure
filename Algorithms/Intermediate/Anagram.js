/* 
Given two strings, check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains same characters, only the order of characters can be different. For example, “act” and “tac” are anagram of each other. 
*/

// Using hash-map and O(2n)
function anagram(str1, str2) {
	if (str1.length !== str2.length) return 'Not same length';

	const obj = {};

	for (let i = 0, j = str1.length; i < j; i++) {
		let firstWord = str1[i],
			secWord = str2[i];

		if (!obj[firstWord]) {
			obj[firstWord] = 1;
		} else {
			obj[firstWord]--;
		}

		if (!obj[secWord]) {
			obj[secWord] = 1;
		} else {
			obj[secWord]--;
		}
	}
	console.log(obj);

	for (let value in obj) {
		if (obj[value] !== 0) return 'NO';
	}
	return 'YES';
}

// Using ES6 function and methods
const anagram = (str1, str2) => str1.length === str2.length ? str1.split('').sort().join('') === str2.split('').sort().join('') : 'Not same length';

anagram('oceanaa', 'canoeaa');
