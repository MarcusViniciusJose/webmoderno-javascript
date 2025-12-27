function jurosimples(capInicial, juros, temp){

    let calc = (capInicial * juros) * temp
    
    return calc + capInicial
}

console.log(jurosimples(1000, 0.01, 12))

function juroscompostos(capInicial, juros, temp) {
    return capInicial * Math.pow((1 + juros), temp)
}

console.log(juroscompostos(1000, 0.01, 12))
