/*var prompt = require('prompt-sync')();


let vetorCod = [100,101,102,103,104,105];
let vetorPreco = [1.20,1.30,1.50,1.20,1.30,1.00];
let i = 0;
let quant = 0;
let total = 0;
let valorTotal = 0;


do {
    vetorCod [i]= Number(prompt('Informe o codigo do produto: '));
    if(vetorCod[i] != 999){
        quant = Number(prompt('Informe a quantidade que deseja: '));  
        total = (quant*vetorPreco[i]); 
        console.log(total);
        console.log(vetorPreco);
        valorTotal = (valorTotal+total);
    }
        
    i++;
} 
while (vetorCod[i-1] != 999);



console.log(`Cod: ${vetorCod[i]}`, `Quantidade: ${quant}`, `Valor: ${total}`);
valorTotal =+ Number(prompt(`Valor total: ${valorTotal}`));*/

var prompt = require('prompt-sync')(); 

var i = 0;
var cardapio = { 100: 1.20, 101: 1.30, 102: 1.50, 103: 1.20, 104: 1.30, 105: 1.00 }; 
var totalPedido = 0; 


while (true) { 
    var cod = Number(prompt('Digite o código desejado ou digite 999 para encerrar o pedido: ')); 
    if (cod === 999){ 
        break; 
    } 
    if (cod in cardapio){ 
        var quant = Number(prompt('Digite a quantidade desejada: ')); 
        var precoItem = cardapio[cod];
        var valorItem = precoItem * quant; 
        i++;
    totalPedido += valorItem; 
} 

    else{ 
        console.log('O código é inválido. Tente novamente.'); 
    } 
        } 

    console.log(`Valor a ser pago pelo item: R$ ${valorItem}`); 
    console.log(`Total geral a ser pago: R$ ${totalPedido}`); 

