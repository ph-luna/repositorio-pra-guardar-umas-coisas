// sem promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes.push('A: ')
    nomes.push(alunos.map(e => e.nome))
    getTurma('B', alunos => {
        nomes.push('B: ')
        nomes.push(alunos.map(e => e.nome))
        getTurma('C', alunos => {
            nomes.push('C: ')
            nomes.push(alunos.map( e => e.nome))
            console.log(nomes)
        })
    })
})