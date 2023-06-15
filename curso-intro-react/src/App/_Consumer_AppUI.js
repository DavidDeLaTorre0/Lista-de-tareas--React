import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from "../TodoContext";
//import './App.css';

/*   MIRAR VIIDEO 15-16 */
      function AppUI(){
        //USE CONTEXT
        const value = React.useContext(TodoContext);
        return(
            <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
              {({ 
              error,
              loading, 
              searchedTodos,
              completeTodo,
              deleteTodo }) => (
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
                )}
              </TodoContext.Consumer>
        
              <CreateTodoButton />
            </React.Fragment>
      
          );
      }
      

export { AppUI };