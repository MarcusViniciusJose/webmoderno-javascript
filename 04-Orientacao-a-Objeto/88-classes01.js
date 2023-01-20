// Exemplo - Financeiro
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }


    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsoliado = 0;
        this.lancamentos.forEach(l => {
            valorConsoliado += l.valor;
        })
        return valorConsoliado;
    }
}

const salario = new Lancamento('Salário', 2300);
const mensalidadeVan = new Lancamento('Van', -350)

const contas = new CicloFinanceiro(3, 2023)
contas.addLancamentos(salario, mensalidadeVan)

console.log('Sado restante: ' + contas.sumario()); // 2300 - 350 => 1950;
