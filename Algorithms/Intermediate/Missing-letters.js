// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let index = alphabets.indexOf(str[0]);
  let min = alphabets.slice(index);

  for (let i = 0; i < alphabets.length; i++) {
    if (min[i] !== str[i]) {
      return min[i];
    }
  }
}

// fearNotLetter('abce');

// fearNotLetter('abce');
// should return "d".
// fearNotLetter('abcdefghjklmno');
// should return "i".
fearNotLetter('stvwx');
// should return "u".
fearNotLetter('bcdf');
// should return "e".
// fearNotLetter('abcdefghijklmnopqrstuvwxyz');
// should return undefined.
