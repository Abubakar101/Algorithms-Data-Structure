//   0 1 2
// A [][][]
// B [][][]
// C [][][]

// 1) A1, A2, A3
// 2) B1, B2, B3
// 3) C1, C2, C3

// 4) A1, B2, C3
// 6) C1, B2, A3

// 8) A1, B1, C1
// 9) A2, B2, C2
// 0) A3, B3, C3

// if(A1 === O && A2 === O && A3 === O)
// if(B1 === O && B2 === O && B3 === O)
// if(C1 === O && C2 === O && C3 === O)

// if(A1 === O && B1 === O && C1 === O)
// if(A2 === O && B2 === O && C2 === O)

// if(A3 === O && B3 === O && C3 === O)
// if(A1 === O && B2 === O && C3 === O)
// if(C1 === O && B2 === O && A3 === O)

const obj = { "A": [], "B": [], "C": [] };
function playTicTac(value, coord) {
  const [key, index] = coord.split("");
  obj[key][index] = value;
  return checkWinner(value);
}

function checkWinner(value) {
  if ((obj["A"][0] === value && obj["A"][1] === value && obj["A"][2] === value) ||
    (obj["B"][0] === value && obj["B"][1] === value && obj["C"][2] === value) ||
    (obj["C"][0] === value && obj["C"][1] === value && obj["C"][2] === value) ||

    (obj["A"][0] === value && obj["B"][0] === value && obj["C"][0] === value) ||
    (obj["A"][1] === value && obj["B"][1] === value && obj["C"][1] === value) ||
    (obj["A"][2] === value && obj["B"][2] === value && obj["C"][2] === value) ||

    (obj["A"][0] === value && obj["B"][1] === value && obj["C"][2] === value) ||
    (obj["C"][0] === value && obj["B"][1] === value && obj["A"][2] === value)) return `Winner is ${value}`;
}


playTicTac("O", "A0")
playTicTac("X", "A1")
playTicTac("O", "A2")


