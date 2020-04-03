const readline = require("readline")
let resp = ""

let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function observer() {
    let flag = true
    while(flag){
        if(resp = 2){
            console.log("funciona!!!")
            flag = false
        }
    }
}


reader.question("Informe um numero: \n", answer => {
    observer()
    resp = answer
    reader.close()
})



