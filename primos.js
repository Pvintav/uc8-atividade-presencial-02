/*
Crie um outro arquivo e chame-o de primos.js, nesse programa você 
como programador irá listar somente os números primos de 1 até 50.
*/
for(let i=1;i<=50;i++){
    let contadorDivisores=1
    for (let j=i;j>1;j--){
        if (i%j==0){
            contadorDivisores++
        }
    }
    //Saindo do laço do J, teremos a quantidade de divisore 
    if (contadorDivisores==2){
        console.log(i)
    }
}