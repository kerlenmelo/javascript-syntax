// Função Construtora
console.log("Função Construtora:");

function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;
    
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const corsa = new Carro
corsa.acelerar()
console.log(`Velocidade atual do Corsa: ${corsa.getVelocidadeAtual()}km/h`)

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(`Velocidade atual da Ferrari: ${ferrari.getVelocidadeAtual()}km/h`)