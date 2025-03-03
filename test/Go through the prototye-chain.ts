// 定义一个更底层的原型对象 grandAnimal
const grandAnimal = {
  hasFur: true, // grandAnimal 有一个属性 hasFur
};

// 以 grandAnimal 为原型创建 animal
const animal = Object.create(grandAnimal);
animal.eats = true; // animal 有一个属性 eats

// 以 animal 为原型创建 rabbit
const rabbit = Object.create(animal);
rabbit.jumps = true; // rabbit 有一个属性 jumps

// 测试属性访问
console.log("rabbit.jumps:", rabbit.jumps); // 输出: true（来自 rabbit 自身）
console.log("rabbit.eats:", rabbit.eats); // 输出: true（来自 animal）
console.log("rabbit.hasFur:", rabbit.hasFur); // 输出: true（来自 grandAnimal）
console.log("rabbit.flies:", rabbit.flies); // 输出: undefined（原型链中无此属性）

// 在 animal 上添加一个 jumps 属性，试图“遮蔽”更高的层级
animal.jumps = false;
console.log("rabbit.jumps after animal.jumps = false:", rabbit.jumps); // 仍然输出: true
// 因为 rabbit 自身有 jumps 属性，查找不会到达 animal

// 删除 rabbit 自身的 jumps 属性
delete rabbit.jumps;
console.log("rabbit.jumps after delete:", rabbit.jumps); // 输出: false
// 现在找到的是 animal 上的 jumps 属性
