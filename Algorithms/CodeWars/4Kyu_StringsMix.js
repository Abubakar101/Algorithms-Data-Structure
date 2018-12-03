/*
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
*/

function mix(s1, s2) {
	const obj = {
		1: {},
		2: {},
	};

	const longLen = s1.length > s2.length ? s1.length : s2.length;

	// Frequency table
	let count = 0;
	while (count < longLen) {
		if (s1[count] && s1[count].match(/^[a-z]/)) createObj(s1[count], obj['1']);
		if (s2[count] && s2[count].match(/^[a-z]/)) createObj(s2[count], obj['2']);
		count++;
	}
	// Assign keys/values of Obj
	function createObj(sChar, obj) {
		if (sChar && sChar.match(/^[a-z]/)) {
			if (!obj[sChar]) obj[sChar] = 1;
			else obj[sChar]++;
		}
	}

	// Comparing the values
	const arr = [];
	for (let char in obj['1']) {
		if (obj['1'][char] > 1 || obj['2'][char] > 1) {
			// obj1 & !obj2 = repeat
			if (obj['1'][char] && !obj['2'][char]) {
				arr.push(`1:${char.repeat(obj['1'][char])}`);
			} else {
				// obj1 & obj2 = compare
				if (obj['1'][char] > obj['2'][char]) {
					arr.push(`1:${char.repeat(obj['1'][char])}`);
				} else if (obj['1'][char] === obj['2'][char]) {
					arr.push(`=:${char.repeat(obj['1'][char])}`);
				} else if (obj['1'][char] < obj['2'][char]) {
					arr.push(`2:${char.repeat(obj['2'][char])}`);
				}
			}
		}
	}
	// !obj1 & obj2 = repeat
	for (let char in obj['2']) {
		if (obj['2'][char] > 1 && (!obj['1'][char] && obj['2'][char])) {
			arr.push(`2:${char.repeat(obj['2'][char])}`);
		}
	}

	// // Sort of Length, Number and alphabetical order
	arr.sort((a, b) => {
		let [num1, str1] = a.split(':');
		let [num2, str2] = b.split(':');
		let sort = 0;

		if (str1.length > str2.length) {
			sort = -1;
		} else if (str1.length < str2.length) {
			sort = 1;
		} else if (str1.length === str2.length) {
			if (num1 > num2) {
				sort = 1;
			} else if (num1 < num2) {
				sort = -1;
			} else if (num1 === num2) {
				if (str1 > str2) {
					sort = 1;
				} else if (str1 < str2) {
					sort = -1;
				}
			}
		}
		return sort;
	});

	console.log(arr);
	return arr.join('/');
}

console.log(
	mix('Are they here', 'yes, they are here') === '2:eeeee/2:yy/=:hh/=:rr',
	mix('looping is fun but dangerous', 'less dangerous than coding') ==='1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg',

	mix('In many languages', "there's a pair of functions") ===
		'1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt'
);
