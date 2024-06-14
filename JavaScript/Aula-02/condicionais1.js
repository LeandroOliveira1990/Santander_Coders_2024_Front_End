const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade? "));

// const ehMaiorDeIdade = idade >= 18;

//Estrutura condicional: if/else

if (idade >= 18) {
    console.log("Você é MAIOR de idade")
} else {
    console.log("Você é MENOR de idade")
}

const mediaDoAluno = 8.5;

//Media >= 7 => aprovado
//Media < 7e Média >= 5 => Prova Final
//Média < 5 => Reprovado

if(mediaDoAluno >= 7){
    console.log("Aprovado!");
    console.log("Parabéns! 🎉😁👏");
}else if(mediaDoAluno >= 5){
    console.log("Prova Final");

}else{
    console.log("Reprovado");
}
