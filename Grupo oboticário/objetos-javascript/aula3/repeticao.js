const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1155555550", "11144444440"],
};

cliente.enderecos = [
    {
        rua: "R. boas artes",
        numero: 1338,
        apartamento: true,
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}