// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

////////////////////
// Brute Force, RegExp, Two For loops, and If Condition and toLowerCase() Method 
function palindrome(str) {
  let alphanumeric = /^[a-zA-Z]+$/;
  let char ="";
  let reverse ="";
  
  for (let i =0; i < str.length; i++){
    if (str[i].match(alphanumeric)){
    char += str[i].toLowerCase();
    }
  }
  
  for (let j = char.length -1; j > -1; j--){
    reverse += char[j];
  }
  return char === reverse;

}

// RegExp, For loop, and If Condition and (Split(), Reverse(), Join() and toLowerCase() Methods) 
function palindrome(str) {
  let alphanumeric = /^[a-zA-Z]+$/;
  let char ="";
  
  for (let i =0; i < str.length; i++){
    if (str[i].match(alphanumeric)){
    char += str[i].toLowerCase();
    }
  }
  return char === char.split("").reverse().join("");

}

//For in loop, If Condition and (Split(), Reverse(), Join(), charCodeAt() and toLowerCase() Methods)
function palindrome(str) {
  let string = str.toLowerCase();
  let char ="";
  
  for (let i in string){
    if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123){
    char += string[i]
    }
  }
  return char === char.split("").reverse().join("");

}


// Filter, Call and (Split(), Reverse() and Join()) methods
function palindrome(str) {
  str = Array.prototype.filter.call(str.toLowerCase(), e => (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123)).join('');
  return str === str.split("").reverse().join("");
}


// palindrome("eye");
// palindrome("_eye") 
// palindrome("not a palindrome")
palindrome("A man, a plan, a canal. Panama")
