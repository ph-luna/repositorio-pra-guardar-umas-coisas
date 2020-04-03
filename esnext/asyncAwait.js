// com promise
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(err){
                    reject(err)
                }
            })
        })
    })
}

// Recurso do ES8
// com o objetivo de simplificar o uso de promises

async function obterAlunos() {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('D')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto do tipo AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(err => console.log(err))