// Notação literal: 
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)    // Saída: { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3}

const nomeAtrib = 'nota'
const valorAtrib = 7.87

const obj3 = {}
obj3[nomeAtrib] = valorAtrib
console.log(obj3)   // Saída: { nota: 7.87 }

const obj4 = { [nomeAtrib]: valorAtrib }
console.log(obj4)   // Saída: { nota: 7.87 }

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}

console.log(obj5)   // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }