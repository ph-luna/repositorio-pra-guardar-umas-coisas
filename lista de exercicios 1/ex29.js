function exercicio29(vetor = []) {
    let inside = 0
    let outside = 0

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] > 9 && vetor[i] < 21){
            inside++
        }else{
            outside++
        }
    }

    return `Dentro do intervalo: ${inside} | Fora do intervalo: ${outside}`
}

console.log(exercicio29([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))