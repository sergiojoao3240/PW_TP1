var events = [
  {'Date': new Date(2022, 6, 7), 'Title': 'Desafio'},
  {'Date': new Date(2022, 6, 18), 'Title': 'Desafio'},
  {'Date': new Date(2022, 6, 27), 'Title': 'Avaliação'},
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

function addEvento(valor,texto){

  console.log(valor)
   valor = valor.split("-");

   var ano = parseInt(valor[0]);
   var dia = parseInt(valor[2]);
   var mes = parseInt(valor[1]);

   console.log(ano)
   console.log(dia)
   console.log(mes)

  events.push(
    {'Date': new Date(ano, mes-1, dia),'Title': texto }
  );

}
