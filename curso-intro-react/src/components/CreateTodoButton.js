import React from "react";
import "../css/CreateTodoButton.css";


//  REACT PORTALS  ---  Nos permiten teletransportar componentes 
//En nuestro index.js, estamos llamando a Reactdom.Render y estamos diciendole que renderice en nuestro componente App toda nuestra aplicacion, en un nodo de html(<div id="root"></div>)
// Pero puede ser el id que nosotros queramos, eso significa que react esta renderizando todos nuestro coponentes con su estado y sus props y todo lo que quieras dentro de ese nodo, de ese div con idroot con idapp con el que quieras
//Lo interesante de los portales es que nos permiten teletransportar a otro nodo distinto nuestros componentes , a otro nodo distinto en html 
//Podemos renderizar nuestro coponentes de react en otro nodo y esto es muy bueno para css, para hacer modales y podemos comunicarlos, a pesar de que mi componente hermano no este en el mismo nodo que yo 
//,si no ,que esta en otro, gracias a los portales yo voy a poder seguir hablando con el, poder enviarle propiedades, notificarle cambios en el estado, incluso él va a poder enviarme cambios de estado a mi,
//NOS PODEMOS COMUNICAR COMO SI FUERAMOS COMPONENTES EN EL MISMO NODO

//VAMOS A CREAR UN MODAL (añadir un TODO)
function CreateTodoButton(props){
    const onClickButton = () =>{
        //TODOS LOS ACTUALIZADORES DE ESTADO SETLOQUESEA NOS PERMITEN HACER DOS COSAS, ASIGNARLE EL ESTADO, O ENVIARLE UNA FUNCION
        //Esta funcion nos devuelve el estado anterior a nuestra actualizacion, es decir, si nuestro modal esta abierto prevState va a ser true, pero si nuestro modal esta cerrado sera false 
       props.setOpenModal (prevState => !prevState);
    };

    
    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };