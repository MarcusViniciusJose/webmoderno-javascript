function planoSaude(idade){

    if(idade < 10){
        console.log(`Valor do convênio é R$ ${100 + 80}`)
    }else if (idade <= 30){
        console.log(`Valor do convênio é R$ ${100 + 50}`)
    }else if (idade <= 60){
        console.log(`Valor do convênio é R$ ${100 + 95}`)
    }else{
        console.log(`Valor do convênio é R$ ${100 + 130}`)
    }
}

planoSaude(65)