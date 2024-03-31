const user = {
    nome: "Emanuel",
    email: "Emanuel@gmail.com",
    nascimento: "2002/11/15",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome : "Mariana", 
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()