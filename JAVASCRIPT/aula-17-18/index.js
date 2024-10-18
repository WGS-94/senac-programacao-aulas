
// ======= LAÇOS =====================

// Laços são estruturas de programação que permitem representar eventos que se repetem

// ======= Laços Infinitos =========== 

// Loop infinito é um loop que nunca acaba. Normalmente isto acontece devido a algum erro de lógica de programação

// ======= while (enquanto) ==========

// while ("enquanto") é a estrutura mais básica de criação de loops

// Sintaxe
// while(condicao){
//     // ENQUANTO a condição for verdadeira
//     // as linhas deste bloco de código serão executados

//     // Assim que a condição ficar falsa, o loop/laço vai parar
// }

// Exemplo

// let i = 0

// while(i < 10){

//     console.log(i)

//     i++
// }

// Exercício 1

/*
    No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro

        ● Quando ele digitar o número '0', devemos parar de
        solicitar novos inputs e imprimir no console a soma de
        todos os números por ele indicados

        ● Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
        O resultado deve ser: 70
*/

// RESOLUÇÃO

let soma = 0

while(true){
    
    num = Number(prompt("Digite um número: "))

    if (num === 0) {
        break
    }

    soma += num
}

console.log('Resultado', soma)

