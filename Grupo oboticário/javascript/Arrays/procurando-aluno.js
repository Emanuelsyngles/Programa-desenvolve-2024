const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEmedias = [ alunos, medias];

function exibeNomeEnota(aluno) {
    if(listaDeAlunosEmedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEmedias[0];
        //const media = listaDeAlunosEmedias[1];

        const [alunos, media] = listaDeAlunosEmedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = media[indice]

        console.log(`${aluno} tem a média ${mediaDoAluno}`)

    } else {
        console.log("Aluno não encontrado...");
    }
}

exibeNomeEnota("João")
