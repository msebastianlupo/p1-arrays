"use strict"

//4- Crear un programa que me permita cargar un producto y su precio. Cuando termine de cargar todo, debe haber un boton que al clickearlo, muestre la lista de compra con el formato:

let catalogo = [];
function cargarProducto(){
    let producto = prompt("Ingrese un producto");
    if(producto){
        producto = producto.toLowerCase();
        let precio = parseFloat(prompt("Ingrese el precio del producto " + producto));
        if(!isNaN(precio) && precio > 0){
            catalogo.push({producto:producto, precio:precio});
        }else{
            alert("Precio debe ser mayor que 0");
        }
    }else{
        alert("El nombre del producto es inválido");
    }
    return catalogo;
}

function mostrarCatalogo(){
    if(catalogo.length){
        for(let item of catalogo){
            console.log(`Producto: ${item.producto} - Precio: ${item.precio}`);
        }
    }
}