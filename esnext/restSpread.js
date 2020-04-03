// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametros de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
const clone2 = { ...funcionario }
clone2.nome = 'Joao'

console.log(clone)
console.log(funcionario)
console.log(clone2)

// usar spread com array
const gropoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...gropoA, 'Rafaela']
console.log(grupoFinal)