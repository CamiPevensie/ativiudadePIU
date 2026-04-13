// Q2 – Escreva um programa Javascript que gere a tabuada de multiplicação de um valor pré-definido n.

let numero = 5

for(let contador=1; contador <=10; contador++){ //essa belezinha aqui faz com que o contador rode de 1 a 10
    console.log(`${numero} x ${contador} = ${numero*contador}`) //a tabuada é feita aqui, onde multiplicamos o contador com o numero escolhido
    // pode ser feito tanto da forma de cima (mais 'bonitinha' e moderna) quanto assim: console.log(numero + " x " + contador + " = " + (numero * contador));
}