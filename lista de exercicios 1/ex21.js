function exercicio21(idade) {
    let valor = 100

    if(idade < 11){
        valor += 80
    }else if(idade < 31){
        valor += 50
    }else if(idade < 61){
        valor += 95
    }else{
        valor += 130
    }
    
    return valor
}

console.log(exercicio21(65))