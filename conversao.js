/*
Faça um programa para calcular as temperaturas de celsius para kelvin, 
celsius para fahrenheit, kelvin para celsius, kelvin para fahrenheit, 
fahrenheit para celsius e fahrenheit para kelvin utilizando-se da 
razão de proporção existente entre elas demonstrada na fórmula:
𝑐5=𝑘 − 2735=𝑓 − 329
celsius para kelvin ➔ k = c + 273
celsius para fahrenheit ➔ 𝑓 = 𝑐 ∗ 9 / 5 + 32
kelvin para celsius ➔ 𝑐 = 𝑘 − 273
kelvin para fahrenheit ➔ 𝑓 = (𝑘 − 273) ∗ 9/5 + 32
fahrenheit para celsius ➔ 𝑐 = (𝑓 − 32) ∗ 5/9
fahrenheit para kelvin ➔ 𝑘 = (𝑓 − 32) ∗ 5/9 + 273
*/
const celsius = 1
const kelvin = 2
const fahrenheit = 3

let tempOrigem = fahrenheit
let tempDestino = kelvin
let temperatura = 36
let resultado = temperatura
let xMsg = ' Temperatura Origem é igual Temperatura Destino = %d'

if (tempOrigem == celsius) {
    if (tempDestino == kelvin) {
        resultado = temperatura + 273
        xMsg = 'Celsius => Kelvin = %d'
    } else if (tempDestino == fahrenheit) {
        resultado = temperatura * 9 / 5 + 32
        xMsg = 'Celsius => Fahrenheit = %d'
    }
} else if (tempOrigem == kelvin) {
    if (tempDestino == celsius) {
        resultado = temperatura - 273
        xMsg = 'Kelvin => Celsius = %d'
    } else if (tempDestino == fahrenheit) {
        resultado = (temperatura - 273) * 9 / 5 + 32
        xMsg = 'Kelvin => Fahrenheit = %d'
    }
} else { //tempOrigem == fahrenheit
    if (tempDestino == celsius) {
        resultado = (temperatura - 32) * 5 / 9
        xMsg = 'Fahrenheit => Celsius = %d'
    } else if (tempDestino == kelvin) {
        resultado = (temperatura - 32) * 5 / 9 + 273
        xMsg = 'Fahrenheit => Kelvin = %d'
    }
}
console.log(xMsg, resultado)