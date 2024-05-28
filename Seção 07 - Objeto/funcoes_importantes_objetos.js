// Funções Importantes de Objeto

const pessoa = {
    nome: 'Rebeca',
    idade: 20,
    peso: 60
}

console.log(Object.keys(pessoa))    // Saída: [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa))   // Saída: [ 'Rebeca', 20, 60 ]
console.log(Object.entries(pessoa))   // Saída: [ ['nome', 'Rebeca' ], [ 'idade', 20 ], [ 'peso', 60 ]]

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '01/01/2024'
}) 

pessoa.dataNasc = '01/01/1997'
console.log(pessoa.dataNasc)    // Saída: 01/01/2024

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)    // Saída: { a: 4, b: 2, c: 3 }