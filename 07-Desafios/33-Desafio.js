function vetores(vetor1, vetor2, vetor3){

    const resultado = vetor1.concat(vetor2).concat(vetor3)

    console.log("Resultado usando concat encadeado:");
    console.log(resultado);

    const resultado2 = vetor1.concat(vetor2, vetor3)
    console.log(resultado2)
}


vetores([1, 2, 3, 4], ["JavaScript", "Node", "React", "Vue"], [1.5, 2.7, 3.14, 4.8])