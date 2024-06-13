const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade?");

const idadeNumber = Number(idade); // Convertendo String para Number
console.log(idadeNumber, typeof idadeNumber);

//Conversão Manual

console.log(Number("X")); //NaN : Note a Number

console.log(String(10), typeof String(10));

console.log(Boolean(0));

//Coerção Implícita

console.log(1 + "1")
console.log(10 - "5");
console.log(10 / "5");
console.log(10 * "5");

