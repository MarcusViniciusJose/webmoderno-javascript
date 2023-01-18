//Estratégias de Criação de Objetos

//usando a notação literal
const obj1 = {}
console.log(obj1);

//new Object em js
console.log(typeof Object);
const obj2 = new Object
console.log(obj2);

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome

    //método publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

//Executando
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Lapis', 6.99, 0.10)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Criar objeto - Função Factory
function criarFunc(nome, salarioBase, faltas) {

    //notação literal
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

//Criando os objetos 
const f1 = criarFunc('Marcus', 2600, 1)
const f2 = criarFunc('José', 3200, 3)

console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2));


//Object.create
const filho = Object.create(null)
filho.nome = 'Vinicius'
console.log(filho);

//JSON.parse
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJSON.info);