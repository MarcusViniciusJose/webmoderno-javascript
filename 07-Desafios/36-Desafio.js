function vetores(vetor, valor){

    let res = []
    for(let i = 0; i < vetor.length; i++){
        res[i] = vetor[i] * valor
    }

    return res
    
}

function vetores2(vetor, valor){

    let res = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            res[i] = vetor[i] * valor
        }
            
    }

    return res
    
}

console.log(vetores([1, 2, 3, 4, 10, 50, 32, 21], 5))
console.log(vetores2([1, 2, 3, 4, 10, 50, 32, 21], 5))