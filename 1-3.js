"use strict"

//Crear una funcion que dado un array ya lleno de la dimension que sea, cree un nuevo array con el contenido invertido y lo devuelva. Ejemplo:

let array = [1, "dos", "3", {tamaño:"4"}];

function invertirArray(){
    let array2 = array.reverse();
    console.log(array2);
    return array2;
}