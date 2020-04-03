function exercicio40(notas = []) {
    let conceitos = []
    notas.forEach(element => {
        if(element >= 0 && element < 5){
            conceitos.push("D")
        }else if(element < 7){
            conceitos.push("C")
        }else if(element < 9){
            conceitos.push("B")
        }else if(element <= 10){
            conceitos.push("A")
        }else{
            conceitos.push("Erro")
        }
    })

    return conceitos
}

console.log(exercicio40([10, 13, 9, 8.2, 2.5, 7.7, 6.8]))
