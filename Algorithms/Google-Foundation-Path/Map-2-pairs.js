// Given an array of non-empty strings, create and return a Map<String, String> as follows: for each string add its first character as a key with its last character as the value.

function pairs(arr) {
	let obj = {};

	for (let word of arr) {
		obj[word[0]] = word[word.length - 1];
	}
	console.log(JSON.stringify(obj));
}

pairs(['code', 'bug']); //→ {"b": "g", "c": "e"}
pairs(['man', 'moon', 'main']); // → {"m": "n"}
pairs(['man', 'moon', 'good', 'night']); // → {"g": "d", "m": "n", "n": "t"}
