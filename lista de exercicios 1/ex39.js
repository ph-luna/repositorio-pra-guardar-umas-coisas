function exercicio39(vetorA = [], vetorB = []) {
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    }else{
        console.log("Tamanhos diferentes de vetores.")
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)

}

exercicio39([1, 2, 3],[4, 5, 6])