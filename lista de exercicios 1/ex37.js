function progAritmetica(n, a1, r) {
    let resultado = []
    let soma = 0

    for(let i = 0; i < n; i++){
        resultado.push(a1 + r * i)
        soma += resultado[i]
    }
    return `Termos: ${resultado} | Soma: ${soma}`
}

function progGeometrica(n, a1, r) {
    let resultado = []
    let soma = 0

    for(let i = 0; i < n; i++){
        resultado.push(a1 * (r ** i))
        soma += resultado[i]
    }
    return `Termos: ${resultado} | Soma: ${soma}`
}

console.log(progAritmetica(10, 10, 15))
console.log(' ----------------------------------------------------------- ')
console.log(progGeometrica(10, 5, 3))