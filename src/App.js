// Importación de paquetes
import React from 'react';
import './App.css';

// Agregamos los componentes que diseñamos previamente
import ContentList from './componentes/contentList';
import AddContent from './componentes/addContent';

function App() {
// En nuestro sector JSX, agregamos los componentes que importamos.
return (
<div className="App">
<h1>Esta API se conecta a una API de peliculas y aleatoriamente te sugiere una</h1>
<AddContent />
<ContentList />
</div>
);
}

export default App;
