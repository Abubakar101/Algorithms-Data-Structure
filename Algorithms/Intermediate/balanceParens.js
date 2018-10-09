// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// https://coderbyte.com/algorithm/generate-balanced-bracket-combinations



function balancedParens(left, str = "", right = 0, arr = []) {
  (left === 0 && right === 0) && arr.push(str);
  left > 0 && balancedParens(left - 1, str + "(", right + 1, arr);
  right > 0 && balancedParens(left, str + ")", right - 1, arr);
  return arr;
}

balancedParens(3) //=> ["()()()","(())()","()(())","(()())","((()))"]
