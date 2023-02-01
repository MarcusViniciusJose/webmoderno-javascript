// Em node a aplicação é organizada em arquivos e pastas
// Cada arquivo representa um módulo
// Tudo que for escrito em um módulo será visível apenas nele, para tornar algo público/disponivel para outro arquivo é preciso exportá-lo e importar a partir de outro arquivo

// Todo arquivo Node começa com um objeto vazio
console.log(this);

// ---  Exportando módulos de forma dinamica com atributos
//Tudo que for criado com "this." em um arquivo node poderá ser acessado por outro arquivo
this.ola = "Fala Pessoal";
//Outra forma de exportar para outros arquivos é com o exports:
exports.bemVindo = "Bem vindo ao node";
//A terceira forma de exportar com o node é usando o module.exports:
module.exports.ateLogo = "Ate o proximo exemplo";
