function triagulo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado1 == lado3){
        return "Equilátero"
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
    

}

console.log(triagulo(3, 2, 2))