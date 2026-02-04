function segundoMaior(arr){

    let segundoMaior = -Infinity
    let maior = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            segundoMaior = maior;
            maior = arr[i]
        }else if(arr[i] > segundoMaior && arr[i] !== maior){
            segundoMaior = arr[i]
        }
    }

    return segundoMaior
}

console.log(segundoMaior([5, 2, 10, 8, 3,7,30, 65,343]))