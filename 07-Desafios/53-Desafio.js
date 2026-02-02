function filtrarNumeros(arr){
    
    const apenasNumeros = arr.filter(elemento => typeof elemento === 'number')
        
    return apenasNumeros
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))