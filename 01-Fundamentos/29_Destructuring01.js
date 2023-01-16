/**
 * A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript 
 * que possibilita extrair dados de arrays ou objetos em variáveis distintas
 */

// Novo recurso de ES2015 

const pessoa = {
    Nome: 'Marcus',
    Idade: 20,
    endereço: {
        Logradouro: "Rua dela",
        Numero: 20
    }
}

console.log(pessoa);

//Usando destructuring para ter acesso as informações dos atributos Nome e Idade
const { Nome, Idade } = pessoa
console.log(Nome, Idade) //Marcus 20


//Podemos ter o mesmo resultado , e ainda atribuir um nome ao atributo
const { Nome: n, Idade: i } = pessoa
console.log(n, i); //Marcus 20

//Teste , tirando um atributo que não existe
const { Sobrenome } = pessoa
console.log(Sobrenome, Signo = true) // undefined true


//Acessado os atributos dentro da variável endereço
const { endereço: { Logradouro, Numero } } = pessoa
console.log(Logradouro, Numero)

//Erro esperado quando tentamos acessar atributos que não existem
//Cannot destructure property `agr` of 'undefined' or 'null'.
const { conta: { agr, num } } = pessoa
console.log(agr, num)