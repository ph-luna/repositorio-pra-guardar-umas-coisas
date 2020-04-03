function exercicio4 (dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor
    return `Resultado: ${resultado} | Resto: ${resto}`
}

console.log(exercicio4(10, 4))