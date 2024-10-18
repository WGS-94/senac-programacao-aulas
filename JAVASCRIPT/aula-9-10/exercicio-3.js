// EXERCICIO 3

// 1 - Crie um array com pelo menos 5 raças de cachorros

// 2 - Peça para o usuário inserir um número de 0 a 4

// Imprima no console a raça correspondente à posição escolhida pelo usuário 


const  racasDeCachorros = ["Poodle", "Buldogue", "Pitbull",  "Rottweiler", "Cane Corso"];

const  escolhaDoUsuario = prompt("Escolha um número de 0 a 4:")

const numero = parseInt(escolhaDoUsuario)

if(numero < 0 || numero > 4) {
    console.log("Número inválido")
}else {
    console.log(`Raça correspondente: `,  racasDeCachorros[escolhaDoUsuario])
}


