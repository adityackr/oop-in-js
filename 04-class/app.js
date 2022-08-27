// function Rectangle(width, height) {
// 	this.width = width;
// 	this.height = height;
// }

// Rectangle.prototype.draw = function () {
// 	console.log(this);
// 	console.log('Drawing ...');
// };

// let rect1 = new Rectangle(12, 15);

// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 		this.another = function () {};
// 	}

// 	name = 'Aditya';
// 	test = function () {};

// 	draw() {
// 		console.log('Drawing...');
// 	}
// }

// const rect = new Rectangle(45, 25);
// console.log(rect);
// rect.draw();

// class Person {
// 	constructor(name, email) {
// 		this.name = name;
// 		this.email = email;
// 	}

// 	print() {
// 		console.log(this.name, this.email);
// 	}

// 	test() {
// 		console.log(this);
// 	}

// 	static create(str) {
// 		let person = JSON.parse(str);
// 		return new Person(person.name, person.email);
// 	}
// }

// const str = '{"name": "Aditya", "email": "aditya@test.com"}';

// const p1 = Person.create(str);
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print();

// const test = p1.test;
// test();
// const _radius = Symbol();
// const _radius = new WeakMap();
// const _resize = new WeakMap();
// class Circle {
// 	constructor(radius, size) {
// 		this.size = 100;
// 		_radius.set(this, radius);
// 		_resize.set(this, () => {
// 			return this.size;
// 		});
// 	}

// 	get radius() {
// 		return _radius.get(this);
// 	}

// 	set radius(v) {
// 		return _radius.set(this, v);
// 	}

// 	draw() {
// 		console.log('Drawing...');
// 		console.log(_radius.get(this));
// 		console.log(_resize.get(this)());
// 	}
// }

// const c = new Circle(2);
// // console.log(c);

// // console.log(c[Object.getOwnPropertySymbols(c)[0]]);

// c.draw();
// c.radius = 100;
// console.log(c.radius);

class Shape {
	constructor(color) {
		this.color = color;
	}
	draw() {
		console.log('Drawing');
	}
}

class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
	}

	draw() {
		console.log('Drawing a rectangle');
	}

	calculate() {
		return this.width * this.height;
	}
}

const rect = new Rectangle('Green', 4, 5);
console.log(rect);
rect.draw();
