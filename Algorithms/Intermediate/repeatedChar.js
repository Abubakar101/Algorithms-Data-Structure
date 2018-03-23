// Find the character that appears the most time in a given string (i.e. "tomorrow" should return 'o'). Return the character later in the alphabet if there is a tie.

function repeatedChar(str) {
	const charsObj = {};
	let largestNum = 1,
		repeatedChar = '';

	for (let char of str) {
		if (charsObj[char]) {
			charsObj[char]++;

			if (charsObj[char] > largestNum) {
				largestNum = charsObj[char];
				repeatedChar = char;
			}
		} else {
			charsObj[char] = 1;
		}
	}

	return repeatedChar;
}
console.log('String => ', repeatedChar('tomorrow'));
