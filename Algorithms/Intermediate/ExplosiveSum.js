/*
How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript
*/

function sum(num) {
	const memo = [];
	function p(n, m) {
		if (m === 0 || n < 0) return 0;
		if (n === 0) return 1;

		if (memo[n] == undefined) memo[n] = [];
		let result = memo[n][m];
		if (isNaN(result)) {
			result = p(n - m, m) + p(n, m - 1);
			memo[n][m] = result;
		}
		return result;
	}
	return p(num, num);
}

sum(5);
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
