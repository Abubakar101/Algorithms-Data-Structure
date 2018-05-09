/*
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"

https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript


*/

function reverseWords(str) {
  // Go for it
  
  return str.split(" ").map( e => e.split("").reverse().join("")).join(" ");
  
}
console.log(
	reverseWords('The quick brown fox jumps over the lazy dog.') ===
		'ehT kciuq nworb xof spmuj revo eht yzal .god',
	reverseWords('apple') === 'elppa',
	reverseWords('a b c d') === 'a b c d',
	reverseWords('double  spaced  words') === 'elbuod  decaps  sdrow'
);
