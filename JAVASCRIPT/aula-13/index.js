
// OBJETOS


/*  
    Exercício 1 - Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, o ano de lançamento, 
    uma lista com o elenco e uma propriedade que diga se você já viu ou não.

    Acesse e imprima no console cada uma das propriedades: metade usando notação do ponto e a outra metade com notação de colchetes. 
*/

const filme = {
    nome: "Estrada da Fúria",
    direcao: 'Will Filmes S.A',
    ano: 2000,
    elenco: ["Wilson Santos", "Selton Mello", "Denise Fraga", "Natalia Lissimo"],
    jaViu: false
}

// Notação de ponto

console.log('Nome do filme: ', filme.nome)
console.log('Ano de lançamento: ', filme.ano)
console.log('Primeiro ator do filme: ', filme.elenco[0])
console.log('Último(a) ator/atriz do filme: ', filme.elenco[filme.elenco.length - 1])

// Notação de colchetes 
console.log('Nome do filme: ', filme["nome"])
console.log('Ano de lançamento: ', filme["ano"])
console.log('Direção do filme: ', filme["direcao"])

// Alterando valores e um objeto

filme.jaViu = true
filme["ano"] = 2010
filme["elenco"][1] = "Loypas Pu"

console.log(filme)


/*  
    Exercício 2 - Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade, gênero musical preferido.

    Acesse e imprima no console as propriedades desse objeto, seguindo o modelo abaixo:

    "O nome da pessoa é ____, ela tem ____ anos e gosta muito de _____."
*/


const pessoa = {
    nome: "João",
    idade: 25,
    generoMusical: 'Kizomba'
}

console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa["idade"]} e gosta de ${pessoa["generoMusical"]}`)

// Acessando objetos dentro de objetos {{ }}

const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-lata",
        idade: 1
    }
}

console.log(donoDoPet.pet.nomeDoPet)

// Acessando arrays dentro de objetos {[ ]}

const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

console.log(curso.linguagens[0]) 

// Array de objetos [{ }]