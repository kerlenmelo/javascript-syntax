// Operadores: Destructuring
// Novo Recurso do ES2015
console.log("Operador Destructuring:");

// Destructuring em Object
console.log("\nDestructuring em Object:");

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);   // Saída: Ana 5

const { nome: n, idade:i } = pessoa;
console.log(n, i);  // Saída: Ana 5

const { sobrenome, humor = true } = pessoa;
console.log(sobrenome, humor);  // Saída: undefined true

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);   // Saída: Rua ABC 1000 undefined

// Destructuring em Array
console.log("\nDestructuring em Array:");

const [a] = [10];
console.log(a);   // Saída: 10

const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);    // Saída: 10 9 undefined 0