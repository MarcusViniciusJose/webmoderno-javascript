//Padrão de Projeto - Funções Fabrica (Factory)
//Factory => Função que retorna um objeto

//Factory Simples, fixa
function criarPessoa() {
    return {
        nome: 'Marcus',
        sobrenome: 'José'
    }
}

console.log(criarPessoa());