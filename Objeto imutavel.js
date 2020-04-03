const pessoa = { nome: 'Pedro' }
pessoa.nome = 'Joao'
pessoa.idade = 21
delete pessoa.idade

console.log(pessoa)

// constante de objeto imutavel

const unbreakable = Object.freeze({ //funcao freeze congela o objeto e impede de fazer alterações
    atr1: 'valor1',
    atr2: 'valor2',
    atr3: 'valor3'
})

console.log(unbreakable)