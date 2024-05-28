// Evitando Modificações
console.log("Evitando Modificações:")

// Object.preventExtensions
console.log('\nObject.preventExtensions:')
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))    // Saída: Extensível: false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar brancar'
delete produto.tag
console.log(produto)    // Saída: { nome: 'Borracha', preco: 1.99 }

// Object.seal
console.log('\nObject.seal:')
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))    // Saída: Selado: true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa)    // Saída: { nome: 'Juliana', idade: 23 }