// https://www.codewars.com/kata/directions-reduction/train/javascript

/*
Once upon a time, on a way through the old wild west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

*/

function dirReduc(arr, newArr = [], found = false) {
  const obj = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" };

  for (let i = 0, j = arr.length; i < j; i++) {
    if (obj[arr[i]] === arr[i + 1]) {
      found = true; i++;
    } else newArr.push(arr[i]);
  }

  return found ? dirReduc(newArr) : newArr;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])//, ["WEST"])
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])//, ["NORTH", "WEST", "SOUTH", "EAST"])
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])//, [])
