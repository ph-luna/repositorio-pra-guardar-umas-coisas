function exercicio22(mes, anuidade) {
    let total = anuidade * ((1 + 0.05) ** (mes - 1))
    return total.toFixed(2)
}

console.log(exercicio22(4, 100))