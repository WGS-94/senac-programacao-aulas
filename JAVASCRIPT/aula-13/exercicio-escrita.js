
// 1 - Resolva os passos a seguir: 

/*
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
    Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
*/

// Objeto:
const pessoa = {
    nome: "Paulo", 
    apelidos: ["Paulinho", "Paulão", "Paizinho"]
 }
 
 // Saída
 console.log(`Eu sou ${pessoa["nome"]}, mas pode me chamar de: ${pessoa["apelidos"][0]}, ${pessoa["apelidos"][1]} ou ${pessoa["apelidos"][2]}`)

 /*
    b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
    Depois, chame a função feita no item anterior passando como argumento o novo objeto
 */

// Array antigo + novo
const novaPessoaOld = {
    ...pessoa,
    novosApelidos: ["Paul G", "Proprio Paulo", "Paulucho"]
}

// Array novo
const novaPessoaNew = {
    ...pessoa,
    apelidos: ["Paul G", "Proprio Paulo", "Paulucho"]
}

const dadosPessoa = (params) => {
    return params
}

console.log("Resultado 1: ", dadosPessoa(novaPessoaOld))
console.log("Resultado 2: ", dadosPessoa(novaPessoaNew))