import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
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
function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
    }){
    return(
        <React.Fragment>
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos} 
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue = {setSearchValue}
        />
  
        <TodoList>
          {error && <p>Fallido, hubo un error....</p>}
          {loading && <p>Estamos cargando, preparando la app...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
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
  
        <CreateTodoButton />
      </React.Fragment>

    );
}

export { AppUI };