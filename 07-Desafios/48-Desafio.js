function multiplicar(a,b){
    let resultado = 0

    for(let i = 0; i < Math.abs(b); i++){
        resultado += a;
    }

    return b < 0 ? -resultado : resultado;

}

console.log(multiplicar(5,10))
