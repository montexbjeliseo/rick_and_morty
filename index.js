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
    let request = await fetch(url)
  .then(response => response.json())
  .then(data => {
    cargarPersonajes(data.results);
  });
}

function cargarPersonajes(lista_personajes){
    let lista = document.createElement("ul");

    lista_personajes.forEach(personaje => {
        let divPersonaje = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = personaje.image;

        let nombre = document.createElement("h1");
        nombre.innerText = personaje.name;

        let especie = document.createElement("p");
        especie.innerText = personaje.species;
        
        divPersonaje.appendChild(img);
        divPersonaje.appendChild(nombre);
        divPersonaje.appendChild(especie);

        app.appendChild(divPersonaje);

        divPersonaje.style.border = "1px solid black";
    });
}

requestData(apiUrl);