const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1155555550", "11144444440"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente :(")
        } else {
            this.saldo -= valor;
            console.log(`Compra aprovada com sucesso. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(25)
