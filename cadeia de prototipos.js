//Prototype Chain
/*
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1)
*/
//herança
const pai1 = { nome:'Pedro ', corCabelo:'preto' }

const filha1 = Object.create(pai1, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
filha1.nome = 'Ana'
console.log(filha1)