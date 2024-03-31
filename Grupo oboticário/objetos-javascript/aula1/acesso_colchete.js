const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1112222736",
    email: "andre@dominio.com",
    altura: "1.76",
}

console.log(`O nome do cliente é ${cliente["nome"]} sua idade é de ${cliente["idade"]} anos, seu CPF é ${cliente["cpf"]} e seu email é ${cliente["email"]}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});