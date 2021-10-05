/*
Crie um outro arquivo e chame-o de multiplos7.js, nesse programa 
você como programador irá listar somente os números 
múltiplos de 5 ou 7 de 1 a 50
*/
for(let i=1;i<=50;i++){
    //somente 5 e 7
    if (i%5==0 && i%7==0){
        console.log('%d é multiplo de 5 E multiplo de 7',i)
    }
    //ou 5 ou 7
    if (i%5==0 || i%7==0){
        console.log('%d é multiplo de 5 OU multiplo de 7',i)
    }
}