function exercicio5 (valor) {
    let valor1 = valor.toFixed(2).toString()
    let array = valor1.split(".")
    return `R$ ${array[0]},${array[1]}`
}

console.log(exercicio5(0.30000000000000004))