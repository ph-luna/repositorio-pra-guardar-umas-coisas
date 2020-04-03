Array.prototype.map2 = function (callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray[i] = callback(this[i], i, this)
    }
    
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const obj = carrinho.map2(e => JSON.parse(e))
const resp = obj.map2(e => e.preco)

console.log(resp)