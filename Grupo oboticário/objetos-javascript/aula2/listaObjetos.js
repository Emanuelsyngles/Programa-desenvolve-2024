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

cliente.enderecos.push({
    rua: "R. bom jardim",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);