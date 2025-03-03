// constructorObject.ts

// 定义一个构造函数
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 通过构造函数创建对象并初始化属性
const constructorObject = new Person("John", 30);

console.log(constructorObject); // 输出：Person { name: "John", age: 30 }
