// Desafio Função Construtora
console.log("Desafio Função Construtora:")

function Pessoa (nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Kerlen");
p1.falar()