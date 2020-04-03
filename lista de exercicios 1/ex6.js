function exercicio6 (capital, taxa, tempo) {
    let jurosSimples = capital + capital * taxa * tempo

    let taxaComposta = 1

    for(i = 0; i < tempo; i++){
        taxaComposta *= (1 + taxa) 
    }

    let jurosCompostos = capital * taxaComposta

    return `Juros Simples: R$ ${jurosSimples.toFixed(2)} | Juros Compostos: R$ ${jurosCompostos.toFixed(2)}`
}

console.log(exercicio6(1000, 0.1, 12))