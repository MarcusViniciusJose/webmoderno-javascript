function escola(nota){

    

    if(nota < 38){
        return nota
    }

    const proximoMultiplo = Math.ceil(nota/5) * 5

    if(proximoMultiplo - nota < 3){
        return proximoMultiplo
    }

    return nota
}

console.log(escola(84)); 
console.log(escola(29)); 
console.log(escola(38)); 
console.log(escola(37));
console.log(escola(73))