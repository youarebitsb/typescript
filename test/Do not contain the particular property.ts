// 定义一个原型对象
const prototype = {
  sharedProperty: "I am shared"
};

// 创建两个对象，共享同一个原型
const obj1 = Object.create(prototype);
const obj2 = Object.create(prototype);

// 访问属性
console.log(obj1.sharedProperty); // 输出: "I am shared"
console.log(obj2.sharedProperty); // 输出: "I am shared"

// 检查是否为自身属性
console.log(obj1.hasOwnProperty('sharedProperty')); // false
console.log(obj2.hasOwnProperty('sharedProperty')); // false