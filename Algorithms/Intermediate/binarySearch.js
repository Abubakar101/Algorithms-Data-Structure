const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(arr, num) {
//   let length = arr.length - 1;
//   let half = Math.trunc(length / 2);

//   if (arr[half] === num) {
//     return num
//   } else if (arr[half] < num) {
//     return binarySearch(arr.slice(half + 1), num);
//   } else if (arr[half] > num) {
//     return binarySearch(arr.slice(0, half), num);
//   }
// }

function binarySearch(arr, num, s, e) {
  let m = s + Math.floor((e - s) / 2);
  let ele = arr[m];

  if (ele === num) {
    return m
  } else if (s === e) {
    return -1;
  } else if (ele < num) {
    return binarySearch(arr, num, m + 1, e);
  } else if (ele > num) {
    return binarySearch(arr, num, s, m - 1);
  }
}

function search(arr, num) {
  return binarySearch(arr, num, 0, arr.length - 1);
}
search(arr, 22)


https://repl.it/@Abubakar101/Binary-Search
