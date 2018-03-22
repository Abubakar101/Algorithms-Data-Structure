// Write a method that finds the second highest number in an array of integers.
const secHighestNum = arr => arr.sort((a, b) => b - a)[1];
console.log('SecHighestNum => ', secHighestNum([1, 5, 10, 50, 15]));
