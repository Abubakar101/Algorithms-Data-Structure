/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

*/

// https://www.codewars.com/kata/plus-1-array/train/javascript

function upArray(arr) {
  if (arr.length <= 0) return null;
  const leng = arr.length - 1;
  let isNine = false;

  for (let i = leng; i >= 0; i--) {
    if (arr[i] < 0 || arr[i] > 9) return null;

    if (i === leng) {
      if (arr[i] === 9) {
        isNine = true;
        arr[i] = 0;
        continue;
      } else {
        arr[i] = arr[i] + 1;
      }
    }

    if (isNine) {
      if (arr[i] !== 9) {
        arr[i] = arr[i] + 1;
        isNine = false;
      } else {
        arr[i] = 0;
        if (i === 0) {
          arr.unshift(1)
        }
      }
    }
  }
  return arr;
}

upArray([2, 3, 9])//, [2,4,0]);
upArray([4, 3, 2, 5])//, [4,3,2,6]);
upArray([])//, null);
upArray([9, 9, 9])//, [1,0,0,0]);
upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7])//, [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]);
