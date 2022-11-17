// function Person(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// }

// Person.prototype.getFullName = function () {
// 	return this.name + ' ' + this.surname;
// };

// function Developer(name, surname, knownLanguage) {
// 	Person.apply(this, arguments);
// 	this.knownLanguage = knownLanguage;
// }

// Developer.prototype = new Person();
// Developer.prototype.constructor = Developer;
// Developer.prototype.getFullName = function () {
// 	return 'Dev ' + Person.prototype.getFullName.call(this);
// };

// class Person {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }

// class Developer extends Person {
// 	constructor(name, surname, knownLanguage) {
// 		super(name, surname);
// 		this.knownLanguage = knownLanguage;
// 	}

// 	getFullName() {
// 		return 'Dev ' + super.getFullName();
// 	}

// 	displayCompetency() {
// 		return super.getFullName() + ' knows ' + this.knownLanguage;
// 	}
// }

// const johnSmith = new Developer('John', 'Smith', 'JavaScript');

// console.log(johnSmith.getFullName());

// console.log(johnSmith.displayCompetency());

// console.log(johnSmith.name);
// console.log(johnSmith.surname);
// console.log(johnSmith.knownLanguage);

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// console.log(johnSmith instanceof Developer);
// console.log(johnSmith instanceof Person);
// console.log(johnSmith instanceof Object);

// const person = new Person('John', 'Smith');

// const person = {
// 	name: 'John',
// 	surname: 'Smith',
// };

// const developer = Object.create(person, {
// 	knownLanguage: {
// 		writable: true,
// 		configurable: true,
// 	},
// });

// const developer = {
// 	knownLanguage: 'JavaScript',
// };

// Object.setPrototypeOf(developer, person);

// console.log(developer.name);
// console.log(developer.surname);

// console.log(person.toString());
// console.log(person instanceof Object);
// console.log(person.constructor.name);
// console.log(person.constructor.prototype);
// console.log(Object.getPrototypeOf(person));

// const Person = function () {
// 	let protectedMembers;

// 	function capitalize(string) {
// 		return string.charAt(0).toUpperCase() + string.slice(1);
// 	}

// 	function PersonConstructor(name, surname, protected) {
// 		protectedMembers = protected || {};
// 		protectedMembers.capitalize = capitalize;

// 		this.name = capitalize(name);
// 		this.surname = capitalize(surname);
// 	}

// 	return PersonConstructor;
// };

// function Developer(name, surname, knownLanguage) {
// 	const parentProtected = {};
// 	Person.call(this, name, surname, parentProtected);
// 	this.knownLanguage = parentProtected.capitalize(knownLanguage);
// }

// function Person(name, surname) {
// 	this.name = name;
// 	this.surname = surname;

// 	// Object.preventExtensions(this);
// }

// function Developer(name, surname, knownLanguage) {
// 	Person.apply(this, arguments);
// 	this.knownLanguage = knownLanguage;
// }

// function Student(name, surname, subjectStudy) {
// 	Person.apply(this, arguments);
// 	this.subjectStudy = subjectStudy;
// }

// function DevStudent(name, surname, knownLanguage, subjectStudy) {
// 	Developer.call(this, name, surname, knownLanguage);
// 	Student.call(this, name, surname, subjectStudy);
// }

class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Developer extends Person {
	constructor(name, surname, knownLanguage) {
		super(name, surname);
		this.knownLanguage = knownLanguage;
	}

	getFullName() {
		return 'Dev ' + super.getFullName();
	}

	displayCompetency() {
		return super.getFullName() + ' knows ' + this.knownLanguage;
	}
}

class Student {
	constructor(name, surname, subjectOfStudy) {
		super(name, surname);
		this.subjectOfStudy = subjectOfStudy;
	}
}

const d = new DevStudent('John', 'Smith', 'C#', 'JavaScript');
console.log(d.knownLanguage);
