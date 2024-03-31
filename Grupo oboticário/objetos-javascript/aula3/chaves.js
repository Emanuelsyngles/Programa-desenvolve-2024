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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado. ");
}