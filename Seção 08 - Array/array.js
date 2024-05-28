// Array 
console.log(typeof Array, typeof new Array, typeof [])    // Saída: function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)  // Saída: [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])   // Saída: Bia
console.log(aprovados[1])   // Saída: Carlos
console.log(aprovados[2])   // Saída: Ana
console.log(aprovados[3])   // Saída: undefined

aprovados[3] = 'Paulo'
aprovados.push('Maria')

console.log(aprovados.length)   // Saída: 5

aprovados[9] = 'Rafael'
console.log(aprovados.length)   // Saída: 10
console.log(aprovados[8] === undefined)    // Saída: true

console.log(aprovados)    // Saída: [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Maria', <4 empty items>, 'Rafael' ] 

aprovados.sort()
console.log(aprovados)    // Saída: [ 'Ana', 'Bia', 'Carlos', 'Maria', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1]
console.log(aprovados[1])   // Saída: undefined
console.log(aprovados)    // Saída: [ 'Ana', <1 empty item>, 'Carlos', 'Maria', 'Paulo', 'Rafael', <4 empty items> ]