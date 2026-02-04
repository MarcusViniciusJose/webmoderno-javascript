function removerVogais(palavra){

    return palavra.replace(/[aeiouà-ú]/gi, '')
}

console.log(removerVogais("palavra"))