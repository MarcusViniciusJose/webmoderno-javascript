function calculaBhaskara(a, b, c){
    if(a === 0){
        return "O coeficiente 'a' não pode ser zero para a equação de segundo grau"
    }
    
    const delta = Math.pow(b, 2) - 4 * b * c

    if(delta < 0){
        return "Não existem raizes reais (Delta < 0)"
    }else if(delta == 0){
        const x = -b / (2 * a)
        return `Existe uma única raiz real: x = ${x}`;
    }else{
        const raizDelta = Math.sqrt(delta)
        const x1 = (-b + raizDelta)/ (2 * a)
        const x2 = (-b - raizDelta)/ (2 * a)
        return `As raízes são: x1 = ${x1} e x2 = ${x2}`;
    }
}

console.log(calculaBhaskara(3,-5, 12))