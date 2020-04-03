function exercicio32(vetor=[null]) {
    let media = 0

    vetor.forEach(element => {
        media += element
    })

    return media / vetor.length
}

console.log(exercicio32([1, 2, 3, 4, 5]))