// // const rect = {
// // 	width: 100,
// // 	height: 50,

// // 	draw: function () {
// // 		console.log('Rectangle');
// // 		this.printProperties();
// // 		console.log(this);
// // 	},

// // 	printProperties: function () {
// // 		console.log(`My width is ${this.width}`);
// // 		console.log(`My height is ${this.height}`);
// // 	},
// // };

// // rect.draw();
// // // rect.height = 100;
// // // rect.draw();

// // function myFunc() {
// // 	console.log(this);
// // 	rect.printProperties();
// // }

// // new myFunc();

// // const another = {
// // 	width: 47,
// // 	height: 56,
// // 	print: rect.printProperties,
// // };
// // another.print();
// // console.log(another.print);

// const createRect = function (width, height) {
// 	return {
// 		width,
// 		height,

// 		draw() {
// 			console.log('Rectangle');
// 			this.printProperties();
// 			console.log(this);
// 		},

// 		printProperties() {
// 			console.log(`My width is ${this.width}`);
// 			console.log(`My height is ${this.height}`);
// 		},
// 	};
// };

// const rect1 = createRect(100, 50);
// // rect1.draw();

// const rect2 = createRect(40, 30);
// // rect2.draw();

// const Rectangle = function (width, height) {
// 	this.width = width;
// 	this.height = height;

// 	this.draw = function () {
// 		console.log('Rectangle');
// 		this.printProperties();
// 		console.log(this);
// 	};
// 	this.printProperties = function () {
// 		console.log(`My width is ${this.width}`);
// 		console.log(`My height is ${this.height}`);
// 	};
// };

// const rect3 = new Rectangle(10, 8);
// // rect3.draw();

// // function myNew(constructor) {
// // 	const obj = {};
// // 	Object.setPrototypeOf(obj, constructor.prototype);
// // 	const argsArray = Array.prototype.slice.apply(arguments);
// // 	constructor.apply(obj, argsArray.slice(1));
// // 	return obj;
// // }

// // const rect4 = myNew(Rectangle, 45, 30);
// // rect4.draw();

// function test() {
// 	console.log('Something');
// }

// // console.log(test.name, test.length);

// const Rect = new Function(
// 	'width',
// 	'height',
// 	`this.width = width;
// 	this.height = height;

// 	this.draw = function () {
// 		console.log('Rectangle');
// 		this.printProperties();
// 		console.log(this);
// 	};
// 	this.printProperties = function () {
// 		console.log('My width is ' + this.width);
// 		console.log('My height is ' + this.height);
// 	};`
// );

// const rect5 = new Rect(4, 3);
// // rect5.draw();

// function myFunc(c, d) {
// 	console.log(this);
// 	console.log(this.a + this.b + c + d);
// }

// // myFunc.call({ a: 2, b: 3 }, 5, 7);
// // myFunc.apply({ a: 2, b: 3 }, [5, 7]);
// // myFunc.apply({});
// // myFunc();
// const bindTest = myFunc.bind({ a: 5, b: 7 });
// // bindTest(7, 8);

// const n = 10;

// function changeMe(n) {
// 	n += 100;
// 	console.log(n);
// }

// changeMe(n);
// console.log(n);

// const obj = {
// 	a: 10,
// 	b: 20,
// };

// function changeObj(obj) {
// 	obj.a += 100;
// 	obj.b += 100;
// 	console.log(obj);
// }

// changeObj(obj);
// console.log(obj);

const Rectangle = function (width, height) {
	this.width = width;
	this.height = height;
	let position = {
		x: 56,
		y: -100,
	};

	this.draw = function () {
		console.log('Rectangle');
		printProperties();
		console.log('Position: X = ' + position.x + ', Y = ' + position.y);
	};
	const printProperties = function () {
		console.log(`My width is ${this.width}`);
		console.log(`My height is ${this.height}`);
	}.bind(this);

	Object.defineProperty(this, 'position', {
		get: function () {
			return position;
		},
		set: function (value) {
			position = value;
		},
	});
};

const rect7 = new Rectangle(45, 30);
rect7.draw();
rect7.position = {
	x: 456,
	y: -123,
};
console.log(rect7.position);
