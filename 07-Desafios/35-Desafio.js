function pilha(vetorPilha, vetorAdiciona){

    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i]);
    }
    console.log(vetorPilha ) 
    console.log(vetorAdiciona) 
}

pilha( [1, 2, 3, 4, 5],  [6, 7, 8, 9, 10])