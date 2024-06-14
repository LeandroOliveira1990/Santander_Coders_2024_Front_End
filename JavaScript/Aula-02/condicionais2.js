// Muito util quando sua variavel possui valores especificos.


const permissoes = "aluno" // "aluno || "professor" || "admin"

switch (permissoes){
    case "aluno":
        console.log("Você só pode visualizar as aulas");

        break;
    case "professor":
        console.log("Você pode alterar as aulas e adcionar exercícios");

        break;

    case "admin":
        console.log("Você pode fazer o que quiser no sistema");

        break;
    default:
        console.log("Não sei quem é você no sistema");
}