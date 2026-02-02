function repetir(param1, param2){
    let arr = []
    for(let i = 0;i < param2; i++){
        arr.push(param1)
    }

    return arr

}

console.log(repetir("codigo",3))