const sequencia = {
    _valor: 1, //convencao
    get getValor() { return this._valor },
    set setValor(valor) { this._valor = valor }
}

console.log(sequencia.getValor)
sequencia.setValor = 5
console.log(sequencia.getValor)
