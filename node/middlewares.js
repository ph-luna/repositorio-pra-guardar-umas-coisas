// middleware pattern (chain of responsability)
//**OBS: PROGRAMAÇÃO É COISA DE DOENTE

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execNext = indice => {
        if(middlewares && indice < middlewares.length)
            middlewares[indice](ctx, () => execNext(indice + 1))
    }
    execNext(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)