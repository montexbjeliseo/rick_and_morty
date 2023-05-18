/*
1. consumir https://rickandmortyapi.com/
2. Mostrar:
   - Foto
   - Nombre
   - Especie
*/

let app = document.getElementById("app");

let apiUrl = "https://rickandmortyapi.com/api/character";

async function requestData(url){
    return await fetch(url)
  .then(response => response.json())
  .then(data => {
    return data.results;
  });
}

async function cargarPersonajes(){
    
    let lista_personajes = await requestData(apiUrl);

    lista_personajes.forEach(personaje => {
        let divPersonaje = document.createElement("div");
        divPersonaje.classList.add("personaje-container");
        
        let img = document.createElement("img");
        img.src = personaje.image;

        let nombre = document.createElement("h2");
        let textoNombre = document.createTextNode(personaje.name);
        nombre.appendChild(textoNombre);

        let especie = document.createElement("p");
        let textoEspecie = document.createTextNode(personaje.species);
        especie.appendChild(textoEspecie);

        let botonEliminar = document.createElement("button");
        let textoEliminar = document.createTextNode("Eliminar");
        botonEliminar.appendChild(textoEliminar);
        botonEliminar.addEventListener('click', onclickEliminar);
        

        // Agregar los elementos al contenedor del personaje
        divPersonaje.appendChild(img);
        divPersonaje.appendChild(nombre);
        divPersonaje.appendChild(especie);
        divPersonaje.appendChild(botonEliminar);

        app.appendChild(divPersonaje);
    });
}

function onclickEliminar(event){
  // Nodo del personaje
  let personaje_container = event.target.parentNode;
  app.removeChild(personaje_container);
}

cargarPersonajes();