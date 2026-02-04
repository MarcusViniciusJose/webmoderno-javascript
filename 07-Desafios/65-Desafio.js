function contarPalavras(palavra,texto){

    const busca = texto.filter(texto => texto.includes(palavra));

    return busca
}

console.log(contarPalavras("pro",["programação", "moblie", "profissional"]))
console.log(contarPalavras("python",["javascript", "java", "c++"]))