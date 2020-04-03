Array.prototype.reduce2 = function(callback, initValue) {
    let acumulator

    if(initValue == undefined)
        acumulator = this[0]
    else
        acumulator = initValue

    for(i = 0; i < this.length; i++){
        acumulator = callback(acumulator, this[i], i, this)
    }
    
    return acumulator
}

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: false}
]

let todosBolsistas = alunos.reduce2((acumulador, atual) => acumulador && atual.bolsista)
let algumBolsistas = alunos.reduce2((acumulador, atual) => acumulador || atual.bolsista, alunos[0].bolsista)

console.log(todosBolsistas)
console.log(algumBolsistas)