"use strict"

//Crear un programa que me permita cargar una lista de alumnos uno por uno. Cuando se desee, se debe poder mostrar la lista completa con un boton.

let alumnos = [];
function cargarAlumnos(){
    let alumno;
    while(alumno !== null){
        alumno = prompt("Ingrese nombre del alumno o presione 'Cancelar' para terminar");
        if(alumno){
            alumnos.push(alumno);
        }
    }
    return alumno;
}


function mostrarAlumnos(){
    if(alumnos.length){
        for(let alumno of alumnos){
            console.log(alumno);
        }
    }
    return alumnos;
}