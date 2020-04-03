const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

let todosBolsistas = alunos.reduce((acumulador, atual) => acumulador && atual.bolsista)
let algumBolsistas = alunos.reduce((acumulador, atual) => acumulador || atual.bolsista, alunos[0].bolsista)

if(todosBolsistas){
    console.log("Todos são bolsistas!")
}else{
    console.log("Não são todos bolsistas!")
}

if(algumBolsistas){
    console.log("Um ou mais alunos são bolsistas!")
}else{
    console.log("Nenhum aluno é bolsista")
}