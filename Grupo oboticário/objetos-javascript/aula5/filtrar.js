const clientes = require("./clientes.json");

function filtarApartamentosSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento === true &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    });
}

const filtrados = filtarApartamentosSemComplemento(clientes);

console.log(filtrados);