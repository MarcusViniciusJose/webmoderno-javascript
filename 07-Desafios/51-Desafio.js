function primeiroEUltimoElemento(arr){

    let arr2 = []

    arr2.push(arr[0], arr.at(-1))

    return arr2
}

console.log(primeiroEUltimoElemento([-100,"aplicativo",16]))