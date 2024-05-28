// Parâmetro Padrão
console.log("Parâmetro Padrão:");
// estratégia 1 pra gerar valor padrão
console.log("\n1ª estratégia para gerar valor padrão:");

function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}

console.log(soma1());   // Saída: 3
console.log(soma1(3));  // Saída: 5
console.log(soma1(1, 2, 3));    // Saída: 6
console.log(soma1(0, 0, 0));    // Saída: 3

// estratégia 2, 3 e 4 pra gerar valor padrão
console.log("\n2ª, 3ª e 4ª estratégia para gerar valor padrão:");

function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c
}

console.log(soma2());   // Saída: 3
console.log(soma2(3));  // Saída: 5
console.log(soma2(1, 2, 3));    // Saída: 6
console.log(soma2(0, 0, 0));    // Saída: 0

// valor padrão do ES2015
console.log("\nValor padrão do ES2015:");

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3());   // Saída: 3
console.log(soma3(3));  // Saída: 5
console.log(soma3(1, 2, 3));    // Saída: 6
console.log(soma3(0, 0, 0));    // Saída: 0