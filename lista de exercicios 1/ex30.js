function exercicio30(vetor = [null]) {
    let maiorValor
    let menorValor 

    vetor.forEach(element => {
        if(maiorValor == undefined && menorValor == undefined){
            maiorValor = element
            menorValor = element
        }
        if(element > maiorValor){
            maiorValor = element
        }
        if(element < menorValor){
            menorValor = element
        }
    })

    return `Maior valor: ${maiorValor} | Menor valor: ${menorValor}`
}

console.log(exercicio30([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))