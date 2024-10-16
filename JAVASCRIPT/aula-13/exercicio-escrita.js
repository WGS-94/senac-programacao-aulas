
// 1 - Resolva os passos a seguir: 

/*
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
    Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
*/

// Objeto:
const pessoa = {
    nome: "Paulo", 
    apelidos: ["Paulinho", "Paulão", "Paizinho"]
 }
 
 // Saída
 console.log(`Eu sou ${pessoa["nome"]}, mas pode me chamar de: ${pessoa["apelidos"][0]}, ${pessoa["apelidos"][1]} ou ${pessoa["apelidos"][2]}`)

 /*
    b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
    Depois, chame a função feita no item anterior passando como argumento o novo objeto
 */

// Array antigo + novo
const novaPessoaOld = {
    ...pessoa,
    novosApelidos: ["Paul G", "Proprio Paulo", "Paulucho"]
}

// Array novo
const novaPessoaNew = {
    ...pessoa,
    apelidos: ["Paul G", "Proprio Paulo", "Paulucho"]
}

// Função
const dadosPessoa = (params) => {
    return params
}

console.log("Resultado 1: ", dadosPessoa(novaPessoaOld))
console.log("Resultado 2: ", dadosPessoa(novaPessoaNew))



// 2 - Resolva os passos a seguir: 

/*
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
*/


const  pessoa1 = {
    nome: "Paulo",
    idade: 30,
    profissao: "Desenvolvedor"
}


const  pessoa2 = {
    nome: "João",
    idade: 25,
    profissao: "Arquiteto"
}

const userInfo = (obj) => {
    let array = []

    // way one
    array.push(obj["nome"])
    array.push(obj["idade"])
    array.push(obj["profissao"])

    // way two
    const novoArray = [obj["nome"], obj["idade"], obj["profissao"]]

    console.log(novoArray)

    // way three
    const novoArray2 = [...obj]

    // console.log(novoArray2)

    // way four

    const novoArray3 = {
        nome: obj["nome"],
        idade: obj["idade"],
        profissao: obj["profissao"]
    }

    const splitArray = novoArray3.split(",")

    console.log(splitArray)


    return array
}

userInfo(pessoa1)

// 3 - Resolva os passos a seguir: 

/*
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
        nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
        Invoque essa função passando os três objetos criados. 
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
*/