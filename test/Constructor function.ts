function Person(name) {
  // 构造函数中的 this 指向新创建的对象
  this.name = name;
  console.log("正在调用构造函数创建 Person 实例...");
}

// 通过在函数前使用 new 关键字来调用构造函数
const alice = new Person("Alice");

// 新创建的对象能够访问构造函数中定义的属性
console.log(alice.name); // 输出: "Alice"