function exercicio27(altura1, altura2, taxa1, taxa2) {
    if(altura1 == altura2){
        if(taxa1 == taxa2){
            return 'As crianças sempre terão igual tamanho.'
        }else if(taxa1 > taxa2){
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        }else{
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }
    }
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return 'A criança 1 será a maior sempre.'
            }else{
                return 'A criança 2 irá ultrapassar a criança 1 em ' + crescimento(altura1, taxa1, altura2, taxa2) + ' anos.'
            }
        }else{
            if(taxa2 >= taxa1){
                return 'A criança 2 será a maior sempre.'
            }else{
                return 'A criança 1 irá ultrapassar a criança 2 em ' + crescimento(altura2, taxa2, altura1, taxa1) + ' anos.'
            }
        }
}

function crescimento(maiorCrianca, taxaMaior, menorCriança, taxaMenor){
    let anos = 0
    while(maiorCrianca > menorCriança){
        maiorCrianca += taxaMaior
        menorCriança += taxaMenor
        anos++
    }
    return anos
}

console.log(exercicio27(150, 150, 4, 4))