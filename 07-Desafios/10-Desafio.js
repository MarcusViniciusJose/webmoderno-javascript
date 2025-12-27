function divisivelPorTres(valor){

    let result = valor % 3;

    if(result != 0){
        return false
    }else{
        return true
    }


}
console.log(divisivelPorTres(32))