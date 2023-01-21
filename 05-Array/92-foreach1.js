const aprovados = ["Aghata", "Aldo", "Daniel", "Raquel"];

// forEach com uma função de callback que recebe como parametro primeiro o proprio elemento e depois o indice que esta sendo percorrido, tambem existe no foreach um 3° parametro que é o proprio array
// dentro do foreach existe um loop que percorre todos os elementos do array
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`); // 1)Aghata 2)Aldo 3)Daniel 4)Raquel
    //console.log(array); [ 'Aghata', 'Aldo', 'Daniel', 'Raquel' ]
});

// com apenas 1 parametro e arrow function 
aprovados.forEach((nome) => console.log(nome)); //Aghata Aldo Daniel Raquel




// armazenando a função como variavel e passando essa função para o forEach
const exibirAprovados = (aprovado) => console.log(aprovado); //Aghata Aldo Daniel Raquel
aprovados.forEach(exibirAprovados); 
