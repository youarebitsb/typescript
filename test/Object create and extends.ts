/**
 * Prototype chain demonstration:
 *
 * Part 1: Using Object.create()
 * Part 2: Using class extends
 * 
 * We'll print out the complete prototype chain for each object to visualize the differences.
 */

// Part 1: Using Object.create()
const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log("Object.create():");
console.log("rabbit.eats:", rabbit.eats); // true (来自原型)
console.log("rabbit.jumps:", rabbit.jumps); // true (自身属性)

// Part 2: Using extends
class Animal {
  eats: boolean = true;
}

class Rabbit extends Animal {
  jumps: boolean = true;
}

const rabbitInstance = new Rabbit();

console.log("\nextends:");
console.log("rabbitInstance.eats:", rabbitInstance.eats); // true (继承)
console.log("rabbitInstance.jumps:", rabbitInstance.jumps); // true (自身属性)

// Utility function to fetch full prototype chain
function getPrototypeChain(obj: object): object[] {
  const chain: object[] = [];
  let current = Object.getPrototypeOf(obj);

  while (current !== null) {
    chain.push(current);
    current = Object.getPrototypeOf(current);
  }
  return chain;
}

// Print prototype chain results
console.log("\nPrototype chain for 'rabbit' (Object.create):");
getPrototypeChain(rabbit).forEach((proto, index) => {
  console.log(`Level ${index + 1}:`, proto);
});

console.log("\nPrototype chain for 'rabbitInstance' (class extends):");
getPrototypeChain(rabbitInstance).forEach((proto, index) => {
  console.log(`Level ${index + 1}:`, proto);
});