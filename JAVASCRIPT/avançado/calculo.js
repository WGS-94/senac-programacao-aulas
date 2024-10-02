// DESAFIO - Aula Prática

// 1 - Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

let numero = prompt ("Digite um numero")

fahrenheit = Number(numero)

let kelvin =(fahrenheit - 32) * 5 / 9 + 273.15;

console.log(`${fahrenheit}°F é igual a ${kelvin.toFixed(2)}K`);

let numero2 = prompt ("Digite um numero")

celsius = Number(numero)

let convertedFahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C é igual a ${convertedFahrenheit.toFixed(2)}°F`);






