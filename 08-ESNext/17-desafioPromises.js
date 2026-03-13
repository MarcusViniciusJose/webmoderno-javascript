const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = new Promise(function(resolve, reject) {
    fs.readFile(caminho, 'utf-8', (err, conteudo) => {
        if (err) {
            reject(err) 
        } else {
            resolve(conteudo) 
        }
    })
})

lerArquivo
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
    .catch(erro => console.error("Erro ao ler:", erro.message))