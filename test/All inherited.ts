let parent = {
  x: 10,  // 状态
  method: function() {  // 行为
      console.log("Parent method");
  }
};

let child = Object.create(parent);
console.log(child.x);  // 10，从 parent 继承的状态
child.method();  // "Parent method"，从 parent 继承的行为

child.x = 20;  // child 现在有自己的状态
console.log(child.x);  // 20
delete child.x;  // 删除 child 自己的 x
console.log(child.x);  // 10，再次从 parent 继承