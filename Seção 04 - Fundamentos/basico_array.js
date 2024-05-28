// ARRAY
console.log("ARRAY básico:")
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);    // 7.7 9.2
console.log(valores[4]);    //undefined

valores[4] = 10;    // Inserindo o elemento '10' no índice 4
console.log(valores);   // [ 7.7, 8.9, 6.3, 9.2, 10 ]

console.log(valores.length); // Função para saber a quantidade de elementos do array. Saída: 5

valores.push({id: 3}, false, null, "teste");    // Função para inserir valores no final do array
console.log(valores);   // [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, "teste" ]

console.log(valores.pop());   // Função para remover o ultimo elemento do array. Saída: [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

delete valores[0];  // deleta o elemento do índice passado
console.log(valores);   //[ <1 empty item>,  8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores); // object