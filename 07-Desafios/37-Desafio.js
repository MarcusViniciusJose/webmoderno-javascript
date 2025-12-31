function progressaoAritmetica(n, a1, r){
    const termos = []
    let soma = 0

    for(let i = 0; i < n; i++){
        const termo = a1 + i * r
        termos.push(termo)
        soma += termo
    }

    console.log("Progressão Aritmética:");
    console.log("Termos:", termos.join(", "));
    console.log("Soma:", soma);
}

function progressaoGeometrica(n, a1, r){
    const termos = []
    let soma = 0

    for(let i = 0; i < n; i++){
        const termo = a1 * Math.pow(r,i)
        termos.push(termo)
        soma += termo
    }

    console.log("Progressão Geometrica:");
    console.log("Termos:", termos.join(", "));
    console.log("Soma:", soma);
}

progressaoAritmetica(5, 2, 3);


progressaoGeometrica(5, 2, 2);