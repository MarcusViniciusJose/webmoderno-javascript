function intervalo(numeros){

    let vetor = numeros
    maiorValor = vetor[0]
    menorValor = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maiorValor){
            maiorValor = vetor[i]
        }else if(vetor[i] < menorValor){
            menorValor = vetor[i]
        }
        
    }

    return `O maior valor dos números é: ${maiorValor}, e o menor valor dos números é ${menorValor}`
}

console.log(intervalo([10, 15, 23, 90, 32, 53, 12, 13]))