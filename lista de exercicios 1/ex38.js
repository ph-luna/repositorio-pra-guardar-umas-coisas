function exercicio38(inicio, fim) {
    let resultado = []
    if(inicio == fim){
        console.log("O inicio não pode ser igual ao fim.")
    }else if(fim < inicio){
        let x = fim
        fim = inicio
        inicio = x
        
        for(let i = inicio; i <= fim; i++){
            if(i % 2){
                resultado.push(i)
            }
        }
    }else{
        for(let i = inicio; i <= fim; i++){
            if(i % 2){
                resultado.push(i)
            }
        }
    }

    return resultado
}

console.log(exercicio38(100, 1))