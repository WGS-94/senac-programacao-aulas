const constante = 2050

let nome = prompt("Qual seu nome?")

console.log("Seja bem vindo", nome)

let nascimento = prompt("Qual ano você nasceu?")

nascimento = Number(nascimento)

console.log("Idade:", 2023 - nascimento)

let ano = prompt("Em que ano estamos?")

ano = Number(ano)

console.log("É maior de idade?", ano >= nascimento)

console.log("Idade em 2050:", constante - nascimento)

