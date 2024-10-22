
// Trabalho Final - Abrigos

/*  Olá! Você foi contratado para desenvolver um programa em Javascript que ajude a população em situação de rua a encontrar abrigos temporários em dias frios. 
	O programa deve utilizar o comando "prompt" para receber dados de entrada dos usuários.

	O programa deve permitir que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. Para isso, deve ser criado um banco de dados 
	com informações dos abrigos disponíveis no estado, como nome, endereço, cidade, telefone e capacidade de lotação.

	O programa deve ter um menu com as seguintes opções:

	O programa deve ter um menu com as seguintes opções:

		===== ABRIGOS TEMPORÁRIOS =====
		1. Cadastrar abrigo
		2. Listar abrigos
		3. Procurar abrigo
		4. Sair
		Escolha uma opção:

	Ao selecionar uma opção deve ser chamada uma função que execute a respectiva ação, conforme detalhamento abaixo:

	**1. Cadastro de Abrigo:** essa opção permite cadastrar um novo abrigo no sistema. O programa deve solicitar o nome, endereço, 
	telefone e capacidade de lotação do abrigo. Os dados devem ser armazenados em um objeto e este objeto deve ser incluído em um `array` de abrigos.

	**2. Listar Abrigos:** essa opção lista todos os abrigos cadastrados no sistema, mostrando seus códigos, nomes, endereços, 
	telefones e capacidade de lotação. O código é sempre a posição do objeto no `array`.

	--------------------
	LISTAGEM DE ABRIGOS:
	--------------------
	CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
	---------------------------------------------------------------------------------------------------------
	001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
	002  | Abrigo Esperança     | Rua da Solidariedade, 321, Bairro  |  (11) 9876-5432  |     30  | São Leopoldo
	003  | Casa dos Amigos      | Av. da Fraternidade, 456, Centro   |  (11) 5555-4444  |     25  | Novo Hamburgo
	004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
	005  | Casa dos Anjos       | Av. da Paz, 159, Centro            |  (11) 3333-2222  |     15  | Porto Alegre
	---------------------------------------------------------------------------------------------------------

	**3. Procurar Abrigo:** essa opção permite que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. 
	O programa deve perguntar ao usuário a sua cidade e mostrar todos os abrigos cadastrados naquela cidade, com suas informações completas, 
	além de informar a disponibilidade de vagas.

	Exemplo:

	Qual cidade você está?
	Canoas

	--------------------
	LISTAGEM DE ABRIGOS:
	--------------------
	CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
	---------------------------------------------------------------------------------------------------------
	001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
	004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
	---------------------------------------------------------------------------------------------------------

   **4 Sair: o programa deve encerrar seu funcionamento.
*/


// Definições básicas
let continuar = true
let abrigos = []
let abrigosEncontrados = []

// Função para cadastro
function cadastrar() {
	console.log("Função de cadastro")

	let nomeAbrigo = String(prompt("Digite o nome do abrigo"));
	let endereco = String(prompt("Digite o endereço do abrigo"));
	let telefone = String(prompt("Digite o telefone do abrigo"));
	let capacidade = Number(prompt("Digite a capacidade do abrigo"));
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

// Função para buscar
function buscar() {
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
	pergunta += "1. Cadastrar abrigo\n"
	pergunta += "2. Listar abrigos\n"
	pergunta += "3. Procurar abrigo\n"
	pergunta += "4. Sair"

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
			buscar()
			break
		case 4:
			sair()
			break
	}
}

