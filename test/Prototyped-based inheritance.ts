class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  getBrand() {
    return this.brand;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}

const carA = new Car("Toyota", "Corolla");
console.log(carA.getBrand()); // "Toyota" (继承自 Vehicle)
console.log(carA.model); // "Corolla" (Car 新增的属性)
