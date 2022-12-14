"use strict";
/*004searchElements.html/.js:Aquí está el documento con la tabla y el formulario.
¿Cómo encontrar?...*/

//La tabla con id="age-table"
let tabla = document.getElementById("age-table");

//Todos los elementos label dentro de la tabla (debería haber 3)
let label = document.querySelectorAll("table label"); //Con All, todas las label que encuentre en la tabla

//El primer td en la tabla (con la palabra “Age”)
let tdAge = document.querySelector("table td"); //Si no ponemos ALL nos da el primero que encuentre

//El form con name="search"
let formSearch = document.querySelector("form[name = 'search'");

// El primer input en ese formulario
let primerInput = formSearch.querySelector("input"); //Buscamos dentro del elemento que hemos creado
primerInput.classList.add("blue"); //probamos

// El último input en ese formulario
let ultimoInput = document.querySelector("form > input:last-child"); //tenemos que añadir > para indicar que es hijo directo (sino coge el anterior)
ultimoInput.classList.add("red"); //probamos

// Abra la página index.html en una ventana separada y haga uso de las herramientas del navegador
