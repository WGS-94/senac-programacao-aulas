
// 1. Escreva as funções explicadas abaixo:
    
//   a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." 
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.


const nome = "The One"
const idade = "80"
const cidade = "São Leopoldo"
const curso = "3000 Talentos TI - Senac RS"

function  sobreMim() {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante do curso ${curso}.`)
}

sobreMim()


/* 
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
    o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
    Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
*/

const nomePessoa = String(prompt("Digite seu nome!"))
const idadePessoa = Number(prompt("Digite a sua idade!"))
const cidadePessoa = String(prompt("Digite a sua cidade!"))
const profissaoPessoa = String(prompt("Digite a sua profissão!"))

function dadosPessoa(nome, idade, cidade, profissao) {
    const mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return mensagem
}

console.log('SOBRE MIM: ', dadosPessoa(nomePessoa, idadePessoa, cidadePessoa, profissaoPessoa));


/* 
   Exercício 2 - Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

*/

// A) RESULTADO

function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

const resultadoSoma = somarDoisNumeros(5, 3);  
console.log(resultadoSoma);  

// B) RESULTADO

function maiorOuIgual(num1, num2) {
    return num1 >= num2;
}

const resultadoMaiorIgual = maiorOuIgual(5, 3);  
console.log(resultadoMaiorIgual);  

// C) RESULTADO

function numeroPar(numero) {
    return numero % 2 === 0;
}

const resultadoPar = resultadoPar(4);  
console.log(resultadoPar);  

// D) RESULTADO 

function mensagemInfo(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.length);
    console.log("Mensagem em maiúsculas:", mensagem.toUpperCase());
}

mensagemInfo("Olá, mundo!");

/* 
    Exercício 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
    Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
    inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/

// RESULTADO

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    
    if (num2 === 0) {
        return "Não é possível dividir por zero.";
    }
    return num1 / num2;
}


const numero1 = Number(prompt("Insira o primeiro número:"));
const numero2 = Number(prompt("Insira o segundo número:"));


console.log("Números inseridos: ", numero1, "e", numero2);

console.log("Soma:", soma(numero1, numero2));
console.log("Subtração:", subtracao(numero1, numero2));
console.log("Multiplicação:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));