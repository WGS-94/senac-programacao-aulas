/*
    EXERCICIO 2 - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, 
    o usuário deve fornecer algumas informações:

        - Nome completo;
        - Tipo de jogo: IN indica internacional; e DO indica doméstico;
        - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
        - Categoria: pode ser as opções 1, 2, 3 ou 4;
        - Quantidade de ingressos
        
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, 
    junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso 
    multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
    Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados 
    pelo valor do dólar (considerar o dólar = R$4,10)
*/

// Definindo os valores dos ingressos
const precos = {
    IN: { 
        SF: { 1: 1320, 2: 880, 3: 550, 4: 220 }, 
        DT: { 1: 660, 2: 440, 3: 330, 4: 170 }, 
        FI: { 1: 1980, 2: 1320, 3: 880, 4: 330 } 
    },
    DO: { 
        SF: { 1: 1320, 2: 880, 3: 550, 4: 220 }, 
        DT: { 1: 660, 2: 440, 3: 330, 4: 170 }, 
        FI: { 1: 1980, 2: 1320, 3: 880, 4: 330 }  
    },
};

const valorDolar = 4.10;

// Função para calcular o preço total
const resumoCalculoTotal = (tipoJogo, etapa, categoria, quantidade) => {

    let precoUnitario = precos[tipoJogo][etapa][categoria];

    console.log(precoUnitario)

    // Se o jogo for internacional, multiplica pelo valor do dólar
    if (tipoJogo === "IN") {
        precoUnitario *= valorDolar;
    }

    return precoUnitario * quantidade;
}       

// Coletando informações do usuário
const nome = String(prompt("Nome completo")).toUpperCase()
const tipoJogo = String(prompt("Tipo de jogo: IN para internacional e DO para doméstico ")).toUpperCase()
const etapaJogo = String(prompt("Etapa do jogo: SF para semi-final, DT para decisão de terceiro lugar e FI para final ")).toUpperCase()
const categoria = parseInt(prompt("Categoria: 1, 2, 3 ou 4"))
const quantidadeIngressos = parseInt(prompt("Quantidade de ingressos"))

// Calculando o valor total
let valorTotal = resumoCalculoTotal(tipoJogo, etapaJogo, categoria, quantidadeIngressos);

// Imprimindo as informações

if(tipoJogo === 'IN') {
    console.log('====== Dados da compra ======')
    console.log(`Nome: ${nome}`);
    console.log(`Tipo de jogo: ${tipoJogo}`);
    console.log(`Etapa do jogo: ${etapaJogo}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeIngressos}`);
    console.log('====== Valores ======')
    console.log(`Valor unitário do ingresso: U$ ${(valorTotal / quantidadeIngressos).toFixed(2)}`);
    console.log(`Valor total a pagar:U$ ${valorTotal.toFixed(2)}`);
}else {
    console.log('====== Dados da compra ======')
    console.log(`Nome: ${nome}`);
    console.log(`Tipo de jogo: ${tipoJogo}`);
    console.log(`Etapa do jogo: ${etapaJogo}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeIngressos}`);
    console.log('====== Valores ======')
    console.log(`Valor unitário do ingresso: U$ ${valorTotal / quantidadeIngressos}`);
    console.log(`Valor total a pagar: U$ ${valorTotal.toFixed(2)}`);
}