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

try {
// Petición POST con manejo de errores
const newContent = { name, content };
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