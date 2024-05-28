// Usando VAR em Loop
console.log("Usando VAR em Loop:");

for (var i = 0; i < 10; i++) {
    console.log(i);    // Saída: 0 1 2 3 4 5 6 7 8 9
}

console.log("i = ", i);    // Saída: i = 10

console.log("\nExemplo 2 em var:\n");

const funcs = [];

for (var i = 0; i < 10; i ++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();    // Saída: 10
funcs[8]();    // Saída: 10