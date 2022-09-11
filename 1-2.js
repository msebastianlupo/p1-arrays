"use strict"

//Crear una funcion que al clickear un boton, pida el largo de un array y lo cree llenando todas sus posiciones con `null`.
function pedirLargo(){
    let numero = parseInt(prompt("Elija el largo del array"));
    if(numero || numero > 0){
        let array = [];
        for(let num = 0; num < numero; num++){
            array[num] = null;
        }
        console.log(array);
        return array.length;
    }else{
        alert("Largo menor a 1 o dato incorrecto");
        return -1;
    }
}