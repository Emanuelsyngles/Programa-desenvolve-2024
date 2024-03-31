const estudanteReprovou = function (notaFinal, faltas) {
    if(notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 6))
console.log(estudanteReprovou(10, 1))

// hoisting, quando o arquivo é lido por javascript as funções são puxadas para o topo, por isso dará um erro caso a ordem seja invertida, por ex: caso eu coloque o console.log() antes da função, isso resultará em um erro de uma não inicialização.