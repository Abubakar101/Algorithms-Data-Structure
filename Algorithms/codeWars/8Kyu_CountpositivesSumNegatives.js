// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (!input || input[0] === null || input.length < 1) return [];
  let posCount = 0, negCount = 0;

  for (let index of input) {
    if (index > 0) posCount++
    else negCount += index;
  }

  return [posCount, negCount];
}
let input = [ 0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14 ]
countPositivesSumNegatives(input)
