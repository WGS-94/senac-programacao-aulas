// DESAFIO - Aula Prática

// 1 - 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
   // a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
   // b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

// Definindo o custo por quilowatt-hora
const custoPorKwh = 0.05;

// Parte a: Calcular o valor a ser pago por 280 kWh
const consumoKwh = 280;
const valorAPagar = consumoKwh * custoPorKwh;

console.log(`Valor a ser pago por ${consumoKwh} kWh: R$ ${valorAPagar.toFixed(2)}`);

// Parte b: Calcular o valor a ser pago com desconto
const descontoPercentual = 15; // Porcentagem de desconto
const valorDesconto = valorAPagar * (descontoPercentual / 100);
const valorFinal = valorAPagar - valorDesconto;

console.log(`Valor a ser pago com ${descontoPercentual}% de desconto: R$ ${valorFinal.toFixed(2)}`);







