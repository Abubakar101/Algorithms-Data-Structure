// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// Brute-force = using spread operator to combine both params array arguments into one to prevent any undefined index while running loop over them.
// Used two loops (O n^2) and If condition to check if both loop values are equal, if yes then remove them using Splice method and what is/are left is the unquie values.

function diffArray(arr1, arr2) {
  let newArr = [...arr1, ...arr2];

  for (let i = newArr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      if (newArr[i] === newArr[j]) {
        newArr.splice(i, 1);
        newArr.splice(j, 1);
      }
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
