Array.prototype.filter2 = function(callback, thisArgs) {
    let newArray = []
    if(thisArgs != undefined){
        newArray = Array.prototype.filter2.call(thisArgs, callback)
    }else{
        for(let i = 0; i < this.length; i++){
            if(callback(this[i], i, this)){
                newArray.push(this[i])
            }
        }
    } 
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastic', preco: 18.99, fragil:false }
 ]

 console.log(Array.prototype.filter2(function(p) {
    return p.fragil && p.preco >= 500
 }, produtos))