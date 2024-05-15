import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');

    const senhHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        if(nome === this.nome) {
            const testHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testHash, hashReal)
            if(hashesCorrespondem) {
                console.log('Usuário autenticado com sucesso!')
                return true;
            }
        }
        console.log('Usuário ou senha incorretos.')
        return false;
    }
}

const am = new Usuario('amanda', 'senhaSecreta')

console.log(am)

// Teste de sucesso

am.autentica("amanda", 'senhaSecreta')

// Teste de insucesso

am.autentica("amanda", "1286183")
am.autentica("joão", "senhaSecreta")

