let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let indice = 0; indice < numbers.length; indice++){
    soma = soma + numbers[indice];
    console.log(soma);
}

console.log("Soma final:", soma);