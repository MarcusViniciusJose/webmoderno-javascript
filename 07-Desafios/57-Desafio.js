function somarNumeros(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){

        soma += arr[i];

    }

    return soma
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))