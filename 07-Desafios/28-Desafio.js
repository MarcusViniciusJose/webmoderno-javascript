function parImpar(numeros){

    let vetor = numeros
    par = 0
    impar = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            par++
        }else if(vetor[i] % 2 != 0){
            impar++
        }
    }

    return `A quantidade de números pares é ${par}, e a quantidade de números impares é ${impar}`
}

console.log(parImpar([10, 15, 23, 90, 32, 53, 12, 53]))