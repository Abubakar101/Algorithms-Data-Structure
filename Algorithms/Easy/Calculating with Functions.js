/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand

https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
*/

function zero(a) {
	return !a ? 0 : eval(`0 ${a}`);
}
function one(a) {
	return !a ? 1 : eval(`1 ${a}`);
}
function two(a) {
	return !a ? 2 : eval(`2 ${a}`);
}
function three(a) {
	return !a ? 3 : eval(`3 ${a}`);
}
function four(a) {
	return !a ? 4 : eval(`4 ${a}`);
}
function five(a) {
	return !a ? 5 : eval(`5 ${a}`);
}
function six(a) {
	return !a ? 6 : eval(`6 ${a}`);
}
function seven(a) {
	return !a ? 7 : eval(`7 ${a}`);
}
function eight(a) {
	return !a ? 8 : eval(`8 ${a}`);
}
function nine(a) {
	return !a ? 9 : eval(`9 ${a}`);
}

function plus(a) {
	return `+${a}`;
}
function minus(a) {
	return `-${a}`;
}
function times(a) {
	return `*${a}`;
}
function dividedBy(a) {
	return `/${a}`;
}

console.log(
	seven(times(five())) === 35,
	four(plus(nine())) === 13,
	eight(minus(three())) === 5,
	six(dividedBy(two())) === 3,
	zero(minus(eight())) === -8
);
