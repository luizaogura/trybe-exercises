//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];    
let maiorPalavra = array[0];

for(let index = 0; index < array.length; index++){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}

for(let index = 0; index < array.length; index++){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}

    console.log("A menor palavra é: " + menorPalavra);
    console.log("A maior palavra é: " + maiorPalavra);

