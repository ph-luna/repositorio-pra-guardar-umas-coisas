const fs = require('fs')

// _dirname constante que esta presente em todos os modulos do node que representa o diretorio atual
const caminho = __dirname + '/arquivo.json'

// sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // require ja converte JSON para objeto
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})