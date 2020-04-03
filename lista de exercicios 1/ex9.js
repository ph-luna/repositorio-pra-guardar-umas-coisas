function exercicio9 (nota) {
    if(nota < 38){
        console.log("Reprovado! Nota Final: " + nota)
    }else{
        let num = nota % 5
        let notaArrendondada = nota + (5 - num)
        console.log("Aprovado! Nota Final: " + notaArrendondada)
    }
}

exercicio9(24)
