
// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// EXERCICIO 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

// RESPOSTA

/*  Para cada iteração do loop, o valor é incrementado pela variável i, que vai de 0 a 4. 
    Logo, o valor final será a soma de todos os números de 0 a 4, que é 10.

    O resultado impresso no console será: 10 
*/

// EXERCICIO 2 - Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

// a) O que vai ser impresso no console?

// RESPOSTA: No console vai ser impresso os números maiores que 18, que são: 19, 21, 23, 25, 27 e 30.

/*
    b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... 
    é suficiente? Se sim, o que poderia ser usado para fazer isso?
*/

// RESPOSTA:  Não, o for...of... não é suficiente para acessar o índice de cada elemento da lista.
//  Para acessar o índice de cada elemento da lista, poderia ser usado o for... in... ou o for...of... com o método entries() ou keys().

//  EXERCICIO 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}

// RESPOSTA:  O resultado impresso no console seria: 4 linhas com asteriscos, cada uma com um asterisco a mais que a anterior.
/*
    *
    **
    ***
    ****
*/





