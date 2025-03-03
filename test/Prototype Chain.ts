class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

class Car extends Vehicle {
  constructor(name, model) {
    super(name);
    this.model = model;
  }
}

// 验证 Car.prototype.__proto__ 是否严格等于 Vehicle.prototype
console.log(Car.prototype.__proto__ === Vehicle.prototype); // true

// 验证 Car.prototype.__proto__.constructor 是否严格等于 Vehicle
console.log(Car.prototype.__proto__.constructor === Vehicle); // true

// 另一种写法: Object.getPrototypeOf(Car.prototype) 和 Vehicle.prototype 是否相等
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // true

// 同理, 验证 constructor
console.log(Object.getPrototypeOf(Car.prototype).constructor === Vehicle); // true

console.log(Car.prototype.constructor === Car); // true
console.log(Vehicle.prototype.constructor === Vehicle); //true

console.log(Car.prototype.__proto__.constructor);
console.log(Car.prototype.__proto__.__proto__.constructor);
