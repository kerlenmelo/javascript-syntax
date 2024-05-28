// Call & Apply
console.log("Call & Apply:")

function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: "4589.00",
    desc: 0.15,
    getPreco
}

console.log(getPreco())   // Saída: R$ NaN

console.log(produto.getPreco())   // Saída: R$ 3900.65

// Mostrando o uso do call e apply
const carro = {
    preco: 49990.00,
    desc: 0.20
}

console.log(getPreco.call(carro))   // Saída: R$ 39992
console.log(getPreco.apply(carro))  // Saída: R$ 39992

console.log(getPreco.call(carro, 0.17, "$"))    // Saída: $ 46790.64
console.log(getPreco.apply(carro, [0.17, "$"]))  // Saída: $ 46790.64