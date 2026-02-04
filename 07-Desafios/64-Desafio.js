function contarPalavras(letra,texto){

    const contar = texto.split(letra).length -1;

    return contar
}

console.log(contarPalavras("U","Sou uma frase"))