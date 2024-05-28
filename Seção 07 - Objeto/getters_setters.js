// Getters/ Setters

const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)   // Saída: 1 2

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)   // Saída: 1000 10001
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)   // Saída: 1002 10003