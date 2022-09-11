"use strict"

//Crear una funcion que dado un array ya lleno, copie la mitad del array en uno nuevo. Ejemplo:

let array = [1, "dos", "3", {tamaño:"4"}];

function partirArray(){
    let division = array.length / 2;
    let array2 = array.slice(0, division);
    console.log(array2);
    return array2;
}