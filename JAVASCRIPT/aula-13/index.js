
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

const professores = [
    { nome: "Andrei", modulo: 1 },
    { nome: "Vitor", modulo: 2 },
    { nome: "Mina", modulo: 3 }
]

console.log(professores[1].nome)

// Adicionando propriedades

const novoCurso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

// Notação de ponto: 
curso.numeroEstudantes = 50
// Notação de colchetes: 
curso['numeroEstudantes'] = 50

/*
    Exercício 3 - Adicione ao objeto do exercício 1 uma lista com os nomes dos personagens do filme.

        ● Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
        ● Altere a primeira pessoa do elenco por "Xuxa".
        ● Imprima no console todas as propriedades do objeto.    
    
*/

filme.personagens = ['Will Dev', 'Morticia', 'Pugsley', 'Wednesday', 'Lurch']

// a) Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
console.log(`Elenco: ${filme["elenco"][0]} === Personagem: ${filme["personagens"][0]}`)

// b) Altere a primeira pessoa do elenco por "Xuxa".
filme["elenco"][0] = "Xuxa"

// Imprima no console todas as propriedades do objeto. 
console.log('Filme: ', filme)



// Espalhamento ou Spread

const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}

console.log('Novo Usuário: ', novoUsuario)

const novoFilme = {
    ...filme,
    personagens: ['Will Dev', 'Morticia', 'Pugsley', 'Wednesday', 'Lurch'],
    direcao: 'Geo Systems Film'
}

console.log('Novo Filme: ', novoFilme)

// Copiando arrays

