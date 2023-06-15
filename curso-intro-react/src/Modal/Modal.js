import React from 'react';
import ReactDOM from 'react-dom';
import  './Modal.css';
//Creamos el componente
    //A la hora de devolver, llamamos a ReacDom.createPortal, y le enviamos lo que queramos, parrafo, divs, importar componentes y enviarselos aqui
    //Pero lo que vamos a hacer es que nuestro componente Modal no va directamente  a devolver a mostrar a enviar por ese portal a algo en especifico,
    // si no que este compoete modal, nos va a permitir ser reutilizado para enviar lo que queramos que sea utilizadoa nuestro modal , de esta forma podemos enviar un formulario una alerta de erro, lo ue queramos
    //para eso lo que vamos ha hacer es que cunaod llamemos a nuestro componente Modal vamos a enviarle algun hijo, vamos a enviarle algun contenido, y eso lo hacemos con la propiedad children
    // eso significa que vamos a enviar a props.children a nuestro portal y por suspuesto necesitamos el segundo argumento de esta funcion createPortal, que es el node html, que es donde vamos a enviar a nuestro hijo de nuestro componente modal
function Modal({ children }){


    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>
        ,
        document.getElementById('modal')
    );
}
export { Modal };