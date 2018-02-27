// Return an array that contains the sorted values from the input array with duplicates removed.

const sort = arr => console.log(Array.from(new Set(arr)).sort((a, b) => a - b));

sort([]); //→ []
sort([1]); //→ [1]
sort([1, 1]); // → [1]
