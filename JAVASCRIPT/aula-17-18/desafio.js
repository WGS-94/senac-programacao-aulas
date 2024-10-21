// DESAFIO

/*
    Exercício 1 - Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
    Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. 
    Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, 
    indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

        Vamos jogar!
        O número chutado foi: 3
        Errrrrrrrou, é maior
        O número chutado foi: 18
        Errrrrrrrou, é menor
        O número chutado foi: 15
        Errrrrrrrou, é menor
        O número chutado foi: 11
        Acertou!!
        O número de tentativas foi: 4 


    Um resumo das funcionalidades são:

    a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

    b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

    - O número chutado, com a mensagem: `O número chutado foi: <número>`
    - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

    c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
*/

let continuar = true
let tentativas = 0
//  1 - Solicitar que o primeiro jogador escolha um número
const p1  = Number(prompt("Digite um número!"))
console.log("Vamos jogar!")


while(continuar){
    
    //  2 - A partir daí, será solicitado, ao segundo jogador, que ele
    const p2 = Number(prompt("Adivinhe o número que eu digitei"))

    if(p1 === p2){
        console.log("Acertou!!")
        console.log(`O número de chutes/tentativas foi: ${tentativas}`)
        continuar = false
    }

    if(p1 > p2){
        console.log(`O número chutado foi: ${p2}`)
        console.log("Errrrrrrrou. O número escolhido é maior")
        tentativas += 1
    }

    if(p1 < p2){
        console.log(`O número chutado foi: ${p2}`)
        console.log("Errrrrrrrou. O número escolhido é menor")
        tentativas += 1
    }

}




