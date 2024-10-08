
/* DESAFIO - AULA STRINGS E ARRAYS */

// Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const frase = String(prompt("Digite uma frase!"))

console.log("Array de palavras:  ", frase.split(" "))

/* Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const indiceAbacaxi = array[2]
let tamanho = array.length

console.log(`O índice do array é ${indiceAbacaxi}, e o tamanho é ${tamanho}`)
console.log('Nice, see you....')