class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
//Both a class and a constructor share the same internal mechanisms
console.log("Person.prototype:", Person.prototype);
