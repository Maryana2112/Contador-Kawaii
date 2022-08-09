/* Requerimientos: 
1.  El contador hace tres cosas
2.  Incrementar de uno en uno
3.  Decrementar de uno en uno
4.  Necesitamos iniciar en 0
*/

var valorContador = 0;  //Iniciamos nuestra variable en 0

function inc(){
    valorContador++;    //Incrementar de 1 en 1
    document.getElementById("contador").innerHTML=valorContador;
}

function dec(){
    valorContador--;    //Decrementar de 1 en 1 
    document.getElementById("contador").innerHTML=valorContador;
}

function res(){
    valorContador=0;    //Decrementar de 1 en 1 
    document.getElementById("contador").innerHTML=valorContador;
}
