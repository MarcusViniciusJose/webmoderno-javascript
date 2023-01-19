console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Toda função tem um atributo chamado prototype
// Este atributo é um objeto que contém todas as propriedades e métodos da função
// Este objeto é chamado de protótipo
// O protótipo é um objeto que contém todas as propriedades e métodos da função

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

console.log("Ayrton".reverse()); // "notryA"

Array.prototype.first = function () {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first()); // 1
console.log(['a', 'b', 'c'].first()); // 'a'

String.prototype.toString = function () {
    return "Lascou tudo";
}
console.log('Ayrton'.reverse()); // 'odut uocsaL'