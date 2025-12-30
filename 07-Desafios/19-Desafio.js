function lanchonete(codProduto, quantidade){

    switch(codProduto){
        case 100:
            console.log(quantidade * 3.00)
            break
        case 200:
            console.log(quantidade * 4.00)
            break
        case 300:
            console.log(quantidade * 5.50)
            break    
        case 400:
            console.log(quantidade * 7.50)
            break 
        case 500:
            console.log(quantidade * 3.50)
            break 
        case 600:
            console.log(quantidade * 2.80)
            break 
        default:
            console.log("Produto não existente")
    }
}

lanchonete(604, 3.00)