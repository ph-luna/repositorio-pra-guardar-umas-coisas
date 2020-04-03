const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const final = alunos.filter(e => e.bolsista).map(e => e.nota).reduce((acumulador, atual) => {
    return acumulador + atual
})

console.log(final)
