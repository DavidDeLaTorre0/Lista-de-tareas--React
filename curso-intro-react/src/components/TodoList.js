import React from "react";
import "../css/TodoList.css";

function TodoList (props){
    return(
       <section>
            <ul className="TodoList">
                {/* Con esta super propiedad le estamos mandando esta lista    {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))} */}
                {props.children}
            </ul>
       </section>
    );
}

export { TodoList };