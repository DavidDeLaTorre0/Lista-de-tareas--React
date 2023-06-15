import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
//Le estamos pasando los componentes que queremos renderizar, en este caso los comopnentes que se encuentran dentro de App.js



//haciendo esto podemos recoger el valor dentro de la funcion App, con la propiedad .children
root.render(
    <App saludo="Holi">
        <h1>
          Esto es un titulo
        </h1>
    </App>
);


/*
root.render(
    <App>
      Buenaaas
    </App>
);

*/


/*  Saludo es una propiedad, las envia a la funcion App
root.render(
    <App  saludo ="Hola"/>
);
*/

