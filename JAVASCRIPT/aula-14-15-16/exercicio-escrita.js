// Exercícios de escrita de código

/*
    ERERCICIO 1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
    `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

// const idadeUsuario = Number(prompt('Qual é a sua idade ?'));

const usuarioPodeDirigir = (idade) => {
    if (idade >= 18) {
        return `Idade: ${idade} - Você pode dirigir.`;
    } else {
        return `Idade: ${idade} - Você não pode dirigir.`;
    }
}

// const resultadoIdadeUsuario = usuarioPodeDirigir(idadeUsuario)
// console.log(resultadoIdadeUsuario);

/*
    EXERCICIO 3: Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

// const turnoAluno = prompt('Qual é o seu turno de estudo ?').toUpperCase();

const verificaTurnoAluno = (turno) => {
    if (turno === 'M') {
        return 'Bom Dia!';
    } else if (turno === 'V') {
        return 'Boa Tarde!';
    } else if (turno === 'N') {
        return 'Boa Noite!';
    } else {
        return 'Turno inválido';
    }
}

// const resultadoTurno = verificaTurnoAluno(turnoAluno);
// console.log('Resultado:', resultadoTurno)

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// Usando Switch

// const turnoAlunoSwitch = String(prompt('Qual é o seu turno de estudo ?')).toUpperCase();

const verificaTurnoAlunoSwith = (turno) => {

    let mensagem;

    switch (turno) {
        case "M":
            mensagem = 'Bom Dia!'
            break;
        case "V":
            mensagem = 'Boa Tarde!'
            break;
        case "N":
            mensagem = 'Boa Noite!'
            break;
        default:
            mensagem = 'Turno inválido'
            break;
    }

    return mensagem;
}

// const resultadoTurnoSwitch = verificaTurnoAlunoSwith(turnoAlunoSwitch);
// console.log('Resultado:', resultadoTurnoSwitch)


/*
    EXERCICIO 4 - Considere a situação: 
    você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
    e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
    e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
    Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

// const generoFilme = String(prompt('Qual é o gênero do filme que vocês vão assistir ?')).trim().toUpperCase();
// const precoIngresso = parseFloat(prompt('Qual é o preço do ingresso ?'));

const verificaAssistirFilme = (genero, preco) => {

    // console.log(genero, preco)

    if (genero === 'FANTASIA' && preco < 15) {
        return 'Bom filme!'
    } else {
        return 'Escolha outro filme :('
    }
}


// const resultadoFilme = verificaAssistirFilme(generoFilme, precoIngresso);
// console.log(resultadoFilme);

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