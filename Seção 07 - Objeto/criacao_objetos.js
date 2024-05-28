// Estratégias de Criação de Objetos

// Notação literal:
const obj1 = {}
console.log(obj1)   // Saída: {}

// Object em JS:
console.log(typeof Object)  // Saída: function
console.log(typeof new Object)  // Saída: object

const obj2 = new Object
console.log(obj2)   // Saída: {}

// Funções construtoras:
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, qtdFaltas){
    return {
        nome, 
        salarioBase, 
        qtdFaltas,
        getSalario() {
            return (salarioBase / 30) * (30 - qtdFaltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())