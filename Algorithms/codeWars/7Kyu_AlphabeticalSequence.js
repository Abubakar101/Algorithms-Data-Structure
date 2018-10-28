
// https://www.codewars.com/kata/alphabetical-sequence/train/javascript

// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetcally, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

// Example
// alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
// Technical Details
// The string will include only letters.
// The first letter of each sequence is uppercase followed by n-1 lowercase.
// Each sequence is seperated with a comma.
// Return value needs to be a string.

function alphaSeq(str) {
  const lowerCase = str.toLowerCase();
  const alphaSort = lowerCase.split("").sort();

  let alphaSeq = "";
  for (let i = 0; i < alphaSort.length; i++) {
    const char = alphaSort[i];
    const upperCaseChar = char.toUpperCase();
    const charCode = char.charCodeAt(0) - 97;
    const repeatedChars = char.repeat(charCode);
    alphaSeq += upperCaseChar + repeatedChars;

    if (i !== alphaSort.length - 1) {
      alphaSeq += ",";
    }
  }
  return alphaSeq
}

alphaSeq("ZpglnRxqenU")
//, "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz")
