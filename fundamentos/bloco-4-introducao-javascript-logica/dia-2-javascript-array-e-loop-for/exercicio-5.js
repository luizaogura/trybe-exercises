let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let indice = 0; indice < numbers.length; indice++){

    if(numbers[indice] > maiorNumero){
        maiorNumero = numbers[indice];
    }
}

console.log("O maior numero é:", maiorNumero);