/*
Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] 
then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript

*/

function solution(nums) {
  if (nums.length === 1) return nums[0];

	nums.sort((a, b) => b - a);


  if (nums.slice(1).every(x => x === nums[nums.length-1])) {
		return nums.length * nums[1];
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i + 1]) {
			nums[i] = nums[i] - nums[i + 1];
		}
	}
	if (!nums.every(x => x === nums[1])) {
		return solution(nums);
	}

	return nums.reduce((a, b) => a + b);
}

// New Solution
function solution(nums) {
  nums.sort((a, b) => b - a);
  if ([...new Set(nums)].length !== 1 && nums[1] !== 0) {
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        nums[i] = nums[i] - nums[i + 1];
      }
    }
    return solution(nums);
  }
  return nums.reduce((a, b) => a + b, 0);
}

// From someone else solution
const gcd = (a,b)=>a?gcd(b%a,a):b
function solution(numbers) {
  return numbers.reduce(gcd)*numbers.length
}

numbers = [1128125, 68445, 459045, 330245, 57245, 79380, 196020, 541205, 356445, 426320, 14045, 640820, 928805, 1039680, 515205, 340605, 1190720, 426320, 343220, 669780, 21780, 644405, 534645, 465125, 32000, 1161620, 394805, 808020, 88445, 163805, 426320, 369920, 167445, 1185845, 397620, 210125, 142805, 109520, 103680, 483605, 882000, 528125, 994580, 796005, 928805, 812045, 994580, 669780, 335405, 612500, 1099805, 55125, 248645, 335405, 302580, 578000, 26645, 141120, 196020, 640820, 718205, 903125, 898880, 62720, 1099805, 253125, 515205, 737280, 89780, 42320, 84500, 508805, 808020, 972405, 933120, 1235045, 477405, 756605, 808020, 861125, 239805, 109520, 233280, 1109205, 343220, 307520, 524880]
console.log(solution(numbers), 435)
