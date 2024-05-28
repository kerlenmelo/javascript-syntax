// NULL & UNDEFINED
console.log("Null & Undefined:");
let valor;
console.log(valor);   // undefined

valor = null;   // ausência de valor
console.log(valor);   // null

const produto = {};
console.log(produto.preco);   // undefined
console.log(produto);   // Saída: {}

produto.preco = 3.50;
console.log(produto);   // Saída: { preco: 3.5 }

produto.preco = undefined;  // EVITAR atribuir undefined
console.log(!!produto.preco);   // Saída: false
console.log(produto);   // Saída: { preco: undefined }
// delete produto.preco;    -> MELHOR FORMA P/ APAGAR UM VALOR

produto.preco = null;   // sem preço
console.log(!!produto.preco);   // Saída: false
console.log(produto);   // Saída: { preco: null }