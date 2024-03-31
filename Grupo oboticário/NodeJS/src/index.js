import fs from 'fs';
import chalk from 'chalk';
import { Module } from 'module';

function extraiLinks(texto) {
    const regex = / \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]] : captura
    [2]}))
    return resultados.length !== 0 ? resultados : 'Não há links disponíveis no arquivo';
}

[
    {titulo: URL}
]


function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Ocorreu um erro, análise o seu código e inicie a aplicação novamente!'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding ='utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md');

export default pegaArquivo;

