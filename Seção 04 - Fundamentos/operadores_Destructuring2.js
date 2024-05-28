// Operadores: Destructuring
// Novo Recurso do ES2015
console.log("Operador Destructuring parte 2:");
console.log("\nExemplos com Object:\n");

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 }));
const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 950}));
console.log(rand({}));
// console.log(rand());   // ERROR

// Exemplos com Array
console.log("\nExemplos com Array:\n");

function randm([ min = 0, max = 1000 ]) {
    if (min > max) [ min, max ] = [ max, min];
    const valor2 = Math.random() * (max - min) + min;
    return Math.floor(valor2);
}

console.log(randm([ 50, 40 ]));
console.log(randm([ 992 ]));
console.log(randm([ , 10 ]));
console.log(randm([]));
// console.log(randm());    // ERROR
