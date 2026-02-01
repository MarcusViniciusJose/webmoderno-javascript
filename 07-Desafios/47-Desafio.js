function verificarIntervalo(numero, minimo, maximo, inclusivo) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(verificarIntervalo(3,3,100, true))
