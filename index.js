/*Aviso*/

document.addEventListener('DOMContentLoaded', function() 
{
    setTimeout(function() 
    {
    alert('Are you enjoying it? If so, please follow me on GitHub!');
    }, 20000); 
});


/*Chamando Variaveis*/

let time = document.querySelector('.clock')
let minutes = 25;
let seconds = 0;
let correndo = false;
let tempo;

//Criando a logica do site

function start()
{
 document.body.style.backgroundColor = "#A63B32";
 if(correndo)
 {
     return;
 }
 correndo = true;

  tempo = setInterval(function() 
  {
    if(seconds === 0)
    {
      if(minutes === 0)
       {
         clearInterval(tempo);
       }
       else
       {
         minutes--
         seconds = 59;
       }
    }
    else 
    {
     seconds--;
    }
    time.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  }, 1000);     
}

function reset()
{
 document.body.style.backgroundColor =   "aquamarine"
 clearInterval(tempo); 
 time.innerHTML = '25:00';
  minutes = 25;
  seconds = 0;
  correndo = false;
 }

function stoped(){
 document.body.style.backgroundColor = "#E7F294";
 clearInterval(tempo); 
}