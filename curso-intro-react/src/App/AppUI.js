import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext/index';
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmpyTodos } from "../components/EmpyTodos";
//import './App.css';

//Elementos :
      //TodoCounter  //Contador de nuestros todos
      //TodoSearch  //Buscador de todos
      //TodoList //Lista de todos     
      //TodoItem //Dentor de esta lista de to dos vamos a ir poniendo los todos que vayan creardo los usuraios en nuestra aplicacion
      //CreateTodoButton  //Boton creado

      

//DATO: POR CADA COMPONENTE NO QUEREMOS CREAR UN DIV PARA ENVOLVER EL RESTO DE ELEMENTOS QUE TENEMOS QUE RENDERIZAR EN NUESTRO COMPONENTE Y ESTO PUEDE SER MALO ASI QUE:    
      //IMPORTAMOS REACT FROM REACT  
      //En vez de tener divs vamos a pedirle a react que nos renderice una etiqueta invisible, esta se llama React.Fragment, con F mayuscula porque recuerda que es un componente
      //¿Por que en vez de un div con todos los componentes tenemos que enviar esta etiqueta(Una etiqueta y todos los componentes dentro)?
      //Lo que pasa es que React, para sus calculos internos necesita que solo enviemos una etiqueta por componente, con esta etiqueta enviamos la cantidad que querramos
function AppUI(){
  //USE CONTEXT
    const { 
      error,
      loading, 
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal } = React.useContext(TodoContext);
    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
            <TodoList>
            {error && <TodosError error={<p>Fallido, hubo un error....</p>}/>}
            {loading && <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmpyTodos />}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

{/*             <p>teletransportacion</p>
            <p>{searchedTodos[0].text}</p>  */}
            {/*Por el estilo de css , tenemos el Modal ocupando toda la pagina, vamos a introducir el codigo en TodoContext para aplicarle un estado y que se ejecute/muestre cuano lo necesitemos, creamos un nuveo estado para nuestro Modal */}
            {/* La ? es para preguntar si existe el array searchedTodos antes de imprimir su propiedad texto */}
            {openModal && (
              <Modal>
                {/* Se cierra de esta forma porque no va a tener hijos ni nada */}
                <TodoForm />
              </Modal>
            )}
  
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
      </React.Fragment>

    );
}

export { AppUI };