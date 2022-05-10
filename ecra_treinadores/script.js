/*remover treinadores*/
var cross = document.querySelectorAll('.delete');

for (var i = 0 ; i < cross.length; i++) {
    cross[i].addEventListener('click', function () {
        var div = this.parentNode.parentNode;
        div.remove();
    });
}

/*pesquisar por treinador*/
var pesquisa = document.getElementById("pesqTreinador");

pesquisa.onkeyup = function(){

    var treinador = document.querySelectorAll('.treinadores');
    var valor = this.value.toLowerCase();

    if(this.value != "")
    {
        for (var i = 0; i < treinador.length; i++)
        {
            treinador[i].style.display = "block";

            if (treinador[i].getAttribute("data-nome").toLowerCase().indexOf(valor) > -1) {
                treinador[i].style.display = "block"
            }else {
              treinador[i].style.display = "none"
            }
        }
    }
    else
    {
        for (var i = 0; i < treinador.length; i++)  {
           treinador[i].style.display = "block"
        }
    }
};



/*notificacoes*/
const bell = document.querySelector('.bell');

bell.addEventListener('click', function() {
   var message = document.querySelector(".message");

   if(message.style.display == "none"){
        message.style.display =  "block";
   }else{
    message.style.display =  "none";
   }
});

