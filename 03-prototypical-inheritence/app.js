// function extend(Parent, Child) {
// 	Child.prototype = Object.create(Parent.prototype);
// 	Child.prototype.constructor = Child;
// }

// function Shape(color) {
// 	this.color = color;
// }

// Shape.prototype.common = function () {
// 	console.log('I am Common Method');
// };

// function Square(width, color) {
// 	Shape.call(this, color);
// 	this.width = width;
// }

// extend(Shape, Square);

// Square.prototype.common = function () {
// 	// Shape.prototype.common.call(this);
// 	console.log('I am calling from Square and I am overridden.');
// };

// Square.prototype.draw = function () {
// 	console.log('Drawing');
// };

// const shape = new Shape('black');
// const sqr = new Square(45, 'green');

// function Circle(radius, color) {
// 	Shape.call(this, color);
// 	this.radius = radius;
// }

// extend(Shape, Circle);
// Circle.prototype.common = function () {
// 	// Shape.prototype.common.call(this);
// 	console.log('I am calling from circle and I am overridden.');
// };

// const circle = new Circle(10, 'red');

// const shapes = [shape, sqr, circle];

// for (const i of shapes) {
// 	i.common();
// }

const canWalk = {
	walk: function () {
		console.log('Walking...');
	},
};

const canEat = {
	eat: function () {
		console.log('Eating...');
	},
};

const canSwim = {
	swim: function () {
		console.log('Swimming...');
	},
};

function mixin(target, ...sources) {
	Object.assign(target, ...sources);
}

function Person(name) {
	this.name = name;
}

mixin(Person.prototype, canWalk, canEat);

const person = new Person('Aditya');
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
