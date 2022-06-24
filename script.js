'use strict';

// Constructors
const Person = function (firstname, birthyear) {
  // Instance Properties
  this.firstname = firstname;
  this.birthyear = birthyear;
  // Don't do this
  // this.calcage = function () {
  //   console.log(2037 - this.birthyear);
  // };
};
const Azeez = new Person('Azeez', 2013);
console.log(Azeez);

const Hamza = new Person('Hamza', 2015);
const mogli = new Person('Mogli', 2019);
console.log(Hamza, mogli);
const Jay = 'Jay';
console.log(Azeez instanceof Person);
console.log(Jay instanceof Person);

// Prototypes
Person.prototype.calcage = function () {
  console.log(2037 - this.birthyear);
};

Azeez.calcage();
mogli.calcage();
console.log(Person.prototype);

console.log(Azeez.__proto__);
console.log(Azeez.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Azeez));
console.log(Person.prototype.isPrototypeOf(Hamza));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Spanies';
console.log(Azeez.__proto__);
console.log(Person.prototype);
console.log(Azeez.species);
console.log(Person.hasOwnProperty('species'));
console.log(Azeez.hasOwnProperty('species'));
console.log(Azeez.hasOwnProperty('firstname'));
