import User from "./User2.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente' , ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}

