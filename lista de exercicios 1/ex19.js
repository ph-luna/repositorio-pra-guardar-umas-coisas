function exercicio19(codigo, qtd) {
    let total = 0
    switch (codigo) {
        case 100:
            total = qtd * 3
            break
        
        case 200:
            total = qtd * 4
            break
        
        case 300:
            total = qtd * 5.5
            break
        
        case 400:
            total = qtd * 7.5
            break

        case 500:
            total = qtd * 3.5
            break
        
        case 600:
            total = qtd * 2.8
            break

        default:
            console.log("produto nao existe")
            total = null
            break
    }

    return `R$ ${total.toFixed(2)}`
}

console.log(exercicio19(500,3))