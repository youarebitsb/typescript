class Car {
  category = "General Vehicle"; // 实例属性
  constructor(public brand: string) {} // 自动声明实例属性 brand: string

  getCategory() {
    return this.category;
  }
}

// Testing shared properties
const carA = new Car("Toyota");
const carB = new Car("Honda");

console.log("Same prototype?", carA.__proto__ === carB.__proto__); // true
console.log("carA category:", carA.getCategory()); // "General Vehicle"
console.log("carB category:", carB.getCategory()); // "General Vehicle"
