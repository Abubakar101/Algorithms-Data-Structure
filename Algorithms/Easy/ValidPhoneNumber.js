/*
Write a function that accepts a string, and returns true if it is in the form of a phone number. 
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) 

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false


https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

*/

function validPhoneNumber(phoneNumber) {
  //TODO: Return whether phoneNumber is in the proper form
	if (phoneNumber[5] !== ' ' || phoneNumber[9] !== '-' || phoneNumber.length !== 14) return false;
	return true;
}

console.log(
	validPhoneNumber('(123) 456-7890') === true,
	validPhoneNumber('(1111)555 2345') === false,
	validPhoneNumber('(098) 123 4567') === false
);
