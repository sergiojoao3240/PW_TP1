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


/* modais*/
const desafio = document.querySelector('.desafio');
var modalD = document.getElementById("Mdesafio");

const aval = document.querySelector('.aval');
var modalA = document.getElementById("Maval");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

/*modal desafio*/
desafio.addEventListener('click', function(){
   modalD.style.display = "block";
});

/*modal avaliacao*/
aval.addEventListener('click', function(){
   modalA.style.display = "block";
});

span.onclick = function() {
   modalD.style.display = "none";
}

span1.onclick = function() {
   modalA.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalD || event.target == modalA)  {
    modalD.style.display = "none";
    modalA.style.display = "none";
  }
}




