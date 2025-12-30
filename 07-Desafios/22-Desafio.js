function anuidade(mes, valorAnuidade){

    if(mes < 1 || mes > 12){
        console.log("Mês inválido. Informe um valor entre 1 e 12.")
    }

    const taxaJuros = 0.05
    const mesAtrasado = mes - 1

    const valorFinal = valorAnuidade * Math.pow(1 + taxaJuros, mesAtrasado)

    return Number(valorFinal.toFixed(2))
}

console.log(anuidade(1,1000))
console.log(anuidade(2,1000))
console.log(anuidade(3,1000))