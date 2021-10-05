/*
Crie um arquivo e chame-o de inversao.js, nesse programa você como programador
terá que inverter o valor 123 utilizando somente os 
operadores matemáticos abaixo:

Divisão inteira: Math.trunc(a/b), onde a é o dividendo e b o divisor
Soma: +
Resto da divisão: %
Multiplicação: *
*/
var valor=123
var u= Math.trunc(valor%10) //representa a unidade
var d= Math.trunc(valor%100/10) //representa a dezena
var c= Math.trunc(valor/100) //representa a centena
var resultado=u*100+d*10+c
console.log(resultado)


