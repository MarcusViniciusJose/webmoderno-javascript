function crescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){

    if (altura1 === altura2) {
        if (taxaCrescimento1 === taxaCrescimento2) {
            return "As duas crianças têm a mesma altura e crescem à mesma taxa.";
        }
            return "As crianças têm a mesma altura inicial, mas uma ultrapassará a outra em 1 ano.";
    }

    let menorAltura, maiorAltura
    let taxaMenor, taxaMaior

    if(altura1 < altura2){
        menorAltura = altura1
        taxaMenor = taxaCrescimento1
        maiorAltura = altura2
        taxaMaior = taxaCrescimento2
    }else{
        menorAltura = altura2
        taxaMenor = taxaCrescimento2
        maiorAltura = altura1
        taxaMaior = taxaCrescimento1
    }

    if (taxaMenor <= taxaMaior) {
        return "A criança menor não ultrapassará a maior.";
    }

    let anos = 0
    while(menorAltura <= maiorAltura){
        menorAltura += taxaMenor
        maiorAltura += taxaMaior
        anos++
    }

    return `A criança menor ultrapassará a maior em ${anos} anos.`;

}

console.log(crescimento(120, 6, 130, 4))

console.log(crescimento(140, 3, 130, 2));

console.log(crescimento(125, 5, 125, 5));