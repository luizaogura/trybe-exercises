let num = 0;
let primos = [];

for(let index = 2; index <= 50; index++){
    num = index;
    
    if((num % 1 == 0) && (num % num == 0)){
        primos.push(num);
    }
}
    console.log(primos);

