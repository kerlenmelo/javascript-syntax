// Operadores: Lógicos
console.log("Operadores Lógicos:");

function compras(tarefa1, tarefa2) {
    const comprarSorverte = tarefa1 || tarefa2;    // OU
    const comprarTV50 = tarefa1 && tarefa2;    // E
    const comprarTV32 = tarefa1 != tarefa2;    // Simulando um XOR: OU Exclusivo
    const manterSaudavel = !comprarSorverte;    // Negação Lógica. Operador Unário

    return { comprarSorverte, comprarTV50, comprarTV32, manterSaudavel };
}

console.log(compras(true, true));   
/*  
*   {
*       comprarTV50: true,
*       comprarTV32: false,
*       manterSaudavel: false
*       comprarSorverte: true,
*   } 
*/
console.log(compras(true, false));  
/*  
*    {
*        comprarSorverte: true,
*        comprarTV50: false,
*        comprarTV32: true,
*        manterSaudavel: false
*    }
*/
console.log(compras(false, true));
/*
*   {
*       comprarSorverte: true,
*       comprarTV50: false,
*       comprarTV32: true,
*       manterSaudavel: false
*   }
*/
console.log(compras(false, false));
/*
*   {
*       comprarSorverte: false,
*       comprarTV50: false,
*       comprarTV32: false,
*       manterSaudavel: true
*   }
*/