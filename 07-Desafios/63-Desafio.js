function contarPalavras(texto){

    const palavras = texto.trim().split(/\s+/);

    if(palavras.length === 1 && palavras[0] === ""){
        return 0
    }

    return palavras.length
}

console.log(contarPalavras("Sou uma frase"))