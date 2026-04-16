// Q5 – Escreva um programa Javascript que cadastre os mesmos dados de uma pessoa como na questão 
// Q4: nome (string), idade (int), já foi à Disney (booleano). 
// Os dados agora devem ser representados como uma matriz 3x2 (array de arrays), onde cada linha é uma lista com nome e valor do atributo. 
// Tanto as chaves quanto os dados devem ser exibidos dentro de um laço for... in.
// Ex.:
// nome Teste
// idade 10
// ja_foi_a_Disney false

const prompt = require('prompt-sync')(); 
let nome = prompt('Escreva seu nome, sinhô(ou sinhora): ') 
let idade = Number(prompt('Agora ponha sua idade: ')) 
let disney = prompt('Só pra eu saber mesmo cara, tu já foi pra a Disney (true/false)?? ')
disney = (disney.toLowerCase() === 'true'); 

let matriz_dados_pessoa = [ //aqui está a matriz com 3 linhas e 2 colunas
    ['nome ', nome],
    ['idade ', idade],
    ['ja_foi_a_Disney ',disney]
]

for (let linha of matriz_dados_pessoa){ //o for in não funciona, pq ele serve para mostrar posições, e o for of para mostrar valores
    console.log(linha[0],linha[1]) //linha 0 é a primeira coluna e linha 1 é a segunda da linha da matriz
}
