// Função Factory
console.log("Função Factory:")

// Factory simples
console.log("\nFactory simples:")

function criarPessoa () {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())