/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

*/
var sum_pairs = function(arr, sum) {
	let obj = {};

	for (let index of arr) {
		if (!obj[sum - index]) {
			obj[index] = true;
		} else {
			return [sum - index, index];
		}
	}
	return undefined;
};

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];


console.log(
	sum_pairs(l1, 8) + '' === [1, 7] + '',
	sum_pairs(l2, -6) + '' == [0, -6] + '',
	sum_pairs(l3, -7) == undefined,
	sum_pairs(l4, 2) + '' == [1, 1] + '',
	sum_pairs(l5, 10) + '' == [3, 7] + ''
);
