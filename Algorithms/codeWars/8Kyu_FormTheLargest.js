// Given a number , Return The Maximum number could be formed from the digits of the number given .
//https://www.codewars.com/kata/form-the-largest/train/javascript

function maxNumber(n) {
  return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}


function maxNumber(n) {
  const str = n.toString();
  const sort = str.split("").sort((a, b) => b - a).join("");
  return Number(sort);
}



maxNumber(566797)//, 977665
