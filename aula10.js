var prompt = require('prompt-sync')();


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
valorTotal =+ Number(prompt(`Valor total: ${valorTotal}`));

