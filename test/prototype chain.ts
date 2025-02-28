function Person(name: string) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const person1 = new Person("Alice");

// 验证原型链结构
console.log(person1.__proto__ === Person.prototype);  // true，person1 的原型是 Person.prototype
console.log(person1.__proto__.__proto__ === Object.prototype);  // true，Person.prototype 的原型是 Object.prototype
console.log(person1.__proto__.__proto__.__proto__ === null);  // true，Object.prototype 的原型是 null

// 打印验证
console.log('person1.__proto__:', person1.__proto__);
console.log('person1.__proto__.__proto__:', person1.__proto__.__proto__);
console.log('person1.__proto__.__proto__.__proto__:', person1.__proto__.__proto__.__proto__);
