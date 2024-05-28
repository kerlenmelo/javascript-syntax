// Operadores: Ternário
console.log("Operadores Ternário:");

const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(7.1));    // Saída: Aprovado
console.log(resultado(6.7));    // Saída: Reprovado

// const status = nota >= 7 ? "Aprovado" : "Reprovado";    // Exemplificando que um operador ternário pode servir para armazenar o resultado em uma variável