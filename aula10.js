var prompt = require('prompt-sync')();

var cardapio = {100: 1.20,  101: 1.30,  102: 1.50,  103: 1.20,  104: 1.30,  105: 1.00};
var totalPedido = 0;
var itensComprados = [];

while (true) {
  var codigo = Number(prompt('Digite o código desejado ou digite 999 para encerrar o pedido: '));

  if (codigo === 999) {
    break;
  }

  switch (codigo) {
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
      var quantidade;
      do{
        quantidade = parseInt(prompt('Digite a quantidade desejada: '));
        if (isNaN(quantidade)) {
          console.log('A quantidade deve ser um número. Tente novamente.');
        }
      } while (isNaN(quantidade));

      var precoItem = cardapio[codigo];
      var valorItem = precoItem * quantidade;
      totalPedido += valorItem;
      console.log('Cod:', codigo, 'Quantidade:', quantidade, 'valor por item:', valorItem.toFixed(2));

      var itemIgual = itensComprados.find(function(item){
        return item.codigo === codigo;
      });

      if (itemIgual) {
        itemIgual.quantidade += quantidade;
        itemIgual.valorItem += valorItem;

      } else {
      var item = {
        codigo: codigo,
        quantidade: quantidade,
        valorItem: valorItem
      }
      itensComprados.push(item);};
      break;

    default:
      console.log('O código é inválido. Tente novamente.');
      break;
  }
}

console.log('Itens comprados:');
for (var j = 0; j<itensComprados.length; j++) {
console.log('Cod:', itensComprados[j].codigo, 
'Quantidade:', itensComprados[j].quantidade, 
'Valor:', itensComprados[j].valorItem);
}

console.log('Valor total do pedido:', totalPedido.toFixed(2));      