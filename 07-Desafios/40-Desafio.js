function escola(nota){

    if(nota <= 4.9){
        console.log(`Sua nota é D`)
    }else if (nota <= 6.9){
        console.log(`Sua nota é C`)
    }else if (nota <= 8.9){
        console.log(`Sua nota é B`)
    }else{
        console.log(`Sua nota é A`)
    }
}

escola(8.9)