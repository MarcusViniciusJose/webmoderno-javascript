const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['João', 'Marcus', 'Bruna', 'Ana'])
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)
