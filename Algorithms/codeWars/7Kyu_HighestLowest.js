// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

function highAndLow(nums) {
  const arr = nums.split(" ").map(Number).sort((a, b) => b - a);
  return `${arr[0]} ${arr[arr.length - 1]}`

}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")//, "542 -214"
highAndLow("10 -10")//, '10 -10'
