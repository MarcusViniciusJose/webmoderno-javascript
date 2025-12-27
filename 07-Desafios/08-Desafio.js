function basquete(stringPontuacoes){
    const pontuacao = stringPontuacoes.split(" ").map(Number);
    
    let melhorPontuacao = pontuacao[0] 
    let piorPontuacao = pontuacao[0] 

    let recorde = 0
    let piorJogo = 1

    for(i = 0; i <= pontuacao.length; i++){
        if(pontuacao[i] > melhorPontuacao){
            melhorPontuacao = pontuacao[i]
            recorde++
        }else if(pontuacao[i] < piorPontuacao){
            piorPontuacao = pontuacao[i]
            piorJogo = i + 1
        }

    }

    return [recorde, piorJogo]
}

console.log(basquete("10 20 20 8 25 3 0 30 1"))