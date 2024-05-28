// Declaração de variáveis com VAR
console.log("Declaração de variáveis com VAR: ");
{
    {
        {
            {
                var sera = "Será???";
                console.log(sera);      // Saída: Será???
            }
        }
    }
}
console.log(sera);     // Saída: Será???

function teste() {
    var local = 123;    // ESCOPO LOCAL dentro da 'function'
    console.log(local);    //Saída: 123
}

teste();    
// console.log(local);    // ERROR: local is not defined

var numero = 1;
{
    var numero = 2;
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);