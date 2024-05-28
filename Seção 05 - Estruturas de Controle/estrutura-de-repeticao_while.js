// Estrutura de Repetição While
console.log("Estrutura de Repetição (WHILE):");

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Fim...");