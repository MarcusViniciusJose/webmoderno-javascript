// Object.preventExtensions(); - previni que o objeto não seja extendido
const pessoa = Object.preventExtensions({
    nome: 'Marcus',
    idade: 19,
    job: 'Estagiário Front-End'
})

console.log('Extensivel: ', Object.isExtensible(pessoa)); // false

pessoa.nome = 'Vinicius' // é alterado
pessoa.descricao = 'Front end developer' // Não funfa, pois não poder add + informações
delete pessoa.job // pode deletar

console.log(pessoa)


// Object.seal() - não consegue adiconar ou excluir novos atributos
const people = { nome: 'José', idade: 20 }
Object.seal(people)

console.log('Selado: ', Object.isSealed(people)); // true

people.sobrenome = 'Alves'
people.job = 'Estagiario'
delete people.nome
people.idade = 29
console.log(people);

// Object.freeze() = selado + valores constantes, ou seja, não é possivel nenhuma modificação