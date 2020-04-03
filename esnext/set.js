// set é uma estrutura nao indexada que nao aceita valores repetidos
const times = new Set()
times.add('Sao Paulo')
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // sera ignorado pois o valor vasco ja existe na variavel

console.log(times) // imprime o conteudo da variavel do tipo set
console.log(times.size) // imprime a quantidade de elementos
console.log(times.has('vasco')) // imprime true se a variavel contem o valor ou false se nao contem.
times.delete('Flamengo') // deleta o valor 

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
// quando o array for passado como parametro pra uma variavel do tipo set
// qualquer valor repetido sera ignorado
const nomeSet = new Set(nomes)
console.log(nomeSet)