function exercicio12(num) {
    for(i = num - 1; i > 1; i--){
        num *= i
    }

    return num
}

console.log(exercicio12(10))