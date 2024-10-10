
// Exercícios de interpretação de código

/* 
    Tente responder os exercícios dessa seção sem executar o código. 
    Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
*/

// 1 -  Leia o código abaixo

const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

/* 
    Será impresso no console: 
        
        "Matheus Nachtergaele" por ser o primeiro elemento do array elenco;
        "Virginia Cavendish" por ser o último elemento do array elenco;
        {canal: "Globo", horario: "14h"} por ser o segundo objeto do array transmissoesHoje.
*/

// 2 - Leia o código abaixo

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

/**
    Será impresso o console: 

        objeto cachorro com as propriedades nome, idade e raca;
        objeto gato com as propriedades nome, idade e raça e a variável nome terá um novo valor "Juba";
        objeto tartaruga com as propriedades nome, idade e raca e no valor da chave nome, todo lugar 
            onde tiver "a" será substituido por "o", ficará "Juco"
 */

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

/*
    A sintaxe dos três pontos antes do nome de um objeto faz uma cópia do objeto original
*/


// 3 - Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


// a) O que vai ser impresso no console?

/* 
    Será impresso no console: 

        false, pois a propriedade backender do objeto pessoa é false;
        undefined, pois a propriedade altura não existe no objeto pessoa;

*/

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

/*
    A função recebe um objeto, pessoa, e uma propriedade, backender ou altura. 
    A função acessa a propriedade do objeto usando a sintaxe objeto[propriedade].
    Se a propriedade existir no objeto, a função retorna o valor da propriedade, caso contrário,
    retorna undefined.

*/