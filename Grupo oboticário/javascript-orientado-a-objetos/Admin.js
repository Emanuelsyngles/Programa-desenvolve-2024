import User from "./User2.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin' , ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

