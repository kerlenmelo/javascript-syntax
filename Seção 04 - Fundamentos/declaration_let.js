// Declaração de variáveis com LET
console.log("Declaração de variáveis com LET:");

let numero = 1;
{
    let numero = 2;
    console.log("dentro = ", numero);   // Saída: dentro = 2
}
console.log("fora = ", numero);    // Saída: fora = 1