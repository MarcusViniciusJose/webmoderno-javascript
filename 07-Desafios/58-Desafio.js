function despesasTotais(arr){
    let soma = 0

    for(let i = 0; i < arr.length; i++){
        soma += arr[i].preco
    }

    return soma
}

console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 150}]))
console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 3599.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 30999.90}]))