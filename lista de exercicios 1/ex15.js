function exercicio15(carro) {
    let msg = ''
    switch(carro) {
        case 'hatch':
            msg = 'Compra efetuada com sucesso'
            break

        case 'motocicletas':
        case 'caminhonetes':
        case 'sedans':
            msg = 'Tem certeza que não prefere este modelo?'
            break

        default:
            msg = 'Não trabalhamos com este tipo de modelo.'
        break
    }

    return msg
}

console.log(exercicio15('corsa'))