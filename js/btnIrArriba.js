function IrArriba(pxPantalla){
     window.addEventListener('scroll',()=>{
     var scroll=document.documentElement.scrollTop;
     var botonA=document.getElementById('botonA');
     
     if(scroll>pxPantalla){
         botonA.style.right=20+'px';
     }else{
         botonA.style.right=-100+'px';
     }
     })
 }
 IrArriba(700);