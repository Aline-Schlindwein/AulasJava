/*
var prompt = require('prompt-sync')();

let vetor = [];
let codigo = 0;
let altura = 0;
let peso = 0;
let i ;
let maiorAltura = 0;


do{
vetor [i]= Number(prompt('Digite seu codigo? '));
vetor [i]= Number(prompt('Digite sua altura? '));
vetor [i]= Number(prompt('Digite seu peso? '));
maiorAltura = (vetor[i]+maiorAltura);
i++;
}
while (vetor[i-1] != 0);

maiorAltura =+ Number(prompt(`Maior altura: ${}`));
altura =+ Number(prompt(`Menor altura: ${}`));
peso =+ Number(prompt());
*/

var prompt = require('prompt-sync')();

let vetorCod = [];
let vetorAltura = [];
let vetorPeso = [];
let i = 0;
let totalAltura = 0;
let totalPeso = 0;
mediaAltura = 0;

do {
    vetorCod [i]= Number(prompt('informe seu codigo: '));
    if(vetorCod[i] != 0){
        vetorAltura [i]= Number(prompt('informe sua altura: '));
        vetorPeso [i]= Number(prompt('informe seu peso: '));
        totalAltura = (totalAltura+vetorAltura[i]);
        totalPeso = (totalPeso+vetorPeso[i]);   
    }
    mediaAltura=((totalAltura)/vetorAltura.length);
    mediaPeso=((totalPeso)/vetorPeso.length);
    i++;
} 
while (vetorCod[i-1] != 0);
let maisAlto = vetorAltura[0];
let maisBaixo = vetorAltura[0];

for(let j=0; j<vetorAltura.length; j++){
    if(vetorAltura[j] > maisAlto){
        maisAlto = vetorAltura[j];
    }
    if(vetorAltura[j]<maisBaixo)
    maisBaixo = vetorAltura[j];
}
let maisGordo = vetorPeso[0];
let maisMagro = vetorPeso[0];

for(let l=0; l<vetorPeso.length; l++){
    if(vetorPeso[l] > maisGordo){
        maisGordo = vetorPeso[l];
    }
    if(vetorPeso[l]<maisMagro)
    maisMagro = vetorPeso[l];
}
    console.log('Cliente mais alto: ', maisAlto);
    console.log('Cliente mais baixo: ', maisBaixo);
    console.log('Cliente mais gordo ', maisGordo);
    console.log('Cliente mais magro: ', maisMagro);
    altura =+ Number(prompt(`Media total das alturas: ${mediaAltura}`));
    peso =+ Number(prompt(`Media total dos pesos: ${mediaPeso}`));
   
