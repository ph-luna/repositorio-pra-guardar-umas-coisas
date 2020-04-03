function exercicio20(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0 
    let nota5 = 0 
    let nota1 = 0
    let msg = ''
    
    while(valor >= 100){
        valor -= 100
        nota100++
    }

    while(valor >= 50){
        valor -= 50
        nota50++
    }

    while(valor >= 10){
        valor -= 10
        nota10++
    }
    
    while(valor >= 5){
        valor -= 5
        nota5++
    }

    while(valor >= 1){
        valor -=1
        nota1++
    }

    if(nota100 > 0) msg += `${nota100} nota(s) de R$ 100,00. `
    if(nota50 > 0) msg += `${nota50} nota(s) de R$ 50,00. `
    if(nota10 > 0) msg += `${nota10} nota(s) de R$ 10,00. `
    if(nota5 > 0) msg += `${nota5} nota(s) de R$ 5,00. `
    if(nota1 > 0) msg += `${nota1} nota(s) de R$ 1,00. `

    return msg
}

console.log(exercicio20(558))