/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

https://stackoverflow.com/questions/9960908/permutations-in-javascript/22063440#22063440
*/

function permutations(str) {
  str = str.split('');

	return [...new Set(str.reduce(
		(permute = (res, item, key, arr) => {
			return res.concat(
				(arr.length > 1 &&
					arr
						.slice(0, key)
						.concat(arr.slice(key + 1))
						.reduce(permute, [])
						.map(function(perm) {
							return [item].concat(perm).join('');
						})) ||
					item
			);
		}),
		[]
	))];
}

permutations('ABC');

//"ABC", "ACB", "BAC", "BCA", "CBA", "CAB"
