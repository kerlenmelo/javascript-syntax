// Estruturas de Controle
console.log("Estrutura de Controle (IF/ELSE):");

const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimirResultado(10);  // Saída: Aprovado!
imprimirResultado(4);   // Saída: Reprovado!
imprimirResultado("Epa!");  // Saída: Reprovado!    // Cuidado!! pois JS é fracamente tipada