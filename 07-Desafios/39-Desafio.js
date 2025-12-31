function troca(vetor1, vetor2){

    
    for(let i = 0; i < vetor1.length; i++){
        if(vetor1[i] !== vetor2[i]){
            [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]];
        }


    }
    
   return `O vetor 1 agora é: ${vetor1}, e o vetor 2 é: ${vetor2}`

    
}

console.log(troca([10, 15, 1], [13, 12, 3]))