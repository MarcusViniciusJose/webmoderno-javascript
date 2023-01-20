const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() { return a + b + c }
}

// JSON para objeto
// Json é um formato de dado como string, nesse caso a função soma é omitida
console.log(JSON.stringify(obj));

// Objeto para JSON
//console.log(JSON.parse("{a:1,b:2,c:3}"))


// Formatos aceitaveis em JSON
// Para ser valido, todos os atributos devem ser em aspas duplas
// Para ser valido, todos os atributos devem ser em aspas duplas e textos também devem ser em aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "text", "c": true, "d": {}, "e": []}')) 