//Si quieres importar todo React para usar useState
import React from "react";
//Si quieres importar unicamente useState
/* import { useState } from 'react'; */
import "../css/TodoItem.css";
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';


function TodoItem (props){
/*     const onComplete = () => {
        alert("Ya completaste el todo "+ props.text);
    } */
/*     const onDelete = () => {
        alert("Borraste el todo "+ props.text);
    } */
    return(

/*      Una de las grandes ventajas de React, es que podemos utilizar los lógicos && y || 
        para jugar con nuestras clases muy fácilmente, y dar estilos dependiendo de la clase que esté activa, esto lo aplicamos cuando está completado o no nuestro TODO. */
        <li className="TodoItem" key={props.text}>
           {/*  si props.complete es true entonces vamos a agregar esta nueva clase 'Icon-check--active'/ CONCATENAMOS ESTE TEXTO A NUESTRS CLASES  */} 
            <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
            />
              {/*  si props.complete es true entonces vamos a agregar esta nueva clase 'TodoItem-p--complete'/ CONCATENAMOS ESTE TEXTO A NUESTRS CLASES  */} 
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>

    );
}

export { TodoItem };