function exercicio13(dia) {
    switch(dia) {
        case 1:
            console.log("Domingo: Fim de semana.")
            break
        case 7:
            console.log("Sábado: Fim de semana.")
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia util.")
            break
        default:
            console.log("Dia inválido.")
            break
    }
}

exercicio13(7)