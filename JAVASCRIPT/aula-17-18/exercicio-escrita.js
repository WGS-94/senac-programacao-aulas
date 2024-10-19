
// EXERCICIO DE ESCRITA DE CODIGO


/*
    EXERCICIO 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
    e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console

*/

// RESOLUÇÃO

const controleBichinhos = () => {

    const qtdeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem ?"));

    // a)
    if(qtdeBichinhos === 0){
        return `😔 Que pena! Você pode adotar um pet!` 
    }

    // b)
    const nomesBichinhos = [];

    for(let i = 0; i < qtdeBichinhos; i++){

        const nomeBichinho = prompt(`Qual o nome do seu ${i+1}º`)

        nomesBichinhos.push(nomeBichinho);
    }

    // c)
    return nomesBichinhos;

}

const nomesBichinhos = controleBichinhos();
console.log(JSON.stringify(nomesBichinhos))



