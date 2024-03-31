const pessoa = {
    nome: "Luma",
    profissao: "Enfermeira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "86 4537-8263"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva"

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa; //irá gerar um erro, não é possivel atribuir para uma variável constante.
//podemos manipular, só não podemos reatribuir.


