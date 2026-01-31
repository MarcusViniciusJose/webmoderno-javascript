function calcularSalario(hrsTrb, salHora){
    salario = hrsTrb * salHora;

    return `Salário igual a R$ ${salario}`
}

console.log(calcularSalario(150, 40.5))
