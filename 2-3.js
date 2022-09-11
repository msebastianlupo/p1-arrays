"use strict"

//Con el programa anterior, agregar la posibilidad de cargar la nota final de cada materia y mostrar con un boton todo con el formato: `${materia} - Nota: ${nota}`:



let persona = {alumno:"", materias:[]};
function cargarMaterias(){
    let nombre;
    let materia;
    while(!nombre){
        nombre = prompt("Ingrese nombre del alumno");
    }
    nombre = nombre.toLowerCase();
    persona.alumno = nombre;
    while(materia !== null){
        materia = prompt("Ingrese una materia o presione 'Cancelar' para terminar");
        if(materia){
            materia = materia.toLowerCase();
            persona.materias.push({mt:materia});
        }
    }
    return nombre;
}


function cargarNotas(){
    let materia = prompt("Ingrese la materia a la que asignará la nota");
    if(materia){
        materia = materia.toLowerCase();
        let nota = parseFloat(prompt("ingrese la nota"));
        if(nota >= 1 && nota <= 10){
            let existe = false;
            for(let num in persona.materias){
                if(persona.materias[num].mt === materia){
                    existe = true;
                    persona.materias[num].nt = nota;
                    break;
                }
            }
            if(!existe){
                alert("La materia no existe");
            }
        }else{
            alert("Nota ingresada es inválida");
        }
    }else{
        alert("Dato inválido");
    }
}


function mostrarMaterias(){
    if(persona.materias.length){
        console.log(`El alumno ${persona.alumno} cursó las siguientes materias:`);
        for(let materia of persona.materias){
            console.log(`${materia.mt} - Nota: ${materia.nt}`);
        }
    }else{
        alert("Sin datos");
    }
    return persona.materias;
}