
/*Number 1*/
let x = 60;
let y = 30;
function multip(x, y){
  const z = x * y
  console.log(z);
}
multip(x, y)
/*Number 2*/
let hour = 11;


if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.');
}else if(hour > 10 || hour < 18){
  alert( 'Офис открыт.' );
}

/* Прекращение обработчика события*/


function fun1() {
  var button;
  var chbox;
  chbox = document.getElementById('one');
  button = document.getElementById('btn');
    if (chbox.checked) {
      alert('Выбран');
     button.addEventListener('btn', function(event){
     event.stopPropagation(); 
      
    })}
    else { 
      
      alert('Не выбран');
     }
    
  }
  /*Обработчик фокуса инпута*/
  Login.onmouseover = Login.onmouseout = handler;
  function handler(event) {
      function str(el) {
      if (!el) return "null"
      return el.className || el.tagName;
    }
    log.value += event.type + ':  ' +
      'target=' + str(event.target) +
      ',  relatedTarget=' + str(event.relatedTarget) + "\n";
    log.scrollTop = log.scrollHeight;
  
    if (event.type == 'mouseover') {
      event.target.style.background = 'pink'
    }
    if (event.type == 'mouseout') {
      event.target.style.background = ''
    }
  }
  PassInp.addEventListener("focusin", () => PassInp.classList.add('focused'));
  PassInp.addEventListener("focusout", () => PassInp.classList.remove('focused'));

  /*обработчик события алерт*/

 
  document.querySelector("btn").onclick = function(){
    alert("Вы нажали на кнопку");
  }

 try{
   document.querySelector('.Mih').innerHTML = a;
   console.log(a);
   t1();
 }
 catch{
   console.log('Кусь');
 }