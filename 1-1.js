"use strict"

// Crear una funcion que cada vez que se clickee un boton, cargue un nuevo elemento en un array.
let array = []
function cargarElemento(){
   array.push("elemento-" + array.length);
   console.log(array);
    return(array[array.length - 1]);
}