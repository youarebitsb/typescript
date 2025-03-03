// 定义一个构造函数
function Person(name: string) {
    this.name = name;
}

// 在 Person.prototype 上添加一个方法
Person.prototype.greet = function() {
    console.log(`你好，我的名字是 ${this.name}`);
};

// 创建一个实例
const alice = new Person("Alice");

// 检查原型链
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true

// 验证继承
alice.greet(); // 输出: "你好，我的名字是 Alice"

// 检查 Function.prototype 的方法
console.log(Person.call === Function.prototype.call); // true