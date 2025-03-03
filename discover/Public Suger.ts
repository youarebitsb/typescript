class Car {
  // 类内部没有声明实例属性 brand

  constructor(brand: string) {  // 参数 brand 未被 public/private/protected 修饰
    console.log(brand);          // ✔️ 正常：访问构造器参数（局部变量）
    console.log(this.brand);     // ❌ undefined
  }
}

const myCar = new Car("Toyota");
console.log(myCar.brand);        // ❌ undefined
