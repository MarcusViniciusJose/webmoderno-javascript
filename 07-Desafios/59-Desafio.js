function calcularMedia(arr){
    let media = 0
    for(let i = 0;i < arr.length; i++){
        media += arr[i]/arr.length
    }


    return media
}

console.log(calcularMedia([10]))