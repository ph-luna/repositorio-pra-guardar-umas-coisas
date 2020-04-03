function exercicio11(ano) {
    let bol
    if(ano % 400){
        if(ano % 100){
            if(ano % 4) {
                bol = false
            }else{
                bol = true
            }
        }else{
            bol = false
        }
    }else{
        bol = true
    }
    
    return bol
}

console.log(exercicio11(2000))