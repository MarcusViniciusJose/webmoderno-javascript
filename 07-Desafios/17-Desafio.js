function Salario(planoTrab, salarioAtual){
    switch(planoTrab){
        case 'A':
            console.log((salarioAtual * 0.10) + salarioAtual)
            break
        case 'B':
            console.log((salarioAtual * 0.15) + salarioAtual)
            break
        case 'C':
            console.log((salarioAtual * 0.20) + salarioAtual)
            break    
        default:
            console.log("Plano de Trabalho Inválido")
    }
}

Salario("C", 2250)