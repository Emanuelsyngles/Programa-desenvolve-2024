const clientes = require('./clientes.json')

function clientesComCachorro(clientes) {
    return clientes.filter((cliente) => {
        return cliente.endereco.pcd === true
    })
}

const filtrados = clientesComCachorro(clientes)

console.log(filtrados)




