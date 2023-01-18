//pessoa -> endereço da memoria 123 ->{...}
const pessoa = {
    nome: 'Marcus'
};

//Renomeando a propriedade do objeto
pessoa.nome = 'Marcus José'
console.log(pessoa.nome);

//pessoa -> endereço da memoria 456 -> {...}
// pessoa = {
//     nome: 'Ana'
// }



// Object.freeze()
// O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; 
// impede que as propriedades existentes sejam removidas;
// e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas.
//  Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

Object.freeze(pessoa)

pessoa.nome = 'Batata'
pessoa.corFavorita = 'Vemelho'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);



// Transformando o objeto constante, com Object.freeze()
const pessoaConstante = Object.freeze({
    nome: 'Marcus',
    idade: 19,

})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)