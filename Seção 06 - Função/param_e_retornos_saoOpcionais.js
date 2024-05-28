// Parâmetros e Retornos São Opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area 
    }
}

console.log(area(2, 2))    // Saída: 4
console.log(area(2))    // Saída: NaN
console.log(area())    // Saída: NaN
console.log(area(2, 3, 17, 23, 45))    // Saída: 6
console.log(area(5, 5))    // Saída: Valor acima do permitido: 25m².    // Saida: undefined