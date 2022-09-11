"use strict"

//Crear una funcion que, a partir de un array numerico, encuentre cual es el valor minimo dentro de este y lo devuelva.


let array = [10, 50, 3, -27, 500, 43, -18, 475, 631, 2000, -11, 39];

function mostrarMinimo(){
    let division = array.length / 2;
    let array2 = Math.min(...array);
    console.log(array2);
    return array2;
}