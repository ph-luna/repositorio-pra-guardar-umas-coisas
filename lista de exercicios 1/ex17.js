function exercicio17(salario, plano) {
    let novoSalario
    switch(plano) {
        case 'A':
            novoSalario = salario * 1.10
            break
        case 'B':
            novoSalario = salario * 1.15
            break
        case 'C':
            novoSalario = salario * 1.20
            break
        default:
            console.log('Plano inválido')
            novoSalario = null
            break
    }

    return novoSalario    
}

console.log(exercicio17(1000,'c'))