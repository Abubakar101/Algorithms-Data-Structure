// Task
// You're given an array of integers a and two integers x and y. Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.

// Code Limit
// Less than 48 characters.

// Example
// For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,
// the output should be 7.

// elements 2, 5, 6, 7, 1, 3, 4 should be counted.

https://stackoverflow.com/questions/52729636/one-line-task-check-range-codewars-using-javascripts-methods

checkRange=(a,x,y)=>a.map(v=>i+=x>v==v>y,i=0)|i


a = [95,92,27,55,55,20,40,8,7,45,87,14,44,35,64,84,95,85,69,47,53,49,95,54,97,7,67,31,76,97,7,24,82,61,10,34,34,85,66,96,65,2,84,4,68,74,46,50]
x = 64
y = 76
// Expected: 8

checkRange(a,x,y)
