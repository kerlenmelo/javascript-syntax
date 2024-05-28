// Par NOME/VALOR
console.log("Par Nome/Valor:");

const saudacao = 'Opa';   // contexto léxico 1

function exec () {
    const saudacao = "Falaaa";  // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);  // Saída: Opa
console.log(exec());    // Saída: Falaaa

console.log(cliente);   /* Saída: {
                        *           nome: 'Pedro',
                        *           idade: 32,
                        *           peso: 90,
                        *           endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
                        *          }
                        */