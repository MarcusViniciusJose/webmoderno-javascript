function objetoParaArray(obj){
    const arr = Object.entries(obj);

    return arr
}

console.log(objetoParaArray({nome: "Marcus josé", profissao: "Desenvolvedor de Software"}))

