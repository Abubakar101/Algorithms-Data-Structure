// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


// Brute Force - Spread operator, splice method and two for loops
function destroyer(...arr) {
  let initial = arr[0]; 
  let secArg = arr;
  secArg.splice(0,1);

  let tempArr = [];

  for (let i = initial.length-1; i > -1; i--){
  for (let j = 0; j < secArg.length; j++){
      if (initial[i] === secArg[j]){
        initial.splice(i,1)
      }
    }
  }

  return initial;
}

// On
function destroyer(...arr) {
  let initial = arr[0]; 
  let secArg = arr;
  secArg.splice(0,1);

  let tempArr = [];
  let map = {};
  for (let j = 0; j < secArg.length; j++) {
    map[secArg[j]] = true;
  }

  for (let i = initial.length-1; i > -1; i--){
    if (map[initial[i]] !== undefined){
      initial.splice(i,1);
    }
  }

  return initial;
}

// On and using filter method, one for loop and arguments object
function destroyer(arr) {
let map = {};
  for (let key in arguments) {
    if (key == 0) continue;
    map[arguments[key]] = true;
  }
  return arr.filter((e) => map[e] == undefined)
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
