// código omitido

function decifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode( codigoCaractere - movimentos)
    })

    return mensagemCifrada.join('')
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3)

console.log(mensagemDecifrada)