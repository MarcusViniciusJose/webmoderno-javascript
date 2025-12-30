function notasNotas(valor){

    cedulas = [100, 50, 10, 5, 1]

    if(valor < 0 || !Number.isInteger(valor)){
        console.log("Informe um valor inteiro válido");
        return;
    }

    for (let cedula of cedulas){

        const quantidade = Math.floor(valor / cedula)
        if(quantidade > 0){
            console.log(`${quantidade} nota(s) de R$ ${cedula}`)
            valor -= quantidade * cedula;
    }
    }

    
}

notasNotas(19);