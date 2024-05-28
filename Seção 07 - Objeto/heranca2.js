// Cadeia de Protótipo (prototype chain)

const avo = { atrib1: 'A' }
const pai = { __proto__:avo, atrib2: 'B', atrib3: '3' }
const filho = { __proto__: pai, atrib3: 'C' }

console.log(filho.atrib1, filho.atrib2, filho.atrib3)   // Saída: A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 325    // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)    // Saída: { modelo: 'F40', velMax: 325 }
console.log(volvo)    // Saída: { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())    // Saída: V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())   // Saída: 300Km/h de 325Km/h