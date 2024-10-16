
// AULA - CONDICIONAIS

/*
    Comparadores:

        ○ === : valor e tipo iguais
        ○ !== : valor ou tipo diferentes
        ○ > : maior que
        ○ >= : maior ou igual que
        ○ < : menor que
        ○ <= : menor ou igual que

*/

/* Exercício 1 - Crie uma função que:

    ● Recebe 2 números (chamaremos de num1 e num2)
    ● Compara esses números entre si:
    ○ Se os números forem iguais, retorna uma mensagem de sucesso
*/

const num1 = Number(prompt("Digite o primeiro número!"))
const num2 = Number(prompt("Digite o segundo número!"))

const compararNumeros = (num1, num2) => {
    if (num1 === num2) {
        return `Verdadeiro - ${num1} = ${num2}`
    } else {
        return `Falso - ${num1} != ${num2}`
    }
}

const resultadoCompara = compararNumeros(num1, num2)

console.log('Resultado: ', resultadoCompara)

// ================================================================= //

/* Exercício 1 - Crie uma função que:

    ● Recebe 2 números (chamaremos de num1 e num2)
    ● Compara esses números entre si:
    ○ Se os números forem iguais, Retorna mensagens dizendo se os números são iguais ou diferentes
*/

const comparar2Numeros = (num1, num2) => {
    if (num1 === num2) {
        return `Os números são iguais - ${num1} e ${num2}`
    } else {
        return `Os números são diferentes - ${num1} e ${num2}`
    }
}

const resultado2Compara = comparar2Numeros(num1, num2)

console.log('Resultado: ', resultado2Compara)

/* Exercício 1 - Crie uma função que:

    ● Recebe 2 números (chamaremos de num1 e num2)
    ● Compara esses números entre si:
    ○ Se os números forem iguais, Retorna mensagens dizendo se o primeiro número é 
    {maior/menor/igual} ao segundo número
*/

const comparaMaiorOuMenor = (num1, num2) => {
    if (num1 > num2) {
        return `O primeiro número é maior que o segundo - ${num1} > ${num2}`
    } else if (num1 < num2) {
        return `O primeiro número é menor que o segundo - ${num1} < ${num2}`
    } else {
        return `O primeiro número é igual ao segundo - ${num1} = ${num2}`
    }
}

const resultadoMaiorOuMenor = comparaMaiorOuMenor(num1, num2)

console.log('Resultado: ', resultadoMaiorOuMenor)