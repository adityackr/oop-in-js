// const rect = {
// 	width: 100,
// 	height: 50,

// 	draw: function () {
// 		console.log('Rectangle');
// 		this.printProperties();
// 		console.log(this);
// 	},

// 	printProperties: function () {
// 		console.log(`My width is ${this.width}`);
// 		console.log(`My height is ${this.height}`);
// 	},
// };

// rect.draw();
// // rect.height = 100;
// // rect.draw();

// function myFunc() {
// 	console.log(this);
// 	rect.printProperties();
// }

// new myFunc();

// const another = {
// 	width: 47,
// 	height: 56,
// 	print: rect.printProperties,
// };
// another.print();
// console.log(another.print);

const createRect = function (width, height) {
	return {
		width,
		height,

		draw() {
			console.log('Rectangle');
			this.printProperties();
			console.log(this);
		},

		printProperties() {
			console.log(`My width is ${this.width}`);
			console.log(`My height is ${this.height}`);
		},
	};
};

const rect1 = createRect(100, 50);
// rect1.draw();

const rect2 = createRect(40, 30);
// rect2.draw();

const Rectangle = function (width, height) {
	this.width = width;
	this.height = height;

	this.draw = function () {
		console.log('Rectangle');
		this.printProperties();
		console.log(this);
	};
	this.printProperties = function () {
		console.log(`My width is ${this.width}`);
		console.log(`My height is ${this.height}`);
	};
};

const rect3 = new Rectangle(10, 8);
rect3.draw();
