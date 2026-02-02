function removerPrioridade(elemen1, elemen2){

    delete elemen1[elemen2]

    return elemen1
}

console.log(removerPrioridade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao"))