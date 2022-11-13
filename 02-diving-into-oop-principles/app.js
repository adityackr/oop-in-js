// * first requirement
//      - association
//      - aggregation
//      - composition

// * second requirement
//      - encapsulation
//      - inheritance
//      - polymorphism

// * association

function Person(name, surname) {
	this.name = name;
	this.surname = surname;
	this.parent = null;
}

const johnSmith = new Person('John', 'Smith');
const fredSmith = new Person('Fred', 'Smith');

fredSmith.parent = johnSmith; // this is called association. Of course they lives independently. Both can be created and deleted independently.

// * aggregation

const company = {
	name: 'ACME Inc.',
	employees: [],
	sortEmployees: function () {
		this.employees.sort();
	},
};

company.employees.push(johnSmith);
company.employees.push(fredSmith);

// Here person objects added to the employees collection to define company object. This is called aggregation. Here two objects are independent. If company deleted, persons are still alive and vice versa.

// * composition

const person = {
	name: 'Aditya',
	surname: 'Chakraborty',
	address: {
		street: 'Chawkbazar',
		city: 'Chattogram',
		country: 'Bangladesh',
	},
};

// Here, code defines a person with his name and address. The address property is strictly bound to the person object. If person deleted, address will also be deleted. This is called composition.

// * encapsulation

// In the company object if employees list is accessible to public they can do anything with that. We don't want to make it public. This concept of hiding the internal details is called encapsulation. To hide the internal details we can write the company object according to below.

function Company(name) {
	const employees = [];

	this.name = name;

	this.getEmployees = function () {
		return employees;
	};

	this.addEmployee = function (employee) {
		employees.push(employee);
	};

	this.sortEmployees = function () {
		employees.sort();
	};
}

// Now employees array cannot be accessible from the outside.

// * inheritance

// We have a Person object. Which describe a common person with their details. But we need a special person such as programmer. So, programmer is a person and also he knows some programming language. So we want what language he knows also. We can create an object with the knownLanguage property and inherit the Person object to that. This is called inheritance.

function Programmer(language) {
	this.knownLanguage = language;
}

Programmer.prototype = new Person('John', 'Smith');

const programmer = new Programmer('JavaScript');

console.log(programmer.name);
console.log(programmer.surname);
