// FUNCTION
console.log("FUNCTION básico:");

// Armazenando uma função em uma variável
console.log("\nArmazenando uma function em uma variável:");

const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);    // Saída: 5

// Armazenando uma função arrow em uma variável
console.log("\nArmazenando uma function arrow em uma variável:");

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,3));    // Saída: 5

// retorno implícito
console.log("\nRetorno implícito de uma function arrow:");

const subtracao = (a, b) => a - b;

console.log(subtracao(3,2));    // Saída: 1