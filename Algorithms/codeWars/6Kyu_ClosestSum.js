// Given an array (ints) of n integers, find three integers in arr such that the sum is closest to a given number (num), target.

// Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// closest_sum([-1, 2, 1, -4], 1) # 2 (-1 + 2 + 1 = 2)
// Note: your solution should not modify the input array.

const findVars = (arr) => {
  const leng = arr.length;
  const valArr = [];

  for (let i = leng - 1; i >= 2; i--) {
    for (let j = i - 1; j >= 1; j--) {
      for (let k = j - 1; k >= 0; k--) {
        valArr.push(arr[i] + arr[j] + arr[k])
      }
    }
  }
  return valArr;
}

const findClosest = (arr, int) => {
  let closest = arr[0];
  let decDiff = Math.abs(int - closest);

  for (let i = 1, j = arr.length; i < j; i++) {
    const currDiff = Math.abs(int - arr[i]);
    if (currDiff < decDiff) {
      decDiff = currDiff;
      closest = arr[i];
    }
  }
  return closest;
}

const closestSum = (arr, int) => {
  const valArr = findVars(arr, int);
  const closest = findClosest(valArr, int)
  return closest;
}




closestSum([-1, 2, 1, -4], 1)//, 2)
closestSum([5, 4, 0, 3], 3)//, 7)
closestSum([1, 2, 3, 4], 4)//, 6)
closestSum([-2, 2, -3, 1], 3)//, 1)
