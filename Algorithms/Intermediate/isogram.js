/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

*/

function isIsogram(str) {
	const loStr = str.toLowerCase();
	const obj = {};

	for (let char of loStr) {
		if (!obj[char]) {
			obj[char] = true;
		} else {
			return false;
		}
	}
	return true;
}

// Can also be done using Set, regex and etc

isIsogram('Dermatoglyphics'); //== true
isIsogram('aba'); //== false
isIsogram('moOse'); // == false // -- ignore letter case
