const str = 'AAABBBCDDDAAA';

let count = 1;
let results = '';
for (let i = 0, j = str.length; i < j; i++) {
	if (str[i] === str[i + 1]) {
		count++;
	} else if (str[i] !== str[i + 1]) {
		results += count + str[i];
		count = 1;
	}
}
console.log(results);
