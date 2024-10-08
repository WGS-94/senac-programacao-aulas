
// FUNÇÕES

// Exercicio 1: Crie uma função que imprima no console a frase olá mundo

function  imprimeOlaMundo() {
    console.log("Olá mundo");
}

// Exercício 2: Crie uma função que receba por parametro um nome e imprimea no console a mensagem 

// function imprimeOlaMundoTexto(nome) {
//     console.log(`${nome}`)
// }

// imprimeOlaMundo()

// imprimeOlaMundoTexto("Wilson")
// imprimeOlaMundoTexto("Angola")
// imprimeOlaMundoTexto("Brasil")


// Exercício 3: Crie uma função que receba dois números e retorna a soma entre eles.

// function soma(a,b) {
//     const soma = a + b;
//     return soma
// }

// const resultado = soma(27,10)

// console.log(`Resultado: ${resultado}`)

// Exercício 4 - Cria uma função que receba um array de números. Retorna um novo array com dois elementos: primeiro e último número do array recebido divididos por 2

const array = [2,5,6,25,-6,50,-10]

function recebaArray(data) {
    const primeiro = data[0] / 2
    const ultimo = data[data.length - 1] / 2
    return [primeiro,ultimo]
}

const result =  recebaArray(array)

console.log(`Resultado: ${result}`)



/* 
    Exercício 4: Outra forma de fazer
    
    P1: Digite o tamanho do array (n)
    P2: For -  i = 0 até n-1 - gera (n) valores ou numeros aleatorios
    P3: Armazene em um array todos os números aleatorios
    P4: Imprima o array aleatorio
    P5: Crie uma função que receba este array e retorna o primeiro e último valor divididos por 2
*/

const tamanho = Number(prompt('Digite o tamanho do array'))

const arrayAleatorio = []

for (let i = 0; i < tamanho; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100)
    arrayAleatorio.push(numeroAleatorio)
}

console.log(arrayAleatorio)

function recebaArrayAleatorio(data) {
    const primeiro = data[0] / 2
    const ultimo = data[data.length - 1] / 2
    return [primeiro,ultimo]
}

const resultadoArray = recebaArrayAleatorio(arrayAleatorio)

console.log(resultadoArray)