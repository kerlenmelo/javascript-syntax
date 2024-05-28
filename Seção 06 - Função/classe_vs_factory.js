// Classe VS Função Factory
console.log("Classe vs Função Factory:")

class Pessoa {
    constructor (nome) {
        this.nome = nome
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Kerlen");
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Beatriz")
p2.falar()