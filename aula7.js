/*
var prompt = require('prompt-sync')();

let numero = prompt('Qual numero sera elevado? ');
let potencia = prompt('Elevado a qual potencia? ');
let resultado = 1;

for(let i=0; i<potencia; i++){
    resultado *= numero;
        
}
console.log(resultado);
*/

/*
var prompt = require('prompt-sync')();

let quant = Number(prompt('Qual a quantidade de CDs? '));
let media = 0;
let total = 0;

for(let i=0; i<quant; i++){
    let valor = Number(prompt('Qual é o valor de cada CDs? '));
    total = (total+valor);
}
media=((total)/quant);
console.log('O total investido é:',total);
console.log('O valor gasto em cada um é:',media);
*/

/*
var prompt = require('prompt-sync')();

let quant = Number(prompt('Qual a quantidade de CDs? '));
let vetor = Array(quant);
let media = 0;
let total = 0;

for(let i=0; i<vetor.length; i++){
    vetor[i] = Number(prompt('Qual é o valor de cada CDs? '));
    total = (total+vetor[i]);
}
media=((total)/vetor.length);
console.log('O total investido é:',total);
console.log('O valor gasto em cada um é:',media);
*/

var prompt = require('prompt-sync')();

let temperatura = Number(prompt('Qual a quantidade de tempos medidos? '));
let vetor = Array(temperatura);
let media = 0;
let total = 0;


for(let i=0; i<vetor.length; i++){
    vetor[i] = Number(prompt('Quais as temperaturas? '));
    total = (total+vetor[i]);
}
let maior = vetor[0];
let menor = vetor[0];
for(let j=0; j<vetor.length; j++){
    if(vetor[j]> maior){
        maior = vetor[j];
    }
    if(vetor[j]< menor){
        menor = vetor[j];
}
}
media=((total)/vetor.length);

console.log(`temperatura maior: ${maior}` );
console.log(`temperatura menor: ${menor}` );
console.log(`media das temperaturas: ${media}` );
