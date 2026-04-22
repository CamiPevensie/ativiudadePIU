// Q7 – Reescreva o programa da questão Q2 de maneira que ele valide se o tipo da variável n é inteiro. 
// Caso não seja, lance uma exceção (use throw).

let numero = 5.5

if (!Number.isInteger(numero)) { // confere se oo número é inteiro
    throw new Error(`${numero} não é um inteiro, brotherzinho`) //se o número não for inteiro aparece isso
}


for(let contador=1; contador <=10; contador++){ //essa belezinha aqui faz com que o contador rode de 1 a 10
    console.log(`${numero} x ${contador} = ${numero*contador}`) //a tabuada é feita aqui, onde multiplicamos o contador com o numero escolhido
    // pode ser feito tanto da forma de cima (mais 'bonitinha' e moderna) quanto assim: console.log(numero + " x " + contador + " = " + (numero * contador));
}