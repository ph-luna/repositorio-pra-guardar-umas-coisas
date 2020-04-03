function exercicio28(vetor) {
    let par = 0
    let impar = 0

    vetor.forEach(element => {
        element % 2 ? impar++ : par++
    });

    return `Pares: ${par} | Ímpares: ${impar}`
}

console.log(exercicio28([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))