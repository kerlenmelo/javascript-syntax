// FUNCTION
console.log("FUNCTION básico:");

// Função sem retorno
console.log("\nFunção sem return:");

function imprimirSoma(a, b){    // Palavra reservada para declarar uma função: function.
    console.log(a + b);
}

imprimirSoma(2,3);  // Saída: 5
imprimirSoma(2);    // Um valor inteiro, o outro será undefined. Saída: NaN
imprimirSoma();    // Saída: NaN

// Função com retorno
console.log("\nFunção com return:");

function soma (a, b=1) {
    return a + b;             // Retorna os valores de a + b, mas não imprimi na tela
}

console.log(soma(2,3));  // Saída: 5
console.log(soma(2));   // Saída: 3
console.log(soma());    // Saída: NaN
