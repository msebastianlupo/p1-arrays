"use strict"

//Crear un programa que permita cargar un alumno y las materias que curso. Luego, con otro boton, mostrar la lista completa de materias.


let persona = {alumno:"", materias:[]};
function cargarMaterias(){
    let nombre;
    let materia;
    while(!nombre){
        nombre = prompt("Ingrese nombre del alumno");
    }
    persona.alumno = nombre;
    while(materia !== null){
        materia = prompt("Ingrese una materia o presione 'Cancelar' para terminar");
        if(materia){
            persona.materias.push(materia);
        }
    }
    return nombre;
}


function mostrarMaterias(){
    if(persona.materias.length){
        console.log(`El alumno ${persona.alumno} cursó las siguientes materias:`);
        for(let materia of persona.materias){
            console.log(materia);
        }
    }else{
        alert("Sin datos");
    }
    return persona.materias;
}