/*
var prompt = require('prompt-sync')();

let Caixa = Number(prompt('Quantos itens o cliente está levando? '));

let preço1 = 1.99;
let preço2 = 3.98;
let num = 0;
let num2 = 2;


console.log('1 R$ 1.99');  
console.log('2 R$ 3.98');
for(let i=3; i<=Caixa; i++){
    num=(preço1+preço2);
         preço2=(preço1+preço1);
         preço2 = num;
         num2 = num2+1
        console.log(num2,'R$', num);  
           
}
*/

/*
var prompt = require('prompt-sync')();

let vetor = [];
let produto = 0;
let total = 0;
let i = 1;
let troco = 0;
dinheiro = 0;

do {
    vetor [i]= Number(prompt(`Produto ${i}: R$ `));
    total = (total+vetor[i]);
    i++;
} 
while (vetor[i-1] != 0);
    produto =+ Number(prompt(`Valor total das compras: ${total}`));
    dinheiro =+ Number(prompt(`dinheiro: `));
    troco =  (dinheiro-total);
    console.log('O troco é: ', troco);
*/


/*
var prompt = require('prompt-sync')();
let i = 0;
let total = 0;

let saltos = Number(prompt('Quantos saltos foram feitos? '));
let vetor = Array(saltos);

for(let i=0; i<vetor.length; i++){
    vetor[i] = Number(prompt('Quais metros foram tirados? '));
    total = (vetor[i]+total);
}
let melhorSalto = vetor[0];
let piorSalto = vetor[0];

for(let j=0; j<vetor.length; j++){
    if(vetor[j] > melhorSalto){
        melhorSalto = vetor[j];
    }
    if(vetor[j]<piorSalto)
    piorSalto = vetor[j];
}
media = (total/vetor.length);

console.log('Melhor salto: ', melhorSalto);
console.log('Pior salto: ', piorSalto);
console.log('Media dos saltos: ', media.toFixed(2));
*/

var prompt = require('prompt-sync')();

let numeros = Number(prompt('digite tres numeros? '));
let num1 = 0;
let num2 = 0;
let num3 = 0;


    if (num1<num2 && num2<num3){
        console.log(num1, num2, num3);
    }
     else if(num1<num3 && num3<num2){
        console.log(num1, num3, num2);
    }
    else if(num2<num1 && num1<num3){
        console.log(num2, num1, num3);
    } 
    else if(num2<num3 && num3<num1){
        console.log(num2, num3, num1);
    }
    else if(num3<num1 && num1<num2){
        console.log(num3, num1, num2); 
    }
    else if(num3<num2 && num2<num1){
        console.log(num3, num2, num1);
    }

   