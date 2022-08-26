// function Person(name) {
// 	this.name = name;
// }

// const person = new Person('Aditya');
// console.log(person);

// const person = {
// 	name: 'Aditya',
// };

// console.log(person);

// for (const i in person) {
// 	console.log(i);
// }

// console.log(Object.keys(person));

// const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

// const baseObj = Object.getPrototypeOf(person);
// const descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString');
// console.log(descriptor);

// Object.defineProperty(person, 'name', {
// 	writable: false,
// 	enumerable: false,
// 	configurable: false,
// 	value: 'Aditya Chakraborty',
// });

// function Person(name) {
// 	this.name = name;
// }

// Person.prototype.PI = 3.1416;

// const p1 = new Person('Aditya');
// const p2 = new Person('Aditya Chakraborty');

// console.log(Object.getPrototypeOf(p1));
// console.log(Person.prototype);

function Square(width) {
	this.width = width;
	this.getWidth = function () {
		console.log('Width is ' + this.width);
		// this.draw();
	};
}

Square.prototype = {
	draw: function () {
		this.getWidth();
		console.log('Draw');
	},
	toString: function () {
		return 'My width is ' + this.width;
	},
};

const sqr1 = new Square(10);
const sqr2 = new Square(5);

// console.log(Object.keys(sqr1));

for (const i in sqr1) {
	console.log(i);
}
