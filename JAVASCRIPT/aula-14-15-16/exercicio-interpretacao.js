// Exercício de interpretação

/*
    EXERCICIO 1 - Tente responder os exercícios dessa seção sem executar o código. 
    Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
*/

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
/*
    RESPOSTA: Esse código irá verificar se o número digitado pelo usuário é par ou ímpar. Se o número for
    par, irá exibir a mensagem "Passou no teste." e se for ímpar , irá exibir a mensagem "Não passou no teste."

*/

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

    //  RESPOSTA: Ele imprime "Passou no teste" para números pares - [2, 4, 6, 8, 10, 22, 44, 66, 88, 100, ...]

// c) Para que tipos de números a mensagem é "Não passou no teste"?

    // RESPOSTA:  Ele imprime "Não passou no teste" para números ímpares - [1, 3,  5, 7, 9, 11, 13, 15, 17, 23, 59, 99..]


/*
    EXERCICIO 2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
*/

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

/*
    RESPOSTA: Esse código irá verificar a fruta escolhida pelo usuário e irá exibir o preço da fruta escolhida. 
    Exemplo: Se a fruta escolhida não estiver no switch ele irá exibir o preço padrão que é R$ 5.00.
*/

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

    // RESPOSTA:  A mensagem impressa no console será: "O preço da fruta Maçã é R$ 2.25".

/*
    c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o 
    break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
*/

/* 
    RESPOSTA: A mensagem impressa no console seria: "O preço da fruta Pêra é R $ 5", porque ele cairia no default.
    Isso acontece porque o break é usado para sair do bloco switch, e se  não houver um break, o programa continuará executando o código até encontrar um break ou até
    o final do bloco switch. Por isso, se retirarmos o break, ele irá continuar executando o código e irá cair no default.
*/

// EXERCICIO 3 - Leia o código abaixo:

const numero2 = Number(prompt("Digite o primeiro número."))

if(numero2 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?

    //  RESPOSTA: A primeira linha está pedindo para o usuário digitar um número e atribuindo esse valor a uma variável chamada numero2.
    //  Essa variável é do tipo Number, o que significa que ela irá armazenar  um número.
    //  O prompt é uma função que irá mostrar uma caixa de diálogo para o usuário digitar alguma coisa.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    // RESPOSTA:  
        // Se o usuário digitar o número 10, a mensagem do terminal será: "Esse número passou no teste".
        // Se o usuário digitar o número -10, a mensagem do terminal será: " Esse número passou no teste" também.


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

/*
    RESPOSTA: Sim, haverá um erro no console. Isso acontece porque a variável mensagem está dentro do bloco if, e o console.log(mensagem) está fora do
    bloco if. Isso significa que a variável mensagem não está no escopo do console.log(mensagem), e por isso irá gerar um erro no console.
*/
    
