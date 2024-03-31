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
        complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0] // Os ... são o espalhamento, eles irão pegar as informações no array e mostrar.
};

console.log(encomenda)