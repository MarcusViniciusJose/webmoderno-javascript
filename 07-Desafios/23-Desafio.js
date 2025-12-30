function escola(codigo, nota1, nota2, nota3){
 
        
        if(codigo < 0) return null



        let maiorNota = Math.max(nota1, nota2, nota3)
        somarNotas = nota1 + nota1 + nota2

        let media = (maiorNota + (somarNotas - maiorNota) * 3)/ (4+3+3)

        let situacao = media >= 5 ? "APROVADO" : "REPROVADO"

        return {
            codigo,
            notas: [nota1, nota2, nota3],
            media: media.toFixed(2),
            situacao
        }
    
    
}

console.log(escola(100, 10, 8, 5))