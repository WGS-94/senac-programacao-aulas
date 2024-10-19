
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

let i = 0

while(i < 10){

    console.log(i)

    i++
}

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


// ========= FOR (PARA) ===============

// Uma das principais utilidades deste tipo de estrutura é para PERCORRERMOS os valores contidos em um  array (ou lista)

// Exemplo

 const numeros = [16, 67, 87, 50, 15, 23]

 for(let i = 0; i < numeros.length; i++){
    const elemento  = numeros[i]
    console.log(elemento)
 }

// Exercício 2

/*
    Escreva uma função que receba um array com números e devolva qual o maior dentro dele

        ● Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"
*/

// RESOLUÇÃO

const array = [11, 15, 18, 14, 12, 13]

const maiorNumero = (array) => {

    let maior = array[0]

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= maior) {
            maior = array[i]
        }
    }

    return maior
}

const resultado = maiorNumero(array)

console.log('Resultado: ', resultado)

// Avançado
const maior = array.reduce((maior, atual) => {
    return maior > atual ? maior : atual
})

console.log('Maior: ', maior)


// =========== for… of... (para... cada...)  ===========

/*
    Uma forma de simplificar a leitura dos elementos do array é utilizando o loop for...of… 
    
    ● O loop for...of percorre arrays e objetos, alocando o valor de cada posição do array em uma variável,
    permitindo executar alguma ação para cada valor distinto    
*/

// Exemplo

const numeross = [14, 67, 89, 15, 23]

for (let numero of numeross) {
    console.log(numero)
}

/*
    Considere que você tem um array com várias palavras.
    Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando um espaço entre elas.
    
    ● Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades"
*/

const palavras =  ["Oi", "sumido", "tudo", "bem?", "Saudades"]

for (let palavra of palavras) {
    console.log(palavra)
}
