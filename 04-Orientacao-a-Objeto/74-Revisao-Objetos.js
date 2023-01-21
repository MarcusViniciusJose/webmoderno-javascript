//Coleção dinâmica de pares chave valor

//Definição mdn:
// Um objeto é uma coleção de dados e/ou funcionalidades relacionadas
// (que geralmente consistem em diversas variáveis
// e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

//Sintaxe: var pessoa = {};


//instancia o novo objeto 
const produto = new Object

//Adicionando propriedades
produto.nome = 'Cadeira'
produto['Meu Nome'] = 'Marcus'
produto.preco = 220
produto.deletar = 'DELETE'

console.log(produto);


//Deletar uma propriedade
delete produto.deletar
console.log(produto)


//objeto complexo - time 2:43
const carro = {
    modelo: 'Golf',
    valor: 89000,
    proprietario: {
        nome: 'Marcus',
        idade: 23,
        endereco: {
            logradouro: 'Rua Feliza',
            numero: 300
        }
    },
    condutores: [{
        nome: 'M',
        idade: 27
    }, {
        nome: 'B',
        idade: '22'
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro);

carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro);

//Deletar dados
delete carro.proprietario.endereco
delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro);