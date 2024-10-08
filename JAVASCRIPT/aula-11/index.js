
// FUNÇÕES

// Exercicio 1: Crie uma função que imprima no console a frase olá mundo

function  imprimeOlaMundo() {
    console.log("Olá mundo");
}

// Exercício 2: Crie uma função que receba por parametro um nome e imprimea no console a mensagem 

function imprimeOlaMundoTexto(nome) {
    console.log(`${nome}`)
}

imprimeOlaMundo()

imprimeOlaMundoTexto("Wilson")
imprimeOlaMundoTexto("Angola")
imprimeOlaMundoTexto("Brasil")


// Exercício 3: Crie uma função que receba dois números e retorna a soma entre eles.

function soma(a,b) {
    const soma = a + b;
    return soma
}

const resultado = soma(27,10)

console.log(`Resultado: ${resultado}`)