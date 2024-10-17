// Exercícios de escrita de código

/*
    ERERCICIO 1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
    `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

const idadeUsuario = Number(prompt('Qual é a sua idade ?'));

const usuarioPodeDirigir = (idade) => {
    if (idade >= 18) {
        return `Idade: ${idade} - Você pode dirigir.`;
    } else {
        return `Idade: ${idade} - Você não pode dirigir.`;
    }
}

const resultadoIdadeUsuario = usuarioPodeDirigir(idadeUsuario)
console.log(resultadoIdadeUsuario);

/*
    EXERCICIO 3: Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

const turnoAluno = prompt('Qual é o seu turno de estudo ?').toUpperCase();

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

const resultadoTurno = verificaTurnoAluno(turnoAluno);
console.log('Resultado:', resultadoTurno)

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

const resultadoTurnoSwitch = verificaTurnoAlunoSwith(turnoAlunoSwitch);
console.log('Resultado:', resultadoTurnoSwitch)


/*
    EXERCICIO 4 - Considere a situação: 
    você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
    e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
    e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
    Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

const generoFilme = String(prompt('Qual é o gênero do filme que vocês vão assistir ?')).trim().toUpperCase();
const precoIngresso = parseFloat(prompt('Qual é o preço do ingresso ?'));

const verificaAssistirFilme = (genero, preco) => {

    // console.log(genero, preco)

    if (genero === 'FANTASIA' && preco < 15) {
        return 'Bom filme!'
    } else {
        return 'Escolha outro filme :('
    }
}


const resultadoFilme = verificaAssistirFilme(generoFilme, precoIngresso);
console.log(resultadoFilme);