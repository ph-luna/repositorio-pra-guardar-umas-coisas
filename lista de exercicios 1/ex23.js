function exercicio23(cod, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]

    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaPonderada = (notas[0] * 0.4) + (notas[1] * 0.3) + (notas[2] * 0.3)


    return `Aluno: ${cod} | Nota Final: ${mediaPonderada} | Situação: ${mediaPonderada < 5 ? 'Reprovado' : 'Aprovado'}`

}

console.log(exercicio23(123, 2.8, 6, 3.5))  