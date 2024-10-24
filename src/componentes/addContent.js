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
let movieId = Math.floor(Math.random() * 100) + 1;
//const respuesta = axios.get(url)
const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-MX`);
const datos = await respuesta.json();
const pelicula = datos.title;  
  
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
