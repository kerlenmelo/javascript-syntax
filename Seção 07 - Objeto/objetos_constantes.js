// Objetos Constantes 
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)    // Saída: { nome: 'Pedro' } 

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)    // Saída: Pedro
console.log(pessoa)    // Saída: { nome: 'Pedro' }