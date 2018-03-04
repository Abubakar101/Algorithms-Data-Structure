// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

function evenlySpaced(a, b, c) {
	let arr = [a, b, c].sort();

	return arr[0] - arr[1] === arr[1] - arr[2];
}

console.log(evenlySpaced(2, 4, 6)); //→ true
console.log(evenlySpaced(4, 6, 2)); //→ true
console.log(evenlySpaced(4, 6, 3)); //→ false
