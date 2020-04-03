function exercicio31(vetor=[null]) {
    let negativos = 0
    vetor.forEach(element => {
        if(element < 0){
            negativos++
        }
    })

    return negativos
}

console.log(exercicio31([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))