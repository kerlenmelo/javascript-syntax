// Object.create()

const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)   // Saída: preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)    // Saída: Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)    // Saída: Bia tem cabelo preto

console.log(Object.keys(filha1))    // Saída: [ 'nome' ]
console.log(Object.keys(filha2))    // Saída: [ 'nome' ]