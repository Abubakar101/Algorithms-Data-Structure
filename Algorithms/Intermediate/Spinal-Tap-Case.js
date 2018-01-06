// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Using regex, for loop and if condition
function spinalCase(str) {
  let newStr = '', strr = str.replace(/_| | /g, '-');
  for (let i = 0; i < strr.length; i++) {
    if ( i > 0 && /[A-Z]/.test(strr[i]) && strr[i - 1] !== '-' && strr[i - 1] !== ' ') {
      newStr += '-';
    }
    newStr += strr[i];
  }
return newStr.toLowerCase();
}

// Spaces, Captial first letter, underscores
console.log(spinalCase('This Is Spinal Tap'));
// should return "this-is-spinal-tap".

console.log(spinalCase('thisIsSpinalTap'));
// // should return "this-is-spinal-tap".

console.log(spinalCase('The_Andy_Griffith_Show'));
// // should return "the-andy-griffith-show".

console.log(spinalCase('Teletubbies say Eh-oh'));
// // should return "teletubbies-say-eh-oh".

console.log(spinalCase('AllThe-small Things'));
// // should return "all-the-small-things".
