// Funções Arrow
console.log("Funções Arrow OU Arrow function (=>):");

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

let novaPessoa = new Pessoa;