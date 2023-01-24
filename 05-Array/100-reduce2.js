const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];

const alunosBolsista = (resultado, bolsista) => resultado && bolsista
const desafio1 = alunos.map((aluno) => aluno.bolsista).reduce(alunosBolsista)

console.log(desafio1)


const algumBolsista = (resultado, bolsista) => resultado || bolsista
const desafio2 = alunos.map((aluno) => aluno.bolsista).reduce(algumBolsista)

console.log(desafio2)