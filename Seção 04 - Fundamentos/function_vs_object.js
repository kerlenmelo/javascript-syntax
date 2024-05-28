// OBJETO VS FUNÇÃO
console.log("Object vs Function:");

console.log(typeof Object);    // function
console.log(typeof new Object);    // object

const cliente = function() {};
console.log(typeof cliente);    // function
console.log(typeof new cliente);    // object

class Produto {};   // ES 2015 (ES6)
console.log(typeof Produto);    // function
console.log(typeof new Produto());  // object