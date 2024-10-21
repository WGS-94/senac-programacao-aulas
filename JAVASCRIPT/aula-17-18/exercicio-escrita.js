
// EXERCICIO DE ESCRITA DE CODIGO


/*
    EXERCICIO 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
    e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console

*/

// RESOLUÇÃO

// const controleBichinhos = () => {

//     const qtdeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem ?"));

//     // a)
//     if(qtdeBichinhos === 0){
//         return `😔 Que pena! Você pode adotar um pet!` 
//     }

//     // b)
//     const nomesBichinhos = [];

//     for(let i = 0; i < qtdeBichinhos; i++){

//         const nomeBichinho = prompt(`Qual o nome do seu ${i+1}º`)

//         nomesBichinhos.push(nomeBichinho);
//     }

//     // c)
//     return nomesBichinhos;

// }

// const nomesBichinhos = controleBichinhos();
// console.log(JSON.stringify(nomesBichinhos))

/*
    EXERCICIO 2 - Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
    Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
    Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

// RESOLUÇÃO

const arrayOriginal = [11, 2, 33, 4, 52, 6, 7, 81, 9, 10, 20];

// a)
const imprimir = (array) => {

    for(let i = 0; i < array.length; i++){
       console.log(array[i])
    }
}

// imprimir(arrayOriginal)

// b) 
const imprimirDivisao = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i] / 10)
    }
}

// imprimirDivisao(arrayOriginal)

// c) 
const criar = (array)  => {
    
    const novoArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            novoArray.push(array[i])
        }
    }

    return novoArray
}

// console.log(criar(arrayOriginal))

const criarStrings = (array)  => {
    
    const novoArray = []

    for(let i = 0; i < array.length; i++){
        let string = `O elemento do índex ${i} é: ${array[i]}`
        novoArray.push(string)
    }

    return novoArray
}

console.log(criarStrings(arrayOriginal))

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

const maiorMenor = (array) => {
    
    let maior = array[0]
    let menor = array[0]

    for(let i = 1; i < array.length; i++){
        
        if(array[i] > maior){
            maior = array[i]
        }

        if(array[i] < menor){
            menor = array[i]
        }
    }

    return [maior, menor]

}

console.log(maiorMenor(arrayOriginal))