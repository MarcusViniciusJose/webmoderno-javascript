function Calculadora(valor1, valor2, op){

    switch(op){
        case "+":
            console.log(valor1 + valor2);
            break
        case "-":
            console.log(valor1 - valor2);
            break
        case "*":
             console.log(valor1 * valor2);
             break
        case "/":
             console.log(valor1 / valor2);
             break
        default:
            console.log("ERROR, Operação Inválida"); 

    }

    
}

Calculadora(4, 2, "/")