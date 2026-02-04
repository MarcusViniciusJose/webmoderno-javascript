function funcaoDaSorte(x){

    let num = Math.floor(Math.random() * (11 - 1) + 1);
    
    let resultado = num == x ? `Parabéns! o número sorteado foi ${num}` : `Que pena! o número sorteado foi ${num}`

    return resultado
}

console.log(funcaoDaSorte(1))