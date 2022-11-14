// * Convention-based approach

// function TheaterSeats() {
// 	this._seat = [];
// }

// TheaterSeats.prototype.placePerson = function (person) {
// 	this._seat.push(person);
// };

// const theaterSeats = new TheaterSeats();
// theaterSeats.placePerson({ name: 'John', surname: 'Smith' });

// console.log(theaterSeats);

// * Using Closure

// function TheaterSeats() {
// 	const seats = [];

// 	this.placePerson = function (person) {
// 		seats.push(person);
// 	};

// this.countOccupiedSeats = function () {
// 	return seats.length;
// };

// 	this.maxSize = 10;
// }

// TheaterSeats.prototype.isSoldOut = function () {
// 	return this.countOccupiedSeats() >= this.maxSize;
// };

// TheaterSeats.prototype.countFreeSeats = function () {
// 	return this.maxSize - this.countOccupiedSeats();
// };

// * meta-closure with an IIFE

// const TheaterSeats = (function () {
// 	const seats = [];
// 	const priv = {};
// 	let id = 0;

// 	function TheaterSeatsConstructor() {
// 		this.id = id++;
// 		this.maxSize = 10;
// 		priv[this.id] = {};
// 		priv[this.id].seats = [];
// 	}

// 	TheaterSeatsConstructor.prototype.placePerson = function (person) {
// 		priv[this.id].seats.push(person);
// 	};

// 	TheaterSeatsConstructor.prototype.countOccupiedSeats = function () {
// 		return priv[this.id].seats.length;
// 	};

// 	TheaterSeatsConstructor.prototype.isSoldOut = function () {
// 		return priv[this.id].seats.length >= this.maxSize;
// 	};

// 	TheaterSeatsConstructor.prototype.countFreeSeats = function () {
// 		return this.maxSize - priv[this.id].seats.length;
// 	};

// 	return TheaterSeatsConstructor;
// })();

// const t1 = new TheaterSeats();
// const t2 = new TheaterSeats();

// t2.placePerson({ name: 'John', surname: 'Smith' });

// console.log(t1.countFreeSeats());
// console.log(t2.countFreeSeats());

// * WeakMap

// const myMap = new WeakMap();

// const johnSmith = { name: 'John', surname: 'Smith' };
// const marioRossi = { name: 'Mario', surname: 'Rossi' };

// myMap.set(johnSmith, 'This is John Smith');
// myMap.set(marioRossi, 'This is Mario Rossi');

// console.log(myMap.get(johnSmith));
// console.log(myMap.get(marioRossi));

// const TheaterSeats = (function () {
// 	const priv = new WeakMap();

// 	const _ = function (instance) {
// 		return priv.get(instance);
// 	};

// 	function TheaterSeatsConstructor() {
// 		const privateMembers = { seats: [] };
// 		priv.set(this, privateMembers);
// 		this.maxSize = 10;
// 	}

// 	TheaterSeatsConstructor.prototype.placePerson = function (person) {
// 		_(this).seats.push(person);
// 	};

// 	TheaterSeatsConstructor.prototype.countOccupiedSeats = function () {
// 		return _(this).seats.length;
// 	};

// 	TheaterSeatsConstructor.prototype.isSoldOut = function () {
// 		return _(this).seats.length >= this.maxSize;
// 	};

// 	TheaterSeatsConstructor.prototype.countFreeSeats = function () {
// 		return this.maxSize - _(this).seats.length;
// 	};

// 	return TheaterSeatsConstructor;
// })();

// const t1 = new TheaterSeats();
// const t2 = new TheaterSeats();

// t2.placePerson({ name: 'John', surname: 'Smith' });

// console.log(t1.countFreeSeats());
// console.log(t2.countFreeSeats());

// ** Property Descriptor

// * Using getters and setters

// const person = {
// 	name: 'John',
// 	surname: 'Smith',
// 	get fullName() {
// 		return this.name + ' ' + this.surname;
// 	},
// 	set fullName(value) {
// 		const parts = value.toString().split(' ');
// 		this.name = parts[0] || '';
// 		this.surname = parts[1] || '';
// 	},
// 	email: 'john@example.com',
// };

// console.log(person.fullName);
// person.fullName = 'Mario Rossi';
// console.log(person.name);
// console.log(person.surname);
// console.log(person.fullName);

// * Describing Property

// const Person = (function () {
// 	const PersonConstructor = function () {
// 		this.name = '';
// 		this.surname = '';
// 		this.email = '';

// 		Object.defineProperty(this, 'fullName', {
// 			get: function () {
// 				return this.name + ' ' + this.surname;
// 			},
// 			set: function (value) {
// 				const parts = value.toString().split(' ');
// 				this.name = parts[0] || '';
// 				this.surname = parts[1] || '';
// 			},
// 		});
// 	};

// 	return PersonConstructor;
// })();

// * Properties with internal state

// const Person = (function () {
// 	const priv = new WeakMap();
// 	const _ = function (instance) {
// 		return priv.get(instance);
// 	};

// 	const PersonConstructor = function () {
// 		const privateMembers = { email: '' };
// 		priv.set(this, privateMembers);

// 		this.name = '';
// 		this.surname = '';
// 	};

// 	Object.defineProperty(PersonConstructor.prototype, 'fullName', {
// 		get: function () {
// 			return this.name + ' ' + this.surname;
// 		},
// 		set: function (value) {
// 			const parts = value.toString().split(' ');
// 			this.name = parts[0] || '';
// 			this.surname = parts[1] || '';
// 		},
// 	});

// 	Object.defineProperty(PersonConstructor.prototype, 'email', {
// 		get: function () {
// 			return _(this).email;
// 		},
// 		set: function (value) {
// 			const emailRegExp = /w+@w+.w{2,4}/i;
// 			if (emailRegExp.test(value)) {
// 				_(this).email = value;
// 			} else {
// 				throw new Error('Invalid Email address!');
// 			}
// 		},
// 	});

// 	return PersonConstructor;
// })();

// const p = new Person();
// p.fullName = 'John Smith';
// // p.email = 'john.smith';
// // console.log(p.email);
// console.log(p.name);

// * Encapsulation in modern JavaScript

class TheaterSeats {
	#seats = [];

	constructor() {
		this.maxSize = 10;
		// this.#seats = [];
	}

	placePerson(person) {
		return this.#seats.push(person);
	}

	countOccupiedSeats() {
		return this.#seats.length;
	}

	countFreeSeats() {
		return this.maxSize - this.#seats.length;
	}

	isSoldOut() {
		return this.#seats.length >= this.maxSize;
	}
}

const t = new TheaterSeats();
const t1 = new TheaterSeats();

t.placePerson({ name: 'John', surname: 'Smith' });

console.log(t.countFreeSeats());
console.log(t1.countFreeSeats());
