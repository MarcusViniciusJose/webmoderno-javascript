//Par nome/valor 

const saudacao = 'oi, meu chapa' //Contexto Lexico 1

function exec() {
    const saudacao = 'Falaaa' //Contexto Lexico 1
    return saudacao

}

//Objetos são grupo aninhados de chave-valor

const cliente = {
    Nome: 'Marcus',
    Idade: 20,
    Peso: 70,
    Endereço: {
        Rua: 'Rua da saudade',
        Numero: 20
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);