// Herança em Javascript

const ferrari = {
    modelo: 'F40',
    velMax: 325
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)     // Saída: [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype)     // Saída: true
console.log(volvo.__proto__ === Object.prototype)     // Saída: true
console.log(Object.prototype.__proto__ === null)    // Saída: true

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)    // Saída: function function
console.log(Object.prototype, MeuObjeto.prototype)    // Saída: [Object: null prototype] {} {}