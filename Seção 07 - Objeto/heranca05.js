console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())   // Saída: r3doC alocsE

Array.prototype.first = function() {
    return this[0]
}

console.log([ 1, 2, 3, 4, 5 ].first())  // Saída: 1
console.log([ 'a', 'b', 'c', 'd' ].first())     // Saída: a