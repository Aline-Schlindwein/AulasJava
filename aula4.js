/*
let valorDeEntrada = 20;

for(let i=2; i<=valorDeEntrada; i++){
    let ehUmNumeroPrimo = true;
    for(let j=2; j<i; j++){
     if(i%j==0){
        ehUmNumeroPrimo = false;
        break;
}
    }
    if(ehUmNumeroPrimo){
        console.log(i)  
    }
}
*/

let somaP = 0;
let somaI = 0;
const vetor = [3,5,6,2,4,8,9,14];

for(i=0; i<=vetor.length; i++){
    if(vetor[i] %2 == 0){
        somaP = (somaP+vetor[i])
}

    if(vetor[i] %2 == 1){
       somaI = (somaI+vetor[i]); 
    }
}
console.log(somaP);
console.log(somaI);

