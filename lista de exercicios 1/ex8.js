function exercicio8(pontuacao) {
    let arrPontuacao = pontuacao.split(" ")
    let maiorPonto = 0
    let menorPonto = 99999
    let recorde = -1
    let piorJogo = 0

    arrPontuacao.forEach((ponto, index) => {
        ponto = parseInt(ponto)

        if(ponto > maiorPonto){
            recorde++
            maiorPonto = ponto
        }else if(ponto < menorPonto){
            menorPonto = ponto
            piorJogo = index + 1
        }
    })
    return [recorde, piorJogo]
    
}

console.log(exercicio8("10 20 20 8 25 3 0 30 1"))