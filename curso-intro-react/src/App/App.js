import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext/index';

//import './App.css';
//Cuando queramos usar un componente lo llamamos con import


  function App() {

    /* Se lo vamos a enviar a nuestro componente TodoSearch los valores 
    searchValue = searchValue (nuestro estado en ese momento)
    setSearchValue = setSearchValue (estafuncion para actualizar nuestro estado)
     */

    return (
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    );
  }

// A la hora de recoger los datos dentro de la lista definimos que recibimos una propiedad text y recogemos la variable en la que sabeos que va a estar "todo.text"
//Cuando hacemos un render de una lista (en la linea 38  llamando al metodo .map del array de todos y renderizando un todo por cada uno de los todos que hay en nuestro array de todos), cuando se hace este tipo de cosas de renderizar un elemento en una lista tenemos que enviarle una propiedad especial que se llama key a nuestros componentes esto es para que react pueda identificar cual componenete es  cual dentro de una lista y asi nos evite render inecesarios cunado un elemento no debe cambiar (esto son cosas de react internas) pero es muy sencillo solucionar : 
//Solo tenemos que enviarle un identificador a cada uno  de los componentes , y si vemos nuestro array, lo unico que es diferente en cada uno de los todos es el texto, no vamos a tener dos todos con el mismo texto, así que como id unnico le enviamos la misma popiedad = todo.text  
//De esta forma definimos la estructura de componentes
export default App; 
