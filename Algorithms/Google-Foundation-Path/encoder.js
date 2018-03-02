// Write a function that replaces the words in `raw` with the words in `code_words` such that the first occurrence of each word in `raw` is assigned the first unassigned word in `code_words`.

function encoder(firstArr, secArr) {
	let obj = {};
	let newArr = [];
	for (let char = 0; char < firstArr.length; char++) {
		if (!obj[firstArr[char]]) {
			obj[firstArr[char]] = secArr[char];
		}
	}

	for (let char of firstArr) {
		if (obj[char]) {
			newArr.push(obj[char]);
		}
	}
	console.log(newArr);
}

encoder(['a'], ['1', '2', '3', '4']); //→ ["1"]
encoder(['a', 'b'], ['1', '2', '3', '4']); // → ["1", "2"]
encoder(['a', 'b', 'a'], ['1', '2', '3', '4']); // → ["1", "2", "1"]
