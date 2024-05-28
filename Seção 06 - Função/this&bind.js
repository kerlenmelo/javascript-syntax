// This e a função Bind
console.log("this e a função bind:");

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();    // Saída: Bom dia!

const falar = pessoa.falar;
falar();    //Saída: undefined  // Conflito entre paradigmas: funcional e orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();    // Saída: Bom dia!

console.log("\n exemplo 2:\nthis e a função bind:");

function Pessoa() {
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)                                     
    }, 1000)
}

new Pessoa;