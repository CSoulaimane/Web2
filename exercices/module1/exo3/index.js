let message = document.querySelector('p');
let message2 = document.querySelector("#para");

let nombre=1;


window.addEventListener('click', () => {
 
  if(nombre==5){
    message2.innerText = 'bravo';
  }
  
    message.innerText = 'clics numero + ' +nombre;
    console.log('onClickHandlerForBtn1::click');
    nombre++;



    
return;
  });

  

