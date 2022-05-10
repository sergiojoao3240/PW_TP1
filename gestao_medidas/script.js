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


/*adicionar parte do corpo*/
var adicionar = document.querySelector('.btn.add');

let val = "";

adicionar.addEventListener('click', function(){
    var texto = document.getElementById('idParte');

    if(!texto.value.trim()){
        alert("Tem de preencher o campo!");
        return false;
    }
    else{
        val = "<div class='col-sm-4 col-xs-12'>" +
            "<div class='parte'>" +
            "<i class='bi bi-x-circle delete'></i>" +
                "<p>"+ texto.value +"</p>"+
            "</div> " +
        "</div>";
    }

    document.getElementById("piece").innerHTML = document.getElementById("piece").innerHTML + val
    texto.value = "";

    /*else{
        array.push(texto.value);
        for(i=0; i<array.length; i++){
            val += "<div class='col-sm-4 col-xs-12'>" +
                        "<div class='parte'>" +
                        "<i class='bi bi-x-circle delete'></i>" +
                            "<p>"+ array[i]+"</p>"+
                        "</div> " +
                    "</div>";
        }*/

    //}
});


/*remover parte do corpo*/

/*function eliminar(){
    var cross = document.querySelectorAll('.delete');

    for (var i = 0 ; i < cross.length; i++) {
        cross[i].addEventListener('click', function () {
            var div = this.parentNode.parentNode;
            div.remove();
        });
    };
}
eliminar();*/

/*Em JQuery*/
$(document).on("click", ".delete", function(e){
 e.preventDefault();
  $(this).parent().parent().remove();
});
