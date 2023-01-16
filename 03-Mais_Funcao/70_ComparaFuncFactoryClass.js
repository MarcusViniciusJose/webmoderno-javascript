//Forma 01
//NÃO Funciona no browser
class Pessoa {
    constructor(nome) {
            this.nome = nome
        }
        //Método
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Marcus José');
p1.falar()


//Forma 02
//Funciona no browser
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Marcus Vinicius')
p2.falar()