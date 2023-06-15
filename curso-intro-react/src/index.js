import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

//Le estamos pasando los componentes que queremos renderizar, en este caso los comopnentes que se encuentran dentro de App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
); 




//FUNCIONA CASI IGUAL AL RENDER, PERO GUARDAMOS NUESTRO NUEVO COMPONENTE
//ESTO NO PODEMOS LLAMARLO AQUI EN EL COMPONENTE INDEX.JS, LO LLAMAMOS DESDE OTRO COMPONENTE "MODAL" (DENTRO DE NUESTRA APLICACON QUE YA ESTAMOS RENDERIZANDO NUESTRA APLICACION ) (DENTRO DEL CODIG DE ARRIBA)
/* ReactDOM.createPortal(
    <App />,
    document.getElementById('modal')
); */
