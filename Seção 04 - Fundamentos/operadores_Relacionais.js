// Operadores: Relacionais
console.log("Operadores Relacionais:");

console.log('01)', '1' == 1);   // IGUAL: ==  // Saída: true
console.log('02)', '1' === 1);  // ESTRITAMENTE IGUAL: ===  // Saída: false
console.log('03)', '3' != 3);   // DIFERENTE: !=  // Saída: false
console.log('04)', '3' !== 3);  // ESTRITAMENTE DIFERENTE: !==  // Saída: true

console.log('05)', 3 < 2);  // MENOR QUE: <   // Saída: false
console.log('06)', 3 > 2);  // MAIOR QUE: >   // Saída: true
console.log('07)', 3 <= 2);  // MENOR IGUAL QUE: <=  // Saída: false
console.log('08)', 3 >= 2);  // MAIOR IGUAL QUE: >=  // Saída: true

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());
console.log('12)', undefined == null);
console.log('13)', undefined === null);