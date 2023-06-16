/*
const numero = 95;
if(numero >= 0 && numero <= 25){
    console.log('valor de entrada:', numero, 'intervalo [0,25]');
}
else if(numero >= 25 && numero <= 50){
    console.log('valor de entrada:', numero, 'intervalo [25,50]');
} 
else if(numero >= 50 && numero <= 75){
    console.log('valor de entrada:', numero, 'intervalo [50,75]');
} 
else if(numero >= 75 && numero <= 100){
    console.log('valor de entrada:', numero, 'intervalo [75,100]');
}
*/


/*
const ddd = 51;
switch (ddd){
    case 61:
        console.log("Brasilia");
        break;
    case 71:
        console.log("Salvador");
        break;
    case 11:
        console.log("São Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 32:
        console.log("Juiz de fora");
        break;
    case 19:
        console.log("Campinas");
        break;
    case 27:
        console.log("Vitoria");
        break;
    case 31:
        console.log("Belo Horizonte");
        break;                  
    default:
        console.log("ddd inexistente"); 
 
}
*/

/*
const familia = ['pai', 'mae', 'filho']

console.log(familia[0]);   //posição lista
console.log(familia.length);   //tamanho lista
*/

/*
for(let i=0; i <5; i++){
    console.log('estou aprendendo', i);
}
*/

/*
for(let i=0; i <=10; i++){
if(i %2 == 0){
    console.log('numero par', i);
}
else {
    console.log('numero impar', i);
}
}
*/

/*
let soma = 0;
for(let i=0; i <=10; i++){
    if(i %3 == 0){
        soma = (soma+i);
    }
    else if(i %5 == 0){
        soma = (soma+i);  // soma += i
    }
    }
    console.log(soma);
*/

let soma = 0;   
for(let i=0; i <=10; i++){
    if(i %3 == 0 || i %5 == 0){
        soma = (soma+i);
    }
}
console.log(soma);

