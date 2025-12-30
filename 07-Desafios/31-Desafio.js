function intervalo(numeros){

    let vetor = numeros
    valorNegativo = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            valorNegativo++
        }
        
    }

    return `A quantidade de números no negativos é: ${valorNegativo}`
}

console.log(intervalo([-10, 15, -1, -3, 32, -53, 12, -31]))