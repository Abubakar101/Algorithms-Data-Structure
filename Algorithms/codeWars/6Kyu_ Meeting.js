// https://www.codewars.com/kata/meeting/train/javascript

// makes this string uppercase
// gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

function meeting(s) {
  return s.split(";").map(e => e.split(":").reverse().join(", ").toUpperCase()).sort().map(e => e = "(" + e + ")").join("")
}

// When concating see if where it should concat (Sort)
meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern")


// "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"






// In progess, only in one loop.
  // Last progress - sort them

  // let preNameObj = {}, name = "", lastName = "", firstName = "";
  // let isName = false;

  // let firstIndex = 0, secIndex = 0;
  // let colonIndex = 0;
  // for (let i = 0, j = s.length; i <= j; i++) {
  //   if (s[i] === ":") {
  //     colonIndex = i;
  //   }
  //   if (s[i] === ";" || i === j) {
  //     secIndex = i;
  //     lastName = s.slice(colonIndex + 1, secIndex);
  //     firstName = s.slice(firstIndex, colonIndex);
  //     isName = true;
  //     firstIndex = secIndex + 1;
  //   }
  //   if (isName) {
  //     // console.log(colonIndex, firstIndex, secIndex, lastName, firstName)
  //     const lastChar = lastName.charCodeAt(0) + lastName.charCodeAt(1);
  //     const firstChar = firstName.charCodeAt(0) + firstName.charCodeAt(1);
  //     preNameObj[`(${lastName}, ${firstName})`] =  + 
  //     // name += preName;
  //     isName = false;
  //   }

  // }
  // console.log(preNameObj)
