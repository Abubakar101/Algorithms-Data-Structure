https://www.codewars.com/kata/snail/train/javascript

const snail = paramArr => {
  const newArr = [];
  let topLeft = 0,
    topRight = paramArr[topLeft].length - 1,
    bottomRight = paramArr.length - 1,
    bottomLeft = 0;

  let right, down, left, up;
  let direction = "right";

  let innerLoop = 0;
  let outerLoop = 0;

  while (bottomLeft !== topRight) {
    right = paramArr[topLeft][innerLoop];
    down = paramArr[outerLoop][topRight];
    left = paramArr[bottomRight][innerLoop];
    up = paramArr[outerLoop][bottomLeft];

    if (direction === "right") {
      newArr.push(right);

      if (innerLoop === topRight) {
        topLeft++;
        outerLoop = topLeft;
        direction = "down";
      }
      innerLoop++;
    } else if (direction === "down") {
      newArr.push(down);

      if (outerLoop === bottomRight) {
        topRight--;
        innerLoop -= 2;
        outerLoop--;
        direction = "left";
      }
      outerLoop++;
    } else if (direction === "left") {
      newArr.push(left);

      if (innerLoop === bottomLeft) {
        bottomRight--;
        outerLoop = bottomRight;
        innerLoop++;
        direction = "up";
      }
      innerLoop--;
    } else if (direction === "up") {
      newArr.push(up);

      if (outerLoop === topLeft) {
        bottomLeft++;
        innerLoop = bottomLeft;
        outerLoop++;
        direction = "right";
      }
      outerLoop--;
    }
  }
  newArr.push(paramArr[topLeft][innerLoop]);
  return newArr;
};

const arr = [
[1,  2,  3,  4,  5,  6],
[20, 21, 22, 23, 24, 7],
[19, 32, 33, 34, 25, 8],
[18, 31, 36, 35, 26, 9],
[17, 30, 29, 28, 27, 10],
[16, 15, 14, 13, 12, 11]]

snail(arr); // => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
   
