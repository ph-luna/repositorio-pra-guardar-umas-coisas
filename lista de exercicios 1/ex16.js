function exercicio16(num1, num2, operador) {
    let resultado
    switch(operador) {
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break
        case '/':
            resultado = num1 / num2
            break
        default:
            console.log("Operacao invalida")
            resultado = null
            break
    }

    return resultado
}

console.log(exercicio16(5, 5, 'a'))