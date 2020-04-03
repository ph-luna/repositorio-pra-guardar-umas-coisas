// A estrutra map é uma estrutura que aceita qualquer tipo de
// estrutura como chave ou valor

const tecnologias = new Map
tecnologias.set('react', { framework: false, foda: true }) // adiciona um novo par key-value
tecnologias.set('angular', { framework: true, foda: false })

console.log(tecnologias) // exibe todo conteudo da variavel com a estrutura map
console.log(tecnologias.get('react').framework) // acessa o valor do atributo da key 'react

const chavesVariadas = new Map([
    [function() { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

/*chavesVariadas.forEach((vl, ch) =>  {
    console.log(ch, vl)
})*/

console.log(chavesVariadas.has(123)) // retorna true se conter o valor ou false se nao conter
chavesVariadas.delete(123) // deleta uma key do map e seu respectivo value
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// a estrutura map aceita valores repetidos mas nunca chaves repetidas
// se a chave for passada repetida, o valor é sobrescrito
