function filtrarPorQuantidadeDigitos(arr, num){

    const filtro = arr.filter(num2 => num2.toString().length === num)

    return filtro
}

console.log(filtrarPorQuantidadeDigitos([1,2,42,64,2,75,344,21,6,3],2))