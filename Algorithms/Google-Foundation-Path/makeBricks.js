
function makeBricks(small, big, goal) {
  let fiveInch = big * 5;

  if (fiveInch == goal) {
    return true;
  } else if (fiveInch + small == goal) {
    return true;
  } else {
    return false;
  }
}

makeBricks(3, 1, 8); // → true
makeBricks(3, 1, 9); //→ false
makeBricks(3, 2, 10); // → true
