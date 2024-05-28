// Estrutura de Repetição Do/While
console.log("Estrutura de Repetição (DO/WHILE):");

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do {
    opcao = getInteiroAleatorio(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1) 

console.log("Fim...");