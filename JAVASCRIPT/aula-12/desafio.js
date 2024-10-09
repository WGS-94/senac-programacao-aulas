/* 

    1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez 
    ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções 
    também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

*/


// A) - Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const parametro = String(prompt("Digite um parâmetro!"))

const imprimeParametro = (param) => {
    console.log("Parametro recebido: ", param);
}

const resultadoParametro = imprimeParametro(parametro)

console.log('Parâmetro: ', resultadoParametro)

// B) - Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como 
// entrada para imprimi-lo

const soma = (a, b) => {
    const resultado = a + b
    return resultado
}

console.log('Resultado', soma(3,5))


/* 

Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console. 

*/

// RESOLUÇÃO

const teoremaPitagoras = (cateto1, cateto2) => {

    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 **2)

    console.log(hipotenusa)

    return hipotenusa
}

console.log(`RESULTADO: ${teoremaPitagoras(3, 4)}`) 


// DIGITANDO DOIS VALORES

const catetoOpo = Number(prompt('Digite o valor do cateto oposto'))
const catetoAdj = Number(prompt('Digite o valor do cateto oposto'))

const teoremaPitagorasOutro = (cateto1, cateto2) => {
    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 **2)
    return hipotenusa
}

console.log(`Resultado: ${teoremaPitagorasOutro(catetoOpo, catetoAdj)}`)