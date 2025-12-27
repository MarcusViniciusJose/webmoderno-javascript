function fat(valor){

    let fatorial = 1
    for(let i = valor; i >= 1; i--){
         fatorial *= i
    }

    return `O fatorial de ${valor} é ${fatorial}`
}

console.log(fat(2))