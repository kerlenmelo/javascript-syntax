// FlatMap
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)    // Saída: [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)    // Saída: [ 8.1, 9.3, 8.9, 7.3 ]