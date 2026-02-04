function melhorEstudante(estudantes){
    let melhorResultado = {nome: null, media: -1}

    for(let [nome, notas] of Object.entries(estudantes)){
        let soma = 0
        for(let nota of notas){
            soma += nota
        }

        let media = soma/notas.length

        if(media > melhorResultado.media){
            melhorResultado = {nome: nome, media: media.toFixed(2)}
        }
    }

    return melhorResultado

}

const alunos = {
    Augusto: [8, 10, 6],    
    Maria: [9, 8, 9.5],     
    Joao: [5, 6, 7]         
};

console.log(melhorEstudante(alunos))