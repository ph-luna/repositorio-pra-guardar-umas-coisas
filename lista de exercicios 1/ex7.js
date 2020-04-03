function exercicio7 (a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c) 

    if(delta < 0) {
        console.log("Delta é negativo!")
    } else {
        let array = []
        array[0] = ((b * -1) + Math.sqrt(delta)) / (2*a)
        array[1] = ((b * -1) - Math.sqrt(delta)) / (2*a)
        console.log(array)
    }
}

exercicio7(1,4,-5)