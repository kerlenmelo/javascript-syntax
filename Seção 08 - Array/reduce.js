// método .reduce em Array
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Beatriz', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
})
