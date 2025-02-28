class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const john = new Person("John");

// Accessing the prototype of the Person class through the instance
console.log(john.__proto__ === Person.prototype); // true

// Adding a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Calling the method from the prototype
john.greet(); // Output: "Hello, my name is John"
