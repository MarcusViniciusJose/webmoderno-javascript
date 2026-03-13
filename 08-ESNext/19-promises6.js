function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
       try{ 
            con.log('temp')
            if(Math.random()< chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
.then(v => `Valor: ${v}`)
.then(
    v => consol.log(v),
    //err => console.log(`Erro Esp.: ${err}`)
    )
.catch(erro => console.log(`Erro Geral: ${erro}`))
.then(() => console.log("Fim!"))