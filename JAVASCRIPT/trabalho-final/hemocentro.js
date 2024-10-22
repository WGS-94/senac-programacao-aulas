
// Trabalho Final - Hemocentro

/*
    Olá! Você foi contratado para desenvolver um sistema de cadastro de doadores de sangue para o Hemocentro da sua cidade, utilizando a linguagem JavaScript 
    e a função `prompt` ou `readline-sync` para a entrada de dados. O programa deve permitir o cadastro de doadores e deve conter as seguintes informações: 
    nome, idade, peso, tipo sanguíneo e data da última doação.

    Ao acessar o sistema, o usuário deve ser apresentado a um menu com as seguintes opções:

    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:

    Ao selecionar uma opção, deve ser chamada uma função que execute a respectiva ação, conforme detalhamento abaixo:

    **1. Cadastrar doador:** essa opção permite cadastrar um novo doador no sistema. O programa deve solicitar o nome, a idade, 
    o peso, o tipo sanguíneo e a data da última doação do doador. O sistema deve armazenar essas informações em um objeto e esse objeto em um `array` de doadores.

    **2. Listar doadores:** essa opção lista todos os doadores cadastrados no sistema, mostrando suas informações completas.

    Exemplo:

    --------------------
    LISTAGEM DE DOADORES:
    --------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    João da Silva    |  25   |  70  |      AB-       |   01/01/2022  
    Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
    José Almeida     |  45   |  80  |      O+        |   10/01/2022  
    Ana Oliveira     |  27   |  58  |      B-        |   22/04/2022  
    Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
    -----------------------------------------------------------------

    3. Buscar doador por tipo sanguíneo: essa opção permite buscar doadores pelo seu tipo sanguíneo. O programa deve solicitar o 
    tipo sanguíneo desejado e listar todos os doadores com o mesmo tipo sanguíneo.

    Digite o tipo sanguíneo desejado: A+

    ------------------------
    RESULTADO DA BUSCA:
    ------------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
    Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
    -----------------------------------------------------------------

    Digite o tipo sanguíneo desejado: A+

    ------------------------
    RESULTADO DA BUSCA:
    ------------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
    Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
    -----------------------------------------------------------------

    **4. Buscar doador por data da última doação:** essa opção permite buscar doadores que fizeram a última doação antes de 
    uma determinada data. O programa deve solicitar a data desejada e listar todos os doadores que fizeram a última doação antes dessa data.

    Exemplo:

    Digite a data desejada (dd/mm/aaaa): 01/03/2022

    ------------------------
    RESULTADO DA BUSCA:
    ------------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    Calito Teves     |  35   |  65  |      A+        |   01/03/2022  
    Carla Maria      |  30   |  75  |      A-        |   01/03/2022  
    -----------------------------------------------------------------

    ** 5 Sair: o programa deve encerrar.

*/

// RESOLUÇÃO 


// Definições básicas
let continuar = true
let abrigos = []
let abrigosEncontrados = []

// Função para cadastro
function cadastrar() {
	console.log("Função de cadastro")

	let nomeDoador = String(prompt("Digite o nome do doador"));
	let idadeDoador = Number(prompt("Digite a idade do doador"));
	let peso = parseFloat(prompt("Digite o peso do doador"));
	let tipo = String(prompt("Digite o telefone do abrigo"));
	let cidade = String(prompt("Digite a cidade do abrigo"));

	let novoAbrigo = {
		nomeAbrigo,
		endereco,
		telefone,
		capacidade,
		cidade
	};

	abrigos.push(novoAbrigo)
	console.log('Abrigo: ', JSON.stringify(novoAbrigo))
}


// Função para listar
function listar() {
	console.log("Função de lista")
	console.log("Codigo | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n");
	console.log("---------------------------------------------------\n");

	for (let i = 0; i < abrigos.length; i++) {
		abrigos[i].codigo = i + 1;  // Adicionando o código 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3, etc.

		console.log(
			`00${abrigos[i].codigo} | ${abrigos[i].nomeAbrigo} | ${abrigos[i].endereco} | ${abrigos[i].telefone} | ${abrigos[i].capacidade} | ${abrigos[i].cidade}`
		);
	}
}

// Função para buscar doador por tipo sanguíneos
function buscarPorTipoSanquineo() {
	console.log("Função de busca")

	const cidade = String(prompt(" Qual cidade você está?"))

	abrigosEncontrados = []; // Limpar a lista de abrigos encontrados

	for (let i = 0; i < abrigos.length; i++) {
		if (abrigos[i].cidade.toLocaleLowerCase() === cidade.toLocaleLowerCase()) {
			abrigosEncontrados.push(abrigos[i]); // Adiciona o abrigo encontrado ao array
		}
	}

	console.log("Codigo | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n");
	console.log("---------------------------------------------------\n");

	for (let i = 0; i < abrigosEncontrados.length; i++) {
		console.log(
			`00${i + 1} | ${abrigosEncontrados[i].nomeAbrigo} | ${abrigosEncontrados[i].endereco} | ${abrigosEncontrados[i].telefone} | ${abrigosEncontrados[i].capacidade} | ${abrigosEncontrados[i].cidade}`
		);
	}

}

// Função para buscar doador por data da última doação
function buscarPorUltimaData() {
	console.log("Função de busca")

	const cidade = String(prompt(" Qual cidade você está?"))

	abrigosEncontrados = []; // Limpar a lista de abrigos encontrados

	for (let i = 0; i < abrigos.length; i++) {
		if (abrigos[i].cidade.toLocaleLowerCase() === cidade.toLocaleLowerCase()) {
			abrigosEncontrados.push(abrigos[i]); // Adiciona o abrigo encontrado ao array
		}
	}

	console.log("Codigo | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n");
	console.log("---------------------------------------------------\n");

	for (let i = 0; i < abrigosEncontrados.length; i++) {
		console.log(
			`00${i + 1} | ${abrigosEncontrados[i].nomeAbrigo} | ${abrigosEncontrados[i].endereco} | ${abrigosEncontrados[i].telefone} | ${abrigosEncontrados[i].capacidade} | ${abrigosEncontrados[i].cidade}`
		);
	}

}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta = "ABRIGOS TEMPORÁRIOS\n"
	pergunta += "-------------------------\n"
	pergunta += "Escolha uma opção:\n"
	pergunta += "1. Cadastrar doador\n"
	pergunta += "2. Listar doadores\n"
	pergunta += "3. Buscar doador por tipo sanguíneo\n"
    pergunta += "4. Buscar doador por data da última doação\n"
	pergunta += "5. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscarPorTipoSanquineo()
			break
        case 4:
            buscarPorUltimaData()
            break
		case 5:
			sair()
			break
	}
}

