function MeuObjeto() {}
console.log(MeuObjeto.prototype)    // Saída: {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)  // Saída: true
console.log(MeuObjeto.prototype === obj1.__proto__)  // Saída: true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()    // Saída: Bom dia! Meu nome é Anônimo!

obj2.nome = 'Rafael'
obj2.falar()    // Saída: Bom dia! Meu nome é Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()    // Saída: Bom dia! Meu nome é Obj3!

// Resumindo a bagunça louca ...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)     // Saída: true
console.log(MeuObjeto.__proto__ === Function.prototype)     // Saída: true
console.log(Function.prototype.__proto__ === Object.prototype)      // Saída: true
console.log(Object.prototype.__proto__ === null)    // Saída: true