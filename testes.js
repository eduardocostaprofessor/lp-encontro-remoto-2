console.clear();
console.log(" ");
console.log("********** Bem-Vindo ao Programa de Classificação **********");
console.log(" ");

let qtdAlunos = 5;

for (let index = 0; index <= qtdAlunos; index++) {
    if(index == 0) {
        console.log("Zero, par");
    } else if (index % 2 == 0) {//par
        console.log(index +'o número é par: ');
    } else {//ímpar
        console.log(index + 'o número é ímpar: ');
    } 
}