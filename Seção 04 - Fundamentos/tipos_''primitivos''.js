//TIPOS EM JAVASCRIPT
console.log("TIPOS EM JAVASCRIPT:");
//NUMBER:
console.log("\nNUMBER:");
const peso1 = 1.0;

const peso2 = Number("2.0"); // Convertendo uma string p/ Number
console.log(peso1, peso2);  // 1 2

console.log(Number.isInteger(peso1));   // Verifica o tipo do Number. Saída: true

const num = 23.2345;
console.log(num.toFixed(2));  //Formata as casas decimais.  Saída: 23.23

//CUIDADOS Number:
console.log("\nCUIDADOS:");
console.log(7 / 0);    // infinity
console.log("10" / 2);  // 5
console.log("Show!" * 2);   //NaN
console.log(0.1 + 0.7);    // 0.7999999
console.log(10.345.toFixed(2));    // 10.35

//STRING:
console.log("\nSTRING:");
const escola = "Cod3r";
console.log(escola.charAt(4));  // Acessa o conteúdo da string pelo índice. Saída: r

console.log(escola.charCodeAt(3));  // Retorna o código ASCII. Saída: 51

console.log(escola.indexOf(3));   // Retorna o conteúdo do índice passsado. Saída: 3

console.log(escola.substring(0,3));  // Retorna uma string do intervalo passado. Saída: Cod

console.log("Escola ".concat(escola).concat("!"));  // Concatena strings.

console.log(escola.replace(3,"e"));   // Troca caracteres. Saída: Coder

console.log("Ana,Maria,Pedro".split(","));  // Transforma string em array, separando pelo caractere passado. Saída: ["Ana", "Maria", "Pedro"]

//TEMPLATE String:
console.log("\nTEMPLATE String:");
const nome = "Rebeca";
const template = `  
    Olá
    ${nome}!`;  // Símbolo de crase: (`). Pode ser passado valores dentro desses símbolos: ( ${valor} )

console.log(template);  /*  
                        *   Olá 
                        *   Rebeca!*/

console.log(`1 + 1 = ${1+1}`);  // 1 + 1 = 2

//BOOLEAN:
console.log("\nBOOLEAN:");
const isFalse = false;
console.log(isFalse);   // false
const isTrue = true;
console.log(isTrue);    // true

let isAtivo = 1;
console.log(!!isAtivo);   // Operador not: (!!). Saída: true
console.log(!true);    // false
console.log(!false);    // true

//VERDADEIROS boolean:
console.log("\nboolean verdadeiros:");
console.log(!!3);   // true
console.log(!!-1);  // true
console.log(!!" ");  // true
console.log(!![]);  // true
console.log(!!{});  // true
console.log(!!Infinity);    // true

//FALSOS boolean:
console.log("\nboolean falsos:");
console.log(!!0);   // false
console.log(!!"");  // false
console.log(!!null);    // false
console.log(!!NaN);  // false
console.log(!!undefined);   // false