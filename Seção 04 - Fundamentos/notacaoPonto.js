// Notação Ponto
console.log(Math.ceil(6.1));    // Saída: 7

const obj1 = {};
obj1.nome = "Bola";

console.log(obj1.nome);   // Saída: Bola

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log("Exec...");
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);   // Saída: Cadeira
console.log(obj3.nome);   // Saída: Mesa
obj3.exec();  // Saída: Exec...