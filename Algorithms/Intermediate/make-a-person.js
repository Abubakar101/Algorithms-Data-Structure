// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

function Person(name) {
	let fullName = name;

	this.getFirstName = function() {
		return fullName.split(' ')[0];
	};

	this.getLastName = function() {
		return fullName.split(' ')[1];
	};

	this.getFullName = function() {
		return fullName;
	};

	this.setFirstName = function(first) {
		fullName = `${first} ${fullName.split(' ')[1]}`;
	};

	this.setLastName = function(last) {
		fullName = `${fullName.split(' ')[0]} ${last}`;
	};

	this.setFullName = function(name) {
		fullName = name;
	};
}

const bob = new Person('Bob Ross');
// console.log(bob.getFullName(), 'fullname');

console.log(Object.keys(bob).length, 'length - 6');
// // should return 6.

console.log(bob instanceof Person, 'true');
// // // should return true.

console.log(bob.firstName, 'undefined');
// // // should return undefined.

console.log(bob.lastName, 'undefined');
// // // should return undefined.

console.log(bob.getFirstName(), '- firstName');
// // // should return "Bob".

console.log(bob.getLastName(), '- lastName');
// // // should return "Ross".

console.log(bob.getFullName(), '-fullname');
// // // should return "Bob Ross".

bob.setFirstName('Haskell');
console.log(bob.getFullName());
// // should return "Haskell Ross"

bob.setLastName('Curry');
console.log(bob.getFullName());
// // should return "Haskell Curry"

bob.setFullName('Haskell Curry');
console.log(bob.getFullName());
// // should return "Haskell Curry"

bob.setFullName('Haskell Curry');
console.log(bob.getFirstName());
// // should return "Haskell"

bob.setFullName('Haskell Curry');
console.log(bob.getLastName());
// // should return "Curry"
