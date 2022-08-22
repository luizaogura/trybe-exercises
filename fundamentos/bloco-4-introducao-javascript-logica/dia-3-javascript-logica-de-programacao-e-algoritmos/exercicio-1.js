// Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;
let numero = 7;

for(let index = 1; index <= numero; index++){
    fatorial = fatorial * index;
}

console.log("O fatorial de " + numero + " é: " + fatorial);