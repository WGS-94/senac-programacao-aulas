
// Exercicio 1 - Interpretação de código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

/*
RESPOSTA: 

    A função minhaFuncao multiplica o valor da variável variavel por 5. Portanto, as saídas das chamadas da função serão:

    minhaFuncao(2) resultará em 2 * 5, que é 10.
    minhaFuncao(10) resultará em 10 * 5, que é 50.

    Que serão impressos no console (10 e 50)
*/

// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// RESPOSTA: Não retornaria nada , pois não há comando para imprimir o resultado da função. A função seria executada, mas não haveria saída no console.

// Exercicio 2 - Interpretação de código

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

// RESPOSTA:  A função outraFuncao converte o texto para letras minúsculas e verifica se a palavra "cenoura" está presente no texto. 

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//     i.   `Eu gosto de cenoura`
//     ii.  `CENOURA é bom pra vista`
//     iii. `Cenouras crescem na terra`

// RESPOSTA: 
//      i.   `Eu gosto de cenoura` - true
//      ii.  `CENOURA é bom pra vista` - true
//      iii. `Cenouras crescem na terra` - true

