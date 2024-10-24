// Importación de paquetes
import React, { useState } from 'react';
import axios from 'axios';

const AddContent = () => {
//
const [name, setName] = useState('');
const [content, setContent] = useState('');

// Formulario para hacer nuestra petición POST
const handleSubmit = async (event) => {
event.preventDefault();

const apiKey = '0b1e10d3dda488ebb64caeb5e1873d8c'; 
let movieId = Math.floor(Math.random() * 10000) + 1;
//const respuesta = axios.get(url)
try {
  const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-MX`);
  //if(respuesta.status === 200){
    const datos = await respuesta.json();
    const pelicula = datos.title;  
  /*} else if(respuesta.status === 401){
      console.log('API_key incorrecta');
  } else if(respuesta.status === 404){
      console.log('La película que buscas no existe')
  } else {
      console.log('Error desconocido')
  } */
} catch(error){
    console.log(error);
}
  
try {
// Petición POST con manejo de errores
const newContent = { name, content, pelicula };
await axios.post('https://server-mern-qkc5.onrender.com/content', newContent);
setName('');
setContent('');
alert('Contenido agregado de forma exitosa.');
} catch (error) {
console.error('Error al agregar contenido', error);
}
};

return (
// Sector de JSX
<div>
<h1>Agregar nueva instancia de contenido</h1>
<form onSubmit={handleSubmit}>
<div>
<label>Nombre:</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</div>
<div>
<label>Contenido:</label>
<input
type="string"
value={content}
onChange={(e) => setContent(e.target.value)}
required
/>
</div>
<button type="submit">Agregar contenido</button>
</form>
</div>
);
};

export default AddContent;
