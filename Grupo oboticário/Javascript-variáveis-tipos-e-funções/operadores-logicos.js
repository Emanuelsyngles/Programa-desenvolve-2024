const notaFinal = 8.5;
const numeroFaltas = 4;
const advertencias = 0;

if(notaFinal < 7 && numeroFaltas > 4) {
    console.log('Aluno reprovado :(, boas festas!')
}else {
    console.log('Aluno aprovado!, boas festas!')
}

if(numeroFaltas >= 2 && !advertencias) {
    console.log('Recebeu bônus');
}else {
    console.log('Não recebeu bônus');
}

