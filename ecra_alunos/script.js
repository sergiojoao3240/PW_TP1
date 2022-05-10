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


 /*pesquisar por aluno*/
 var pesquisa = document.getElementById("pesqAluno");

 pesquisa.onkeyup = function(){

     var aluno = document.querySelectorAll('.alunos');
     var valor = this.value.toLowerCase();

     if(this.value != "")
     {
         for (var i = 0; i < aluno.length; i++)
         {
             aluno[i].style.display = "block";

             if (aluno[i].getAttribute("data-nome").toLowerCase().indexOf(valor) > -1) {
                 aluno[i].style.display = "block"
             }else {
               aluno[i].style.display = "none"
             }
         }
     }
     else
     {
         for (var i = 0; i < aluno.length; i++)  {
            aluno[i].style.display = "block"
         }
     }
 };

 /*btn message alert*/
 const btn = document.querySelector('.buttons');

 btn.addEventListener('click', function(){
   alert("Página em desenvolvimento!");
 });
