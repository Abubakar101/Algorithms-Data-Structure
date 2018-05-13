/*
#Fold an array

In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!



https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript
*/


function foldArray(array, runs) {
	if (!array[1] && array[1] !== 0) return array;
	let arr = array;
	let newArr = [];

	let midNum =
		(arr.length % 2 !== 0 && Math.floor(arr.length / 2)) || arr.length / 2;
	let count = 0;

	while (count < runs) {
		// Stop at 1 length;
		if (!arr[1] && arr[1] !== 0) break;
		let tempArr = [];
		for (let i = 0, k = arr.length - 1; i < midNum; i++, k--) {
			tempArr.push(arr[i] + arr[k]);
		}
		arr.length % 2 !== 0 && tempArr.push(arr[midNum]);
		count++;

		if (count < runs) {
			midNum =
				(tempArr.length % 2 !== 0 && Math.floor(tempArr.length / 2)) ||
				tempArr.length / 2;
			arr = tempArr;
		}
		newArr = tempArr;
	}

	return newArr;
}

console.log(
	foldArray([1, 2, 3, 4, 5], 1) + '' === [6, 6, 3] + '',
	foldArray([1, 2, 3, 4, 5], 2) + '' === [9, 6] + '',
	foldArray([1, 2, 3, 4, 5], 3) + '' === [15] + '',
	foldArray([-9, 9, -8, 8, 66, 23], 1) + '' === [14, 75, 0] + ''
);
