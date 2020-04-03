let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function exercicio33(...args) {
    resultado = []

    args.forEach(element => {
        resultado = resultado.concat(element)
    })
    
    return resultado
}

console.log(exercicio33(vetorInteiro, vetorString))
console.log(exercicio33(vetorString, vetorDouble))