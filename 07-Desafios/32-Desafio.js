function mediaAritmetica(vetor){
    if(vetor.length === 0) return 0

    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    return soma / vetor.length

    
}

console.log(mediaAritmetica([10, 15, 1, 3, 32, 53, 12, 31]))