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
<h1>Mi primera app de MERN que consume una API</h1>
<AddContent />
<ContentList />
</div>
);
}

export default App;
