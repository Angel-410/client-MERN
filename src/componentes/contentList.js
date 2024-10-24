// Importación de paquetes
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContentList = () => {
//Declaración de variables de estado y su método para ser llamadas
const [contents, setContents] = useState([]);

// Solicitamos los contenidos a nuestro servidor de Express
useEffect(() => {
const fetchContents = async () => {
try {
const response = await axios.get('https://server-mern-qkc5.onrender.com/content');
setContents(response.data);
} catch (error) {
console.error('Error al obtener la lista de contenidos', error);
}
};
fetchContents();
}, []);

return (
<div>
<h1>Los contenidos son los siguientes</h1>
<ul>
{contents.map((content) => (
<li key={content._id}>{content.name} (Content: {content.content}) y hoy puedes ver la siguiente película: {pelicula.content}</li>
))}
</ul>
</div>
);
};

export default ContentList
