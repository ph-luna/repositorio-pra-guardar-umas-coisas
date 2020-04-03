function exercicio2 (cat1, cat2, hipo) {
    if(cat1 == cat2 && cat2 == hipo){
        console.log("Este triangulo é Equilátero.")
    }else if(cat1 == cat2 || cat2 == hipo || cat1 == hipo){
        console.log("Este triangulo é Isóceles")
    }else{
        console.log("Este triangulo é Escaleno")
    }
}

exercicio2(3, 2, 3)