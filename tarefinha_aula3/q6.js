// Q6 – Reescreva o programa da questão Q1 de maneira que ele valide se o tipo da variável n é numérico (inteiro ou real). 
// Caso não seja, exiba uma mensagem informando o tipo inválido.

let numero='q'
if (typeof numero !== 'number') { // o typeof volta com uma string que nos informa solenemente o tipo da variável, depois estamos conferindo se é diferente de um número
    console.log(`Aí tu me quebra, irmão, ${typeof numero} não é nem um número, é inválido isso aí`) 
}else if(Number.isNaN(numero)){ // Confere se o numero é NaN,ou seja, não é um número válido
    console.log('isso é um NaN parça, ou seja, inválido')
}else{
    if(numero>0){ //confere se o número é maior que zero
        console.log('positivo') // printzinho legal
    }else if(numero<0){ // confere se o número é menor que zero
        console.log('negativo')
    }else{ //se não for nem maio nem menor só pode ser zero, né cumpadi?
        console.log('zero')
    }
}