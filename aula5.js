
const vetor = [1,3,5,6,2,4,8,9,20,14,40];
let maior = vetor[1];
let posição1 = vetor[1];

let menor = vetor[1];
let posição2 = vetor[1];


for(let i=0; i<vetor.length; i++){
    for(let j=0; j<vetor.length; j++){
    if(vetor[i]>maior){
        maior = vetor[i];
        posição1 = i;
    }
    if(vetor[j]<menor){
        menor = vetor[j];
        posição2 = j;
}
}
}
        console.log('o maior valor é', maior, 'e esta na posição', posição1);
        console.log('o menor valor é', menor, 'e esta na posição', posição2);
    
/*
const vetor = [3,5,6,2,4,8,9,14];
let mediaVetor = 0;
let mediaFinal = 0;  
for(let i=0; i<vetor.length; i++){
    mediaVetor=(mediaVetor+vetor[i]);
    mediaFinal=(mediaVetor/vetor.length);
    }
console.log(mediaFinal);
*/