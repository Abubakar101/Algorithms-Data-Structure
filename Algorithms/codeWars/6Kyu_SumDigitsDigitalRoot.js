// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript
/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

*/

function digital_root(n) {
  let add = `${n}`.split("").map(Number).reduce((a, b) => a + b, 0)
  return `${add}`.length > 1 ? digital_root(add) : add;
}

// SOmeone else Solution from codewars
// https://www.hackerearth.com/practice/notes/digital-root-of-a-given-number/
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

digital_root(456)//, 6 
