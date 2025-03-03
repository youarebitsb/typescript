// Define a constructor function
function CFp() {}

// Create two objects using the constructor
let cf1 = new CFp();
let cf2 = new CFp();

// Add a new property to the constructor's prototype
CFp.prototype.newSharedProperty = 'new value';

// Both objects can access the new prototype property
console.log(cf1.newSharedProperty); // Outputs: 'new value'
console.log(cf2.newSharedProperty); // Outputs: 'new value'

// Assigning a value to the property on cf1 creates a local property
cf1.newSharedProperty = 'modified value';

// cf1 now has its own property, while cf2 still uses the prototype's value
console.log(cf1.newSharedProperty); // Outputs: 'modified value'
console.log(cf2.newSharedProperty); // Outputs: 'new value'