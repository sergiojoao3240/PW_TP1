
/*notificacoes*/
const bell = document.querySelector('.bell');

bell.addEventListener('click', function() {
    var message = document.querySelector(".message");
    var display = message.style.display;
    console.log(display)

    if(display == "none" || display == ""){
        message.style.display =  "block";
    }else{
    message.style.display =  "none";
    }
});



/* modal*/
const btn_editar = document.querySelector('.btn');
var modal = document.getElementById("MEdit");
var span = document.getElementsByClassName("close")[0];

btn_editar.addEventListener('click', function(){
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




/*editar perfil*/
var editar = document.querySelector('.guardar');

let arrayN =[]
let arrayD =[]

let val = "";

editar.addEventListener('click', function(){
    var nome = document.getElementsByClassName('name');
    var desc = document.getElementsByClassName('descN');

      arrayN.push(nome.value);
      arrayD.push(desc.value);

      for(i=0; i<arrayN.length; i++){
        val += "<div class='col-sm-3 col-lg-2 text-center' id='edit'>" +
                  "<img src='image.png' class='dados'>" +
                "</div>" +
                "<div class='col-sm-6 col-lg-8'>" +
                  "<div class='textos'>" +
                    "<p class='nome'>"+ nome[i].value +"</p>"+
                    "<p class='tag'>#ginasio000</p>"+
                    "<p class='descricao text-justify'>"+ desc[i].value +"</p>"+
                  "</div>"+
                "</div>";

      document.getElementById("edit").innerHTML = val;

      arrayN.pop(nome);
      arrayD.pop(desc);
    }
});
