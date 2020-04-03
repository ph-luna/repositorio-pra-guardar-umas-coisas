function exercicio36(vetor, num) {
    vetor.forEach((element, key) => {
        vetor[key] = element * num
    })

    return vetor  
}

console.log(exercicio36([1, 2, 3, 4, 5], 3))