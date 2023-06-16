/*
var prompt = require('prompt-sync')();


let idade = prompt('qual a sua idade? ');

if(idade>18){
    console.log('você tem acesso');
}
else{
    console.log('você não tem acesso');
}
*/

/*
let i = 0;
while(i < 10){
    console.log('oi');
    i++;
}
*/

/*
let penultimo = 0;
let ultimo = 1;
let num = 0;

console.log(penultimo);
console.log(ultimo);
for(let i=0; i<8; i++){
        num=(penultimo+ultimo);
        penultimo=ultimo;
        ultimo=num;
        console.log(num);
}
*/

/*
let penultimo = 0;
let ultimo = 1;
let num = 0;
let texto = '';

for(let i=0; i<8; i++){
        num=(penultimo+ultimo);
        penultimo=ultimo;
        ultimo=num;
        texto += num + ' ';
        
}
console.log('0 1', texto);
*/


var prompt = require('prompt-sync')();

let tabuada = prompt('Qual tabuada deseja ver? ');

let j = tabuada ;
for(let i=0; i<=10; i++){
        console.log(i, '*', j, '=', i*j );

}