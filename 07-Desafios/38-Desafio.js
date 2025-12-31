function Impar(inicio, fim){

    

    if(inicio > fim){
        [inicio, fim] = [fim, inicio];
    }

    let cont = inicio
    while(cont <= fim){
        if(cont % 2 !== 0){
            console.log(`Números pares: ${cont}`)
        }
        cont++
    }

    
}

Impar(100, 0)