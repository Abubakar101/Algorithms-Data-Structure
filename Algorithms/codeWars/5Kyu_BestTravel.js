//https://www.codewars.com/kata/best-travel/train/javascript

// k = Numbers of towns to be visited
// t = Total distance needs to cover
// ls = array of distances of each towns


// Break the array of "ls" into "k" combinations
// Add each of the array Numbers to find distance
// Return the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise null,


// From geeksforgeeks - converted from Java to JS.
function sumOfCombinations(arr, r, start = 0, index = 0, data = [], result = []) {
  const leng = arr.length - 1;

  if (index == r) {
    const dist = data.slice(0, r).reduce((a, b) => a + b, 0);
    result.push(dist)
  }

  for (let i = start; i <= leng && leng - i + 1 >= r - index; i++) {
    data[index] = arr[i];
    sumOfCombinations(arr, r, i + 1, index + 1, data, result);
  }
  return result;
}

function chooseBestSum(t, k, ls) {
  const arr = sumOfCombinations(ls, k)
  const dist = arr.filter(e => e <= t).sort((a, b) => a - b)
  return dist[dist.length - 1] || null;

}


var ts = [50, 55, 56, 57, 58]
chooseBestSum(163, 3, ts)//, 163)
ts = [50]
chooseBestSum(163, 3, ts)//, null)
ts = [91, 74, 73, 85, 73, 81, 87]
chooseBestSum(230, 3, ts)//, 228)









