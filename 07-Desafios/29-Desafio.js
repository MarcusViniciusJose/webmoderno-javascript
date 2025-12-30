function intervalo(numeros){

    let vetor = numeros
    intervaloDentro = 0
    intervaloFora = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 10 || vetor[i] > 20){
            intervaloFora++
        }else{
            intervaloDentro++
        }
        
    }

    return `A quantidade de números no intervalo é: ${intervaloDentro}, e a quantidade que está fora é ${intervaloFora}`
}

console.log(intervalo([10, 15, 23, 90, 32, 53, 12, 13]))