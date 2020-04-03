function exercicio34(str1 = '', str2 = '') {
    
    let flag 

    for(i = 0; i < str1.length; i++){
        let currentChar1 = str1.charAt(i).toLowerCase() 
        for(j = 0; j < str2.length; j++){
            let currentChar2 = str2.charAt(j).toLowerCase()
            if(currentChar1 == currentChar2){
                flag = true
                break
            }else{
                flag = false
            }
        }
        if(!flag){
            return flag
        }
    }

    return flag
}

console.log(exercicio34('cda', 'abdc'))