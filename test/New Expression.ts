class Person {
  // Each Person will have a 'name' property
  name: string;

  // The constructor is called automatically when we use `new`
  constructor(name: string) {
    this.name = name;
    console.log("A new Person instance is being created!");
  }

  // A simple method to let this person greet
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Here we use the `new` expression to create a new Person
const alice = new Person("Alice");

// The greet method is now available on the 'alice' instance
alice.greet();
