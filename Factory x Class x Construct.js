// METODOLOGIA FUNCAO FACTORY
function factoryPessoa (name) {
    return {
        name,
        resposta: (nome = name) => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = factoryPessoa('João')
p1.resposta()
p1.name

// METODOLOGIA FUNCAO CONSTRUTORA
function ConstructPessoa (name) {
    this.name = name
    this.resposta = function () {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p2 = new ConstructPessoa('Maria')
p2.resposta()

// METODOLOGIA CLASSE
class ClassePessoa {
    constructor(name){
        this.name = name
    }

    resposta = () => console.log(`Meu nome é ${this.name}`)
}

const p3 = new ClassePessoa('Pedro')
p3.resposta()