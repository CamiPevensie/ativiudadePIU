// Q4 – Escreva um programa Javascript que cadastre os seguintes dados de uma pessoa: nome (string), idade (int), já foi à Disney (booleano). 
// Os dados devem ser representados como um objeto javascript (JSON, semelhante aos dicionários Python) 
// usando a sintaxe de pares chave-valor e devem ser exibidos usando a notação de acesso a atributos de objeto (variavel.atributo).
// Ex.:
// Alex
// 10
// false

//aí me quebra kkkkkk, mas bora lá
//tem que instalar o seguinte aparentemente: npm install prompt-sync

const prompt = require('prompt-sync')(); // isso aqui faz o input no cmd
let nome = prompt('Escreva seu nome, sinhô(ou sinhora): ') //aqui o bonito ou bonita escreve o nome no cmd
let idade = Number(prompt('Agora ponha sua idade: ')) // o number serve pra a string virar número int
let disney = prompt('Só pra eu saber mesmo cara, tu já foi pra a Disney (true/false)?? ')
disney = (disney.toLowerCase() === 'true'); // transforma o que o usuario respondeu em booleano; também poderia ser disney = (disney === "true"), mas não é tão seguro quanto o que eu escrevi

let dados_pessoa = { //aqui criamos o grande dicionário, onde pomos as informações que, nesse caso, são da pessoa
    nome: nome,
    idade: idade,
    disney: disney
}

console.log(dados_pessoa.nome) //mostra só uma informação do dicionário, nesse caso o nome
console.log(dados_pessoa.idade) 
console.log(dados_pessoa.disney) 