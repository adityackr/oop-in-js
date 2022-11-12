// // * Objects

// // const emptyObject = {};

// // * Properties
// // const person = {
// // 	name: 'Aditya',
// // 	surname: 'Chakraborty',
// // 	showFullName() {
// // 		return this.name + ' ' + this.surname;
// // 	},
// // 	// address: {
// // 	// 	street: 'K B Aman Ali Road',
// // 	// 	city: 'Chattogram',
// // 	// 	country: 'Bangladesh',
// // 	// },
// // };

// // const name = person.name;
// // const name = person['name'];

// // console.log(person.name);
// // console.log(person.age);
// // person.age = 31;
// // console.log(person.age);
// // delete person.address;
// // console.log(person.address);

// // console.log(person.showFullName());

// // * Constructors

// function Person(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.address = '';
// 	this.email = '';

// 	this.fullName = function () {
// 		return this.name + ' ' + this.surname;
// 	};
// }

// const johnSmith = new Person('John', 'Smith');
// const marioRossi = new Person('Mario', 'Rossi');

// console.log(johnSmith.fullName());
// console.log(marioRossi.fullName());

// Person.prototype.greets = function () {
// 	return 'Hello ' + this.fullName();
// };

// console.log(johnSmith.greets());
// console.log(marioRossi.greets());

// * Class

class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	fullName() {
		return this.name + ' ' + this.surname;
	}
}

const johnSmith = new Person('John', 'Smith');
const marioRossi = new Person('Mario', 'Rossi');

console.log(johnSmith.fullName());
console.log(marioRossi.fullName());

Person.prototype.greet = function () {
	return 'Hello ' + this.fullName();
};

console.log(johnSmith.greet());
console.log(marioRossi.greet());
