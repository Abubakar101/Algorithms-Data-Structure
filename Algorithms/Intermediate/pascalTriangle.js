function initPascalTriangle(k) {
  const results = [];

  for (let i = 0; i < k; i++) {
    const row = [];

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        row.push(results[i - 1][j - 1] + results[i - 1][j])
      }
    }
    results.push(row)
  }
  return results;
}


initPascalTriangle(6)

/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
*/
