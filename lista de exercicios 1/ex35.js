function exercicio35(vetorPilha, vetorAdd) {
    vetorAdd.forEach(element => {
        vetorPilha.push(element)  
    })

    return vetorPilha
}

console.log(exercicio35([1,2,3,4,5], [6,7,8,9,10]))