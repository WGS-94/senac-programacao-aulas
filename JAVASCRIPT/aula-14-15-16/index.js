
// ===================== AULA - CONDICIONAIS - INICIO =========================================================

/*
    Comparadores:

        ○ === : valor e tipo iguais
        ○ !== : valor ou tipo diferentes
        ○ > : maior que
        ○ >= : maior ou igual que
        ○ < : menor que
        ○ <= : menor ou igual que

    Condicionais em JS: 

        if / else é a sintaxe (estrutura) de programação utilizada para condicionais

*/

/* Exercício 1 - Crie uma função que:

    ● Recebe 2 números (chamaremos de num1 e num2)
    ● Compara esses números entre si:
    ○ Se os números forem iguais, retorna uma mensagem de sucesso
*/

// const num1 = Number(prompt("Digite o primeiro número!"))
// const num2 = Number(prompt("Digite o segundo número!"))

const compararNumeros = (num1, num2) => {
    if (num1 === num2) {
        return `Verdadeiro - ${num1} = ${num2}`
    } else {
        return `Falso - ${num1} != ${num2}`
    }
}

// const resultadoCompara = compararNumeros(num1, num2)

// console.log('Resultado: ', resultadoCompara)

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

// const resultado2Compara = comparar2Numeros(num1, num2)

// console.log('Resultado: ', resultado2Compara)

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

// const resultadoMaiorOuMenor = comparaMaiorOuMenor(num1, num2)

// console.log('Resultado: ', resultadoMaiorOuMenor)



// =============================== CONDICIONAIS EM JS - FIM  ================================================== 


//  =============================== SWITCH CASE - INÍCIO ======================================================

/*
    Os cases indicam as condições. 
    
        - Se o valor da variável for igual ao que está no case, o código de dentro será executado
    
    Conseguimos colocar um caso padrão chamado default

        - O código dentro dele será executado se o valor da variável não bater com as opções dos cases

    break é a palavra que faz com que a execução do código saia do bloco em questão.
    
        - Caso não exista o break, o código continuará executando

*/

/*
    Exercício 4 - Escreva um programa que receba o Pokémon inicial escolhido pela pessoa e imprima no console o seu tipo:

        ● Bulbasauro (Planta e Veneno)
        ● Charmander (Fogo)
        ● Squirtle (Água)

*/

// const pokemon = String(prompt('Digite o nome do pokemon'))

const tipoPokemon = {
    'Bulbasauro': 'Planta e Veneno',
    'Charmander': 'Fogo',
    'Squirtle': 'Água',
}

// switch (pokemon) {
//     case 'Bulbasauro':
//         console.log(`O tipo do ${pokemon} é: ${tipoPokemon['Bulbasauro']}`)
//         break;
//     case 'Charmander':
//         console.log(`O tipo do ${pokemon} é: ${tipoPokemon['Charmander']}`)
//         break;
//     case 'Squirtle':
//         console.log(`O tipo do ${pokemon} é: ${tipoPokemon['Squirtle']}`)
//         break;
//     default:
//         console.log('Pokémon não encontrado')
// }


//   =============================== SWITCH CASE - FIM ======================================================


//   =============================== Operadores Lógicos - INICIO ======================================================

/**
    Relembrando Operadores Lógicos

        ○ && : AND - verdadeiro se ambos os operandos forem verdadeiros
        ○ || : OR lógico: verdadeiro se um ou ambos os operandos forem verdadeiros
        ○ ! : NOT negação - sua função é simplesmente inverter os valores. Ou seja, se o valor de entrada for VERDADEIRO, o
        resultado será FALSO e se o valor de entrada for FALSO, o resultado será VERDADEIRO
R
 */

//    =============================== Operadores Lógicos - FIM ======================================================


/*
    Exercício 5 - Uma pessoa pode estudar em uma faculdade se:

        ● Tiver concluído o ensino médio
        ● Tiver 18 anos ou mais
        ● Não estiver cursando outra faculdade

    Escreva uma função que receba estes parâmetros e devolva se a pessoa pode ou não estudar nesta faculdade.
    Receba os dados do usuário pelo prompt e execute a função

*/

const concluiuEnsinoMedio = String(prompt('Já concluíu o ensino médio ? \n Digite S para Sim e N para Não')).toUpperCase()
const tem18Anos = String(prompt('Qual é a sua iddae ?'))
const estaCursandoOutraFaculdade = String(prompt('Está cursando outra faculdade ? \n Digite S para Sim e N para Não')).toUpperCase()

const dadosUsuarioFaculdade = (concluiuEnsinoMedio, idade, estaCursandoOutraFaculdade) => {

    if (
        concluiuEnsinoMedio === 'S' &&
        idade >= 18 &&
        estaCursandoOutraFaculdade === 'N'
    ) {
        return 'Pode estudar'
    } else {
        return 'Não pode estudar'
    }

}

const resultadoFaculdade = dadosUsuarioFaculdade(concluiuEnsinoMedio, tem18Anos, estaCursandoOutraFaculdade)
console.log(resultadoFaculdade)
