// Usando LET em Loop
console.log("Usando LET em Loop:");

for (let i = 0; i < 10; i++) {
    console.log(i);    // Saída: 0 1 2 3 4 5 6 7 8 9
}

// console.log("i = ", i);    // ERROR: i is not defined

console.log("\nExemplo 2 em let:\n");

const funcs = [];

for (let i = 0; i < 10; i ++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();    // Saída: 2
funcs[8]();    // Saída: 8