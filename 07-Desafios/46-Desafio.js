function inverso(valor){

    const tipo = typeof valor

    if(tipo === "boolean"){
        return !valor
    }else if(tipo === "number"){
        return -valor
    }else{
        return "Booleano ou número esperados, mas parâmetro é do tipo string"
    }
}

console.log(inverso(true))