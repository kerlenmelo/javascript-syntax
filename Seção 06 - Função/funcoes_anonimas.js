// Funções Anônimas
console.log("Funções Anônimas:");

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)     // Saída: 7
imprimirResultado(3, 4, soma)   // Saída: 7
imprimirResultado(3, 4, function (x, y) {   // Saída: -1
    return x- y
})
imprimirResultado(3, 4, (x, y) => x * y)    // Saída: 12

const pessoa = {
    falar: function () {
        console.log("Opa")
    }
}

pessoa.falar()  // Saída: Opa