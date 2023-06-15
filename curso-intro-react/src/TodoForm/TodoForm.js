import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
import { FiArrowDownCircle } from 'react-icons/fi'
function TodoForm(){
    // Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] = React.useState();
    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const {
        //Crea el puente al metodo que hay en TodoContext para crear Todos
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    // Función para cerrar el modal
    const onCancel = () =>{
        setOpenModal(false);
    };

// Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        //Este metodo por defecto nos ayuda a que cuando el formulario se envie, no se recargue la pagina, si no que se cancele la recarga, 
        event.preventDefault();
         // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label><FiArrowDownCircle size="30px" color="#000000"/>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    );

}

export { TodoForm };