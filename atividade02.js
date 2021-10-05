/*
Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

• se o número for par, escreva 'par' e o número correspondente.
• se o número for ímpar, escreva 'ímpar' e o número correspondente.
• se o número for zero, escreva 'zero' e o número correspondente. 

*/
for (let i = 0; i <= 9; i++) {
    if (i == 0) {
        console.log('%d é zero', i)
    } else if (i % 2 == 0) { 
        console.log('%d é par', i)
    } else {
        console.log('%d é impar', i)
    }
}