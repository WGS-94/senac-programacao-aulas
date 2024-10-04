
//  Peça para o usuário escrever uma frase uma frase e imprima no console a frase alterada com:

    //  1. Todas as letras maiúsculas convertidas para minúsculas
    //  2. Na lingua do i (substituindo a vogal "o" por "i")
    //  3. O tamanho da frase


let frase = String(prompt("Digite uma frase!"));

console.log(`Todas letras maíusculas: ${frase.toUpperCase()}`)
console.log(`Substituindo "o" por "i" - F1: ${frase.replaceAll("O", "I").replaceAll("o", "i")}`)
console.log(`Substituindo "o" por "i" - F2: ${frase.replace(/O/g, 'I').replace(/o/g, 'i')}`)
console.log(`Tamanho da frase: ${frase.length}`)