// Concat 
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos)    // Saída: [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ]
console.log(filhas, filhos)    // Saída: [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]                                                                  

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))    // Saída: [ 1, 2, 3, 4, 5, [ 6, 7 ] ]