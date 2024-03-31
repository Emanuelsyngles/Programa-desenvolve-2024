const notaPrimeiroBimestre = 8;
const notasSegundoBismestre = 6.3;
const notaTerceiroBimestre = 7;
const notaQuartoBimestre = 9.3;

let media = (notaPrimeiroBimestre + notasSegundoBismestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

if(media >= 7) {
    media += media * 0.1;
}

console.log(`a média é ${media.toFixed(1)}`);