// Função Factory
console.log("Função Factory 2º exemplo:")

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.05
    }
}

console.log(criarProduto("Notebook",2400.00))
console.log(criarProduto("Monitor",899.00))
console.log(criarProduto("Smartphone",2000.00))
console.log(criarProduto("Bicicleta",1100.00))