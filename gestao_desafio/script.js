/*notificações*/
const bell = document.querySelector('.bell');

bell.addEventListener('click', function() {
   var message = document.querySelector(".message");

   if(message.style.display == "none"){
        message.style.display =  "block";
   }else{
    message.style.display =  "none";
   }
});


/*remover desafios*/
/*var cross = document.querySelectorAll(".delete");

for (var i = 0 ; i < cross.length; i++) {
    cross[i].addEventListener('click', function () {
        var div = this.parentNode.parentNode;
        div.remove();
    });
}*/

/*Em JQuery*/
$(document).on("click", ".delete", function(e){
    e.preventDefault();
     $(this).parent().parent().remove();
   });


/* modais*/
const desafio = document.querySelector('.btn');
var modal = document.getElementById("Mdesafio");
var span = document.getElementsByClassName("close")[0];

desafio.addEventListener('click', function(){
   modal.style.display = "block";
});

span.onclick = function() {
   modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal)  {
    modal.style.display = "none";
  }
}



/*adicionar novo desafio*/
/*var adicionar = document.querySelector('.btn.guardar');

let arrayN =[]
let arrayT =[]
let arrayO =[]
let arrayTr = []
let arrayTi =[]
let val = "";

adicionar.addEventListener('click', function(){

    var nome = document.getElementsByClassName('name');
    var tipo = document.getElementsByClassName('type');
    var objetivo = document.getElementsByClassName('objetive');
    var treinador = document.getElementsByClassName('nameT');
    var tempo = document.getElementsByClassName('timer');

    if(!nome.value )
    {
        arrayN.push(nome.value);
        arrayT.push(tipo.value);
        arrayO.push(objetivo.value);
        arrayTr.push(treinador.value);
        arrayTi.push(tempo.value);

        for(i=0; i<arrayN.length; i++){
            val += "<div class='col-md-3 col-sm-3 col-xs-4' tipoP data-tipo='"+ tipo[i].value +"'>" +
                        "<div class='card-interior'>" +
                            "<i class='bi1 bi-x-circle delete'></i>"+
                            "<div class='foto'>"+
                            " <img src='dumbell.png' class='img-responsive'>"+
                                "<div class='textos'>"+
                                    "<li class='dados'>"+ nome[i].value +"</li>"+
                                    "<p class='tipo'>"+ tipo[i].value +"</p>"+
                                    "<p class='obj'>"+ objetivo[i].value +"</p>"+
                                    "<p class='pt'><b>Treinador:</b>"+ treinador[i].value +"</p>"+
                                    "<p class='time'>"+ tempo[i].value +" horas restantes</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        }
        document.getElementById("des").innerHTML = val

        arrayN.pop(nome.value);
        arrayT.pop(tipo.value);
        arrayO.pop(objetivo.value);
        arrayTr.pop(treinador.value);
        arrayTi.pop(tempo.value);

        nome.value="";
        tipo.value="";
        objetivo.value="";
        treinador.value="";
        tempo.value="";


    }
    else{
        alert("Tem de preencher todos os campos!");
    }
});*/






var adicionar = document.querySelector('.btn.guardar');


let val = "";

adicionar.addEventListener('click', function(){

    var nome = document.getElementById('name');
    var tipo = document.getElementById('type');
    var objetivo = document.getElementById('objetive');
    var treinador = document.getElementById('nameT');
    var tempo = document.getElementById('timer');

    if(nome.value && tipo.value && objetivo.value && treinador.value && tempo.value)
    {
            val = "<div class='col-md-3 col-sm-3 col-xs-4' tipoP data-tipo='"+ tipo.value +"'>" +
                        "<div class='card-interior'>" +
                            "<i class='bi1 bi-x-circle delete'></i>"+
                            "<div class='foto'>"+
                            " <img src='dumbell.png' class='img-responsive'>"+
                                "<div class='textos'>"+
                                    "<li class='dados'>"+ nome.value +"</li>"+
                                    "<p class='tipo'>"+ tipo.value +"</p>"+
                                    "<p class='obj'>"+ objetivo.value +"</p>"+
                                    "<p class='pt'><b>Treinador: </b>"+ treinador.value +"</p>"+
                                    "<p class='time'>"+ tempo.value +" horas restantes</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";

                    document.getElementById("des").innerHTML = document.getElementById("des").innerHTML + val

    }
    else{
        alert("Tem de preencher todos os campos!");
    }


        nome.value="";
        tipo.value="";
        objetivo.value="";
        treinador.value="";
        tempo.value="";
});






/*pesquisar desafios por tipo*/
var pesquisa = document.getElementById("pesqTipo");

pesquisa.onkeyup = function(){

    var tipo = document.querySelectorAll('.tipoP');
    var valor = this.value.toLowerCase();

    if(this.value != "")
    {
        for (var i = 0; i < tipo.length; i++)
        {
            tipo[i].style.display = "block";

            if (tipo[i].getAttribute("data-tipo").toLowerCase().indexOf(valor) > -1) {
                tipo[i].style.display = "block"
            }else {
              tipo[i].style.display = "none"
            }
        }
    }
    else
    {
        for (var i = 0; i < tipo.length; i++)  {
           tipo[i].style.display = "block"
        }
    }
};
