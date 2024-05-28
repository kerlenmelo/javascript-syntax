// Métodos Importantes de um Array
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()
console.log(pilotos)    // Saída: [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')
console.log(pilotos)    // Saída: [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift()
console.log(pilotos)    // Saída: [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton')
console.log(pilotos)    // Saída: [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]


//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)    // Saída: [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//remover
pilotos.splice(3, 1)
console.log(pilotos)    // Saída: [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)    // Saída: [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)    // Saída: [ 'Alonso', 'Bottas', 'Raikkonen' ]