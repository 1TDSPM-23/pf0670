// ADIÇÃO
console.log("Resultado : " + (parseint(nr1) + parseInt(nr2)));
console.log(`Resultado adição: ${parseint(nr1) + parseint(nr2)}`);

// Descobrindo se um número é par ou impar
// Utilizando operdor ternário (?)
// Declarar uma variável com a palavra reservada var.

var nr1 = "10";
var nr2 = "5";
var resultado;

resultado + !(parseInt(nr1)%(nr2)) ? "PAR" : "impar";
console.log(`O número é: ${resultado}`);

// Diferença entre var/let/const

var nome1 = "Pam";
let nome2 = "Bia";

// Regras do const
// 1ª regra = inicializar na decaração

var nome = "Violante";

//2ª regra = não pode ser alterado durante o fluxo do programa.
let nome3 = "Matheus"

if(nome != ""){
    let nome = "Robson";
}
console.log(nome);