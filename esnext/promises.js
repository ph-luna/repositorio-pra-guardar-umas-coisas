function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(segundos < 3)
                resolve(frase)
            else
                reject()
        }, segundos * 1000)
    })
}

falarDepoisDe(5, 'Que Legal!')
    .then(frase => frase + '?!?')
    .then(frase => console.log(frase))
    .catch(() => console.log("tempo limite excedido."))
    