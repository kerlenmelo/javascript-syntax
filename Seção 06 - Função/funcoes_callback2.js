// Funções Callback
console.log("Funções Callback exemplo 2:")

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback
console.log("\nSem Callback:")

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)   // Saída: [ 6.5, 5.2, 3.6 ]

// Com Callback
console.log("\nCom Callback:")

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)   // Saída: [ 6.5, 5.2, 3.6 ]