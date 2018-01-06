// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      // console.log(str[i], newStr.length);
      if (newStr.length < 1) {
        return str + 'way';
      } else {
        return str.slice(i, str.length) + newStr + 'ay';
       }
    }
    newStr += str[i];
  }

  return newStr;
}


console.log(translatePigLatin('california'));
// should return "aliforniacay".
console.log(translatePigLatin('paragraphs'));
// should return "aragraphspay".
console.log(translatePigLatin('glove'));
// should return "oveglay".
console.log(translatePigLatin('algorithm'));
// should return "algorithmway".
console.log(translatePigLatin('eight'));
// should return "eightway".
