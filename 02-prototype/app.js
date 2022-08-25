// function Person(name) {
// 	this.name = name;
// }

// const person = new Person('Aditya');
// console.log(person);

const person = {
	name: 'Aditya',
};

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

Object.defineProperty(person, 'name', {
	writable: false,
	enumerable: false,
	configurable: false,
	value: 'Aditya Chakraborty',
});
