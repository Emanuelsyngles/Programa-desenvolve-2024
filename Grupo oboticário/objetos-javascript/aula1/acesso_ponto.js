const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1112222736",
    email: "andre@dominio.com",
}

console.log(`O nome do cliente é ${cliente.nome} sua idade é de ${cliente.idade} anos, seu CPF é ${cliente.cpf} e seu email é ${cliente.email}`);

console.log(`Os 3 primeirs digitos do CPF são ${cliente.cpf.substring(0, 3)}`);