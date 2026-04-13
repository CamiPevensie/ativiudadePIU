// Q3 – Escreva um programa Javascript que conta quantos números são pares e quantos são ímpares, dado um array de números inteiros. 
// Considere que zero é par. Use a construção for... of.

let numeros = [0,1,2,3,4,5,6,7,8,9,10];
let pares = 0;
let impares = 0;

for (let numero of numeros){ // faz uma passagem em cada numero da lista
    if (numero%2==0){
        console.log(`O número ${numero} é par`); 
        pares++; //esse troço parece estranho, mas ele soma mais um a cada rodada que o par está aqui (mesma coisa com o ímpar)
    }else{
        console.log(`O número ${numero} é ímpar`);
        impares++;
    }
}

//aí embaixo são só os prints mesmo
console.log('E vamos para a contagem da listinha!');
console.log(`Total de pares: ${pares}`);
console.log(`Total de ímpares: ${impares}`);