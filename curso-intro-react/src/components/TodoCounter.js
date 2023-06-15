import React from 'react';
import "../css/TodoCounter.css" ; 
import { TodoContext } from '../TodoContext';
//CSS
//Si quiero darle estilo al h2 ya n hay que poner string con color:; ni background-color:; , etc.., PONE SE ENVIA CON LLAVES
//Ahora se pone de la sig forma: 

/*
const estilos = {
    color : "red",
    backgroudColor : "yellow",
    
};
*/

//Tambien se pueden introducir de a siguiente manera:
/*
function TodoCounter(){
    return (
        <h2 style={
            {
            color : "red",
            backgroudColor : "yellow",
            }
        }>Has completado 2 de 3 TODOs </h2>
    );
}
*/

//O llamar al estilo desde un archivo esterno css
function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs </h2>
    );
}


//Esto no se hace en default ya que nos podemos liar a la hora de llamarlo, por eso quitamos default, ya que a la hora de importarlo se le puede llamar de cualquier forma asi me obligo a escribirlo tal cual
//y desde donde se importe, hay que llamarlo igual que aqui con los handle bars
//export default TodoCounter;
export { TodoCounter };