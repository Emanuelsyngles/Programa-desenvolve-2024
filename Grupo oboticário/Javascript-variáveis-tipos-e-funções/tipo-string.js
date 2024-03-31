const estudante = "Emanuel"
const docente = 'Ana'
const cumprimento = "nosso lema é 'estudar bastante!' "
const citacao = `Emanuel diz: "nosso lema é 'estudar bastante!'"`

console.log(estudante, docente, cumprimento, citacao)

console.log(`O estudante se chama ${estudante}`);

// template string

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);