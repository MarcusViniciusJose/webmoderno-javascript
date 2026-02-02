function menorNumero(arr){

    let menor = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(menor > arr[i]){
            menor = arr[i];
        }
    }

    return menor;
}

console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([5,-15,50,3]))